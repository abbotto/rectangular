var should = require('should');
var mergeglob = require('..');

mergeglob.sync('tests/*.txt').should.be.type('object', 'is an object');
mergeglob.sync('tests/*.txt').should.be.an.Array;

mergeglob.sync(['tests/doesntexist']).length.should.equal(0);

mergeglob.sync('tests/*.txt').should.containEql('tests/foo.txt');
mergeglob.sync('tests/*.txt').should.containEql('tests/item.txt');
mergeglob.sync('tests/*.txt').should.not.containEql('tests/item.bar');

mergeglob.sync(['tests/*.bar']).should.containEql('tests/foo.bar');
mergeglob.sync(['tests/*.bar']).should.containEql('tests/item.bar');

mergeglob.sync(['tests/item.bar', 'tests/item.t*']).should.containEql('tests/item.bar')
mergeglob.sync(['tests/item.bar', 'tests/item.t*']).should.containEql('tests/item.txt');

mergeglob('tests/item.*', function(e, result){
    if (e) console.error(e);
    result.should.containEql('tests/item.bar');
    result.should.containEql('tests/item.txt');
});

mergeglob(['tests/foo.*', 'tests/bar.*'], function(e, result){
    if (e) console.error(e);
    result.should.containEql('tests/foo.bar');
    result.should.containEql('tests/foo.txt');
    result.should.not.containEql('tests/bar.*');
});

mergeglob(['tests/foo.*', 'tests/bar.*'], {nonull: true}, function(e, result){
    if (e) console.error(e);
    result.should.containEql('tests/foo.bar');
    result.should.containEql('tests/foo.txt');
    result.should.containEql('tests/bar.*');
});

mergeglob(['doesntexist'], function(e, result){
    if (e) console.error(e);
    result.length.should.equal(0);
});

mergeglob(['doesntexist*', 'imaginary*'], {nonull: true}, function(e, result){
    if (e) console.error(e);
    result.length.should.equal(2);
});

console.error('tests passed');