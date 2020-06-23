const router = require('express').Router();
const { User, Character } = require('../../models');
const withAuth = require('../../utils/auth');


// Create a Character
router.post('/', (req, res) => {
    Character.create({
        charName: req.body.charName,
        charRace: req.body.charRace,
        charClass: req.body.charClass,
        charStr: req.body.charStr,
        charDex: req.body.charDex,
        charCon: req.body.charCon,
        charInt: req.body.charInt,
        charWis: req.body.charWis,
        charCha: req.body.charCha,
        user_id: req.session.user_id
    })
    .then(dbCharacterData => res.json(dbCharacterData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


// GET all characters
router.get('/', (req, res) => {

    Character.findAll()
    .then(dbCharacterData => res.json(dbCharacterData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});



module.exports = router;