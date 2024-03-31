import * as fs from 'node:fs/promises';
import http from 'node:http';
import { tickets } from './tickets.mjs';

http.createServer(async (req, res) => {
    const route = req.url.split('/');
    const endpoint = route[1];
    if (endpoint === "tickets") {
        res.write(`<h3>${JSON.stringify(tickets)}</h3>`)
    }
    res.end()
}).listen(3000)