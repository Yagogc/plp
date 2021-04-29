import { useState } from 'react'

import useLikeStore from '../state/client/likeStore'
import { useProducts } from '../state/server/getProducts'

const LikeList = () => {
  const { data, isError, isLoading } = useProducts()
  const likedProductsId = useLikeStore((state) => state.likedProductsId)
  const toggleLikedProductId = useLikeStore(
    (state) => state.toggleLikedProductId
  )
  const numberOfLikes = likedProductsId.length
  const [isLikeListOpen, setLikeListOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => !!data && setLikeListOpen(!isLikeListOpen)}
        disabled={isLoading || isError}
        className={`px-3 py-1 tabular-nums text-lg font-bold text-white bg-purple-800 border-2 border-purple-800 rounded hover:bg-purple-600 ${
          isLoading && 'grayscale opacity-50 cursor-not-allowed'
        }`}
      >{`${numberOfLikes} 👍`}</button>
      {isLikeListOpen && !isError && (
        <div className="absolute right-0 z-50 flex flex-col gap-1 p-1 mt-1 bg-white border-2 border-purple-800 border-solid rounded shadow-md top-full">
          {data
            ?.filter((prod) => likedProductsId.includes(prod.id))
            .map((product) => (
              <button
                onClick={() => toggleLikedProductId(product.id)}
                key={product.id}
                className="flex items-center justify-between gap-4 px-2 py-1 transition-all rounded whitespace-nowrap hover:bg-gray-300"
              >
                <span>{product.name}</span>

                <span role="img" aria-label="remove">
                  ❌
                </span>
              </button>
            ))}
        </div>
      )}
    </div>
  )
}

export { LikeList }
