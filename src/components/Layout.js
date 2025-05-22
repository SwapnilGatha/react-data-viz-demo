import Link from "next/link";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <nav style={{ padding: "1rem", background: "white", color: "black" }}>
        <Link href="/" style={{ marginRight: "1rem" }}>
          Home
        </Link>
        <Link href="/about" style={{ marginRight: "1rem" }}>
          About
        </Link>
        <Link href="/config">Config</Link>
      </nav>
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 60px)",
          padding: "1rem",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
