import { useEffect, useState } from "react";
import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealsItem from "./mealsitem/MealsItem";

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);
  const[isLoading,setIsloading] = useState(true);
const[httpError,setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        "https://foodapp-9c46f-default-rtdb.firebaseio.com/meals.json"
      );
      if(!response.ok){
        throw new Error('something went wrong!')
      }

      const responseData = await response.json();
      console.log("ici c paris");
      console.log(responseData);
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsloading(false);
    };

    
      fetchMeals().catch ((error) =>{
      setIsloading(false)
      setHttpError(error.message)
      });
   
  }, []);


  if(isLoading){

    return<section className={classes.mealsLoading}>
      <p>loading ...</p>
    </section>
  }
  // error massege

  if(httpError){

    return<section className={classes.mealsError}>
      <p>{httpError}</p>
    </section>
  }
  // maping our available foods to mealsitem in order to acces each item
  console.log(meals);
  const mealsList = meals.map((meal) => (
    <MealsItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
