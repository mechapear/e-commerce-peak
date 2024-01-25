import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import ErrorCard from '../modules/ErrorCard.tsx'
import { LoadingIcon } from '../modules/icons.tsx'
import { fetchProductById } from '../modules/productList.ts'

export const Route = createFileRoute('/products/$productId')({
  component: DetailPage,
})

function DetailPage() {
  // get productId from path params that were passed to the loader
  // useParams returns an object with all of the path params
  const { productId } = Route.useParams()

  const { data, isPending, error } = useQuery({
    queryKey: ['product'],
    queryFn: () => fetchProductById(Number(productId)),
  })

  return (
    <>
      <section className="mx-auto grid max-w-2xl place-items-center gap-x-8 gap-y-10 px-4 py-16 sm:px-6 sm:py-24 md:max-w-4xl md:grid-cols-2 md:place-items-start lg:px-8">
        {/*1 - Product image */}
        {data && (
          <div className="flex w-full justify-evenly md:flex-col">
            <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200 md:mb-7">
              <img
                className="h-full w-full object-cover object-center md:items-center "
                src={data.photos[0]}
                alt={data.title}
              />
            </div>
            {/* if photos[1] exists, it will appear when @media (min-width: 768px) */}
            {data && data.photos[1] && (
              <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 hidden w-full overflow-hidden rounded-lg bg-gray-200 md:block">
                <img
                  className="hidden h-full w-full object-cover object-center md:block md:items-center"
                  src={data.photos[1]}
                  alt={data.title}
                />
              </div>
            )}
          </div>
        )}
        {/* 2 - Product detail */}
        {data && (
          <div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
                {data.title}
              </h1>
              <p className="my-2 text-2xl">${data.price}</p>
              <p className="mt-4 space-y-6 break-words text-gray-900">
                {data.description}
              </p>
            </div>
            <div className="my-7 flex gap-x-2 md:my-7">
              <input
                className="mb-2 me-2 max-w-20 rounded-lg border border-gray-800 px-4 py-2.5 text-sm text-gray-900 outline-none"
                type="number"
                id={`quantity-${data.title}`}
                name="productQuantity"
                min="1"
                value="1"
                pattern="[0-9]*"
                required
              />
              {/* Add to cart section */}
              <button
                type="button"
                className="mb-2 me-2 w-full rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900"
                data-product-id={data.id}
              >
                Add to cart
              </button>
            </div>
          </div>
        )}

        {/* The query has no data / cached data yet */}
        {isPending && (
          <>
            <LoadingIcon />
            <div className="z-5 absolute inset-0 h-full w-full bg-white/40 backdrop-blur-sm" />
          </>
        )}
        {/* The query encountered an error */}
        {error && <ErrorCard />}
      </section>
    </>
  )
}
