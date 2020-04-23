import React from 'react';
import PropTypes from 'prop-types';
import { ProductItemTemplate } from '../../templates/product-item';

const ProductPagePreview = ({ entry, widgetFor, getAsset }) => {
  const data = entry.getIn(['data']).toJS();

  return (
    <ProductItemTemplate
      description={data.description}
      title={data.title}
      subtitle={data.subtitle}
      image={getAsset(data.image).url}
      parameters={data.parameters}
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
