import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    console.log(newFood);
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }
}
  // function handleClick(id) {
  //   const newFoodArray = foods.filter((food) => food.id !== id)
  //   const newFoodArray = [...foods, newFood];
  //   setFoods(newFoodArray);
  // }
// }

  function handleClick(id) {
    const newFoodArray = foods.filter((food) => food.id !== id)
  }

  const foodList = foods.map((food) => (
    // <li key={food.id}>
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));
  
    return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
 
function handleFilterChange(event) {
  // setFilterBy(event.target.value);


return (
  <select name="filter" onChange={handleFilterChange}>
    <option value="All">All</option>
    <option value="American">American</option>
    <option value="Sichuan">Sichuan</option>
    <option value="Thai">Thai</option>
    <option value="Mexican">Mexican</option>
  </select>
);
}

export default SpicyFoodList;
