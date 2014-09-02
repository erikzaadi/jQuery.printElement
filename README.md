# jQuery Print Element [![Build Status](https://secure.travis-ci.org/erikzaadi/jQuery.printElement.png?branch=master)](http://travis-ci.org/erikzaadi/jquery.printelement)

Sends an element to print.

Inspired by PrintArea (http://plugins.jquery.com/project/PrintArea) and
http://stackoverflow.com/questions/472951/how-do-i-print-an-iframe-from-javascript-in-safari-chrome

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/erikzaadi/jquery.printElement/master/dist/jquery.printelement.min.js
[max]: https://raw.github.com/erikzaadi/jquery.printElement/master/dist/jquery.printelement.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="jquery.printelement.min.js"></script>
<script>
jQuery(function($) {
  $("#yourSelector").printElement();
});
</script>
```

## Documentation
_still working on migrating these.._
See the [Getting Started][gs] or [all options][ao].

[gs]: https://github.com/erikzaadi/jQuery.printElement/wiki/GettingStarted
[ao]: https://github.com/erikzaadi/jQuery.printElement/wiki/Options

## Examples
See [Examples][sampleurl]

[sampleurl]: https://raw.github.com/erikzaadi/jquery.printElement/master/sample/sample.html

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## Release History
* 2.0.1-dev
  * Updated project to use Grunt 0.4.x
  * Added support for number type input fields.
* 2.0-dev
  * Complete rewrite, support IE{9,10}.

## License
Copyright (c) 2012 erikzaadi  
Licensed under the MIT, GPL licenses.
