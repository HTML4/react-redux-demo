import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRedirect, browserHistory, IndexRoute } from 'react-router';
import Index from 'src/js/containers/Index'
import Demo from 'src/js/containers/Demo'
import Root from 'src/js/containers/Root'
import Login from 'src/js/containers/Login'

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
          <Route path="/login"
              components={Login}/>
        </Router>
			)
	}
}
