import React, { Component } from 'react';
import Product from './Product';

class ProductList extends Component {
  state = {};

  render() {
    let products = this.props.products.map((product) => {
      return (
        <Product
          setActiveProduct={this.props.setActiveProduct}
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
        />
      );
    });
    return (
      <div className='w-100 pa2-ns flex flex-wrap justify-around'>
        {products}
      </div>
    );
  }
}

export default ProductList;
