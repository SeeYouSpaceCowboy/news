import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { fetchArticles } from '../actions/articleActions'
import ArticleCard from '../components/ArticleCard'
import ArticleImgCard from '../components/ArticleImgCard'

class Feed extends Component {
  constructor() {
    super()

    this.renderArticles = this.renderArticles.bind(this)
  }

  componentWillMount() {
    this.props.fetchArticles()
  }

  render() {
    let { articles } = this.props

    if(articles.all.length === 0) return "Loading Articles..."

    return (
      <div style={ wrapStyle }>
        { this.renderArticles() }
      </div>
    )
  }

  renderArticles() {
    let { articles } = this.props

    return articles.all.map((article, i) => {
      if(!article.urlToImage) return <ArticleCard key={ i } article={ article }/>

      return (
        <ArticleImgCard key={ i } article={ article }/>
      )
    })
  }
}

const wrapStyle = {
  display: 'flex',
  flexWrap: 'wrap'
}

const mapStateToProps = state => {
  return {
    articles: state.articles
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchArticles: fetchArticles
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)
