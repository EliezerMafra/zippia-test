import FilterSelector, { Filter } from "@/components/FilterSelector";
import JobBox from "@/components/JobBox";
import { api } from "@/services/apiClient";
import { Container, Footer, Header, ResultsWrapper } from "@/styles/pages/test/jobs";
import { GetStaticProps } from "next";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import zippiaLogo from '../../assets/logo.png'

interface Job {
  jobTitle: string,
  companyName: string,
  companyLogo?: string,
  jobDescription: string,
  postingDate: Date
}

interface HomeProps {
  jobs: Job[]
}

export default function Home({ jobs }: HomeProps) {
  const [companyNameFilter, setCompanyNameFilter] = useState<Filter>({ name: 'Company Name', isActive: false, onApply: () => { handleOnFilterClick('Company Name') } })
  const [sevenDaysFilter, setSevenDaysFilter] = useState<Filter>({ name: 'Last 7 days', isActive: false, onApply: () => { handleOnFilterClick('Last 7 days') } })
  const [shownJobs, setShownJobs] = useState<Job[]>([])

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

  const handleShownJobs = useCallback(() => {
    if (companyNameFilter.isActive) {
      setShownJobs(
        [...jobs].sort(function (a, b) {
          var textA = a.companyName.toUpperCase();
          var textB = b.companyName.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        }).slice(0, 10)
      )
      return
    }

    if (sevenDaysFilter.isActive) {
      setShownJobs(
        jobs.filter((job) => {
          return (((new Date().getTime() - new Date(job.postingDate).getTime()) / (86400000)) <= 7)
        })
      )
      return
    }

    setShownJobs(jobs.slice(0, 10))
  }, [companyNameFilter, jobs, sevenDaysFilter])

  useEffect(() => {
    handleShownJobs()
  }, [handleShownJobs]
  )

  return (
    <Container>
      <Header>
        <Image src={zippiaLogo} width={160} height={36} alt={""} />
      </Header>
      <FilterSelector
        filters={filters}
      />
      <ResultsWrapper>
        {shownJobs!.map((job) => {
          return (
            <JobBox
              key={job.companyName + job.jobTitle}
              companyName={job.companyName}
              companyLogo={job.companyLogo}
              jobTitle={job.jobTitle}
              jobDescription={job.jobDescription}
            />
          )
        })}
      </ResultsWrapper>
      <Footer>
        By Eliezer Mafra
      </Footer>
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

  const jobs: Job[] = response.data.jobs.map((job: any) => {
    return {
      jobTitle: job.jobTitle,
      companyName: job.companyName,
      companyLogo: job.companyLogo || null,
      jobDescription: job.jobDescription,
      postingDate: job.postingDate
    }
  })

  return {
    props: {
      jobs: jobs
    },
    revalidate: 3600, // 2 hours
  }
}
