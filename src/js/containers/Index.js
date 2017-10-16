import React from 'react'
import { connect } from 'react-redux';
import {fetchItems, showLoad, hideLoad} from 'src/js/actions/demoAction'
import {Link} from 'react-router'
import BreadcrumbCustom from 'src/js/components/common/BreadcrumbCustom'
import Page from 'src/js/components/common/Page'
import _ from 'lodash'
import { Card, Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, Tabs, DatePicker  } from 'antd';
const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
const residences = [{
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [{
            value: 'xihu',
            label: 'West Lake',
        }],
    }],
}, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
        value: 'nanjing',
        label: 'Nanjing',
        children: [{
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
        }],
    }],
}];
class Index extends React.Component {
    componentDidMount() {
        this.props.form.setFieldsValue({
            email: "mmm"
        })
    }
    state = {
        confirmDirty: false,
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
    checkPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };
    checkConfirm = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };
    componentWillUpdate(nextprops){
      if (nextprops.location.pathname!==this.props.location.pathname) {
        this.props.showLoad()
      }
    }
    componentDidUpdate(nextprops){
      if(this.props.isLoad === true) {
        this.props.hideLoad()
      }
    }
    render() {
      console.log("isLoad", _.get(this.props, "isLoad1", "lll"))
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 14 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 14,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select className="icp-selector" style={{width: '60px'}}>
                <Option value="86">+86</Option>
            </Select>
        );
        return (
        <Page className="gutter-example">
        <BreadcrumbCustom items={[{
          name: "首页",
          icon: "user",
          link:"/app/demo"
        }]}/>

        <Row gutter={14}>
          <Col className="gutter-row" xs={17}>
            <Card>
              <Row>
                <Col xs={8}>
                  <img className="f-fl" style={{width:60, height:60, borderRadius:"50%"}} src="/images/b1.553c69e9.jpg" alt=""/>
                  <div className="f-oh" style={{padding:"0 10px"}}>
                    <p>用户名</p>
                    <h3>用户X</h3>
                  </div>
                </Col>
                <Col xs={8}>
                  <p>公司名</p>
                  <h3>XX公司</h3>
                </Col>
                <Col xs={8}>
                  <p>登入名</p>
                  <h3>123456</h3>
                </Col>
              </Row>
            </Card>
            <Row gutter={14} style={{marginTop: 10}}>
              <Col xs={8}>
                <Card title="融资额度" extra={<span style={{padding:"4px", backgroundColor:"#0eadb3", color:"#fff", borderRadius:"4px"}}>合计</span>} bordered={false}>
                  <div className="f-tac" style={{height: 100, lineHeight: "100px", fontWeight:"bold", fontSize:20}}>0.00</div>
                </Card>
              </Col>
              <Col xs={8}>
                <Card title="销售总额" extra={<span style={{padding:"4px", backgroundColor:"#0eadb3", color:"#fff", borderRadius:"4px"}}>当前</span>} bordered={false}>
                  <div className="f-tac" style={{height: 100, lineHeight: "100px", fontWeight:"bold", fontSize:20}}>0.00</div>
                </Card>
              </Col>
              <Col xs={8}>
                <Card title="采购总额" extra={<span style={{padding:"4px", backgroundColor:"#0eadb3", color:"#fff", borderRadius:"4px"}}>当前</span>} bordered={false}>
                  <div className="f-tac" style={{height: 100, lineHeight: "100px", fontWeight:"bold", fontSize:20}}>0.00</div>
                </Card>
              </Col>
            </Row>
          </Col>
          <Col className="gutter-row" xs={7} style={{height: "315px"}}>
            <Card  title="运营公告" extra={<a href="#">More</a>} bordered={false} style={{height:"100%"}} bodyStyle={{padding:"10px 24px", height:"100%"}}>
              <ul>
                <li style={{padding: "5px 0", fontSize: 14}} className="f-toe">普华永道报告：中国登顶2030年最强经济体排</li>
                <li style={{padding: "5px 0", fontSize: 14}} className="f-toe">普华永道报告：中国登顶2030年最强经济体排</li>
                <li style={{padding: "5px 0", fontSize: 14}} className="f-toe">普华永道报告：中国登顶2030年最强经济体排</li>
                <li style={{padding: "5px 0", fontSize: 14}} className="f-toe">普华永道报告：中国登顶2030年最强经济体排</li>
              </ul>
            </Card>
          </Col>
        </Row>

        <Row gutter={14} style={{marginTop:20}}>
          <Col xs={17}>
            <Card bodyStyle={{padding:0}}>
              <Tabs tabBarStyle={{height:48}}>
                <TabPane tab="待我销售" key="1" style={{height: 100}}>
                1
                </TabPane>
                <TabPane tab="待我采购" key="2" style={{height: 100}}>
                2
                </TabPane>
              </Tabs>
            </Card>
          </Col>
          <Col xs={7}>
            <Card  title="运营公告" extra={<a href="#">More</a>} bordered={false} style={{height:"100%"}} bodyStyle={{padding:"10px 24px", height:"100%"}}>
              <ul>
                <li style={{padding: "5px 0", fontSize: 14}} className="f-toe">普华永道报告：中国登顶2030年最强经济体排</li>
                <li style={{padding: "5px 0", fontSize: 14}} className="f-toe">普华永道报告：中国登顶2030年最强经济体排</li>
                <li style={{padding: "5px 0", fontSize: 14}} className="f-toe">普华永道报告：中国登顶2030年最强经济体排</li>
                <li style={{padding: "5px 0", fontSize: 14}} className="f-toe">普华永道报告：中国登顶2030年最强经济体排</li>
              </ul>
            </Card>
          </Col>
        </Row>


            {this.props.children}
            <Link to="/app/demo">跳转</Link>
            
            <Row gutter={16}>
                <Col className="gutter-row" md={12}>
                    <div className="gutter-box">
                        <Card title="注册表单" bordered={false}>
                            <Form  onSubmit={this.handleSubmit}>
                                <FormItem
                                    {...formItemLayout}
                                    label="日期"
                                    hasFeedback
                                >
                                    {getFieldDecorator('riqi')(
                                        <DatePicker style={{width:"100%"}}  />
                                    )}
                                </FormItem>
                               
                                <FormItem
                                    {...formItemLayout}
                                    label="邮箱"
                                    hasFeedback
                                >
                                    {getFieldDecorator('email', {
                                        rules: [{
                                            type: 'email', message: '请输入合理的邮箱地址!',
                                        }, {
                                            required: true, message: '请输入邮箱地址!',
                                        }],
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="密码"
                                    hasFeedback
                                >
                                    {getFieldDecorator('password', {
                                        rules: [{
                                            required: true, message: '请输入密码!',
                                        }, {
                                            validator: this.checkConfirm,
                                        }],
                                    })(
                                        <Input type="password" />
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="确认密码"
                                    hasFeedback
                                >
                                    {getFieldDecorator('confirm', {
                                        rules: [{
                                            required: true, message: '请确认你的密码!',
                                        }, {
                                            validator: this.checkPassword,
                                        }],
                                    })(
                                        <Input type="password" onBlur={this.handleConfirmBlur} />
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label={(
                                        <span>
                                            昵称&nbsp;
                                            <Tooltip title="别人怎么称呼你?">
                                            <Icon type="question-circle-o" />
                                          </Tooltip>
                                        </span>
                                    )}
                                    hasFeedback
                                >
                                    {getFieldDecorator('nickname', {
                                        rules: [{ required: true, message: '请输入昵称!', whitespace: true }],
                                    })(
                                        <Input />
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="常住地址"
                                >
                                    {getFieldDecorator('residence', {
                                        initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                                        rules: [{ type: 'array', required: true, message: '请选择你的常住地址!' }],
                                    })(
                                        <Cascader options={residences} />
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="电话号码"
                                >
                                    {getFieldDecorator('phone', {
                                        rules: [{ required: true, message: '请输入你的电话号码!' }],
                                    })(
                                        <Input addonBefore={prefixSelector} />
                                    )}
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="验证码"
                                    extra="我们必须确认你不是机器人."
                                >
                                    <Row gutter={8}>
                                        <Col span={12}>
                                            {getFieldDecorator('captcha', {
                                                rules: [{ required: true, message: '请输入你获取的验证码!' }],
                                            })(
                                                <Input size="large" />
                                            )}
                                        </Col>
                                        <Col span={12}>
                                            <Button size="large">获取验证码</Button>
                                        </Col>
                                    </Row>
                                </FormItem>
                                <FormItem {...tailFormItemLayout} style={{ marginBottom: 8 }}>
                                    {getFieldDecorator('agreement', {
                                        valuePropName: 'checked',
                                    })(
                                        <Checkbox>我已经阅读过 <a href="">协议</a></Checkbox>
                                    )}
                                </FormItem>
                                <FormItem {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit" size="large">注册</Button>
                                </FormItem>
                            </Form>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" md={12}>
                    <div className="gutter-box">
                        <Card title="登录表单" bordered={false}>
                        </Card>
                    </div>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col className="gutter-row" md={14}>
                    <div className="gutter-box">
                        <Card title="水平表单" bordered={false}>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" md={10}>
                    <div className="gutter-box">
                        <Card title="弹层表单" bordered={false}>
                        </Card>
                    </div>
                </Col>
            </Row>
        </Page>
        )
    }
}

const mapStateToPorps = state => {
  console.log("state..",state)
    const {data} = state.getItems
    return state.getItems;
};
const mapDispatchToProps = dispatch => ({
    getItems: () => dispatch(fetchItems()),
    showLoad:() => dispatch(showLoad()),
    hideLoad:() => dispatch(hideLoad())
});

const Indexs = Form.create()(Index);

export default connect(mapStateToPorps, mapDispatchToProps)(Indexs);
