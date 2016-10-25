import React, { Component, PropTypes } from 'react'

class ErrorPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>{this.props.location.query.message}</h1>
            </div>
        )
    }
}

export default ErrorPage