const routerx = require('express-promise-router');
const libroController = require('../controllers/libro-controller');
const auth = require('../middlewares/auth');

const router = routerx();


router.post('/add',auth.verifyAdministrador, libroController.add);
router.get('/query',auth.verifyAdministrador, libroController.query);
router.get('/list', libroController.list);
router.put('/update',auth.verifyAdministrador, libroController.update);
router.delete('/remove',auth.verifyAdministrador, libroController.remove);
router.put('/activate',auth.verifyAdministrador, libroController.activate);
router.put('/deactivate',auth.verifyAdministrador, libroController.deactivate);


module.exports = router;
