/**
 * 2D Vector
 * @class
 * @param {Number} x - x component
 * @param {Number} y - y component
 */
function Vec2(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Vec2.prototype = {
    /**
     * Negates the vector and returns a new vector
     * @memberof Vec2#
     * @returns {Vec2} new vector
     */
    negative: function() {
        return new Vec2(-this.x, -this.y);
    },
    /**
     * Negates this vector
     * @memberof Vec2#
     * @returns {Vec2}
     */
    _negative: function() {
        this.x = -this.x;
        this.y = - this.y;
        return this;
    },
    /**
     * Adds the vector to a vector or Number and returns a new vector.
     * @memberof Vec2#
     * @param   {Vec2|Vec3|Number} v
     * @returns {Vec2}
     */
    add: function(v) {
        if (v instanceof Vec2) {
            return new Vec2(this.x + v.x, this.y + v.y);
        }
        else if (v instanceof Vec3) {
            return new Vec2(this.x + v.x, this.y + v.y);
        }
        else if (typeof v === 'number'){
            return new Vec2(this.x + v, this.y + v);
        }
        else {
            throw new TypeError('Invalid argument', v);
        }
    },
    /**
    * Adds the vector to a vector or Number.
    * @memberof Vec2#
    * @param   {Vec3|Vec2|Number} v vector or Number to add with.
    * @returns {Vec2}                this vector
    */
    _add: function(v) {
        if (v instanceof Vec2) {
            this.x = this.x + v.x;
            this.y = this.y + v.y;
            return this;
        }
        else if(v instanceof Vec3){
            this.x = this.x + v.x;
            this.y = this.y + v.y;
            return this;
        }
        else if(typeof v === 'number') {
            this.x = this.x + v;
            this.y = this.y + v;
            return this;
        }
        else {
            throw new TypeError('Invalid argument', v);
        }
    },
    /**
     * Subtracts a Number or vector from the vector and returns a new vector.
     * @memberof Vec2#
     * @param   {Vec2|Vec3|Number} v vector or Number to subtract.
     * @returns {Vec2}
     */
    subtract: function(v) {
        if (v instanceof Vec2) {
            return new Vec2(this.x - v.x, this.y - v.y);
        }
        else if (v instanceof Vec3) {
            return new Vec2(this.x - v.x, this.y - v.y);
        }
        else if (typeof v === 'number'){
            return new Vec2(this.x - v, this.y - v);
        }
        else {
            throw new TypeError('Invalid argument', v);
        }
    },
    /**
    * Subtracts a vector or Number from the vector.
    * @memberof Vec2#
    * @param   {Vec3|Vec2|Number} v vector or Number to subtract.
    * @returns {Vec2}                this vector
    */
    _subtract: function(v) {
        if (v instanceof Vec2) {
            this.x = this.x - v.x;
            this.y = this.y - v.y;
            return this;
        }
        else if(v instanceof Vec3){
            this.x = this.x - v.x;
            this.y = this.y - v.y;
            return this;
        }
        else if(typeof v === 'number') {
            this.x = this.x - v;
            this.y = this.y - v;
            return this;
        }
        else {
            throw new TypeError('Invalid argument', v);
        }
    },
    /**
     * Multiplies a Number or vector to the vector and returns a new vector.
     * @memberof Vec2#
     * @param   {Vec2|Vec3|Number} v
     * @returns {Vec2}
     */
    multiply: function(v) {
        if (v instanceof Vec2) {
            return new Vec2(this.x * v.x, this.y * v.y);
        }
        else if (v instanceof Vec3) {
            return new Vec2(this.x * v.x, this.y * v.y);
        }
        else if (typeof v === 'number'){
            return new Vec2(this.x * v, this.y * v);
        }
        else {
            throw new TypeError('Invalid argument', v);
        }
    },
    /**
    * Multiplies vector or Number to the vector.
    * @memberof Vec2#
    * @param   {Vec3|Vec2|Number} v vector or Number to subtract.
    * @returns {Vec2}                this vector
    */
    _multiply: function(v) {
        if (v instanceof Vec2) {
            this.x = this.x * v.x;
            this.y = this.y * v.y;
            return this;
        }
        else if(v instanceof Vec3){
            this.x = this.x * v.x;
            this.y = this.y * v.y;
            return this;
        }
        else if(typeof v === 'number') {
            this.x = this.x * v;
            this.y = this.y * v;
            return this;
        }
        else {
            throw new TypeError('Invalid argument', v);
        }
    },
    /**
     * Divides a Number or vector from the vector and returns a new vector.
     * @memberof Vec2#
     * @param   {Vec2|Vec3|Number} v
     * @returns {Vec2}
     */
    divide: function(v) {
        if (v instanceof Vec2) {
            return new Vec2(this.x / v.x, this.y / v.y);
        }
        else if (v instanceof Vec3) {
            return new Vec2(this.x / v.x, this.y / v.y);
        }
        else if (typeof v === 'number'){
            return new Vec2(this.x / v, this.y / v);
        }
        else {
            throw new TypeError('Invalid argument', v);
        }
    },
    /**
    * Divides a vector or Number from the vector.
    * @memberof Vec2#
    * @param   {Vec3|Vec2|Number} v vector or Number to subtract.
    * @returns {Vec2}                this vector
    */
    _divide: function(v) {
        if (v instanceof Vec2) {
            this.x = this.x / v.x;
            this.y = this.y / v.y;
            return this;
        }
        else if(v instanceof Vec3){
            this.x = this.x / v.x;
            this.y = this.y / v.y;
            return this;
        }
        else if(typeof v === 'number') {
            this.x = this.x / v;
            this.y = this.y / v;
            return this;
        }
        else {
            throw new TypeError('Invalid argument', v);
        }
    },
    /**
     * Tests whether the provided vector is equivalent.
     * @memberof Vec2#
     * @param   {Vec2} v
     * @returns {Vec2}
     */
    equals: function(v) {
        return this.x === v.x && this.y === v.y;
    },
    /**
     * Computes the dot product with a vector.
     * @memberof Vec2#
     * @param   {Vec2} v
     * @returns {Vec2}
     */
    dot: function(v) {
        return this.x * v.x + this.y * v.y;
    },
    /**
     * Computes the cross product with a Vec2 or Vec3. Note that by definition the cross product of two 2D vectors is a 3D vector with x = y = 0
     * @memberof Vec2#
     * @param   {Vec2|Vec3} v
     * @returns {Vec3}
     */
    cross: function(v) {
        if(v instanceof Vec3){
            return this.toVec3()._cross(v);
        }
        return new Vec3(0,0, this.x * v.y - this.y * v.x);
    },
    /**
     * Computes the length of the vector.
     * @memberof Vec2#
     * @param   {Vec2} v
     * @returns {Number}
     */
    length: function() {
        return Math.sqrt(this.dot(this));
    },
    /**
     * Creates a new vector from the current vector with the same direction but with provided length/magnitude.
     * @memberof Vec2#
     * @param   {Number} n
     * @returns {Vec2}
     */
    toLength: function(n){
        var mult = Math.sqrt(n*n/this.dot(this));
        return new Vec2(this.x*mult, this.y*mult);
    },
    /**
     * Changes the vector to the given length/magnitude without changing direction
     * @memberof Vec2#
     * @param   {Number} n
     * @returns {Vec2}
     */
    _toLength: function(n){
        var mult = Math.sqrt(n*n/this.dot(this));
        this._multiply(mult);
        return this;
    },
    /**
     * Computes a new vector from as the unit vector of this vector.
     * @memberof Vec2#
     * @returns {Vec2}
     */
    unit: function() {
        return this.divide(this.length());
    },
    /**
     * Converts this vector to a unit vector.
     * @memberof Vec2#
     * @returns {Vec2}
     */
    _unit: function() {
        return this._divide(this.length());
    },
    /**
     * Returns the minimum axis value.
     * @memberof Vec2#
     * @returns {Number}
     */
    min: function() {
        return Math.min(this.x, this.y);
    },
    /**
     * Returns the maximum axis value.
     * @memberof Vec2#
     * @returns {Number}
     */
    max: function() {
        return Math.max(this.x, this.y);
    },
    /**
     * Computes the angle of the vector.
     * @memberof Vec2#
     * @returns {Number}
     */
    toAngle: function() {
        return Math.atan2(this.y, this.x);
    },
    /**
     * Converts the vector to an Array.
     * @memberof Vec2#
     * @returns {Array}
     */
    toArray: function(n) {
        return [this.x, this.y].slice(0, n || 2);
    },
    /**
     * Creates a new vector as a clone of this vector.
     * @memberof Vec2#
     * @returns {Vec2}
     */
    clone: function() {
        return new Vec2(this.x, this.y);
    },
    /**
     * Converts the vector to a string representation.
     * @memberof Vec2#
     * @param {Number} [dec=2] - decimal places to round to (default is 2)
     * @returns {String} string of the form {x: <x value>, y: <y value>}
     */
    toString: function(dec) {
        if(!dec){
            dec = 2;
        }
        return '{x: ' + this.x.toFixed(dec) + ', y: ' + this.y.toFixed(dec)  + '}';
    },
    /**
     * Converts the Vec2 to a Vec3 with v.z = 0.
     * @memberof Vec2#
     * @returns {Vec3}
     */
    toVec3: function(){
        return new Vec3(this.x, this.y, 0);
    },
    /**
     * Creates a new vector with each of the current x and y components rounded to the nearest whole Number.
     * @memberof Vec2#
     * @returns {Vec2}
     */
    round: function() {
        return new Vec2(Math.round(this.x), Math.round(this.y));
    },
    /**
     * Rounds the x and y components to the nearest whole Number.
     * @memberof Vec2#
     * @returns {Vec2}
     */
    _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    },
    /**
     * Computes the 2d area of the vector.
     * @memberof Vec2#
     * @returns {Number}
     */
    area: function() {
        return this.x*this.y;
    },
    /**
     * Converts the vector to the appropriate JSON format.
     * @memberof Vec2#
     * @returns {Number}
     */
    toJSON: function() {
        return this.toArray();
    },
    /**
    * Creates a new vector converting the vector to a new coordinate frame at the same origin.
    * @memberof Vec2#
    * @param {Array} m - Coordinate system matrix of the form [[Xx,Xy],[Yx,Yy]]
    * @returns {Vec2}
    */
    toCoordinateFrame: function(m){
        return new Vec2(
            this.x*m[0][0]+this.y*m[0][1],
            this.x*m[1][0]+this.y*m[1][1]
        );
    },
    /**
    * Converts this vector to a new coordinate frame at the same origin.
    * @memberof Vec2#
    * @param {Array} m - Coordinate system matrix of the form [[Xx,Xy],[Yx,Yy]]
    * @returns {Vec2}
    */
    _toCoordinateFrame: function(m){
        var x = this.x;
        var y = this.y;
        this.x = x*m[0][0]+y*m[0][1];
        this.y = x*m[1][0]+y*m[1][1];
        return this;
    },
    /**
    * Rotates the vector in radians counterclockwise and returns a new vector.
    * @memberof Vec2#
    * @param {Number} theta - rotation angle (in radians)
    * @returns {Vec2}
    */
    rotate: function(theta){
        return new Vec2(
            this.x*Math.cos(theta)-this.y*Math.sin(theta), 
            this.x*Math.sin(theta)+this.y*Math.cos(theta)
        );
    },
    /**
    * Rotates the vector in radians counterclockwise.
    * @memberof Vec2#
    * @param {Number} theta - rotation angle (in radians)
    * @returns {Vec2}
    */
    _rotate: function(theta){
        var x = this.x;
        var y = this.y;
        this.x = x*Math.cos(theta)-y*Math.sin(theta);
        this.y = x*Math.sin(theta)+y*Math.cos(theta);
        return this;
    },
    /**
     * Raises each component of the vector to the power p and returns a new vector.
     * @memberof Vec2#
     * @returns {Vec2}
     */
    pow: function(p){
        return new Vec2(Math.pow(this.x, p), Math.pow(this.y, p));
    },
    /**
     * Raises each component of the vector to the power p.
     * @memberof Vec2#
     * @returns {Vec2}
     */
    _pow: function(p){
        this.x = Math.pow(this.x, p);
        this.y = Math.pow(this.y, p);
        return this;
    }
};

