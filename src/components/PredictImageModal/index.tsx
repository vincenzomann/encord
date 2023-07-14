import React from 'react';
import { Form, Input, Modal, theme } from 'antd';

interface Values {
	title: string;
	description: string;
}

interface PredictImageModalProps {
	open: boolean;
	onCreate: (values: Values) => void;
	onCancel: () => void;
}

const { useToken } = theme;

const PredictImageModal: React.FC<PredictImageModalProps> = ({
	open,
	onCreate,
	onCancel,
}) => {
	const [form] = Form.useForm();
	const { token } = useToken();
	return (
		<Modal
			open={open}
			title="Predict image"
			okText="Submit"
			okButtonProps={{ style: { 'backgroundColor': token.colorPrimary } }}
			cancelText="Cancel"
			onCancel={() => {
				form.resetFields();
				onCancel();
			}}
			onOk={() => {
				form
					.validateFields()
					.then((values) => {
						form.resetFields();
						onCreate(values);
					})
					.catch((info) => {
						console.log('Validate Failed:', info);
					});
			}}
		>
			<Form
				form={form}
				layout="vertical"
				name="form_in_modal"
			>
				<Form.Item
					name="title"
					label="Title"
					rules={[{ required: true, message: 'Please input the title' }]}
				>
					<Input />
				</Form.Item>
				<Form.Item name="description" label="Description">
					<Input type="textarea" />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default PredictImageModal;
