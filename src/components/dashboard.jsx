import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';

class DashBoard extends Component {
    state = {  }
    render() { 
        return (<React.Fragment>
			<Header />
            <section className="sptb">
			<div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-12 col-md-12">
						<div className="card">
							<div className="card-header">
								<h3 className="card-title">My Dashboard</h3>
							</div>
							<div className="card-body text-center item-user border-bottom">
								<div className="profile-pic">
									<div className="profile-pic-img">
										<span className="bg-success dots" data-toggle="tooltip" data-placement="top" title="online"></span>
										<img src="../assets/images/faces/male/25.jpg" className="brround" alt="user" />
									</div>
									<a href="userprofile.html" className="text-dark"><h4 className="mt-3 mb-0 font-weight-semibold">Robert McLean</h4></a>
								</div>
							</div>
							<div className="item1-links  mb-0">
								<a href="mydash.html" className="active d-flex border-bottom">
									<span className="icon1 mr-3"><i className="icon icon-user"></i></span> Edit Profile
								</a>
								<a href="myads.html" className=" d-flex  border-bottom">
									<span className="icon1 mr-3"><i className="icon icon-diamond"></i></span> My Ads
								</a>
								<a href="myfavorite.html" className=" d-flex border-bottom">
									<span className="icon1 mr-3"><i className="icon icon-heart"></i></span> My Favorite
								</a>
								<a href="manged.html" className="d-flex  border-bottom">
									<span className="icon1 mr-3"><i className="icon icon-folder-alt"></i></span> Managed Ads
								</a>
								<a href="payments.html" className=" d-flex  border-bottom">
									<span className="icon1 mr-3"><i className="icon icon-credit-card"></i></span> Payments
								</a>
								<a href="orders.html" className="d-flex  border-bottom">
									<span className="icon1 mr-3"><i className="icon icon-basket"></i></span> Orders
								</a>
								<a href="tips.html" className="d-flex border-bottom">
									<span className="icon1 mr-3"><i className="icon icon-game-controller"></i></span> Safety Tips
								</a>
								<a href="settings.html" className="d-flex border-bottom">
									<span className="icon1 mr-3"><i className="icon icon-settings"></i></span> Settings
								</a>
								<a href="#/" className="d-flex">
									<span className="icon1 mr-3"><i className="icon icon-power"></i></span> Logout
								</a>
							</div>
						</div>
						<div className="card my-select">
							<div className="card-header">
								<h3 className="card-title">Search Ads</h3>
							</div>
							<div className="card-body">
								<div className="form-group">
									<input type="text" className="form-control" id="text" placeholder="What are you looking for?" />
								</div>
								<div className="form-group">
									<select name="country" id="select-countries" className="form-control custom-select select2-show-search">
										<option value="1" defaultValue="">All Categories</option>
										<option value="2">RealEstate</option>
										<option value="3">Restaurant</option>
										<option value="4">Beauty</option>
										<option value="5">Jobs</option>
										<option value="6">Services</option>
										<option value="7">Vehicle</option>
										<option value="8">Education</option>
										<option value="9">Electronics</option>
										<option value="10">Pets &amp; Animals</option>
										<option value="11">Computer</option>
										<option value="12">Mobile</option>
										<option value="13">Events</option>
										<option value="14">Travel</option>
										<option value="15">Clothing</option>
									</select>
								</div>
								<div className="">
									<a href="#/" className="btn  btn-primary">Search</a>
								</div>
							</div>
						</div>
						
							
					</div>
					<div className="col-xl-9 col-lg-12 col-md-12">
						<div className="card mb-0">
							<div className="card-header">
								<h3 className="card-title">Edit Profile</h3>
							</div>
							<div className="card-body">
								<div className="row">
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">First Name</label>
											<input type="text" className="form-control" placeholder="First Name" />
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Last Name</label>
											<input type="text" className="form-control" placeholder="Last Name" />
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Email address</label>
											<input type="email" className="form-control" placeholder="Email" />
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Phone Number</label>
											<input type="number" className="form-control" placeholder="Number" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<label className="form-label">Address</label>
											<input type="text" className="form-control" placeholder="Home Address" />
										</div>
									</div>
									<div className="col-sm-6 col-md-4">
										<div className="form-group">
											<label className="form-label">City</label>
											<input type="text" className="form-control" placeholder="City" />
										</div>
									</div>
									<div className="col-sm-6 col-md-3">
										<div className="form-group">
											<label className="form-label">Postal Code</label>
											<input type="number" className="form-control" placeholder="ZIP Code" />
										</div>
									</div>
									<div className="col-md-5">
										<div className="form-group">
											<label className="form-label">Country</label>
											<select className="form-control select2-show-search border-bottom-0 w-100 select2-show-search" data-placeholder="Select">
												<optgroup label="Categories">
													<option>--Select--</option>
													<option value="1">Germany</option>
													<option value="2">Real Estate</option>
													<option value="3">Canada</option>
													<option value="4">Usa</option>
													<option value="5">Afghanistan</option>
													<option value="6">Albania</option>
													<option value="7">China</option>
													<option value="8">Denmark</option>
													<option value="9">Finland</option>
													<option value="10">India</option>
													<option value="11">Kiribati</option>
													<option value="12">Kuwait</option>
													<option value="13">Mexico</option>
													<option value="14">Pakistan</option>
												</optgroup>
											</select>
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Facebook</label>
											<input type="text" className="form-control" placeholder="https://www.facebook.com/" />
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Google</label>
											<input type="text" className="form-control" placeholder="https://www.google.com/" />
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Twitter</label>
											<input type="text" className="form-control" placeholder="https://twitter.com/" />
										</div>
									</div>
									<div className="col-sm-6 col-md-6">
										<div className="form-group">
											<label className="form-label">Pinterest</label>
											<input type="text" className="form-control" placeholder="https://in.pinterest.com/" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<label className="form-label">About Me</label>
											<textarea rows="5" className="form-control" placeholder="Enter About your description"></textarea>
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group mb-0">
											<label className="form-label">Upload Image</label>
											<div className="custom-file">
												<input type="file" className="custom-file-input" name="example-file-input-custom" />
												<label className="custom-file-label">Choose file</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="card-footer">
								<button type="submit" className="btn btn-primary">Updated Profile</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<Footer />
        </React.Fragment>  );
    }
}
 
export default DashBoard;