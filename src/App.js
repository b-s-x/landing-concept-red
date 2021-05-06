import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import app from './app.module.scss'

import { Header } from "./components/Header/Header";
import { useRoute } from './routes/useRoute'

export const App = () => {
  const routes = useRoute()

  return (
    <Router basename='/' exact>
      <div className="app">
        <Header />
        <div className={app.app__container}>
          {routes}
        </div>
      </div>
    </Router>
  );
}
