/**
 * Created by davidmartins on 4/2/16.
 */

var assert = require('assert');
var should = require('should');

describe('Health Tracker Test Framework', function () {

    it('Should have mocha installed and running.', function () {
        assert.equal(true, true);
    })

    it('Should have should library installed for fluent testing.', function () {
        true.should.eql(true);
    })
})

describe('Asynchronous testing.', function () {

    var somethingHere = 2;
    var somethingElse = 'check';

    var result = false;

    beforeEach(function (done) {
        setTimeout(function () {
            result = true;
            // complete the async beforeEach
            done();
        }, 2000);
    });

    it('Should NOT be so hard so this makes it easier', function (done) {
        result.should.eql(true);
        done();
    });

})