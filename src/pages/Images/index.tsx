import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import img from '../../assets/img_1.jpg';
import PredictImageModal from '../../components/PredictImageModal';

interface Props extends RouteComponentProps { }

interface DataType {
	id: string;
	filename: string;
	fileSize: number;
	uploadTime: string;
	src: string;
}

const data: DataType[] = [
	{
		id: '1',
		filename: img,
		fileSize: 32,
		uploadTime: new Date().toUTCString(),
		src: img
	},
	{
		id: '2',
		filename: img,
		fileSize: 42,
		uploadTime: new Date().toUTCString(),
		src: img
	},
	{
		id: '3',
		filename: img,
		fileSize: 32,
		uploadTime: new Date().toUTCString(),
		src: img
	},
];

const Images: React.FC<Props> = () => {
	const [openModal, setOpenModal] = useState(false);

	const columns: ColumnsType<DataType> = [
		{
			title: 'Image',
			dataIndex: 'src',
			key: 'src',
			render: (src) => <img alt={src} src={src} className='w-24' onClick={() => handleModal()} />
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
					<Button onClick={() => handleModal()}>Predict</Button>
				</Space >
			),
		},
	];

	const handleModal = () => {
		setOpenModal(true);
	};

	const onCreate = (values: any) => {
		console.log('Received values of form: ', values);
		setOpenModal(false);
	};

	return (
		<>
			<Table columns={columns} dataSource={data} />
			<PredictImageModal
				open={openModal}
				onCreate={onCreate}
				onCancel={() => {
					setOpenModal(false);
				}}
			/>
		</>
	);
};

export default Images;
