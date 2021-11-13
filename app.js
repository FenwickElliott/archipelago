import * as http from 'http';
import { Dog } from './modules/dog.js'

const twigg = new Dog('twigg', 16);
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == '/dog') {
        console.log("SERVER:", JSON.stringify(twigg));
        res.write(JSON.stringify(twigg));
    } else {
        res.write('potatos...')
    }
    res.end();
})

server.listen(port, '0.0.0.0', () => { console.log(`archipelago listening on :${port}`) })

setTimeout(() => { console.log('closing'); server.close() }, 2000);

setTimeout(() => {
    http.get(`http://localhost:${port}/dog`, res => {
        let body = '';
        res.on('data', chunk => { body += chunk })
        res.on('end', () => { console.log("CLIENT:", body) })
    }).on('error', err => { console.log(err) })
}, 1000)