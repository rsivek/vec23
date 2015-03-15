/** 
 * 3D vector
 * @class
 * @param {Number} x - x component
 * @param {Number} y - y component
 * @param {Number} z - z component
 */
function Vec3(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
}

Vec3.prototype = {
    /** Returns a new negative vector.
     * @memberof Vec3#
     * @return {Vec3}
     */
    negative: function() {
        return new Vec3(-this.x, -this.y, -this.z);
    },
    /** Negates the vector.
     * @memberof Vec3#
     * @return {Vec3}
     */
    _negative: function() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    },
    /**
    * Adds the vector to a vector or Number and returns a new vector.
    * @memberof Vec3#
    * @param   {Vec3|Vec2|Number} v vector or Number to add.
    * @returns {Vec3}                resulting vector
    */
    add: function(v) {
        if (v instanceof Vec3) {
            return new Vec3(this.x + v.x, this.y + v.y, this.z + v.z);
        }
        else if(v instanceof Vec2){
            return new Vec3(this.x + v.x, this.y + v.y, this.z);
        }
        else if(typeof v === 'number') {
            return new Vec3(this.x + v, this.y + v, this.z + v);
        }
        else {
            throw new TypeError('Invalid argument', v);
        }
    },
    /**
    * Adds the vector to a vector or Number.
    * @memberof Vec3#
    * @param   {Vec3|Vec2|Number} v vector or Number to add.
    * @returns {Vec3}                this vector
    */
    _add: function(v) {
        if (v instanceof Vec3) {
            this.x = this.x + v.x;
            this.y = this.y + v.y;
            this.z = this.z + v.z;
            return this;
        }
        else if(v instanceof Vec2){
            
            this.x = this.x + v.x;
            this.y = this.y + v.y;
            this.z = this.z;
            return this;
        }
        else if(typeof v === 'number') {
            this.x = this.x + v;
            this.y = this.y + v;
            this.z = this.z + v;
            return this;
        }
        else {
            throw new TypeError('Invalid argument', v);
        }
    },
    /**
    * Subtracts a vector or Number from the vector and returns a new vector.
    * @memberof Vec3#
    * @param   {Vec3|Vec2|Number} v vector or Number to subtract.
    * @returns {Vec3}                resulting vector
    */
    subtract: function(v) {
        if (v instanceof Vec3) {
            return new Vec3(this.x - v.x, this.y - v.y, this.z - v.z);
        }
        else if(v instanceof Vec2){
            return new Vec3(this.x - v.x, this.y - v.y, this.z);
        }
        else if(typeof v === 'number') {
            return new Vec3(this.x - v, this.y - v, this.z - v);
        }
        else {
            throw new TypeError('Invalid argument', v);
        }
    },
    /**
    * Subtracts a vector or Number from the vector.
    * @memberof Vec3#
    * @param   {Vec3|Vec2|Number} v vector or Number to subtract.
    * @returns {Vec3}                this vector
    */
    _subtract: function(v) {
        if (v instanceof Vec3) {
            this.x = this.x - v.x;
            this.y = this.y - v.y;
            this.z = this.z - v.z;
            return this;
        }
        else if(v instanceof Vec2){
            this.x = this.x - v.x;
            this.y = this.y - v.y;
            this.z = this.z;
            return this;
        }
        else if(typeof v === 'number') {
            this.x = this.x - v;
            this.y = this.y - v;
            this.z = this.z - v;
            return this;
        }
        else {
            throw new TypeError('Invalid argument', v);
        }
    },
    /**
    * Multiplies the vector with a Number or vector and returns a new vector.
    * @memberof Vec3#
    * @param   {Vec3|Vec2|Number} v vector or Number to multiply.
    * @returns {Vec3}                resulting vector
    */
    multiply: function(v) {
        if (v instanceof Vec3) {
            return new Vec3(this.x * v.x, this.y * v.y, this.z * v.z);
        }
        else if(v instanceof Vec2){
            return new Vec3(this.x * v.x, this.y * v.y, 0);
        }
        else if(typeof v === 'number') {
            return new Vec3(this.x * v, this.y * v, this.z * v);
        }
        else {
            throw new TypeError('Invalid argument', v);
        }
    },
    /**
    * Multiplies the vector with a Number or vector.
    * @memberof Vec3#
    * @param   {Vec3|Vec2|Number} v vector or Number to multiply.
    * @returns {Vec3}                this vector
    */
    _multiply: function(v) {
        if (v instanceof Vec3) {
            this.x = this.x * v.x;
            this.y = this.y * v.y;
            this.z = this.z * v.z;
            return this;
        }
        else if(v instanceof Vec2){
            this.x = this.x * v.x;
            this.y = this.y * v.y;
            this.z = 0;
            return this;
        }
        else if(typeof v === 'number') {
            this.x = this.x * v;
            this.y = this.y * v;
            this.z = this.z * v;
            return this;
        }
        else {
            throw new TypeError('Invalid argument', v);
        }
    },
    /**
    * Divides a Number or vector from the vector and returns a new vector
    * @memberof Vec3#
    * @param   {Vec3|Vec2|Number} v vector or Number to divide.
    * @returns {Vec3}                resulting vector
    */
    divide: function(v) {
        if (v instanceof Vec3) {
            return new Vec3(this.x / v.x, this.y / v.y, this.z / v.z);
        }
        else if(v instanceof Vec2){
            return new Vec3(this.x / v.x, this.y / v.y, 0);
        }
        else if(typeof v === 'number') {
            return new Vec3(this.x / v, this.y / v, this.z / v);
        }
        else {
            throw new TypeError('Invalid argument', v);
        }
    },
    /**
    * Divides a Number or vector from the vector.
    * @memberof Vec3#
    * @param   {Vec3|Vec2|Number} v vector or Number to divide.
    * @returns {Vec3}                this vector
    */
    _divide: function(v) {
        if (v instanceof Vec3) {
            this.x = this.x / v.x;
            this.y = this.y / v.y;
            this.z = this.z / v.z;
            return this;
        }
        else if(v instanceof Vec2){
            this.x = this.x / v.x;
            this.y = this.y / v.y;
            this.z = 0;
            return this;
        }
        else if(typeof v === 'number') {
            this.x = this.x / v;
            this.y = this.y / v;
            this.z = this.z / v;
            return this;
        }
        else {
            throw new TypeError('Invalid argument', v);
        }
    },
    /**
    * Tests whether the provided vector is equivalent.
    * @memberof Vec3#
    * @param   {Vec3} v Vector to compare.
    *                    @returns {boolean}
    */
    equals: function(v) {
        return this.x === v.x && this.y === v.y && this.z === v.z;
    },
    /**
    * Computes the dot product with a vector.
    * @memberof Vec3#
    * @param   {Vec3} v
    * @returns {Vec3}
    */
    dot: function(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    },
    /**
    * Computes the cross product with a vector and returns a new vector.
    * @memberof Vec3#
    * @param   {Vec3} v
    * @returns {Vec3}
    */
    cross: function(v) {
        if(v instanceof Vec2){
            return new Vec3(
                -this.z * v.y,
                this.z * v.x,
                this.x * v.y - this.y * v.x
            );
        }
        return new Vec3(
            this.y * v.z - this.z * v.y,
            this.z * v.x - this.x * v.z,
            this.x * v.y - this.y * v.x
        );
    },
    /**
    * Computes the cross product with a vector.
    * @memberof Vec3#
    * @param   {Vec3} v
    * @returns {Vec3}
    */
    _cross: function(v) {
        var x = this.x;
        var y = this.y;
        var z = this.z;
        if(v instanceof Vec2){
            this.x = -z * v.y;
            this.y = z * v.x;
            this.z = x * v.y - y * v.x;
        }
        else {
            this.x = y * v.z - z * v.y;
            this.y = z * v.x - x * v.z;
            this.z = x * v.y - y * v.x;
        }
        return this;
    },
    /**
    * Computes the length of the vector
    * @memberof Vec3#
    * @returns {Number}
    */
    length: function() {
        return Math.sqrt(this.dot(this));
    },
    /**
    * Creates a new vector from the current vector with the same direction but with provided length/magnitude.
    * @memberof Vec3#
    * @param   {Number} n
    * @returns {Vec3}
    */
    toLength: function(n){
        var mult = Math.sqrt(n*n/this.dot(this));
        return new Vec3(this.x*mult, this.y*mult, this.z*mult);
    },
    /**
    * Changes this vector to match the given length/magnitude, without modifying direction.
    * @memberof Vec3#
    * @param   {Number} n
    * @returns {Vec3}
    */
    _toLength: function(n){
        var mult = Math.sqrt(n*n/this.dot(this));
        this.x = this.x*mult;
        this.y = this.y*mult;
        this.z = this.z*mult;
        return this;
    },
    /**
    * Computes a new unit vector based on this vector.
    * @memberof Vec3#
    * @returns {Vec3}
    */
    unit: function() {
        return this.divide(this.length());
    },
    /**
    * Converts this vector to a unit vector
    * @memberof Vec3#
    * @returns {Vec3}
    */
    _unit: function() {
        return this._divide(this.length());
    },
    /**
    * Gets the minimum axis value
    * @memberof Vec3#
    * @returns {Number}
    */
    min: function() {
        return Math.min(Math.min(this.x, this.y), this.z);
    },
    /**
    * Gets the maximum axis value
    * @memberof Vec3#
    * @returns {Number}
    */
    max: function() {
        return Math.max(Math.max(this.x, this.y), this.z);
    },
    /**
    * Computes the theta & phi angles of the vector.
    * @memberof Vec3#
    * @returns {object} ret
    * @returns {Number} ret.theta - angle from the xz plane
    * @returns {Number} ret.phi - angle from the y axis                  
    */
    toAngles: function() {
        return {
            theta: Math.atan2(this.z, this.x),
            phi: Math.asin(this.y / this.length())
        };
    },
    /**
    * Converts the Vector to an array.
    * @memberof Vec3#
    * @returns {Array} array of the form [x,y,z]
    */
    toArray: function(n) {
        return [this.x, this.y, this.z].slice(0, n || 3);
    },
    /**
    * Creates a clone of the vector.
    * @memberof Vec3#
    * @returns {Vec3}
    */
    clone: function() {
        return new Vec3(this.x, this.y, this.z);
    },
    /**
     * Initializes the vector with new values
     * @memberof Vec3#
     * @param   {Number}  x 
     * @param   {Number}  y 
     * @param   {Number}  z 
     * @returns {Vec3}
     */
    init: function(x, y, z) {
        this.x = x; this.y = y; this.z = z;
        return this;
    },
    /**
    * Converts the vector to a string representation.
    * @memberof Vec3#
    * @param   {Number}  [dec=2] - number of decimal places to round to (default is 2)
    * @returns {string} string of the form {x: <x value>, y: <y value>, z: <z value>}
    */
    toString: function(dec) {
        if(!dec){
            dec = 2;
        }
        return '{x: ' + this.x.toFixed(dec) + ', y: ' + this.y.toFixed(dec)  + ', z: ' + this.z.toFixed(dec)  + '}';
    },
    /**
    * Converts the Vec3 to a Vec2 object
    * @memberof Vec3#
    * @returns {Vec2}
    */
    toVec2: function(){
        return new Vec2(this.x, this.y);
    },
    /**
     * Creates a new vector with each of the current x, y and z components rounded to the nearest whole Number.
     * @memberof Vec3#
     * @returns {Vec3}
     */
    round: function() {
        return new Vec3(Math.round(this.x), Math.round(this.y), Math.round(this.z));
    },
    /**
     * Rounds the x, y and z components to the nearest whole Number.
     * @memberof Vec3#
     * @returns {Vec3}
     */
    _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
    },
    /**
    * Returns the volume of a vector which is simply the multiplication of each axis value.
    * @memberof Vec3#
    * @returns {Number}
    */
    volume: function() {
        return this.x*this.y*this.z;
    },
    /**
    * Converts the vector to the appropriate JSON format.
    * @memberof Vec3#
    * @returns {Array}
    */
    toJSON: function() {
        return this.toArray();
    },
    /**
    * Creates a new vector converting the vector to a new coordinate frame.
    * @memberof Vec3#
    * @param {Array} m - Coordinate system matrix of the form [[xx,xy,xz],[yx,yy,yz],[zx,zy,zz]]
    * @returns {Vec3}
    */
    toCoordinateFrame: function(m){
        return new Vec3(
            this.x*m[0][0]+this.y*m[0][1]+this.z*m[0][2],
            this.x*m[1][0]+this.y*m[1][1]+this.z*m[1][2],
            this.x*m[2][0]+this.y*m[2][1]+this.z*m[2][2]
        );
    },
    /**
    * Converts this vector to a new coordinate frame.
    * @memberof Vec3#
    * @param {Array} m - Coordinate system matrix of the form [[Xx,Xy,Xz],[Yx,Yy,Yz],[Zx,Zy,Zz]]
    * @returns {Vec3}
    */
    _toCoordinateFrame: function(m){
        var x = this.x;
        var y = this.y;
        var z = this.z;
        this.x = x*m[0][0]+y*m[0][1]+z*m[0][2];
        this.y = x*m[1][0]+y*m[1][1]+z*m[1][2];
        this.z = x*m[2][0]+y*m[2][1]+z*m[2][2];
        return this;
    },
    /**
    * Rotates the vector by the given angles, one at a time and returns a new vector.
    * @memberof Vec3#
    * @param {Number} k - rotation about the first axis.
    * @param {Number} p - rotation about the second axis.
    * @param {Number} o - rotation about the third axis.
    * @param {String} [order='XYZ'] - case insensitive string representing the rotation order from left to right. Any permutation of 'XYZ' ('XZY', 'ZYX', etc.)
    * @returns {Vec3}
    */
    rotate: function(k, p, o, order) {
        order = order || Vec3.defaultRotationOrder;
        var cos = Math.cos;
        var sin = Math.sin;
        
        switch(order.toUpperCase()){
            case 'ZYX':
                return new Vec3(
                    (cos(p)*cos(k)*this.x+cos(p)*sin(k)*this.y+(-sin(p))*this.z),
                    ((sin(o)*sin(p)*cos(k)+cos(o)*(-sin(k)))*this.x+(sin(o)*sin(p)*sin(k)+cos(o)*cos(k))*this.y+sin(o)*cos(p)*this.z),
                    ((cos(o)*sin(p)*cos(k)+(-sin(o))*(-sin(k)))*this.x+(cos(o)*sin(p)*sin(k)+(-sin(o))*cos(k))*this.y+cos(o)*cos(p)*this.z)
                );
            case 'YZX':
                return new Vec3(
                    (cos(p)*cos(k)*this.x+sin(p)*this.y+cos(p)*(-sin(k))*this.z),
                    ((cos(o)*(-sin(p))*cos(k)+sin(o)*sin(k))*this.x+cos(o)*cos(p)*this.y+(cos(o)*(-sin(p))*(-sin(k))+sin(o)*cos(k))*this.z),
                    ((((-sin(o))*(-sin(p)))*cos(k)+cos(o)*sin(k))*this.x+(-sin(o))*cos(p)*this.y+(((-sin(o))*(-sin(p)))*(-sin(k))+cos(o)*cos(k))*this.z)
                );
            case 'ZXY':
                return new Vec3(
                    ((cos(o)*cos(k)+((-sin(o))*(-sin(p)))*(-sin(k)))*this.x+(cos(o)*sin(k)+((-sin(o))*(-sin(p)))*cos(k))*this.y+(-sin(o))*cos(p)*this.z),
                    (cos(p)*(-sin(k))*this.x+cos(p)*cos(k)*this.y+sin(p)*this.z),
                    ((sin(o)*cos(k)+cos(o)*(-sin(p))*(-sin(k)))*this.x+(sin(o)*sin(k)+cos(o)*(-sin(p))*cos(k))*this.y+cos(o)*cos(p)*this.z)
                );
            case 'XZY':
                return new Vec3(
                    (cos(o)*cos(p)*this.x+(cos(o)*sin(p)*cos(k)+(-sin(o))*(-sin(k)))*this.y+(cos(o)*sin(p)*sin(k)+(-sin(o))*cos(k))*this.z),
                    ((-sin(p))*this.x+cos(p)*cos(k)*this.y+cos(p)*sin(k)*this.z),
                    (sin(o)*cos(p)*this.x+(sin(o)*sin(p)*cos(k)+cos(o)*(-sin(k)))*this.y+(sin(o)*sin(p)*sin(k)+cos(o)*cos(k))*this.z)
                );
            case 'YXZ':
                return new Vec3(
                    ((cos(o)*cos(k)+sin(o)*sin(p)*sin(k))*this.x+sin(o)*cos(p)*this.y+(cos(o)*(-sin(k))+sin(o)*sin(p)*cos(k))*this.z),
                    (((-sin(o))*cos(k)+cos(o)*sin(p)*sin(k))*this.x+cos(o)*cos(p)*this.y+((-sin(o))*(-sin(k))+cos(o)*sin(p)*cos(k))*this.z),
                    (cos(p)*sin(k)*this.x+(-sin(p))*this.y+cos(p)*cos(k)*this.z)
                );
            default:
            case 'XYZ':
                return new Vec3(
                    (cos(o)*cos(p)*this.x+(sin(o)*cos(k)+cos(o)*(-sin(p))*(-sin(k)))*this.y+(sin(o)*sin(k)+cos(o)*(-sin(p))*cos(k))*this.z),
                    ((-sin(o))*cos(p)*this.x+(cos(o)*cos(k)+((-sin(o))*(-sin(p)))*(-sin(k)))*this.y+(cos(o)*sin(k)+((-sin(o))*(-sin(p)))*cos(k))*this.z),
                    (sin(p)*this.x+cos(p)*(-sin(k))*this.y+cos(p)*cos(k)*this.z)
                );
        }
            
    },
    /**
    * Rotates the vector in place by the given angles, one at a time.
    * @memberof Vec3#
    * @param {Number} k - rotation about the first axis.
    * @param {Number} p - rotation about the second axis.
    * @param {Number} o - rotation about the third axis.
    * @param {String} [order='XYZ'] - case insensitive string representing the rotation order from left to right. Any permutation of 'XYZ' ('XZY', 'ZYX', etc.)
    * @returns {Vec3}
    */
    _rotate: function(k, p, o, order) {
        order = order || Vec3.defaultRotationOrder;
        var cos = Math.cos;
        var sin = Math.sin;
        var x = this.x;
        var y = this.y;
        var z = this.z;
        
        switch(order.toUpperCase()){
            case 'ZYX':
                this.x = (cos(p)*cos(k)*x+cos(p)*sin(k)*y+(-sin(p))*z);
                this.y = ((sin(o)*sin(p)*cos(k)+cos(o)*(-sin(k)))*x+(sin(o)*sin(p)*sin(k)+cos(o)*cos(k))*y+sin(o)*cos(p)*z);
                this.z = ((cos(o)*sin(p)*cos(k)+(-sin(o))*(-sin(k)))*x+(cos(o)*sin(p)*sin(k)+(-sin(o))*cos(k))*y+cos(o)*cos(p)*z);
                return this;
            case 'YZX':
                this.x = (cos(p)*cos(k)*x+sin(p)*y+cos(p)*(-sin(k))*z);
                this.y = ((cos(o)*(-sin(p))*cos(k)+sin(o)*sin(k))*x+cos(o)*cos(p)*y+(cos(o)*(-sin(p))*(-sin(k))+sin(o)*cos(k))*z);
                this.z = ((((-sin(o))*(-sin(p)))*cos(k)+cos(o)*sin(k))*x+(-sin(o))*cos(p)*y+(((-sin(o))*(-sin(p)))*(-sin(k))+cos(o)*cos(k))*z);
                return this;
            case 'ZXY':
                this.x = ((cos(o)*cos(k)+((-sin(o))*(-sin(p)))*(-sin(k)))*x+(cos(o)*sin(k)+((-sin(o))*(-sin(p)))*cos(k))*y+(-sin(o))*cos(p)*z);
                this.y = (cos(p)*(-sin(k))*x+cos(p)*cos(k)*y+sin(p)*z);
                this.z = ((sin(o)*cos(k)+cos(o)*(-sin(p))*(-sin(k)))*x+(sin(o)*sin(k)+cos(o)*(-sin(p))*cos(k))*y+cos(o)*cos(p)*z);
                return this;
            case 'XZY':
                this.x = (cos(o)*cos(p)*x+(cos(o)*sin(p)*cos(k)+(-sin(o))*(-sin(k)))*y+(cos(o)*sin(p)*sin(k)+(-sin(o))*cos(k))*z);
                this.y = ((-sin(p))*x+cos(p)*cos(k)*y+cos(p)*sin(k)*z);
                this.z = (sin(o)*cos(p)*x+(sin(o)*sin(p)*cos(k)+cos(o)*(-sin(k)))*y+(sin(o)*sin(p)*sin(k)+cos(o)*cos(k))*z);
                return this;
            case 'YXZ':
                this.x = ((cos(o)*cos(k)+sin(o)*sin(p)*sin(k))*x+sin(o)*cos(p)*y+(cos(o)*(-sin(k))+sin(o)*sin(p)*cos(k))*z);
                this.y = (((-sin(o))*cos(k)+cos(o)*sin(p)*sin(k))*x+cos(o)*cos(p)*y+((-sin(o))*(-sin(k))+cos(o)*sin(p)*cos(k))*z);
                this.z = (cos(p)*sin(k)*x+(-sin(p))*y+cos(p)*cos(k)*z);
                return this;
            default:
            case 'XYZ':
                this.x = (cos(o)*cos(p)*x+(sin(o)*cos(k)+cos(o)*(-sin(p))*(-sin(k)))*y+(sin(o)*sin(k)+cos(o)*(-sin(p))*cos(k))*z);
                this.y = ((-sin(o))*cos(p)*x+(cos(o)*cos(k)+((-sin(o))*(-sin(p)))*(-sin(k)))*y+(cos(o)*sin(k)+((-sin(o))*(-sin(p)))*cos(k))*z);
                this.z = (sin(p)*x+cos(p)*(-sin(k))*y+cos(p)*cos(k)*z);
                return this;
        }
            
    },
    /**
     * Raises each component of the vector to the power p and returns a new vector.
     * @memberof Vec3#
     * @returns {Vec3}
     */
    pow: function(p){
        return new Vec3(Math.pow(this.x, p), Math.pow(this.y, p), Math.pow(this.z, p));
    },
    /**
     * Raises each component of the vector to the power p.
     * @memberof Vec3#
     * @returns {Vec3}
     */
    _pow: function(p){
        this.x = Math.pow(this.x, p);
        this.y = Math.pow(this.y, p);
        this.z = Math.pow(this.z, p);
        return this;
    }
};

