import { FileRoute } from '@tanstack/react-router'

// create routes other than the root route using the 'FileRoute' class
export const Route = new FileRoute('/').createRoute({
  component: HomePage,
})

function HomePage() {
  return <h1>This is Home page!</h1>
}
