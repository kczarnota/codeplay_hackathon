import React from "react";
import "./navigation.scss";
import {Link} from "react-router-dom";

export const Navigation = () => {

    return (
        <header>
            <nav className='navigation'>
                <div className='navigation__group'>
                    <button className='navigation__item'><Link to="/">Strona główna</Link></button>
                    <button className='navigation__item'><Link to="/lokaty">Lokaty</Link></button>
                    <button className='navigation__item'><a href="#">Przelewy</a></button>
                </div>
                <div className='navigation__group'>

                </div>
                <div className='navigation__group'>
                    <button className='navigation__item'><a href="#">Wyloguj</a></button>
                </div>
            </nav>
            <nav className='navigation navigation--mobile'>
                <div className='navigation__group'>
                </div>
            </nav>
        </header>
    )
};
