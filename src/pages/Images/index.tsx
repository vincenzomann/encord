import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Button, Space, Table, Upload } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import PredictImageModal from '../../components/PredictImageModal';
import { Image, Prediction } from '../../types';
import { data as mockImages } from '../../mock/images';
import PrimaryButton from '../../components/PrimaryButton';
import UploadImageModal from '../../components/UploadImageModal';
import { useContextProvider } from '../../context/Context';
import UploadImage from '../../components/UploadImage';
import { UploadOutlined } from '@ant-design/icons';

interface Props extends RouteComponentProps { }

const Images: React.FC<Props> = () => {
	const [openUploadModal, setOpenUploadModal] = useState(false);
	const [openPredictModal, setOpenPredictModal] = useState(false);

	const { predictions, setPredictions, images } = useContextProvider();

	const columns: ColumnsType<Image> = [
		{
			title: 'Image',
			dataIndex: 'base64',
			key: 'base64',
			render: (src) => <img src={src} className='w-24' onClick={() => handlePredictModal()} />
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
					<Button onClick={() => handlePredictModal()}>Predict</Button>
				</Space >
			),
		},
	];

	const handleUploadModal = () => {
		setOpenUploadModal(true);
	};

	const onUpload = (values: any) => {
		setOpenUploadModal(false);
	};

	const handlePredictModal = () => {
		setOpenPredictModal(true);
	};

	const onPredict = async (values: any) => {
		try {
			const res = await fetch('http://localhost:3001/predict').then(res => res.json()).then(data => data);
			if (res && 'predictions' in res) {
				const result: Prediction = {
					key: `${predictions.length}`,
					title: values.title,
					description: values.description || '',
					predictions: res.predictions,
					timestamp: new Date().toUTCString(),
					base64: mockImages[0].base64
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
			<UploadImage />
			<Table columns={columns} dataSource={[...mockImages, ...images]} />
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
