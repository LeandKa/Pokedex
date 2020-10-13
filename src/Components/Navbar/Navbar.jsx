import React from 'react';
import './Navbar.css';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Navbar() {
    return (
       <div className='container-navbar'>
           
           <a className="container-navbar-logo" href="/">Pokedex</a>

           <ul className="container-navbar-ul">
               <li><a className="container-navbar-li" href="/My-Pokedex">MyPokedex</a></li>
               <li><a href="https://github.com/LeandKa" className="container-navbar-li"><GitHubIcon></GitHubIcon></a></li>
           </ul>
       </div>
    )
}