/**
 * Computes the cartesian distance between a and b
 * @param   {Vec2}  a 
 * @param   {Vec2}  b 
 * @returns {Number}
 */
Vec2.distance = function(a, b){
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
};
/**
 * Creates a new unit vector from the given angle
 * @param   {Number}  theta 
 * @returns {Vec2} 
 */
Vec2.fromAngle = function(theta) {
    return new Vec2(Math.cos(theta), Math.sin(theta));
};
/**
 * Creates a random Vec2
 * @returns {Vec2}
 */
Vec2.randomDirection = function() {
    return Vec2.fromAngle(Math.random() * Math.PI * 2);
};
/**
 * Creates a new vector where each component is the minimum of the arguments
 * @param   {Vec2} a 
 * @param   {Vec2} b 
 * @returns {Vec2}
 */
Vec2.min = function(a, b) {
    return new Vec2(Math.min(a.x, b.x), Math.min(a.y, b.y));
};
/**
 * Creates a new vector where each component is the maximum of the arguments
 * @param   {Vec2} a 
 * @param   {Vec2} b 
 * @returns {Vec2}
 */
Vec2.max = function(a, b) {
    return new Vec2(Math.max(a.x, b.x), Math.max(a.y, b.y));
};
/**
 * Computes a linear interpolation vector between two vectors by a fraction
 * @param   {Vec2} a        - from vector
 * @param   {Vec2} b        - to vector
 * @param   {Number}  fraction - fraction of the line traveled from a to b
 * @returns {Vec2}
 */
Vec2.lerp = function(a, b, fraction) {
    return b.subtract(a).multiply(fraction).add(a);
};
/**
 * Creates a new vector from an array of the form [x,y]
 * @param   {Array}   a 
 * @returns {Vec2}
 */
Vec2.fromArray = function(a) {
    return new Vec2(a[0], a[1]);
};