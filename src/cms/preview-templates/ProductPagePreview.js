import React from 'react';
import PropTypes from 'prop-types';
import { ProductItemTemplate } from '../../templates/product-item';

const ProductPagePreview = ({ entry, widgetFor }) => {
  console.log(widgetFor('body'));
  console.log(entry.getIn(['data', 'description']));
  console.log(entry.getIn(['data', 'title']));
  return (
    <ProductItemTemplate
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
