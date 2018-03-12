# restocks.js

restocks.js is a modularised Supreme restock checker, written in node.js.

usage is as follows:

```
var Restocks = require('restocks.js');

var r = new Restocks(2000);

r.on('stock-found', (product) => {
	console.log(product);
	r.stop();
});

r.start('http://www.supremenewyork.com/shop/jackets/iqale9x3h/egyxizwn6');
```

## class Restocks

`new Restocks(interval, proxies)`

creates a new Restocks instance. 

* `interval` - the interval at which to poll the product page (integer, required).
* `proxies` - a list of proxies in the format `protocol://host:port` that your instance will rotate through when fetching the product page. if no array is supplied, requests will not be proxied (array, optional).

## instance methods

`Restocks.start(url)`

starts polling the product page at the given `url`.

`Restocks.stop()`

cancels polling the product page.

## instance events

`stock-found`

this event is emitted when stock is found on the current product page. it returns an object `product`:

```
{
	name: String,
	colour: String, 
	price: String,
	url: String,
	sizes: Array
}
```

`no-stock-found`

emitted when a product page is polled but no stock is found, i.e. the product is sold out. returns nothing.

`error`

emitted when an error occurs. returns an `error` string.