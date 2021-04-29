import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { ProductList } from './ProductList'

const queryClient = new QueryClient()

const QueryProvider = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('ProductList', () => {
  it('should render ProductCard component without crashing', async () => {
    render(<ProductList />, { wrapper: QueryProvider })
  })

  it('should render 4 products', async () => {
    render(<ProductList />, { wrapper: QueryProvider })

    await screen.findByTestId('product-list')

    screen.getByText(/4 results/i)

    const productCards = screen.getAllByTestId('product-card')
    expect(productCards.length).toEqual(4)
  })

  it('should render only 2 products if Hide Sold button is clicked', async () => {
    render(<ProductList />, { wrapper: QueryProvider })

    await screen.findByTestId('product-list')

    screen.getByText(/4 results/i)

    let productCards = screen.getAllByTestId('product-card')
    expect(productCards.length).toEqual(4)

    const toggleButton = await screen.findByTestId('toggle-sold-button')
    userEvent.click(toggleButton)

    screen.getByText(/2 results/i)
    await waitFor(() => {
      expect(screen.getAllByTestId('product-card').length).toEqual(2)
    })
  })
})
