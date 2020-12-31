import React from "react";
import { Spin, Space, Card, Switch, Alert } from "antd";

export default class loading extends React.Component {
        state = { loading: false };
        toggle = value => {
          this.setState({ loading: value });
        };
  render() {
    return (
      <div>
        <Card>
          <Space size="middle">
            <Spin size="small" />
            <Spin />
            <Spin size="large" />
          </Space>
        </Card>
        <Card>
        <Spin spinning={this.state.loading}>
          <Alert
            message="这是自定义标题"
            description=".这是自定义标题"
            type="info"
          />
        </Spin>
        <div style={{ marginTop: 16 }}>
          Loading state：
          <Switch checked={this.state.loading} onChange={this.toggle} />
        </div>
        </Card>
        <Card>
            <Spin/>
        </Card>
      </div>
    );
  }
}
