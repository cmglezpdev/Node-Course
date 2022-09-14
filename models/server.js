const express = require('express');
require('dotenv').config();

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;

        // Middelwares
        this.middelwares();

        // Routes of the aplication
        this.routes();
    }

    middelwares() {
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.get('/api', (req, res) => {
            res.sendFile(__dirname + 'public/index.html');
        }); 
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server running in the port ${this.port}`)
        });
    }
}


module.exports = Server;