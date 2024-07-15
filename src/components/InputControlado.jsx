import { useState } from "react";
import "./InputControlado.css";

function InputControlado() {
  const [texto, setTexto] = useState("");

  const handleInputChange = (e) => {
    setTexto(e.target.value);
  };

  return (
    <div className="input-container">
      <h2>Input Controlado</h2>
      <input
        type="text"
        value={texto}
        onChange={handleInputChange}
        placeholder="Digite algo..."
      />
      <p>O texto digitado é: {texto}</p>
    </div>
  );
}

export default InputControlado;
