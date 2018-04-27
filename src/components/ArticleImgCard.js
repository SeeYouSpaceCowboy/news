import React from 'react'
import PropTypes from 'prop-types'

import { formatDate } from '../common/formatDate'

const ArticleImgCard = ({ article }) =>
  <div className='card-img'>
    <div className='card-img-container'>
      <img src={ article.urlToImage } alt='article-hero'/>
    </div>
    <div className='card-desc'>
      <a href={ article.url } target="_blank"><h3>{ article.title }</h3></a>
      <h4>{ renderSource(article) }, { formatDate.normalize(new Date(article.publishedAt)) }</h4>
      <p>{ article.description }</p>
    </div>
  </div>

const renderSource = article => {
  return article.source.name === null || article.source.name === '' ? "Anonymous" : article.source.name.replace(".com", "")
}

ArticleImgCard.propTypes = {
  article: PropTypes.object
}

export default ArticleImgCard
