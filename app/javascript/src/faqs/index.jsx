import React from 'react'
import ReactDOM from 'react-dom'
import Faqs from './faqs';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Faqs />,
    document.body.appendChild(document.createElement('div')),
  )
})
