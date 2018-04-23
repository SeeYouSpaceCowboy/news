import React from 'react'
import PropTypes from 'prop-types'

import { formatDate } from '../common/formatDate'

const ArticleImgCard = ({ article }) =>
  <div className='card-img'>
    <div className='card-img-container'>
      <img src={ article.urlToImage }/>
    </div>
    <div className='card-desc'>
      <a href={ article.url } target="_blank"><h3>{ article.title }</h3></a>
      <h4>{ (article.source.name === null || article.source.name === '') ? "Anonymous" : article.source.name.replace(".com", "") }, { formatDate.normalize(new Date(article.publishedAt)) }</h4>
      <p>{ article.description }</p>
    </div>
  </div>

ArticleImgCard.propTypes = {
  article: PropTypes.object
  // title: PropTypes.string,
  // author: PropTypes.string,
  // description: PropTypes.string,
  // urlToImage:  PropTypes.string,
  // url:  PropTypes.string
}

export default ArticleImgCard
