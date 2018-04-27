import { articleAdapter } from '../adapters/articleAdapter'

export const fetchArticles = () => {
  const response = articleAdapter.fetchAll()

  return {
    type: 'ARTICLES',
    payload: response
  }
}

export const fetchSlugArticles = (slug) => {
  const response = articleAdapter.fetchSlug(slug)

  return {
    type: 'ARTICLES',
    payload: response
  }
}
