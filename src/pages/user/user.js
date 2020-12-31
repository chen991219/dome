import React from "react";
import {Card,Button, Form, Input, Modal, Table, Select, Radio, DatePicker,} from "antd";
import {PlusOutlined, DeleteOutlined,EditOutlined, GithubOutlined,} from "@ant-design/icons";
import { gets } from "../../resource/axios";
import Searchs from "../../components/Search/Search";
import Axios from "axios";

export default class Users extends React.Component {
  state = {};
  componentDidMount() {
    this.requestList();
  }
  //   ajax获取数据
  requestList = () => {
    gets("/userlist").then((res) => {
      let list = res.data.result.item_list.map(function (item, index) {
        item.key = index;
        return item;
      });
      this.setState({
        list,
      });
    });
  };

  render() {
    let columns = [
      {
        title: "id",
        dataIndex: "id",
      },
      {
        title: "用户名",
        dataIndex: "username",
      },
      {
        title: "性别",
        dataIndex: "sex",
        render(sex) {
          return sex === 1 ? "男" : "女";
        },
      },
      {
        title: "状态",
        dataIndex: "state",
        render(state) {
          let obj = {
            1: "咸鱼一条",
            2: "风华浪子",
            3: "北大才子一枚",
            4: "百度FE",
            5: "创业者",
          };
          return obj[state];
        },
      },
      {
        title: "爱好",
        dataIndex: "interest",
        render(interest) {
          let config = {
            1: "游泳",
            2: "打篮球",
            3: "踢足球",
            4: "跑步",
            5: "爬山",
            6: "骑行",
            7: "桌球",
            8: "麦霸",
          };
          return config[interest];
        },
      },
      {
        title: "婚否",
        dataIndex: "isMarried",
        render(isMarried) {
          return isMarried ? "已婚" : "未婚";
        },
      },
      {
        title: "生日",
        dataIndex: "birthday",
      },
      {
        title: "联系地址",
        dataIndex: "address",
      },
      {
        title: "早起时间",
        dataIndex: "time",
      },
	];
    return (
      <div>
        <Searchs nice="a"> </Searchs> {/* 按钮 */}
        <Card>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => this.handleOperator("create")}
          >
            创建员工{" "}
          </Button>{" "}
          <Button
            icon={<EditOutlined />}
            onClick={() => this.handleOperator("edit")}
          >
            编辑员工{" "}
          </Button>{" "}
          <Button
            icon={<GithubOutlined />}
            onClick={() => this.handleOperator("detail")}
          >
            员工详情{" "}
          </Button>{" "}
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => this.handleOperator("delete")}
          >
            删除员工{" "}
          </Button>{" "}
        </Card>{" "}
        <Card>
          <Table
            bordered
            columns={columns}
          />
        </Card>
		<Modal
					title={this.state.title}
					visible={this.state.isVisible}
					onOk={this.handleSubmit}
					width={800}
					onCancel={() => {
						this.setState({
							isVisible: false,
							userInfo: {},
						})
					}}
				></Modal>
				
      </div>
    );
  }
}
