const exphbs = require('express-handlebars');

module.exports = (express, port) => {
    const app = express();
    app.engine('.hbs', exphbs({
        extname: '.hbs',
        defaultLayout: 'base-layout',
    }));
    app.set('view engine', '.hbs');

    app.use('/', require('../routes'));

    app.listen(port, () => console.log('Server listening on port: ' + port));
}