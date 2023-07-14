import { Image } from '../types';
import img from '../assets/img_1.jpg';

export const data: Image[] = [
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
