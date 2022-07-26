import React, { Component } from 'react';
import Header from '../header';
import Footer from '../footer';
import user from '../../services/userService';

class Activate extends Component {
  async componentDidMount() {
    try {
      const { data } = await user.activate(this.props.match.params.id);
      if (data.success) {
        setTimeout(() => {
          window.location = '/';
        }, 2000);
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        setTimeout(() => {
          this.setState({ errors: ex.response.data });
          this.setState({ message: !this.state.message });
        }, 1000);
        setTimeout(() => {
          window.location = '/';
        }, 5000);
      }
    }
  }
  state = { errors: {}, message: true };
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
                    {this.state.message ? (
                      <h2 className='heading-primary'>
                        Please wait while we activate you Account...
                      </h2>
                    ) : (
                      <h2 className='heading-primary'>{this.state.errors}</h2>
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

export default Activate;
