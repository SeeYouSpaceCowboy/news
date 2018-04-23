import axios from 'axios'
import { constants } from '../common/constants'

axios.defaults.baseURL = constants.URL

export const articleAdapter = {
  fetchAll: () => {
    return axios.get(`top-headlines?apiKey=${ constants.API_KEY }&sources=wired,the-verge,polygon,recode,new-scientist,techcrunch,mashable,new-scientist,axios,bloomberg,the-new-york-times,google-news,cnn,usa-today&pageSize=100`)
      .then(response => response.data.articles)
      .catch(error => error)
  },
}
