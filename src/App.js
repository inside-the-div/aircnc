import React from 'react';
import logo from './logo.svg';

import './bootstrap.min.css';
import './App.css';
 
import {BrowserRouter, Route} from 'react-router-dom'


// components 
import Header from './components/Header'
import Home from './components/home-component/Home'
import Maps from './components/map-component/Maps'



function App() {
  return (

  	<BrowserRouter>
  		<div>
  		  <Header />
  		  

  		  <Route exact path='/' component={Home} />
  		  <Route path='/map' component={Maps} />
  		</div>
  	</BrowserRouter>
    
  );
}

export default App;
