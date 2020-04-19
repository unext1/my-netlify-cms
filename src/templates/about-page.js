import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <div class="main-content" style={{ padding: 20, marginBottom: 50 }}>
        <div class="section-light">
          <div class="container">
            <div class="column is-12">
              <h1 class="title has-text-centered " style={{ marginBottom: 25 }}>
                {title}
              </h1>
            </div>
            <div class="columns is-multiline">
              <div class="column is-6">
                <img class=" center" src="https://picsum.photos/id/366/600/375" alt="" />
              </div>
              <div class="column is-6 has-vertically-aligned-content" data-aos="fade-right">
                <p>
                  <PageContent className="content" content={content} />
                </p>
                <br />
                <div class="column is-12 has-text-centered-mobile">
                  <div class="columns is-multiline">
                    <div class="column is-6">
                      <p class="heading">
                        <strong>Give us a call !</strong>
                      </p>
                      <p class="subheading">123-456-7890</p>
                    </div>
                    <div class="column is-6">
                      <p class="heading">
                        <strong>Contact us via email !</strong>
                      </p>
                      <p class="subheading">hello@example.com</p>
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
        <div class="breadcrumb-area breadcrumb-bg-2">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h1 class="breadcrumb-title">About Page</h1>
                <ul class="breadcrumb-list">
                  <li class="breadcrumb-list__item">
                    <a href="/">HOME</a>
                  </li>
                  <li class="breadcrumb-list__item breadcrumb-list__item--active">ABOUT</li>
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
