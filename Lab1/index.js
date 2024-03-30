import * as fs from 'node:fs/promises';
import http from 'node:http';




http.createServer(async (req, res) => {
    const route = req.url.split('/');
    const nums = [];
    if (route[1] == 'add') {
        for (let i = 2; i < route.length; i++) {
            nums.push(parseInt(route[i]));
        }
        const result = sum(nums);
        await writeToFile(JSON.stringify(result));
        res.write(`<h1>${result}</h1>`);
    }
    res.end();
}).listen(3000);

function sum(nums) {
    return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}


async function writeToFile(data) {
    try {
        await fs.writeFile('data', data);
        console.log('Data has been written to file successfully.');
    } catch (error) {
        console.error('Error writing to file:', error);
    }
}