import React from "react";
import { Layout, Menu } from "antd";
import { DashboardOutlined } from "@ant-design/icons";

const Sidebar = ({menuConfig}) => {
  return (
    <Layout.Sider
      trigger={ null }
    >
      <div className="brand">

      </div>
      <Menu defaultSelectedKeys={ ['1'] }>
        <Menu.Item key="1" icon={ <DashboardOutlined /> }>
          Dashboard
        </Menu.Item>
      </Menu>

    </Layout.Sider>
  );
}

export default Sidebar;
