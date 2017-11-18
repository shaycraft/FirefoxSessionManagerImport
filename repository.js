const conn = require('./conn');
conn.connect();

var getTabs = async function() {
    return await conn.query('select * from tabs');
}

module.exports.getTabs = getTabs;