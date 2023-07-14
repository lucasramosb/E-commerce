// Styles
import { CartItemContainer, CartItemImage, CartItemInfo, CartItemQuantity, RemoveButton } from "./cart-item.styles";

//Utilities
import { FunctionComponent, useContext } from "react";
import CartProduct from "../../Types/cart.types";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'
import { CartContext } from "../../contexts/cart.context";

interface CartItemProps{
    product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({product}) => {

    const { removeProductCart, increasePoductQuantity, decreaseProductQuantity } = useContext(CartContext)

    const handleRemoveClick = () => {
        removeProductCart(product.id)
    }

    const handleIncreaseClick = () => {
        increasePoductQuantity(product.id)
    }

    const handleDecreaseClick = () => {
        decreaseProductQuantity(product.id)
    }

    return ( 
        <CartItemContainer>
            <CartItemImage imageUrl={product.imageUrl}/>

            <CartItemInfo>
                <p>{product.name}</p>
                <p>{product.price}</p>

                <CartItemQuantity>
                    <AiOutlineMinus size={20} onClick={handleDecreaseClick} />
                    <p>{product.quantity}</p>
                    <AiOutlinePlus size={20} onClick={handleIncreaseClick} />
                </CartItemQuantity>
            </CartItemInfo>

            <RemoveButton onClick={handleRemoveClick} >
                <AiOutlineClose size={25}/>
            </RemoveButton>
        </CartItemContainer>
    );
}
 
export default CartItem;