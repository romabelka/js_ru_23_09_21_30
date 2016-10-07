import React from 'react'
import { render } from 'react-dom'
import Container from './components/Container'
import store from './store'
import { Provider } from 'react-redux'

render(<Provider store = {store}><Container /></Provider>, document.getElementById('container'))