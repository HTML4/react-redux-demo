import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRedirect, browserHistory } from 'react-router';
import Index from 'Client/js/containers/Index'
import Demo from 'Client/js/containers/Demo'



export default class CRouter extends Component {
	loading(){

	}
	render(){
		return(
				<Router history={browserHistory}>
        	<Route path={'/'} components={Index} getComponent={(nextState, cb) => {
  // do asynchronous stuff to find the components
  console.log("nextState",nextState)
  				cb(null)
				}}>

        	</Route>
        	<Route path="/demo"
        		components={Demo}/>
        </Router>
			)
	}
}
