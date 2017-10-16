import React, { Component } from 'react';
import { Menu, Icon, Layout, Badge, Popover } from 'antd';
import SiderCustom from './SiderCustom';
import { connect } from 'react-redux';
const { Header } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class HeaderCustom extends Component {
	constructor(props) {
		super(props)
		this.state = {
      user: '',
      visible: false,
    }
	}
	componentDidMount() {
    const _user = '测试';
    this.setState({
        user: _user
    });
  };

  menuClick = e => {
      console.log(e);
      e.key === 'logout' && this.logout();
  };
  logout = () => {
      localStorage.removeItem('user');
      this.props.router.push('/login')
  };
  popoverHide = () => {
      this.setState({
          visible: false,
      });
  };
  handleVisibleChange = (visible) => {
      this.setState({ visible });
  };

  render() {
    const { isMobile, path } = this.props;
    return (
      <div style={{ background: '#fff', padding: 0, height: 65 }}>
        {
          isMobile ? (
            <Popover content={<SiderCustom path={path} popoverHide={this.popoverHide} />} trigger="click" placement="bottomLeft" visible={this.state.visible} onVisibleChange={this.handleVisibleChange}>
                <Icon type="bars" className="trigger custom-trigger" />
            </Popover>
          ) : (
            <Icon
                className="trigger custom-trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.props.toggle}
            />
          )
      	}
      <Menu
        mode="horizontal"
        style={{ lineHeight: '64px', float: 'right',border:0 }}
        onClick={this.menuClick}
      >

        <Menu.Item key="1">
            <Badge count={25} overflowCount={10} style={{marginLeft: 10}}>
                <Icon type="notification" />
            </Badge>
        </Menu.Item>
        <SubMenu title={<span className="avatar" style={{verticalAlign: "middle"}}><img src="/images/b1.553c69e9.jpg" alt="头像" /><i className="on bottom b-white" /></span>}>
            <MenuItemGroup title="用户中心">
                <Menu.Item key="setting:1">你好 - {this.props.user && this.props.user.userName}</Menu.Item>
                <Menu.Item key="setting:2">个人信息</Menu.Item>
                <Menu.Item key="logout"><span onClick={this.logout}>退出登录</span></Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup title="设置中心">
                <Menu.Item key="setting:3">个人设置</Menu.Item>
                <Menu.Item key="setting:4">系统设置</Menu.Item>
            </MenuItemGroup>
        </SubMenu>
      </Menu>
      <style>{`
        .ant-menu-submenu-horizontal > .ant-menu {
            width: 120px;
            left: -40px;
        }
      `}</style>
      </div>
    )
  }

}