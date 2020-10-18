import React, { FunctionComponent } from "react";

export const NavbarItem: FunctionComponent = ({ children }): JSX.Element => (
  <div className="navbar-item">{children}</div>
);
