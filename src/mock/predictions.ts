import { Prediction } from '../types';
import img from '../assets/img_1.jpg';

export const data: Prediction[] = [
	{
		id: '1',
		imageId: '1',
		title: 'title',
		description: 'description',
		timestamp: new Date().toUTCString(),
		src: img
	},
	{
		id: '2',
		imageId: '1',
		title: 'title',
		description: 'description',
		timestamp: new Date().toUTCString(),
		src: img
	},
	{
		id: '3',
		imageId: '1',
		title: 'title',
		description: 'description',
		timestamp: new Date().toUTCString(),
		src: img
	},
];
