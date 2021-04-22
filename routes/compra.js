const routerx = require('express-promise-router');
const categoriaController = require('../controllers/categorias-controller');
const compraController = require('../controllers/compras-controller');
const auth = require('../middlewares/auth');

const router = routerx();


router.post('/add',auth.verifyAdministrador, compraController.add);
router.get('/query',auth.verifyAdministrador, compraController.query);
router.get('/list',auth.verifyAdministrador, compraController.list);
router.put('/update',auth.verifyAdministrador, compraController.update);

module.exports = router;
