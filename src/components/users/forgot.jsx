import React from 'react';
import user from '../../services/userService';
import { Link } from 'react-router-dom';
import Header from '../header';
import Footer from '../footer';
import Form from '../common/form';
import Joi from 'joi-browser';

class Forgot extends Form {
  state = { data: { email: '' }, errors: {}, checkmail: false, forgot: true };
  schema = {
    email: Joi.string()
      .required()
      .label('Email')
  };
  doSubmit = async () => {
    try {
      const { data } = await user.forgotPass(this.state.data.email);

      if (data) {
        this.setState({ checkmail: true, forgot: false });
        setTimeout(() => {
          this.props.history.push('/');
        }, 4000);
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
        <section className='sptb'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-5 col-xl-4 col-md-6 d-block mx-auto'>
                <div className='single-page w-100 p-0'>
                  <div className='wrapper wrapper2'>
                    {this.state.forgot ? (
                      <form
                        id='forgotpsd'
                        className='card-body'
                        onSubmit={this.handleSubmit}
                      >
                        <h3 className='pb-2'>Forgot Password</h3>
                        {this.renderInput('email', 'Email')}
                        {this.renderButton('Submit')}
                        <br />
                        <div className='text-center text-dark mb-0'>
                          Forget it, <Link to='/'>send me back</Link> to the
                          sign in.
                        </div>
                      </form>
                    ) : null}
                  </div>
                  {this.state.checkmail ? (
                    <h2 className='heading-primary'>
                      Password Reset Details will be sent your mail.Please check
                      your inbox/spam.
                    </h2>
                  ) : null}
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

export default Forgot;
