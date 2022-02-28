const mongoose = require('mongoose');



const dbConnection = async() => {

    try {
        
        await mongoose.connect( process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('DB Online');


    } catch (error) {
        throw new Error('Error a la hora de inicializad DB');
    }



}


module.exports = {
    dbConnection
}