/*
vec23 v0.1.0

A simple 2D and 3D Vector Library for JavaScript.

The MIT License (MIT)

Copyright (c) 2015 Ryan Sivek

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports === 'object') {
    factory(exports);
  } else {
    factory((root['vec23'] = {}));
  }
}(this, function (root) {

'use strict';
function Vec2(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Vec2.prototype = {
        negative: function() {
        return new Vec2(-this.x, -this.y);
    },
        _negative: function() {
        this.x = -this.x;
        this.y = - this.y;
        return this;
    },
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
        equals: function(v) {
        return this.x === v.x && this.y === v.y;
    },
        dot: function(v) {
        return this.x * v.x + this.y * v.y;
    },
        cross: function(v) {
        if(v instanceof Vec3){
            return this.toVec3()._cross(v);
        }
        return new Vec3(0,0, this.x * v.y - this.y * v.x);
    },
        length: function() {
        return Math.sqrt(this.dot(this));
    },
        toLength: function(n){
        var mult = Math.sqrt(n*n/this.dot(this));
        return new Vec2(this.x*mult, this.y*mult);
    },
        _toLength: function(n){
        var mult = Math.sqrt(n*n/this.dot(this));
        this._multiply(mult);
        return this;
    },
        unit: function() {
        return this.divide(this.length());
    },
        _unit: function() {
        return this._divide(this.length());
    },
        min: function() {
        return Math.min(this.x, this.y);
    },
        max: function() {
        return Math.max(this.x, this.y);
    },
        toAngle: function() {
        return Math.atan2(this.y, this.x);
    },
        toArray: function(n) {
        return [this.x, this.y].slice(0, n || 2);
    },
        clone: function() {
        return new Vec2(this.x, this.y);
    },
        toString: function(dec) {
        if(!dec){
            dec = 2;
        }
        return '{x: ' + this.x.toFixed(dec) + ', y: ' + this.y.toFixed(dec)  + '}';
    },
        toVec3: function(){
        return new Vec3(this.x, this.y, 0);
    },
        round: function() {
        return new Vec2(Math.round(this.x), Math.round(this.y));
    },
        _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    },
        area: function() {
        return this.x*this.y;
    },
        toJSON: function() {
        return this.toArray();
    },
        toCoordinateFrame: function(m){
        return new Vec2(
            this.x*m[0][0]+this.y*m[0][1],
            this.x*m[1][0]+this.y*m[1][1]
        );
    },
        _toCoordinateFrame: function(m){
        var x = this.x;
        var y = this.y;
        this.x = x*m[0][0]+y*m[0][1];
        this.y = x*m[1][0]+y*m[1][1];
        return this;
    },
        rotate: function(theta){
        return new Vec2(
            this.x*Math.cos(theta)-this.y*Math.sin(theta), 
            this.x*Math.sin(theta)+this.y*Math.cos(theta)
        );
    },
        _rotate: function(theta){
        var x = this.x;
        var y = this.y;
        this.x = x*Math.cos(theta)-y*Math.sin(theta);
        this.y = x*Math.sin(theta)+y*Math.cos(theta);
        return this;
    },
        pow: function(p){
        return new Vec2(Math.pow(this.x, p), Math.pow(this.y, p));
    },
        _pow: function(p){
        this.x = Math.pow(this.x, p);
        this.y = Math.pow(this.y, p);
        return this;
    }
};

Vec2.distance = function(a, b){
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
};
Vec2.fromAngle = function(theta) {
    return new Vec2(Math.cos(theta), Math.sin(theta));
};
Vec2.randomDirection = function() {
    return Vec2.fromAngle(Math.random() * Math.PI * 2);
};
Vec2.min = function(a, b) {
    return new Vec2(Math.min(a.x, b.x), Math.min(a.y, b.y));
};
Vec2.max = function(a, b) {
    return new Vec2(Math.max(a.x, b.x), Math.max(a.y, b.y));
};
Vec2.lerp = function(a, b, fraction) {
    return b.subtract(a).multiply(fraction).add(a);
};
Vec2.fromArray = function(a) {
    return new Vec2(a[0], a[1]);
};
function Vec3(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
}

Vec3.prototype = {
        negative: function() {
        return new Vec3(-this.x, -this.y, -this.z);
    },
        _negative: function() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    },
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
        equals: function(v) {
        return this.x === v.x && this.y === v.y && this.z === v.z;
    },
        dot: function(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    },
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
        length: function() {
        return Math.sqrt(this.dot(this));
    },
        toLength: function(n){
        var mult = Math.sqrt(n*n/this.dot(this));
        return new Vec3(this.x*mult, this.y*mult, this.z*mult);
    },
        _toLength: function(n){
        var mult = Math.sqrt(n*n/this.dot(this));
        this.x = this.x*mult;
        this.y = this.y*mult;
        this.z = this.z*mult;
        return this;
    },
        unit: function() {
        return this.divide(this.length());
    },
        _unit: function() {
        return this._divide(this.length());
    },
        min: function() {
        return Math.min(Math.min(this.x, this.y), this.z);
    },
        max: function() {
        return Math.max(Math.max(this.x, this.y), this.z);
    },
        toAngles: function() {
        return {
            theta: Math.atan2(this.z, this.x),
            phi: Math.asin(this.y / this.length())
        };
    },
        toArray: function(n) {
        return [this.x, this.y, this.z].slice(0, n || 3);
    },
        clone: function() {
        return new Vec3(this.x, this.y, this.z);
    },
        init: function(x, y, z) {
        this.x = x; this.y = y; this.z = z;
        return this;
    },
        toString: function(dec) {
        if(!dec){
            dec = 2;
        }
        return '{x: ' + this.x.toFixed(dec) + ', y: ' + this.y.toFixed(dec)  + ', z: ' + this.z.toFixed(dec)  + '}';
    },
        toVec2: function(){
        return new Vec2(this.x, this.y);
    },
        round: function() {
        return new Vec3(Math.round(this.x), Math.round(this.y), Math.round(this.z));
    },
        _round: function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        this.z = Math.round(this.z);
        return this;
    },
        volume: function() {
        return this.x*this.y*this.z;
    },
        toJSON: function() {
        return this.toArray();
    },
        toCoordinateFrame: function(m){
        return new Vec3(
            this.x*m[0][0]+this.y*m[0][1]+this.z*m[0][2],
            this.x*m[1][0]+this.y*m[1][1]+this.z*m[1][2],
            this.x*m[2][0]+this.y*m[2][1]+this.z*m[2][2]
        );
    },
        _toCoordinateFrame: function(m){
        var x = this.x;
        var y = this.y;
        var z = this.z;
        this.x = x*m[0][0]+y*m[0][1]+z*m[0][2];
        this.y = x*m[1][0]+y*m[1][1]+z*m[1][2];
        this.z = x*m[2][0]+y*m[2][1]+z*m[2][2];
        return this;
    },
        rotation: function(k, p, o, order) {
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
        _rotation: function(k, p, o, order) {
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
        pow: function(p){
        return new Vec3(Math.pow(this.x, p), Math.pow(this.y, p), Math.pow(this.z, p));
    },
        _pow: function(p){
        this.x = Math.pow(this.x, p);
        this.y = Math.pow(this.y, p);
        this.z = Math.pow(this.z, p);
        return this;
    }
};

Vec3.defaultRotationOrder = 'XYZ';

Vec3.distance = function(a, b){
    return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2) + Math.pow(b.z - a.z, 2));
};
Vec3.fromAngles = function(theta, phi) {
    return new Vec3(Math.cos(theta) * Math.cos(phi), Math.sin(phi), Math.sin(theta) * Math.cos(phi));
};
Vec3.randomDirection = function() {
    return Vec3.fromAngles(Math.random() * Math.PI * 2, Math.asin(Math.random() * 2 - 1));
};
Vec3.min = function(a, b) {
    return new Vec3(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z));
};
Vec3.max = function(a, b) {
    return new Vec3(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z));
};
Vec3.lerp = function(a, b, fraction) {
    return b.subtract(a).multiply(fraction).add(a);
};
Vec3.fromArray = function(a) {
    return new Vec3(a[0], a[1], a[2]);
};

root.Vec2 = Vec2;
root.Vec3 = Vec3;

}));
