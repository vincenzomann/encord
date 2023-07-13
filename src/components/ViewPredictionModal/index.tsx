import React from 'react';
import { Button, Form, Input, Modal, theme } from 'antd';

interface Values {
	title: string;
	description: string;
}

interface ViewPredictionModalProps {
	open: boolean;
	onCancel: () => void;
	data: any;
}

const ViewPredictionModal: React.FC<ViewPredictionModalProps> = ({
	open,
	onCancel,
	data
}) => {
	return (
		<Modal
			open={open}
			cancelText='Close'
			onCancel={() => {
				onCancel();
			}}
			okButtonProps={{ style: { 'display': 'none' } }}
		>
			<p>Description: </p>
			<img src={data} alt="" />
		</Modal>
	);
};

export default ViewPredictionModal;
