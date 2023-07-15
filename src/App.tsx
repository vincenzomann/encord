import { useEffect, useState } from "react";
import { Router, navigate } from "@reach/router";
import { Layout, Tabs, TabsProps } from "antd";
import ContextProvider from './context/Context';
import Images from "./pages/Images";
import Predictions from "./pages/Predictions";
import { Pathnames } from './types';

const { Header, Content, Footer } = Layout;

const items: TabsProps["items"] = [
	{
		key: "images",
		label: `Images`,
	},
	{
		key: "predictions",
		label: `Predictions`,
	},
];

const Dashboard = () => {

	const [currentTab, setCurrentTab] = useState<Pathnames>();

	useEffect(() => {
		switch (window.location.pathname) {
			case `/${Pathnames.Predictions}`:
				setCurrentTab(Pathnames.Predictions);
				break;
			case `/${Pathnames.Images}`:
			default:
				setCurrentTab(Pathnames.Images);
				break;
		}
	}, [window.location.pathname]);

	const onChange = (key: string) => {
		setCurrentTab(key as Pathnames);
		navigate(`/${key}`);
	};

	return (
		<ContextProvider>
			<Layout className="h-screen">
				<Header className="p-0 bg-slate-100" />
				<Content className="mt-5 mx-8">
					<Tabs activeKey={currentTab} items={items} onChange={onChange} />
					<Router>
						<Images path={Pathnames.Images} default />
						<Predictions path={Pathnames.Predictions} />
					</Router>
				</Content>
				<Footer style={{ textAlign: "center" }}></Footer>
			</Layout>
		</ContextProvider>
	);
};

export default Dashboard;
