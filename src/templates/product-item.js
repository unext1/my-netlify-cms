import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const ProductItemTemplate = ({ content, contentComponent, description, title, helmet, featuredimage }) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      {helmet || ''}
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-12">
              <div className="columns is-multiline">
                <div className="column is-6">
                  {featuredimage && <img src={featuredimage.childImageSharp.fluid.src} alt={title}></img>}
                </div>
                <div className="column is-6">
                  <h1 className="title is-size-1 has-text-weight-bold is-bold-light">{title}</h1>
                  <p>{description}</p>
                  <br />
                  <PostContent content={content} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

ProductItemTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  featuredimage: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

const ProductPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ProductItemTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Product">
            <title>{`${post.frontmatter.title}`}</title>
            <meta name="description" content={`${post.frontmatter.description}`} />
          </Helmet>
        }
        title={post.frontmatter.title}
        featuredimage={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

ProductPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default ProductPage;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 640, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
