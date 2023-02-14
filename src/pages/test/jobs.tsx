import FilterSelector from "@/components/FilterSelector";
import JobBox from "@/components/JobBox";
import { Container, Header, ResultsWrapper } from "@/styles/pages/test/jobs";
import Image from "next/image";

import testImage from '../../assets/logo.png'

export default function Home() {



  return (
    <Container>
      <Header>
        <Image src={testImage} width={160} height={36} alt={""} />
      </Header>  
      <FilterSelector />
      <ResultsWrapper>
        <JobBox />
        <JobBox />
        <JobBox />
      </ResultsWrapper>
    </Container>
  )
}
