import React from 'react';
import ReactDOM from 'react-dom';
import Layout from '@src/layout';
import { handleErrors } from '@utils/fetchHelper';

import './home.scss';

class Home extends React.Component {
  state = {
    products: [],
    total_pages: null,
    next_page: null,
    loading: true,
  }

  componentDidMount() {
    fetch('/api/products?page=1')
      .then(handleErrors)
      .then(data => {
        this.setState({
          products: data.products,
          total_pages: data.total_pages,
          next_page: data.next_page,
          loading: false,
        })
      })
  }

  loadMore = () => {
    if (this.state.next_page === null) {
      return;
    }
    this.setState({ loading: true });
    fetch(`/api/products?page=${this.state.next_page}`)
      .then(handleErrors)
      .then(data => {
        this.setState({
          products: this.state.products.concat(data.products),
          total_pages: data.total_pages,
          next_page: data.next_page,
          loading: false,
        })
      })
  }

  render () {
    const { products, next_page, loading } = this.state;

    return (
      <Layout>
        <div className="container pt-4">
          <h4 className="mb-1">Latest artwork availabe</h4>
          <p className="text-secondary mb-3">Explore some of the latest pieces of artwork to display in your business</p>
          <div className="row">
            {products.map(product => {
              return (
                <div key={product.id} className="col-6 col-lg-4 mb-4 product">
                  <a href={`/product/${product.id}`} className="text-body text-decoration-none">
                    <div className="product-image mb-1 rounded" style={{ backgroundImage: `url(${product.image_url})` }} />
                    <p className="text-uppercase mb-0 text-secondary"><small><b>{product.city}</b></small></p>
                    <h6 className="mb-0">{product.title}</h6>
                    <p className="mb-0"><small>${product.price} USD</small></p>
                  </a>
                </div>
              )
            })}
          </div>
          {loading && <p>loading...</p>}
          {(loading || next_page === null) ||
            <div className="text-center">
              <button
                className="btn btn-secondary mb-4"
                onClick={this.loadMore}
              >load more</button>
            </div>
          }
        </div>
      </Layout>
    )
  }
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Home />,
    document.body.appendChild(document.createElement('div')),
  )
})
