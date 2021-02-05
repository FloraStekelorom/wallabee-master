import React from 'react';
import ReactDOM from 'react-dom';
import Product from './product';

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('params');
  const data = JSON.parse(node.getAttribute('data-params'));

  ReactDOM.render(
    <Product product_id={data.product_id} />,
    document.body.appendChild(document.createElement('div')),
  )
})
