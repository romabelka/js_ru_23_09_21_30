import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { Link } from 'react-router'

class Container extends Component {
    static propTypes = {};

    render() {
        return (
            <Provider store = {store}>
                <div>
                    <ul>
                        <li><Link to = "/articles" activeClassName = "active" activeStyle = {{color: 'red'}}>articles</Link></li>
                        <li><Link to = "/counter" activeClassName = "active" activeStyle = {{color: 'red'}}>counter</Link></li>
                        <li><Link to = "/new" activeClassName = "active" activeStyle = {{color: 'red'}}>new</Link></li>
                        <li><Link to = "/filters" activeClassName = "active" activeStyle = {{color: 'red'}}>filters</Link></li>
                    </ul>
                    {this.props.children}
                </div>
            </Provider>
        )
    }
}

export default Container