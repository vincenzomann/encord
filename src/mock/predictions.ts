import { Prediction } from '../types';
import img from '../assets/img_1.jpg';
import results from './db.json';

export const data: Prediction[] = [
	{
		id: '1',
		// imageId: '1',
		title: 'title',
		description: 'description',
		predictions: results.predict.predictions,
		timestamp: new Date().toUTCString(),
		src: img
	},
	{
		id: '2',
		// imageId: '1',
		title: 'title',
		description: 'description',
		predictions: results.predict.predictions,
		timestamp: new Date().toUTCString(),
		src: img
	},
	{
		id: '3',
		// imageId: '1',
		title: 'title',
		description: 'description',
		predictions: results.predict.predictions,
		timestamp: new Date().toUTCString(),
		src: img
	},
];
