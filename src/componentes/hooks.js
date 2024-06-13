/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react';

// Função para gerar nomes aleatórios
const useNomeAleatorio = () => {
  const nomes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda", "Gustavo", "Helena", "Igor", "Julia"];
  const sobrenomes = ["Silva", "Santos", "Oliveira", "Pereira", "Almeida", "Costa", "Gomes", "Martins", "Souza", "Ferreira"];
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  const sobrenome = sobrenomes[Math.floor(Math.random() * sobrenomes.length)];
  return `${nome} ${sobrenome}`;
};

// Função para gerar CPFs aleatórios
const useCpfAleatorio = () => {
  const cpf = `${Math.floor(100000000 + Math.random() * 900000000)}-${Math.floor(10 + Math.random() * 90)}`;
  const dataEmissao = new Date(2020, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28));
  return { cpf, dataEmissao };
};

// Função para gerar Rgs aleatórios
const useRgAleatorio = () => {
  const rg = `${Math.floor(1000000 + Math.random() * 9000000)}-${Math.floor(10 + Math.random() * 90)}`;
  const dataEmissao = new Date(2020, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28));
  return { rg, dataEmissao };
};

// Função para gerar telefones aleatórios
const useTelefoneAleatorio = () => {
  const ddd = `${Math.floor(10 + Math.random() * 90)}`;
  const numero = `${Math.floor(900000000 + Math.random() * 100000000)}`;
  return { ddd, numero };
};

// Função para gerar nomes de produtos/serviços aleatórios
const useNomeProdutoServicoAleatorio = () => {
  const produtosServicos = ["Banho", "Tosa", "Vacinação", "Ração", "Brinquedo", "Guia", "Coleira", "Shampoo", "Condicionador", "Petiscos"];
  return produtosServicos[Math.floor(Math.random() * produtosServicos.length)];
};

// Função para gerar preços aleatórios
const usePrecoAleatorio = () => {
  return Math.floor(10 + Math.random() * 90);
};

// Função para gerar pets aleatórios
const usePetAleatorio = () => {
  const nomesPets = ["Rex", "Bella", "Charlie", "Luna", "Max", "Lucy", "Buddy", "Molly", "Rocky", "Daisy"];
  const tipos = ["Cachorro", "Gato", "Pássaro", "Peixe", "Roedor"];
  const racas = ["Vira-lata", "Siamês", "Pastor", "Labrador", "Poodle"];
  const generos = ["Macho", "Fêmea"];
  const nome = nomesPets[Math.floor(Math.random() * nomesPets.length)];
  const tipo = tipos[Math.floor(Math.random() * tipos.length)];
  const raca = racas[Math.floor(Math.random() * racas.length)];
  const genero = generos[Math.floor(Math.random() * generos.length)];
  return { nome, tipo, raca, genero };
};

// Hook para popular a empresa
const usePopularEmpresa = (empresa) => {
  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);
  const [servicos, setServicos] = useState([]);

  const popularEmpresa = () => {
    let novosClientes = [];
    let novosProdutos = [];
    let novosServicos = [];

    for (let i = 0; i < 20; i++) {
      // Criar cliente
      const nome = useNomeAleatorio();
      const nomeSocial = useNomeAleatorio();
      const cpf = useCpfAleatorio();
      const rg = useRgAleatorio();
      const telefone = useTelefoneAleatorio();
      const pet = usePetAleatorio();
      const cliente = { nome, nomeSocial, cpf, rg, telefone, pet, produtosConsumidos: [], servicosConsumidos: [] };
      novosClientes.push(cliente);

      // Criar produto
      const nomeProduto = useNomeProdutoServicoAleatorio();
      const precoProduto = usePrecoAleatorio();
      const produto = { nome: nomeProduto, preco: precoProduto };
      novosProdutos.push(produto);

      // Criar serviço
      const nomeServico = useNomeProdutoServicoAleatorio();
      const precoServico = usePrecoAleatorio();
      const servico = { nome: nomeServico, preco: precoServico };
      novosServicos.push(servico);

      // Associar produtos consumidos pelo cliente (quantidade aleatória entre 1 e 5)
      const numProdutos = Math.floor(Math.random() * 5) + 1;
      for (let j = 0; j < numProdutos; j++) {
        const produtoConsumido = novosProdutos[Math.floor(Math.random() * novosProdutos.length)];
        cliente.produtosConsumidos.push(produtoConsumido);
      }

      // Associar serviços consumidos pelo cliente (quantidade aleatória entre 1 e 5)
      const numServicos = Math.floor(Math.random() * 5) + 1;
      for (let j = 0; j < numServicos; j++) {
        const servicoConsumido = novosServicos[Math.floor(Math.random() * novosServicos.length)];
        cliente.servicosConsumidos.push(servicoConsumido);
      }
    }

    setClientes(novosClientes);
    setProdutos(novosProdutos);
    setServicos(novosServicos);

    empresa.clientes = novosClientes;
    empresa.produtos = novosProdutos;
    empresa.servicos = novosServicos;
  };

  return { popularEmpresa, clientes, produtos, servicos };
};

export { useNomeAleatorio, useCpfAleatorio, useRgAleatorio, useTelefoneAleatorio, useNomeProdutoServicoAleatorio, usePrecoAleatorio, usePetAleatorio, usePopularEmpresa };
