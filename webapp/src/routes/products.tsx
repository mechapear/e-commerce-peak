import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/products')({
  component: ProductListPage,
})

function ProductListPage() {
  return (
    <>
      <section className="mx-auto px-4 py-16 sm:px-6 sm:py-24 md:max-w-4xl lg:px-8">
        <h1 className="text-lg font-medium text-gray-900">Product List Page</h1>
        <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <Outlet />
        </section>
      </section>
    </>
  )
}
