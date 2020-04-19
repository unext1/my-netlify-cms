import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="my-header">
          <div class="breadcrumb-area breadcrumb-bg-2">
            <div class="container">
              <div class="row">
                <div class="col-lg-12">
                  <h1 class="breadcrumb-title">Products</h1>
                  <ul class="breadcrumb-list">
                    <li class="breadcrumb-list__item">
                      <a href="/">HOME</a>
                    </li>
                    <li class="breadcrumb-list__item breadcrumb-list__item--active">PRODUCTS</li>
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
