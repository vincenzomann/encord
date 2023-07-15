export interface Image {
	id: string;
	filename: string;
	fileSize: number;
	uploadTime: string;
	src: string;
}

export interface Prediction {
	id: string;
	// imageId: string;
	title: string;
	description: string;
	predictions: PredictionResult[];
	timestamp: string;
	src: string;
}

export interface PredictionResult {
	label: string;
	score: string;
	bbox: {
		[key: string]: number;
	};
}
