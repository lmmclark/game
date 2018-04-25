import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class AddClass extends React.Component {
  render() {

    return (
      <div id="classEntry">
        <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>系统管理</Breadcrumb.Item>
            <Breadcrumb.Item>班级录入</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
            这里方式发大水
        </div>
      </div>
    );
  }
}


export default AddClass;
