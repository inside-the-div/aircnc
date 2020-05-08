import React, { Component } from 'react'

import img_1 from '../../img/img-1.jpg'
import img_2 from '../../img/img-2.jpg'
import img_3 from '../../img/img-3.jpg'


class Contente extends Component{


	



	render(){






		const ArryOfExperiences = [

			{
				id: 		1,
				img: 		img_3,
				title: 		'NIGHTLIFE NEW YORK',
				subTitle:   "Discover the city's party scene",
				price:      '$35 per person',
				rating:     '20'
			},
			{
				id: 		2,
				img: 		img_2,
				title: 		'NIGHTLIFE NEW YORK',
				subTitle:   "Discover the city's party scene",
				price:      '$35 per person',
				rating:     '30'
			},
			{
				id: 		3,
				img: 		img_3,
				title: 		'NIGHTLIFE NEW YORK',
				subTitle:   "Discover the city's party scene",
				price:      '$35 per person',
				rating:     '60'
			}

		];


		 const Experiences = ArryOfExperiences.map(Experience => 

		 	<div key={Experience.id} className="col-lg-4 col-md-6 col-12">
		 		<div className="single-experience">
		 			<img src={Experience.img} alt="" className="img-fluid" />
		 			<h3 className="mt-1">{Experience.title}</h3>
		 			<a href="" className="simple-detail mt-2">{Experience.subTitle}</a>
		 			<p className="price mt-2">{Experience.price}</p>
		 			<span>
		 				<i className="fa fa-star" aria-hidden="true"></i> 
		 				<i className="fa fa-star" aria-hidden="true"></i> 
		 				<i className="fa fa-star" aria-hidden="true"></i> 
		 				<i className="fa fa-star" aria-hidden="true"></i> 
		 				<i className="fa fa-star" aria-hidden="true"></i> 
		 				<i className="fa fa-star" aria-hidden="true"></i> 
		 				<small>{Experience.rating}</small>
		 		   </span>
		 		</div>
		 	</div>

		);






		 const ArryOfHome = [

		 	{
		 		id: 		1,
		 		img: 		img_2,
		 		title: 		'NIGHTLIFE NEW YORK',
		 		subTitle:   "Discover the city's party scene",
		 		price:      '$35 per person',
		 		rating:     '20'
		 	},
		 	{
		 		id: 		2,
		 		img: 		img_3,
		 		title: 		'NIGHTLIFE NEW YORK',
		 		subTitle:   "Discover the city's party scene",
		 		price:      '$35 per person',
		 		rating:     '30'
		 	},
		 	{
		 		id: 		3,
		 		img: 		img_2,
		 		title: 		'NIGHTLIFE NEW YORK',
		 		subTitle:   "Discover the city's party scene",
		 		price:      '$35 per person',
		 		rating:     '60'
		 	}

		 ];

		  const Homes = ArryOfHome.map(home => 

		  	<div key={home.id} className="col-lg-4 col-md-6 col-12">
		  		<div className="single-experience">
		  			<img src={home.img} alt="" className="img-fluid" />
		  			<h3 className="mt-1">{home.title}</h3>
		  			<a href="" className="simple-detail mt-2">{home.subTitle}</a>
		  			<p className="price mt-2">{home.price}</p>
		  			<span>
		  				<i className="fa fa-star" aria-hidden="true"></i> 
		  				<i className="fa fa-star" aria-hidden="true"></i> 
		  				<i className="fa fa-star" aria-hidden="true"></i> 
		  				<i className="fa fa-star" aria-hidden="true"></i> 
		  				<i className="fa fa-star" aria-hidden="true"></i> 
		  				<i className="fa fa-star" aria-hidden="true"></i> 
		  				<small>{home.rating}</small>
		  		   </span>
		  		</div>
		  	</div>

		 );




		return (
			<div className="right-content">

				


				<div className="experiences">
					<div className="row">
						<div className="col-12">
							<h2 className="title m-0">Experiences </h2>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="text-right">
								<a className="see-all" href="">SEE ALL <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
							</div>
						</div>
					</div>
					<div className="row">

						
						{Experiences}


					</div>
				</div>




				<div className="experiences home mt-4">
					<div className="row">
						<div className="col-12">
							<h2 className="title m-0">Home</h2>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<div className="text-right">
								<a className="see-all" href="">SEE ALL <i className="fa fa-chevron-right" aria-hidden="true"></i></a>
							</div>
						</div>
					</div>
					<div className="row">

						{Homes}

					</div>
				</div>
				
			</div>
		);
	}
}

export default Contente