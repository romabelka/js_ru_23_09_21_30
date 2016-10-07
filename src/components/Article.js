import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import CommentList from './CommentList'
import CSSTransition from 'react-addons-css-transition-group'
import './animate.css'
import { deleteArticle } from '../AC/articles'
import { connect } from 'react-redux'

class Article extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool.isRequired,
        openArticle: PropTypes.func.isRequired
    }

    componentDidMount() {
        console.log('---', 'mounting')
    }

    componentWillUnmount() {
        console.log('---', 'unmounting')
    }

    componentDidUpdate() {
        console.log('---', 'updating')
    }

    handleRef(ref) {
        console.log('---', findDOMNode(ref))
    }
/*

    shouldComponentUpdate(nextProps, nextState) {
        return (this.props.isOpen != nextProps.isOpen)
    }
*/

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
                <a href ="#" onClick = {this.handleDelete}>delete me</a>
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

    handleDelete = ev => {
        ev.preventDefault()
        const { article, deleteArticle } = this.props
        deleteArticle(article.id)
    }
}

export default connect(null, { deleteArticle })(Article)