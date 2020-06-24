const router = require('express').Router();
const { User, Character, Skills } = require('../../models');
const withAuth = require('../../utils/auth');

//GET skills
router.get('/:id', (req, res) => {
    Skills.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Character,
                attributes: ['charName']
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    }).then(dbSkillsData => {
        if(!dbSkillsData) {
            res.status(404).json({ message: 'No skills found with this id '});
            return;
        }
        res.json(dbSkillsData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})


//POST create skills
router.post('/', withAuth, (req, res) => {
    // check the session
    if(req.session) {
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
    }
});

//PUT (update) Skills
router.put('/:id', withAuth, (req, res) => {
    Skills.update(
        {
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
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(dbSkillsData => {
        if(!dbSkillsData) {
            res.status(404).json({ message: 'No skills found with this id '});
            return;
        }
        res.json(dbSkillsData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
    Skills.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbSkillsData => {
        if(!dbSkillsData) {
            res.status(404).json({ message: 'No skills found with this id '});
            return;
        }
        res.json(dbSkillsData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;