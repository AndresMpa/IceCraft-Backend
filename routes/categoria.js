const routerx = require('express-promise-router');
const categoriaController = require('../controllers/categorias-controller');
const auth = require('../middlewares/auth');

const router = routerx();


router.post('/add',auth.verifyAdministrador, categoriaController.add);
router.get('/query',auth.verifyAdministrador, categoriaController.query);
router.get('/list',auth.verifyAdministrador, categoriaController.list);
router.put('/update',auth.verifyAdministrador, categoriaController.update);
router.delete('/remove',auth.verifyAdministrador, categoriaController.remove);
router.put('/activate',auth.verifyAdministrador, categoriaController.activate);
router.put('/deactivate',auth.verifyAdministrador, categoriaController.deactivate);


module.exports = router;
