import React, { Component } from 'react';


// import home Component 

import Mymap from './Mymap'
import List from './List'


class Home extends Component{


	render(){
		return (
			<section className="main-content">
				<div className="container">

					
					<div className="row mt-3">
						<div className="col-lg-5 col-12">
							<List/>
						</div> 
						<div className="col-lg-7 col-12">
							<Mymap/>
						</div>
					</div>
				</div>
				
			</section>
				
		);
	}
}

export default Home