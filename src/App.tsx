import React from "react";
import { Layout, Tabs, TabsProps } from "antd";
import { Router, navigate } from "@reach/router";
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

const Dashboard: React.FC = () => {
  return (
    <Layout className="h-screen">
      <Header className="p-0 bg-slate-100" />
      <Content className="mt-5 mx-8">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        <Router>
          <Images path="/images" />
          <Predictions path="/predictions" />
        </Router>
      </Content>
      <Footer style={{ textAlign: "center" }}></Footer>
    </Layout>
  );
};

export default Dashboard;
