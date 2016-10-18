import React, { Component, PropTypes } from 'react'

class NewCommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired,
        addComment: PropTypes.func.isRequired
    };

    state = {
        text: '',
        user: ''
    }

    handleChange = field => ev => this.setState({
        [field]: ev.target.value
    })

    handleSubmit = ev => {
        ev.preventDefault()
        const { addComment, articleId } = this.props
        addComment(this.state, articleId)

        this.setState({
            user: '',
            text: ''
        })
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                comment: <input type="text" value={this.state.text} onChange = {this.handleChange('text')}/>
                user: <input type="text" value={this.state.user} onChange = {this.handleChange('user')}/>
                <input type = "submit"/>
            </form>
        )
    }
}

export default NewCommentForm