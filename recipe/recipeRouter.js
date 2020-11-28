const express = require("express");
const router = express.Router();

const db = require("./recipeModel.js");


router.get("/recipe", (req,res)=>{
    db.findRecipes()
    .then(recipes => {
        res.status(200).json(recipes)
    })
    .catch(error => {
        res.status(500).json({
            message: "error retrieving db"
        })
    })
})

router.get('/', (req,res) => {
    res.json('node db4 recipe project')
})

module.exports = router;