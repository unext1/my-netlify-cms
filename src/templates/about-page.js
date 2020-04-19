import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <div className="main-content" style={{ padding: 20, marginBottom: 50 }}>
        <div className="section-light">
          <div className="container">
            <div className="column is-12">
              <h1 className="title has-text-centered " style={{ marginBottom: 25 }}>
                {title}
              </h1>
            </div>
            <div className="columns is-multiline">
              <div className="column is-6">
                <img className=" center" src="https://picsum.photos/id/366/600/375" alt="" />
              </div>
              <div className="column is-6 has-vertically-aligned-content" data-aos="fade-right">
                <p>
                  <PageContent className="content" content={content} />
                </p>
                <br />
                <div className="column is-12 has-text-centered-mobile">
                  <div className="columns is-multiline">
                    <div className="column is-6">
                      <p className="heading">
                        <strong>Give us a call !</strong>
                      </p>
                      <p className="subheading">123-456-7890</p>
                    </div>
                    <div className="column is-6">
                      <p className="heading">
                        <strong>Contact us via email !</strong>
                      </p>
                      <p className="subheading">hello@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <div className="my-header">
        <div className="breadcrumb-area breadcrumb-bg-2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <h1 className="breadcrumb-title">About Page</h1>
                <ul className="breadcrumb-list">
                  <li className="breadcrumb-list__item">
                    <a href="/">HOME</a>
                  </li>
                  <li className="breadcrumb-list__item breadcrumb-list__item--active">ABOUT</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutPageTemplate contentComponent={HTMLContent} title={post.frontmatter.title} content={post.html} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
