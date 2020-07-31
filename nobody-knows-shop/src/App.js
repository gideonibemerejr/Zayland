import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { grainedService } from './utils';
import { HomePage, ProductPage, CartPage } from './Pages';

class App extends Component {
  state = {
    isCartOpen: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
    activeProduct: '',
    total: 0,
  };
  options = {
    animate: true,
    patternWidth: 485.5,
    patternHeight: 485.5,
    grainOpacity: 0.15,
    grainDensity: 1,
    grainWidth: 0.75,
    grainHeight: 0.75,
  };

  componentWillMount() {
    this.props.client.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      });
    });

    this.props.client.product.fetchAll().then((res) => {
      this.setState({
        products: res,
      });
    });

    this.props.client.shop.fetchInfo().then((res) => {
      this.setState({
        shop: res,
      });
    });
  }
  componentDidMount() {
    grainedService.grained('#grained', this.options);
  }

  addVariantToCart = (variantId, quantity) => {
    this.setState({
      isCartOpen: true,
    });

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = this.state.checkout.id;

    return this.props.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then((res) => {
        this.setState({
          checkout: res,
        });
      });
  };

  updateQuantityInCart = (lineItemId, quantity) => {
    const checkoutId = this.state.checkout.id;
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) },
    ];

    return this.props.client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then((res) => {
        this.setState({
          checkout: res,
        });
      });
  };

  removeLineItemInCart = (lineItemId) => {
    const checkoutId = this.state.checkout.id;

    return this.props.client.checkout
      .removeLineItems(checkoutId, [lineItemId])
      .then((res) => {
        this.setState({
          checkout: res,
        });
      });
  };

  handleCartClose = () => {
    this.setState({
      isCartOpen: false,
    });
  };

  setActiveProduct = (productId) => {
    let activeProduct = this.state.products.filter(
      (product) => product.id === productId
    );

    this.setActiveProduct(activeProduct);
  };

  renderCartPage = () => {
    return (
      <CartPage
        checkout={this.state.checkout}
        isCartOpen={this.state.isCartOpen}
        handleCartClose={this.handleCartClose}
        updateQuantityInCart={this.updateQuantityInCart}
        removeLineItemInCart={this.removeLineItemInCart}
      />
    );
  };

  updateTotal = (total) => {
    this.setState({ total });
  };

  // renderCartTotal = () => {
  //   let totalToAddTo = this.state.total;
  //   this.state.checkout.lineItems.forEach((lineItem) =>
  //     lineItem.variableValues.lineItems.forEach(
  //       (item) => (totalToAddTo = totalToAddTo + item.quantity)
  //     )
  //   );
  //   this.updateTotal(totalToAddTo);
  //   console.log(totalToAddTo);
  //   return totalToAddTo;
  // };

  render() {
    return (
      <>
        {this.state.isCartOpen && this.renderCartPage()}

        <div id='grained' className='home-grid'>
          <nav className='db dt-l w-100 border-box pa3 ph5-l relative'>
            <Link
              className='db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l'
              to='/'
              title='Home'
            >
              <h1 className='ma0 f3 f3-l'>ZAYLAND</h1>
            </Link>
            <div className='db dtc-l v-mid w-100 w-75-l tc tr-l'>
              <a
                className='link dim dark-gray f6 f5-l  fw5 dib mr3 mr4-l'
                href='https://www.zaylandxx.com/'
                title='Music'
              >
                MUSIC
              </a>
              <a
                className='link dim dark-gray f6 f5-l fw5 dib mr3 mr4-l'
                href='https://www.zaylandxx.com/credits'
                title='Credits'
              >
                CREDITS
              </a>
              <a
                rel='noopener noreferrer'
                target='_blank'
                className='link dim dark-gray f6 f5-l fw5 dib mr3 mr4-l'
                href='https://www.zaylandxx.com/watch'
                title='Watch'
              >
                WATCH
              </a>
              <div
                className='pointer link dim dark-gray f6 f5-l fw5 dib '
                onClick={() =>
                  this.setState({ isCartOpen: !this.state.isCartOpen })
                }
                title='Cart'
              >
                CART
                {/* {`(${this.renderCartTotal()})`} */}
              </div>
            </div>
          </nav>

          {!this.state.isCartOpen && (
            <Switch>
              <Route
                path='/products/:id'
                render={({ match }) => (
                  <ProductPage
                    match={match}
                    addVariantToCart={this.addVariantToCart}
                    client={this.props.client}
                  />
                )}
              />
              <Route
                path='/cart'
                render={() => (
                  <CartPage
                    checkout={this.state.checkout}
                    isCartOpen={this.state.isCartOpen}
                    handleCartClose={this.handleCartClose}
                    updateQuantityInCart={this.updateQuantityInCart}
                    removeLineItemInCart={this.removeLineItemInCart}
                  />
                )}
              />
              <Route
                exact
                path='/'
                render={() => (
                  <HomePage
                    setActiveProduct={this.setActiveProduct}
                    products={this.state.products}
                    client={this.props.client}
                    addVariantToCart={this.addVariantToCart}
                  />
                )}
              />
            </Switch>
          )}
        </div>
      </>
    );
  }
}

export default App;
