import { useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'
import { convertToBahtCurrency } from '../utils/convertToBahtCurrency.ts'
import { Product } from './productList.ts'

export type CartItem = {
  id: number
  title: string
  photos: string[]
  price: number
  quantity: number
}

export type ProductDetailProps = {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  // We don't need cart data here, we just need to update it
  const [, setCart] = useLocalStorageState<CartItem[]>('shopping-cart', {
    defaultValue: [],
  })

  function handleAddToCart() {
    // Get selected cartItem info
    const cardItem = {
      id: product.id,
      title: product.title,
      photos: product.photos,
      price: product.price,
      quantity: quantity,
    }

    // Save new cartItem to local storage
    setCart((prevCart) => {
      // Check if cartItem already exists in cart
      const cartItemIndex = prevCart.findIndex(
        (cartItem) => cartItem.id === product.id,
      )

      // If cartItem exists, update quantity
      if (cartItemIndex !== -1) {
        const newCart = [...prevCart]
        // Update quantity
        newCart[cartItemIndex].quantity += quantity
        return newCart
      } else {
        // If cartItem does not exist, add new cartItem to cart
        return [...prevCart, cardItem]
      }
    })

    // Reset quantity to 1
    setQuantity(1)
    // Notify user that product has been added to cart
    alert(`${quantity} items has been added to cart!`)
  }

  return (
    <>
      {/*1 - Product image */}
      <div className="flex w-full justify-evenly md:flex-col">
        <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200 md:mb-7">
          <img
            className="h-full w-full object-cover object-center md:items-center "
            src={product.photos[0]}
            alt={product.title}
          />
        </div>
        {/* if photos[1] exists, it will appear when @media (min-width: 768px) */}
        {product.photos[1] && (
          <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 hidden w-full overflow-hidden rounded-lg bg-gray-200 md:block">
            <img
              className="hidden h-full w-full object-cover object-center md:block md:items-center"
              src={product.photos[1]}
              alt={product.title}
            />
          </div>
        )}
      </div>

      {/* 2 - Product detail */}
      <div>
        <div className="text-left">
          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            {product.title}
          </h1>
          <p className="my-2 text-2xl">
            {convertToBahtCurrency(product.price)}
          </p>
          <p className="mt-4 space-y-6 break-words text-gray-900">
            {product.description}
          </p>
        </div>
        <div className="my-7 flex gap-x-2 md:my-7">
          <input
            className="me-2 max-w-20 rounded-lg border border-gray-800 px-4 py-2.5 text-sm text-gray-900 outline-none"
            type="number"
            name="productQuantity"
            min="1"
            value={quantity}
            pattern="[0-9]*"
            required
            onChange={(event) => setQuantity(Number(event.target.value))}
          />

          {/* Add to cart section */}
          <button
            type="button"
            className="me-2 w-full rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  )
}
