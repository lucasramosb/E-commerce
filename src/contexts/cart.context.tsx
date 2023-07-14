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
        //pega o state anterior e seta o inverso 
        setIsVisible( prevState => !prevState )
    }

    const addProductCart = (product: Product) => {

        //verificar se  produto ja esta no carrinho
        const productIsAlreadyInCart = products.some( 
            (item) => item.id === product.id
        )

        //Se sim => aumentar sua quantidade
        if(productIsAlreadyInCart){
            //se o produto atual for igual ao que ja esta no carrinho ? setar o item atual e adicione +1 a quantidade : retorne somente o item
            return setProducts( products => 
                products.map((item) => 
                    item.id === product.id 
                    ? {...item, quantity: item.quantity + 1 } : item
                )
            )
        }

        //se não => adiciona-lo
        setProducts((prevState) => [...prevState, {...product, quantity: 1}])
    }

    return (
        <CartContext.Provider value={{isVisible, products, toggleCart, addProductCart}}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContextProvider;