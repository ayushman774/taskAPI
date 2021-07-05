const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const userSchema = mongoose.Schema({
    username: String,
    contact: Number,
    email: String,
    password: String,
    });

let user = connection.model('user', userSchema);

module.exports = user;