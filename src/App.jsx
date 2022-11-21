import "./App.css";
import Counter from "./counter/Counter";
import AutoCounter from "./auto-counter/Auto-counter";
import React, { useState } from "react";
import Modal from "./modal/Modal";
import Button from "./button/Button";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <div className="app-container">
        <Button onClick={openModal}>Click</Button>
      </div>
      <Modal onClose={closeModal} isOpen={isOpen}>
        <AutoCounter />
        <Counter />
      </Modal>
    </div>
  );
}

export default App;
