import React from "react";
import ClaudeRecipe from "./ClaudeRecipe.jsx";
import { getRecipeFromChefClaude } from "./ai.js";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  const [recipe, setRecipe] = React.useState("");

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function getRecipe(e) {
    e.preventDefault();
    const recipeMarkdown = getRecipeFromChefClaude(ingredients);
    setRecipe(recipeMarkdown);
  }

  return (
    <main className="main">
      <form action={addIngredient} className="add-ingredient-form">
        <input
          aria-label="Add ingredient"
          type="text"
          className="ingredient-field"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button className="add-ingredient-btn">+ add ingredient</button>
      </form>
      {ingredientsListItems.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsListItems}
          </ul>
          {ingredientsListItems.length > 3 && (
            <div className="get-recipe-container">
              <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
              </div>
              <button onClick={getRecipe}>Get a recipe</button>
            </div>
          )}
        </section>
      )}
      {recipe && <ClaudeRecipe recipe={recipe} />}
    </main>
  );
}
