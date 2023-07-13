import { createContext, FunctionComponent, useState } from 'react';
import CartProduct from "../Types/cart.types";

interface ICartContent {
    isVisible: boolean,
    products: CartProduct[],
    toggleCart: () => void
}

const CartContext = createContext<ICartContent>({
    isVisible: false,
    products: [],
    toggleCart: () => {}
})

interface CartContextProps{
    children: any
}

const CartContextProvider: FunctionComponent<CartContextProps>  = ({children}) => {

    const [isVisible, setIsVisible] = useState(false);

    const [products, setProducts] = useState<CartProduct[]>([])

    const toggleCart = () => {
        //pega o state anterior e seta o inverso do anterior
        setIsVisible( prevState => !prevState )
    }

    return (
        <CartContext.Provider value={{isVisible, products, toggleCart}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;