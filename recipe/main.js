import recipes from './recipes.mjs';

// Function to get a random list entry
function getRandomListEntry(list) {
    const index = Math.floor(Math.random() * list.length);
    return list[index];
}

// Function to generate a random number
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Function to create the recipe HTML template
function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="${recipe.name}" />
        <figcaption>
            ${tagsTemplate(recipe.tags)}
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">
                ${recipe.description}
            </p>
        </figcaption>
    </figure>`;
}

// Function to create the tags HTML
function tagsTemplate(tags) {
    return `<ul class="recipe__tags">
        ${tags.map(tag => `<li>${tag}</li>`).join('')}
    </ul>`;
}

// Function to create the ratings HTML
function ratingTemplate(rating) {
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
        } else {
            html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
        }
    }
    html += `</span>`;
    return html;
}

// Function to render the recipes
function renderRecipes(recipeList) {
    const recipeSection = document.querySelector('.recipe-section');
    recipeSection.innerHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
}

// Function to initialize the page
function init() {
    const recipe = getRandomListEntry(recipes);
    renderRecipes([recipe]);
}

// Function to filter recipes
function filterRecipes(query) {
    return recipes
        .filter(recipe => 
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(query))
        )
        .sort((a, b) => a.name.localeCompare(b.name));
}

// Function to handle the search
function searchHandler(event) {
    event.preventDefault();
    const searchInput = document.querySelector('.search-form input');
    const query = searchInput.value.toLowerCase();
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

// Attach event listener to the search form
document.querySelector('.search-form form').addEventListener('submit', searchHandler);

// Initialize the page
init();
