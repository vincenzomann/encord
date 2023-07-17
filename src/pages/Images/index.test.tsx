import { render, screen } from '@testing-library/react';
import Images from '.';

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

test('renders Upload image button', () => {
	render(<Images />);
	const uploadBtn = screen.getByText(/Upload image/i);
	expect(uploadBtn).toBeInTheDocument();
});
test('renders image table', () => {
	render(<Images />);
	const table = screen.getByText(/Filename/i);
	expect(table).toBeInTheDocument();
});
test('renders default image in the table', () => {
	render(<Images />);
	const defaultImg = screen.getByText(/orange.jpg/i);
	expect(defaultImg).toBeInTheDocument();
});
