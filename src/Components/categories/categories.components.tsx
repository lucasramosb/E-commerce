import { useEffect, useState } from 'react';
import CategoryItem from '../category-item/category-item.component';
import { getDocs, collection } from 'firebase/firestore';

// Utilities
import Category from '../../Types/category.types';

//Styles
import { CategoriesContainer, CategoriesContent } from './categories.styles'
import { db } from '../../config/firebase.config';
import { categoryConverter } from '../../converters/firestore.converters';

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]) 

    const fetchCategories = async () => {
        try{
            const categoriesFromFirestore: Category[] = []

            const querySnapshot = await getDocs(collection(db, 'categories').withConverter(categoryConverter))

            querySnapshot.forEach((doc) => {
                categoriesFromFirestore.push(doc.data())
            })
            
            setCategories(categoriesFromFirestore)

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