import React, { Component } from 'react'
import CommentList from './CommentList'

export default class Article extends Component {
    static defaultProps = {

    }
    componentWillMount() {
        console.log('---', 'mounting')
    }

    componentDidMount() {
        console.log('---', 'mounted')
    }

    componentWillUnmount() {
        console.log('---', 'unmounting')
    }

    constructor(props) {
        super()
        this.state = {
            foo: 'bar'
        }
    }

/*
    state = {
        isOpen: false,
        foo: 'bar'
    }
*/

    render() {
        const { article, isOpen, openArticle } = this.props

        const body = isOpen ? <section>{article.text}<CommentList comments = {article.comments} /></section> : null
        // <section style = {{display: isOpen ? 'block' : 'none'}}>{article.text}</section>
        return (
            <div>
                <h3 onClick = {openArticle}>{article.title}</h3>
                {body}
            </div>
        )
    }

    toggleOpen = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

/*
export default (props) => {
    const { article } = props
    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    )
}*/
