import React, { Component, PropTypes } from 'react'
import Article from '../components/Article'

class ArticlePage extends Component {
    static propTypes = {

    };

    render() {
        return <Article id = {this.props.params.id} isOpen = {true} />
    }
}

export default ArticlePage