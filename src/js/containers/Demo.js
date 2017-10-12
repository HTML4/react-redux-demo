import React from 'react'
import {fetchItems} from 'Src/js/actions/demoAction'
import { connect } from 'react-redux';
import {Link} from 'react-router'

class Demo extends React.Component {
	componentWillMount(){

	}

	render(){
		console.log("props",this.props)
		return (
			<div>
        {this.props.data ? this.props.data.showapi_res_error : null}
				<div onClick={() =>this.props.getItems()}>发起请求</div>
				<Link to="/">跳转到首页</Link>
			</div>

		)
	}
}

const mapStateToPorps = state => {
    const {data} = state.getItems
    console.log("data",data)
    return state.getItems;
};
const mapDispatchToProps = dispatch => ({
    getItems: () => dispatch(fetchItems())
});

export default connect(mapStateToPorps, mapDispatchToProps)(Demo);
