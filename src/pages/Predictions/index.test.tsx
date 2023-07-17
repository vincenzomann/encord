import { render, screen } from '@testing-library/react';
import Predictions from '.';

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

test('renders prediction table', () => {
	render(<Predictions />);
	const table = screen.getByText(/Timestamp/i);
	expect(table).toBeInTheDocument();
});
