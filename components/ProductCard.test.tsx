import { render, screen } from '@testing-library/react'
import React from 'react'

import { ProductCard } from './ProductCard'

const mockProduct = {
  id: '1',
  date: '2021-02-21T20:17:26.366Z',
  name: 'Arch Blick',
  img: 'https://placeimg.com/640/360/any',
  sold: false,
  price: '584.00',
  brand: 'Practical Steel Cheese',
  description: 'Executive backing up Function-based',
  seller: 'Leonor30',
  size: 'M',
}

describe('ProductCard', () => {
  it('should render ProductCard component without crashing', () => {
    render(<ProductCard product={mockProduct} />)
  })

  it('should display a name, brand and price', () => {
    render(<ProductCard product={mockProduct} />)

    screen.getByText(mockProduct.name)
    screen.getByText(mockProduct.brand)
    screen.getByText(mockProduct.price)
  })

  it('should display a "Sold" text if the product is sould out', () => {
    const { rerender } = render(<ProductCard product={mockProduct} />)

    expect(screen.queryByText('Sold')).not.toBeInTheDocument()

    rerender(<ProductCard product={{ ...mockProduct, sold: true }} />)

    expect(screen.queryByText('Sold')).toBeInTheDocument()
  })
})
