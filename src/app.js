const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const port = process.env.PORT||8080;
const path=require('path');

const viewsPath = path.join(__dirname, '..', 'views');
const staticPath = path.join(__dirname, '..', 'static');

app.set('view engine', 'ejs');
app.set('views', viewsPath);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(staticPath));

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports=app;
