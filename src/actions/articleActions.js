import { articleAdapter } from '../adapters/articleAdapter'

export const fetchArticles = () => {
  const response = articleAdapter.fetchAll()

  return {
    type: 'ARTICLES',
    payload: response
  }
}
