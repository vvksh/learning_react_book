
import React from "react"; 
import {IngredientList} from "./Ingredient"
import Instructions from "./Instructions";
import StarRating from "./StarRating"

export default function  Recipe ( {name, ingredients, steps}) {
    return (
      <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <StarRating style={{ backgroundColor: "lightblue" }} />
        <IngredientList list={ingredients}/>
        <Instructions title="Cooking instructions" steps={steps} />
      </section>
    )
  };