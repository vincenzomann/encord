import React, { PropsWithChildren, ReactElement } from 'react';
import { Button, theme } from 'antd';

const { useToken } = theme;

interface PrimaryButtonProps {
	onClick?: () => void;
	className?: string;
	icon?: ReactElement;
}

const PrimaryButton: React.FC<PropsWithChildren<PrimaryButtonProps>> = ({ children, onClick, className, icon }) => {
	const { token } = useToken();
	return (
		<Button type='primary' style={{ backgroundColor: token.colorPrimary }} onClick={onClick} className={className} icon={icon}>{children}</Button>
	);
};

export default PrimaryButton;
