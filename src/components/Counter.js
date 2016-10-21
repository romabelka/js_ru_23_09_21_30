import React, { Component, PropTypes } from 'react'
import { increment } from '../AC/counter'
import { connect } from 'react-redux'
import ComponentWrapper from './ComponentWrapper'

class Counter extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <ComponentWrapper>
                    <h3>{this.props.count}</h3>
                    <a href="#" onClick = {this.handleIncrement}>increment me</a>
                </ComponentWrapper>
            </div>
        )
    }

    handleIncrement = ev => {
        ev.preventDefault()
        this.props.increment()
    }
}

export default connect(state => ({
    count: state.count
}), { increment })(Counter)