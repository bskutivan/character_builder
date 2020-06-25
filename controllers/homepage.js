const router = require('express').Router();
const {Character} = require('../models')

router.get('/:id',(req, res) => {
    Character.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbData => {
        if (!dbData) {
            res.status(400).json({ message: "no character found with this id"});
            return;
        }
        const character = dbData.get({plain: true});
        if(character.charClass === "Wizard") {
            res.render('Character', {character: character, Wizard: true});
        } else {
            console.log("quack")
        }

    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;