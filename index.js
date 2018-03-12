var Restocks = require('./restocks.js');

var r = new Restocks(2000);

r.on('stock-found', (product) => {
	console.log(product);
	r.stop();
});

r.start('http://www.supremenewyork.com/shop/jackets/iqale9x3h/egyxizwn6');