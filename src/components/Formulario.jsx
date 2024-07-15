import { useEffect, useState } from "react";
import "./Formulario.css";

function Formulario() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    idade: "",
  });

  const [formComplete, setFormComplete] = useState(false);

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formComplete) {
      console.log("Formulário enviado:", formData);
      localStorage.setItem("formData", JSON.stringify(formData));
      setFormData({
        nome: "",
        email: "",
        idade: "",
      });
      setFormComplete(false);
    }
  };

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).reduce(
      (filledCount, fieldValue) => {
        return fieldValue.trim() !== "" ? filledCount + 1 : filledCount;
      },
      0
    );
    if (allFieldsFilled === 3) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  }, [formData]);

  return (
    <div className="form-container">
      <h1>Formulário</h1>
      <form id="formulario" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome: </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Digite seu nome"
            autoComplete="nome"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Digite seu email"
            autoComplete="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="idade">Idade: </label>
          <input
            type="number"
            id="idade"
            name="idade"
            value={formData.idade}
            onChange={handleInputChange}
            placeholder="Digite sua idade"
            autoComplete="idade"
          />
        </div>
        <button
          type="submit"
          className="submit-button"
          disabled={!formComplete}
        >
          Enviar
        </button>
      </form>
      {formComplete && <p>Formulário totalmente preenchido!</p>}
    </div>
  );
}

export default Formulario;
