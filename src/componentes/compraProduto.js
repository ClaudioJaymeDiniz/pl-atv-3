
export default function CompraProdutos(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
            <form>
                <div className="input-group mb-3">
                    <select className="form-select"
                        value="clienteNome">Clientes
                        <option>Cliente 1</option>
                        <option>Cliente 2</option>
                        <option>Cliente 3</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <select className="form-select"
                        value="Produto">Produtos
                        <option>Produto 1</option>
                        <option>Produto 2</option>
                        <option>Produto 3</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control"
                        placeholder="Quantidade" aria-label="Quantidade" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    )
}