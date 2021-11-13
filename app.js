import * as http from 'http';
import { Dog } from './modules/dog.js'
import express from 'express';

const app = express();
const port = 3000;
const twigg = new Dog('twigg', 16);

app.get('/dog', (req, res) => {
    console.log("SERVER:", JSON.stringify(twigg));
    res.send(JSON.stringify(twigg));
})

const server = app.listen(port, () => {
    console.log(`archipelago listening on :${port}`)

    setTimeout(() => { console.log('closing'); server.close() }, 2000);
})

setTimeout(() => {
    http.get(`http://localhost:${port}/dog`, res => {
        let body = '';
        res.on('data', chunk => { body += chunk })
        res.on('end', () => { console.log("CLIENT:", body) })
    }).on('error', err => { console.log(err) })
}, 1000)