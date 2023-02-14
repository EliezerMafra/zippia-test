import { FilterButton, FilterButtonsWrapper, FilterWrapper } from "./styles";

export interface Filter {
  name: string,
  isActive: boolean,
  onApply: () => void
}

interface FilterSelectorProps {
  filters: Filter[]
}

export default function FilterSelector({ filters } : FilterSelectorProps) {
  return (
    <FilterWrapper>
      <span>Filter by</span>
      <FilterButtonsWrapper>
        {
          filters.map((filter) => {
            return(
              <FilterButton 
                key={filter.name}
                onClick={filter.onApply}
                isActive={filter.isActive}
              >
                {filter.name}
              </FilterButton>
            )
          })
        }
      </FilterButtonsWrapper>
    </FilterWrapper>
  )
}