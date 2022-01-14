import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'

ReactDOM.render(
    <div>
         <Primeiro></Primeiro>
         <ComParametro titulo="Estudo de React" 
         subtitulo="Para iniciantes"/>
    </div>
   
    ,document.getElementById('root')
)