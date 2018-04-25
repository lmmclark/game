import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class ShowAll extends React.Component {

  render() {
    return (
      <div id="showAll">
        <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>系统管理</Breadcrumb.Item>
            <Breadcrumb.Item>数据统计</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
          数据统计
        </div>
      </div>
    );
  }
}


export default ShowAll;
