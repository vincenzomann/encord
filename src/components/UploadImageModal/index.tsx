import React from 'react';
import { Form, Input, Modal, theme } from 'antd';

interface Values {
	title: string;
	description: string;
}

interface UploadImageModalProps {
	open: boolean;
	onSubmit: (values: Values) => void;
	onCancel: () => void;
}

const { useToken } = theme;

const UploadImageModal: React.FC<UploadImageModalProps> = ({
	open,
	onSubmit,
	onCancel,
}) => {
	const [form] = Form.useForm();
	const { token } = useToken();
	return (
		<Modal
			open={open}
			title="Upload image"
			okText="Upload"
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
						onSubmit(values);
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

export default UploadImageModal;
