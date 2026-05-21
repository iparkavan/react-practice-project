import React, { ReactNode } from "react";
import { createPortal } from "react-dom";

const Modal = ({ isOpen, onClose, children }) => {
  return createPortal(
    <div onClick={onClose}>
      <div>{children}</div>
    </div>,
    document.getElementById("modal-root"),
  );
};

export default Modal;
