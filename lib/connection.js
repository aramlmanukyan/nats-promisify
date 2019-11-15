const NATS = require('nats');
const nats = NATS.connect({
    url: process.env.NATS_URL || 'nats://localhost:4222',
    json: true
});

nats.on('connect', () => console.log("NATS has successfully connected") );

nats.on('error', (err) => console.error("NATS connection error:", err) );

nats.on('disconnect', (msg) =>console.log("NATS is disconnected:", msg) );

exports.NATS = NATS;
exports.nats = nats;