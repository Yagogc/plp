import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useEffect, useState } from 'react'

import { ProductCard } from '../components/ProductCard'
import { Product, useProducts } from '../state/server/getProducts'

const useFilteredProducts = (data: Product[]) => {
  const [hideSoldProducts, setHideSoldProducts] = useState(false)
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    if (hideSoldProducts && !!data) {
      setFilteredItems(data?.filter((product) => product.sold !== true))
    } else {
      setFilteredItems(data)
    }
  }, [hideSoldProducts, data, setFilteredItems])

  return { hideSoldProducts, setHideSoldProducts, filteredItems }
}

const ProductList = () => {
  const { data, error, isError, isLoading } = useProducts()
  const {
    hideSoldProducts,
    setHideSoldProducts,
    filteredItems,
  } = useFilteredProducts(data)

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>{error.message}</div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="sticky z-40 flex items-center justify-between p-2 bg-white rounded shadow-md top-2 backdrop-blur backdrop-filter bg-opacity-80">
            <span className="font-bold tabular-nums">{`${
              filteredItems?.length || 0
            } Results`}</span>
            <button
              className="px-2 py-1 transition-all bg-gray-100 border-2 border-gray-500 rounded hover:bg-gray-200"
              onClick={() => setHideSoldProducts(!hideSoldProducts)}
              data-testid="toggle-sold-button"
            >
              {hideSoldProducts ? 'Show Sold Items' : 'Hide Sold Items'}
            </button>
          </div>
          <AnimateSharedLayout>
            <motion.div
              layout
              className="grid grid-flow-row grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:justify-start"
              data-testid="product-list"
            >
              <AnimatePresence>
                {filteredItems?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </AnimatePresence>
            </motion.div>
          </AnimateSharedLayout>
        </div>
      )}
    </div>
  )
}

export { ProductList }
