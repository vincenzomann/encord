import { render, screen } from '@testing-library/react';
import PredictImageModal from '.';

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

test('renders modal', () => {
	render(<PredictImageModal open={true} onCancel={() => { }} onSubmit={() => { }} />);
	const modal = screen.getByText(/Predict image/i);
	expect(modal).toBeInTheDocument();
});
