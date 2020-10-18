import React, { FunctionComponent } from "react";

export const MainContent: FunctionComponent = ({ children }): JSX.Element => (
  <div className="content">{children}</div>
);
