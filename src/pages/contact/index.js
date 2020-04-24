import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';
import Helmet from 'react-helmet';

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <Helmet titleTemplate="%s | Contact"></Helmet>
        <>
          <div className="my-header">
            <div className="breadcrumb-area breadcrumb-bg-2">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <h1 className="breadcrumb-title">Contact</h1>
                    <ul className="breadcrumb-list">
                      <li className="breadcrumb-list__item">
                        <a href="/">HOME</a>
                      </li>
                      <li className="breadcrumb-list__item breadcrumb-list__item--active">CONTACT US</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="hero my-contact-hero">
            <div className="hero-body">
              <div className="container">
                <div className="columns is-8 is-variable ">
                  <div className="column is-two-thirds has-text-left">
                    <h1 className="title is-1">Contact Us</h1>
                    <p className="is-size-4" style={{ maxWidth: 400 }}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi soluta voluptate facere
                      molestiae consequatur.
                    </p>
                  </div>
                  <div className="column is-one-third has-text-left">
                    <form
                      name="contact"
                      method="post"
                      action="/contact/thanks/"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                      onSubmit={this.handleSubmit}
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <div hidden>
                        <label>
                          Don’t fill this out: <input name="bot-field" onChange={this.handleChange} />
                        </label>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'name'}>
                          Your name
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'text'}
                            name={'name'}
                            onChange={this.handleChange}
                            id={'name'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'email'}>
                          Email
                        </label>
                        <div className="control">
                          <input
                            className="input"
                            type={'email'}
                            name={'email'}
                            onChange={this.handleChange}
                            id={'email'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <label className="label" htmlFor={'message'}>
                          Message
                        </label>
                        <div className="control">
                          <textarea
                            className="textarea"
                            name={'message'}
                            onChange={this.handleChange}
                            id={'message'}
                            required={true}
                          />
                        </div>
                      </div>
                      <div className="field">
                        <button className="button button-full-width is-link" type="submit">
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      </Layout>
    );
  }
}
