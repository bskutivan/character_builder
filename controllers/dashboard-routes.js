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
            style: 'dash.css'
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

module.exports = router;