import React from 'react'


function Primeiro() {
    return (
        <div>
            <h1>Primeiro componente</h1>
            <h2>Exemplo de um componente React</h2>
        </div>
    )
}

/* EXEMPLO DE COMO APLICAR SEM UTILIZAR A DIV #1

function Primeiro() {
    return (
         <>
            <h1>Primeiro componente</h1>
            <h2>Exemplo de um componente React</h2>
        </>
    )
}
*/

/* EXEMPLO DE COMO APLICAR SEM UTILIZAR A DIV #2

function Primeiro() {
    return (
        <React.Fragment>
            <h1>Primeiro componente</h1>
            <h2>Exemplo de um componente React</h2>
        </React.Fragment>
    )
}
*/

/* EXEMPLO DE COMO EXPORTAR DIRETO A FUNCAO #1

 export default function Primeiro() {
    return (
        <React.Fragment>
            <h1>Primeiro componente</h1>
            <h2>Exemplo de um componente React</h2>
        </React.Fragment>
    )
}
*/

/* EXEMPLO DE FUNCAO DEFININDO UMA ARROW FUNCTION #1

 export default function () => {
    return (
        <React.Fragment>
            <h1>Primeiro componente</h1>
            <h2>Exemplo de um componente React</h2>
        </React.Fragment>
     )
}
*/

/* EXEMPLO DE FUNCAO DEFININDO UMA ARROW FUNCTION #2

 export default function () => 
    <React.Fragment>
        <h1>Primeiro componente</h1>
        <h2>Exemplo de um componente React</h2>
    </React.Fragment>

    ou

    <>
        <h1>Primeiro componente</h1>
        <h2>Exemplo de um componente React</h2>
    </>
 
*/

export default Primeiro