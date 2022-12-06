// Ingredientes
export const ingredientName = async (fIngredient) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${fIngredient}`);
  const data = await response.json();
  return data;
};
// Nome da comida
export const FoodName = async (foodName) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`);
  const data = await response.json();
  return data;
};
// Primeira letra
export const firstLetter = async (foodFLetter) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodFLetter}`);
  const data = await response.json();
  return data;
};
// COMIDAS ACIMA ^^^^^^^
// Drinks && Bebidas
export const ingredientDrink = async (drinkIngredient) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinkIngredient}`);
  const data = await response.json();
  return data;
};
// Nome da bebida
export const drinkName = async (drinName) => {
  const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drinName}`);
  const data = await response.json();
  return data;
};
// Primeira letra do ingrediente || bebida
export const firstLetterDrink = async (drinkFLetter) => {
  if (drinkFLetter.length === 1) {
    const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${drinkFLetter}`);
    const data = await response.json();
    return data;
  }
};