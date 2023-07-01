// Styles
import {CategoryItemContainer, CategoryName} from './category.styles'

// Utilities
import Category from "../../types/category.types";
import { FunctionComponent } from "react";


interface CategoryItemProps {
    category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({category}) => {
    return ( 
        <CategoryItemContainer style={{ backgroundImage: `url('${category.imageUrl}')` }}>
            <CategoryName>
            <p>{category.displayName}</p>
                <p>Explorar</p>
            </CategoryName>
        </CategoryItemContainer>
        
     );
}
 
export default CategoryItem;