/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { usePopularEmpresa } from './hooks';

const ListaServisos = ({ empresa }) => {
  const { popularEmpresa, servicos } = usePopularEmpresa(empresa);

  useEffect(() => {
    popularEmpresa();
  }, []); // Adiciona o array de dependências vazio para executar apenas uma vez

  return (
    <main>
      <div className='list-group'>
        <h1>Servicos</h1>
        {servicos.map((servicos, index) => (
          <a href='#' className='list-group-item list-group-item-action list-group-item-primary'
            key={index}>{servicos.nome} </a>
        ))}

      </div>

    </main>
  );
};

export default ListaServisos;

