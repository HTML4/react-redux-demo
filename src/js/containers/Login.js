import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;
class Login extends React.Component {
  

  constructor(props) {
    super(props);
  }
  componentDidMount(){
    document.getElementById('loadingRoot').setAttribute('class', 'loadingRoot fullScreen hidden')
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" >
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入你的用户名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入你的密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住我</Checkbox>
          )}
          <a className="login-form-forgot f-fr">忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            提交
          </Button>
          或 <a>现在去注册!</a>
        </FormItem>
      </Form>
    );
  }
}

const LoginForm = Form.create()(Login);

export default LoginForm