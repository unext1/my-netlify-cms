import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from './PreviewCompatibleImage';

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="columns features">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="column is-4" key={post.id}>
              <Link to={post.fields.slug}>
                <div className="card is-shady">
                  <div className="card-image has-text-centered">
                    {post.frontmatter.featuredimage ? (
                      <div className="featured-thumbnail">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.frontmatter.title}`
                          }}
                        />
                      </div>
                    ) : null}
                  </div>

                  <div className="card-content">
                    <div className="content">
                      <h4> {post.frontmatter.title}</h4>
                      <p>
                        Purus semper eget duis at tellus at urna condimentum mattis. Non blandit massa enim nec. Integer
                        enim neque volutpat ac tincidunt vitae semper quis. Accumsan tortor posuere ac ut consequat
                        semper viverra nam.
                        {post.excerpt}
                      </p>

                      <p>
                        <Link to={post.fields.slug}>Learn more</Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "product-item" } } }) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
