import Image from "next/image";
import styled from "styled-components";

export const BoxWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  margin: 0 10rem;
  min-width: 10rem;
  max-width: 70rem;
  height: 15rem;
  width: 60%;

  border-radius: 16px;

  border: 1px solid ${(props) => props.theme['light-blue']};
  
  :hover{
    background-color: ${props => props.theme['light-hover-blue']};
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
    width: 90%;
    height: fit-content;
    justify-content: center;
    padding: 1rem;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

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
  text-align: center;
  width: 15rem;

  @media (max-width: 768px) {
    width: 60%;
    margin: 0 0.5rem;
  }
`
export const DescriptionWrapper = styled.div`
  width: 80%;
  height: 100%;
  overflow: auto;
  
  @media (max-width: 768px) {
    display: none;
  }
`