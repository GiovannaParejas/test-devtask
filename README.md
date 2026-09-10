# DevTask — Sistema de Lista de Tarefas do Programador

Projeto desenvolvido para o **Checkpoint 4** da disciplina de **Front-end**, do curso de Engenharia de Software (FIAP), sob orientação do Professor **Wellington Cidade Silva** da Turma 1ESPI.

## Sobre o projeto

DevTask é uma aplicação de gerenciamento de tarefas voltada para desenvolvedores, com interface leve e persistência automática dos dados no navegador.

## Funcionalidades

- Cadastro de tarefas com **Nome**, **Data**, **Descrição** e **Nível de Prioridade**
- Botões interativos para **marcar como concluída** e **remover** tarefas
- Filtros rápidos de visualização: **Todas**, **Pendentes**, **Concluídas**
- Persistência automática dos dados utilizando **localStorage**
- Código comentado nas partes que utilizam **Hooks**, **métodos de array** (`filter` e `map`) e **callbacks**

## Tecnologias utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS

## Como rodar o projeto

```bash
# Clone o repositório
git clone <link-do-repositorio>

# Acesse a pasta do projeto
cd devtask

# Instale as dependências
npm install

# Rode o projeto em ambiente de desenvolvimento
npm run dev
```

## Estrutura de pastas

```
src/
├── assets/              # Ícones e imagens (SVGs)
├── components/
│   ├── AdicionarTarefas/  # Formulário de cadastro e seus campos
│   ├── Hero/               # Seção inicial de apresentação
│   └── ListaDeTarefas/            # Cadastro e visualização de tarefas
│   └── Tarefas/            # Listagem, filtros e cards de tarefas
├── App.jsx
└── main.jsx
```

## Equipe

| RM | Nome |
|----|------|
| RM000000 | Nome do integrante 1 |
| RM000000 | Nome do integrante 2 |
| RM000000 | Nome do integrante 3 |
| RM000000 | Nome do integrante 4 |

## Repositório

🔗 [Link do repositório](https://github.com/usuario/devtask)