import { BoxWrapper, DescriptionWrapper, InfoWrapper, LogoWrapper } from "./styles";
import Image from "next/image";
import { useState } from "react";

import noCompanyLogo from '@/assets/company-svgrepo-com.svg'

interface JobBoxProps {
  jobTitle: string,
  companyName: string,
  companyLogo?: string,
  jobDescription: string,
}

export default function JobBox({jobTitle, companyName, companyLogo, jobDescription}: JobBoxProps) {
  return (
    <BoxWrapper>
      <LogoWrapper>
        <Image src={companyLogo || noCompanyLogo} width={120} height={120} alt="" />
      </LogoWrapper>
      <InfoWrapper>
        <h3>{jobTitle}</h3>
        <h4>{companyName}</h4>
      </InfoWrapper>
      
      <DescriptionWrapper dangerouslySetInnerHTML={{__html: jobDescription}} />
    </BoxWrapper>
  )
}