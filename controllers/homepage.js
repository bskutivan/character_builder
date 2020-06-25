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
        } else if (character.charClass === "Bard") {
            res.render('Character', {character: character, Bard: true});
        } else if (character.charClass === "Cleric") {
            res.render('Character', {character: character, Cleric: true});
        } else if (character.charClass === "Druid") {
            res.render('Character', {character: character, Druid: true});
        }

    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})

module.exports = router;