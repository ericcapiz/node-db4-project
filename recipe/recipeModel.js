const db = require('../data/db-config')

module.exports = {
    findRecipes,
    findRecipesById,
    addIngredients,
    addRecipes,
    updateRecipe,
    removeRecipe,
    findIngredients,
    findIngredientsById,
}

function findRecipes(){
    return db("recipes");
}

function findRecipesById(id){
    return db('recipe').where({id}).first()
}

function findIngredients(){
    return db("ingredients");
}

function findIngredientsById(id){
    return db('ingredients').where({id}).first()
}

function addIngredients(ingredient){
    return db("ingredients").insert(ingredient)
        .then(id=>{
            return findIngredientsById(id[0])
        })
}

function addRecipes(recipe){
    return db("recipes").insert(ingredient)
        .then(id=>{
            return findRecipesById(id[0])
        })
}

function updateRecipe(changeRecipe, id){
    return db('recipes')
        .where({id})
        .update(changeRecipe)
}

function removeRecipe(id){
    return db('recipes')
        .where('id',id)
        .del();
    }