import React from 'react'
import { connect } from 'react-redux';
import {fetchItems} from 'Client/js/actions/demoAction'

class Index extends React.Component {
	componentWillMount(){
		console.log("props",this.props)
	}

	onClick(){
		const {getItems} = this.props
		getItems()
	}
	render(){
			const {isFetch} = this.props
			//console.log("this.props",this.props)
		return (
			<div onClick={() => this.onClick()}>
				{isFetch ? "loading..." : "success"}
				<button>获取</button>
			</div>
		)
	}
}

const mapStateToPorps = state => {
  console.log("state",state)
    const {data} = state.demo
    return state.demo;
};
const mapDispatchToProps = dispatch => ({
    getItems: () => dispatch(fetchItems())
});

export default connect(mapStateToPorps, mapDispatchToProps)(Index);