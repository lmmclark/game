import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import WrappedRegistrationForm from '../AddClass/Form'
class AddClass extends React.Component {
  render() {

    return (
      <div id="classEntry">
        <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>系统管理</Breadcrumb.Item>
            <Breadcrumb.Item>班级录入</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
          <div className="title">
              <div className="colorHead"></div>
              <div className = "headTitle">
                  <span>班级录入</span>
              </div>
          </div>
            <WrappedRegistrationForm/>
        </div>
      </div>
    );
  }
}


export default AddClass;
