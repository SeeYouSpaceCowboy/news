import React from 'react'
import PropTypes from 'prop-types'

const ArticleImgCard = ({ article }) =>
  <div className='card-img' style={ cardStyle }>
    <img src={ article.urlToImage } style={ imgStyle }/>
    <div>
      <a href={ article.url }><h2>{ article.title }</h2></a>
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

const cardStyle = {
  width: '30%',
  overflow: 'auto',
  margin: '1.25%'
}

const imgStyle = {
  minWidth: 'inherit',
  height: '20em'
}

export default ArticleImgCard
