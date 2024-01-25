export type Product = {
  id: number
  title: string
  description: string
  photos: string[]
  price: number
  tags: string[]
}

export type ProductsApiResponse = Product[]

export type ProductApiResponse = Product | null

export async function fetchProducts(): Promise<ProductsApiResponse | void> {
  try {
    return await fetch('http://localhost:3000/api/products').then(
      (response) => response.json() as Promise<ProductsApiResponse>,
    )
  } catch (error) {
    // For debugging
    console.log('fetchProducts error: ', { error })
  }
}

export async function fetchProductById(
  id: number,
): Promise<ProductApiResponse> {
  try {
    // Send productId to server through path params
    return await fetch(`http://localhost:3000/api/product/${id}`).then(
      (response) => response.json() as Promise<ProductApiResponse>,
    )
  } catch (error) {
    // For debugging
    console.log(`fetchProductById error: Product with id ${id} does not exist`)
    return null
  }
}
