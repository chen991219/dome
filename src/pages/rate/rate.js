
import React from "react";
import { Rate} from "antd";
import { HeartOutlined } from "@ant-design/icons";

export default class rate extends React.Component {
  render() {
    return (
      <div>
        <Rate character={<HeartOutlined />} allowHalf />
        <br />
        <Rate character="S" allowHalf style={{ fontSize: 48 }} />
        <br />
        <Rate character="react真快乐" allowHalf style={{ fontSize: 48 }}/>
      </div>
    );
  }
}
