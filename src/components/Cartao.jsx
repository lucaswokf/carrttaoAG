import React from "react";
import'./Cartao.css';
import logo1 from  '../assets/magalu.png';
import logo2 from '../assets/linkedin-logo.png';
import logo3 from '../assets/Whatt.png';
import logo4 from '../assets/reto.png';

function  Cartao(){
    return(
        <>
        <header></header>

        <img src={logo1} alt="magalu"  className="logo"/>
        <h1>Magazine luiza </h1>
        <p>📱Entrega rápida,atendimento top.   </p>
        <p className="p2">💳 E o melhor: cabe no seu bolso!</p> 
        <p className="pp">✨Vem ser feliz com a gente</p>

        <img src={logo4} alt="reto" className="logo4" />

        <a href="https://www.linkedin.com/" target="_blank">
            <img src={logo2} alt="linkedin" className="logo2"/>
        </a>

        <a href="https://web.whatsapp.com/" target="_blank">
        <img src={logo3} alt="Whatt" className="logo3" />
        </a>

        </>

    );

};
export default Cartao;