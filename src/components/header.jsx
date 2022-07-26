import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  state = {};
  render() {
    return <React.Fragment>
     <div className="header-main">
			<div className="top-bar">
				<div className="container">
					<div className="row">
						<div className="col-xl-8 col-lg-8 col-sm-4 col-7">
							<div className="top-bar-left d-flex">
								<div className="clearfix">
									<ul className="socials">
										<li>
											<a className="social-icon text-dark" href='#/'><i className="fa fa-facebook"></i></a>
										</li>
										<li>
											<a className="social-icon text-dark" href='#/'><i className="fa fa-twitter"></i></a>
										</li>
										<li>
											<a className="social-icon text-dark" href='#/'><i className="fa fa-linkedin"></i></a>
										</li>
										<li>
											<a className="social-icon text-dark" href='#/'><i className="fa fa-google-plus"></i></a>
										</li>
									</ul>
								</div>
								<div className="clearfix">
									<ul className="contact border-left">
										<li className="mr-5 d-lg-none">
											<a href='#/' className="callnumber text-dark"><span><i className="fa fa-phone mr-1"></i>: +425 345 8765</span></a>
										</li>
										
										<li className="dropdown mr-5">
											<a href='#/' className="text-dark" data-toggle="dropdown"><span> Language <i className="fa fa-caret-down text-muted"></i></span> </a>
											<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
												<a href='#/' className="dropdown-item" >
													English
												</a>
												<a className="dropdown-item" href='#/'>
													Arabic
												</a>
												<a className="dropdown-item" href='#/'>
													German
												</a>
												<a href='#/' className="dropdown-item" >
													Greek
												</a>
												<a href='#/' className="dropdown-item" >
													Spanish
												</a>
											</div>
										</li>
										<li className="dropdown">
											<a href='#/' className="text-dark" data-toggle="dropdown"><span>Currency <i className="fa fa-caret-down text-muted"></i></span></a>
											<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
												<a href='#/' className="dropdown-item" >
													USD
												</a>
												<a className="dropdown-item" href='#/'>
													EUR
												</a>
												<a className="dropdown-item" href='#/'>
													INR
												</a>
												<a href='#/' className="dropdown-item" >
													GBP
												</a>
											</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4 col-sm-8 col-5">
							<div className="top-bar-right">
								<ul className="custom">
									<li>
										<Link to="/register" className="text-dark"><i className="fa fa-user mr-1"></i> <span>Register</span></Link>
									</li>
									<li>
										<Link to="/login" className="text-dark"><i className="fa fa-sign-in mr-1"></i> <span>Login</span></Link>
									</li>
									<li className="dropdown">
										<a href='#/' className="text-dark" data-toggle="dropdown"><i className="fa fa-home mr-1"></i><span> My Dashboard</span></a>
										<div className="dropdown-menu dropdown-menu-right dropdown-menu-arrow">
											<a href="mydash.html" className="dropdown-item" >
												<i className="dropdown-icon icon icon-user"></i> My Profile
											</a>
											<a className="dropdown-item" href='#/'>
												<i className="dropdown-icon icon icon-speech"></i> Inbox
											</a>
											<a className="dropdown-item" href='#/'>
												<i className="dropdown-icon icon icon-bell"></i> Notifications
											</a>
											<a href="mydash.html" className="dropdown-item" >
												<i className="dropdown-icon  icon icon-settings"></i> Account Settings
											</a>
											<a className="dropdown-item" href='#/'>
												<i className="dropdown-icon icon icon-power"></i> Log out
											</a>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="horizontal-header clearfix ">
				<div className="container">
					<a href='#/' id="horizontal-navtoggle" className="animated-arrow"><span></span></a>
					<span className="smllogo"><img src="../assets/images/brand/logo.png" width="120" alt=""/></span>
					<a href="#/" className="callusbtn"><i className="fa fa-phone" aria-hidden="true"></i><span></span></a>
				</div>
			</div>

			<div className="horizontal-main  bg-dark-transparent clearfix">
				<div className="horizontal-mainwrapper container clearfix">
					<div className="desktoplogo">
						<Link to="/"><img src="../assets//images/brand/logo1.png" alt="" /></Link>
					</div>
					<div className="desktoplogo-1">
						<Link to="/"><img src="../assets//images/brand/logo.png" alt="" /></Link>
					</div>
					<nav className="horizontalMenu clearfix d-md-flex">
						<ul className="horizontalMenu-list">
							<li aria-haspopup="true"><a href='#/'>Home <span className="fa fa-caret-down m-0"></span></a>
								<ul className="sub-menu">
									<li aria-haspopup="true"><a href="index.html">Home-default</a></li>
									<li aria-haspopup="true"><a href="classifieds-text.html">Home style-1</a></li>
									<li aria-haspopup="true"><a href="classifieds-slides.html">Home style-2</a></li>
									<li aria-haspopup="true"><a href="classifieds-video.html">Home style-3</a></li>
									<li aria-haspopup="true"><a href="classifieds-animation.html">Home style-4 </a></li>
									<li aria-haspopup="true"><a href="classifieds-map.html">Home style-5</a></li>
									<li aria-haspopup="true"><a href="intro-page.html">Home Intro Page</a></li>
									<li aria-haspopup="true"><a href="popup-login.html">Home Pop-up login</a></li>
									<li aria-haspopup="true"><a href="banner.html">Banners</a></li>
								</ul>
							</li>
							<li aria-haspopup="true"><a href="about.html">About Us </a></li>
							<li aria-haspopup="true"><a href="widgets.html">Widgets</a></li>
							<li aria-haspopup="true"><a href='#/'  className="active">Pages <span className="fa fa-caret-down m-0"></span></a>
								<div className="horizontal-megamenu clearfix">
									<div className="container">
										<div className="megamenu-content">
											<div className="row">
												<ul className="col link-list">
													<li className="title">Custom pages</li>
													<li>
														<a href="classifieds-list.html">Classifieds List</a>
													</li>
													<li>
														<a href="classifieds-list-right.html">Classifieds List Right</a>
													</li>
													<li>
														<a href="classifieds-list-map.html">Classifieds Map list</a>
													</li>
													<li>
														<a href="classifieds-list-map2.html">Classifieds Map list 02</a>
													</li>
													<li>
														<a href="classifieds-list-map3.html">Classifieds Map style 03</a>
													</li>
													<li>
														<a href="categories.html">Categories</a>
													</li>
													<li>
														<a href="inovice.html">Invoice</a>
													</li>
													<li>
														<a href="usersall.html">User Lists</a>
													</li>
												</ul>
												<ul className="col link-list">
													<li className="title">Custom pages</li>
													<li>
														<a href="ad-list.html">Ad Listing</a>
													</li>
													<li>
														<a href="ad-list-right.html">Ad Listing Right</a>
													</li>
													<li>
														<a href="ad-details.html">Ad Details</a>
													</li>
													<li>
														<a href="ad-details-right.html">Ad Details Right</a>
													</li>
													<li>
														<a href="ad-posts.html">Ad Posts</a>
													</li>
													<li>
														<a href="ad-posts2.html">Ad Posts2</a>
													</li>
													<li>
														<a href="pricing.html">Pricing</a>
													</li>
													<li>
														<a href="typography.html">Typography</a>
													</li>
												</ul>
												<ul className="col link-list">
													<li>
														<a href="userprofile.html"> User Profile</a>
													</li>
													<li>
														<a href="mydash.html">My Dashboard</a>
													</li>
													<li>
														<a href="myads.html">Ads</a>
													</li>
													<li>
														<a href="myfavorite.html">Favorite Ads</a>
													</li>
													<li>
														<a href="manged.html">Manged Ads</a>
													</li>
													<li>
														<a href="payments.html">Payments</a>
													</li>
													<li>
														<a href="orders.html"> Orders</a>
													</li>
													<li>
														<a href="settings.html"> Settings</a>
													</li>
													<li>
														<a href="tips.html">Tips</a>
													</li>
												</ul>
												<ul className="col link-list">
													<li className="title">User pages</li>
													<li><a href="underconstruction.html">Under Constructions</a></li>
													<li><a href="404.html">404</a></li>
													<li><a href="register.html">Register</a></li>
													<li><a href="login.html">Login</a></li>
													<li><a href="login-2.html">Login 02</a></li>
													<li><a href="forgot.html">Forgot Password</a></li>
													<li><a href="lockscreen.html">Lock Screen</a></li>
													<li><a href="faq.html">Faq</a></li>
												</ul>
												<ul className="col link-list">
													<li className="title">User pages</li>
													<li><a href="header-style1.html">Header Style 01</a></li>
													<li><a href="header-style2.html">Header Style 02</a></li>
													<li><a href="header-style3.html">Header Style 03</a></li>
													<li><a href="header-style4.html">Header Style 04</a></li>
													<li><a href="footer-style.html">Footer Style 01</a></li>
													<li><a href="footer-style2.html">Footer Style 02</a></li>
													<li><a href="footer-style3.html">Footer Style 03</a></li>
													<li><a href="footer-style4.html">Footer Style 04</a></li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</li>
							<li aria-haspopup="true"><a href='#/'>Blog <span className="fa fa-caret-down m-0"></span></a>
								<ul className="sub-menu">
									<li aria-haspopup="true"><a href='#/'>Blog Grid <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
										 <ul className="sub-menu">
											<li aria-haspopup="true"><a href="blog-grid.html">Blog Grid Left</a></li>
											<li aria-haspopup="true"><a href="blog-grid-right.html">Blog Grid Right</a></li>
											<li aria-haspopup="true"><a href="blog-grid-center.html">Blog Grid Center</a></li>
										</ul>
									</li>
									<li aria-haspopup="true"><a href='#/'>Blog List <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
										 <ul className="sub-menu">
											<li aria-haspopup="true"><a href="blog-list.html">Blog List Left</a></li>
											<li aria-haspopup="true"><a href="blog-list-right.html">Blog List Right</a></li>
											<li aria-haspopup="true"><a href="blog-list-center.html">Blog List Center</a></li>
										</ul>
									</li>
									<li aria-haspopup="true"><a href='#/'>Blog Details <i className="fa fa-angle-right float-right mt-1 d-none d-lg-block"></i></a>
										<ul className="sub-menu">
											<li aria-haspopup="true"><a href="blog-details.html">Blog Details Left</a></li>
											<li aria-haspopup="true"><a href="blog-details-right.html">Blog Details Right</a></li>
											<li aria-haspopup="true"><a href="blog-details-center.html">Blog Details Center</a></li>
										</ul>
									</li>
								</ul>
							</li>
							<li aria-haspopup="true"><a href='#/'>Categories <span className="fa fa-caret-down m-0"></span></a>
								<ul className="sub-menu">
									<li aria-haspopup="true"><a href="classified.html">Classifieds Left</a></li>
									<li aria-haspopup="true"><a href="classified-right.html">Classifieds Rights </a></li>
								</ul>

							</li>
							<li aria-haspopup="true"><a href="contact.html"> Contact Us <span className="wsarrow"></span></a></li>
							<li aria-haspopup="true" className="d-lg-none mt-5 pb-5 mt-lg-0">
								<span><a className="btn btn-orange" href="ad-posts.html">Post Free Ad</a></span>
							</li>
						</ul>
						<ul className="mb-0">
							<li aria-haspopup="true" className="mt-5 d-none d-lg-block ">
								<span><a className="btn btn-orange ad-post" href="ad-posts.html">Post Free Ad</a></span>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	  </React.Fragment>;
  }
}

export default Header;