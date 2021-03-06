import React from 'react';
import { Link } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

const ProductCard = ({ post }) => (
  <div className="column is-4" key={post.id}>
    <Link className="full-width-card" to={post.fields.slug}>
      <div className="card is-shady">
        <div className="card-image has-text-centered">
          {post.frontmatter.image ? (
            <div className="featured-thumbnail">
              <PreviewCompatibleImage
                imageInfo={{
                  image: post.frontmatter.image,
                  alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                  style: { height: '200px' }
                }}
              />
            </div>
          ) : null}
        </div>

        <div className="card-content">
          <div className="content">
            <h2 className="title "> {post.frontmatter.title}</h2>
            <div className="subtitle is-size-5">{post.frontmatter.subtitle}</div>
            <p className="my-desc">{post.frontmatter.description}</p>
            <p>Learn more</p>
          </div>
        </div>
      </div>
    </Link>
  </div>
);

export default ProductCard;
