var assert = require('assert');

var bingo = require('./index');

describe ('Bingo Test', function(){
	
	it('init Start',function(){
		bingo.reset();
		assert.equal(bingo.getExtracted().length,0);
		assert.equal(bingo.getBag().length, 90);
	});
	
	it('init dopo la prima estrazione',function(){
		bingo.reset();
		bingo.extract();	assert.equal(bingo.getExtracted().length,1);
		assert.equal(bingo.getBag().length, 89);
	});
	
	it('init extract 90 times', function() {
        bingo.reset();
        for (var i=0; i<90; i++) {
            bingo.extract();
        }
        assert.equal(bingo.getExtracted().length, 90);
        assert.equal(bingo.getBag().length, 0);
    }); bingo.extract();
	
});