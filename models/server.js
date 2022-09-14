const express = require('express');
const cors = require('cors');
require('dotenv').config();

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usersPath = '/api/users';

        // Middelwares
        this.middelwares();

        // Routes of the aplication
        this.routes();
    }

    middelwares() {
        this.app.use(cors());

        // Parser and reading of body
        this.app.use( express.json() );

        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use(this.usersPath, require('../routes/users.routes'));
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running in the port ${this.port}`)
        });
    }
}


module.exports = Server;