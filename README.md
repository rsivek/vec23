# Vec23

A simple 2D and 3D Vector Library for JavaScript.

## Version
0.1.0

## Why another Vector Library?

I started to develop this library as part of a larger project because nothing seemed to satisfy my needs well. 
I wanted something with a plethora of intuitive methods for vector manipulation, as well as one which nicely 
supported functionality between 2D and 3D vectors, while still keeping them firmly separate.

I also wanted to create a more unopinionated vector library as far as whether methods should modify vectors 
in place or create new ones, since I found that most of the time I wanted a mix of both.

Vec23 is designed to provide 2D and 3D vectors. For a complete set of advanced mathematical constructs 
such as matrices and quaternions, look elsewhere.

## Installation

Install via npm

```sh
$ npm install vec23 --save
```

or Bower

```sh
$ bower install vec23 --save
```

or download the `vec23.js` file directly.

## Dependencies

None!

## Usage

If using CommonJS modules (such as node.js):
```js
var Vec2 = require('vec23').Vec2;
var Vec3 = require('vec23').Vec3;
```

If using AMD:
```js
var Vec23 = require(['./path/to/vec23.js']);
var Vec2 = Vec23.Vec2;
var Vec3 = Vec23.Vec3;
```

If loading in a browser:
```html
<script src="/path/to/vec23.js"></script>
```

Then create some vectors
```js
var myVec2 = new Vec2(1,0);
var myVec3 = new Vec3(1,0,0);
```

## API
Each vector operation that produces another vector of the same type has two alternative class methods. 
The method preceded with an underscore `_` modifies and returns `this` vector in place.

For example:
```js
var vA = new Vec3(1,2,3);
var vB = vA.unit();
var vC = vA._unit();
console.log(vB === vA); //false
console.log(vC === vA); //true
```

For a complete API, see the [documentation](http://nanowizard.github.io/vec23/).

License
----

MIT
