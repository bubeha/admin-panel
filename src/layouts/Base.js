import React from "react";
import { Layout } from "antd";
import Sidebar from "../components/Sidebar";
import Header from '../components/Header';
import Content from "../components/Content";
import Footer from "../components/Footer";

const BaseLayout = ({children}) => {
  return <>
    <Layout className="main-layout">
      <Sidebar />
      <Layout>
        <Header>
          test 123
        </Header>
        <Content>
          { children }
        </Content>
        <Footer>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  </>
};

export default BaseLayout;
