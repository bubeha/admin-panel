import React from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";

interface Props {
  collapsed: boolean;
}

const Sidebar: React.FC<Props> = ({ collapsed }) => {
  return (
    <Layout.Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="brand" />
    </Layout.Sider>
  );
};

Sidebar.propTypes = {
  collapsed: PropTypes.bool.isRequired,
};

export default Sidebar;
