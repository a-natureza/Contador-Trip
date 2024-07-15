import { useEffect, useState } from "react";
import "./Noticia.css";

export function BuscarDadosEffect() {
  const [texto, setTexto] = useState(null);
  // função assíincrona para buscar dados da API
  async function buscarDados() {
    try {
      const response = await fetch(
        "https://servicodados.ibge.gov.br/api/v3/noticias/?tipo=release"
      );
      const dados = await response.json();
      const titulo = dados.items[0].titulo;

      setTexto(titulo);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
      setTexto("Erro ao carregar dados");
    }
  }

  // useEfect para executar a função carregar o componente
  useEffect(() => {
    buscarDados();
  }, []);
  return (
    <div className="noticia-container">
      <h1>Notícias:</h1>
      <p>{texto}</p>
    </div>
  );
}
