const ingredients = {
    cheeses: [
        { name: "Cheder", price: 4, imgSrc: "img/ingredients/Cheeses/cheder.jpg" },
        { name: "Feta", price: 1, imgSrc: "img/ingredients/Cheeses/Feta.jpg" },
        { name: "Gorgonzola", price: 1, imgSrc: "img/ingredients/Cheeses/Gorgonzola.jpg" },
        { name: "Parmesan", price: 1, imgSrc: "img/ingredients/Cheeses/Parmesan.jpg" },
        { name: "Ricotta", price: 3, imgSrc: "img/ingredients/Cheeses/Ricotta.jpg" },
        { name: "Mozzarella", price: 3, imgSrc: "img/ingredients/Cheeses/Моцарелла.jpg" }
    ],
    meats: [
        { name: "Bacon", price: 3, imgSrc: "img/ingredients/Meat/Bacon.jpg" },
        { name: "Beef", price: 2, imgSrc: "img/ingredients/Meat/Beef.jpg" },
        { name: "Chicken", price: 2, imgSrc: "img/ingredients/Meat/Chicken.jpg" },
        { name: "Ham", price: 2, imgSrc: "img/ingredients/Meat/Ham.jpg" },
        { name: "Italian salami", price: 3, imgSrc: "img/ingredients/Meat/Italian salami.jpg" },
        { name: "Minced meat", price: 3, imgSrc: "img/ingredients/Meat/Minced meat.jpg" },
        { name: "Pepperoni", price: 4, imgSrc: "img/ingredients/Meat/Pepperoni.jpg" },
        { name: "Sausages", price: 3, imgSrc: "img/ingredients/Meat/Sausages.jpg" }
    ],
    seafood: [
        { name: "Anchovies", price: 1, imgSrc: "img/ingredients/Seafood/Anchovies.jpg" },
        { name: "Salmon", price: 3, imgSrc: "img/ingredients/Seafood/salmon.jpg" },
        { name: "Scallops", price: 5, imgSrc: "img/ingredients/Seafood/Scallops.jpg" },
        { name: "Shrimp", price: 5, imgSrc: "img/ingredients/Seafood/Shrimp.jpg" },
        { name: "Squid", price: 5, imgSrc: "img/ingredients/Seafood/Squid.jpg" }
    ],
    veggies: [
        { name: "Basil", price: 1, imgSrc: "img/ingredients/Vegetables/Basil.jpg" },
        { name: "Broccoli", price: 1, imgSrc: "img/ingredients/Vegetables/Broccoli.jpg" },
        { name: "Chili", price: 2, imgSrc: "img/ingredients/Vegetables/Chili.jpg" },
        { name: "Corn", price: 2, imgSrc: "img/ingredients/Vegetables/Corn.jpg" },
        { name: "Garlic", price: 1, imgSrc: "img/ingredients/Vegetables/Garlic.jpg" },
        { name: "Jalapeño", price: 2, imgSrc: "img/ingredients/Vegetables/Jalapeño.jpg" },
        { name: "Mushrooms", price: 3, imgSrc: "img/ingredients/Vegetables/Mushrooms.jpg" },
        { name: "Mussels", price: 4, imgSrc: "img/ingredients/Vegetables/Mussels.jpg" },
        { name: "Olives", price: 2, imgSrc: "img/ingredients/Vegetables/Olives.jpg" },
        { name: "Onions", price: 2, imgSrc: "img/ingredients/Vegetables/Onions.jpg" },
        { name: "Peppers", price: 2, imgSrc: "img/ingredients/Vegetables/Peppers.jpg" },
        { name: "Spinach", price: 1, imgSrc: "img/ingredients/Vegetables/Spinach.jpg" },
        { name: "Tomato", price: 2, imgSrc: "img/ingredients/Vegetables/tomato.jpg" }
    ]
};
let totalCost = 0

const generateIngredientCategories = () => {
    const categories = Object.keys(ingredients)
    
    categories.forEach(category =>{
        const categoryDiv = $('<div class="category"></div>')
        const categoryTitle = $(`<h2 class="category-title">${category}</h2>`)
        const ingredientsList = $('<div class="ingredients-list"></div>')

        ingredients[category].forEach(ingredient =>{
            const ingredientItem = $(`<div class="ingredient-item">
                    <img src="${ingredient.imgSrc}" alt="${ingredient.name}">
                    <p>${ingredient.name}</p>
                </div>`)
            
            ingredientsList.append(ingredientItem)
        });

        categoryDiv.append(categoryTitle)
        categoryDiv.append(ingredientsList)
        
        $('.ingredients-categories').append(categoryDiv)

        categoryDiv.on("click", ()=>{
            ingredientsList.fadeToggle(500)
        })
    })
}

const addIngredientToPizza = (ingredient) =>{
    const ingredientPizzaItem = $(`
        
        <div class="pizza-ingredient-item">
            <img src="${ingredient.imgSrc}" alt="${ingredient.name}">
        </div>

        `)
    
    $('.pizza-base').append(ingredientPizzaItem)
}


$(document).ready(()=>{
   generateIngredientCategories()

   $(".ingredient-item").on("click", ()=>{
       const ingredientName = $(this).find("p").text()
       const ingredient = ingredients.cheeses.find(ingredient => ingredient.name === ingredientName)
      
   })
    
})

