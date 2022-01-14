import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import './components/layout/Card'
import Card from './components/layout/Card'
import Primeiro from './components/Primeiro'

/* 
COMENTADO PARA FINS DIDÁTICOS
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'

*/

ReactDOM.render(
   <div>
       <Card titulo="Primeiro componente">
            <Primeiro></Primeiro>
       </Card>
       <Card titulo="Exercício 1">
            Conteudo
       </Card>
   </div>
    /*
   COMENTADO PARA FINS DIDÁTICOS
           <ComFilhos>
           <ul>
               <li>Jao</li>
               <li>Ze</li>
               <li>Quim</li>
               <li>Neto</li>
           </ul>
       </ComFilhos>

         
         <ComParametro titulo="Estudo de React" 
         subtitulo="Para iniciantes"/>
   */
    
    ,document.getElementById('root')
)