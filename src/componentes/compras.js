import CompraServicos from "./compraServico"
import CompraProdutos from "./compraProduto"

export default function Compras(props) {
    return (
        <div className="container-fluid">
            <div className="container-cadastros">
                <div className="container-produtos">
                    <h2>Produtos</h2>
                    <CompraProdutos tema='#e3f2fd' />
                </div>
                <div className="container-servicos">
                    <h2>Serviços</h2>
                    <CompraServicos tema='#e3f2fd' />
                </div>
            </div>
        </div>
    )
}