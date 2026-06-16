import { request } from '@/utils/request'
import { products, categories } from '@/data/products'

export function getProducts(category = '全部') {
  const list =
    category === '全部'
      ? products
      : products.filter((p) => p.category === category)
  return request(list)
}

export function getCategories() {
  return request(categories)
}

export function getProductById(id) {
  const product = products.find((p) => p.id === Number(id))
  return request(product || null)
}
