/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './components/layout/Card'
import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'
import'./App.css'

 
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'



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
    </div>

    /*
   COMENTADO PARA FINS DIDÁTICOS
    

         
         
   */

)