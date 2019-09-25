const mongoose = require('mongoose');
const express = require('express');
const carRouter = require('./routes/carRouter');
const morgan = require('morgan');
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/car';
// Connect MongoDB at default port 27017.
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.');


    } else {
        console.log('Error in DB connection: ' + err);
    }
});
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(carRouter);
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;

