import React from "react";
import { Router, navigate } from "@reach/router";
import { Layout, Tabs, TabsProps } from "antd";
import ContextProvider from './context/Context';
import Images from "./pages/Images";
import Predictions from "./pages/Predictions";

const { Header, Content, Footer } = Layout;

const onChange = (key: string) => {
	navigate(`/${key}`);
};

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
	return (
		<ContextProvider>
			<Layout className="h-screen">
				<Header className="p-0 bg-slate-100" />
				<Content className="mt-5 mx-8">
					<Tabs defaultActiveKey="1" items={items} onChange={onChange} />
					<Router>
						<Images path="/images" default />
						<Predictions path="/predictions" />
					</Router>
				</Content>
				<Footer style={{ textAlign: "center" }}></Footer>
			</Layout>
		</ContextProvider>
	);
};

export default Dashboard;
