import React from 'react'
import ReactDOM from 'react-dom'
import Cookies from './cookies';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Cookies />,
    document.body.appendChild(document.createElement('div')),
  )
})
