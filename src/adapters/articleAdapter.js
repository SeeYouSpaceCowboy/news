import axios from 'axios'
import { constant } from '../common/constants'

axios.defaults.baseURL = constant.URL

export const articleAdapter = {
  fetchAll: () => {
    return axios.get(`?apiKey=${ constant.API_KEY }&country=us&category=general`)
      .then(response => response.data.articles)
      .catch(error => error)
  },
}
