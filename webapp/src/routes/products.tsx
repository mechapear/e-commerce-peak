import { createFileRoute, Outlet } from '@tanstack/react-router'
import PageBanner from '../modules/PageBanner.tsx'

export const Route = createFileRoute('/products')({
  component: ProductListPage,
})

function ProductListPage() {
  return (
    <>
      <PageBanner title="Discover Our Collections" />
      <section className="mx-auto px-6 py-16 sm:py-24 md:max-w-2xl lg:max-w-7xl lg:px-8">
        <Outlet />
      </section>
    </>
  )
}
