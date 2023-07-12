import React from "react";
import { UploadOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import { Link, RouteComponentProps, Router, navigate } from "@reach/router";
import Images from "./pages/Images";
import Predictions from "./pages/Predictions";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  url: String,
  icon: React.ReactNode,
  onClick: () => {},
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    url,
    children,
    onClick,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Images", "1", "images", <UploadOutlined />, () =>
    navigate("/images")
  ),
  getItem("Predictions", "2", "predictions", <VideoCameraOutlined />, () =>
    navigate("/predictions")
  ),
];

interface Props extends RouteComponentProps {}

const Dashboard: React.FC<Props> = () => {
  return (
    <Layout className="h-screen">
      <Sider breakpoint="lg" collapsedWidth="0" collapsible theme="light">
        <Menu mode="inline" defaultSelectedKeys={["1"]} items={items} />
      </Sider>
      <Layout>
        <Header className="p-0 bg-slate-100" />
        <Content className="mt-5 mx-4 pl-8">
          <Router>
            <Images path="/images" />
            <Predictions path="/predictions" />
          </Router>
        </Content>
        <Footer style={{ textAlign: "center" }}></Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
