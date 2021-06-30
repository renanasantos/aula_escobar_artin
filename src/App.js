import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"  

import Administrativa from './admin/Administrativa'
import Site from './site/Site'
import Login from './login/login'
import axios from 'axios'

const Autenticado = async () => {
    var token = localStorage.getItem('NossoToken')
    var bearer = `Bearer ${token}`

    const url = "https://renanas-trabalhofinal-artin.herokuapp.com/usuarios/lista"
    await axios
            .get(
                url,
                {
                    headers: { "Authorization": bearer }
                }
            )
            .then( retorno => {
                if (retorno.data == "Token inválido ou já expirou") {
                    console.log(retorno.data)
                    return false
                }

                return true
            })
}

const RotaPrivada = ( { component: Component, ...rest } ) => {
    return (
        <Route
            { ...rest }
            render = {
                    props => Autenticado() ? (
                        <Component { ...props } { ...rest } />
                    ) : (
                        <Redirect to="/login" />
                    )
            }
        />
    )
}

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Site />
                </Route>

                <RotaPrivada path="/admin" component={ Administrativa } />
                <RotaPrivada path="/renan" component={ Administrativa } />

                <Route path="/login" component={ Login } />
            </Switch>
        </Router>
    )
}

export default App