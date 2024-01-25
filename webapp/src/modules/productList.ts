export type Product = {
  id: number
  title: string
  description: string
  photos: string[]
  price: number
  tags: string[]
}

export type ApiDataResponse = {
  products: Product[]
}

export async function fetchProducts(): Promise<ApiDataResponse | void> {
  try {
    return fetch('http://localhost:3000/').then(
      (response) => response.json() as Promise<ApiDataResponse>,
    )
  } catch (error) {
    // for debugging
    console.log('fetchProducts error: ', { error })
  }
}

// Assume that we cannot change anyting in the API
export async function fetchProductById(id: number): Promise<Product | void> {
  const data = await fetchProducts()
  if (!data) return
  // Find product by id
  const product = data.products.find((product) => product.id === id)
  // Logging error, if product not found
  if (!product) {
    return console.log(
      `fetchProductById error: product with id ${id} not found!`,
    )
  }
  return product
}
