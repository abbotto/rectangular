# glob-concat

Node utility for merging a list of globs or files into a single unique list.

Rougly equivalent to the bash command: `find . -name '<pattern>' -or -name '<pattern>' ...`.

Run synchronously or asynchronously.

````javascript
globConcat.sync(['tests/item.*', 'tests/*.txt']);

// ['tests/item.txt', 'tests/item.bar', 'tests/foo.txt']

globConcat(['tests/item.*', 'tests/*.txt'], function(err, matches) {
    if (err) throw err;
    /* do stuff with matches */
});
````

Just a thin wrapper around [glob](https://www.npmjs.com/package/glob), options are passed on.
````javascript
var opts = {nonull: true};

globConcat(['tests/item.*', 'tests/*.txt'], opts, function(err, matches) {
    if (err) throw err;
    /* do stuff with matches */
});
````

Happily accepts a single string as input.
````javascript
// this is the same as running glob.sync
globConcat.sync('tests/item.*');
````
