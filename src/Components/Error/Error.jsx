import React, { Component } from 'react';
import './Error.css';
import { FaExclamation } from 'react-icons/fa';;

 class Error extends Component {
    render(){
        return (
            <div className="container-error">
                <span className="error-span">Nenhum Resultado encontrado <span className="error"><FaExclamation></FaExclamation></span></span>
            </div>
        )
    }
}



export default  Error;
