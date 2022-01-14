/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import'./App.css'

import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Primeiro from './components/Primeiro'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'


export default (props) => (
    <div className="App">
        <Card titulo="#01 Primeiro componente">
        <Primeiro></Primeiro>
        </Card>
        
        <Card titulo="#02 Componente com parametro">
        <ComParametro titulo="Titulo" 
         subtitulo="Subtitulo"/>
        </Card>

        <Card titulo="#03 Componente com filhos">
            <ComFilhos>
                <ul>
                    <li>Jao</li>
                    <li>Ze</li>
                    <li>Quim</li>
                    <li>Neto</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#04 Repeticao">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#05 Condicional versão 1">
            <Condicional numero={11}></Condicional>
        </Card>

    </div>
)
