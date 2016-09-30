import React, { PropTypes } from 'react'

function Comment(props) {
    const { text, user } = props.comment
    return (
        <p>
            {text} <strong>by {user}</strong>
        </p>
    )
}

export default Comment