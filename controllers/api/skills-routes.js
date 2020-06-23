const router = require('express').Router();
const { User, Character, Skills } = require('../../models');
const withAuth = require('../../utils/auth');

//POST create skills
router.post('/', withAuth, (req, res) => {
    Skills.create({
        acrobatics: req.body.acrobatics,
        animalHandling: req.body.animalHandling,
        arcana: req.body.arcana,
        athletics: req.body.athletics,
        deception: req.body.deception,
        history: req.body.history,
        insight: req.body.insight,
        intimidation: req.body.intimidation,
        investigation: req.body.investigation,
        medicine: req.body.medicine,
        nature: req.body.nature,
        perception: req.body.perception,
        performance: req.body.performance,
        persuasion: req.body.persuasion,
        religion: req.body.religion,
        sleightOfHand: req.body.sleightOfHand,
        stealth: req.body.stealth,
        survival: req.body.survival,
        //Char ID here
        character_id: req.body.character_id,
        //User ID from session
        user_id: req.session.user_id
    })
    .then(dbSkillsData => res.json(dbSkillsData))
    .catch(err => {
        console.log(err);
        res.status(400).json(err);
    });
})