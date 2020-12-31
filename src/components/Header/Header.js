import React from "react";
import { Row, Col ,Avatar} from "antd";
import "./Header.css";
import Util from "../../utils/utils";
import { UserOutlined } from '@ant-design/icons';


class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "陈陈陈",
    };
  }
  componentWillMount() {
    setInterval(() => {
      let sysTime = Util.formateDate(new Date());
      this.setState({
        sysTime,
      });
    }, 1000);
  }

  render() {
    let { menuName } = this.props;
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <span>欢迎： <Avatar icon={<UserOutlined />} />{this.state.userName}</span>
            <a href="./">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="6" className="breadcrumb-title">
            {menuName || "首页"}
          </Col>
          <Col span="18" className="weather">
            <span className="date">{this.state.sysTime}</span> &nbsp;
            {/* <span>去用百度天气API来免费获取接口</span> */}
                 <span className="weather-data">
                     天气预报跨域没爬到，天气随心而变
                 </span>   
          </Col>
        </Row>
      </div>
    );
  }
}
export default Header;
