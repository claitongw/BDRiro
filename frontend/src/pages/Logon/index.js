import React from 'react';
import {FiLogIn} from 'react-icons/fi';

import './styles.css';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/Logo.png';

export default function Logon(){
    return(
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="BD HERO" height="200px"></img>
                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID"/>
                    <button className="button" type="submit">Entrar</button>

                    <a href="/register">
                        <FiLogIn size={16} color="#e02041"/>
                        Não tenho cadastro  
                    </a>
                </form>
            </section>
            <img src={heroesImg} alt="Heroes" height="500px"></img>
        </div>
    )
}

//00:41:00