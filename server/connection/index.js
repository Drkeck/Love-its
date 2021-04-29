const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI ||  'mongod://localhost/love-its', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection