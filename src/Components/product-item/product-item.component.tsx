// styles
import { ProductContainer, ProductImage, ProductInfo } from './product-item.styles';

// Utilities
import { FunctionComponent } from 'react'
import Product from '../../Types/product.type';

interface ProductsItemProps{
    product: Product
}

const ProductItem: FunctionComponent<ProductsItemProps> = ({product}) => {
    return ( 
        <ProductContainer>
            <ProductImage imageUrl={product.imageUrl} />

            <ProductInfo>
                <p>{product.name}</p>

                <p>R${product.price}</p>
            </ProductInfo>
        </ProductContainer>
    );
}
 
export default ProductItem;