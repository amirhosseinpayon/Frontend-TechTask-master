import React from "react";
import { Routes, Route } from "react-router-dom";

import routeUrls from "./route-urls";

import Articles from "../pages/articles/Articles";

const AppRoutes: React.FC = (): JSX.Element => (
  <Routes>
    <Route path="*" element={<div>404 Not Found | 🤔</div>} />
    <Route path="/" element={<Articles />} />
    <Route path={routeUrls.category(":categoryId")} element={<Articles />} />
  </Routes>
);

export default AppRoutes;
