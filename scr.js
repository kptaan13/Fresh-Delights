function search() {
    var input, filter, products, recipes, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    products = document.querySelectorAll('.product');
    recipes = document.querySelectorAll('.recipe');

    // Search for products
    products.forEach(function(product) {
        var p = product.querySelector('p');
        txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            product.style.display = "block"; // Show the product
            product.closest('.container').style.display = "block"; // Show the category container
        } else {
            product.style.display = "none"; // Hide the product
            // Check if there are no visible products in the category, then hide the category container
            var categoryContainer = product.closest('.container');
            var visibleProducts = categoryContainer.querySelectorAll('.product[style="display: block;"]');
            if (visibleProducts.length === 0) {
                categoryContainer.style.display = "none";
            }
        }
    });

    // Search for recipes
    recipes.forEach(function(recipe) {
        var p = recipe.querySelector('p');
        txtValue = p.textContent || p.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            recipe.style.display = "block"; // Show the recipe
            recipe.closest('.container').style.display = "block"; // Show the category container
        } else {
            recipe.style.display = "none"; // Hide the recipe
            // Check if there are no visible recipes in the category, then hide the category container
            var categoryContainer = recipe.closest('.container');
            var visibleRecipes = categoryContainer.querySelectorAll('.recipe[style="display: block;"]');
            if (visibleRecipes.length === 0) {
                categoryContainer.style.display = "none";
            }
        }
    });
}
