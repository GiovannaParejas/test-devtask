import React from "react";
import { useState, useEffect } from "react";
import "./ListaDeTarefas.css";
import CampoTarefa from "../AdicionarTarefas/CampoTarefa/CampoTarefa";
import Label from "../AdicionarTarefas/Label/Label";
import CampoDeEntradaTarefa from "../AdicionarTarefas/CampoDeEntradaTarefa/CampoDeEntradaTarefa";
import CampoDeEntradaTarefaTextarea from "../AdicionarTarefas/CampoDeEntradaTarefa/CampoDeEntradaTarefaTextarea";
import CampoDeEntradaTarefaOption from "../AdicionarTarefas/CampoDeEntradaTarefa/CampoDeEntradaTarefaOption";
import BotaoAdicionarTarefa from "../AdicionarTarefas/BotaoAdicionarTarefa/BotaoAdicionarTarefa";
import "./Tarefas.css";
import ConcluirIcone from "../../assets/concluir-icone.svg";
import ExcluirIcone from "../../assets/excluir-icone.svg";
import TituloAdicionarTarefa from "../AdicionarTarefas/TituloAdicionarTarefa/TituloAdicionarTarefa";
import TituloTarefas from "../Tarefas/TituloTarefas/TituloTarefas";
import BotaoTarefaFiltro from "../Tarefas/BotaoTarefaFiltro/BotaoTarefaFiltro";
import DadosTarefa from "../Tarefas/DadosTarefa/DadosTarefa";
import TituloTarefa from "../Tarefas/TituloTarefa/TituloTarefa";
import DescricaoTarefa from "../Tarefas/DescricaoTarefa/DescricaoTarefa";

