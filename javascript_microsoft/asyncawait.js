function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function simulateLongOperation() {
    console.log("Start!!!");
    await promiseTimeout(2000);
    console.log("Stop!!!");
    return 42;
}

async function run() {
    const answer = await simulateLongOperation();
    console.log(answer);
}

run();
