/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useCallback } from 'react';

// Funções para gerar dados aleatórios
const useNomeAleatorio = () => {
    const nomes = ['João', 'Maria', 'José', 'Ana', 'Paulo', 'Carla', 'Pedro', 'Lucia'];
    return nomes[Math.floor(Math.random() * nomes.length)];
};

const useCpfAleatorio = () => {
    const cpf = Math.floor(10000000000 + Math.random() * 90000000000).toString();
    return { cpf: cpf, dataEmissao: new Date() };
};

const useRgAleatorio = () => {
    const rg = Math.floor(10000000 + Math.random() * 90000000).toString();
    return { rg: rg, dataEmissao: new Date()};
};

const useTelefoneAleatorio = () => {
    const telefone = Math.floor(100000000 + Math.random() * 900000000).toString();
    return telefone;
};

const usePetAleatorio = () => {
    const pets = ['Cachorro', 'Gato', 'Pássaro', 'Peixe'];
    const racas = ['Beta', 'Labrador', 'Poodle', 'Persa'];
    const generos = ['Masculino', 'Feminino'];
    return {
        nome: useNomeAleatorio(),
        tipo: pets[Math.floor(Math.random() * pets.length)],
        raca: racas[Math.floor(Math.random() * racas.length)],
        genero: generos[Math.floor(Math.random() * generos.length)],
    };
};

const useNomeProdutoServicoAleatorio = () => {
    const produtosServicos = ['Banho', 'Tosa', 'Vacina', 'Ração', 'Brinquedo'];
    return produtosServicos[Math.floor(Math.random() * produtosServicos.length)];
};

const usePrecoAleatorio = () => {
    return (Math.random() * 100).toFixed(2);
};

const usePopularEmpresa = (empresa) => {
    const [clientes, setClientes] = useState(() => {
        const savedClientes = localStorage.getItem('clientes');
        return savedClientes ? JSON.parse(savedClientes) : [];
    });

    const [produtos, setProdutos] = useState(() => {
        const savedProdutos = localStorage.getItem('produtos');
        return savedProdutos ? JSON.parse(savedProdutos) : [];
    });

    const [servicos, setServicos] = useState(() => {
        const savedServicos = localStorage.getItem('servicos');
        return savedServicos ? JSON.parse(savedServicos) : [];
    });

    const popularEmpresa = useCallback(() => {
        if (clientes.length > 0 && produtos.length > 0 && servicos.length > 0) {
            return;
        }

        let novosClientes = [];
        let novosProdutos = [];
        let novosServicos = [];

        for (let i = 0; i < 20; i++) {
            const nome = useNomeAleatorio();
            const nomeSocial = useNomeAleatorio();
            const cpf = useCpfAleatorio();
            const rg = useRgAleatorio();
            const telefone = useTelefoneAleatorio();
            const pet = usePetAleatorio();
            const cliente = { nome, nomeSocial, cpf, rg, telefone, pet, produtosConsumidos: [], servicosConsumidos: [] };
            novosClientes.push(cliente);

            const nomeProduto = useNomeProdutoServicoAleatorio();
            const precoProduto = usePrecoAleatorio();
            const produto = { nome: nomeProduto, preco: precoProduto };
            novosProdutos.push(produto);

            const nomeServico = useNomeProdutoServicoAleatorio();
            const precoServico = usePrecoAleatorio();
            const servico = { nome: nomeServico, preco: precoServico };
            novosServicos.push(servico);

            const numProdutos = Math.floor(Math.random() * 5) + 1;
            for (let j = 0; j < numProdutos; j++) {
                const produtoConsumido = novosProdutos[Math.floor(Math.random() * novosProdutos.length)];
                cliente.produtosConsumidos.push(produtoConsumido);
            }

            const numServicos = Math.floor(Math.random() * 5) + 1;
            for (let j = 0; j < numServicos; j++) {
                const servicoConsumido = novosServicos[Math.floor(Math.random() * novosServicos.length)];
                cliente.servicosConsumidos.push(servicoConsumido);
            }
        }

        setClientes(novosClientes);
        setProdutos(novosProdutos);
        setServicos(novosServicos);

        localStorage.setItem('clientes', JSON.stringify(novosClientes));
        localStorage.setItem('produtos', JSON.stringify(novosProdutos));
        localStorage.setItem('servicos', JSON.stringify(novosServicos));

        empresa.clientes = novosClientes;
        empresa.produtos = novosProdutos;
        empresa.servicos = novosServicos;
    }, [clientes.length, produtos.length, servicos.length, empresa]);

    return { popularEmpresa, clientes, setClientes, produtos, servicos };
};

export { usePopularEmpresa };
