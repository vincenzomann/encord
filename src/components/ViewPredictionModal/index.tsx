import React from 'react';
import { Modal } from 'antd';
import { Prediction } from '../../types';

interface ViewPredictionModalProps {
	open: boolean;
	onCancel: () => void;
	data: Prediction;
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
			title={data.title}
		>
			<div>
				<img src={data.src} alt={data.title} />
			</div>
		</Modal>
	);
};

export default ViewPredictionModal;
