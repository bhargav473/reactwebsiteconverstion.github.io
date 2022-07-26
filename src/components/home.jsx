import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import Header from './header';
import Footer from './footer';    

class Home extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
          <Header />
        <section>
        <div className="banner-1 cover-image sptb-2 sptb-tab bg-background2" style={{backgroundImage: "url('../assets/images/banners/banner6.jpg')"}} >
				<div className="header-text mb-0">
					<div className="container">
						<div className="text-center text-white mb-7">
							<h1 className="mb-1">Find Your Best Classified</h1>
							<p>It is a long established fact that a reader will be distracted by the readable.</p>  
						</div>         
						<div className="row">
							<div className="col-xl-10 col-lg-12 col-md-12 d-block mx-auto">
								<div className="search-background bg-transparent">
									<div className="form row no-gutters ">
										<div className="form-group  col-xl-4 col-lg-3 col-md-12 mb-0 bg-white ">
											<input type="text" className="form-control input-lg br-tr-md-0 br-br-md-0" id="text4" placeholder="Job Title or Phrase or Keywords" />
										</div>
										<div className="form-group  col-xl-3 col-lg-3 col-md-12 mb-0 bg-white">
											<input type="text" className="form-control input-lg br-md-0" id="text5" placeholder="Enter Location" />
											<span><i className="fa fa-map-marker location-gps mr-1"></i></span>
										</div>
										<div className="form-group col-xl-3 col-lg-3 col-md-12 select2-lg  mb-0 bg-white">
											<select className="form-control select2-show-search  border-bottom-0" data-placeholder="Select Category">
												<optgroup label="Categories">
													<option>Select</option>
													<option value="1">Private</option>
													<option value="2">Software</option>
													<option value="3">Banking</option>
													<option value="4">Finaces</option>
													<option value="5">Corporate</option>
													<option value="6">Driver</option>
													<option value="7">Sales</option>
												</optgroup>
											</select>
										</div>
										<div className="col-xl-2 col-lg-3 col-md-12 mb-0">
											<a href="#/" className="btn btn-lg btn-block btn-primary br-tl-md-0 br-bl-md-0">Search Here</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
        </section>
        <section className="categories">
			<div className="container">
				<OwlCarousel className='owl-stage-outer' loop items={4} margin={50} nav dots={false}>
					<div className="item">
						<div className="card mb-0">
							
							<div className="card-body">
								<div className="cat-item text-center">
									{/* <a href="#/"></a> */}
									<div className="cat-img">
										<img src="../assets/images/products/categories/loan.png" alt="img" />
									</div>
									<div className="cat-desc">
										<h5 className="mb-1">Real Estate</h5>
										<small className="badge badge-pill badge-primary mr-2">45</small><span className="text-muted">ads are posted</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="card-body">
								<div className="cat-item text-center">
									{/* <a href="classifieds-list.html"></a> */}
									<div className="cat-img">
										<img src="../assets/images/products/categories/dress.png" alt="img" />
									</div>
									<div className="cat-desc">
										<h5 className="mb-1">Clothing</h5>
										<small className="badge badge-pill badge-primary mr-2">32</small><span className="text-muted">ads are posted</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="card-body">
								<div className="cat-item text-center">
									{/* <a href="classifieds-list.html"></a> */}
									<div className="cat-img">
										<img src="../assets/images/products/categories/store.png" alt="img" />
									</div>
									<div className="cat-desc">
										<h5 className="mb-1">Restaurant</h5>
										<small className="badge badge-pill badge-primary mr-2">19</small><span className="text-muted">ads are posted</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="card-body">
								<div className="cat-item text-center">
									{/* <a href="classifieds-list.html"></a> */}
									<div className="cat-img text-shadow1">
										<img src="../assets/images/products/categories/delivery-truck.png" alt="img" />
									</div>
									<div className="cat-desc">
										<h5 className="mb-1">Vehicle</h5>
										<small className="badge badge-pill badge-primary mr-2">25</small><span className="text-muted">ads are posted</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="card-body">
								<div className="cat-item text-center">
									{/* <a href="classifieds-list.html"></a> */}
									<div className="cat-img">
										<img src="../assets/images/products/categories/call-center.png" alt="img" />
									</div>
									<div className="cat-desc">
										<h5 className="mb-1">Services</h5>
										<small className="badge badge-pill badge-primary mr-2">23</small><span className="text-muted">ads are posted</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="card-body">
								<div className="cat-item text-center">
									{/* <a href="classifieds-list.html"></a> */}
									<div className="cat-img">
										<img src="../assets/images/products/categories/makeover.png" alt="img" />
									</div>
									<div className="cat-desc">
										<h5 className="mb-1">Beauty</h5>
										<small className="badge badge-pill badge-primary mr-2">52</small><span className="text-muted">ads are posted</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="card-body">
								<div className="cat-item text-center">
									{/* <a href="classifieds-list.html"></a> */}
									<div className="cat-img">
										<img src="../assets/images/products/categories/graduation.png" alt="img" />
									</div>
									<div className="cat-desc">
										<h5 className="mb-1">Education </h5>
										<small className="badge badge-pill badge-primary mr-2">46</small><span className="text-muted">ads are posted</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="card-body">
								<div className="cat-item text-center">
									{/* <a href="classifieds-list.html"></a> */}
									<div className="cat-img">
										<img src="../assets/images/products/categories/workspace.png" alt="img" />
									</div>
									<div className="cat-desc">
										<h5 className="mb-1">Computer</h5>
										<small className="badge badge-pill badge-primary mr-2">22</small><span className="text-muted">ads are posted</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="card-body">
								<div className="cat-item text-center">
									{/* <a href="classifieds-list.html"></a> */}
									<div className="cat-img">
										<img src="../assets/images/products/categories/sketch.png" alt="img" />
									</div>
									<div className="cat-desc">
										<h5 className="mb-1">Construction</h5>
										<small className="badge badge-pill badge-primary mr-2">31</small><span className="text-muted">ads are posted</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="card-body">
								<div className="cat-item text-center">
									{/* <a href="classifieds-list.html"></a> */}
									<div className="cat-img">
										<img src="../assets/images/products/categories/furniture.png" alt="img" />
									</div>
									<div className="cat-desc">
										<h5 className="mb-1">Furnitures</h5>
										<small className="badge badge-pill badge-primary mr-2">12</small><span className="text-muted">ads are posted</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="card-body">
								<div className="cat-item text-center">
									{/* <a href="classifieds-list.html"></a> */}
									<div className="cat-img">
										<img src="../assets/images/products/categories/electronics.png" alt="img" />
									</div>
									<div className="cat-desc">
										<h5 className="mb-1">Electronics</h5>
										<small className="badge badge-pill badge-primary mr-2">21</small><span className="text-muted">ads are posted</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="card-body">
								<div className="cat-item text-center">
									{/* <a href="classifieds-list.html"></a> */}
									<div className="cat-img">
										<img src="../assets/images/products/categories/heart.png" alt="img" />
									</div>
									<div className="cat-desc">
										<h5 className="mb-1">Health</h5>
										<small className="badge badge-pill badge-primary mr-2">24</small><span className="text-muted">ads are posted</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</OwlCarousel>
			</div>
		</section>
		<section className="sptb bg-white">
			<div className="container">
				<div className="section-title center-block text-center">
					<h2>Latest Ads</h2>
					<p>Mauris ut cursus nunc. Morbi eleifend, ligula at consectetur vehicula</p>
				</div>
				<OwlCarousel className='owl-stage-outer' loop items={4} margin={50} nav dots={false}>
					<div className="item">
						<div className="card mb-0">
							<div className="power-ribbon power-ribbon-top-left text-warning"><span className="bg-warning"><i className="fa fa-bolt"></i></span></div>
							<div className="item-card2-img">
								{/*<a href="classified.html"></a>*/}
								<img src="../assets/images/products/products/f1.jpg" alt="img" className="cover-image" />
							</div>
							<div className="item-card2-icons">
								<a href="classified.html" className="item-card2-icons-l bg-primary"> <i className="fa fa-cutlery"></i></a>
								<a href="#/" className="item-card2-icons-r bg-secondary"><i className="fa fa fa-heart-o"></i></a>
							</div>
							<div className="card-body pb-0">
								<div className="item-card2">
									<div className="item-card2-desc">
										<div className="item-card2-text">
											<a href="classified.html" className="text-dark"><h4 className="mb-0">Somik Restaurant</h4></a>
										</div>
										<div className="d-flex">
											<a href="#/">
												<p className="pb-0 pt-0 mb-2 mt-2"><i className="fa fa-map-marker text-danger mr-2"></i>Florida, USA</p>
											</a>
											<span className="ml-3 pb-0 pt-0 mb-2 mt-2">$200.00</span>
										</div>
										<p className="">Ut enim ad minima veniam, quis int nostrum exercitationem </p>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<div className="item-card2-footer">
									<div className="item-card2-footer-u">
									    <div className="row d-flex">
											<span className="review_score mr-2 badge badge-primary">4.0/5</span>
                                            <div className="rating-stars d-inline-flex">
												<input type="number" readOnly="readOnly" className="rating-value star" name="rating-stars-value" value="3" />
												<div className="rating-stars-container">
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm">
														<i className="fa fa-star"></i>
													</div>
												</div> (5 Reviews)
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="power-ribbon power-ribbon-top-left text-warning"><span className="bg-warning"><i className="fa fa-bolt"></i></span></div>
							<div className="item-card2-img">
								{/*<a href="classified.html"></a>*/}
								<img src="../assets/images/products/products/h4.jpg" alt="img" className="cover-image" />
							</div>
							<div className="item-card2-icons">
								<a href="#/" className="item-card2-icons-l bg-primary"> <i className="fa fa-home"></i></a>
								<a href="#/" className="item-card2-icons-r bg-secondary"><i className="fa fa fa-heart-o"></i></a>
							</div>
							<div className="card-body pb-0">
								<div className="item-card2">
									<div className="item-card2-desc">
										<div className="item-card2-text">
											<a href="classified.html" className="text-dark"><h4 className="mb-0">GilkonStar Hotel</h4></a>
										</div>
										<div className="d-flex pb-0 pt-0">
											<a href="#/">
												<p className="pb-0 pt-0 mb-2 mt-2"><i className="fa fa-map-marker text-danger mr-2"></i>Florida, Uk</p>
											</a>
											<span className="ml-3 pb-0 pt-0 mb-2 mt-2">$200.00</span>
										</div>
										<p className="">Ut enim ad minima veniam, quis int nostrum exercitationem </p>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<div className="item-card2-footer ">
									<div className="item-card2-footer-u">
										<div className="row d-flex">
											<span className="review_score mr-2 badge badge-primary">4.0/5</span>
                                            <div className="rating-stars d-inline-flex">
												<input type="number" readOnly="readOnly" className="rating-value star" name="rating-stars-value" value="3" />
												<div className="rating-stars-container">
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm">
														<i className="fa fa-star"></i>
													</div>
												</div> (5 Reviews)
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="item-card2-img">
								{/*<a href="classified.html"></a>*/}
								<img src="../assets/images/products/products/b1.jpg" alt="img" className="cover-image" />
							</div>
							<div className="item-card2-icons">
								<a href="#/" className="item-card2-icons-l bg-primary"> <i className="fa fa-paint-brush"></i></a>
								<a href="#/" className="item-card2-icons-r bg-secondary"><i className="fa fa fa-heart-o"></i></a>
							</div>
							<div className="card-body pb-0">
								<div className="item-card2">
									<div className="item-card2-desc">
										<div className="item-card2-text">
											<a href="classified.html" className="text-dark"><h4 className="mb-0">Sear Beauty & Spa</h4></a>
										</div>
										<div className="d-flex pb-0 pt-0">
											<a href="#/">
												<p className="pb-0 pt-0 mb-2 mt-2"><i className="fa fa-map-marker text-danger mr-2"></i>Florida, Uk</p>
											</a>
											<span className="ml-3 pb-0 pt-0 mb-2 mt-2">$200.00</span>
										</div>
										<p className="">Ut enim ad minima veniam, quis int nostrum exercitationem </p>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<div className="item-card2-footer">
									<div className="item-card2-footer-u">
										<div className="row d-flex">
											<span className="review_score mr-2 badge badge-primary">4.0/5</span>
                                            <div className="rating-stars d-inline-flex">
												<input type="number" readOnly="readOnly" className="rating-value star" name="rating-stars-value" value="3" />
												<div className="rating-stars-container">
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm">
														<i className="fa fa-star"></i>
													</div>
												</div> (5 Reviews)
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="ribbon ribbon-top-left text-danger"><span className="bg-danger">Urgent</span></div>
							<div className="item-card2-img">
								{/*<a href="classified.html"></a>*/}
								<img src="../assets/images/products/products/v1.jpg" alt="img" className="cover-image" />
							</div>
							<div className="item-card2-icons">
								<a href="#/" className="item-card2-icons-l bg-primary"> <i className="fa fa-car"></i></a>
								<a href="#/" className="item-card2-icons-r bg-secondary"><i className="fa fa fa-heart-o"></i></a>
							</div>
							<div className="card-body pb-0">
								<div className="item-card2">
									<div className="item-card2-desc">
										<div className="item-card2-text">
											<a href="classified.html" className="text-dark"><h4 className="mb-0">Seep Automobiles</h4></a>
										</div>
										<div className="d-flex pb-0 pt-0">
											<a href="#/">
												<p className="pb-0 pt-0 mb-2 mt-2"><i className="fa fa-map-marker text-danger mr-2"></i>Florida, Uk</p>
											</a>
											<span className="ml-3 pb-0 pt-0 mb-2 mt-2">$200.00</span>
										</div>
										<p className="">Ut enim ad minima veniam, quis int nostrum exercitationem </p>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<div className="item-card2-footer">
									<div className="item-card2-footer-u">
										<div className="row d-flex">
											<span className="review_score mr-2 badge badge-primary">4.0/5</span>
                                            <div className="rating-stars d-inline-flex">
												<input type="number" readOnly="readOnly" className="rating-value star" name="rating-stars-value" value="3" />
												<div className="rating-stars-container">
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm">
														<i className="fa fa-star"></i>
													</div>
												</div> (5 Reviews)
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="item">
						<div className="card mb-0">
							<div className="power-ribbon power-ribbon-top-left text-warning"><span className="bg-warning"><i className="fa fa-bolt"></i></span></div>
							<div className="item-card2-img">
								{/*<a href="classified.html"></a>*/}
								<img src="../assets/images/products/products/f3.jpg" alt="img" className="cover-image" />
							</div>
							<div className="item-card2-icons">
								<a href="#/" className="item-card2-icons-l bg-primary"> <i className="fa fa-cutlery"></i></a>
								<a href="#/" className="item-card2-icons-r bg-secondary"><i className="fa fa fa-heart-o"></i></a>
							</div>
							<div className="card-body pb-0">
								<div className="item-card2">
									<div className="item-card2-desc">
										<div className="item-card2-text">
											<a href="classified.html" className="text-dark"><h4 className="mb-0">Somik Restaurant</h4></a>
										</div>
										<div className="d-flex pb-0 pt-0">
											<a href="#/">
												<p className="pb-0 pt-0 mb-2 mt-2"><i className="fa fa-map-marker text-danger mr-2"></i>Florida, Uk</p>
											</a>
											<span className="ml-3 pb-0 pt-0 mb-2 mt-2">$200.00</span>
										</div>
										<p className="">Ut enim ad minima veniam, quis int nostrum exercitationem </p>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<div className="item-card2-footer">
									<div className="item-card2-footer-u">
										<div className="row d-flex">
											<span className="review_score mr-2 badge badge-primary">4.0/5</span>
                                            <div className="rating-stars d-inline-flex">
												<input type="number" readOnly="readOnly" className="rating-value star" name="rating-stars-value" value="3" />
												<div className="rating-stars-container">
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm">
														<i className="fa fa-star"></i>
													</div>
												</div> (5 Reviews)
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</OwlCarousel>
			</div>
		</section>
		<section className="sptb position-relative pattern">
			<div className="container">
				<div className="section-title center-block text-center">
					<h1 className="text-white position-relative">Testimonials</h1>
				</div>
				<div className="row">
					<div className="col-md-12">
					<OwlCarousel className='owl-stage-outer' loop items={1} margin={50} nav dots={false}>
							<div className="item text-center">
								<div className="row">
									<div className="col-xl-8 col-md-12 d-block mx-auto">
										<div className="testimonia">
										    <p className="text-white-80">
												<i className="fa fa-quote-left text-white-80"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat ad velit ab. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore cum accusamus eveniet molestias voluptatum inventore laboriosam labore sit, aspernatur praesentium iste impedit quidem dolor veniam.
											</p>
											<h2 className="text-white title">Elizabeth</h2>
											<span className="text-white post">Web Developer</span>
											<div className="rating-stars">
												<input type="number" readOnly="readonly" className="rating-value star" name="rating-stars-value" value="4" />
												<div className="rating-stars-container">
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm is--active">
														<i className="fa fa-star"></i>
													</div>
													<div className="rating-star sm">
														<i className="fa fa-star"></i>
													</div>
												</div>
												<div className="owl-controls">
														<div className="owl-pagination">
															<div className="owl-page ">
																<span className=""></span>
															</div>
															<div className="owl-page">
																<span className=""></span>
															</div>
															<div className="owl-page active">
																<span className=""></span>
															</div>
														</div>
													</div>
											</div>
											</div>
									</div>
								</div>
							</div>
							<div className="item text-center">
								<div className="row">
									<div className="col-xl-8 col-md-12 d-block mx-auto">
										<div className="testimonia">
											<p className="text-white-80"><i className="fa fa-quote-left"></i> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore. </p>
											<div className="testimonia-data">
												<h3 className="text-white title">williamson</h3>
												<span className="text-white post">Web Developer</span>
												<div className="rating-stars">
													<input type="number" readOnly="readonly" className="rating-value star" name="rating-stars-value"  value="3" />
													<div className="rating-stars-container">
														<div className="rating-star sm is--active">
															<i className="fa fa-star"></i>
														</div>
														<div className="rating-star sm is--active">
															<i className="fa fa-star"></i>
														</div>
														<div className="rating-star sm is--active">
															<i className="fa fa-star"></i>
														</div>
														<div className="rating-star sm">
															<i className="fa fa-star"></i>
														</div>
														<div className="rating-star sm">
															<i className="fa fa-star"></i>
														</div>
													</div>
													</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="item text-center">
								<div className="row">
									<div className="col-xl-8 col-md-12 d-block mx-auto">
										<div className="testimonia">
											<p className="text-white-80"><i className="fa fa-quote-left"></i> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
											<div className="testimonia-data">
											    <h3 className="text-white title">Sophie Carr</h3>
												<span className="text-white post">Web Developer</span>
												<div className="rating-stars">
													<input type="number" readOnly="readonly" className="rating-value star" name="rating-stars-value"  value="3" />
													<div className="rating-stars-container">
														<div className="rating-star sm is--active">
															<i className="fa fa-star"></i>
														</div>
														<div className="rating-star sm is--active">
															<i className="fa fa-star"></i>
														</div>
														<div className="rating-star sm is--active">
															<i className="fa fa-star"></i>
														</div>
														<div className="rating-star sm">
															<i className="fa fa-star"></i>
														</div>
														<div className="rating-star sm">
															<i className="fa fa-star"></i>
														</div>
													</div>
													</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</OwlCarousel>
					</div>
				</div>
			</div>
		</section>
		 <Footer />
      </React.Fragment>
    );
  }
}

export default Home;
