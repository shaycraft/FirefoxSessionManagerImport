var fs = require('fs');
var pgconn = require('./conn');
var repository = require('./repository');

async function doshit() {

	// await pgconn.connect();
	// let shit = await pgconn.query('insert into tabs(window_id, image_url, last_accessed) values($1,$2,$3)', [-1, 'shit.jpg', 'NOW()']);
	// let result = await pgconn.query('select * from tabs');
	// console.log(result.rows);	
	let res = await repository.getTabs();
	console.log(res);
}

doshit();
return;

console.log('\n *START* \n');

var content = JSON.parse(fs.readFileSync('sessionfiles/okrestofwins.session.json'));
var count = 0;
var tab_id = 1;
var entry_id = 1;

console.log('We have ' + content.windows.length + ' windows');


content.windows.forEach(function (win, i) {
	win.tabs.forEach(function (tab, j) {
		tab.entries.forEach(function (entry, k) {
			console.log(`"${i}","${tab_id}",${entry_id},${entry.title},${entry.url},${entry.referrer}`);
			count++;
			entry_id++;
		});
		tab_id++;
	});
	//console.log('Window ' + i + ' has ' + win.tabs.length + ' tabs');
});
//console.log(content.windows[0].tabs[3].entries[0]);
//console.log(content.windows[0].tabs[3].entries[1]);
console.log(count);