const ListaDeTarefas = () => {
  // useState (hook): guarda o array de tarefas. A função passada como argumento
  // só roda uma vez, na primeira renderização,
  // evitando ler o localStorage a cada re-render.
  const [tarefas, setTarefas] = useState(() => {
    const salvarTarefas = localStorage.getItem("item-tarefa");
    return salvarTarefas ? JSON.parse(salvarTarefas) : [];
  });

  // useState (hook): um state simples pra cada campo controlado do formulário
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("");

  // useState (hook): guarda qual filtro está ativo ("todas", "pendentes" ou "concluidas")
  const [filtro, setFiltro] = useState("todas");

  // useEffect (hook): roda toda vez que "tarefas" muda (por causa do array de
  // dependências [tarefas]), sincronizando o state com o localStorage.
  useEffect(() => {
    localStorage.setItem("item-tarefa", JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (e) => {
    e.preventDefault();
    if (!nome.trim() || !data.trim() || !descricao.trim() || !prioridade.trim())
      return;
    const novaTarefa = {
      id: Date.now(),
      nome: nome,
      data: data,
      descricao: descricao,
      prioridade: prioridade,
      concluida: false,
    };

    setTarefas([...tarefas, novaTarefa]);
    alert("Tarefa cadastrada com sucesso!");
    setNome("");
    setData("");
    setDescricao("");
    setPrioridade("");
  };

  // .map() (método de array): percorre todas as tarefas e retorna um novo
  // array. A função passada pro map é uma callback e é chamada uma vez pra
  // cada item do array, recebendo esse item como parâmetro.
  const concluirTarefa = (id) => {
    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        // encontrou a tarefa certa: retorna uma cópia com "concluida" invertido
        return { ...tarefa, concluida: !tarefa.concluida };
      } else {
        // não é a tarefa procurada: retorna ela sem nenhuma alteração
        return tarefa;
      }
    });
    setTarefas(tarefasAtualizadas);
  };
  const removerTarefa = (id) => {
    // .filter() (método de array): percorre todas as tarefas e retorna um
    // novo array só com as que passam no teste da callback (tarefa.id != id).
    // A tarefa com o id buscado é a única que fica de fora do resultado.
    const apagarTarefa = tarefas.filter((tarefa) => tarefa.id != id);
    setTarefas(apagarTarefa);
  };

  const tarefasConcluidas = (id) => {
    const atualizarTarefasConcluidas = tarefas.filter(
      (tarefa) => tarefa.concluida != id,
    );
    setTarefas(atualizarTarefasConcluidas);
  };

  // .filter() (método de array): gera a lista que será exibida na tela,
  // sem alterar o array original "tarefas". A callback decide, tarefa por
  // tarefa, se ela deve continuar no resultado, de acordo com o filtro ativo.
  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "todas") return true;
    if (filtro === "concluidas") return tarefa.concluida;
    if (filtro === "pendentes") return !tarefa.concluida;
  });

  const formatarData = (dataString) => {
    const data = new Date(dataString);
    return data.toLocaleDateString("pt-BR", { timeZone: "UTC" });
  };

  const formatarPrioridade = (valor) => {
    const mapa = {
      alta: "Alta",
      media: "Média",
      baixa: "Baixa",
    };
    return mapa[valor] || valor;
  };

  return (
    <div className="lista-tarefas">
      <div className="adicionar-tarefa-card">
        <TituloAdicionarTarefa>Cadastre uma nova tarefa</TituloAdicionarTarefa>

        {/* onSubmit recebe uma referência direta à função adicionarTarefa
            (não é uma arrow function aqui porque ela não precisa de argumento
            extra, o React já passa o evento "e" automaticamente) */}
        <form onSubmit={adicionarTarefa} className="adicionar-tarefa-form">
          {/* Nome */}
          <CampoTarefa>
            <Label htmlFor="nome">Nome</Label>
            <CampoDeEntradaTarefa
              value={nome}
              // onChange (callback): função anônima executada a cada
              // tecla digitada, atualizando o state "nome"
              onChange={(e) => setNome(e.target.value)}
              type="text"
              id="nome"
              placeholder="Digite o nome da tarefa"
              name="nomeTarefa"
            />
          </CampoTarefa>

          {/* Data */}
          <CampoTarefa>
            <Label htmlFor="data">Data</Label>
            <CampoDeEntradaTarefa
              type="date"
              value={data}
              onChange={(e) => setData(e.target.value)} // callback de mudança
              id="data"
              name="dataTarefa"
            />
          </CampoTarefa>

          {/* Descrição */}
          <CampoTarefa>
            <Label htmlFor="data">Descrição</Label>
            <CampoDeEntradaTarefaTextarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)} // callback de mudança
              id="descricao"
              placeholder="Digite a descrição da tarefa"
              name="descricaoTarefa"
            />
          </CampoTarefa>

          {/* Prioridade */}
          <CampoTarefa>
            <Label htmlFor="data">Prioridade</Label>
            <CampoDeEntradaTarefaOption
              id="prioridade"
              value={prioridade}
              onChange={(e) => setPrioridade(e.target.value)} // callback de mudança
              name="prioridade"
            />
          </CampoTarefa>

          <BotaoAdicionarTarefa />
        </form>
      </div>

      <div className="tarefas" id="verTarefas">
        <TituloTarefas>Tarefas</TituloTarefas>

        <div className="tarefas-filtros">
          {/* Todas as tarefas */}
          <BotaoTarefaFiltro
            className={
              filtro === "todas" ? "botao-filtro filtro-ativo" : "botao-filtro"
            }
            // onClick (callback): função anônima que, ao ser executada no
            // clique, chama setFiltro com o valor fixo "todas"
            onClick={() => setFiltro("todas")}
          >
            Todas
          </BotaoTarefaFiltro>

          {/* Tarefas pendentes */}
          <BotaoTarefaFiltro
            className={
              filtro === "pendentes"
                ? "botao-filtro filtro-ativo"
                : "botao-filtro"
            }
            onClick={() => setFiltro("pendentes")} // callback de clique
          >
            Pendentes
          </BotaoTarefaFiltro>

          {/* Tarefas concluídas */}
          <BotaoTarefaFiltro
            className={
              filtro === "concluidas"
                ? "botao-filtro filtro-ativo"
                : "botao-filtro"
            }
            onClick={() => setFiltro("concluidas")} // callback de clique
          >
            Concluídas
          </BotaoTarefaFiltro>
        </div>
        <ul className="tarefas-lista">
          {/* .map() (método de array): percorre "tarefasFiltradas" e
              transforma cada objeto tarefa em um elemento JSX <li>.
              A callback recebe cada "tarefa" e retorna o JSX correspondente. */}
          {tarefasFiltradas.map((tarefa) => (
            <li
              key={tarefa.id}
              className={`tarefas-card ${tarefa.concluida ? "tarefas-card-concluida" : ""}`}
            >
              <div className="tarefas-card-data-prioridade">
                {/* Data da Tarefa */}
                <DadosTarefa className="tarefas-card-data">
                  {formatarData(tarefa.data)}
                </DadosTarefa>
                {/* Prioridade da Tarefa */}
                <DadosTarefa
                  className={`tarefas-card-prioridade tarefas-card-prioridade-${tarefa.prioridade}`}
                >
                  {formatarPrioridade(tarefa.prioridade)}
                </DadosTarefa>
              </div>

              <div className="tarefas-card-conteudo">
                {/* Título da tarefa */}
                <TituloTarefa className="tarefas-card-titulo">
                  {tarefa.nome}
                </TituloTarefa>
                {/* Descrição da tarefa */}
                <DescricaoTarefa className="tarefas-card-descricao">
                  {tarefa.descricao}
                </DescricaoTarefa>
              </div>
              <div className="tarefas-card-botoes">
                <button
                  className="tarefas-card-botao"
                  // onClick (callback): arrow function que "encapsula" a
                  // chamada com o id certo, necessário porque concluirTarefa
                  // precisa do id de cada tarefa específica do map
                  onClick={() => concluirTarefa(tarefa.id)}
                >
                  <img
                    src={ConcluirIcone}
                    className="concluir-icone"
                    alt="Ícone para concluir tarefa"
                  />
                </button>
                <button
                  className="tarefas-card-botao"
                  onClick={() => removerTarefa(tarefa.id)} // callback de clique
                >
                  <img
                    src={ExcluirIcone}
                    className="excluir-icone"
                    alt="Ícone para excluir tarefa"
                  />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListaDeTarefas;
