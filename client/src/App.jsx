import React, { useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import "./styles/App.css";
import Footer from "./components/Footer";
import Modal from "./components/UI/modal/Modal";
import Form from "./components/UI/form/Form";
import { Context } from "./main";

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
        <Form buttonText={"Войти"} login={login} />
      </Modal>
    </BrowserRouter>
  );
}

export default App;
