import React from 'react';
import { useHistory } from 'react-router-dom';
import navStyle from './nav.module.css'

function Nav() {

    const history = useHistory();

    return (
        <div className={navStyle.navContainer}>
            <div className='nav-btn-container'>
                <button className={navStyle.navBtn} onClick={ () => history.push(`/menu`) }>✕</button>
            </div>

            <div className='menu-list'>
                <h2 className={navStyle.listTitle} onClick={ () => history.push(`/menu`) }>Meny</h2>
                <hr className={navStyle.centerLine}></hr>
                <h2 className={navStyle.listTitle} onClick={ () => history.push(`/about`) }>Vårt Kaffe</h2>
                <hr className={navStyle.centerLine}></hr>
            </div>
        </div>
    );
}

export default Nav;