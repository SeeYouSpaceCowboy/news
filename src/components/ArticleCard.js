import React from 'react'
import PropTypes from 'prop-types'

const ArticleCard = ({ article }) =>
  <div className='card' style={ cardStyle }>
    <a href={ article.url }><h1>{ article.title }</h1></a>
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

const cardStyle = {
  width: '30%',
  overflow: 'auto',
  margin: '1.25%'
}

const imgStyle = {
  minWidth: 'inherit',
  height: '20em'
}

export default ArticleCard
