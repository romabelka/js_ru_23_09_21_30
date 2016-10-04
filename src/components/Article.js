import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import CommentList from './CommentList'

export default class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool.isRequired,
        openArticle: PropTypes.func.isRequired
    }

    handleRef(ref) {
        console.log('---', findDOMNode(ref))
    }

    render() {
        const { article, isOpen, openArticle } = this.props

        const body = isOpen ? (
            <section>
                {article.text}
                <CommentList ref = {this.handleRef} comments = {article.comments}/>
            </section>
        ) : null

        return (
            <div>
                <h3 onClick = {openArticle}>{article.title}</h3>
                {body}
            </div>
        )
    }
}