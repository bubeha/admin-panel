import React, { useState } from "react";
import { Layout } from "antd";
import PropTypes from "prop-types";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

interface Props {
  children: React.ReactNode;
}

const BaseLayout: React.FC<Props> = ({ children }) => {
  const [isCollapsedSidebar, setCollapsedSidebar] = useState<boolean>(false);

  const collapseHandler = (): void => {
    setCollapsedSidebar(!isCollapsedSidebar);
  };

  return (
    <Layout className="main-layout">
      <Sidebar collapsed={isCollapsedSidebar} />
      <Layout>
        <Header isCollapsed={isCollapsedSidebar} collapseHandler={collapseHandler} />
        <Content>{children}</Content>
        <Footer>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseLayout;
