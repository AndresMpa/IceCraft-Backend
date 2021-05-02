const routerx = require('express-promise-router');
const usuarioRouter = require('./usuario');
const compraRouter = require('./compra');
const libroRouter = require('./libro');

const router = routerx();

router.use('/usuario', usuarioRouter);
router.use('/compra', compraRouter);
router.use('/libro', libroRouter);

module.exports = router;
