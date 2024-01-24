import { useQuery } from '@tanstack/react-query'
import { distinctArray } from '../utils/distinctArray.ts'

export type Tags = 'tag1' | 'tag2' | 'tag3' | 'tag4'

export type Product = {
  id: number
  title: string
  description: string
  photos: string[]
  price: number
  tags: Tags[]
}

export type apiDataResponse = {
  products: Product[]
}

async function fetchProducts(): Promise<apiDataResponse | void> {
  try {
    return fetch('http://localhost:3000/').then(
      (response) => response.json() as Promise<apiDataResponse>,
    )
  } catch (error) {
    // for debugging
    console.log('getProducts error: ', { error })
  }
}

export default function ProductListPage() {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

  console.log(data)

  return (
    <>
      <h1>Product List Page</h1>
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* TODO: extract to ProductList component */}
        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data?.products.map((product) => {
            return (
              <li>
                <a href="#" className="group">
                  <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200">
                    <img
                      src={product.photos[0]}
                      alt={product.title}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mb-1 mt-4 font-medium text-gray-700">
                    {product.title}
                  </h3>

                  {distinctArray(product.tags).map((tag) => (
                    <span className="me-2 rounded bg-gray-100 px-2.5 py-1 text-xs text-gray-800">
                      {tag}
                    </span>
                  ))}
                </a>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
