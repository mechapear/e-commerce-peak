// for testing ui
const subTotal = 0
const MOCK_CART_DATA = [
  {
    id: '10',
    quantity: 1,
    title: 'Product Name 10',
    photos: [
      'https://peakblobstoragesit.blob.core.windows.net/peakengine/Content/Image/PeakFrontendAssignment/P-EAK_02.png',
      'https://peakblobstoragesit.blob.core.windows.net/peakengine/Content/Image/PeakFrontendAssignment/P-EAK_02.png',
      'https://peakblobstoragesit.blob.core.windows.net/peakengine/Content/Image/PeakFrontendAssignment/P-EAK_04.png',
    ],
    price: 1000,
  },
  {
    id: '11',
    quantity: 1,
    title: 'Product Name 11',
    photos: [
      'https://peakblobstoragesit.blob.core.windows.net/peakengine/Content/Image/PeakFrontendAssignment/P-EAK_02.png',
      'https://peakblobstoragesit.blob.core.windows.net/peakengine/Content/Image/PeakFrontendAssignment/P-EAK_02.png',
      'https://peakblobstoragesit.blob.core.windows.net/peakengine/Content/Image/PeakFrontendAssignment/P-EAK_04.png',
    ],
    price: 1000,
  },
]

export default function CartPage() {
  return (
    <section className="mx-auto px-4 py-16 sm:px-6 sm:py-24 md:max-w-4xl lg:px-8">
      <h1 className="text-lg font-medium text-gray-900">Shopping cart</h1>

      {/* Empty shopping cart */}
      <div className="my-8 flex justify-center border-y border-gray-200 py-12 text-center md:py-16">
        <h3 className="text-gray-500">
          Shopping cart is empty. <ContinueShoppingBtn />
        </h3>
      </div>

      {/* Cart item list */}
      <div className="my-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {MOCK_CART_DATA.map((product) => (
              <li key={product.id} className="flex py-6">
                {/* Product image */}
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={product.photos[0]}
                    alt={product.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                {/* Product info */}
                <div className="ml-4 flex flex-1 flex-col">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <h3>{product.title}</h3>
                    <p className="ml-4">${product.price}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {product.quantity}</p>
                    {/* Remove button */}
                    <button
                      type="button"
                      className="font-medium text-blue-600 hover:text-blue-500"
                      onClick={() => alert("You're removing this product.")}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* SubTotal & Checkout */}
      <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Subtotal</p>
          <p>${subTotal}</p>
        </div>
        <p className="mt-0.5 text-sm text-gray-500">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="mt-6">
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 md:mx-auto md:max-w-56"
            onClick={() => alert("You're redirecting to Checkout page.")}
          >
            Checkout
          </button>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
          <p>
            or <ContinueShoppingBtn />
          </p>
        </div>
      </div>
    </section>
  )
}

function ContinueShoppingBtn() {
  return (
    <button
      type="button"
      className="text-blue-600 hover:text-blue-500"
      onClick={() => alert("You're redirecting to Product list page.")}
    >
      Continue Shopping
    </button>
  )
}
