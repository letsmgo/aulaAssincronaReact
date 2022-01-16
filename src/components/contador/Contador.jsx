/* eslint-disable import/no-anonymous-default-export */

import React, { Component } from 'react'
import './Contador.css'
import Display from './Display'
import PassoForm from './PassoForm'
import Button from './Button'

export default class Contador extends Component {
    
    state = {
        passo: this.props.passo || 1,
        valor: this.props.valor || 10
    }

    inc = () => {
        this.setState({
            valor: this.state.valor + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            valor: this.state.valor - this.state.passo
        })
    }

    mudarPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso
        })
    }

    render(){
        return(
            <div className='Contador'>
                
                <h2>Contador</h2>

                <PassoForm passo={this.state.passo}
                onPassoChange={this.mudarPasso}></PassoForm>                
                <Display valor={this.state.valor}></Display>           
                <Button onInc={this.inc} onDec={this.dec}></Button>                

            </div>
        )
    }
}
