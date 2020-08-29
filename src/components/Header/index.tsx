import React from "react";
import { Avatar, Dropdown, Layout, Menu } from "antd";
import PropsTypes from "prop-types";
import { MenuFoldOutlined, MenuUnfoldOutlined, DownOutlined } from "@ant-design/icons";
import { inject, observer } from "mobx-react";
import { IAppStore } from "../../stores";
import { User } from "../../models/User";

interface Props {
  children?: React.ReactNode;
  isCollapsed: boolean;
  collapseHandler: () => void;
  store?: IAppStore;
}

const getAvatar = (user: User | null | undefined): React.ReactNode | null => {
  if (!user) {
    return null;
  }

  return <Avatar>{user.name.charAt(0)}</Avatar>;
};

const menu = (
  <Menu className="header__account-menu">
    <Menu.Item className="header__account-menu-item">My Account</Menu.Item>
    <Menu.Divider />
    <Menu.Item className="header__account-menu-item">Logout</Menu.Item>
  </Menu>
);

const Header: React.FC<Props> = ({ children, isCollapsed, collapseHandler, store }) => {
  const user = store?.authStore.user;

  return (
    <Layout.Header>
      {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: "header__sider-toggler",
        onClick: collapseHandler,
      })}

      {children}

      <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]} className="header__account-dropdown">
        <button type="button" onClick={(event) => event.preventDefault()}>
          {getAvatar(user)} {user?.name} <DownOutlined />
        </button>
      </Dropdown>
    </Layout.Header>
  );
};

Header.propTypes = {
  children: PropsTypes.node.isRequired,
  isCollapsed: PropsTypes.bool.isRequired,
  collapseHandler: PropsTypes.func.isRequired,
  store: PropsTypes.any,
};

export default inject("store")(observer(Header));
