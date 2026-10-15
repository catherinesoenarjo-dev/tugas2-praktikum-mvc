const express = require('express');
const app = express();
const pageRoutes = require('./routes/page.routes');
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use('/', pageRoutes);
app.use((req, res) => { res.status(404).send('404 Not Found'); });
app.listen(4000, () => console.log('Server MVC Aktif!'));