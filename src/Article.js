import React, { Component } from 'react'

export default class Article extends Component {

    state = {
        isOpen: false
    }

    render() {
        const { article } = this.props
        const { isOpen } = this.state

        const body = isOpen ? <section>{article.text}</section> : null
        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{article.title}</h3>
                {body}
            </div>
        )
    }

    toggleOpen = ev => {
        console.log('---', ev)
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
