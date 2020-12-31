import React from "react";
import { Link } from "react-router-dom";
// 资源文件一般放在public文件夹中
import menuList from "../../resource/menuConfig";
import { Menu, Switch, Divider } from 'antd';
import { AppstoreOutlined } from "@ant-design/icons";
import "./NavLeft.css";
const { SubMenu } = Menu; //子目录


export default class NavLeft extends React.Component {
  state = {};
  componentDidMount() {
    const menuTreeNode = this.renderMenu(menuList);
    this.setState({
      menuTreeNode,
    });
  }
  renderMenu = (menuList) => {
    return menuList.map((item) => {
      if (item.children) {
        return (
          <SubMenu
            key={item.key}
            icon={<AppstoreOutlined />}
            title={item.title}
            mode="vertical"
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        );
	  }
	  
      return (
        <Menu.Item key={item.key}>
          <Link to={item.key}>{item.title}</Link>
        </Menu.Item>
      );
    });
  };
  render() {
	
    return (
      <div className="logo">
        <Menu theme="light">
          {this.state.menuTreeNode}
        </Menu>
      </div>
    );
  }
}
