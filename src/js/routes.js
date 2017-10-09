import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRedirect, browserHistory } from 'react-router';
import Index from 'Src/js/containers/Index'
import Demo from 'Src/js/containers/Demo'
import Root from 'Src/js/containers/Root'

export default class CRouter extends Component {
	loading(){

	}
	render(){
		return(
				<Router history={browserHistory}>
        	<Route path={'/'} components={Root}>
        		<Route path="demo"
        			components={Demo}/>
        	</Route>
        </Router>
			)
	}
}
