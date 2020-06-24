const router = require('express').Router();
const { User, Character } = require('../../models');
const withAuth = require('../../utils/auth');


//POST Create a Character
router.post('/', withAuth, (req, res) => {
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


//GET all characters
router.get('/', (req, res) => {

    Character.findAll({
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbCharacterData => res.json(dbCharacterData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//GET a single character
router.get('/', (req, res) => {

    Character.findOne({
       where: {
           id: req.params.id
       },
       include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbCharacterData => {
        if(!dbCharacterData) {
            res.status(404).json({ message: 'No character found with this id '});
            return;
        }
        res.json(dbCharacterData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//PUT (update) a character
router.put('/:id', withAuth, (req, res) => {
    Character.update(
        {
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
        },
        {
            where: {
                id: req.params.id
            }
    })
    .then(dbCharacterData => {
        if(!dbCharacterData) {
            res.status(404).json({ message: 'No character found with this id '});
            return;
        }
        res.json(dbCharacterData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//DELETE a Character 
router.delete('/:id', withAuth, (req, res) => {
    Character.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbCharacterData => {
        if(!dbCharacterData) {
            res.status(404).json({ message: 'No character found with this id '});
            return;
        }
        res.json(dbCharacterData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

})


module.exports = router;