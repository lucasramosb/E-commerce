//Styles
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from './cart.styles';

//Utilities
import {FunctionComponent, useContext} from 'react'
import CustomButton from '../custom-button/custom-button.component';
import { BsCartCheck } from 'react-icons/bs'
import { CartContext } from '../../contexts/cart.context';
import CartItem from '../cart-item/cart-item.component';

const Cart: FunctionComponent = () => {

    const {isVisible, toggleCart, products, productsTotalPrice, productsCount} = useContext(CartContext)

    return ( 
        <CartContainer isVisible={isVisible}  >
            <CartEscapeArea onClick={toggleCart}/>
            <CartContent>
                <CartTitle>Seu Carrinho</CartTitle>

                {products.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}

                {productsCount > 0 && (
                    <CartTotal>Total: R$ {productsTotalPrice}</CartTotal>
                )}

                {productsCount > 0 && (
                    <CustomButton startIcon={<BsCartCheck/>} >Ir Para o Checkout</CustomButton>
                )}

                {productsCount === 0 && (
                    <p>Seu Carrinho está vazio!</p>
                )}
            </CartContent>
        </CartContainer>
    );
}
 
export default Cart;