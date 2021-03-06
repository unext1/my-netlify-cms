import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const ProductItemTemplate = ({
  content,
  contentComponent,
  description,
  title,
  helmet,
  image,
  parameters,
  subtitle
}) => {
  const PostContent = contentComponent || Content;

  return (
    <>
      {helmet || ''}
      <div className="my-header">
        <div className="breadcrumb-area breadcrumb-bg-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="breadcrumb-title">Product</h1>
                <ul className="breadcrumb-list">
                  <li className="breadcrumb-list__item">
                    <a href="/products">PRODUCTS</a>
                  </li>
                  <li className="breadcrumb-list__item breadcrumb-list__item--active">{title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginBottom: 50 }}>
        <h1 className="title is-size-3 has-text-weight-bold has-text-centered"> Information</h1>
      </div>

      <section className="section">
        <div className="container">
          <div className="column is-12">
            <div className="columns is-multiline">
              <div className="column is-12">
                {image ? (
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: image,
                      alt: `featured image thumbnail for post ${title}`
                    }}
                  />
                ) : null}
              </div>
              <div className="column is-12">
                <h1 className="title is-size-1 has-text-weight-bold is-bold-light">{title}</h1>
                <p className="subtitle">{subtitle}⠀</p>
                <p>{description}</p>
                <br />
                <PostContent content={content} />
              </div>
            </div>
            <div className="container" style={{ marginTop: 50, marginBottom: 50 }}>
              {parameters ? (
                <h1 className="title is-size-3 has-text-weight-bold has-text-centered"> Parameters</h1>
              ) : null}
            </div>
            {parameters &&
              parameters.map((i, index) => (
                <div className="column is-12" key={index} style={{ marginBottom: 30 }}>
                  <div className="columns is-multiline">
                    <div className="column is-6 parameters-fixed">
                      {i.image ? (
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: i.image,
                            alt: `featured image thumbnail for post ${i.title}`,
                            style: { height: 300, width: 300 }
                          }}
                        />
                      ) : null}
                    </div>
                    <div className="column is-6 parameters-body">
                      <h1 className="title is-size-6">{i.title}</h1>
                      <p>{i.description}</p>
                    </div>
                  </div>
                </div>
              ))}
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
  subtitle: PropTypes.string,
  helmet: PropTypes.object,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  parameters: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      description: PropTypes.string,
      title: PropTypes.string
    })
  )
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
        image={post.frontmatter.image}
        subtitle={post.frontmatter.subtitle}
        parameters={post.frontmatter.parameters_product}
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
        subtitle
        parameters_product {
          title
          description
          image {
            childImageSharp {
              fluid(maxWidth: 1280, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        image {
          childImageSharp {
            fluid(maxWidth: 1280, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
