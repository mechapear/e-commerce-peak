import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import { MenuIcon, ShoppingCartIcon } from './icons.tsx'
import { CartItem } from './ProductDetail.tsx'

export const BRAND_LOGO =
  'https://peakaccount.com/assets/img/material-for-peak-traditional-format/peak-logo-new-design.png'

function calculateTotalQuantity(cart: CartItem[]) {
  let totalQuantity = 0
  cart.map((cartItem) => (totalQuantity += cartItem.quantity))
  return totalQuantity
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cart] = useLocalStorageState<CartItem[]>('shopping-cart', {
    defaultValue: [],
  })

  return (
    <>
      <nav className="h-18 relative border-gray-800 bg-gray-800">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-8 py-4">
          {/* Logo, link to home page */}
          <Link
            to="/"
            className="flex items-center space-x-3"
            onClick={handlePageUnderConstruction}
          >
            <img src={BRAND_LOGO} className="h-8" alt="Brand Logo" />
          </Link>

          {/* Main menu & Shopping Cart */}
          <div className="flex items-center justify-center gap-2">
            {/* Open main menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-200 hover:bg-gray-300 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-100 md:hidden"
              onClick={() => setIsMenuOpen((prevState) => !prevState)}
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon />
            </button>

            {/* Menu list */}
            {/* It can be toggled on mobile */}
            {/* It always displays on @media (min-width: 768px) screen */}
            <div
              className={`z-1 absolute left-0 top-12 w-full md:static md:block ${isMenuOpen ? '' : 'hidden'}`}
            >
              <div className="w-full md:block md:w-auto">
                <ul className="mt-4 flex flex-col bg-gray-800 p-3 md:m-0 md:flex-row md:gap-2 md:p-0">
                  <li>
                    <Link
                      to="/"
                      className="block rounded-md border border-gray-800 px-3 py-2 text-gray-200 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-800"
                      onClick={handlePageUnderConstruction}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/products"
                      className="block rounded-md border border-gray-800 px-3 py-2 text-gray-200 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-800"
                    >
                      Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="block rounded-md border border-gray-800 px-3 py-2 text-gray-200 hover:border-gray-300 hover:bg-gray-300 hover:text-gray-800"
                      onClick={handlePageUnderConstruction}
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Shopping Cart Link */}
            <div className="flex justify-center rounded-md p-2 text-gray-200 hover:bg-gray-300 hover:text-gray-800">
              <Link to="/cart" className="relative pr-0.5">
                <div className="absolute -top-1 left-2.5">
                  <p className="flex h-1.5 w-1.5 items-center justify-center rounded-full bg-red-500 p-2.5 text-xs font-medium text-white">
                    {calculateTotalQuantity(cart)}
                  </p>
                </div>
                <ShoppingCartIcon />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

function handlePageUnderConstruction() {
  alert(
    'This page is currently under construction. You will be redirected to the product list page.',
  )
}
