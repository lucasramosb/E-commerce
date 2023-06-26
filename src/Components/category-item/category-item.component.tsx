import { FunctionComponent } from "react";
import Category from "../../Types/category.types";
import './category.item.css'

interface CategoryItemProps {
    category: Category
}

const CategotyItem: FunctionComponent<CategoryItemProps> = ({category}) => {
    return ( 
        <div className="category-item-container" style={{ backgroundImage: category.imageUrl }}>
            <div className="category-name">
                <p>{category.displayName}</p>
                <p>Explorar</p>
            </div>
        </div>
     );
}
 
export default CategotyItem;