import React from 'react'
import {fetchItems} from 'Client/js/actions/demoAction'
import { connect } from 'react-redux';
import {Link} from 'react-router'

class Demo extends React.Component {
	componentWillMount(){
		console.log("props",this.props)
	}

	render(){

		return (
			<div>
				<div onClick={() =>this.props.getItems()}>kasjhakfgaj</div>
				<Link to="/">跳转12</Link>
			</div>
			
		)
	}
}

const mapStateToPorps = state => {
  console.log("state..",state)
    const {data} = state.demo
    return state.demo;
};
const mapDispatchToProps = dispatch => ({
    getItems: () => dispatch(fetchItems())
});

export default connect(mapStateToPorps, mapDispatchToProps)(Demo);