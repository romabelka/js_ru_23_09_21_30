import React, { Component, PropTypes } from 'react'

class ComponentWrapper extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                My children are:
                {this.props.children}
            </div>
        )
    }
}

export default ComponentWrapper