import React from 'react';
import { useDispatch } from 'react-redux';
import style from './menu.module.css'
import { addCoffee } from'../../actions/action'

function CoffeeMenu({ coffee }){


    const dispatch = useDispatch();

    function handeClickAdd(){
        dispatch(addCoffee(coffee))
    }
    
    return(

        <section  className={ style.section }>
              
            <div className={style.addCoffeInfo}>
                <button className={ style.btnAdd }onClick={ handeClickAdd }> + </button>
                <div className= {style.coffeOchPrice}>
                    <h2 className= {style.coffeTitel} >{ coffee.title }  </h2>
                    <h2  className= {style.coffeTitel}>{ coffee.price } kr</h2>
                </div>
            </div>
            <p className= {style.subTitel}>{ coffee.desc }</p>

        </section>
    )
}
export default CoffeeMenu