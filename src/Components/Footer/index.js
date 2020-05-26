import React from "react";
import { Layout } from 'antd';

const Footer = ({children}) => {
  return (
    <Layout.Footer>
      { children }
    </Layout.Footer>
  );
};

export default Footer;
