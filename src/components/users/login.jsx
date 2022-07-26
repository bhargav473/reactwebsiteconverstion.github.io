import React from 'react';
import { Link } from 'react-router-dom';
import user from '../../services/userService';
import Joi from 'joi-browser';
import Form from '../common/form';
import Header from '../header';
import Footer from '../footer';
import TwoFa from './twoFa';

class Login extends Form {
  state = {
    data: { email: '', password: '' },
    errors: {},
    loginform: true,
    tfaform: false
  };
  schema = {
    email: Joi.string()
      .required()
      .label('Email'),
    password: Joi.string()
      .required()
      .label('Password')
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const logdata = await user.login(data.email, data.password);

      if (logdata.twofa === '2fa_enabled') {
        this.setState({ tfaform: true, loginform: false });
      } else {
        setTimeout(() => {}, 1000);
        this.props.history.push('/dashboard');
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.email = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <section>
          <div
            className='bannerimg cover-image bg-background3'
            style={{
              backgroundImage: "url('../assets/images/banners/banner2.jpg')"
            }}
          >
            <div className='header-text mb-0'>
              <div className='container'>
                <div className='text-center text-white'>
                  <h1 className=''>Login</h1>
                  <ol className='breadcrumb text-center'>
                    <li className='breadcrumb-item'>
                      <a href='#/'>Home</a>
                    </li>
                    <li className='breadcrumb-item'>
                      <a href='#/'>Pages</a>
                    </li>
                    <li
                      className='breadcrumb-item active text-white'
                      aria-current='page'
                    >
                      Login
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='sptb'>
          <div className='container customerpage'>
            <div className='row'>
              <div className='single-page'>
                <div className='col-lg-5 col-xl-4 col-md-6 d-block mx-auto'>
                  <div className='wrapper wrapper2'>
                    {this.state.loginform ? (
                      <form
                        id='login'
                        className='card-body'
                        tabIndex='500'
                        onSubmit={this.handleSubmit}
                      >
                        <h3>Login</h3>
                        {this.renderInput('email', 'Email')}
                        {this.renderInput('password', 'Password', 'password')}
                        {this.renderButton('Login')}
                        <br />
                        <p className='mb-2'>
                          <Link to='/forgot'>Forgot Password</Link>
                        </p>
                        <p className='text-dark mb-0'>
                          Don't have account?
                          <Link to='/register'> Register</Link>
                        </p>
                      </form>
                    ) : null}
                    {this.state.tfaform ? (
                      <TwoFa data={this.state.data} />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </React.Fragment>
    );
  }
}
export default Login;
