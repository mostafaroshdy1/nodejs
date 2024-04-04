export { tryCatch };

async function tryCatch(fn) {
    try {
        await fn();
    } catch (e) {
        console.log(`Error Catched: ${e}`);
    }
}

