import React, { Component } from 'react';

class LineItem extends Component {
  state = {};

  decrementQuantity = (lineItemId) => {
    const updatedQuantity = this.props.line_item.quantity - 1;
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  };

  incrementQuantity = (lineItemId) => {
    const updatedQuantity = this.props.line_item.quantity + 1;
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  };
  render() {
    return (
      <li className='h-25 flex  w-50-ns w-85 ma0 pa0'>
        <div className=' h-100 w-40 '>
          {this.props.line_item.variant.image ? (
            <figure className='ma0 pa0 '>
              <img
                className='w-40-l w-75-m w-100'
                src={this.props.line_item.variant.image.src}
                alt={`${this.props.line_item.title} product shot`}
              />
            </figure>
          ) : null}
        </div>

        <div className='flex flex-column items-left justify-between ml4 w-100'>
          <div className='dib mb3 w-100 flex flex-column'>
            <h2 className='f3-l f6 lh-copy'>{this.props.line_item.title}</h2>
            <h3 className='f3-l f6'>{this.props.line_item.variant.title}</h3>
          </div>
        </div>
        <div className='w-100 flex flex-column justify-between items-center'>
          <div className='flex flex-column'>
            <label className='mb3'>Quantity</label>
            <div className='dib mb3 w-100 flex justify-between items-center'>
              <div className='Line-item__quantity-container'>
                <button
                  className='bg-transparent mr3'
                  onClick={() =>
                    this.decrementQuantity(this.props.line_item.id)
                  }
                >
                  -
                </button>
                <span className='Line-item__quantity'>
                  {this.props.line_item.quantity}
                </span>
                <button
                  className='bg-transparent ml3'
                  onClick={() =>
                    this.incrementQuantity(this.props.line_item.id)
                  }
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <span className='tr'>
            ${' '}
            {(
              this.props.line_item.quantity * this.props.line_item.variant.price
            ).toFixed(2)}
          </span>
          <p
            className='Line-item__remove mr3'
            onClick={() =>
              this.props.removeLineItemInCart(this.props.line_item.id)
            }
          >
            remove
          </p>
        </div>
      </li>
    );
  }
}

export default LineItem;
