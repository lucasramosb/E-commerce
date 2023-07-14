// Styles
import { CartItemContainer, CartItemImage, CartItemInfo, CartItemQuantity, RemoveButton } from "./cart-item.styles";

//Utilities
import { FunctionComponent } from "react";
import CartProduct from "../../Types/cart.types";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'

interface CartItemProps{
    product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({product}) => {
    return ( 
        <CartItemContainer>
            <CartItemImage imageUrl={product.imageUrl}/>

            <CartItemInfo>
                <p>{product.name}</p>
                <p>{product.price}</p>

                <CartItemQuantity>
                    <AiOutlineMinus size={20} />
                    <p>{product.quantity}</p>
                    <AiOutlinePlus size={20} />
                </CartItemQuantity>
            </CartItemInfo>

            <RemoveButton>
                <AiOutlineClose size={25}/>
            </RemoveButton>
        </CartItemContainer>
    );
}
 
export default CartItem;