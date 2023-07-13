import { useParams } from "react-router-dom";
import CategoryDetails from "../../Components/category-details/category-details.component";
import Header from "../../Components/header/header.component";
import { FunctionComponent } from "react";

const CategoryDetailsPage: FunctionComponent = () => {

    const { id } = useParams()

    if(!id) return null

    return ( 
        <>
            <Header/>

            <CategoryDetails CategoryId={id} />
        </>
     );
}
 
export default CategoryDetailsPage;