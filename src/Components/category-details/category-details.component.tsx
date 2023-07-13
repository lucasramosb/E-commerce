import { FunctionComponent, useState, useEffect } from "react";
import Category from "../../types/category.types";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebase.config";
import { categoryConverter } from "../../converters/firestore.converters";
import Loading from "../loading/loading.components";
import { Container, CategoryTitle, IconContainer, ProductsContainer } from "./category-details.styles";
import { BiChevronLeft } from 'react-icons/bi'
import ProductItem from "../product-item/product-item.component";
import { useNavigate } from "react-router-dom";

interface CategoryDetailsProps{
    CategoryId: string
}

const CategoryDetails: FunctionComponent<CategoryDetailsProps> = ({CategoryId}) => {

    const [category, setCategory] = useState<Category | null>(null)

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        const fetchCategory = async () => {
            try{
                setIsLoading(true)
                const querySnapShot = await getDocs(
                    query(
                        collection(db, 'categories').withConverter(categoryConverter),
                        where('id', '==', CategoryId)
                    )
                )
    
                const category = querySnapShot.docs[0]?.data()
    
                setCategory(category)
            }catch(error){
                console.log(error)
            }finally{
                setIsLoading(false)
            }
        }

        fetchCategory()
    }, [])

    const handleClickHome = () => {
        navigate('/')
    }

    if(isLoading) return <Loading/>

    return (
        <Container>
            <CategoryTitle>
                <IconContainer onClick={handleClickHome} >
                    <BiChevronLeft size={36} />
                </IconContainer>
                <p>Explorar {category?.displayName}</p>
            </CategoryTitle>

            <ProductsContainer>
                {category?.products.map((product) => 
                    <ProductItem key={product.id} product={product} />
                )}
            </ProductsContainer>

        </Container>
    )
}
 
export default CategoryDetails;