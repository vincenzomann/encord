import React from "react";
import { RouteComponentProps } from "@reach/router";

interface Props extends RouteComponentProps {}

const Images: React.FC<Props> = () => {
  return <div className="p-4 bg-white">Images</div>;
};

export default Images;
