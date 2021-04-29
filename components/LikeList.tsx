import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
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
      <AnimatePresence>
        {isLikeListOpen && !isError && (
          <AnimateSharedLayout>
            <motion.ul
              layout
              layoutId="like-list"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ type: 'tween' }}
              className="absolute right-0 z-50 flex flex-col p-1 mt-1 space-y-1 overflow-hidden bg-white border-2 border-purple-800 border-solid rounded shadow-md top-full"
            >
              <AnimatePresence>
                {numberOfLikes === 0 ? (
                  <motion.li
                    layoutId="no-likes"
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'tween' }}
                    className="px-2 py-1 whitespace-nowrap"
                  >
                    No Liked Items
                  </motion.li>
                ) : (
                  data
                    ?.filter((prod) => likedProductsId.includes(prod.id))
                    .map((product) => (
                      <motion.li
                        key={product.id}
                        layout
                        layoutId={product.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ type: 'tween' }}
                        className="w-full"
                      >
                        <button
                          onClick={() => toggleLikedProductId(product.id)}
                          className="flex items-center justify-between w-full h-8 px-2 py-1 space-x-4 transition-all rounded whitespace-nowrap hover:bg-gray-300"
                        >
                          <span>{product.name}</span>

                          <span role="img" aria-label="remove">
                            ❌
                          </span>
                        </button>
                      </motion.li>
                    ))
                )}
              </AnimatePresence>
            </motion.ul>
          </AnimateSharedLayout>
        )}
      </AnimatePresence>
    </div>
  )
}

export { LikeList }
