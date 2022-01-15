/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import'./App.css'

import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Primeiro from './components/Primeiro'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'
import './comunicacao/direta/Pai'
import Pai from "./comunicacao/direta/Pai";
import Super from "./comunicacao/indireta/Super";


export default (props) => (
    <div className="App">
        <Card titulo="#01 Primeiro componente" color="#FA6900">
        <Primeiro></Primeiro>
        </Card>
        
        <Card titulo="#02 Componente com parametro" color="#FA6900">
        <ComParametro titulo="Titulo" 
         subtitulo="Subtitulo"/>
        </Card>

        <Card titulo="#03 Componente com filhos" color="#FA6900">
            <ComFilhos>
                <ul>
                    <li>Jao</li>
                    <li>Ze</li>
                    <li>Quim</li>
                    <li>Neto</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#04 Repeticao" color="#FA6900">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#05 Condicional versão 1" color="#FA6900">
            <Condicional numero={11}></Condicional>
        </Card>

        <Card titulo="#06 Condicional versão 2" color="#FA6900">
            <CondicionalComIf numero={1122}></CondicionalComIf>
        </Card>

        <Card titulo="#07 Comunicação direta" color="#FA6900">
            <Pai sobrenome="Freitas"></Pai>
        </Card>

        <Card titulo="#08 Comunicação indireta" color="#FA6900">
            <Super></Super>
        </Card>

    </div>
)
