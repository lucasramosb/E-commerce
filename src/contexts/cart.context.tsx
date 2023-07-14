import { createContext, FunctionComponent, useState } from 'react';
import CartProduct from "../Types/cart.types";
import Product from '../Types/product.type';

interface ICartContext {
    isVisible: boolean,
    products: CartProduct[],
    toggleCart: () => void,
    addProductCart: (product : Product) => void
}

export const CartContext = createContext<ICartContext>({
    isVisible: false,
    products: [],
    toggleCart: () => {},
    addProductCart: () => {}
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

    const addProductCart = (product: Product) => {
        setProducts((prevState) => [...prevState, {...product, quantity: 1}])
    }

    return (
        <CartContext.Provider value={{isVisible, products, toggleCart, addProductCart}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;