import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "resources/constant";
import Layout from "components/layouts";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
