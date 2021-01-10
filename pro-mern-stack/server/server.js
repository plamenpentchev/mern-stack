const express = require('express');
const app = express();
const fileServerMiddleware = express.static('public');
const port = 3000;

//mount the middleware on the application.
//use '/public' for the first parameter if you want the static files 
// to be accessed only by prefixed url (http://localhost:3000/public as oposed to
//http://localhost:3000) 
app.use('/', fileServerMiddleware);

app.listen(port, () => console.log(`Litening on port ${port}.`));

