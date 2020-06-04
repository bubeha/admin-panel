import React from "react";
import { Layout } from "antd";

const Header = ({children}) => {
  return (
    <Layout.Header>
      { children }
    </Layout.Header>
  );
};

export default Header;
