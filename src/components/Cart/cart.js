import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import CartItem from './cartItem';
import styleCart from './cart.module.css';
import backgroundStyle from './background.module.css';
import imgUrlb from '../../assets/graphics/bag.svg';
import imgURLn from '../../assets/graphics/navicon.svg';
import imgUrlh from '../../assets/graphics/graphics-header.svg';
import imgurlf from '../../assets/graphics/graphics-footer.svg';



function Cart({ total_price, coffees }) {
 
    const history = useHistory();
    const coffeesFromState = useSelector(state => state.coffees)

    return (

        <div className={backgroundStyle.menuPage}>

            <div className={backgroundStyle.header} > 

                <div className={backgroundStyle.imgheader}>
                    <img className={backgroundStyle.topImg} src={imgUrlh} allt='header' />
                </div>

                <div className={backgroundStyle.navicon} >
                    <img className={backgroundStyle.imgnavIcon} src={imgURLn} allt='navicon' onClick={() => history.push('/nav')} />

                </div>

                <div className={backgroundStyle.bag}>

                <img className={backgroundStyle.imgBag} src={imgUrlb} onClick={() => history.push('/menu')} />

                <div className={backgroundStyle.amout}> 
                        <span className={backgroundStyle.coffeesNumber}> {coffeesFromState.length} </span>
                </div>

                </div>

                <div className={backgroundStyle.footer}> 
                    <img className={backgroundStyle.imgheader} src={imgurlf} />
                </div>

            </div>



            <section className={styleCart.container}>

                <div className={styleCart.arrow}>
                    <i className="fas fa-sort-up"></i>
                </div>

                <div className={styleCart.headTitleContainer}>
                    <h1 className={ styleCart.headTitle }>Din beställning</h1>
                </div>

                <div className={styleCart.infoContainer}>

                {coffees.map((coffee) => {
                        return  <CartItem coffee={ coffee } key={ coffee.id }/>})}

                </div>

                <div className={styleCart.totalContainer}>
                    <div className={styleCart.total}>
                        <h1 className={ styleCart.totalTitle }>Total <span>......................</span></h1>
                        <p className={styleCart.moms}>inkl moms + drönarleverans</p>
                    </div>

                    <div className={styleCart.priceContainer}>
                        { total_price }
                    </div>
                </div>

                <div className={styleCart.buttonContainer}>
                    <button onClick={()=>history.push('/status')} className={ styleCart.takeMyMoney }>Take my money!</button>
                </div>

            </section>


        </div>

    );
}

function mapStateToProps(store) {
    const { total_price, coffees } = store;
    return { total_price, coffees };
}

export default connect(mapStateToProps)(Cart);