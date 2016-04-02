/**
 * Created by davidmartins on 4/2/16.
 */

var assert = require('assert');
var should = require('should');

describe('Health Tracker Test Framework', function () {

    it('Should have mocha installed and running.', function () {
        assert.equal(true, true);
    });

    it('Should have should library installed for fluent testing.', function () {
        true.should.eql(true);
    });
});