import { FunctionComponent } from "react";
import Header from "../../Components/header/header.component";
import CategoriesOverview from "../../Components/categories-overview/categories-overview.component";

const ExplorePage: FunctionComponent = () => {
    return ( 
        <>
            <Header/>

            <CategoriesOverview />
        </>
    );
}
 
export default ExplorePage;