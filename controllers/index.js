const router = require('express').Router();


const apiRoutes = require('./api');
const homepage = require('./homepage');
router.use('/api', apiRoutes);
router.use('/', homepage);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;