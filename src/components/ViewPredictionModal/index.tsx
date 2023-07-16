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

	console.log(data.predictions);



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
			<div className='relative'>
				{data.predictions.map(prediction => (
					<div style={{
						position: 'absolute',
						left: prediction.bbox.x1 / 3.42,
						top: prediction.bbox.y1 / 3.37,
						width: (prediction.bbox.x2 - prediction.bbox.x1) / 3.42,
						height: (prediction.bbox.y2 - prediction.bbox.y1) / 3.37,
						backgroundColor: '#0011FF25',
						border: '1px solid darkblue',
						color: 'darkblue',
						textAlign: 'right',
						verticalAlign: 'end'
					}}>
						<span className='absolute bottom-0 right-0'>{prediction.label} ({Math.round(parseFloat(prediction.score) * 100)}%)</span>
					</div>
				))}
				<img src={data.base64} alt={data.title} />
			</div>
		</Modal>
	);
};

export default ViewPredictionModal;
