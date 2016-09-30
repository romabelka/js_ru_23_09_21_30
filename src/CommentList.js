import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { comments } = this.props
        const { isOpen } = this.state
        if (!comments || !comments.length) return <p>No comments yet</p>

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment = {comment}/></li>)
        const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
        const body = isOpen && <ul>{commentItems}</ul>

        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{text}</a>
                {body}
            </div>
        )
    }

    toggleOpen = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default CommentList