import React from 'react';
import { useHistory } from 'react-router-dom';
import mainStyle from './landing.module.css';
import logo from '../../assets/graphics/airbean-landing.svg'
import footer from '../../assets/graphics/graphics-footer.svg'
import header from '../../assets/graphics/graphics-header.svg'
import left from '../../assets/graphics/intro-graphic-left.svg'
import right from '../../assets/graphics/intro-graphic-right.svg'

function Landing() {

    const history = useHistory();

    return (
        <div className={mainStyle.container}>
            <div className='logo-container'>
                <img src={logo} onClick={ () => history.push(`/menu`) } className={mainStyle.logo} alt='logo'/>
            </div>
            <img src={header} className={mainStyle.header} alt='header'/>
            <img src={left} className={mainStyle.left} alt='left'/>
            <img src={right} className={mainStyle.right} alt='right'/>
            <img src={footer} className={mainStyle.footer} alt='footer'/>
        </div>
    );
}

export default Landing;