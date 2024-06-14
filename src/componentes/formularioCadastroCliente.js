import FormularioCadastroPets from "./formularioCadastroPet"
import FormularioCadastroProdutos from "./formularioCadastroProduto"
import FormularioCadastroServicos from "./formularioCadastroServico"
export default function FormularioCadastroCliente(props) {
    let tema = props.tema
    return (
        <div className="container-fluid">
            <h2>Cliente</h2>
            <form>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome" aria-label="Nome" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome social" aria-label="Nome social" aria-describedby="basic-addon1" />
                </div>
                <div className="dados-input">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="CPF" aria-label="CPF" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="date" className="form-control" placeholder="Data de Emissao " aria-label="Data de Emissao" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Telefone" aria-label="Telefone" aria-describedby="basic-addon1" />
                </div>
                <div className="dados-input">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="RG" aria-label="RG" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group mb-3">
                        <input type="date" className="form-control" placeholder="Data de Emissao" aria-label="Data de Emissao" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="button" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>

            <div className="container-cadastros">
                <div className="container-produtos">
                    <h2>Pets</h2>
                    <FormularioCadastroPets tema='#e3f2fd' />
                </div>
                <div className="container-produtos">
                    <h2>Produtos</h2>
                    <FormularioCadastroProdutos tema='#e3f2fd' />
                </div>
                <div className="container-servicos">
                    <h2>Serviços</h2>
                    <FormularioCadastroServicos tema='#e3f2fd' />
                </div>
            </div>
        </div>
    )
}