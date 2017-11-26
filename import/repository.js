const conn = require('./conn');

var init = async function() {
    await conn.connect();
}

var getTabs = async function () {
    return await conn.query('select * from tabs');
}

var insertRow = async function (window_id, tab_id, image_url, title, url, referrer) {
    var p = [window_id, tab_id, image_url, title, url, referrer];
    var res = await conn.query('insert into tabs(window_id, tab_id, image_url, title, url, referrer, last_accessed) values ($1,$2,$3,$4,$5,$6,NOW())', p);
}

var dispose = async function () {
    await conn.dispose();
}

module.exports.getTabs = getTabs;
module.exports.dispose = dispose;
module.exports.insertRow = insertRow;
module.exports.init = init;