/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { usePopularEmpresa } from './hooks';

const ListagemClientes = ({ empresa }) => {
    const { popularEmpresa, clientes, setClientes } = usePopularEmpresa(empresa);
    const [showModal, setShowModal] = useState(false);
    const [clienteSelecionado, setClienteSelecionado] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [clienteEditando, setClienteEditando] = useState(null);

    useEffect(() => {
        popularEmpresa();
    }, [popularEmpresa]);

    const abrirModal = (cliente) => {
        setClienteSelecionado(cliente);
        setShowModal(true);
    };

    const fecharModal = () => {
        setShowModal(false);
        setClienteSelecionado(null);
    };

    const abrirModalEditar = (cliente) => {
        setClienteEditando({ ...cliente });
        setShowEditModal(true);
    };

    const fecharModalEditar = () => {
        setShowEditModal(false);
        setClienteEditando(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setClienteEditando({ ...clienteEditando, [name]: value });
    };

    const salvarAlteracoes = () => {
        const novosClientes = clientes.map(cliente =>
            cliente === clienteSelecionado ? clienteEditando : cliente
        );
        setClientes(novosClientes);
        localStorage.setItem('clientes', JSON.stringify(novosClientes));
        fecharModalEditar();
        fecharModal();
    };

    const excluirCliente = () => {
        const novosClientes = clientes.filter(cliente => cliente !== clienteSelecionado);
        setClientes(novosClientes);
        localStorage.setItem('clientes', JSON.stringify(novosClientes));
        fecharModal();
    };

    return (
        <main>
            <div className='list-group'>
                <h1>Clientes</h1>
                {clientes.map((cliente, index) => (
                    <a
                        href='#'
                        className='list-group-item list-group-item-action list-group-item-primary'
                        key={index}
                        onClick={() => abrirModal(cliente)}
                    >
                        {cliente.nome}
                    </a>
                ))}
            </div>

            {showModal && clienteSelecionado && (
                <div className="modal show" tabIndex={-1} style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Detalhes do Cliente</h5>
                                <button type="button" className="btn-close" onClick={fecharModal}></button>
                            </div>
                            <div className="modal-body">
                                <p>Nome: {clienteSelecionado.nome}</p>
                                <p>Nome Social: {clienteSelecionado.nomeSocial}</p>
                                <p>CPF: {clienteSelecionado.cpf.cpf}</p>
                                <p>Data Emissão: {new Date(clienteSelecionado.cpf.dataEmissao).toLocaleDateString()}</p>
                                <p>RG: {clienteSelecionado.rg}</p>
                                <p>Data Emissão: {new Date(clienteSelecionado.rg.dataEmissao).toLocaleDateString()}</p>
                                <p>Telefone: {clienteSelecionado.telefone}</p>
                                <p>Pet:</p>
                                <p>Nome Pet: {clienteSelecionado.pet.nome}</p>
                                <p>Tipo: {clienteSelecionado.pet.tipo}</p>
                                <p>Raça: {clienteSelecionado.pet.raca}</p>
                                <p>Gênero: {clienteSelecionado.pet.genero}</p>
                                <ul>Produtos Consumidos
                                    {clienteSelecionado.produtosConsumidos.map((produto, index) => (
                                        <li key={index}>{produto.nome}</li>
                                    ))}
                                </ul>
                                <ul>Serviços Consumidos
                                    {clienteSelecionado.servicosConsumidos.map((servico, index) => (
                                        <li key={index}>{servico.nome}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => abrirModalEditar(clienteSelecionado)}>Alterar</button>
                                <button type="button" className="btn btn-danger" onClick={excluirCliente}>Excluir</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showEditModal && clienteEditando && (
                <div className="modal show" tabIndex={-1} style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Alterar Cliente</h5>
                                <button type="button" className="btn-close" onClick={fecharModalEditar}></button>
                            </div>
                            <div className="modal-body">
                                <div className="input-group mb-3">
                                    <label>Nome:
                                        <input type="text" name="nome" value={clienteEditando.nome} onChange={handleInputChange} />
                                    </label>
                                </div>
                                <div className="input-group mb-3">
                                    <label>Nome Social:
                                        <input type="text" name="nomeSocial" value={clienteEditando.nomeSocial} onChange={handleInputChange} />
                                    </label>
                                </div>
                                <div className="input-group mb-3">
                                    <label>CPF:
                                        <input type="text" name="cpf" value={clienteEditando.cpf.cpf} onChange={(e) => {
                                            const newCpf = { ...clienteEditando.cpf, cpf: e.target.value };
                                            setClienteEditando({ ...clienteEditando, cpf: newCpf });
                                        }} />
                                    </label>
                                </div>
                                <div className="input-group mb-3">
                                    <label>Data Emissão:
                                        <input type="date" name="dataEmissao" value={new Date(clienteEditando.cpf.dataEmissao).toISOString().substring(0, 10)} onChange={(e) => {
                                            const newCpf = { ...clienteEditando.cpf, dataEmissao: new Date(e.target.value) };
                                            setClienteEditando({ ...clienteEditando, cpf: newCpf });
                                        }} />
                                    </label>
                                </div>
                                <div className="input-group mb-3">
                                    <label>RG:
                                        <input type="text" name="rg" value={clienteEditando.cpf.cpf} onChange={(e) => {
                                            const newCpf = { ...clienteEditando.cpf, cpf: e.target.value };
                                            setClienteEditando({ ...clienteEditando, cpf: newCpf });
                                        }} />
                                    </label>
                                </div>
                                <div className="input-group mb-3">
                                    <label>Data Emissão:
                                        <input type="date" name="dataEmissao" value={new Date(clienteEditando.cpf.dataEmissao).toISOString().substring(0, 10)} onChange={(e) => {
                                            const newCpf = { ...clienteEditando.cpf, dataEmissao: new Date(e.target.value) };
                                            setClienteEditando({ ...clienteEditando, cpf: newCpf });
                                        }} />
                                    </label>
                                </div>
                                <div className="input-group mb-3">
                                    <label>Nome Pet:
                                        <input type="text" name="nomePet" value={clienteEditando.pet.nome} onChange={(e) => {
                                            const newPet = { ...clienteEditando.pet, nome: e.target.value };
                                            setClienteEditando({ ...clienteEditando, pet: newPet });
                                        }} />
                                    </label>
                                </div>
                                <div className="input-group mb-3">
                                    <label>Tipo:
                                        <input type="text" name="tipo" value={clienteEditando.pet.tipo} onChange={(e) => {
                                            const newPet = { ...clienteEditando.pet, tipo: e.target.value };
                                            setClienteEditando({ ...clienteEditando, pet: newPet });
                                        }} />
                                    </label>
                                </div>
                                <div className="input-group mb-3">
                                    <label>Raça:
                                        <input type="text" name="raca" value={clienteEditando.pet.raca} onChange={(e) => {
                                            const newPet = { ...clienteEditando.pet, raca: e.target.value };
                                            setClienteEditando({ ...clienteEditando, pet: newPet });
                                        }} />
                                    </label>
                                </div>
                                <div className="input-group mb-3">
                                    <label>Gênero:
                                        <input type="text" name="genero" value={clienteEditando.pet.genero} onChange={(e) => {
                                            const newPet = { ...clienteEditando.pet, genero: e.target.value };
                                            setClienteEditando({ ...clienteEditando, pet: newPet });
                                        }} />
                                    </label>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={salvarAlteracoes}>Salvar</button>
                                <button type="button" className="btn btn-secondary" onClick={fecharModalEditar}>Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </main >
    );
};

export default ListagemClientes;
