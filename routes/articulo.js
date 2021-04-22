const routerx = require('express-promise-router');
const articuloController = require('../controllers/articulos-controller');
const auth = require('../middlewares/auth');

const router = routerx();


router.post('/add',auth.verifyAdministrador, articuloController.add);
router.get('/query',auth.verifyAdministrador, articuloController.query);
router.get('/list', articuloController.list);
router.put('/update',auth.verifyAdministrador, articuloController.update);
router.delete('/remove',auth.verifyAdministrador, articuloController.remove);
router.put('/activate',auth.verifyAdministrador, articuloController.activate);
router.put('/deactivate',auth.verifyAdministrador, articuloController.deactivate);


module.exports = router;