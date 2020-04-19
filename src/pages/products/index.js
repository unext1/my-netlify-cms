import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import Helmet from 'react-helmet';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet titleTemplate="%s | Products"></Helmet>
        <div className="my-header">
          <div className="breadcrumb-area breadcrumb-bg-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <h1 className="breadcrumb-title">Products</h1>
                  <ul className="breadcrumb-list">
                    <li className="breadcrumb-list__item">
                      <a href="/">HOME</a>
                    </li>
                    <li className="breadcrumb-list__item breadcrumb-list__item--active">PRODUCTS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
