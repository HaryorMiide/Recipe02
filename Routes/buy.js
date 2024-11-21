const express = require("express")
const router = express.Router()
const {addRecipe,getRecipes,getRecipe,updateRecipe,deleteRecipe, filterMealType} = require("../Controller/recipe")

router.post("/add",addRecipe)
router.get("/",getRecipes)
// // router.get("/no",filterMealType) 
// router.get("/:id",getRecipe)
// router.put( "/:id",updateRecipe)
// router.delete( "/:id",deleteRecipe)
 

module.exports = router