import React from 'react';
import PropTypes from 'prop-types';
import { ProductItemTemplate } from '../../templates/product-item';

const ProductPagePreview = ({ entry, widgetFor, getAsset }) => {
  return (
    <ProductItemTemplate
      content={widgetFor('body')}
      description={entry.getIn(['data', 'description'])}
      title={entry.getIn(['data', 'title'])}
      featuredimage={getAsset(entry.getIn(['data', 'image']))}
      product_parameters={entry.getIn(['data', 'product_parameters'])}
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
