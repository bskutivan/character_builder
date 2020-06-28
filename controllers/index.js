const router = require('express').Router();


const apiRoutes = require('./api');
const homepage = require('./homepage');
const dashboardRoutes = require('./dashboard-routes');


router.use('/dashboard', dashboardRoutes);
router.use('/', homepage);
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;