import React, { Component, PropTypes } from 'react'
import ArticleList from '../components/ArticleList'

class ArticleListPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <div>
                    <ArticleList />
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default ArticleListPage