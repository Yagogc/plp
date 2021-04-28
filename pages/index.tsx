import { Header } from '../components/Header'
import { ProductCard } from '../components/ProductCard'
import { useProducts } from '../state/server/getProducts'

const Home = () => {
  const { data, error, isError, isLoading } = useProducts()

  return (
    <div>
      <Header />
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>{error.message}</div>
      ) : (
        <div className="flex flex-wrap justify-center gap-4 p-4">
          {data?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <main className="container mx-auto">TEST</main>
    </div>
  )
}

export default Home
