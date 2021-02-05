import React from 'react';
import Layout from '@src/layout';

import { handleErrors } from '@utils/fetchHelper';

import './product.scss';

class Product extends React.Component {
  state = {
    product: {},
    loading: true,
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.product_id}`)
      .then(handleErrors)
      .then(data => {
        this.setState({
          product: data.product,
          loading: false,
        })
      })
  }
  render () {
    const { product, loading } = this.state;
    if (loading) {
      return <p>loading...</p>;
    };
    const {
      id,
      title,
      description,
      city,
      country,
      type_art,
      style,
      category,
      condition,
      price,
      year,
      height,
      length,
      width,
      signature,
      image_url,
      user,
    } = product

    return (
      <Layout>
        <div className="product-image mb-3" style={{ backgroundImage: `url(${image_url})` }} />
        <div className="container">
          <div className="row">
            <div className="info col-12 col-lg-8">
              <div className="mb-3">
                <h3 className="mb-0">{title}</h3>
                <p className="text-uppercase mb-0 text-secondary"><small>{city}</small></p>
                <p className="mb-0"><small>Hosted by <b>{user.username}</b></small></p>
              </div>
              <div>
                <p className="mb-0 text-capitalize"><b>{type_art}</b></p>
                <p>
                  <span className="mr-3">{price}</span>
                  <span className="mr-3">{year}</span>
                  <span className="mr-3">{height}cm</span>
                  <span className="mr-3">{length}cm</span>
                  <span className="mr-3">{width}cm</span>
                </p>
              </div>
              <hr />
              <p>{description}</p>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Product
