var fs = require('fs');
//var pgconn = require('./conn');
var repository = require('./repository');

async function process() {

	await repository.init();
	
	var content = JSON.parse(fs.readFileSync('sessionfiles/okrestofwins.session.json'));
	var count = 0;
	var tab_id = 1;
	var entry_id = 1;

	var entries = [];

	content.windows.forEach(function (win, i) {
		win.tabs.forEach(function (tab, j) {
			tab.entries.forEach(function (entry, k) {
				entries.push([i, j, tab.image, entry.title, entry.url, entry.referrer]);
				count++;
				entry_id++;
			});
			tab_id++;
		});
	});

	for (var i = 0; i < entries.length; i++) {
		if (i != 0 && (i - 1) % 50 == 0) {
			console.log(`Inserted ${i} rows`);
		}
		await repository.insertRow(entries[i][0], entries[i][1], entries[i][2], entries[i][3], entries[i][4], entries[i][5]);
	}

	await repository.dispose();
}

console.log('\n *START* \n');

process().then(() => {
	console.log('\n *END* \n');
}, err => {
	console.log('ERROR!');
	console.error(err);
});


