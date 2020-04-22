import React from 'react';
import PropTypes from 'prop-types';
import { ProductItemTemplate } from '../../templates/product-item';

const ProductPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  return (
    <ProductItemTemplate
      content={widgetFor('body')}
      description={data.description}
      title={data.title}
      image={getAsset(data.image).url}
      product_parameters={data.product_parameters}
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
