import React from 'react';
import { Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useContextProvider } from '../../context/Context';
import { Image } from '../../types';
import { RcFile } from 'antd/es/upload';
import PrimaryButton from '../PrimaryButton';

export function getBase64(file: RcFile) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result);
		reader.onerror = error => reject(error);
	});
}

const UploadImage: React.FC = () => {
	const { setImages } = useContextProvider();

	return (
		<Upload
			showUploadList={false}
			customRequest={(res) => {
				// Not actually uploading, simulate success
				if (res.onSuccess) {
					res.onSuccess({});
				}
			}}
			onChange={(info) => {
				if (info.file.originFileObj && info.file.status === 'done') {
					// const b64 = await getBase64(info.file.originFileObj);
					getBase64(info.file.originFileObj).then(b64 => {
						if (typeof b64 === 'string') {
							const image: Image = {
								key: info.file.uid,
								filename: info.file.name,
								fileSize: info.file.size || 0,
								uploadTime: new Date().toUTCString(),
								src: '',
								base64: b64
							};
							setImages(prev => [...prev, image]);
						}
					}).catch(e => {
						console.log(e);
						message.error(`${info.file.name} file upload failed. ${e}`);
					});
					message.success(`${info.file.name} file uploaded successfully`);
				} else if (info.file.status === 'error') {
					message.error(`${info.file.name} file upload failed.`);
				}
			}}
		>
			<PrimaryButton className='mb-4' icon={<UploadOutlined />}>Upload image</PrimaryButton>
		</Upload>
	);
};

export default UploadImage;
