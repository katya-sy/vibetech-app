import React, { useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import "./styles/App.css";
import Footer from "./components/Footer";
import Modal from "./components/UI/modal/Modal";
import Form from "./components/UI/form/Form";
import { Context } from "./main";
import help from "./assets/img/help.svg";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const { user } = useContext(Context);

  const login = (e) => {
    e.preventDefault();
    user.setIsAuth(true);
    setModalVisible(false);
  };

  return (
    <BrowserRouter>
      <Header setModalVisible={setModalVisible} />
      <div className="container">
        <AppRouter />
      </div>
      <Footer />
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <h2 className="title form__title">Вход</h2>
        <Form buttonText={"Войти"} login={login} />
        <div style={{ display: "flex", gap: 40 }}>
          <button style={{ color: "var(--accent)" }}>Зарегистрироваться</button>
          <button className="help">
            <span>Нужна помощь?</span>
            <img src={help} />
          </button>
        </div>
      </Modal>
    </BrowserRouter>
  );
}

export default App;
