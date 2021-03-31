function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    console.log('睡眠开始');
    console.time('睡眠');
    await sleep(10000);
    console.timeEnd('睡眠');
}

demo();