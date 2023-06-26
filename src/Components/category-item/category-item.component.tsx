import { FunctionComponent } from "react";

// Utilities
import Category from "../../Types/category.types";

// Styles
import {CategoryItemContainer, CategoryName} from './category.styles'

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