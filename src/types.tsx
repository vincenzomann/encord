export enum Pathnames {
	Images = 'images',
	Predictions = 'predictions'
}

export interface Image {
	key: string;
	filename: string;
	fileSize: number;
	uploadTime: string;
	base64: string;
}

export interface Prediction {
	key: string;
	imageKey: string;
	title: string;
	description: string;
	predictions: PredictionResult[];
	timestamp: string;
	base64: string;
}

export interface PredictionResult {
	label: string;
	score: string;
	bbox: {
		[key: string]: number;
	};
}
