import { useQuery } from 'react-query'

import { APIENDPOINT } from '../../config/endpoints'

export interface Product {
  id: string
  date: string
  name: string
  img: string
  sold: boolean
  price: string
  brand: string
  description: string
  seller: string
  size: string
}

const fetchProducts = () =>
  fetch(APIENDPOINT).then((response) => response.json())

const useProducts = () => useQuery<Product[], Error>('products', fetchProducts)

export { useProducts }
