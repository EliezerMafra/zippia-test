import FilterSelector, { Filter } from "@/components/FilterSelector";
import JobBox from "@/components/JobBox";
import { api } from "@/services/apiClient";
import { Container, Header, ResultsWrapper } from "@/styles/pages/test/jobs";
import { GetStaticProps } from "next";
import Image from "next/image";
import { useState } from "react";

import testImage from '../../assets/logo.png'

interface HomeProps {
  jobs:   {
    "jobTitle": string,
    "companyName": string,
    "companyLogo": string,
    "jobDescription": string,
  }[]
}

export default function Home({ jobs } : HomeProps) {
  const [companyNameFilter, setCompanyNameFilter] = useState<Filter>({ name: 'Company Name', isActive: false, onApply: () => { handleOnFilterClick('Company Name') } })
  const [sevenDaysFilter, setSevenDaysFilter] = useState<Filter>({ name: 'Last 7 days', isActive: false, onApply: () => { handleOnFilterClick('Last 7 days') } })

  const handleOnFilterClick = (filterName: string) => {
    if (filterName === 'Company Name') {
      setSevenDaysFilter(state => {
        return {
          ...state,
          isActive: false,
        }
      })
      setCompanyNameFilter(state => {
        return {
          ...state,
          isActive: !state.isActive,
        }
      })
    }
    if (filterName === 'Last 7 days') {
      setCompanyNameFilter(state => {
        return {
          ...state,
          isActive: false,
        }
      })
      setSevenDaysFilter(state => {
        return {
          ...state,
          isActive: !state.isActive,
        }
      })
    }

  }

  const filters = [companyNameFilter, sevenDaysFilter]

  return (
    <Container>
      <Header>
        <Image src={testImage} width={160} height={36} alt={""} />
      </Header>
      <FilterSelector
        filters={filters}
      />
      <ResultsWrapper>
        <JobBox />
        <JobBox />
        <JobBox />
      </ResultsWrapper>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await api.post('/', {
      "companySkills": true,
      "dismissedListingHashes": [],
      "fetchJobDesc": true,
      "jobTitle": "Business Analyst",
      "locations": [],
      "numJobs": 20,
      "previousListingHashes": []
    })


  const jobs = response.data.map((job: any) => {
    return {
      jobTitle: job.jobTitle,
      companyName: job.companyName,
      companyLogo: job.companyLogo,
      jobDescription: job.jobDescription,
    }
  })

  return {
    props: {
      jobs
    },
    revalidate: 3600, // 2 hours
  }
}
