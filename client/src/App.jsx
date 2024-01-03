import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <AppRouter />
      </div>
    </BrowserRouter>
  );
}

export default App;
