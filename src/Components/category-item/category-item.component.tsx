// Styles
import {CategoryItemContainer, CategoryName} from './category.styles'

// Utilities
import Category from "../../types/category.types";
import { FunctionComponent } from "react";
import { useNavigate } from 'react-router-dom';


interface CategoryItemProps {
    category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({category}) => {
    const navigate = useNavigate()

    const handleExploreClick = () => {
        navigate(`/category/${category.id}`)
    }
    return ( 
        <CategoryItemContainer style={{ backgroundImage: `url('${category.imageUrl}')` }}>
            <CategoryName onClick={handleExploreClick}>
            <p>{category.displayName}</p>
                <p>Explorar</p>
            </CategoryName>
        </CategoryItemContainer>
        
     );
}
 
export default CategoryItem;