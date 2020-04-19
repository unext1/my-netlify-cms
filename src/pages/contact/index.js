import React from 'react';
import { navigate } from 'gatsby-link';
import Layout from '../../components/Layout';

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
        <>
          <section className="hero my-contact-hero">
            <div className="hero-body">
              <div className="container">
                <div className="columns is-8 is-variable ">
                  <div className="column is-two-thirds has-text-left">
                    <h1 className="title is-1">Contact Us</h1>
                    <p className="is-size-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla eligendi soluta voluptate facere
                      molestiae consequatur.
                    </p>
                    <div className="social-media">
                      <a href="https://facebook.com" target="_blank" className="button is-light is-large">
                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                      </a>
                      <a href="https://instagram.com" target="_blank" className="button is-light is-large">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                      <a href="https://twitter.com" target="_blank" className="button is-light is-large">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </div>
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
                        <button className="button is-link" type="submit">
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="section">
            <div className="container">
              <div className="content">
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
                    <button className="button is-link" type="submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section> */}
        </>
      </Layout>
    );
  }
}
