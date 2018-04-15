import React from 'react'
import PropTypes from 'prop-types'

const ArticleImgCard = ({ article }) =>
  <div className='card-img'>
    <img src={ article.urlToImage }/>
    <div className='card-desc'>
      <a href={ article.url }><h3>{ article.title }</h3></a>
      <h4>By { (article.author === null || article.author === '') ? "Anonymous" : article.author }</h4>
      <p>{ article.description }</p>
      <p>{ article.publishedAt }</p>
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
