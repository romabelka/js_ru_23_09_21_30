import React, { Component, PropTypes } from 'react'
import store from '../store'
import { increment } from '../AC/counter'

class Counter extends Component {
    static propTypes = {

    };

    constructor() {
        super()
        this.state = {
            count: store.getState()
        }
    }

    componentDidMount() {
        store.subscribe(this.handleStoreChange)
    }

    handleStoreChange = () => {
        this.setState({
            count: store.getState()
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.count}</h3>
                <a href="#" onClick = {this.handleIncrement}>increment me</a>
            </div>
        )
    }

    handleIncrement = ev => {
        ev.preventDefault()
        store.dispatch(increment())
    }
}

export default Counter