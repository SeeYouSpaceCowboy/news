import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchArticles } from '../actions/articleActions'
import Hero from '../components/Hero'
import Feed from '../components/Feed'

class Home extends Component {
  componentWillMount() {
    this.props.fetchArticles()
  }

  render() {
    let { articles } = this.props

    return (
      <div>
        <Feed articles={ articles.slice(0, articles.length) }/>
      </div>
    )
  }
}

Home.propTypes = {
  articles: PropTypes.object,

  fetchArticles: PropTypes.function
}

const mapStateToProps = state => {
  return {
    articles: state.articles.all,
    firstArticle: state.articles.all[0]
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchArticles: fetchArticles
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
