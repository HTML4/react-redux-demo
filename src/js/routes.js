import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRedirect, browserHistory, IndexRoute } from 'react-router';
import Index from 'Src/js/containers/Index'
import Demo from 'Src/js/containers/Demo'
import Root from 'Src/js/containers/Root'

export default class CRouter extends Component {
	loading(){

	}
	render(){
		return(
				<Router history={browserHistory}>
        	<Route path={'/'} components={Root} render={
            ({props, _, element}) => console.log(props,"..")
          }>
          	<IndexRoute
        			components={Index}/>
        		<Route path="/app/demo"
        			components={Demo}/>
        	</Route>
        </Router>
			)
	}
}
