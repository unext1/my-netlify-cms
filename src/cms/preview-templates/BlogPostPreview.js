import React from 'react';
import PropTypes from 'prop-types';
import { BlogPostTemplate } from '../../templates/product-item';

const BlogPostPreview = ({ entry, widgetFor }) => {
  return (
    <div>
      <h1>beleka</h1>
      <BlogPostTemplate
        content={widgetFor('body')}
        description={entry.getIn(['data', 'description'])}
        title={entry.getIn(['data', 'title'])}
      />
    </div>
  );
};

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default BlogPostPreview;
