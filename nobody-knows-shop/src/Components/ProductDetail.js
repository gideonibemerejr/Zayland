import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { VariantSelector } from './index';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    let productId = this.props.match.params.id;
    this.props.client.product.fetch(productId).then((product) => {
      console.log(product);
      let defaultOptionValues = {};
      product.options.forEach((selector) => {
        defaultOptionValues[selector.name] = selector.values[0].value;
      });
      this.setState({
        product,
        variantImages: product.images,
        variant: product.variants[0],
        selectedOptions: defaultOptionValues,
        currentImage: 0,
      });
    });
  }
  handleImageNextClick = () => {
    if (this.state.currentImage === 0) {
      this.setState({ currentImage: this.state.currentImage + 1 });
    } else {
      return;
    }
  };
  handleImagePrevClick = () => {
    if (this.state.currentImage === 1) {
      this.setState({ currentImage: this.state.currentImage - 1 });
    } else {
      return;
    }
  };

  handleOptionChange = (event) => {
    const target = event.target;
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(
      this.state.product,
      selectedOptions
    );

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image,
    });
  };

  handleQuantityChange = (event) => {
    this.setState({
      selectedVariantQuantity: event.target.value,
    });
  };
  // variantImages = this.state.product && this.state.product.images;
  // variant =
  //   (this.state.product && this.state.selectedVariant) ||
  //   (this.state.product && this.state.product.variants[0]);
  // variantQuantity = this.state.selectedVariantQuantity || 1;

  render() {
    let variantImages = this.state.product && this.state.product.images;

    let variantQuantity = this.state.selectedVariantQuantity || 1;
    return !this.state.product ? (
      <div className='vh-100 w-100 flex justify-center items-center'>
        <h1>Loading</h1>
        <Loader type='Oval' color='white' height={30} width={30} />
      </div>
    ) : (
      <div className='flex flex-column flex-row-l justify-between items-center mt3'>
        <div className='flex flex-row-l w-50-l w-100 items-center justify-around'>
          {this.state.product.images && this.state.product.images.length > 1 && (
            <div
              className='pointer flex justify-center items-center'
              onClick={this.handleImagePrevClick}
            >
              <svg
                viewBox='0 0 24 24'
                width='30'
                height='30'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='css-i6dzq1'
              >
                <polyline points='15 18 9 12 15 6'></polyline>
              </svg>
            </div>
          )}
          {this.state.product.images && this.state.product.images.length && (
            <figure className='w-60-ns w-100 '>
              <img
                className='mw-100 db'
                src={variantImages[this.state.currentImage].src}
                alt={`${
                  this.state.product.title && this.state.product.title
                } product shot`}
              />
            </figure>
          )}
          {this.state.product.images && this.state.product.images.length > 1 && (
            <div
              className='pointer flex justify-center items-center'
              onClick={this.handleImageNextClick}
            >
              <svg
                viewBox='0 0 24 24'
                width='30'
                height='30'
                stroke='currentColor'
                strokeWidth='2'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='css-i6dzq1'
              >
                <polyline points='9 18 15 12 9 6'></polyline>
              </svg>
            </div>
          )}
        </div>
        <div className='w-50-l w-100 flex flex-column justify-center items-center'>
          <div className='mw6 db-l flex flex-column justify-center items-center'>
            <h2 className='f3-ns f5 ttu tracked mb0 tc tl-l'>
              {this.state.product.title}
            </h2>
            <h3 className='f3-ns f4 tc tl-l ttu tracked mt3 fw6 black-70'>
              ${this.state.variant && this.state.variant.price | 0}
            </h3>

            <div className='mt2 flex flex-column-m flex-row items-center justify-center justify-around-m w-100'>
              {this.state.product.options &&
                this.state.product.options.map((option) => {
                  return (
                    <div
                      key={option.id.toString()}
                      className='size-input flex flex-column flex-row-l items-center justify-center justify-between-ns mr6-l mr0 w-25-l w-50'
                    >
                      <label className=' mb3 mb0-ns f5'>SIZE</label>
                      <VariantSelector
                        handleOptionChange={this.handleOptionChange}
                        option={option}
                      />
                    </div>
                  );
                })}
              <div className='flex flex-column flex-row-l items-center justify-center justify-between-ns  mt4-m mt0 mr0 mr6-l w-25-ns w-50'>
                <label className='f5 mr2-ns mb2 mb0-ns tl '>QTY</label>

                <input
                  className='bg-transparent black fw5 w-50 quantity-input'
                  min='1'
                  type='number'
                  defaultValue={variantQuantity}
                  onChange={this.handleQuantityChange}
                />
              </div>
            </div>
            <div className='mt4-ns mt4 mx-auto'>
              <button
                className='f3-ns f5 pa2 bg-transparent b--black bw1 button w-50-l w-100 black fw5'
                onClick={() =>
                  this.props.addVariantToCart(
                    this.state.variant.id,
                    variantQuantity
                  )
                }
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
