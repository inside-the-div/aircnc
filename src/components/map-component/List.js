import React, { Component } from 'react';
import img_1 from '../../img/img-1.jpg'
import img_2 from '../../img/img-2.jpg'
import img_3 from '../../img/img-3.jpg'

class List extends Component{


	render(){




		const ListOfValues = [

			{
				id :    1,
				img: 	img_1,
				title:  'Light brigt airy stylish apt & safe peaceful stay',
				attributes: '4 guests2 beadrooms2 bedsWifi air condition',
				rating:      '4.9 (20)',
				priceParNight: '$34',
				totalPrice:    '$267'
			},
			{
				id :    2,
				img: 	img_2,
				title:  'Light brigt airy stylish apt & safe peaceful stay',
				attributes: '4 guests2 beadrooms2 bedsWifi air condition',
				rating:      '4.9 (40)',
				priceParNight: '$54',
				totalPrice:    '$167'
			},
			{
				id :    3,
				img: 	img_3,
				title:  'Light brigt airy stylish apt & safe peaceful stay',
				attributes: '4 guests2 beadrooms2 bedsWifi air condition',
				rating:      '4.9 (30)',
				priceParNight: '$44',
				totalPrice:    '$367'
			},
			{
				id :    4,
				img: 	img_2,
				title:  'Light brigt airy stylish apt & safe peaceful stay',
				attributes: '4 guests2 beadrooms2 bedsWifi air condition',
				rating:      '4.9 (10)',
				priceParNight: '$154',
				totalPrice:    '$567'
			}

		];



		const lists = ListOfValues.map(list => 


			<div key={list.id} className="single-list">
				<div className="row">
					<div className="col-12 col-md-5">
						<img className="img-fluid"  src={list.img} alt=""/>
					</div>

					<div className="col-12 col-md-7">
						<a href="">{list.title}</a>
						<span>{list.attributes}</span>
					
						<div className="clearfix foofer">
						  <div  className="float-left"><i className="fa fa-star" aria-hidden="true"></i>{list.rating}</div>
						  <div className="float-right"><b>{list.priceParNight}</b>/night <br/>

						  	{list.totalPrice} total
						  </div>
						</div>
						
					</div>
				</div>
			</div>


		);







		return (

			<div className="left-content map-component">

				<div className="row">
					<div className="col-12 header">
						<p>252 stays Apr 13-17 3 guests</p>
						<h1>Stay in Dhaka Division</h1>
					</div>
				</div>

				<div className="row my-2">
					<div className="col-12 tag">
						<a className="tag-btn" href="">Cancellation flexiblity</a>
						<a className="tag-btn" href="">Type of place</a>
						<a className="tag-btn" href="">Price</a>
						<a className="tag-btn" href="">Instant Book</a>
						<a className="tag-btn" href="">More Filters</a>
					</div>
				</div>


				<div className="row lists">
					<div className="col-12">

						{lists}


						
					</div>

				</div>
			
			</div>

		);
	}
}

export default List