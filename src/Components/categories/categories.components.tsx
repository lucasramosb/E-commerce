//Styles
import { CategoriesContainer, CategoriesContent } from './categories.styles'

// Utilities
import { useEffect, useContext } from 'react';
import CategoryItem from '../category-item/category-item.component';
import { CategoryContext } from '../../contexts/categories.context';
import Loading from '../loading/loading.components';

const Categories = () => {
    
    const  { categories, fetchCategories, isLoading } = useContext(CategoryContext)

    useEffect(() => {
        fetchCategories()
    }, [])

    return (  

        <CategoriesContainer>
            {isLoading && <Loading/>}
            <CategoriesContent>
                {categories.map((category) => (
                    <div>
                        <CategoryItem category={category}/>
                    </div>
                ))}
            </CategoriesContent>
        </CategoriesContainer>
    ); 
}
 
export default Categories;