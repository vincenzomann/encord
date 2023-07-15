import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Button, Space, Table, message } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import PredictImageModal from '../../components/PredictImageModal';
import { Image, Prediction } from '../../types';
import { data as mockImages } from '../../mock/images';
import { useContextProvider } from '../../context/Context';
import UploadImage from '../../components/UploadImage';

interface Props extends RouteComponentProps { }

const Images: React.FC<Props> = () => {
	const [openPredictModal, setOpenPredictModal] = useState(false);
	const [predictImage, setPredictImage] = useState<Image | null>();

	const { predictions, setPredictions, images } = useContextProvider();

	const columns: ColumnsType<Image> = [
		{
			title: 'Image',
			dataIndex: 'base64',
			key: 'base64',
			render: (base64) => <img src={base64} alt='img' className='w-24' />
		},
		{
			title: 'Filename',
			dataIndex: 'filename',
			key: 'filename'
		},
		{
			title: 'Size (bytes)',
			dataIndex: 'fileSize',
			key: 'fileSize',
		},
		{
			title: 'Time of upload',
			dataIndex: 'uploadTime',
			key: 'uploadTime',
		},
		{
			title: '',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<Button onClick={() => handlePredictModal(record)}>Predict</Button>
				</Space >
			),
		},
	];

	const handlePredictModal = (record: Image) => {
		setPredictImage(record);
		console.log('record', record);
		setOpenPredictModal(true);
	};

	const onPredict = async (values: any) => {
		try {
			const res = await fetch('http://localhost:3001/predict').then(res => res.json()).then(data => data);
			if (res && 'predictions' in res && predictImage) {
				console.log(res);
				const result: Prediction = {
					key: `${predictions.length}`,
					imageKey: predictImage.key,
					title: values.title,
					description: values.description || '',
					predictions: res.predictions,
					timestamp: new Date().toUTCString(),
					base64: predictImage.base64
				};
				console.log('pred', result);
				setPredictions((prev: Prediction[]) => [...prev, result]);
				setPredictImage(null);
				message.success(`Prediction made. Please go to predictions tab.`);
			}
		} catch (error) {
			message.error(`Unable to make prediction.`);
			console.log(error);
		}
		setOpenPredictModal(false);
	};

	return (
		<>
			<UploadImage />
			<Table columns={columns} dataSource={[...mockImages, ...images]} />
			<PredictImageModal
				open={openPredictModal}
				onSubmit={onPredict}
				onCancel={() => {
					setOpenPredictModal(false);
				}}
			/>
		</>
	);
};

export default Images;
