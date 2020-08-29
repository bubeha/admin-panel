import React from "react";
import { Layout } from "antd";
import PropsTypes from "prop-types";

interface Props {
  children: React.ReactNode;
}

const Header: React.FC<Props> = ({ children }) => {
  return <Layout.Header>{children}</Layout.Header>;
};

Header.propTypes = {
  children: PropsTypes.node.isRequired,
};

export default Header;
