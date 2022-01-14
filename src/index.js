import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import ComFilhos from './components/ComFilhos'

/* 
COMENTADO PARA FINS DIDÁTICOS
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
*/

ReactDOM.render(
   <div>
       <ComFilhos>
           <ul>
               <li>Jao</li>
               <li>Ze</li>
               <li>Quim</li>
               <li>Neto</li>
           </ul>
       </ComFilhos>
   </div>
    /*
   COMENTADO PARA FINS DIDÁTICOS
         <Primeiro></Primeiro>
         <ComParametro titulo="Estudo de React" 
         subtitulo="Para iniciantes"/>
   */
    
    ,document.getElementById('root')
)