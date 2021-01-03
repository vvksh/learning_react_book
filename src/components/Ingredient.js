import React from "react";

export default function Ingredient({amount, measurement, name}) {
    return (
        <li>
            {amount} {measurement} {name}
       </li>
    );
}

function IngredientList({list}) {
    return (
        <ul className="ingredients">
            {list.map((ingredient, i) => (
                <Ingredient key={i} {...ingredient} />
            ))}
        </ul>
    );
}

export {IngredientList};