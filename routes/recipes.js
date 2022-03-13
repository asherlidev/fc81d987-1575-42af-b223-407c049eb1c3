var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/recipes', function(req, res) {
    let page = 1 || req.query.page;
    let limit = 3 || req.query.limit;   
    
    let result = recipes.filter(recipe => recipe.id > (page - 1) * limit && recipe.id <= page * limit );    

    res.send(result);    
    res.sendStatus(200);
})

module.exports = router;

