/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/
(function($) {

  /*
    ======== A Handy Little QUnit Reference ========
    http://docs.jquery.com/QUnit

    Test methods:
      expect(numAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      raises(block, [expected], [message])
  */

  module('jQuery.printElementBasic', {
    setup: function() {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is available', 1, function() {
    // Not a bad test to run on collection methods.
    ok($.fn.printElement, "should be available");
  });

  test('defaults are available', 1, function(){
    ok($.fn.printElement.defaults, "default options should be available");
  });

}(jQuery));
