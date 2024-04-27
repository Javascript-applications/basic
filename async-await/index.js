const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Hello');
    }, 1000);
});

(async function fetchCustomers() {
    try {
        const res = await promise;
        console.log('res', res);
    } catch (error) {
        console.log('error', error);
    }
})();