/**
 * Default vector axis rotation order. This can be modified to change the default rotation order in a particular application.
 */
Vec3.defaultRotationOrder = 'XYZ';

/**
 * Computes the cartesian distance between a and b
 * @param   {Vec3}  a 
 * @param   {Vec3}  b 
 * @returns {Number}
 */
Vec3.distance = function(a, b){
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2) + Math.pow(b.z - a.z, 2));
};
/**
 * Creates a new Vec3 from theta and phi angles
 * @param   {Number}  theta 
 * @param   {Number}  phi   
 * @returns {Vec3} 
 */
Vec3.fromAngles = function(theta, phi) {
    return new Vec3(Math.cos(theta) * Math.cos(phi), Math.sin(phi), Math.sin(theta) * Math.cos(phi));
};
/**
 * Creates a random unit vector
 * @returns {Vec3} 
 */
Vec3.randomDirection = function() {
    return Vec3.fromAngles(Math.random() * Math.PI * 2, Math.asin(Math.random() * 2 - 1));
};
/**
 * Creates a new vector where each component is the minimum of the arguments
 * @param   {Vec3} a 
 * @param   {Vec3} b 
 * @returns {Vec3}
 */
Vec3.min = function(a, b) {
    return new Vec3(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z));
};
/**
 * Creates a new vector where each component is the maximum of the arguments
 * @param   {Vec3} a 
 * @param   {Vec3} b 
 * @returns {Vec3}
 */
Vec3.max = function(a, b) {
    return new Vec3(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z));
};
/**
 * Computes a linear interpolation vector between two vectors by a fraction
 * @param   {Vec3} a        - from vector
 * @param   {Vec3} b        - to vector
 * @param   {Number}  fraction - fraction of the line traveled from a to b
 * @returns {Vec3}
 */
Vec3.lerp = function(a, b, fraction) {
    return b.subtract(a).multiply(fraction).add(a);
};
/**
 * Converts an array of the form [x,y,z] to a new Vec3
 * @param   {Array}   a 
 * @returns {Vec3}
 */
Vec3.fromArray = function(a) {
    return new Vec3(a[0], a[1], a[2]);
};