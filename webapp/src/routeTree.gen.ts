// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProductsImport } from './routes/products'
import { Route as CartImport } from './routes/cart'
import { Route as IndexImport } from './routes/index'
import { Route as ProductsIndexImport } from './routes/products.index'
import { Route as ProductsProductIdImport } from './routes/products.$productId'

// Create/Update Routes

const ProductsRoute = ProductsImport.update({
  path: '/products',
  getParentRoute: () => rootRoute,
} as any)

const CartRoute = CartImport.update({
  path: '/cart',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ProductsIndexRoute = ProductsIndexImport.update({
  path: '/',
  getParentRoute: () => ProductsRoute,
} as any)

const ProductsProductIdRoute = ProductsProductIdImport.update({
  path: '/$productId',
  getParentRoute: () => ProductsRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/cart': {
      preLoaderRoute: typeof CartImport
      parentRoute: typeof rootRoute
    }
    '/products': {
      preLoaderRoute: typeof ProductsImport
      parentRoute: typeof rootRoute
    }
    '/products/$productId': {
      preLoaderRoute: typeof ProductsProductIdImport
      parentRoute: typeof ProductsImport
    }
    '/products/': {
      preLoaderRoute: typeof ProductsIndexImport
      parentRoute: typeof ProductsImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  CartRoute,
  ProductsRoute.addChildren([ProductsProductIdRoute, ProductsIndexRoute]),
])
