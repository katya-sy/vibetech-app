import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import "./styles/App.css";
import Footer from "./components/Footer";
import Modal from "./components/UI/modal/Modal";

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <BrowserRouter>
      <Header setModalVisible={setModalVisible} />
      <div className="container">
        <AppRouter />
      </div>
      <Footer />
      <Modal modalVisible={modalVisible} setModalVisible={setModalVisible}>
        <div>skdjflkdjflkdj</div>
      </Modal>
    </BrowserRouter>
  );
}

export default App;
