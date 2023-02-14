import { FilterButton, FilterButtonsWrapper, FilterWrapper } from "./styles";

export default function FilterSelector() {
  return (
    <FilterWrapper>
      <span>Filter by</span>
      <FilterButtonsWrapper>
        <FilterButton>Company name</FilterButton>
        <FilterButton>Last 7 days</FilterButton>
      </FilterButtonsWrapper>
    </FilterWrapper>
  )
}