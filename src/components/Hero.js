import React from 'react'
import PropTypes from 'prop-types'

import { formatDate } from '../common/formatDate'

const Hero = ({ article }) => {
  if(!article) return null

  return (
    <div className='hero-img'>
      <img src={ article.urlToImage } alt='Hero'/>
      <div>
        <a href={ article.url } target="_blank"><h3>{ article.title }</h3></a>
        <h4>{ renderSource(article) }, { formatDate.normalize(new Date(article.publishedAt)) }</h4>
        <p>{ article.description }</p>
      </div>
    </div>
  )
}

const renderSource = article => {
  return article.source.name === null || article.source.name === '' ? "Anonymous" : article.source.name.replace(".com", "")
}

Hero.propTypes = {
  article: PropTypes.object
}

export default Hero
