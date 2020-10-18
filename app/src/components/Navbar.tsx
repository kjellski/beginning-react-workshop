import React, { FunctionComponent } from "react";

export const Navbar: FunctionComponent = ({ children }): JSX.Element => (
  <div className="navbar">{children}</div>
);
