import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

function CommentsPaginator(props) {
    const { total } = props
    if (!total) return null
    const links = Array(...Array(Math.floor((total - 1)/5) + 1))
        .map((_, index) => (
            <li key={index}>
                <Link to={`/comments/${index + 1}`}>{index + 1}</Link>
            </li>)
        )
    return <ul>{links}</ul>
}

CommentsPaginator.propTypes = {
}

export default connect((state) => ({
    total: state.comments.get('total')
}), {})(CommentsPaginator)