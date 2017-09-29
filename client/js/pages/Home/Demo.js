import React from 'react'
import { connect } from 'react-redux';

class Demo extends React.Component {
	componentWillMount(){
		console.log("props",this.props)
	}

	render(){

		return (
			<div>kasjhakfgaj</div>
		)
	}
}

const mapStateToPorps = state => {
  console.log("stat..e",state)
    const {data} = state.demo
    return state.demo;
};
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToPorps, mapDispatchToProps)(Demo);