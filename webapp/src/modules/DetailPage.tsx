import { Product } from './productList.ts'

// for testing ui
const MOCK_PRODUCT: Product = {
  id: 10,
  title: 'Product Name 10',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  photos: [
    'https://peakblobstoragesit.blob.core.windows.net/peakengine/Content/Image/PeakFrontendAssignment/P-EAK_02.png',
    'https://peakblobstoragesit.blob.core.windows.net/peakengine/Content/Image/PeakFrontendAssignment/P-EAK_02.png',
    'https://peakblobstoragesit.blob.core.windows.net/peakengine/Content/Image/PeakFrontendAssignment/P-EAK_04.png',
  ],
  price: 1000,
  tags: ['tag3', 'tag1', 'tag3', 'tag4'],
}

export default function DetailPage() {
  return (
    <>
      <section className="mx-auto grid max-w-2xl place-items-center gap-y-10 px-4 py-16 sm:px-6 sm:py-24 md:max-w-4xl md:grid-cols-2 md:place-items-start lg:px-8">
        {/* 1 - product image */}
        <div className="flex w-full justify-evenly md:flex-col">
          <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-gray-200 md:mb-7 md:max-h-[320px] md:max-w-[320px]">
            <img
              className="h-full w-full object-cover object-center md:items-center "
              src={MOCK_PRODUCT?.photos[0]}
              alt={MOCK_PRODUCT?.title}
            />
          </div>
          {/* if photos[1] exists, it will appear when @media (min-width: 768px) */}
          {MOCK_PRODUCT?.photos[1] && (
            <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 hidden w-full overflow-hidden rounded-lg bg-gray-200 md:block md:max-h-[320px] md:max-w-[320px]">
              <img
                className="hidden h-full w-full object-cover object-center md:block md:items-center"
                src={MOCK_PRODUCT?.photos[1]}
                alt={MOCK_PRODUCT?.title}
              />
            </div>
          )}
        </div>

        {/* 2 - product detail */}
        <div>
          <div className="text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              {MOCK_PRODUCT?.title}
            </h1>
            <p className="my-2 text-2xl">${MOCK_PRODUCT?.price}</p>
            <p className="mt-4 space-y-6 break-words text-gray-900">
              {MOCK_PRODUCT?.description}
            </p>
          </div>
          <div className="my-7 flex gap-x-2 md:my-7">
            <input
              className="mb-2 me-2 max-w-20 rounded-lg border border-gray-800 px-4 py-2.5 text-sm text-gray-900 outline-none"
              type="number"
              id={`quantity-${MOCK_PRODUCT?.title}`}
              name="productQuantity"
              min="1"
              value="1"
              pattern="[0-9]*"
              required
            />

            {/* add to cart section */}
            <button
              type="button"
              className="mb-2 me-2 w-full rounded-lg bg-gray-800 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900"
              data-product-id={MOCK_PRODUCT?.id}
            >
              Add to cart
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
