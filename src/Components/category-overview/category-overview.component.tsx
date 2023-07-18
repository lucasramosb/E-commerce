import { FunctionComponent } from 'react'

// Styles
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './category-overview.styles'

// Utilities
import Category from '../../Types/category.types'
import ProductItem from '../product-item/product-item.component'

// Components
interface CategoryOverviewProps {
  category: Category
}

const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({category}) => {

    return (
      <CategoryContainer>
        <CategoryTitle>{category.displayName}</CategoryTitle>

        <ProductsContainer>
          {category.products.slice(0, 4).map( product => <ProductItem key={product.id} product={product} />)}
        </ProductsContainer>
      </CategoryContainer>
  )
}

export default CategoryOverview