import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import PredictImageModal from '../../components/PredictImageModal';
import { Image, Prediction } from '../../types';
import { data as mockImages } from '../../mock/images';
import PrimaryButton from '../../components/PrimaryButton';
import UploadImageModal from '../../components/UploadImageModal';
import { useContextProvider } from '../../context/Context';

interface Props extends RouteComponentProps { }

const Images: React.FC<Props> = () => {
	const [openUploadModal, setOpenUploadModal] = useState(false);
	const [openPredictModal, setOpenPredictModal] = useState(false);

	const { predictions, setPredictions } = useContextProvider();

	const columns: ColumnsType<Image> = [
		{
			title: 'Image',
			dataIndex: 'src',
			key: 'src',
			render: (src) => <img alt={src} src={src} className='w-24' onClick={() => handlePredictModal()} />
		},
		{
			title: 'Filename',
			dataIndex: 'filename',
			key: 'filename'
		},
		{
			title: 'Size (mb)',
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
					<Button onClick={() => handlePredictModal()}>Predict</Button>
				</Space >
			),
		},
	];

	const handleUploadModal = () => {
		setOpenUploadModal(true);
	};

	const onUpload = (values: any) => {
		console.log('Received values of form: ', values);
		setOpenUploadModal(false);
	};

	const handlePredictModal = () => {
		setOpenPredictModal(true);
	};

	const onPredict = async (values: any) => {
		console.log('Received values of form: ', values);
		try {
			const res = await fetch('http://localhost:3001/predict').then(res => res.json()).then(data => data);
			if (res && 'predictions' in res) {
				const result: Prediction = {
					id: `${predictions.length}`,
					title: values.title,
					description: values.description || '',
					predictions: res.predictions,
					timestamp: new Date().toUTCString(),
					src: mockImages[0].src
				};
				setPredictions((prev: Prediction[]) => [...prev, result]);
			}
		} catch (error) {
			console.log(error);
		}
		setOpenPredictModal(false);
	};

	return (
		<>
			<PrimaryButton className='mb-4' onClick={handleUploadModal}>Upload image</PrimaryButton>
			<Table columns={columns} dataSource={mockImages} />
			<UploadImageModal
				open={openUploadModal}
				onSubmit={onUpload}
				onCancel={() => {
					setOpenUploadModal(false);
				}}
			/>
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
