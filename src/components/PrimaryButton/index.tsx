import React, { PropsWithChildren } from 'react';
import { Button, theme } from 'antd';

const { useToken } = theme;

interface PrimaryButtonProps {
	onClick?: () => void;
	className?: string;
}

const PrimaryButton: React.FC<PropsWithChildren<PrimaryButtonProps>> = ({ children, onClick, className }) => {
	const { token } = useToken();
	return (
		<Button type='primary' style={{ backgroundColor: token.colorPrimary }} onClick={onClick} className={className}>{children}</Button>
	);
};

export default PrimaryButton;
