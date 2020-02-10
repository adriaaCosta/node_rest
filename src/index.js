const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//app.use('/auth',router);

// app.get('/', (req, res) =>{
//     res.send('OK');
// // });
// require('./app/controllers/authController')(app);
// require('./app/controllers/projectController')(app);
require('./app/controllers/index')(app);

app.listen(3000, () => {
    console.log('OK SERVER');
});

