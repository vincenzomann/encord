import React from "react";
import { RouteComponentProps } from "@reach/router";
import { Button, Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import img from '../../assets/img_1.jpg';

interface Props extends RouteComponentProps { }

interface DataType {
	id: string;
	filename: string;
	fileSize: number;
	uploadTime: string;
	src: string;
}

const columns: ColumnsType<DataType> = [
	{
		title: 'Image',
		dataIndex: 'src',
		key: 'src',
		render: (url) => <img alt={url} src={url} />
	},
	{
		title: 'Filename',
		dataIndex: 'filename',
		key: 'filename',
		render: (text) => <a>{text}</a>,
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
				<Button>Predict</Button>
			</Space>
		),
	},
];

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
	return <Table columns={columns} dataSource={data} />;
};

export default Images;
