import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class AddStudent extends React.Component {

  render() {
    return (
      <div id="studentEntry">
        <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>系统管理</Breadcrumb.Item>
            <Breadcrumb.Item>学生录入</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
          <div className="title">
              <div className="colorHead"></div>
              <div className = "headTitle">
                  <span>学生录入</span>
              </div>
          </div>
        </div>
      </div>
    );
  }
}


export default AddStudent;
