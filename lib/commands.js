const nats = requre('./connection');

const commands = {
    async publish(key, data) {
        return new Promise((resolve, reject) => {
            nats.publish(key, data, (err) => {
                if (err)
                    return reject(err);
                resolve(1);
            });
        });
    },

    async emit(key, data) {
        return new Promise((resolve, reject) => {
            nats.requestOne(key, data, {}, 1000, (response) => {
                if (response instanceof NATS.NatsError && response.code === NATS.REQ_TIMEOUT) {
                    reject(0);
                }
                resolve(response);
            });
        });
    },

    async on(key) {
        return new Promise((resolve, reject)=>{
            nats.subscribe(key, (msg, reply) => {
                if(!msg)
                    return reject('Empty message');
                if (reply)
                    return resolve(msg, reply);
                return resolve(msg);
            });
        });
    }
}

module.exports = commands;
