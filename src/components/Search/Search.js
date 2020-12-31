import React from 'react'
import { Select, Form, Button } from 'antd'
const FormItem = Form.Item
const Option = Select.Option

export default class Searchs extends React.Component {
	render() {
		return (
			<Form layout="inline">
                {this.props.nice == 'a' ? '' :
				<FormItem label="城市">
					<Select style={{ width: 100 }} placeholder="全部">
						<Option value="">全部</Option>
						<Option value="1">北京市</Option>
						<Option value="2">天津市</Option>
						<Option value="3">深圳市</Option>
					</Select>
				</FormItem>}
				<FormItem label="用车模式">
					<Select style={{ width: 120 }} placeholder="全部">
						<Option value="">全部</Option>
						<Option value="1">指定停车点模式</Option>
						<Option value="2">禁停区模式</Option>
					</Select>
				</FormItem>
				<FormItem label="营运模式">
					<Select style={{ width: 80 }} placeholder="全部">
						<Option value="">全部</Option>
						<Option value="1">自营</Option>
						<Option value="2">加盟</Option>
					</Select>
				</FormItem>
				<FormItem label="加盟商授权状态">
					<Select style={{ width: 100 }} placeholder="全部">
						<Option value="">全部</Option>
						<Option value="1">已授权</Option>
						<Option value="2">未授权</Option>
					</Select>
				</FormItem>
				<FormItem>
					<Button type="primary" style={{ margin: '0 20px' }}>
						查询
					</Button>
					<Button>重置</Button>
				</FormItem>
			</Form>
		)
	}
}
