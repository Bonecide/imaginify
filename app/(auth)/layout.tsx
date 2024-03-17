import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => (
  <main className="auth">{children}</main>
);

export default Layout;
