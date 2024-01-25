import { useQuery } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'
import ErrorCard from '../modules/ErrorCard.tsx'
import { LoadingIcon } from '../modules/icons.tsx'
import { fetchProducts } from '../modules/productList.ts'
import { distinctArray } from '../utils/distinctArray.ts'

export const Route = createFileRoute('/products/')({
  component: ProductList,
})

function ProductList() {
  const { data, isPending, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })

  return (
    <>
      {/* success */}
      <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {data?.products?.map((product) => {
          return (
            <li>
              {/* Path params are passed to the loader as a params object */}
              {/* Params are string values */}
              {/* { key: <productId>, value: <product.id> } */}
              <Link
                key={product.id}
                to="/products/$productId"
                params={{ productId: product.id.toString() }}
                className="group"
              >
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
              </Link>
            </li>
          )
        })}
      </ul>
      {/* The query has no data / cached data yet */}
      {isPending && (
        <>
          <LoadingIcon />
          <div className="z-5 absolute inset-0 h-full w-full bg-white/40 backdrop-blur-sm" />
        </>
      )}
      {/* The query encountered an error */}
      {error && <ErrorCard />}
    </>
  )
}
