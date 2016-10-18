import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import CommentList from './CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import Loader from './Loader'
import './animation.css'
import { deleteArticle, loadArticle } from '../AC/articles'
import { connect } from 'react-redux'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool.isRequired,
        openArticle: PropTypes.func.isRequired
    }

    componentWillReceiveProps(nextProps) {
        const { isOpen, loadArticle, article: { id, text, loading } } = this.props
        if (nextProps.isOpen && !isOpen && !text && !loading) loadArticle(id)
    }

    render() {
        const { article, isOpen, openArticle } = this.props

        const loader = article.loading ? <Loader /> : null
        const body = isOpen ? <section>{loader}{article.text}<CommentList article = {article} ref = "commentList"/></section> : null

        return (
            <div>
                <h3 onClick = {openArticle}>{article.title}</h3>
                <a href = "#" onClick = {this.handleDelete}>delete me</a>
                <CSSTransition
                    transitionName="article"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}
                >
                    {body}
                </CSSTransition>
            </div>
        )
    }

    handleDelete = (ev) => {
        ev.preventDefault()
        const { article, deleteArticle } = this.props
        deleteArticle(article.id)
    }
}

export default connect(null, { deleteArticle, loadArticle })(Article)