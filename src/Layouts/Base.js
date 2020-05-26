import React from "react";
import { Layout } from "antd";
import Sidebar from "../Components/Sidebar";
import Header from '../Components/Header';
import Content from "../Components/Content";
import Footer from "../Components/Footer";

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
