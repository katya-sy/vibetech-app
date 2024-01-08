import React, { useContext } from "react";
import cl from "./Modal.module.css";
import close from "../../../assets/img/close.svg";
import { Context } from "../../../main";

function Modal({ modalVisible, setModalVisible, children }) {
  const { input } = useContext(Context);

  const closeModal = (e) => {
    input.cleanInputs(e);
    setModalVisible(false);
  };

  {
    if (modalVisible) {
      return (
        <div className={cl.modal} onClick={(e) => closeModal(e)}>
          <div
            className={cl.modal__content}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={cl.modal__close} onClick={(e) => closeModal(e)}>
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
