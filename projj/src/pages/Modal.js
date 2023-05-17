import React, { useState, useEffect } from "react";

const Modal = ({ showModal, setShowModal }) => {
  return <>{showModal ? <div className="concon">POP</div> : null}</>;
};

export default Modal;
