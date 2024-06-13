/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { usePopularEmpresa } from './hooks';

const ListaProdutos = ({ empresa }) => {
    const { popularEmpresa, produtos, setProdutos } = usePopularEmpresa(empresa);
    const [showModal, setShowModal] = useState(false);
    const [produtoSelecionado, setProdutoSelecionado] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [produtoEditando, setProdutoEditando] = useState(null);

    useEffect(() => {
        popularEmpresa();
    }, [popularEmpresa]);

    const abrirModal = (produto) => {
        setProdutoSelecionado(produto);
        setShowModal(true);
    };

    const fecharModal = () => {
        setShowModal(false);
        setProdutoSelecionado(null);
    };

    const abrirModalEditar = (produto) => {
        setProdutoEditando({ ...produto });
        setShowEditModal(true);
    };

    const fecharModalEditar = () => {
        setShowEditModal(false);
        setProdutoEditando(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProdutoEditando({ ...produtoEditando, [name]: value });
    };

    const salvarAlteracoes = () => {
        const novosProdutos = produtos.map(produto =>
            produto === produtoSelecionado ? produtoEditando : produto
        );
        setProdutos(novosProdutos);
        localStorage.setItem('produtos', JSON.stringify(novosProdutos));
        fecharModalEditar();
        fecharModal();
    };

    const excluirProduto = () => {
        const novosProdutos = produtos.filter(produto => produto !== produtoSelecionado);
        setProdutos(novosProdutos);
        localStorage.setItem('produtos', JSON.stringify(novosProdutos));
        fecharModal();
    };

    return (
        <main>
            <div className='list-group'>
                <h1>Produtos</h1>
                {produtos.map((produto, index) => (
                    <a 
                        href='#' 
                        className='list-group-item list-group-item-action list-group-item-primary'
                        key={index} 
                        onClick={() => abrirModal(produto)}
                    >
                        {produto.nome}
                    </a>
                ))}
            </div>

            {showModal && produtoSelecionado && (
                <div className="modal show" tabIndex={-1} style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Detalhes do Produto</h5>
                                <button type="button" className="btn-close" onClick={fecharModal}></button>
                            </div>
                            <div className="modal-body">
                                <p>Nome: {produtoSelecionado.nome}</p>
                                <p>Preço: {produtoSelecionado.preco}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" onClick={() => abrirModalEditar(produtoSelecionado)}>Alterar</button>
                                <button type="button" className="btn btn-danger" onClick={excluirProduto}>Excluir</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showEditModal && produtoEditando && (
                <div className="modal show" tabIndex={-1} style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Alterar Produto</h5>
                                <button type="button" className="btn-close" onClick={fecharModalEditar}></button>
                            </div>
                            <div className="modal-body">
                                <label>Nome:
                                    <input type="text" name="nome" value={produtoEditando.nome} onChange={handleInputChange} />
                                </label>
                                <label>Preço:
                                    <input type="number" name="preco" value={produtoEditando.preco} onChange={handleInputChange} />
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

export default ListaProdutos;
