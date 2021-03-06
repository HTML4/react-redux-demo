import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from 'src/js/components/common/Loading'
import SiderCustom from 'src/js/components/common/SiderCustom'
import HeaderCustom from 'src/js/components/common/HeaderCustom'

export default class Root extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			collapsed: false,
			isMobile: false,
      isLoading:true
		}
	}
	componentWillMount() {
    // this.getClientWidth();
    // window.onresize = () => {
    //   console.log('屏幕变化了');
    //   this.getClientWidth();
    // }
  }
  componentDidMount(){
    this.setState({
      isLoading:false
    })
    document.getElementById('loadingRoot').setAttribute('class', 'loadingRoot fullScreen hidden')
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
    const {collapsed} = this.state
    let rootClass = "root"
    if(collapsed) {
      rootClass += " fold"
    }
		return (
      <div className={rootClass}>
        <div className="sider">
          <div className="logo">
            <img src="/images/b1.553c69e9.jpg"/>
            <span>广州先贸</span>
          </div>
          {!this.state.isMobile && <SiderCustom path={this.props.location.pathname} collapsed={this.state.collapsed} />}
        </div>
        <div className="main">
          <HeaderCustom isMobile={this.state.isMobile} toggle={this.toggle} router={this.props.router} path={this.props.location.pathname} />
          {this.props.children}
        </div>
      </div>


			
		)
	}
}

// <Layout className="ant-layout-has-sider">
        
//           {!this.state.isMobile && <SiderCustom path={this.props.location.pathname} collapsed={this.state.collapsed} />}
//         <Layout>
//           {
//             <HeaderCustom isMobile={this.state.isMobile} toggle={this.toggle} router={this.props.router} path={this.props.location.pathname} />
//           }
            
//           <Content style={{ margin: '0 16px', overflow: 'initial' }}>
//             {this.props.children}
//           </Content>
            
          
//           <Footer style={{ textAlign: 'center'}}>
//             React-Admin ©2017 Created by 865470087@qq.com
//           </Footer>
//         </Layout>
//           {
//               this.state.isMobile && (   // 手机端对滚动很慢的处理
//                   <style>
//                   {`
//                       #root{
//                           height: auto;
//                       }
//                   `}
//                   </style>
//               )
//           }
//       </Layout>