import React from 'react';
import PropTypes from 'prop-types';
import { ProductItem } from '../../templates/product-item';

const ProductPagePreview = ({ entry, widgetFor }) => {
  return (
    <ProductItem
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
    />
  );
};

ProductPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default ProductPagePreview;
