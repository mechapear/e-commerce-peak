import { createFileRoute, redirect } from '@tanstack/react-router'

// now we don't have a home page
// handle this by redirect user to the products page /products
export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({
      to: '/products',
    })
  },
})
