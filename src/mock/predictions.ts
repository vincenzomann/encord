import { Prediction } from '../types';
import img from '../assets/img_1.jpg';
import results from './db.json';
const orange = '../assets/orange.txt';

export const data: Prediction[] = [
	{
		key: '1',
		imageKey: '1',
		title: 'title',
		description: 'description',
		predictions: results.predict.predictions,
		timestamp: new Date().toUTCString(),
		base64: orange
	},
	{
		key: '2',
		imageKey: '1',
		title: 'title',
		description: 'description',
		predictions: results.predict.predictions,
		timestamp: new Date().toUTCString(),
		base64: orange
	},
	{
		key: '3',
		imageKey: '1',
		title: 'title',
		description: 'description',
		predictions: results.predict.predictions,
		timestamp: new Date().toUTCString(),
		base64: orange
	},
];
