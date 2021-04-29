import create from 'zustand'

type LikeStoreState = {
  likedProductsId: string[]
  toggleLikedProductId: (productId: string) => void
}

const useLikeStore = create<LikeStoreState>((set) => ({
  likedProductsId: [],
  toggleLikedProductId: (productId) =>
    set((state) => {
      let newLikedProductsId = [...state.likedProductsId]
      if (newLikedProductsId.includes(productId)) {
        newLikedProductsId = newLikedProductsId.filter((id) => id !== productId)
      } else {
        newLikedProductsId.push(productId)
      }
      return { likedProductsId: newLikedProductsId }
    }),
}))

export default useLikeStore
