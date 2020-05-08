import React, { Component } from 'react';


class Sidebar extends Component{



	constructor(props){
		super(props);

		this.state = {
			showHide: true,
			adults: 0,
			childs: 0,
			babies: 0
		}
	}

	showHideFun(){
		this.setState({
			showHide : ! this.state.showHide
		});		
	}


	add_adults(){
		this.setState({
			adults : this.state.adults + 2
		});
	}
	sub_adults(){
		if(this.state.adults > 0){
			this.setState({
				adults :  this.state.adults - 2
			});
		}
	}



	add_childs(){
		this.setState({
			childs : this.state.childs + 2
		});
	}
	sub_childs(){
		if(this.state.childs > 0){
			this.setState({
				childs :  this.state.childs - 2
			});
		}
	}

	add_babies(){
		this.setState({
			babies : this.state.babies + 2
		});
	}
	sub_babies(){
		if(this.state.babies > 0){
			this.setState({
				babies :  this.state.babies - 2
			});
		}
	}


	render(){
		return (

			<div className="left-content">
				<div className="row">
					<div className="col-12">
						<div className="form-group">
						  <label htmlFor="">Email address</label>
						  <input type="text" className="form-control" placeholder="Add city, Landmark or address"/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-lg-6">
						<div className="form-group">
						  <label htmlFor="">Arrival</label>
						  <div className="icon"><i className="fa fa-calendar" aria-hidden="true"></i></div>
						  <input type="date" className="form-control"  value="2014-02-09"/>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="form-group">
						  <label htmlFor="">Departure</label>
						  <div className="icon"><i className="fa fa-calendar" aria-hidden="true"></i></div>
						  <input type="date" className="form-control"  value="2014-02-09" />
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-12">

						<div className="selected-area">
							<div className="clearfix value-show-area">
								 <h3 className="float-left number-of-pepole">




									  <span className="d-inline pr-3">{this.state.adults} ADULTS,</span>
									  <span className="d-inline pr-3">{this.state.childs} CHILDS, </span> 
									  <span className="d-inline pr-0">{this.state.babies} BABIES</span>     
									    
								 	  


								 </h3>
								 <button  style={{ transform: this.state.showHide ? 'rotate(0deg)' : 'rotate(180deg)'}} onClick={this.showHideFun.bind(this)} className="float-right toggle-btn"><i className="fa fa-chevron-up" aria-hidden="true"></i></button>
							</div>

							<div className="section-overflow" style={{ display: this.state.showHide ? 'block' : 'none'}}>
								<div  className="clearfix list-of-item mt-4">
									 <h3 className="float-left">ADULTS</h3>
									 <div className="float-right">
									 	<span onClick={this.sub_adults.bind(this)}>
									 		<i class="fa fa-minus" aria-hidden="true"></i>
									 	</span>
									 	<span>2</span>
									 	<span onClick={this.add_adults.bind(this)}>
									 		<i class="fa fa-plus" aria-hidden="true"></i>
									 	</span>
									 </div>
								</div>

								<div className="clearfix list-of-item">
									 <h3 className="float-left">CHILD</h3>
									 <div className="float-right">
									 	<span onClick={this.sub_childs.bind(this)}>
									 		<i class="fa fa-minus" aria-hidden="true"></i>
									 	</span>
									 	<span>2</span>
									 	<span onClick={this.add_childs.bind(this)}>
									 		<i class="fa fa-plus" aria-hidden="true"></i>
									 	</span>
									 </div>
								</div>


								<div className="clearfix list-of-item">
									 <h3 className="float-left">BABIES</h3>
									 <div className="float-right">
									 	<span onClick={this.sub_babies.bind(this)}>
									 		<i class="fa fa-minus" aria-hidden="true"></i>
									 	</span>
									 	<span>2</span>
									 	<span onClick={this.add_babies.bind(this)}>
									 		<i class="fa fa-plus" aria-hidden="true"></i>
									 	</span>
									 </div>
								</div>
								<div className="row my-5">
									<div className="col-12 text-right">
										<a className="apply-btn" href="">APPLY</a>
									</div>
								</div>
							</div>

						</div>

					</div>
				</div>

			
				<div className="row mt-4" >
					<div className="col-12">
						<a className="search-btn" href=""> <i className="fa fa-search" aria-hidden="true"></i> SEARCH</a>
					</div>
				</div>

			
			</div>

		);
	}
}

export default Sidebar