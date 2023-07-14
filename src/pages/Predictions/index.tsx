import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import ViewPredictionModal from '../../components/ViewPredictionModal';
import { Prediction } from '../../types';
import { data } from '../../mock/predictions';

interface Props extends RouteComponentProps { }

const Predictions: React.FC<Props> = () => {
	const [openModal, setOpenModal] = useState(false);
	const [image, setImage] = useState();

	const columns: ColumnsType<Prediction> = [
		{
			title: 'Prediction',
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
