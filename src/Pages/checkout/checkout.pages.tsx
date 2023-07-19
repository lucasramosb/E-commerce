import { FunctionComponent } from "react";
import Header from "../../Components/header/header.component";
import Checkout from "../../Components/checkout/checkout.component";

const CheckoutPage: FunctionComponent = () => {
    return ( 
        <>
            <Header/>

            <Checkout/>
        </>
    );
}
 
export default CheckoutPage;