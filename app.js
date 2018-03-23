global.express = require('express');
const massive = require('massive');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = global.express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({ extended: false }));

consign().include('app/routes').then('app/models').into(app);
massive({
    host: '127.0.0.1',
    port: 5432,
    database: 'db_prestador',
    user: 'postgres',
    password: 'helohim33'
}).then(instance => {
    app.database = instance;
    app.listen(3000, function() {
        console.log('Server Listem, PORT:3000');
    });
}).catch(error => {
    console.log('Error to connect in DB', error);
});
module.exports = app;