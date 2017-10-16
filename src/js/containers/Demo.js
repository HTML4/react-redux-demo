import React from 'react'
import {fetchItems} from 'src/js/actions/demoAction'
import { connect } from 'react-redux';
import {Link} from 'react-router'
import DataTable from 'src/js/components/common/DataTable'
import Page from 'src/js/components/common/Page'
import AutoCompleteSelect from 'src/js/components/common/AutoCompleteSelect'

class Demo extends React.Component {
	componentWillMount(){

	}
  tableProps(){
    return {
      columns: [{
        title: '姓名',
        dataIndex: 'name',
        render: text => <a href="#">{text.title}</a>,
      }, {
        title: 'Age',
        dataIndex: 'gender',
      }, {
        title: 'phone',
        dataIndex: 'phone',
      }],
      lastTd: {
        type: 'option',
        init: {
          title:"set",
          key: "set",
        },
        options:[{
          key: 1,
          name: "delete"
        }]
      },
      fetch: {
        url:'https://randomuser.me/api',
        dataKey: 'results',
      }
    }
  }
	render(){
		return (
			<Page>
        <AutoCompleteSelect/>
        <DataTable tableProps={this.tableProps()}/>
        {this.props.data ? this.props.data.showapi_res_error : null}
				<div style={{height:1100}} onClick={() =>this.props.getItems()}>发起请求</div>
				<Link to="/">跳转到首页</Link>
			</Page>

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
