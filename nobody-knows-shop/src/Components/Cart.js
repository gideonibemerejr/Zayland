import React, { Component } from 'react';
import { LineItem } from './index';

class Cart extends Component {
  openCheckout = () => {
    window.open(this.props.checkout.webUrl);
  };

  render() {
    let line_items = this.props.checkout.lineItems.map((line_item) => {
      return (
        <LineItem
          updateQuantityInCart={this.props.updateQuantityInCart}
          removeLineItemInCart={this.props.removeLineItemInCart}
          key={line_item.id.toString()}
          line_item={line_item}
        />
      );
    });
    return (
      <div className='bl b--black w-100 relative cart-grid'>
        <div className=''>
          <div
            onClick={this.props.handleCartClose}
            className='flex justify-end items-center ma4 '
          >
            <svg
              viewBox='0 0 24 24'
              width='24'
              height='24'
              stroke='currentColor'
              strokeWidth='2'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='css-i6dzq1'
            >
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <line x1='6' y1='6' x2='18' y2='18'></line>
            </svg>
          </div>
        </div>
        {line_items.length ? (
          <ul className='ma0 pa0 h-100 list flex flex-column justify-center items-center'>
            {line_items}
          </ul>
        ) : (
          <div className='vh-50 f2 flex justify-center items-center'>
            <h2 className='ma0'>Your cart is empty</h2>
          </div>
        )}
        <footer className='flex flex-column items-center justify-center'>
          <div className='flex flex-column justify-center w-50'>
            <div className='flex justify-between items-center'>
              <div className='f2'>Subtotal</div>
              <div className='Cart-info__pricing'>
                <span className='pricing'>
                  $ {this.props.checkout.subtotalPrice}
                </span>
              </div>
            </div>

            <div className='flex justify-between items-center'>
              <div className='f2'>Total</div>
              <div className='Cart-info__pricing'>
                <span className='pricing'>
                  $ {this.props.checkout.totalPrice}
                </span>
              </div>
            </div>
          </div>
          <div className='flex justify-end items-end w-50 mt4'>
            <button
              disabled={line_items.length ? false : true}
              className='f3 ph5 pv3 bg-transparent b--black bw1 button  black fw5 '
              onClick={this.openCheckout}
            >
              CHECKOUT
            </button>
          </div>
        </footer>
      </div>
    );
  }
}

export default Cart;
