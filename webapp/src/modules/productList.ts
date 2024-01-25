export type Product = {
  id: number
  title: string
  description: string
  photos: string[]
  price: number
  tags: string[]
}

export type ProductsApiResponse = Product[]

export async function fetchProducts(): Promise<ProductsApiResponse | void> {
  try {
    return fetch('http://localhost:3000/api/products').then(
      (response) => response.json() as Promise<ProductsApiResponse>,
    )
  } catch (error) {
    // for debugging
    console.log('fetchProducts error: ', { error })
  }
}

// TODO: change this function to fetch prooduct directly to api
// Assume that we cannot change anyting in the API
// export async function fetchProductById(id: number): Promise<Product | void> {
//   const data = await fetchProducts()
//   if (!data) return
//   // Find product by id
//   const product = data.products.find((product) => product.id === id)
//   // Logging error, if product not found
//   if (!product) {
//     return console.log(
//       `fetchProductById error: product with id ${id} not found!`,
//     )
//   }
//   return product
// }
