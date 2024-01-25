import { Outlet, RootRoute } from '@tanstack/react-router'

export const Route = new RootRoute({
  component: () => (
    <>
      <Outlet /> {/* used to render the child routes of a parent route */}
    </>
  ),
})
