import { useState } from "react";
import "./Lista.css";

function Lista() {
  const [inputValor, setInputValor] = useState("");
  const [itens, setItens] = useState([]);
  const [editando, setEditando] = useState(null);
  const [valorEditando, setValorEditando] = useState("");

  const handleInputChange = (e) => {
    setInputValor(e.target.value);
  };

  const adicionarItem = () => {
    if (inputValor.trim() !== "") {
      setItens([...itens, inputValor]);
      setInputValor("");
    }
  };

  const handleDelete = (index) => {
    const novosItens = itens.filter((_, i) => i !== index);
    setItens(novosItens);
  };

  const handleEdit = (index) => {
    setEditando(index);
    setValorEditando(itens[index]);
  };

  const handleSaveEdit = (index) => {
    const novosItens = [...itens];
    novosItens[index] = valorEditando;
    setItens(novosItens);
    setEditando(null);
    setValorEditando("");
  };

  const handleEditChange = (e) => {
    setValorEditando(e.target.value);
  };

  return (
    <div className="lista-de-itens-container">
      <h1>Adicionar Item</h1>
      <input
        id="lista"
        type="text"
        value={inputValor}
        onChange={handleInputChange}
        placeholder="Digite o item"
      />
      <button onClick={adicionarItem}>Adicionar</button>
      <ul>
        {itens.map((item, index) => (
          <li key={index}>
            {editando === index ? (
              <>
                <input
                  type="text"
                  value={valorEditando}
                  onChange={handleEditChange}
                />
                <button onClick={() => handleSaveEdit(index)}>Salvar</button>
              </>
            ) : (
              <>
                {item}
                <button onClick={() => handleEdit(index)}>Editar</button>
                <button onClick={() => handleDelete(index)}>Deletar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;
