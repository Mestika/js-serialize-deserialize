/*!
 * Serialize/Unserialize function
 * (c) 2019 Emil Devantie Brockdorff, MIT License, https://devantie.me
 */
//
(function (root, factory) {
	if ( typeof define === 'function' && define.amd ) {
		define([], function () {
			return factory(root);
		});
	} else if ( typeof exports === 'object' ) {
		module.exports = factory(root);
	} else {
		root.serializeUnserialize = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

  'use strict';

    function serialize(value) {
      /* Value can be everything, both string, number or array/object */
      return window.btoa(encodeURIComponent(JSON.stringify(value)));
    }

    function deserialize(serialized) {
      if (typeof serialized !== 'string') {
        return serialized;
      }
      /*
       * Deserialize first try to JSON parse serialized object.
       * If serialized object is not JSON, we just atob (decode) it, otherwise
       * JSON parse it first.
       */
      var parsed = false;
      try {
        parsed = JSON.parse(decodeURIComponent(serialized));
      } catch (e) {}

      if (parsed) {
        return JSON.parse(decodeURIComponent(atob(parsed)))
      } else {

        try {
          parsed = JSON.parse(decodeURIComponent(atob(serialized)));
        } catch (e) {}
      }

      if (!parsed) {
        console.info('The string is not a valid error log or btoa encoded object');
        return false;
      }
      return parsed;
    }

  return {
    serialize: serialize,
    deserialize: deserialize
  };

});