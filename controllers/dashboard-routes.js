const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Character, Skills } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req,res) => {
    Character.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'id',
            'charName',
            'charRace',
            'charClass',
            'charCon',
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
        const characters = dbCharacterData.map(character => character.get({ plain: true}));
        res.render('dashboard', { 
            characters, 
            loggedIn: true,
            style: '../../stylesheets/dash.css'
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/new', (req, res) => {
    res.render('new-character', {
        style: '../../stylesheets/dash.css'
    });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Character.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'charName',
            'charRace',
            'charClass',
            'charStr',
            'charDex',
            'charCon',
            'charInt',
            'charWis',
            'charCha',
            'created_at'
        ]
    })
    .then(dbCharacterData => {
        if (!dbCharacterData) {
            res.status(404).json({ message: 'No character found with this id.' });
            return;
        }

        const character = dbCharacterData.get({ plain: true});

        res.render('edit-character', {
            character,
            loggedIn: req.session.loggedIn,
            style: '../../../stylesheets/dash.css'
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})
module.exports = router;