import React, { Component } from 'react';

class VariantSelector extends Component {
  render() {
    return (
      <select
        className='black fw5 bg-transparent pl3 ba0'
        name={this.props.option.name}
        key={this.props.option.name}
        onChange={this.props.handleOptionChange}
      >
        {this.props.option.values.map((value) => {
          return (
            <option
              value={value}
              key={`${this.props.option.name}-${value}`}
            >{`${value}`}</option>
          );
        })}
      </select>
    );
  }
}

export default VariantSelector;
