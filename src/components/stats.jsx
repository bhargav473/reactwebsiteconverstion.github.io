import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

class Stats extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <OwlCarousel className='owl-theme' loop margin={10} nav>
          <div className='item'>
            <div className='card mb-0'>
              <div className='card-body'>
                <div className='cat-item text-center'>
                  {/* <a href="#/"></a> */}
                  <div className='cat-img'>
                    <img
                      src='../assets/images/products/categories/loan.png'
                      alt='img'
                    />
                  </div>
                  <div className='cat-desc'>
                    <h5 className='mb-1'>Real Estate</h5>
                    <small className='badge badge-pill badge-primary mr-2'>
                      45
                    </small>
                    <span className='text-muted'>ads are posted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='card mb-0'>
              <div className='card-body'>
                <div className='cat-item text-center'>
                  {/* <a href="classifieds-list.html"></a> */}
                  <div className='cat-img'>
                    <img
                      src='../assets/images/products/categories/dress.png'
                      alt='img'
                    />
                  </div>
                  <div className='cat-desc'>
                    <h5 className='mb-1'>Clothing</h5>
                    <small className='badge badge-pill badge-primary mr-2'>
                      32
                    </small>
                    <span className='text-muted'>ads are posted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='card mb-0'>
              <div className='card-body'>
                <div className='cat-item text-center'>
                  {/* <a href="classifieds-list.html"></a> */}
                  <div className='cat-img'>
                    <img
                      src='../assets/images/products/categories/store.png'
                      alt='img'
                    />
                  </div>
                  <div className='cat-desc'>
                    <h5 className='mb-1'>Restaurant</h5>
                    <small className='badge badge-pill badge-primary mr-2'>
                      19
                    </small>
                    <span className='text-muted'>ads are posted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='card mb-0'>
              <div className='card-body'>
                <div className='cat-item text-center'>
                  {/* <a href="classifieds-list.html"></a> */}
                  <div className='cat-img text-shadow1'>
                    <img
                      src='../assets/images/products/categories/delivery-truck.png'
                      alt='img'
                    />
                  </div>
                  <div className='cat-desc'>
                    <h5 className='mb-1'>Vehicle</h5>
                    <small className='badge badge-pill badge-primary mr-2'>
                      25
                    </small>
                    <span className='text-muted'>ads are posted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='card mb-0'>
              <div className='card-body'>
                <div className='cat-item text-center'>
                  {/* <a href="classifieds-list.html"></a> */}
                  <div className='cat-img'>
                    <img
                      src='../assets/images/products/categories/call-center.png'
                      alt='img'
                    />
                  </div>
                  <div className='cat-desc'>
                    <h5 className='mb-1'>Services</h5>
                    <small className='badge badge-pill badge-primary mr-2'>
                      23
                    </small>
                    <span className='text-muted'>ads are posted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='item'>
            <div className='card mb-0'>
              <div className='card-body'>
                <div className='cat-item text-center'>
                  {/* <a href="classifieds-list.html"></a> */}
                  <div className='cat-img'>
                    <img
                      src='../assets/images/products/categories/makeover.png'
                      alt='img'
                    />
                  </div>
                  <div className='cat-desc'>
                    <h5 className='mb-1'>Beauty</h5>
                    <small className='badge badge-pill badge-primary mr-2'>
                      52
                    </small>
                    <span className='text-muted'>ads are posted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </React.Fragment>
    );
  }
}

export default Stats;
