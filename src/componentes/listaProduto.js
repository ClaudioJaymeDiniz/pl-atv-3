/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { usePopularEmpresa } from './hooks';

const ListaProdutos = ({ empresa }) => {
    const { popularEmpresa, produtos } = usePopularEmpresa(empresa);

    useEffect(() => {
        popularEmpresa();
    }, []); // Adiciona o array de dependências vazio para executar apenas uma vez

    return (
        <main>
            <div className='list-group'>
                <h1>Produtos</h1>
                {produtos.map((produto, index) => (
                    <a href='#' className='list-group-item list-group-item-action list-group-item-primary'
                        key={index}>{produto.nome} </a>
                ))}
            </div>

        </main>
    );
};

export default ListaProdutos;

