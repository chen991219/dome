import React from 'react'
import { message, Button } from 'antd';


export default class messages  extends React.Component{
    render() {
        return(
            <div>
                <Button onClick={success}>这是自定义的 style</Button>
            </div>
        )
    }
}
const success = () => {
    message.success({
      content: '这是自定义的弹框',
      className: 'custom-class',
      style: {
        marginTop: '2vh',
      },
    });
  };








