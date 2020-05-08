import React, { Component } from 'react';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Mymap extends Component{

	constructor(props){
		super(props);

		this.state = {
			showHide: true
		}
	}


	render(){
		return (
			
				
				<Map 

				google={this.props.google}
				 zoom={10}
				 initialCenter={{
				             lat: 23.777176,
				             lng: 90.399452
				           }}
				 >

				 <Marker
				     title={'The marker`s title will appear as a tooltip.'}
				     name={'Dhanmondi'}
				     position={{lat: 23.787176, lng: 90.499452}} /> 



				     <Marker
				         title={'The marker`s title will appear as a tooltip.'}
				         name={'This is name'}
				         position={{lat: 23.797176, lng: 90.499452}} /> 


				         <Marker
				             title={'The marker`s title will appear as a tooltip.'}
				             name={'This is name'}
				             position={{lat: 23.707176, lng: 90.419452}} /> 


			             <Marker
			                 title={'The marker`s title will appear as a tooltip.'}
			                 name={'This is name'}
			                 position={{lat: 23.643176, lng: 90.419352}} /> 

				    <Marker
				        title={'The marker`s title will appear as a tooltip.'}
				        name={'This is name'}
				        position={{lat: 23.603176, lng: 90.915352}} /> 


				        <Marker
				            title={'The marker`s title will appear as a tooltip.'}
				            name={'This is name'}
				            position={{lat: 23.583176, lng: 90.419352}} /> 

				    


			       <Marker onClick={this.onMarkerClick}
			               name={'Current location'} />
			
			       <InfoWindow onClose={this.onInfoWindowClose}>
			           
			       </InfoWindow>
				</Map>

			
		
		);
	}
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyDIMPh_pzQWO7WGpQdftUrqDTswsWHFVu0')
})(Mymap)