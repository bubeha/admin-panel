import React from "react";
import PropTypes from "prop-types";

interface Props {
  children: React.ReactNode;
}

const GuestLayout: React.FC<Props> = ({ children }) => (
  <div className="content">
    <div className="content__sidebar">{children}</div>
  </div>
);

GuestLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GuestLayout;
