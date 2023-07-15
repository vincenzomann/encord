export interface Image {
	key: string;
	filename: string;
	fileSize: number;
	uploadTime: string;
	src?: string;
	base64: string;
}

export interface Prediction {
	key: string;
	// imageId: string;
	title: string;
	description: string;
	predictions: PredictionResult[];
	timestamp: string;
	src?: string;
	base64: string;
}

export interface PredictionResult {
	label: string;
	score: string;
	bbox: {
		[key: string]: number;
	};
}
