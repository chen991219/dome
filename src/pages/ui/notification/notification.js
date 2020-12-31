import React from "react";
import { Button, notification, Space } from "antd";

export default class notifications extends React.Component {
  render() {
    return (
      <div>
        <Space>
          <Button onClick={() => openNotificationWithIcon("success")}>
            成功
          </Button>
          <Button onClick={() => openNotificationWithIcon("info")}>Info</Button>
          <Button onClick={() => openNotificationWithIcon("warning")}>
            警告
          </Button>
          <Button onClick={() => openNotificationWithIcon("error")}>
            失败
          </Button>
        </Space>
      </div>
    );
  }
}
const openNotificationWithIcon = (type) => {
  notification[type]({
    message: "Notification Title",
    description:
      "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
  });
};
