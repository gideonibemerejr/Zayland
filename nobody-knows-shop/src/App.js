import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ProductDetail, Cart } from './Components';
import { HomePage, ProductPage } from './Pages';
class App extends Component {
  state = {
    isCartOpen: false,
    checkout: { lineItems: [] },
    products: [],
    shop: {},
    activeProduct: '',
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

  setActiveProduct = (productTitle) => {
    let activeProduct = this.state.products.filter(
      (product) => product.title === productTitle
    );

    this.setState({ activeProduct });
  };

  renderProductPage = (activeProduct) => {
    return (
      <ProductDetail
        addVariantToCart={this.addVariantToCart}
        client={this.props.client}
        key={activeProduct.id.toString()}
        product={activeProduct}
      />
    );
  };

  render() {
    return (
      <div className='home-grid'>
        <nav className='dt w-100 border-box pa3 ph5-ns'>
          <a
            className='dtc v-mid mid-gray link dim w-25'
            href='https://www.zaylandxx.com'
            title='Home'
          >
            ZAYLAND
          </a>
          <div className='dtc v-mid w-75 tr'>
            <a
              className='link dim dark-gray f6 f5-ns dib mr3 mr4-ns'
              href='https://www.zaylandxx.com/credits'
              title='Credits'
            >
              Credits
            </a>
            <a
              rel='noopener noreferrer'
              target='_blank'
              className='link dim dark-gray f6 f5-ns dib mr3 mr4-ns'
              href='https://www.youtube.com/watch?v=8YCQuLXMNWI'
              title='Watch'
            >
              Watch
            </a>
            <a
              className='link dim dark-gray f6 f5-ns dib mr3 mr4-ns'
              href='#'
              title='About'
            >
              Cart
            </a>
          </div>
        </nav>
        {/* {!this.state.isCartOpen && (
          <div className='flex justify-center items-center mh4-l mt4-l mt2 '>
            <button
              className='App__view-cart black f3 fw7 tracked'
              onClick={() => this.setState({ isCartOpen: true })}
            >
              CART
            </button>
          </div>
        )} */}

        <Switch>
          <Route
            path='/products/:id'
            render={this.renderProductPage(this.state.activeProduct)}
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
      </div>
    );
  }
}

export default App;
