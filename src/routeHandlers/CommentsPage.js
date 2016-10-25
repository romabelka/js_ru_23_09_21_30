import React, { Component, PropTypes } from 'react'
import CommentsPageComponent from '../components/CommentsPage'

class CommentsPage extends Component {
    static propTypes = {

    };

    render() {
        return <CommentsPageComponent page = {Number(this.props.params.page)}/>
    }
}


export default CommentsPage