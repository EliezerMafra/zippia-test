import { BoxWrapper, DescriptionWrapper, InfoWrapper, LogoWrapper } from "./styles";
import templateLogo from '@/assets/template_logo.jpeg'
import Image from "next/image";

export default function JobBox() {
  return (
    <BoxWrapper>
      <LogoWrapper>
        <Image src={templateLogo} width={120} height={120} alt="" />
      </LogoWrapper>
      <InfoWrapper>
        <h3>Job Title</h3>
        <h4>Company Name</h4>
      </InfoWrapper>
      
      <DescriptionWrapper>
        Job Description
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi dicta amet cumque consectetur enim, inventore minima quia magni blanditiis soluta sunt nobis. Animi placeat, veritatis odit magnam suscipit nobis cupiditate. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi dicta amet cumque consectetur enim, inventore minima quia magni blanditiis soluta sunt nobis. Animi placeat, veritatis odit magnam suscipit nobis cupiditate.
      </DescriptionWrapper>
    </BoxWrapper>
  )
}