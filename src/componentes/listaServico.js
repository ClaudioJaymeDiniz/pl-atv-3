/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { usePopularEmpresa } from './hooks';

const ListaServicos = ({ empresa }) => {
    const { popularEmpresa, servicos, setServicos } = usePopularEmpresa(empresa);
    const [showModal, setShowModal] = useState(false);
    const [servicoSelecionado, setServicoSelecionado] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [servicoEditando, setServicoEditando] = useState(null);

    useEffect(() => {
        popularEmpresa();
    }, [popularEmpresa]);

    const abrirModal = (servico) => {
        setServicoSelecionado(servico);
        setShowModal(true);
    };

    const fecharModal = () => {
        setShowModal(false);
        setServicoSelecionado(null);
    };

    const abrirModalEditar = (servico) => {
        setServicoEditando({ ...servico });
        setShowEditModal(true);
    };

    const fecharModalEditar = () => {
        setShowEditModal(false);
        setServicoEditando(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setServicoEditando({ ...servicoEditando, [name]: value });
    };

    const salvarAlteracoes = () => {
        const novosServicos = servicos.map(servico =>
            servico === servicoSelecionado ? servicoEditando : servico
        );
        setServicos(novosServicos);
        localStorage.setItem('servicos', JSON.stringify(novosServicos));
        fecharModalEditar();
        fecharModal();
    };

    const excluirServico = () => {
        const novosServicos = servicos.filter(servico => servico !== servicoSelecionado);
        setServicos(novosServicos);
        localStorage.setItem('servicos', JSON.stringify(novosServicos));
        fecharModal();
    };

    return (
        <main>
            <div className='list-group'>
                <h1>Serviços</h1>
                {servicos.map((servico, index) => (
                    <a 
                        href='#' 
                        className='list-group-item list-group-item-action list-group-item-primary'
                        key={index} 
                        onClick={() => abrirModal(servico)}
                    >
                        {servico.nome}
                    </a>
                ))}
            </div>

            {showModal && servicoSelecionado && (
                <div className="modal show" tabIndex={-1} style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Detalhes do Serviço</h5>
                                <button type="button" className="btn-close" onClick={fecharModal}></button>
                            </div>
                            <div className="modal-body">
                                <p>Nome: {servicoSelecionado.nome}</p>
                                <p>Preço: {servicoSelecionado.preco}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => abrirModalEditar(servicoSelecionado)}>Alterar</button>
                                <button type="button" className="btn btn-danger" onClick={excluirServico}>Excluir</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showEditModal && servicoEditando && (
                <div className="modal show" tabIndex={-1} style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Alterar Serviço</h5>
                                <button type="button" className="btn-close" onClick={fecharModalEditar}></button>
                            </div>
                            <div className="modal-body">
                                <label>Nome:
                                    <input type="text" name="nome" value={servicoEditando.nome} onChange={handleInputChange} />
                                </label>
                                <label>Preço:
                                    <input type="number" name="preco" value={servicoEditando.preco} onChange={handleInputChange} />
                                </label>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={salvarAlteracoes}>Salvar</button>
                                <button type="button" className="btn btn-secondary" onClick={fecharModalEditar}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

export default ListaServicos;
