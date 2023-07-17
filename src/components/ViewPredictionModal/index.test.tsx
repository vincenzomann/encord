import { render, screen } from '@testing-library/react';
import ViewPredictionModal from '.';
import { Prediction } from '../../types';

// Needed so that tests work with Antd library
Object.defineProperty(window, 'matchMedia', {
	value: () => {
		return {
			matches: false,
			addListener: () => { },
			removeListener: () => { }
		};
	}
});

const data: Prediction = {
	key: '1',
	imageKey: '1',
	title: 'test',
	description: '',
	predictions: [
		{
			label: 'label',
			score: '0.5',
			bbox: {
				x1: 1,
				x2: 1,
				y1: 1,
				y2: 1,
			}
		}
	],
	timestamp: 'Mon, 17 Jul 2023 12:12:41 GMT',
	base64: '',
};

test('renders modal with image title', () => {
	render(<ViewPredictionModal open={true}
		onCancel={() => { }}
		data={data} />);
	const modal = screen.getByText(data.title);
	expect(modal).toBeInTheDocument();
});
