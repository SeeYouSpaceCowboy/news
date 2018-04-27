import React from 'react'
import PropTypes from 'prop-types'

import { formatDate } from '../common/formatDate'

const ArticleCard = ({ article }) =>
  <div className='card'>
    <a href={ article.url } target="_blank"><h2>{ article.title }</h2></a>
    <h4>{ renderSource(article) }, { formatDate.normalize(new Date(article.publishedAt)) }</h4>
    <p>{ article.description }</p>
  </div>

const renderSource = article => {
  return article.source.name === null || article.source.name === '' ? "Anonymous" : article.source.name.replace(".com", "")
}

ArticleCard.propTypes = {
  article: PropTypes.object
}

export default ArticleCard
