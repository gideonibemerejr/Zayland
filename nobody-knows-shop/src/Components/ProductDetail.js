import React, { Component } from 'react';

import React, { Component } from 'react';
import VariantSelector from './VariantSelector';

class ProductDetail extends Component {
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues, currentImage: 0 };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
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
  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event) {
    const target = event.target;
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(
      this.props.product,
      selectedOptions
    );

    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image,
    });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value,
    });
  }

  render() {
    let variantImages = this.props.product.images;
    let variant = this.state.selectedVariant || this.props.product.variants[0];
    let variantQuantity = this.state.selectedVariantQuantity || 1;

    let variantSelectors = this.props.product.options.map((option) => {
      return (
        <div
          key={option.id.toString()}
          className='flex flex-column justify-center-ns items-center-ns  mh4 w-25'
        >
          <label className='mb2 f5 f3-ns'>SIZE</label>
          <VariantSelector
            handleOptionChange={this.handleOptionChange}
            option={option}
          />
        </div>
      );
    });

    return (
      <div className='flex flex-column justify-between items-center'>
        <div className='flex flex-row-ns  w-100 mw8 items-center justify-around'>
          <div className='pointer' onClick={this.handleImagePrevClick}>
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
          {this.props.product.images.length && (
            <figure className='w-50-ns w-100 tc'>
              <img
                className='mw-100 db'
                src={variantImages[this.state.currentImage].src}
                alt={`${this.props.product.title} product shot`}
              />
            </figure>
          )}
          <div className='pointer mr4' onClick={this.handleImageNextClick}>
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
        </div>

        <h5 className='tc f3-ns f5 ttu tracked mb2'>
          {this.props.product.title}
        </h5>
        <span className='tc f3 ttu tracked mb3'>${variant.price | 0}</span>
        <div
          className='tc f3-ns f5 ttu tracked description w-25-l w-50-m w-100 lh-copy'
          dangerouslySetInnerHTML={{
            __html: this.props.product.descriptionHtml,
          }}
        />
        <div className='mt3 flex justify-center items-center'>
          {variantSelectors}
          <div className='flex flex-column justify-center items-center mh4 w-25-ns'>
            <label className='mb2 f5 f3-ns'>QTY</label>

            <input
              className='bg-transparent black quantity'
              min='1'
              type='number'
              defaultValue={variantQuantity}
              onChange={this.handleQuantityChange}
            />
          </div>
        </div>

        <button
          className='f2 button w-50 w-25-ns black fw5'
          onClick={() =>
            this.props.addVariantToCart(variant.id, variantQuantity)
          }
        >
          BUY
        </button>
      </div>
    );
  }
}

export default ProductDetail;
