import React, { Component } from 'react';
import {  Menu, Icon } from 'antd';
import { Link } from 'react-router';
const SubMenu = Menu.SubMenu;
const menuTree = [{
    id:"/",
    name: "首页",
    icon: "scan",
    link: "/"
  }, {
  id: "/app",
  name: "实例",
  icon: "scan",
  children: [{
    id:"/app/demo",
    name: "demo",
    link: "/app/demo"
  }, {
    id: "ui",
    name: "ui",
    link: "/app/m"
  }, {
    id: "ll",
    name:"kk"
  }]
}, {
  id:"name",
  name: "没有",
  icon: "rocket",
  children: [{
    id: "l",
    name: "1"
  }]
}]
export default class SiderCustom extends Component{
	constructor(props) {
		super(props)
		this.state = {
			collapsed: false,
      mode: 'inline',
      openKey: '',
      selectedKey: '',
      firstHide: true,
		}
	}
	componentDidMount() {
    this.setMenuOpen(this.props);
  }
  componentWillReceiveProps(nextProps) {
    this.onCollapse(nextProps.collapsed);
    this.setMenuOpen(nextProps)
  }
  setMenuOpen = props => {

    const {path} = props;
    this.setState({
      openKey: path.substr(0, path.lastIndexOf('/')),
      selectedKey: path
    });
  };
  onCollapse = (collapsed) => {

    this.setState({
      collapsed,
      firstHide: collapsed,
      mode: collapsed ? 'vertical' : 'inline',
    });
  };
  menuClick = e => {
    this.setState({
      selectedKey: e.key
    });
    const { popoverHide } = this.props;     // 响应式布局控制小屏幕点击菜单时隐藏菜单操作
    popoverHide && popoverHide();
  };
  openMenu = v => {
    this.setState({
      openKey: v[v.length - 1],
      firstHide: false,
    })
  };
  // 递归生成菜单
  getMenus = (menuTreeN,siderFoldN) => {
    
    return menuTreeN.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu
            key={item.id}
            title={<span>
              {item.icon && <Icon type={item.icon} />}
              {(!siderFoldN || !menuTree.includes(item)) && item.name}
            </span>}
          >
            {this.getMenus(item.children, siderFoldN)}
          </Menu.SubMenu>
        )
      }
      return (
        <Menu.Item key={item.id}>
          <Link to={item.link || '#'}>
            {item.icon && <Icon type={item.icon} />}
            {(!siderFoldN || !menuTree.includes(item)) && item.name}
          </Link>
        </Menu.Item>
      )
    })
  }

  render(){
    const {collapsed} = this.props
  	return (

        <Menu
          onClick={this.menuClick}
          theme="dark"
          mode={this.props.collapsed ? 'vertical' : 'inline'}
          selectedKeys={[this.state.selectedKey]}
          openKeys={this.state.firstHide ? null : [this.state.openKey]}
          onOpenChange={this.openMenu}
      	>
          {this.getMenus(menuTree, collapsed)} 
        </Menu>
        
  	)
  }
}