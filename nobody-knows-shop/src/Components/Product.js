import React, { Component } from "react";
import { Link } from "react-router-dom";

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
		console.log(this.props.product);
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
		// let variantImages = this.props.product.images;
		// let variant = this.state.selectedVariant || this.props.product.variants[0];

		return (
			<div className="flex flex-column flex-row-l justify-between items-center mt3">
				{/* <div className='flex flex-row-l w-50-l w-100 items-center justify-around'>
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
        </div> */}
				<Link
					to={`/products/${this.props.product.id}`}
					className="ph2 ph0-ns pb3 link db"
				>
					<div className="w-100 flex flex-column justify-center items-center">
						<div className=" db-l flex flex-column justify-center items-center">
							<h2 className="f3-ns f5 ttu tracked mb0 tc white">
								{this.props.product.title}
							</h2>
							<p className="tc red">{this.props.product.description}</p>
							<h3 className="f2-ns f3 tc ttu tracked mt3 fw6 black-70 white">
								${this.props.product?.variants[0]?.price | 0}
							</h3>

							{/* <div className="mt2 flex flex-column-m flex-row items-center justify-center justify-around w-100">
							{this.state.product.options &&
								this.state.product.options.map((option) => {
									return (
										<div
											key={option.id.toString()}
											className="size-input flex flex-column flex-row-l items-center justify-center justify-between-ns w-25-l w-50"
										>
											<label className=" mb3 mb0-ns f5">SIZE</label>
											<VariantSelector
												handleOptionChange={this.handleOptionChange}
												option={option}
											/>
										</div>
									);
								})}
							<div className="flex flex-column flex-row-l items-center justify-center justify-between-ns  mt4-m mt0 mr0 w-25-ns w-50">
								<label className="f5 mr2-ns mb2 mb0-ns tl ">QTY</label>

								<input
									className="bg-transparent black fw5 w-50 quantity-input"
									min="1"
									type="number"
									defaultValue={variantQuantity}
									onChange={this.handleQuantityChange}
								/>
							</div>
						</div> */}
							{/* <div className="mt4-ns mt4 mx-auto flex justify-center">
							<button
								className="f3-ns f5 pa2 bg-transparent b--black bw1 button w-50-l w-100 black fw5"
								onClick={() =>
									this.props.addVariantToCart(
										this.state.variant.id,
										variantQuantity
									)
								}
							>
								ADD TO CART
							</button>
						</div> */}
						</div>
					</div>
				</Link>
			</div>

			// <article className='fl w-100 w-50-m w-40-ns pa5-ns'>
			//   <Link
			//     to={`/products/${this.props.product.id}`}
			//     className='ph2 ph0-ns pb3 link db'
			//   >
			//     <div className='aspect-ratio aspect-ratio--1x1'>
			//       {this.props.product.images.length && (
			//         <img
			//           className='db bg-center cover aspect-ratio--object'
			//           src={variantImages[this.state.currentImage].src}
			//           alt={`${this.props.product.title} product shot`}
			//         />
			//       )}
			//     </div>

			//     <h3 className='tc f5 f4-ns fw7 mb0 black-90'>
			//       {' '}
			//       {this.props.product.title}
			//     </h3>
			//     <h3 className='tc f5 fw5 mt2 black-60'>${variant.price | 0}</h3>
			//   </Link>
			// </article>

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
