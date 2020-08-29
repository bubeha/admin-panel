import React from "react";
import { Layout } from "antd";
import PropsTypes from "prop-types";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";

interface Props {
  children?: React.ReactNode;
  isCollapsed: boolean;
  collapseHandler: () => void;
}

const Header: React.FC<Props> = ({ children, isCollapsed, collapseHandler }) => {
  return (
    <Layout.Header>
      {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "trigger",
        onClick: collapseHandler,
      })}
      {children}
    </Layout.Header>
  );
};

Header.propTypes = {
  children: PropsTypes.node.isRequired,
  isCollapsed: PropsTypes.bool.isRequired,
  collapseHandler: PropsTypes.func.isRequired,
};

export default Header;
