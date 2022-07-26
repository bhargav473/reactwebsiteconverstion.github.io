import React from 'react';
import Joi from 'joi-browser';
import Header from '../header';
import Footer from '../footer';
import Form from '../common/form';
import user from '../../services/userService';

class Reset extends Form {
  state = {
    data: { newpass: '', confirmpass: '' },
    errors: {},
    showmess: false
  };
  schema = {
    newpass: Joi.string()
      .required()
      .label('New Password'),
    confirmpass: Joi.any()
      .valid(Joi.ref('newpass'))
      .required()
      .options({ language: { any: { allowOnly: 'must match password' } } })
  };
  doSubmit = async () => {
    try {
      const token = this.props.match.params.id;
      const { data } = await user.resetPass(token, this.state.data.newpass);
      if (data.success) {
        this.setState({ showmess: true });
        setTimeout(() => {
          window.location = '/';
        }, 4000);
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.confirmpass = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <section className='sptb'>
          <div className='container customerpage'>
            <div className='row'>
              <div className='single-page'>
                <div className='col-lg-5 col-xl-4 col-md-6 d-block mx-auto'>
                  <div className='wrapper wrapper2'>
                    {this.state.showmess ? (
                      <h2 className='heading-primary'>
                        Your Password Changed Successfully. Please Login with
                        New Password
                      </h2>
                    ) : (
                      <form
                        id='reset'
                        className='card-body'
                        tabindex='500'
                        onSubmit={this.handleSubmit}
                      >
                        <h3>Reset Password</h3>
                        {this.renderInput(
                          'newpass',
                          'New Password',
                          'password'
                        )}
                        {this.renderInput(
                          'confirmpass',
                          'Confirm Password',
                          'password'
                        )}
                        {this.renderButton('Submit')}
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

export default Reset;
