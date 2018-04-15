import React from 'react'
import PropTypes from 'prop-types'

const ArticleCard = ({ article }) =>
  <div className='card'>
    <a href={ article.url }><h2>{ article.title }</h2></a>
    <h4>By { (article.author === null || article.author === '') ? "Anonymous" : article.author }</h4>
    <p>{ article.description }</p>
    <p>{ article.publishedAt }</p>
  </div>

ArticleCard.propTypes = {
  article: PropTypes.object
  // title: PropTypes.string,
  // author: PropTypes.string,
  // description: PropTypes.string,
  // urlToImage:  PropTypes.string,
  // url:  PropTypes.string
}

export default ArticleCard
