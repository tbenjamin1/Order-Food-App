import {useState} from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import CartProvider from "./store/CartProvider";
 
const App =() =>{

  const[cartShow,setCartShow]=useState(false);

  const showCartHandler =()=>{
    setCartShow(true);
  };
const hideCartHandler =()=>{
  setCartShow(false);
}

  return (
    <CartProvider>
     {cartShow && <Cart onClose={hideCartHandler} />}
      <Header onshowCart={showCartHandler} />
      <main>
        <Meals/>
      </main>
      </CartProvider>
  );
};

export default App;
