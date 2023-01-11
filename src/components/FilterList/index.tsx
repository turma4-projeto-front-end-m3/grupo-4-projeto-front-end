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
            <FilterBtn key={categories.findIndex((element) => element === category)} onClick={() => 
                {category === "Todos"? setFilter("") : setFilter(category)}}>
                {category}
            </FilterBtn>)}
        </FiltersContainer>
    )
}