import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';
import { Image, Prediction } from '../types';

interface ContextType {
	images: Image[],
	setImages: Dispatch<SetStateAction<Image[]>>;
	predictions: Prediction[],
	setPredictions: Dispatch<SetStateAction<Prediction[]>>;
}

const Context = createContext<ContextType | null>(null);

export function useContextProvider() {
	return useContext(Context);
}

const ContextProvider = ({ children }: PropsWithChildren) => {

	// Central state that can be accessed across components
	const [images, setImages] = useState<Image[]>([]);
	const [predictions, setPredictions] = useState<Prediction[]>([]);

	const values = {
		images,
		setImages,
		predictions,
		setPredictions
	};

	return (
		<Context.Provider value={values}>
			{children}
		</Context.Provider>
	);
};

export default ContextProvider;
