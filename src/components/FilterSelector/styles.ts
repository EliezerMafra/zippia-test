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
  gap: 1rem;
  justify-content: space-around;
  margin-top: 1rem;
`
interface ButtonProps {
  isActive: boolean
}

export const FilterButton = styled.button<ButtonProps>`
  height: 3rem;
  width: 9rem;
  border: 1px solid ${(props) => props.theme['light-blue']};
  border-radius: 8px;
  
  background-color: ${(props) => 
    props.isActive? props.theme['brand-blue'] : props.theme['white']
  };
  color: ${(props) => 
    props.isActive? props.theme['white'] : props.theme['strong-grey']
  };
  cursor: pointer;

  :hover{
    background-color: ${(props) => 
    props.isActive? props.theme['strong-hover-blue'] : props.theme['light-hover-blue']
  };
  }
`