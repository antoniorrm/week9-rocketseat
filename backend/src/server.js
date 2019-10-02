const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb+srv://user:user123@week9-dkyh9.mongodb.net/week9?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const app = express();
app.use(express.json());
app.use(routes);


app.listen(3333);