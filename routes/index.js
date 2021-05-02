const routerx = require('express-promise-router');
const usuarioRouter = require('./usuario');
const libroRouter = require('./libro');

const router = routerx();

router.use('/usuario', usuarioRouter);
router.use('/libro', libroRouter);

module.exports = router;
