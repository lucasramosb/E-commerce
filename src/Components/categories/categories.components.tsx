import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryItem from '../category-item/category-item.component';

// Utilities
import Category from '../../Types/category.types';
import env from '../../config/env.config';

//Styles
import { CategoriesContainer, CategoriesContent } from './categories.styles'

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]) 

    const fetchCategories = async () => {
        try{
            const { data } = await axios.get(`${env.apiUrl}/api/category`)
            console.log(data)
            setCategories(data)
        }catch(error) {
            console.log({error})
        }
    };

    useEffect(() => {
        fetchCategories()
    }, [])

    return (  

        <CategoriesContainer>
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