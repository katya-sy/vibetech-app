import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import "./styles/App.css";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <AppRouter />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
