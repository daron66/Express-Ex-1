//My first JSON API using express
const express = require('express');
const server = express();

server.use(express.json());
//GET host port
//match request to route
//route get path ('/')
//contains request
//used for route handler function
//which sets json
try {
        server.get('/', (req, res) => {
        res.json({message: 'OK'});
        });
        server.listen(3333, () => console.log('System is listening on port 127.0.0.1:3000'))

} catch (err) {
        console.error(err.message);
}


