const STATE = {
    PENDING: 'pending',
    FULFILLED: 'fulfilled',
    REJECTED: 'rejected'
}

class Phromise {

    constructor(executor) {
        if(typeof executor != 'function') {
            throw TypeError;
        }

        this.state = STATE.PENDING;
        this.value = undefined;
        this.onFulfillChain = [];
        this.onRejectCallChain = [];

        executor(this.resolve.bind(this));
    }

    then(onFulfill) {
        return new Phromise(resolve => {
            const onFulfilled = res => {
                resolve(onFulfill(res));
            }

            if(this.state === STATE.FULFILLED) {
                onFulfilled(this.value);
            } else {
                this.onFulfillChain.push(onFulfilled)
            }
        });
    }

    resolve(res) {
        if(this.state !== STATE.PENDING) return;
 
        this.state = STATE.FULFILLED;
        this.value = res;

        this.onFulfillChain.forEach((onFulfilled) => {
            onFulfilled(res);
        });
    }
}

module.exports = Phromise;