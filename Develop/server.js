const express = require('express');
const routes = require('./routes');
const sequelize = require('../Develop/config/connection'); // import sequelize connection

const app = express();
const PORT = process.env.PORT || 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Turn on our routes
app.use(routes);

// sync sequelize models to the database, then turn on the server


// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  console.log('Started');
  app.listen(PORT, () => console.log('Now listening'));
  console.log('Broke');
});

