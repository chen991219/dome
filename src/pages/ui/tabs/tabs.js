import React from "react";
import { Table, Tag, Space } from "antd";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    degree: ["50", "61"],
    country: ["中国", "美国"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
    degree: ["88", "30", "44"],
    country: ["俄罗斯", "日本", "韩国"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    degree: ["55", "66"],
    country: ["巴基斯坦", "非洲众国"],
  },
];

const columns = [
  {
    title: "名字",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "数字",
    key: "degree",
    dataIndex: "degree",
    render: (degree) => (
      <>
        {degree.map((item) => {
          let color = item > 50 ? "geekblue" : "green";
          if (item < 49) {
            color = "volcano";
          }
          return (
            <Tag color={color} key={item}>
              {item.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "国家",
    key: "country",
    dataIndex: "country",
    render: (country) => (
      <>
        {country.map((item) => {
          let color = item.length > 2 ? "geekblue" : "green";
          if (item === "中国") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={item}>
              {item.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];
export default class tabs extends React.Component {
  render() {
    return (
      <div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
