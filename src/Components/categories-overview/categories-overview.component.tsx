//Styles
import { Container, IconContainer } from "./categories-overview.styles";

//Utilities
import { FunctionComponent, useContext, useEffect } from "react";
import { CategoryContext } from "../../contexts/categories.context";
import CategoryOverview from "../category-overview/category-overview.component";
import Loading from "../loading/loading.components";
import { BiChevronLeft } from 'react-icons/bi'
import { useNavigate } from "react-router-dom";

const CategoriesOverview: FunctionComponent = () => {
    const { categories, isLoading, fetchCategories } = useContext(CategoryContext)

    const navigate = useNavigate()

    useEffect(() => {
        if (categories.length === 0){
            fetchCategories()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(isLoading) return <Loading/>

    const handleClickHome = () => {
        navigate('/')
    }

    return ( 
        <>
            <Container>
                <IconContainer onClick={handleClickHome} >
                    <BiChevronLeft size={36} />
                </IconContainer>
              {categories.map((category) => (
                    <CategoryOverview key={category.id} category={category} />
                ))}
            </Container>
        </>
     );
}
 
export default CategoriesOverview;