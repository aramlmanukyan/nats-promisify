# Promise-based library for NATS
A simple promise-based library for NATS

## Installation
Install via NPM:

```bash
npm install nats-promisify
```

## Usage

#### Require nats-promisify

```Require nats-promisify
const nats = require('nats-promisify');
```

#### Publish a message

```Publish a message

nats.publish('k1', 'hello')
    .then(console.log)
    .catch(console.error);

nats.on('k1')
    .then((data)=>console.log('message', data.msg))
    .catch(console.error);

```

#### Emit a message and get acknowledgment

```Publish a message

nats.emit('k2', 'hello')
    .then((resp)=>console.log('response', resp))
    .catch(console.error);

nats.on('k2')
    .then((data)=>{
        console.log('message', data.msg);
        nats.publish(data.reply, 'good job!');
    })
    .catch(console.error);

```

## Bugs and Issues

If you encounter any bugs or issues, feel free to open an issue at <a href="https://github.com/aramlmanukyan/nats-promisify"> github. </a>

## License

Copyright © 2019, Aram Manukyan.

All rights reserved.

## Keywords

NATS, nats-promisify, nats broker, microservices