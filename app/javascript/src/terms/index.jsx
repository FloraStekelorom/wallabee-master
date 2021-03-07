import React from 'react'
import ReactDOM from 'react-dom'
import Terms from './terms'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Terms />,
    document.body.appendChild(document.createElement('div')),
  )
})
