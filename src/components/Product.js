import React from 'react';
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render(){
    return (
      <div>
      {this.props.name}
      {this.props.producer}
      {this.props.hasWatermark}
      {this.props.color}
      {this.props.weight}
      </div>
    )
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.string,
  weight: function(props, weight, Product) {
    if(weight > 80 && weight < 300) {
      return true
    }
    return false
  }

}

Product.defaultProps = {
  hasWatermark: false
}
