var recipes = require('../recipes.json');
var router = require('express').Router();

router.get('/recipes', function(req, res) {
    let page = req.query.page;
    let limit = req.query.limit;

    let result = '';

    if (!page && !limit) {
        result = recipes;    
    }

    if (page) {
        limit = 3 || limit;
        result = recipes.filter(recipe => recipe.id > (page - 1) * limit && recipe.id <= page * limit )
    }

    res.status(200).send(JSON.stringify(result));    
})

module.exports = router;

