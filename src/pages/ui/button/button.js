import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./button.css";
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

export default class Buttons extends React.Component {
    state = {
        size: 'large',
      };
  render() {
    const { size } = this.state;
    return (
      <Row>
        <Col span="24">
          <Button type="primary"> Primary Button </Button>{" "}
          <Button> Default Button </Button>{" "}
          <Button type="dashed"> Dashed Button </Button> <br />
          <Button type="text"> Text Button </Button>{" "}
          <Button type="link"> Link Button </Button>{" "}
          <Button type="primary" icon={<DownloadOutlined />} size={size} />{" "}
          <Button
            type="primary"
            shape="circle"
            icon={<DownloadOutlined />}
            size={size}
          />{" "}
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size={size}
          />{" "}
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size={size}
          >
            Download{" "}
          </Button>{" "}
          <Button type="primary" icon={<DownloadOutlined />} size={size}>
            Download{" "}
          </Button>{" "}
        </Col>{" "}
      </Row>
    );
  }
}
