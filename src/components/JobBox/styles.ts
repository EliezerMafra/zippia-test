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

  border-radius: 16px;

  border: 1px solid ${(props) => props.theme['light-blue']};
  
  :hover{
    background-color: ${props => props.theme['light-hover-blue']};
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0 2rem;
  width: 10rem;
  text-align: center;
`
export const DescriptionWrapper = styled.div`
  width: 40rem;
  height: 8rem;
  overflow: auto;
`