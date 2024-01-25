import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/$productId')({
  component: () => <h1>This is detail page</h1>,
})
