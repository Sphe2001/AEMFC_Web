import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import TransitionComponent from "../components/transition/Transition";
import { TransitionProvider } from "../components/transition/TransitionContext";
import HomePage from "../pages/Home";
import Layout from "../layout/layout";

const Router: React.FC = () => {
  return (
    <TransitionProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <TransitionComponent>
                <HomePage />
              </TransitionComponent>
            }
          />
        </Route>
      </Routes>
    </TransitionProvider>
  );
};
export default Router;
