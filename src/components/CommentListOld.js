import React from 'react'
import Comment from './Comment'
import toggleOpen from './../mixins/toggleOpen'

const CommentListOld = React.createClass({
    mixins: [toggleOpen],
    propTypes: {

    },

    componentWillMount() {
        console.log('---', 'mounting')
        debugger
    },

    componentDidMount() {
        console.log('---', 'mounted')
        debugger
    },

    componentWillUnmount() {
        console.log('---', 'unmounting')
        debugger
    },


    render() {
        const { comments } = this.props
        const { isOpen } = this.state
        if (!comments || !comments.length) return <p>No comments yet</p>

        const commentItems = comments.map(comment => <li key={comment.id}><Comment comment={comment}/></li>)
        const text = isOpen ? 'hide comments' : `show ${comments.length} comments`
        const body = isOpen && <ul>{commentItems}</ul>

        return (
            <div>
                <a href="#" onClick={this.toggleOpen}>{text}</a>
                {body}
            </div>
        )
    }
})

export default CommentListOld