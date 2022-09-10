import products from '../assets/data'

async function getProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 2000)
  })
}
export default getProducts
