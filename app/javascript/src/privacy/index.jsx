import React from 'react'
import ReactDOM from 'react-dom'
import Privacy from './privacy';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Privacy />,
    document.body.appendChild(document.createElement('div')),
  )
})
