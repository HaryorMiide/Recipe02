const { StatusCodes } = require("http-status-codes")
const Recipe = require("../model/recipe")


const addRecipe = async (req,res) =>{
try {
    const recipe = new Recipe(req.body)
    await recipe.save()
    res.status(StatusCodes.OK).json({
        success: true,
        statusCode: StatusCodes.OK,
        message: "",
        data: recipe
    })
} catch (error) {
    console.log(error.message);
      res.status(404).json({message:error.message})
}
}



const getRecipes = async(req,res) =>{
try {
    const {mealType,favorite} = req.query    
    if(mealType){
        const menu = await Recipe.find({mealType})
        return res.status(200).json(menu)    
    }
    if(favorite){
        const menu = await Recipe.find({favorite})
        return res.status(200).json(menu)    
    }
    const menu = await Recipe.find()
    res.status(200).json(menu)
} catch (error) {
    res.status(404).json({message:error.message})
}
}



const getRecipe = async(req,res) =>{
    const {id} = req.params;
try {
  const menu = await Recipe.findById(id);
  if(!menu){
    return res.status(404).json(error.message)
  }
  res.status(202).json(menu)

} catch (error) {
    res.status(400).json(error.message)
}
}


const updateRecipe = async(req,res) =>{
try {
    const {id} = req.params;
    const {name,ingredient,instruction,mealType,favorite} = req.body;
    const menu = await Recipe.findByIdAndUpdate(
        id,
        { name,ingredient,instruction,mealType},
        {new:true}
    );
    if(!updateRecipe){
        res.status(404).json(error.message)
    }
    res.status(200).json(menu)
} catch (error) {
    res.status(404).json(error.message)
}
}



const deleteRecipe = async(req,res) =>{
try {
    const {id} = req.params
    const menu = await Recipe.findByIdAndDelete(id)
    if(!menu){
        return res.status(404).json(error.message)
    }
   
    res.status(200).json({ message: "Deleted successfully", recipe })
     
} catch (error) {
    res.status(400).json({ message: error.message }); 
}
}











module.exports = {addRecipe,getRecipes,getRecipe,updateRecipe,deleteRecipe}






