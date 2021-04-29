import '../styles/globals.css'

import Head from 'next/head'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>PLP test</title>
        <meta name="description" content="PLP technical test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
