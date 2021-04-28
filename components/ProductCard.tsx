import React from 'react'

import { Product } from '../state/server/getProducts'

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex flex-col w-full max-w-xs gap-2 p-4 bg-white rounded shadow">
      <div className="relative h-40 overflow-hidden rounded">
        <img
          src={product.img}
          alt={product.name}
          className="object-cover min-h-full bg-gray-400"
        />
        {product.sold && (
          <>
            <div className="absolute top-0 w-full h-full bg-gray-700 opacity-75" />
            <span className="absolute px-4 py-1 font-bold text-red-500 uppercase transform -translate-x-1/2 -translate-y-1/2 border-4 border-red-500 border-solid rounded top-1/2 left-1/2 -rotate-12">
              Sold
            </span>
          </>
        )}
        <button className="absolute px-2 py-1 transition-all bg-gray-300 bg-opacity-50 border-2 border-gray-500 border-solid rounded top-2 right-2 hover:border-red-400 hover:bg-red-300">
          <span role="img" aria-label="LIKE BUTTON">
            👍
          </span>
        </button>
      </div>
      <div>{product.name}</div>
      <div>{product.brand}</div>
      <div>{product.size}</div>
      <div className="font-bold">{product.price}</div>
    </div>
  )
}

export { ProductCard }
