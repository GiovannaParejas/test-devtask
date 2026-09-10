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
  const [tarefas, setTarefas] = useState(() => {
    const salvarTarefas = localStorage.getItem("item-tarefa");
    return salvarTarefas ? JSON.parse(salvarTarefas) : [];
  });

  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [filtro, setFiltro] = useState("todas");

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

  const concluirTarefa = (id) => {
    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida };
      } else {
        return tarefa;
      }
    });
    setTarefas(tarefasAtualizadas);
  };
  const removerTarefa = (id) => {
    const apagarTarefa = tarefas.filter((tarefa) => tarefa.id != id);
    setTarefas(apagarTarefa);
  };

  const tarefasConcluidas = (id) => {
    const atualizarTarefasConcluidas = tarefas.filter(
      (tarefa) => tarefa.concluida != id,
    );
    setTarefas(atualizarTarefasConcluidas);
  };

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

        <form onSubmit={adicionarTarefa} className="adicionar-tarefa-form">
          {/* Nome */}
          <CampoTarefa>
            <Label htmlFor="nome">Nome</Label>
            <CampoDeEntradaTarefa
              value={nome}
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
              onChange={(e) => setData(e.target.value)}
              id="data"
              name="dataTarefa"
            />
          </CampoTarefa>

          {/* Descrição */}
          <CampoTarefa>
            <Label htmlFor="data">Descrição</Label>
            <CampoDeEntradaTarefaTextarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
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
              onChange={(e) => setPrioridade(e.target.value)}
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
            onClick={() => setFiltro("pendentes")}
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
            onClick={() => setFiltro("concluidas")}
          >
            Concluídas
          </BotaoTarefaFiltro>
        </div>
        <ul className="tarefas-lista">
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
                  onClick={() => removerTarefa(tarefa.id)}
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
