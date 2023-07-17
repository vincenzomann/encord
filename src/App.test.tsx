import { render, screen } from '@testing-library/react';
import App from './App';

Object.defineProperty(window, 'matchMedia', {
	value: () => {
		return {
			matches: false,
			addListener: () => { },
			removeListener: () => { }
		};
	}
});

test('renders learn react link', () => {
	render(<App />);
	const linkElement = screen.getByText(/Upload image/i);
	expect(linkElement).toBeInTheDocument();
});
