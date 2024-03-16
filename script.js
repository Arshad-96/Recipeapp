const searchbox = document.querySelector(".searchbox");
const searchBtn = document.querySelector(".searchBtn");
const recipecontainer = document.querySelector(".recipe-box");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");
const recipeDetailsContent = document.querySelector(".recipe-details-content");

const fetchRecipeis = async (query) => {
  const data = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
  );
  const response = await data.json();
  //   console.log(response.meal);
  recipecontainer.innerHTML = "";
  response.meals.forEach((meal) => {
    const recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe");
    recipeDiv.innerHTML = `<div class="card" style="width: 20rem;">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="img">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text"> ${meal.strArea} Dish</p>
        <p class="card-text">${meal.strCategory}</p>
        
      </div>
    </div>`;
    recipecontainer.appendChild(recipeDiv);
  });
};

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const searcInput = searchbox.value.trim();
  fetchRecipeis(searcInput);
  //   console.log("button clicked");
});
