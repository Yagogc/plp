import { motion } from 'framer-motion'
import React from 'react'

import useLikeStore from '../state/client/likeStore'
import { Product } from '../state/server/getProducts'

const getImg = (product: Product) => {
  // Trying to make the loremflicker img more accurate with the product
  const typeOfProduct = product.brand.split(' ').pop()

  return `https://loremflickr.com/320/240/${typeOfProduct}?random=${product.id}`
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const likedProductsId = useLikeStore((state) => state.likedProductsId)
  const toggleLikedProductId = useLikeStore(
    (state) => state.toggleLikedProductId
  )
  const isLiked = likedProductsId.includes(product.id)
  const handleClick = () => toggleLikedProductId(product.id)
  // Dirty override of the placeholder image to avoid HTTPS issues
  const imageUrl = getImg(product)

  return (
    <motion.div
      layoutId={product.id}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col w-full gap-2 p-4 bg-white rounded shadow"
      data-testid="product-card"
    >
      <div className="relative h-40 overflow-hidden rounded">
        <img
          src={imageUrl}
          alt={product.name}
          className="object-cover object-center min-w-full min-h-full bg-gray-400"
        />
        {product.sold && (
          <>
            <div className="absolute top-0 w-full h-full bg-gray-700 opacity-75" />
            <span className="absolute px-4 py-1 font-bold text-red-500 uppercase transform -translate-x-1/2 -translate-y-1/2 border-4 border-red-500 border-solid rounded top-1/2 left-1/2 -rotate-12">
              Sold
            </span>
          </>
        )}
        <button
          className={`absolute px-2 py-1 transition-all bg-gray-300 bg-opacity-90 border-2 border-gray-500 border-solid rounded top-2 right-2 hover:border-red-400 hover:bg-red-300 ${
            isLiked && 'bg-red-500 border-red-500'
          }`}
          onClick={handleClick}
        >
          <span role="img" aria-label="LIKE BUTTON">
            ????
          </span>
        </button>
      </div>
      <div>{product.name}</div>
      <div>{product.brand}</div>
      <div>{product.size}</div>
      <div className="font-bold">{product.price}</div>
    </motion.div>
  )
}

export { ProductCard }
