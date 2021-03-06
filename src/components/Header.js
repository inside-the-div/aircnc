import React, { Component } from 'react';

class Header extends Component{


	render(){
		return (
			<nav className="navbar navbar-expand-lg navbar-light">
			    <div className="container">
					<a className="navbar-brand" href="/">Aircnc</a>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<a className="nav-link" href="/">Home</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="/map">Map</a>
							</li>

							<li className="nav-item">
								<a className="nav-link " href="#">Help</a>
							</li>
							<li className="nav-item">
								<a className="nav-link " href="#">Log in</a>
							</li>
							<li className="nav-item sign-up">
								<a className="nav-link " href="#">Sign up</a>
							</li>
						</ul>
					</div> 
			    </div> 
			</nav>
				
		);
	}
}

export default Header