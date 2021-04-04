//Librerias requeridas el ./package.json
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const express = require('express');
const router = require('./routes');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')))

//Ruta a usar en los middewlare 
app.use('/api', router);

//Seleccion y uso de puertos
app.set('port', process.env.PORT || 3000);

if (process.env.NODE_ENV !== 'test') {
    app.listen(app.get('port'), () => {
        console.log('Server on port ' + app.get('port') + ' on dev');
    });
}

module.exports = app;