/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { usePopularEmpresa } from './hooks';

const EmpresaComponent = ({ empresa }) => {
    const { popularEmpresa, clientes, produtos, servicos } = usePopularEmpresa(empresa);

    useEffect(() => {
        popularEmpresa();
    }, []); // Adiciona o array de dependências vazio para executar apenas uma vez

    return (
        <main>
            <div className='list-group'>
                <h1>Clientes</h1>
                {clientes.map((cliente, index) => (
                    <a href='#' className='list-group-item list-group-item-action list-group-item-primary'
                        key={index}>{cliente.nome} </a>
                ))}
            </div>

        </main>
    );
};

export default EmpresaComponent;


// {showModal && (
//     <div className="modal show" tabIndex={-1}>
//         <div className="modal-dialog">
//             <div className="modal-content">
//                 <div className="modal-header">
//                     <h5 className="modal-title">Detalhes do Cliente</h5>
//                     <button type="button" className="btn-close"></button>
//                 </div>
//                 <div className="modal-body">
//                     <p>nome: </p>
//                     <p>nome social:</p>
//                     <p>cpf: </p>
//                     <p>data emissão: </p>
//                     <p>pet</p>
//                     <p>nome pet</p>
//                     <p>nome tipo</p>
//                     <p>nome raça</p>
//                     <p>nome genero</p>
//                 </div>
//                 <div className="modal-footer">
//                     <button type="button" className="btn" >Alterar</button>
//                     <button type="button" className="btn" >Excluir</button>
//                 </div>
//             </div>
//         </div>
//     </div>
// )}



// funciona

// import React, { useEffect } from 'react';
// import { usePopularEmpresa } from './hooks';

// const EmpresaComponent = ({ empresa }) => {
//   const { popularEmpresa, clientes, produtos, servicos } = usePopularEmpresa(empresa);

//   useEffect(() => {
//     popularEmpresa();
//   }, []); // Adiciona o array de dependências vazio para executar apenas uma vez

//   return (
//     <main>
//     <div className='list-group'>
//       <h1>Clientes</h1>
//       <ul>
//         {clientes.map((cliente, index) => (
//         //     <a
//         //     href="#"
//         //     key={cliente}
//         //     className={`list-group-item list-group-item-action list-group-item-primary ${selectedItem === cliente ? tema : ""}`}
//         //     onClick={(e) => this.handleItemClick(cliente, e)}
//         // >
//         //     {cliente}
//         // </a>
//         <a href='#' key={index}>{cliente.nome} </a>
//         //   <li key={index}>{cliente.nome}</li>
//         ))}
//       </ul>
//       <h1>Produtos</h1>
//       <ul>
//         {produtos.map((produto, index) => (
//           <li key={index}>{produto.nome} - R${produto.preco}</li>
//         ))}
//       </ul>
//       <h1>Serviços</h1>
//       <ul>
//         {servicos.map((servico, index) => (
//           <li key={index}>{servico.nome} - R${servico.preco}</li>
//         ))}
//       </ul>
//     </div>
//     </main>
//   );
// };

// export default EmpresaComponent;
