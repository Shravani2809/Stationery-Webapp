import React from "react"
import classes from "./Header.module.css"
import productsImg from "../../assets/products.jpeg"
import HeaderCartButton from "./HeaderCartButton"

const Header =()=>{
    return <>
        <header className={classes.header}>
            <h1>...one STOP for  STATIONERY</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={productsImg} alt=""/>
        </div>
    </>
}

export default Header