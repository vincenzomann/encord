import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import img from '../../assets/img_1.jpg';
import ViewPredictionModal from '../../components/ViewPredictionModal';

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

const Predictions: React.FC<Props> = () => {
	const [openModal, setOpenModal] = useState(false);
	const [image, setImage] = useState();

	const columns: ColumnsType<DataType> = [
		{
			title: 'Image',
			dataIndex: 'src',
			key: 'src',
			render: (src) => <img alt={src} src={src} className='w-24' onClick={() => handleModal(src)} />
		},
		{
			title: 'Title',
			dataIndex: 'title',
			key: 'title'
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
		},
		{
			title: 'Timestamp',
			dataIndex: 'timestamp',
			key: 'timestamp',
		},
		{
			title: '',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<Button onClick={() => handleModal(record.src)}>View</Button>
				</Space >
			),
		},
	];

	const handleModal = (image: any) => {
		setImage(image);
		setOpenModal(true);
	};

	return (
		<>
			<Table columns={columns} dataSource={data} />
			<ViewPredictionModal
				open={openModal}
				onCancel={() => {
					setOpenModal(false);
				}}
				data={image}
			/>
		</>
	);
};

export default Predictions;
