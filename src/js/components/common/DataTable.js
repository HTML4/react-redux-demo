import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import lodash from 'lodash'

class DataTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      pagination: {
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal:  total => `共 ${total} 条`,
        current: 1,
        total: 100 
      }
    }
  }
  handleTableChange = (pagination, filters, sorter) => {
    console.log("pagination",pagination)
    const pager = this.state.pagination
    pager.current = pagination.current
    this.setState({
      pagination: pager,
      fetchData: {
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters,
      },
    }, () => this.fetch())
  }
  fetch() {
    const { fetch: { url, data, dataKey } } = this.props
    const { fetchData } = this.state
    this.setState({ loading: true })
    this.promise = request({
      url,
      data: {
        ...data,
        ...fetchData,
      },
    }).then((result) => {
      if (!this.refs.DataTable) {
        return
      }
      const { pagination } = this.state
      pagination.total = result.total || pagination.total
      this.setState({
        loading: false,
        dataSource: dataKey ? result[dataKey] : result.data,
        pagination,
      })
    })
  }
  render(){
    const {loading} = this.state
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }];
    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Disabled User',
      age: 99,
      address: 'Sidney No. 1 Lake Park',
    }];
    return (
      <Table
      style={{background:"#fff"}}
        ref="DataTable"
        loading
        bordered
        onChange={this.handleTableChange}
        pagination={this.state.pagination}
        dataSource={data}
        columns={columns}
      />
    )
  }
}

export default DataTable