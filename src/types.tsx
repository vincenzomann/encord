export interface Image {
	id: string;
	filename: string;
	fileSize: number;
	uploadTime: string;
	src: string;
}

export interface Prediction {
	id: string;
	imageId: string;
	title: string;
	description: string;
	timestamp: string;
	src: string;
}
