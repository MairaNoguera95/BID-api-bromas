const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
// Connect MongoDB at default port 27017.
mongoose.connect('mongodb://127.0.0.1/bromas', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.')
    } else {
        console.log('Error in DB connection: ' + err)
    }
});
