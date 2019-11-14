const NATS = require('nats');
const nats = NATS.connect();

exports.NATS = NATS;
exports.nats = nats;