import { createRootRoute, Outlet } from '@tanstack/react-router'
import Navbar from '../modules/Navbar.tsx'

export const Route = createRootRoute({
  component: () => (
    <>
      <Navbar />
      <Outlet /> {/* used to render the child routes of a parent route */}
    </>
  ),
})
