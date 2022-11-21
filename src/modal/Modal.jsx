import React, { useState } from "react";
import "./Modal.css";
import { useEffect } from "react";
import CloseIcon from "../assets/icons/close.png";

const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = (e) => {
    e.stopPropagation();
    setIsOpen(false);
    if (props.onClose) {
      props.onClose();
    }
  };

  useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  return (
    <div className={`${isOpen ? "modal-wrapper" : "modal-hidden"}`}>
      <i onClick={closeModal} className="close-button">
        <img src={CloseIcon} alt="close" />
      </i>

      <div className="modal-content">{props.children}</div>
    </div>
  );
};

export default Modal;
