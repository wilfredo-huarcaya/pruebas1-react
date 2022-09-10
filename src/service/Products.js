import products from '../assets/data'

const getProducts = () => {
  if (products) {
    return Promise.resolve(products)
  }
  return console.log('error')
}
export default getProducts
