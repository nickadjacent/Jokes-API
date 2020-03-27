const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_first_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connection to database was successfull.'))
    .catch(error => console.log(`Failed to establish connection with your database, ${error}`));