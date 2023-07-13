import { FunctionComponent, useContext, useEffect } from "react";
import { Container } from "./categories-overview.styles";
import { CategoryContext } from "../../contexts/categories.context";
import CategoryOverview from "../category-overview/category-overview.component";
import Loading from "../loading/loading.components";

const CategoriesOverview: FunctionComponent = () => {
    const { categories, isLoading, fetchCategories } = useContext(CategoryContext)

    useEffect(() => {
        if (categories.length === 0){
            fetchCategories()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if(isLoading) return <Loading/>

    return ( 
        <>
            <Container>
              {categories.map((category) => (
                    <CategoryOverview key={category.id} category={category} />
                ))}
            </Container>
        </>
     );
}
 
export default CategoriesOverview;