const app =  require('./app');
require('dotenv').config();

const port = process.env.PORT || 2500;

app.listen(port);