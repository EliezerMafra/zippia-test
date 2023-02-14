import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  width: 100%;
`

export const Header = styled.header`
  display: flex;
  justify-content: center;

  background-color: ${(props) => props.theme['strong-grey']};
  padding: 2rem 0;
  width: 100%;
  margin: 0 auto;
`

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: smaller;

  margin-top: 2rem;


  width: 100%;
  height: 5rem;
  background-color: ${(props) => props.theme['strong-grey']};
  color: ${(props) => props.theme['white']};


`