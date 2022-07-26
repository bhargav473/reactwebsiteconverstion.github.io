import React from 'react';
import { Link } from 'react-router-dom';
import Joi from 'joi-browser';
import Form from '../common/form';
import Header from '../header';
import Footer from '../footer';
import user from '../../services/userService';

class Register extends Form {
  state = {
    data: { member_name: '', member_email: '', password: '', phone: '' },
    errors: {},
    regmess: false
  };

  schema = {
    member_email: Joi.string()
      .required()
      .email()
      .label('Email'),
    member_name: Joi.string()
      .required()
      .min(6)
      .label('Name'),
    phone: Joi.string()
      .required()
      .min(7)
      .label('Phone'),
    password: Joi.string()
      .required()
      .min(6)
      .label('Password')
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      const { data: regdata } = await user.register(data);
      if (regdata.success) {
        this.setState({ regmess: true });
        setTimeout(() => {
          window.location = '/';
        }, 3000);
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.phone = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  cancelCourse = () => {
    this.setState({
      member_email: '',
      member_name: '',
      phone: '',
      password: ''
    });
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <section>
          <div
            className='bannerimg cover-image bg-background3'
            style={{
              backgroundImage: "url('../assets/images/banners/banner3.jpg')"
            }}
          >
            <div className='header-text mb-0'>
              <div className='container'>
                <div className='text-center text-white'>
                  <h1 className=''>Register</h1>
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
                      Register
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
                    {this.state.regmess ? (
                      <h2 className='heading-primary'>
                        Registration Successful
                      </h2>
                    ) : (
                      <form
                        id='Register'
                        className='card-body'
                        tabIndex='500'
                        onSubmit={this.handleSubmit}
                      >
                        <h3>Register</h3>
                        {this.renderInput('member_name', 'Name', 'member_name')}
                        {this.renderInput('member_email', 'Email')}
                        {this.renderInput('password', 'Password', 'password')}
                        {this.renderInput('phone', 'Phone', 'phone')}
                        {this.renderButton('Register')}
                        <br />
                        <p className='mb-2'>
                          <Link to='/forgot'>Forgot Password</Link>
                        </p>
                        <p className='text-dark mb-0'>
                          Already have account?
                          <Link to='/'> Login</Link>
                        </p>
                      </form>
                    )}
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

export default Register;
