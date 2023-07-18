// styles
import { ProductContainer, ProductImage, ProductInfo } from './product-item.styles';

// Utilities
import { FunctionComponent, useContext } from 'react'
import Product from '../../Types/product.type';
import CustomButton from '../custom-button/custom-button.component';
import { BsCartPlus } from 'react-icons/bs'
import { CartContext } from '../../contexts/cart.context';


interface ProductsItemProps{
    product: Product
}

const ProductItem: FunctionComponent<ProductsItemProps> = ({product}) => {

    const { addProductCart } = useContext(CartContext)

    const handleAddToCartClick = () => {
        addProductCart(product)
    }

    return ( 
        <ProductContainer>
            <ProductImage imageUrl={product.imageUrl} >
                <CustomButton onClick={handleAddToCartClick} startIcon={<BsCartPlus/>} >Adicionar ao Carrinho</CustomButton>
            </ProductImage>

            <ProductInfo>
                <p>{product.name}</p>

                <p>R$ {product.price}</p>
            </ProductInfo>
        </ProductContainer>
    );
}
 
export default ProductItem;