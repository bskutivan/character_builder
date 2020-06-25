const router = require('express').Router();
const {Character, User } = require('../models')

//render homepage
router.get('/', (req, res) => {
    Character.findAll({
        attributes: [
            'charName',
            'charRace',
            'charClass',
            'created_at'
        ],
        include: [
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbCharacterData => {
        const characters = dbCharacterData.map(character => character.get({ plain: true }));
        res.render('homepage', {
            characters,
            loggedIn: req.session.loggedIn,
            style: 'style.css'
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//render login/signup
router.get('/login', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login', {
        style: 'login.css'
    });
});

// router.get('/:id',(req, res) => {
//     Character.findOne({
//         where: {
//             id: req.params.id
//         }
//     })
//     .then(dbData => {
//         if (!dbData) {
//             res.status(400).json({ message: "no character found with this id"});
//             return;
//         }
//         const character = dbData.get({plain: true});
//         if(character.charClass === "Wizard") {
//             res.render('Character', {character: character, Wizard: true});
//         } else if (character.charClass === "Bard") {
//             res.render('Character', {character: character, Bard: true});
//         } else if (character.charClass === "Cleric") {
//             res.render('Character', {character: character, Cleric: true});
//         } else if (character.charClass === "Druid") {
//             res.render('Character', {character: character, Druid: true});
//         } else if (character.charClass === "Barbarian") {
//             res.render('Character', {character: character, Barbarian: true});
//         }

//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).json(err);
//     })
// })

module.exports = router;