import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";
import { Button, Space, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import ViewPredictionModal from '../../components/ViewPredictionModal';
import { Prediction } from '../../types';
// import { data as mockPredictions } from '../../mock/predictions';
import { useContextProvider } from '../../context/Context';

interface Props extends RouteComponentProps { }

const Predictions: React.FC<Props> = () => {
	const [openModal, setOpenModal] = useState(false);
	const [data, setData] = useState<Prediction | null>();

	const { predictions } = useContextProvider();

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
			key: 'description'
		},
		{
			title: 'Timestamp',
			dataIndex: 'timestamp',
			key: 'timestamp'
		},
		{
			title: '',
			key: 'action',
			render: (_, record) => (
				<Space size="middle">
					<Button onClick={() => handleModal(record)}>View</Button>
				</Space >
			),
		},
	];

	const handleModal = (data: Prediction) => {
		setData(data);
		setOpenModal(true);
	};

	return (
		<>
			<Table columns={columns} dataSource={predictions} />
			{data && <ViewPredictionModal
				open={openModal}
				onCancel={() => {
					setOpenModal(false);
				}}
				data={data}
			/>}
		</>
	);
};

export default Predictions;
