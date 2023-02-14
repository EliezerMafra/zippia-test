import Image from "next/image";
import styled from "styled-components";

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;

  width: calc(100vw - 50rem);
  min-width: 18rem;
  height: 10rem;

  border-radius: 8px;

  border: 1px solid ${(props) => props.theme['light-blue']};
  
  :hover{
    background-color: ${props => props.theme['hover-blue']};
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  border: 1px solid ${(props) => props.theme['light-blue']};
  border-radius: 99999px;
	overflow: hidden;
`

export const CompanyLogo = styled(Image)`
  object-fit: cover;
`

export const InfoWrapper = styled.div`
  
`
export const DescriptionWrapper = styled.div`
  max-width: 40rem;
`