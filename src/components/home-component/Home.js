import React, { Component } from 'react';


// import home Component 

import Sidebar from './Sidebar'
import Contente from './Contente'


class Home extends Component{


	render(){
		return (
			<section className="main-content">
				<div className="container">

					<div className="row">
						<div className="col-12">
							<h1 className="section-title">Where do you want to go</h1>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-4 col-12">
							<Sidebar/>
						</div> 
						<div className="col-lg-8 col-12">
							<Contente/>
						</div>
					</div>
				</div>
				
			</section>
				
		);
	}
}

export default Home