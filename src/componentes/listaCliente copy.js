// /* eslint-disable jsx-a11y/anchor-is-valid */
// export default function ListaCliente(props) {
//     let tema = props.tema
//     return (
//         <div className="container-fluid">
//             <div className="list-group">
//                 <a href="#" className="list-group-item list-group-item-action">Cliente 1</a>
//                 <a href="#" className="list-group-item list-group-item-action">Cliente 2</a>
//                 <a href="#" className="list-group-item list-group-item-action">Cliente 3</a>
//                 <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }} >Cliente 4</a>
//                 <a href="#" className="list-group-item list-group-item-action">Cliente 5</a>
//                 <a href="#" className="list-group-item list-group-item-action">Cliente 6</a>
//             </div>
//         </div>
//     )
// }

/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import { usePopularEmpresa } from './hooks';

// const ListaCliente = ({ tema }) => {
//     const [selectedItem, setSelectedItem] = useState(null);
//     const [showModal, setShowModal] = useState(false);

//     const handleItemClick = (item, e) => {
//         e.preventDefault();
//         setSelectedItem(item);
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//     };

//     const handleAlterar = () => {
//         console.log(`Alterar cliente: ${selectedItem}`);
//         handleCloseModal();
//     };

//     const handleExcluir = () => {
//         console.log(`Deletar cliente: ${selectedItem}`);
//         handleCloseModal();
//     };

//     return (
//         <main>
//             <div className="list-group">
//                 {["Cliente 1", "Cliente 2", "Cliente 3", "Cliente 4", "Cliente 5", "Cliente 6"].map(cliente => (
//                     <a
//                         href="#"
//                         key={cliente}
//                         className={`list-group-item list-group-item-action ${selectedItem === cliente ? "list-group-item-primary" : ""}`}
//                         style={cliente === "Cliente 4" ? { backgroundColor: tema } : {}}
//                         onClick={(e) => handleItemClick(cliente, e)}
//                     >
//                         {cliente}
//                     </a>
//                 ))}
//             </div>
//             {showModal && (
//                 <div className="modal show" tabIndex={-1} style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
//                     <div className="modal-dialog">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title">Detalhes do Cliente</h5>
//                                 <button type="button" className="btn-close" onClick={handleCloseModal}></button>
//                             </div>
//                             <div className="modal-body">
//                                 <p>nome: {selectedItem}</p>
//                                 <p>nome social: {selectedItem}</p>
//                                 <p>cpf: {selectedItem}</p>
//                                 <p>data emissão: {selectedItem}</p>
//                                 <p>email: {selectedItem}@email.com</p>
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-primary" onClick={handleAlterar}>Alterar</button>
//                                 <button type="button" className="btn btn-danger" onClick={handleExcluir}>Excluir</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </main>
//     );
// };

// export default ListaCliente;



// simples

// import React, { useEffect } from 'react';
// import { usePopularEmpresa } from './hooks';

// const EmpresaComponent = ({ empresa }) => {
//   const { popularEmpresa, clientes, produtos, servicos } = usePopularEmpresa(empresa);

//   useEffect(() => {
//     popularEmpresa();
//   }, []);

//   return (
//     <div>
//       <h1>Clientes</h1>
//       <ul>
//         {clientes.map((cliente, index) => (
//           <li key={index}>{cliente.nome}</li>
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
//   );
// };

// export default EmpresaComponent;
