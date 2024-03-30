import * as fs from 'node:fs/promises';
import http from 'node:http';




http.createServer(async (req, res) => {
    const route = req.url.split('/');
    const operation = route[1];
    const nums = [];

    if (['add', 'subtract', 'multiply', 'divide'].includes(operation)) {
        for (let i = 2; i < route.length; i++) {
            nums.push(parseInt(route[i]));
        }

        let result;
        switch (operation) {
            case 'add':
                result = sum(nums);
                break;
            case 'subtract':
                result = subtract(nums);
                break;
            case 'multiply':
                result = multiply(nums);
                break;
            case 'divide':
                result = divide(nums);
                break;
        }

        await writeToFile(JSON.stringify(result));
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(`<h1>${result}</h1>`);
    } else {
        res.writeHead(400, { 'Content-Type': 'text/html' });
        res.write('<h1>Invalid operation</h1>');
    }
    res.end();
}).listen(3000);

function sum(nums) {
    return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

function subtract(nums) {
    return nums.slice(1).reduce((accumulator, currentValue) => accumulator - currentValue, nums[0]);
}

function multiply(nums) {
    return nums.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
}

function divide(nums) {
    return nums.slice(1).reduce((accumulator, currentValue) => accumulator / currentValue, nums[0]);
}


async function writeToFile(data) {
    try {
        await fs.writeFile('data', data);
        console.log('Data has been written to file successfully.');
    } catch (error) {
        console.error('Error writing to file:', error);
    }
}