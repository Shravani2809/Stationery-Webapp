import React, { useState } from "react"
import Header from "./components/Layout/Header";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";

const App =()=> {
  const [cartIsShown,setCartIsShown] = useState(false)
  const showCartHandler = ()=>{
    setCartIsShown(true)
  }
  const hideCartHandler = ()=>{
    setCartIsShown(false)
  }
  return <>
    {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
    <Header onShowCart={showCartHandler}/>
    <main>
      <Products/>
    </main>
  </>
}

export default App;
