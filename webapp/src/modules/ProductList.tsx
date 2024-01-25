import { ApiDataResponse } from '../routes/products.index.tsx'
import { distinctArray } from '../utils/distinctArray.ts'

type ProductListProps = {
  products: ApiDataResponse['products'] | undefined
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {products?.map((product) => {
        return (
          <li key={product.id}>
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
  )
}
