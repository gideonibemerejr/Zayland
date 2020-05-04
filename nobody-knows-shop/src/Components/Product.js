import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { VariantSelector } from './index';

class Product extends Component {
  state = {
    ...this.getInitialState(),
  };

  getInitialState = () => {
    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    return {
      selectedOptions: defaultOptionValues,
      currentImage: 0,
    };
  };

  findImage = (images, variantId) => {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  };

  handleOptionChange = (event) => {
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
  };

  handleQuantityChange = (event) => {
    this.setState({
      selectedVariantQuantity: event.target.value,
    });
  };

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
      <article class='fl w-100 w-50-m  w-25-ns pa2-ns'>
        <div class='aspect-ratio aspect-ratio--1x1'>
          {/* <img style="background-image:url(http://mrmrs.github.io/images/0006.jpg);" 
      class="db bg-center cover aspect-ratio--object" /> */}
          {this.props.product.images.length && (
            <img
              className='db bg-center cover aspect-ratio--object'
              src={variantImages[this.state.currentImage].src}
              alt={`${this.props.product.title} product shot`}
            />
          )}
        </div>
        <Link
          onClick={this.props.updateActiveProduct(this.props.product.title)}
          to={`/products/${this.props.product.title}`}
          class='ph2 ph0-ns pb3 link db'
        >
          <h3 class='f5 f4-ns mb0 black-90'> {this.props.product.title}</h3>
          <h3 class='f6 f5 fw4 mt2 black-60'>${variant.price | 0}</h3>
        </Link>
      </article>

      //   <div className='flex flex-column justify-between items-center'>
      //     <div className='flex flex-row-ns  w-100 mw8 items-center justify-around'>
      //       <div className='pointer' onClick={this.handleImagePrevClick}>
      //         <svg
      //           viewBox='0 0 24 24'
      //           width='30'
      //           height='30'
      //           stroke='currentColor'
      //           strokeWidth='2'
      //           fill='none'
      //           strokeLinecap='round'
      //           strokeLinejoin='round'
      //           className='css-i6dzq1'
      //         >
      //           <polyline points='15 18 9 12 15 6'></polyline>
      //         </svg>
      //       </div>
      //       {this.props.product.images.length && (
      //         <figure className='w-50-ns w-100 tc'>
      //           <img
      //             className='mw-100 db'
      //             src={variantImages[this.state.currentImage].src}
      //             alt={`${this.props.product.title} product shot`}
      //           />
      //         </figure>
      //       )}
      //       <div className='pointer mr4' onClick={this.handleImageNextClick}>
      //         <svg
      //           viewBox='0 0 24 24'
      //           width='30'
      //           height='30'
      //           stroke='currentColor'
      //           strokeWidth='2'
      //           fill='none'
      //           strokeLinecap='round'
      //           strokeLinejoin='round'
      //           className='css-i6dzq1'
      //         >
      //           <polyline points='9 18 15 12 9 6'></polyline>
      //         </svg>
      //       </div>
      //     </div>

      //     <h5 className='tc f3-ns f5 ttu tracked mb2'>

      //     </h5>
      //     <span className='tc f3 ttu tracked mb3'>${variant.price | 0}</span>
      //     <div
      //       className='tc f3-ns f5 ttu tracked description w-25-l w-50-m w-100 lh-copy'
      //       dangerouslySetInnerHTML={{
      //         __html: this.props.product.descriptionHtml,
      //       }}
      //     />
      //     <div className='mt3 flex justify-center items-center'>
      //       {variantSelectors}
      //       <div className='flex flex-column justify-center items-center mh4 w-25-ns'>
      //         <label className='mb2 f5 f3-ns'>QTY</label>

      //         <input
      //           className='bg-transparent black quantity'
      //           min='1'
      //           type='number'
      //           defaultValue={variantQuantity}
      //           onChange={this.handleQuantityChange}
      //         />
      //       </div>
      //     </div>

      //     <button
      //       className='f2 button w-50 w-25-ns black fw5'
      //       onClick={() =>
      //         this.props.addVariantToCart(variant.id, variantQuantity)
      //       }
      //     >
      //       BUY
      //     </button>
      //   </div>
    );
  }
}

export default Product;
