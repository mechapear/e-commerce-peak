import { createFileRoute } from '@tanstack/react-router'

// TODO: now we don't have a home page -> handle this by redirect to products page

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  return <h1>This is Home page!</h1>
}
