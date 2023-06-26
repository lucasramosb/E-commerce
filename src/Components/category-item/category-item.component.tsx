import { FunctionComponent } from "react";
import Category from "../../Types/category.types";
import './category-styles.css'

interface CategoryItemProps {
    category: Category
}

const CategoryItem: FunctionComponent<CategoryItemProps> = ({category}) => {
    return ( 
        <div className="category-item-container" style={{ backgroundImage: `url('${category.imageUrl}')` }}>
            <div className="category-name">
                <p>{category.displayName}</p>
                <p>Explorar</p>
            </div>
        </div>
     );
}
 
export default CategoryItem;