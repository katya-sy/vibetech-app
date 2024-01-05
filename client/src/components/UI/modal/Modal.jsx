import React from "react";
import cl from "./Modal.module.css";

function Modal({ modalVisible, setModalVisible, children }) {
  {
    if (modalVisible) {
      return (
        <div className={cl.modal} onClick={() => setModalVisible(false)}>
          <div
            className={cl.modal__content}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </div>
      );
    }
  }
}

export default Modal;
