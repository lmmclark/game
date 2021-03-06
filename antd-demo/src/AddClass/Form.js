import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

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

class RegistrationForm extends React.Component {
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
  }
  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }
  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }
  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 },
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
          offset: 6,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select className="icp-selector">
        <Option value="86">+86</Option>
      </Select>
    );
    return (
      <Form onSubmit={this.handleSubmit}>
      <Col span={8}>
          <FormItem
            {...formItemLayout}
            label="班级"
            hasFeedback
          >
            {getFieldDecorator('email', {
              rules: [ {
                required: true, message: '请输入年级！',
              }],
            })(
              <Input />
            )}
          </FormItem>
        </Col>
        <Col span={8}>
          <FormItem
            {...formItemLayout}
            label="管理密码"
            hasFeedback
          >
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: '请输入管理密码！',
              }, {
                validator: this.checkConfirm,
              }],
            })(
              <Input type="password" />
            )}
          </FormItem>
        </Col>
        <Col span={8}>
        <FormItem
          {...formItemLayout}
          label="确认密码"
          hasFeedback
        >
          {getFieldDecorator('confirm', {
            rules: [{
              required: true, message: '请确认密码！',
            }, {
              validator: this.checkPassword,
            }],
          })(
            <Input type="password" onBlur={this.handleConfirmBlur} />
          )}
        </FormItem>
        </Col>
        <Col span={8}>
        <FormItem
          {...formItemLayout}
          label={(
            <span>
              班级口号
            </span>
          )}
          hasFeedback
        >
          {getFieldDecorator('nickname', {
            rules: [{ required: true, message: '请输入班级口号！' }],
          })(
            <Input />
          )}
        </FormItem>
        </Col>
        <Col span={8}>
        <FormItem
          {...formItemLayout}
          label="班级所在区域"
        >
          {getFieldDecorator('residence', {
            initialValue: ['zhejiang', 'hangzhou', 'xihu'],
            rules: [{ type: 'array', required: true, message: '请输入班级所在区域！' }],
          })(
            <Cascader options={residences} />
          )}
        </FormItem>
        </Col>
        <Col span={8}>
        <FormItem
          {...formItemLayout}
          label="班主任手机"
        >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: '请输入班主任手机号' }],
          })(
            <Input addonBefore={prefixSelector} />
          )}
        </FormItem>
        </Col>
        <Col span={8}></Col>
        <Col span={8}>
        <FormItem {...tailFormItemLayout} style={{margin:'30px 0 0 120px'}}>
          <Button type="primary" htmlType="submit" size="large">录入</Button>
        </FormItem>
        </Col>
      </Form>
    );
  }
}  

const WrappedRegistrationForm = Form.create()(RegistrationForm);
export default WrappedRegistrationForm
