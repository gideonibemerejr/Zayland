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
      <div
        className={`Cart bl b--black w-100 w-25-ns ${
          this.props.isCartOpen ? 'Cart--open' : ''
        }`}
      >
        <header className='Cart__header'>
          <h2>Your cart</h2>
          <button onClick={this.props.handleCartClose} className='Cart__close'>
            ×
          </button>
        </header>
        <ul className='Cart__line-items'>{line_items}</ul>
        <footer className='Cart__footer'>
          <div className='flex flex-column justify-around'>
            <div className='Cart-info clearfix'>
              <div className='Cart-info__total Cart-info__small'>Subtotal</div>
              <div className='Cart-info__pricing'>
                <span className='pricing'>
                  $ {this.props.checkout.subtotalPrice}
                </span>
              </div>
            </div>
            <div className='Cart-info clearfix'>
              <div className='Cart-info__total Cart-info__small'>Taxes</div>
              <div className='Cart-info__pricing'>
                <span className='pricing'>
                  $ {this.props.checkout.totalTax}
                </span>
              </div>
            </div>
            <div className='Cart-info clearfix'>
              <div className='Cart-info__total Cart-info__small'>Total</div>
              <div className='Cart-info__pricing'>
                <span className='pricing'>
                  $ {this.props.checkout.totalPrice}
                </span>
              </div>
            </div>
          </div>

          <button
            className='Cart__checkout button black fw7'
            onClick={this.openCheckout}
          >
            CHECKOUT
          </button>
        </footer>
      </div>
    );
  }
}

export default Cart;
