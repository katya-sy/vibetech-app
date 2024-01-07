import React from "react";
import cl from "./Modal.module.css";
import close from "../../../assets/img/close.svg";

function Modal({ modalVisible, setModalVisible, children }) {
  {
    if (modalVisible) {
      return (
        <div className={cl.modal} onClick={() => setModalVisible(false)}>
          <div
            className={cl.modal__content}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={cl.modal__close}
              onClick={() => setModalVisible(false)}
            >
              <img src={close} />
            </div>
            {children}
          </div>
        </div>
      );
    }
  }
}

export default Modal;
