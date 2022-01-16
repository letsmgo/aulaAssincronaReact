/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import'./App.css'

import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Primeiro from './components/basicos/Primeiro'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import './comunicacao/direta/Pai'
import Pai from "./comunicacao/direta/Pai";
import Super from "./comunicacao/indireta/Super";
import Input from "./components/form/Input";
import './components/contador/Contador'
import Contador from "./components/contador/Contador";

export default (props) => (
    <div className="App">
        <h1>Fundamentos do React</h1>
        <div className="Cards">
        <Card titulo="#01 Primeiro componente" color="#808080">
        <Primeiro></Primeiro>
        </Card>
        
        <Card titulo="#02 Componente com parametro" color="#808080">
        <ComParametro titulo="Titulo" 
         subtitulo="Subtitulo"/>
        </Card>

        <Card titulo="#03 Componente com filhos" color="#808080">
            <ComFilhos>
                <ul>
                    <li>Jao</li>
                    <li>Ze</li>
                    <li>Quim</li>
                    <li>Neto</li>
                </ul>
            </ComFilhos>
        </Card>

        <Card titulo="#04 Repeticao" color="#808080">
            <Repeticao></Repeticao>
        </Card>

        <Card titulo="#05 Condicional versão 1" color="#808080">
            <Condicional numero={11}></Condicional>
        </Card>

        <Card titulo="#06 Condicional versão 2" color="#808080">
            <CondicionalComIf numero={1122}></CondicionalComIf>
        </Card>

        <Card titulo="#07 Comunicação direta" color="#808080">
            <Pai sobrenome="Freitas"></Pai>
        </Card>

        <Card titulo="#08 Comunicação indireta" color="#808080">
            <Super></Super>
        </Card>

        <Card titulo="#09 Input" color="#808080">
            <Input></Input>
        </Card>
        
        <Card titulo="#10 Contador" color="#808080">
            <Contador passo={10} valor={100}></Contador>
        </Card>
        </div>

    </div>
)
