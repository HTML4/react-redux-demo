import React, { Component } from 'react';
import { Layout } from 'antd';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SiderCustom from 'Src/js/components/SiderCustom'
import HeaderCustom from 'Src/js/components/HeaderCustom'
const { Content, Footer } = Layout;

export default class Root extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			collapsed: false,
			isMobile: false
		}
	}
	componentWillMount() {
    this.getClientWidth();
    window.onresize = () => {
      console.log('屏幕变化了');
      this.getClientWidth();
    }
  }
	getClientWidth() {    // 获取当前浏览器宽度并设置responsive管理响应式
    const clientWidth = document.body.clientWidth;
    this.setState({isMobile: clientWidth <= 992});
  }
  toggle = () => {
    this.setState({
       collapsed: !this.state.collapsed,
    })
  }
	render(){
		return (
			<Layout className="ant-layout-has-sider">
          {!this.state.isMobile && <SiderCustom path={this.props.location.pathname} collapsed={this.state.collapsed} />}
        <Layout>
          {
          	<HeaderCustom isMobile={this.state.isMobile} toggle={this.toggle} router={this.props.router} path={this.props.location.pathname} />
          }
          <Content style={{ margin: '0 16px', overflow: 'initial' }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            React-Admin ©2017 Created by 865470087@qq.com
          </Footer>
        </Layout>
          {
              this.state.isMobile && (   // 手机端对滚动很慢的处理
                  <style>
                  {`
                      #root{
                          height: auto;
                      }
                  `}
                  </style>
              )
          }
      </Layout>
		)
	}
}

