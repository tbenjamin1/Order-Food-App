import { useContext } from "react";
import MealItemForm from "./MealItemForm";
import classes from "./MealsItem.module.css";
import CartContext from "../../../store/Cart-Context";

const MealsItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h1>{props.name}</h1>

        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
