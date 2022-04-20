import React, { useState, useEffect } from 'react';
import CoffeeItem from './coffeeItem';
import style from './menu.module.css';
import imgUrlb from '../../assets/graphics/bag.svg';
import imgURLn from '../../assets/graphics/navicon.svg';
import imgUrlh from '../../assets/graphics/graphics-header.svg';
import imgurlf from '../../assets/graphics/graphics-footer.svg';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'


function Menu() {


    const [coffees, setCoffees] = useState([]);

    const history = useHistory();


    const coffeesFromState = useSelector(state => state.coffees)


    console.log(coffeesFromState)

    useEffect(() => {
        fetch('http://localhost:5000/api/beans', { method: 'GET' })
            .then(response => response.json())
            .then(response => { setCoffees(response.menu) })
    }, [])



    return (

        <div className={style.menuPage}>

            <div className={style.header} > 

                <div className={style.imgheader}>
                    <img className={style.topImg} src={imgUrlh} allt='header' />
                </div>

                <div className={style.navicon} >
                    <img className={style.imgnavIcon} src={imgURLn} allt='navicon' onClick={() => history.push('/nav')} />

                </div>

                <div className={style.bag}>
                    <img className={style.imgBag} src={imgUrlb} onClick={() => history.push('/cart')} />
                   <div className={style.amout}> 
                   <span className={style.coffeesNumber}> {coffeesFromState.length} </span>
                    </div>

                </div>

                <div className={style.footer}> <img className={style.imgheader} src={imgurlf} /> </div>


                <div>

                    <h1 className={style.title}>Meny</h1>

                    {coffees.map((coffee) => {
                        return <CoffeeItem coffee={coffee} key={coffee.id} />
                    })}

                </div>



            </div>
            
        </div>
    )
}

export default Menu;