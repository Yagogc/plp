import { Header } from '../components/Header'
import { ProductList } from '../components/ProductList'

const Home = () => {
  return (
    <div>
      <Header />
      <main className="container p-2 py-4 mx-auto">
        <ProductList />
      </main>
    </div>
  )
}

export default Home
