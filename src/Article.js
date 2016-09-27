import React, { Component } from 'react'

export default class Article extends Component {

    state = {
        isOpen: false,
        foo: 'bar'
    }

    render() {
        const { article } = this.props
        const { isOpen } = this.state
        console.log('---', this.state)

        const body = isOpen ? <section>{article.text}</section> : null
        // <section style = {{display: isOpen ? 'block' : 'none'}}>{article.text}</section>
        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
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
