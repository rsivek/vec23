describe("Vec2 2D Vector", function() {
    'use strict';

    var vA,vB,vC;
    
    beforeEach(function() {
        vA = undefined;
        vB = undefined;
        vC = undefined;
    });

    it("should initialize x and y components", function() {
        vA = new Vec2(2,4);
        expect(vA.x).toEqual(2);
        expect(vA.y).toEqual(4);
    });

    it("tests the negative() method", function() {
        vA = new Vec2(2,4);
        vB = vA.negative();
        expect(vB instanceof Vec2).toBe(true);
        expect(vB).not.toBe(vA);
        expect(vB.x).toEqual(-2);
        expect(vB.y).toEqual(-4);
    });

    it("tests the _negative() method", function() {
        vA = new Vec2(2,4);
        vB = vA._negative();
        expect(vB).toBe(vA);
        expect(vA.x).toEqual(-2);
        expect(vA.y).toEqual(-4);
    });

    it("adds a Vec2", function() {
        vA = new Vec2(2,4);
        vB = new Vec2(3,5);
        vC = vA.add(vB);
        expect(vC instanceof Vec2).toBe(true);
        expect(vC).not.toBe(vA);
        expect(vC).not.toBe(vB);
        expect(vC.x).toEqual(5);
        expect(vC.y).toEqual(9);
    });

    it("adds a Vec3", function() {
        vA = new Vec2(2,4);        
        vB = new Vec3(3,5,1);
        vC = vA.add(vB);
        expect(vC instanceof Vec2).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC.x).toEqual(5);
        expect(vC.y).toEqual(9);
    });

    it("adds a Number", function() {
        vA = new Vec2(2,4);        
        vC = vA.add(3);
        expect(vC instanceof Vec2).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC.x).toEqual(5);
        expect(vC.y).toEqual(7);
    });

    it("_adds a Vec2", function() {
        vA = new Vec2(2,4);
        vB = new Vec2(3,5);
        vC = vA._add(vB);
        expect(vC === vA).toBe(true);
        expect(vC.x).toEqual(5);
        expect(vC.y).toEqual(9);
    });

    it("_adds a Vec3", function() {
        vA = new Vec2(2,4);
        vB = new Vec3(1,1,1);
        vC = vA._add(vB);
        expect(vC === vA).toBe(true);
        expect(vC.x).toEqual(3);
        expect(vC.y).toEqual(5);
    });

    it("_adds a Number", function() {
        vA = new Vec2(2,4);
        vC = vA._add(3);
        expect(vC === vA).toBe(true);
        expect(vC.x).toEqual(5);
        expect(vC.y).toEqual(7);
    });

    it("subtracts a Vec2", function() {
        vA = new Vec2(2,7);
        vB = new Vec2(3,5);
        vC = vA.subtract(vB);
        expect(vC instanceof Vec2).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC.x).toEqual(-1);
        expect(vC.y).toEqual(2);
    });

    it("subtracts a Vec3", function() {
        vA = new Vec2(2,7);
        vB = new Vec3(3,5,1);
        vC = vA.subtract(vB);
        expect(vC instanceof Vec2).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC.x).toEqual(-1);
        expect(vC.y).toEqual(2);
    });

    it("subtracts a Number", function() {
        vA = new Vec2(2,7);
        vC = vA.subtract(3);
        expect(vC instanceof Vec2).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC.x).toEqual(-1);
        expect(vC.y).toEqual(4);
    });

    it("_subtracts a Vec2", function() {
        vA = new Vec2(2,7);
        vB = new Vec2(3,5);
        vC = vA._subtract(vB);
        expect(vC === vA).toBe(true);
        expect(vC.x).toEqual(-1);
        expect(vC.y).toEqual(2);
    });

    it("_subtracts a Vec3", function() {
        vA = new Vec2(2,7);
        vB = new Vec3(3,5,1);
        vC = vA._subtract(vB);
        expect(vC === vA).toBe(true);
        expect(vC.x).toEqual(-1);
        expect(vC.y).toEqual(2);
    });

    it("_subtracts a Number", function() {
        vA = new Vec2(2,7);
        vC = vA._subtract(3);
        expect(vC === vA).toBe(true);
        expect(vC.x).toEqual(-1);
        expect(vC.y).toEqual(4);
    });

    it("multiplies a Vec2", function() {
        vA = new Vec2(1,2);
        vB = new Vec2(3,4);
        vC = vA.multiply(vB);
        expect(vC instanceof Vec2).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC.x).toEqual(3);
        expect(vC.y).toEqual(8);
    });

    it("multiplies a Vec3", function() {
        vA = new Vec2(1,2);       
        vB = new Vec3(3,4,3);
        vC = vA.multiply(vB);
        expect(vC instanceof Vec2).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC.x).toEqual(3);
        expect(vC.y).toEqual(8);
    });

    it("multiplies a Number", function() {
        vA = new Vec2(1,2);       
        vC = vA.multiply(3);
        expect(vC instanceof Vec2).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC.x).toEqual(3);
        expect(vC.y).toEqual(6);
    });

    it("_multiplies a Vec2", function() {
        vA = new Vec2(1,2);
        vB = new Vec2(3,4);
        vC = vA._multiply(vB);
        expect(vC === vA).toBe(true);
        expect(vC.x).toEqual(3);
        expect(vC.y).toEqual(8);
    });

    it("_multiplies a Vec3", function() {
        vA = new Vec2(1,2);       
        vB = new Vec3(3,4,3);
        vC = vA._multiply(vB);
        expect(vC === vA).toBe(true);
        expect(vC.x).toEqual(3);
        expect(vC.y).toEqual(8);
    });

    it("_multiplies a Number", function() {
        vA = new Vec2(1,2);       
        vC = vA._multiply(3);
        expect(vC === vA).toBe(true);
        expect(vC.x).toEqual(3);
        expect(vC.y).toEqual(6);
    });

    it("divides a Vec2", function() {
        vA = new Vec2(1,2);
        vB = new Vec2(3,4);
        vC = vA.divide(vB);
        expect(vC instanceof Vec2).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC.x).toEqual(1/3);
        expect(vC.y).toEqual(2/4);
    });

    it("divides a Vec3", function() {
        vA = new Vec2(1,2);
        vB = new Vec3(3,4);
        vC = vA.divide(vB);
        expect(vC instanceof Vec2).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC.x).toEqual(1/3);
        expect(vC.y).toEqual(2/4);
    });

    it("divides a Number", function() {
        vA = new Vec2(1,2);
        vC = vA.divide(3);
        expect(vC instanceof Vec2).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC.x).toEqual(1/3);
        expect(vC.y).toEqual(2/3);
    });

    it("_divides a Vec2", function() {
        vA = new Vec2(1,2);
        vB = new Vec2(3,4);
        vC = vA._divide(vB);
        expect(vC === vA).toBe(true);
        expect(vC.x).toEqual(1/3);
        expect(vC.y).toEqual(2/4);
    });

    it("_divides a Vec3", function() {
        vA = new Vec2(1,2);
        vB = new Vec3(3,4);
        vC = vA._divide(vB);
        expect(vC === vA).toBe(true);
        expect(vC.x).toEqual(1/3);
        expect(vC.y).toEqual(2/4);
    });

    it("_divides a Number", function() {
        vA = new Vec2(1,2);
        vC = vA._divide(3);
        expect(vC === vA).toBe(true);
        expect(vC.x).toEqual(1/3);
        expect(vC.y).toEqual(2/3);
    });

    it("tests the equals() method", function() {
        vA = new Vec2(1,2);
        vB = new Vec2(3,4);
        vC = new Vec2(1,2);
        expect(vA.equals(vB)).toBe(false);
        expect(vA.equals(vC)).toBe(true);
    });

    it("tests the dot() method", function() {
        vA = new Vec2(1,2);
        vB = new Vec2(3,4);
        expect(vA.dot(vB)).toEqual(11);
    });

    it("tests the cross() method", function() {
        vA = new Vec2(1,2);
        vB = new Vec2(3,4);
        vC = vA.cross(vB);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC.x).toEqual(0);
        expect(vC.y).toEqual(0);
        expect(vC.z).toEqual(-2);
    });

    it("retrieves the length", function() {
        vA = new Vec2(1,2);
        expect(vA.length()).toEqual(Math.sqrt(5));
    });

    it("gets the angle of the vector", function() {
        vA = new Vec2(1,1);
        expect(vA.toAngle()).toEqual(Math.PI/4);
    });

    it("creates a new Vec2 with given length without changing direction", function() {
        vA = new Vec2(1,1);
        vB = vA.toLength(5);
        expect(vA === vB).toBe(false);
        expect(vB.length()).toEqual(5);
        expect(vB.toAngle()).toEqual(Math.PI/4);
    });

    it("modifies the length without changing direction", function() {
        vA = new Vec2(1,1)._toLength(5);
        expect(vA.length()).toEqual(5);
        expect(vA.toAngle()).toEqual(Math.PI/4);
    });

    it("creates a new unit vector", function() {
        vA = new Vec2(1,1);
        vB = vA.unit();
        expect(vA === vB).toBe(false);
        expect(vB.x.toFixed(10)).toEqual((Math.sqrt(2)/2).toFixed(10));
        expect(vB.y.toFixed(10)).toEqual((Math.sqrt(2)/2).toFixed(10));
    });

    it("changes into a unit vector", function() {
        vA = new Vec2(1,1);
        vB = vA._unit();
        expect(vA === vB).toBe(true);
        expect(vA.x.toFixed(10)).toEqual((Math.sqrt(2)/2).toFixed(10));
        expect(vA.y.toFixed(10)).toEqual((Math.sqrt(2)/2).toFixed(10));
    });

    it("gets the minimum axis value", function() {
        vA = new Vec2(1,5);
        expect(vA.min()).toEqual(1);
    });

    it("gets the maximum axis value", function() {
        vA = new Vec2(1,5);
        expect(vA.max()).toEqual(5);
    });

    it("converts to an Array", function() {
        vA = new Vec2(1,5).toArray();
        expect(vA).toEqual([1,5]);
    });

    it("clones to a new Vec2", function() {
        vA = new Vec2(1,5);
        vB = vA.clone();
        expect(vB).not.toBe(vA);
        expect(vB.x).toEqual(1);
        expect(vB.y).toEqual(5);
    });

    it("converts to a string with customizable precision", function() {
        vA = new Vec2(1.234792346,5.132476123);
        expect(typeof vA.toString()).toBe('string');
        expect(vA.toString(3)).toBe('{x: 1.235, y: 5.132}');
    });

    it("converts to a Vec3", function() {
        vA = new Vec2(2,3);
        vB = vA.toVec3();
        expect(vB).not.toBe(vA);
        expect(vB instanceof Vec3).toBe(true);
        expect(vB.x).toEqual(2);
        expect(vB.y).toEqual(3);
        expect(vB.z).toEqual(0);
    });

    it("rounds each component to the nearest whole number and returns a new Vec2", function() {
        vA = new Vec2(2.23461344,3.6908274);
        vB = vA.round();
        expect(vB).not.toBe(vA);
        expect(vB instanceof Vec2).toBe(true);
        expect(vB.x).toEqual(2);
        expect(vB.y).toEqual(4);
    });

    it("_rounds each component to the nearest whole number", function() {
        vA = new Vec2(2.23461344,3.6908274);
        vB = vA._round();
        expect(vB).toBe(vA);
        expect(vB.x).toEqual(2);
        expect(vB.y).toEqual(4);
    });

    it("converts to an array for JSON", function() {
        vA = new Vec2(2,3);
        expect(vA.toJSON()).toEqual([2,3]);
    });

    it("creates a new Vec2 converting to a different coordinate frame", function() {
        vA = new Vec2(2,2);
        vB = vA.toCoordinateFrame([[0, -1], [1,0]]);
        expect(vB).not.toBe(vA);
        expect(vB).toEqual({x: -2, y: 2});
    });

    it("converts to a different coordinate frame", function() {
        vA = new Vec2(2,2);
        vB = vA._toCoordinateFrame([[0, -1], [1,0]]);
        expect(vB).toBe(vA);
        expect(vB).toEqual({x: -2, y: 2});
    });

    it("rotates counterclockwise by theta", function() {
        vA = new Vec2(1,0);
        vB = vA.rotate(Math.PI/2);
        expect(vB).not.toBe(vA);
        expect(vB.x.toFixed(10)).toEqual('0.0000000000');
        expect(vB.y).toEqual(1);
    });

    it("_rotates counterclockwise by theta", function() {
        vA = new Vec2(1,0);
        vB = vA._rotate(Math.PI/2);
        expect(vB).toBe(vA);
        expect(vB.x.toFixed(10)).toEqual('0.0000000000');
        expect(vB.y).toEqual(1);
    });

    it("raises each component to the power p and returns a new Vec2", function() {
        vA = new Vec2(2,3);
        vB = vA.pow(2);
        expect(vB).not.toBe(vA);
        expect(vB).toEqual({x: 4, y: 9});
    });

    it("raises each component in place to the power p", function() {
        vA = new Vec2(2,3);
        vB = vA._pow(2);
        expect(vB).toBe(vA);
        expect(vB).toEqual({x: 4, y: 9});
    });

    // Static methods
    it("calculates the distance between two Vec2's", function() {
        vA = new Vec2(2,3);
        vB = new Vec2(-3,4);
        expect(Vec2.distance(vA,vB))
        .toEqual(Math.sqrt(Math.pow(vB.x - vA.x, 2) + Math.pow(vB.y - vA.y, 2)));
    });

    it("creates a unit vector from an angle", function() {
        vA = Vec2.fromAngle(Math.PI/2);
        expect(vA.x.toFixed(10)).toEqual('0.0000000000');
        expect(vA.y).toEqual(1);
    });

    it("creates a random Vec2", function() {
        vA = Vec2.randomDirection();
        expect(vA instanceof Vec2).toBe(true);
    });

    it("creates a new Vec2 with the minimum values of each component", function() {
        vA = new Vec2(3,7);
        vB = new Vec2(5,6);
        expect(Vec2.min(vA,vB)).toEqual({x: 3, y: 6});
    });

    it("creates a new Vec2 with the maximum values of each component", function() {
        vA = new Vec2(3,7);
        vB = new Vec2(5,6);
        expect(Vec2.max(vA,vB)).toEqual({x: 5, y: 7});
    });

    it("computes a linear interpolation vector between two vectors", function() {
        vA = new Vec2(2,2);
        vB = new Vec2(-2,-2);
        expect(Vec2.lerp(vA, vB, 0.5)).toEqual({x: 0, y: 0});
    });

    it("initializes a Vec2 from an array", function() {
        vA = Vec2.fromArray([3,5]);
        expect(vA instanceof Vec2).toBe(true);
        expect(vA).toEqual({x: 3, y: 5});
    });

});