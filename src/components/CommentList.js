import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from './../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import Loader from './Loader'
import { connect } from 'react-redux'
import { getRelation } from '../store/helpers'
import { addComment, loadCommentsForArticle } from '../AC/comments'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array,
        //form toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    componentWillReceiveProps({ article: { id, commentsLoading, commentsLoaded }, isOpen, loadCommentsForArticle }) {
        if (isOpen && !this.props.isOpen && !commentsLoaded && !commentsLoading) loadCommentsForArticle(id)
    }

    render() {
        const { article, comments, addComment, isOpen, toggleOpen } = this.props
        if (!comments || !comments.length) return <div>
            <p>No comments yet</p>
            <NewCommentForm articleId={article.id} addComment={addComment}/>
        </div>

        const commentItems = article.commentsLoaded && comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
        const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
        const content = article.commentsLoading || !article.commentsLoaded ? <Loader /> : <ul>{commentItems}</ul>

        const body = isOpen && <div>
                {content}
                <NewCommentForm articleId={article.id} addComment={addComment}/>
            </div>

        return (
            <div>
                <a href="#" onClick={toggleOpen}>{text}</a>
                {body}
            </div>
        )
    }
}

export default connect((state, props) => ({
    comments: getRelation(props.article, 'comments', state)
}), { addComment, loadCommentsForArticle })(toggleOpen(CommentList))