import React from "react";
import { Layout } from 'antd';
import App from 'src/components/App';

const Footer = ({children}) => {
  console.log(App);

  return (
    <Layout.Footer>
      { children }
    </Layout.Footer>
  );
};

export default Footer;
