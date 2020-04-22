import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Helmet from 'react-helmet';
import ProductCard from '../components/productCart';

export const IndexPageTemplate = ({ image, title, subheading, mainpitch, products }) => (
  <>
    <div
      className="hero-body my-hero-body"
      style={{
        backgroundImage: `url(${!!image.childImageSharp ? image.childImageSharp.fluid.src : image})`,
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`
      }}
    >
      <div className="container has-text-centered">
        <h1 className="title has-text-white">{title}</h1>
        <h3 className="subtitle has-text-white">{subheading}</h3>
      </div>
    </div>

    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-12">
              <div className="content">
                <div className="content">
                  <div className="column is-12">
                    <h3 className="title has-text-centered is-size-2">{mainpitch.title}</h3>
                    <h3 className="subtitle has-text-centered is-size-6">{mainpitch.description}</h3>
                  </div>
                </div>
                <div className="column is-12">
                  <h3 className="has-text-centered is-size-2">Our Products</h3>
                  {products && products.map(({ node: post }) => <ProductCard key={post.id} post={post} />)}
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      See all products
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.index_page;

  return (
    <Layout>
      <Helmet titleTemplate="%s | Home"></Helmet>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        products={data.products.edges}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    index_page: markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        mainpitch {
          title
          description
        }
      }
    }
    products: allMarkdownRemark(limit: 3, filter: { frontmatter: { templateKey: { eq: "product-item" } } }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            description
            templateKey
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
