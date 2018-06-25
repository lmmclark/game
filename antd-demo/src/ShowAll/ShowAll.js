import React, { Component } from 'react';
import { Breadcrumb , Table , Icon} from 'antd';
import '../ShowAll/ShowAll.css';

class ShowAll extends React.Component {
  addStudent(record){
    this.props.history.push('/main/studentEntry?id='+record.key);
  }
  render() {
    const columns = [{
      title: '班级',
      dataIndex: 'class',
      key: 'class',
      render: text => <a href="#">{text}</a>,
    }, {
      title: '人数',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '班主任',
      dataIndex: 'teacherName',
      key: 'teacherName',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="#">查看班级人员</a>
          <span className="ant-divider" />
          <a  onClick={() => this.addStudent(record)}>增加班级人员</a>
          <span className="ant-divider" />
          <a href="#" className="ant-dropdown-link">
          编辑班级信息
          </a>
        </span>
      ),
    }];

    const data = [{
      key: '1',
      class: '六年级（一）班',
      age: 32,
      teacherName: '赵亚龙',
    }, {
      key: '2',
      class: '六年级（二）班',
      age: 42,
      teacherName: '黄泽燕',
    }, {
      key: '3',
      class: '六年级（三）班',
      age: 32,
      teacherName: '李华硕',
    }];
    return (
      <div id="showAll">
        <Breadcrumb style={{ margin: '12px 0' }}>
            <Breadcrumb.Item>系统管理</Breadcrumb.Item>
            <Breadcrumb.Item>数据统计</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ padding: 24, background: '#fff', minHeight: 780 }}>
          <div className="title">
              <div className="colorHead"></div>
              <div className = "headTitle">
                  <span>数据统计</span>
              </div>
          </div>
          <div className="tableWrap">
            <Table columns={columns} dataSource={data} />
          </div>
        </div>
      </div>
    );
  }
}


export default ShowAll;
