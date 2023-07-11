import React from "react";
import { UploadOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Layout, Menu, MenuProps } from "antd";
import { RouteComponentProps } from "@reach/router";

interface Props extends RouteComponentProps {}

const Predictions: React.FC<Props> = () => {
  return <div className="p-4 bg-white">Predictions</div>;
};

export default Predictions;
