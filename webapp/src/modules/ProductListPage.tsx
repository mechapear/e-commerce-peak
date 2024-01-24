import { useQuery } from '@tanstack/react-query'
import ProductList from './ProductList.tsx'
import {LoadingIcon} from './icons.tsx'

export type Tags = 'tag1' | 'tag2' | 'tag3' | 'tag4'

export type Product = {
  id: number
  title: string
  description: string
  photos: string[]
  price: number
  tags: Tags[]
}

export type ApiDataResponse = {
  products: Product[]
}

async function fetchProducts(): Promise<ApiDataResponse | void> {
  try {
    return fetch('http://localhost:3000/').then(
      (response) => response.json() as Promise<ApiDataResponse>,
    )
  } catch (error) {
    // for debugging
    console.log('getProducts error: ', { error })
  }
}

export default function ProductListPage() {
  const { data, isPending } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

  return (
    <>
      <h1>Product List Page</h1>
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* success */}
        <ProductList products={data?.products} />
        {/* The query has no data / cached data yet */}
        {isPending && (
          <>
            <LoadingIcon />
            <div className="z-5 absolute inset-0 h-full w-full bg-white/40 backdrop-blur-sm" />
          </>
        )}
      </section>
    </>
  )
}
