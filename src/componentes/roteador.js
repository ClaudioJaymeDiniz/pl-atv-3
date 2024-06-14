/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListagemCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import ListaProdutos from "./listaProduto";
import ListaServisos from "./listaServico";
import Compras from "./compras";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }
    const empresa = {
        clientes: [],
        produtos: [],
        servicos: [],
      };

    const construirView = () => {
        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={
                        ['Clientes', 'Cadastros','Produtos','Serviços','Compras']} />
                    <ListagemCliente tema="#e3f2fd" empresa={empresa} />
                </>
            )
        } else if(tela === 'Produtos'){
            return (
                <>
                <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={
                    ['Clientes', 'Cadastros','Produtos', 'Serviços','Compras']} />
                <ListaProdutos tema="#e3f2fd" empresa={empresa} />
                </>
            )

        }else if(tela === 'Compras'){
            return (
                <>
                <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={
                    ['Clientes', 'Cadastros','Produtos', 'Serviços','Compras']} />
                <Compras tema="#e3f2fd" empresa={empresa} />
                </>
            )

        }else if(tela === 'Serviços'){
            return (
                <>
                <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={
                    ['Clientes', 'Cadastros','Produtos','Serviços','Compras']} />
                <ListaServisos tema="#e3f2fd" empresa={empresa} />
                </>
            )

        } else {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={
                        ['Clientes', 'Cadastros','Produtos','Serviços','Compras']} />
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        }
    }

    return (
        construirView()
    )
}