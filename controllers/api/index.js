const router = require('express').Router();

const userRoutes = require('./user-routes');
const characterRoutes = require('./character-routes');
const skillsRoutes = require('./skills-routes');

router.use('/users', userRoutes);
router.use('/character', characterRoutes);
router.use('/skills', skillsRoutes);


module.exports = router;
