import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { fetchSlugArticles } from '../actions/articleActions'
import Feed from '../components/Feed'

class SlugFeed extends Component {
  componentWillMount() {
    let slug = this.props.match.params.slug
    this.props.fetchSlugArticles(slug)
  }

  render() {
    let { articles } = this.props
    
    return <Feed articles={ articles }/>
  }
}

SlugFeed.propTypes = {
  match: PropTypes.object,
  articles: PropTypes.array,

  fetchSlugArticles: PropTypes.func
}

const mapStateToProps = state => {
  return {
    articles: state.articles.all
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchSlugArticles: fetchSlugArticles
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SlugFeed)
