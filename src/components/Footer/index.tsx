import React from 'react';
import {Layout} from 'antd';

interface Props {
  children: React.ReactNode;
}

const Footer: React.FC<Props> = ({children}) => (
  <Layout.Footer>
    {children}
  </Layout.Footer>
);

export default Footer;
