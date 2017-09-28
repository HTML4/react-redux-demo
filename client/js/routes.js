import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRedirect } from 'react-router';
import Index from 'Client/js/pages/Home/Index'
import Demo from 'Client/js/pages/Home/Demo'

export default class CRouter extends Component {
	loading(){

	}
	render(){
		return(
				<Router history={hashHistory}>
        	<Route path={'/'} components={Index}>
        		
        	</Route>
        	<Route path="/demo" 
        		components={(props) => !props ? <div>loading...</div> : <div>success</div>}
        		 render={({props, _, element}) =>console.log("props..",props) }/>
        </Router>
			)
	}
}

