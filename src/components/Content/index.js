import React from "react";
import { Layout } from 'antd';

const Content = ({children}) => {
  return <Layout.Content>
    { children }
  </Layout.Content>
};

export default Content;
