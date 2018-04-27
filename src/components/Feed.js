import React from 'react'
import PropTypes from 'prop-types'

import ArticleCard from './ArticleCard'
import ArticleImgCard from './ArticleImgCard'

const Feed = ({ articles }) =>
<div style={ wrapStyle }>
  { renderArticles(articles) }
</div>

function renderArticles(articles) {
  if(articles.length === 0) return "Loading Articles..."

  return articles.map((article, i) => {
    if(!article.urlToImage) return <ArticleCard key={ i } article={ article }/>

    return (
      <ArticleImgCard key={ i } article={ article }/>
    )
  })
}

Feed.propTypes = {
  articles: PropTypes.array
}

const wrapStyle = {
  display: 'flex',
  flexWrap: 'wrap'
}

export default Feed
