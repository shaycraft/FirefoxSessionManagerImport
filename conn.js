const { Client } = require('pg');

let _isConnected = false;

const config = {
    user: 'ffsmi',
    database: 'ffsmi',
    password: 'ffsmi',
    port: 5432,
    host: 'localhost',
    ssl: false
}

const client = new Client(config);

exports.connect = async function () {
    console.log('* INITIATING CONNECTION... *');
    await client.connect();
    _isConnected = true;
    console.log('* CONNECTED *');
}

exports.IsConnected = async function () {
    return _isConnected;
}

exports.query = async function (query, args) {
    let x = await client.query(query, args);
    //TODO:  need to figure out how to dispose of this more naturally, if we don't the program hangs, probably use pools?
    await client.end();
    return x;
}
