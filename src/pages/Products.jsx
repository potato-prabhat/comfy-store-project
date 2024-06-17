import { Filters, PaginationContainer, ProductsContainer } from '../components'
import { customFetch } from '../utils'
const url = '/products'
export const loader = async ({ request }) => {
  const resp = await customFetch(url)
  // console.log(resp)
  const products = resp.data.data
  const meta = resp.data.meta
  return { products, meta }
}
const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}
export default Products
