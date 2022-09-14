const mongoose = require('mongoose');

const dbConntection = async () => {

    try {
        await mongoose.connect( process.env.MONGODB_CNN );

        console.log("Online Database")

    } catch (error) {
        throw new Error('Error loading database');
    }

}


module.exports = {
    dbConntection
}