import axios from 'axios'
import { constant } from '../constants'

axios.defaults.baseURL = constant.URL

export const articleAdapter = {
  fetchAll: () => {
    return axios.get(`?apiKey=${ constant.API_KEY }&country=us`)
      .then(response => response.data.articles)
      .catch(error => error)
  },
}
