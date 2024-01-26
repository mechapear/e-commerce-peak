import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import ErrorCard from '../modules/ErrorCard.tsx'
import { LoadingIcon } from '../modules/icons.tsx'
import ProductDetail from '../modules/ProductDetail.tsx'
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
      <section className="mx-auto grid max-w-2xl place-items-center gap-x-14 gap-y-10 md:max-w-4xl md:grid-cols-2 md:place-items-start">
        {/* Success, the query has deta */}
        {data && <ProductDetail product={data} />}
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
