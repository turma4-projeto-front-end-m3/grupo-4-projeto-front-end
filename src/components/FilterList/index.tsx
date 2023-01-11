import { FilterBtn } from "../../styles/FilterButton"
import { FiltersContainer } from "./styles";

interface iFilterListProps {
    categories: string[];
    setFilter: React.Dispatch<React.SetStateAction<string>>
}
export const FilterList = ({categories, setFilter} : iFilterListProps) => {
    return (
        <FiltersContainer>
        {categories.map((category) => 
            <FilterBtn key={category.length - 1} onClick={() => 
                {category === "Todos"? setFilter("") : setFilter(category)}}>
                {category}
            </FilterBtn>)}
        </FiltersContainer>
    )
}