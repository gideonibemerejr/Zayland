import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...this.getInitialState(),
    };
  }

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
    console.log(this.state);
    let variantImages = this.props.product.images;
    let variant = this.state.selectedVariant || this.props.product.variants[0];

    return (
      <article className='fl w-100 w-50-m w-40-ns pa5-ns'>
        <Link
          to={`/products/${this.props.product.id}`}
          className='ph2 ph0-ns pb3 link db'
        >
          <div className='aspect-ratio aspect-ratio--1x1'>
            {this.props.product.images.length && (
              <img
                className='db bg-center cover aspect-ratio--object'
                src={variantImages[this.state.currentImage].src}
                alt={`${this.props.product.title} product shot`}
              />
            )}
          </div>

          <h3 className='tc f5 f4-ns fw7 mb0 black-90'>
            {' '}
            {this.props.product.title}
          </h3>
          <h3 className='tc f5 fw5 mt2 black-60'>${variant.price | 0}</h3>
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
