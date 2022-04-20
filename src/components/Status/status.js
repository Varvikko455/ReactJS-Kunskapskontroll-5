import imgUrld from '../../assets/graphics/drone.svg';
import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import style from './Satus.module.css';
import { useDispatch } from 'react-redux';
import { clearCoffe } from '../../actions/action'


/**API localhost:5000/api/beans; 
Method: POST, 
Dscribtion: take a new nr from API
*/

const Status = () => {


  const dispatch = useDispatch()
  const history = useHistory();
  const [data, setData] = useState([]);
  /* const ref= "/"; */

  useEffect(() => {

    fetch('http://localhost:5000/api/beans', { method: 'POST' })
      .then(response => response.json())

      .then(response => {
        // window.localStorage.setItem('response', JSON.stringify(response.eta));
        // console.log(JSON.parse(window.localStorage.getItem('response')));
        // history.push(ref);

        console.log(response);
        
        setData(response);
        dispatch(clearCoffe())


      })

  }, [])
  return (
    <section className={style.container}>
      <p className={style.order} > Ordernummer {data.orderNr} </p>
      <img className={style.drone} src={imgUrld} alt='drone' />
      <h1 className={style.header}>Din beställning </h1>
      <h1 className={style.header}>är på väg!</h1>
      <p className={style.time}>{data.eta} minuter</p>
      <button className={style.button} type="btn" onClick={() => { history.push("/menu") }}> Ok, cool ! </button>

    </section>
  )
};

export default Status;

