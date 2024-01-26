import { useQuery } from '@tanstack/react-query'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import ErrorCard from '../modules/ErrorCard.tsx'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  LoadingIcon,
} from '../modules/icons.tsx'
import { fetchProducts } from '../modules/productList.ts'
import { distinctArray } from '../utils/distinctArray.ts'

export const Route = createFileRoute('/products/')({
  component: ProductList,
})

const ITEMS_PER_PAGE = 20

function ProductList() {
  const { data, isPending, error } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  })
  const [currentPage, setCurrentPage] = useState(0)

  // Calculate the total number of pages based on
  // the data length and the number of items per page
  const totalPages = data ? Math.ceil(data.length / ITEMS_PER_PAGE) : 0

  // Calculates the startIndex and endIndex values
  // based on the currentPage state value and the itemsPerPage value
  const startIndex = currentPage * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE

  // Subset is used for slice the data array into a subset of items
  const subset = data ? data.slice(startIndex, endIndex) : []

  return (
    <>
      {/* success */}
      <div className="grid gap-10">
        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {subset.map((product) => {
            return (
              <li key={product.id}>
                {/* Path params are passed to the loader as a params object */}
                {/* Params are string values */}
                {/* { key: <productId>, value: <product.id> } */}
                <Link
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
                    <span
                      key={tag}
                      className="me-2 rounded bg-gray-100 px-2.5 py-1 text-xs text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="flex justify-center">
          <div className="flex gap-x-2">
            <button
              type="button"
              className="flex w-32 items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-900 hover:text-gray-100"
              disabled={currentPage === 0}
              onClick={() =>
                setCurrentPage((prevCurrentPage) => prevCurrentPage - 1)
              }
            >
              <ArrowLeftIcon />
              Previous
            </button>

            <button
              type="button"
              className="flex w-32 items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-900 hover:text-gray-100"
              disabled={currentPage === totalPages - 1}
              onClick={() =>
                setCurrentPage((prevCurrentPage) => prevCurrentPage + 1)
              }
            >
              Next
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>

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
