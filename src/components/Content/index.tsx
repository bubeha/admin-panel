import React from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";

interface Props {
  children: React.ReactNode;
}

const Content: React.FC<Props> = ({ children }) => {
  return <Layout.Content>{children}</Layout.Content>;
};

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
