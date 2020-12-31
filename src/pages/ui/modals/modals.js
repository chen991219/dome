import React from "react";
import { Modal, Button, Space } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';




export default class Buttons extends React.Component {
  render() {
    const { confirm } = Modal;
    return (
      <Space>
      <Button onClick={showConfirm}>删除</Button>
      <Button onClick={showPromiseConfirm}>承诺</Button>
      <Button onClick={showDeleteConfirm} type="dashed">
      删除
      </Button>
      <Button onClick={showPropsConfirm} type="dashed">
      有额外的道具
      </Button>
    </Space>
    );
    function showConfirm() {
      confirm({
        title: '是否要删除这些项目?',
        icon: <ExclamationCircleOutlined />,
        content: 'Some descriptions',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
    
    function showPromiseConfirm() {
      confirm({
        title: '是否要删除这些项目?',
        icon: <ExclamationCircleOutlined />,
        content: '单击“确定”按钮时，此对话框将在1秒后关闭',
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => console.log('Oops errors!'));
        },
        onCancel() {},
      });
    }
    
    function showDeleteConfirm() {
      confirm({
        title: '确定要删除此任务吗?',
        icon: <ExclamationCircleOutlined />,
        content: '一些描述',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
    
    function showPropsConfirm() {
      confirm({
        title: 'Are you sure delete this task?',
        icon: <ExclamationCircleOutlined />,
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        okButtonProps: {
          disabled: true,
        },
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    }
  }
}
