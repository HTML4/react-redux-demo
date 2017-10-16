
import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'
import DropOption from 'src/js/components/common/DropOption'
import lodash from 'lodash'
import {request} from 'utils'
class DataTable extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      pagination: {
        showQuickJumper: true,
        showTotal:  total => `共 ${total} 条`,
        current: 1,
        total: 100 
      },
      dataSource:[{
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
      }]
    }
  }
  componentDidMount () {
    const { tableProps } = this.props
    if (tableProps && tableProps.fetch) {
      this.fetch()
    }
  }
  handleTableChange (pagination, filters, sorter) {

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
    const { fetch: { url, data, dataKey } } = this.props.tableProps
    const { fetchData } = this.state
    this.setState({ loading: true })
    this.promise = request({
      url,
      data: {
        page: 1,
        results: 10, 
        ...data,
        ...fetchData,
      },
    }).then((result) => {
      if (!this.refs.DataTable) {
        return
      }
      let dataSource = dataKey ? result[dataKey] : result.data
      dataSource.map((d, i) => {
        d.key = d.id ? i : i
      })
      const { pagination } = this.state
      pagination.total = result.total || pagination.total
      this.setState({
        loading: false,
        dataSource,
        pagination,
      })
    }).catch(err => {
      this.setState({
        loading: false
      })
    })
  }
  lastTd(tableProps){
    let newTableProps = _.cloneDeep(tableProps)
    if(tableProps && tableProps.columns && tableProps.lastTd) {

      switch (tableProps.lastTd.type){
        case "option": 
          newTableProps.columns.push({
            width: 100,
            ...newTableProps.lastTd.init,
            render: (text, record) => {
              return <DropOption onMenuClick={e => newTableProps.lastTd.onClick(record, e)} menuOptions={newTableProps.lastTd.options} />
            }
          })
          break
        default: null
      }
      
    }
    return newTableProps
  }
  render(){
    const {loading} = this.state
    const columns = [{
      title: '姓名',
      dataIndex: 'name',
      render: text => <a href="#">{text}</a>,
    }, {
      title: 'Age',
      dataIndex: 'age',
    }, {
      title: 'Address',
      dataIndex: 'address',
    }, {
      title: 'Operation',
      key: 'operation',
      width: 100,
      render: (text, record) => {
        return <DropOption onMenuClick={e => console.log(record, e)} menuOptions={[{ key: '1', name: 'Update' }, { key: '2', name: 'Delete' }]} />
      },
    }];
    const tableProps = this.lastTd(this.props.tableProps)
    return (
      <Table
        {...tableProps}
        style={{background:"#fff"}}
        ref="DataTable"
        loading={this.state.loading}
        bordered
        onChange={this.handleTableChange.bind(this)}
        pagination={this.state.pagination}
        dataSource={this.state.dataSource}
      />
    )
  }
}

export default DataTable