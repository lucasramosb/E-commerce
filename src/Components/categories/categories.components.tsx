import { useEffect, useState } from 'react';
import axios from 'axios';

// Utilities
import Category from '../../Types/category.types';
import env from '../../config/env.config';

//Styles
import './categories.styles.css'
import CategoryItem from '../category-item/category-item.component';

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
        <div className="categories-container">
            <div className="categories-content">
                {categories.map((category) => (
                    <div>
                        <CategoryItem category={category}/>
                    </div>
                ))}
            </div>
        </div>
    ); 
}
 
export default Categories;