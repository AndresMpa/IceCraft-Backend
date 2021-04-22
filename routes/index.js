const routerx = require('express-promise-router');
const articuloRouter = require('./articulo');
const categoriaRouter = require('./categoria');
const usuarioRouter = require('./usuario');
const compraRouter = require('./compra');



const router = routerx();

router.use('/articulo', articuloRouter);
router.use('/categoria', categoriaRouter);
router.use('/usuario', usuarioRouter);
router.use('/compra', compraRouter);

module.exports = router;