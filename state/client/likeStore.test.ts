import { act, renderHook } from '@testing-library/react-hooks'

import useLikeStore from './likeStore'

const mockId01 = '01'
const mockId02 = '02'

const getDefaultState = useLikeStore.getState().likedProductsId

describe('useLikeStore', () => {
  afterEach(() => {
    act(() => {
      useLikeStore.setState({
        likedProductsId: getDefaultState,
      })
    })
  })

  it('should return the default value for', () => {
    const { result } = renderHook(() => useLikeStore())

    expect(result.current.likedProductsId).toStrictEqual([])
  })

  it('should add a new likedId', () => {
    const { result } = renderHook(() => useLikeStore())

    expect(result.current.likedProductsId).toStrictEqual([])

    act(() => {
      result.current.toggleLikedProductId(mockId01)
    })

    expect(result.current.likedProductsId).toStrictEqual([mockId01])
  })

  it('should remove a likedId', () => {
    const { result } = renderHook(() => useLikeStore())

    expect(result.current.likedProductsId).toStrictEqual([])

    act(() => {
      result.current.toggleLikedProductId(mockId01)
      result.current.toggleLikedProductId(mockId02)
    })

    expect(result.current.likedProductsId).toStrictEqual([mockId01, mockId02])

    act(() => {
      result.current.toggleLikedProductId(mockId01)
    })

    expect(result.current.likedProductsId).toStrictEqual([mockId02])
  })
})
