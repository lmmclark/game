/**
 * 登录
 */
import '../Login/Login.css';
import React from 'react'
import { Form, Icon, Input, Button} from 'antd';
const FormItem = Form.Item;
class LoginForm extends React.Component {

	constructor(){
		super()
		this.state = {
			loginTip : ''
		}
	}
	//注意，定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。
	handleSubmit(e){
      this.props.history.push('/main/classEntry');//react-router 4.0 写法
 	}

	render(){
    const { getFieldDecorator } = this.props.form;
		return(
			<div className="login">
				<div className="login-content-wrap">
					<div className="login-content">
						{/* <img className="logo" src="/sxt_exam/lqw/images/logo.jpg"/> */}
						<img className="logo" alt="登录" src={require("../assets/images/logo.jpg")}/>
						<div className="login-from">
							<div className="login-tip">{this.state.loginTip}</div>
							<Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
						        <FormItem>
                            {
                              getFieldDecorator('userName', {rules: [{ required: true, message: '请输入用户名！' }]})
                              (<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />)
                            }
						        </FormItem>
						        <FormItem>
                            {
                              getFieldDecorator('password', {rules: [{ required: true, message: '请输入密码！' }]})
                              (<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />)
                            }
						        </FormItem>
						        <FormItem>
							          <Button type="primary" htmlType="submit" className="login-form-button">
							          	登录
							          </Button>
						        </FormItem>
					      	</Form>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
//export default Login;



const Login = Form.create()(LoginForm);

export default Login;
