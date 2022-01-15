/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Filho from './Filho'

export default props =>
    <div>
        <Filho {...props}> Joao </Filho>
        <Filho sobrenome={props.sobrenome}> Maria </Filho>
        <Filho sobrenome="Marçal"> Jose </Filho>
    </div>