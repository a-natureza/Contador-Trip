# Projeto React + Vite

Este template fornece uma configuração mínima para usar React com Vite, incluindo HMR (Hot Module Replacement) e algumas regras ESLint.

Atualmente, existem dois plugins oficiais disponíveis:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) usa [Babel](https://babeljs.io/) para Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) usa [SWC](https://swc.rs/) para Fast Refresh

## Resumo das Funcionalidades

Este projeto React desenvolvido com Vite apresenta diversas funcionalidades implementadas para gerenciar e exibir informações relacionadas ao FuturoDEV Trip. Abaixo estão as principais funcionalidades:

- Contador: Um componente que permite incrementar e decrementar um número.
- Formulário: Um formulário controlado que captura e exibe informações de nome, email e idade.
- Input Controlado: Um componente que mostra em tempo real o texto digitado pelo usuário em um input.
- Lista de Itens: Exibe uma lista de itens.
- Busca de Dados: Componente que utiliza um efeito para buscar dados de notícias na API do IBGE.

## Como Usar

1. Clone este repositório.
2. Instale as dependências usando `npm install` ou `yarn install`.
3. Inicie o servidor de desenvolvimento com `npm run dev` ou `yarn dev`.
4. Abra seu navegador em `http://localhost:5173/ ` para ver o aplicativo em execução.

## Comandos Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento.
- `npm run build`: Compila o aplicativo para produção.
- `npm run serve`: Serve o aplicativo compilado em produção localmente.

## Estrutura do Projeto

- `src/`: Contém o código-fonte do projeto.
  - `components/`: Componentes React.
  - `pages/`: Páginas React (seguindo uma estrutura de roteamento).
  - `App.jsx`: Ponto de entrada do aplicativo React.
  - `index.html`: Página HTML principal.
  - `index.jsx`: Ponto de entrada do JavaScript.
- `public/`: Contém arquivos estáticos como imagens, ícones, etc.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).
