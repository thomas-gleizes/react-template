import React from "react";

import Header from "./Header";
import Footer from "./Footer";

const Layout: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <div className="min-h-screen">
      <Header />
      <main {...props} />
      <Footer />
    </div>
  );
};

export default Layout;
