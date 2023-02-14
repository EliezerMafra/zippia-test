import styled from "styled-components";


export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0rem;
  width: 50%;

  align-items: center;
`

export const FilterButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
  margin-top: 1rem;
`

export const FilterButton = styled.button`
  height: 3rem;
  width: 9rem;
  border: 1px solid ${(props) => props.theme['light-blue']};
  border-radius: 8px;
  
  background-color: ${(props) => props.theme['white']};
  color: ${(props) => props.theme['strong-grey']};
  cursor: pointer;

  :hover{
    background-color: ${(props) => props.theme['hover-blue']};
  }
`