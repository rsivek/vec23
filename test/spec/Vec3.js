describe("Vec3 3D Vector", function() {
    'use strict';

    var vA,vB,vC;
    
    beforeEach(function() {
        vA = undefined;
        vB = undefined;
        vC = undefined;
    });

    it("should initialize x and y components", function() {
        vA = new Vec3(2,4);
        expect(vA.x).toEqual(2);
        expect(vA.y).toEqual(4);
    });

    it("tests the negative() method", function() {
        vA = new Vec3(2,4,6);
        vB = vA.negative();
        expect(vB instanceof Vec3).toBe(true);
        expect(vB).not.toBe(vA);
        expect(vB).toEqual({x: -2, y: -4, z: -6});
    });

    it("tests the _negative() method", function() {
        vA = new Vec3(2,4,6);
        vB = vA._negative();
        expect(vB).toBe(vA);
        expect(vB).toEqual({x: -2, y: -4, z: -6});
    });

    it("adds a Vec3", function() {
        vA = new Vec3(2,4,6);
        vB = new Vec3(3,5,7);
        vC = vA.add(vB);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC).not.toBe(vA);
        expect(vC).not.toBe(vB);
        expect(vC).toEqual({x: 5, y: 9, z: 13});
    });

    it("adds a Vec2", function() {
        vA = new Vec3(2,4,6);        
        vB = new Vec2(3,5);
        vC = vA.add(vB);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC).not.toBe(vA);
        expect(vC).not.toBe(vB);
        expect(vC).toEqual({x: 5, y: 9, z: 6});
    });

    it("adds a Number", function() {
        vA = new Vec3(2,4,6);        
        vC = vA.add(3);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC).not.toBe(vA);
        expect(vC).not.toBe(vB);
        expect(vC).toEqual({x: 5, y: 7, z: 9});
    });

    it("_adds a Vec3", function() {
        vA = new Vec3(2,4,6);
        vB = new Vec3(3,5,7);
        vC = vA._add(vB);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC).toBe(vA);
        expect(vC).toEqual({x: 5, y: 9, z: 13});
    });

    it("_adds a Vec2", function() {
        vA = new Vec3(2,4,6);        
        vB = new Vec2(3,5);
        vC = vA._add(vB);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC).toBe(vA);
        expect(vC).toEqual({x: 5, y: 9, z: 6});
    });

    it("_adds a Number", function() {
        vA = new Vec3(2,4,6);        
        vC = vA._add(3);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC).toBe(vA);
        expect(vC).toEqual({x: 5, y: 7, z: 9});
    });

    it("subtracts a Vec3", function() {
        vA = new Vec3(2,7,5);
        vB = new Vec3(3,5,8);
        vC = vA.subtract(vB);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC).toEqual({x: -1, y: 2, z: -3});
    });

    it("subtracts a Vec2", function() {
        vA = new Vec3(2,7,5);
        vB = new Vec2(3,5);
        vC = vA.subtract(vB);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC).toEqual({x: -1, y: 2, z: 5});
    });

    it("subtracts a Number", function() {
        vA = new Vec3(2,7,5);
        vB = vA.subtract(3);
        expect(vB instanceof Vec3).toBe(true);
        expect(vB === vA).toBe(false);
        expect(vB).toEqual({x: -1, y: 4, z: 2});
    });

    it("_subtracts a Vec3", function() {
        vA = new Vec3(2,7,5);
        vB = new Vec3(3,5,8);
        vC = vA._subtract(vB);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC === vA).toBe(true);
        expect(vC).toEqual({x: -1, y: 2, z: -3});
    });

    it("_subtracts a Vec2", function() {
        vA = new Vec3(2,7,5);
        vB = new Vec2(3,5);
        vC = vA._subtract(vB);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC === vA).toBe(true);
        expect(vC).toEqual({x: -1, y: 2, z: 5});
    });

    it("_subtracts a Number", function() {
        vA = new Vec3(2,7,5);
        vB = vA._subtract(3);
        expect(vB instanceof Vec3).toBe(true);
        expect(vB === vA).toBe(true);
        expect(vB).toEqual({x: -1, y: 4, z: 2});
    });

    it("multiplies a Vec3", function() {
        vA = new Vec3(1,2,3);
        vB = new Vec3(3,4,5);
        vC = vA.multiply(vB);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC).toEqual({x: 3, y: 8, z: 15});
    });

    it("multiplies a Vec2", function() {
        vA = new Vec3(1,2,3);       
        vB = new Vec2(3,4);
        vC = vA.multiply(vB);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC).toEqual({x: 3, y: 8, z: 0});
    });

    it("multiplies a Number", function() {
        vA = new Vec3(1,2,3);       
        vC = vA.multiply(3);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC).toEqual({x: 3, y: 6, z: 9});
    });

    it("_multiplies a Vec3", function() {
        vA = new Vec3(1,2,3);
        vB = new Vec3(3,4,5);
        vC = vA._multiply(vB);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC === vA).toBe(true);
        expect(vC).toEqual({x: 3, y: 8, z: 15});
    });

    it("_multiplies a Vec2", function() {
        vA = new Vec3(1,2,3);       
        vB = new Vec2(3,4);
        vC = vA._multiply(vB);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC === vA).toBe(true);
        expect(vC).toEqual({x: 3, y: 8, z: 0});
    });

    it("_multiplies a Number", function() {
        vA = new Vec3(1,2,3);       
        vC = vA._multiply(3);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC === vA).toBe(true);
        expect(vC).toEqual({x: 3, y: 6, z: 9});
    });

    it("divides a Vec3", function() {
        vA = new Vec3(1,2,3);
        vB = new Vec3(3,4,5);
        vC = vA.divide(vB);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC).toEqual({x: 1/3, y: 2/4, z: 3/5});
    });

    it("divides a Vec2", function() {
        vA = new Vec3(1,2,3);
        vB = new Vec2(3,4);
        vC = vA.divide(vB);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC).toEqual({x: 1/3, y: 2/4, z: 0});
    });

    it("divides a Number", function() {
        vA = new Vec3(1,2,3);
        vC = vA.divide(3);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC === vA).toBe(false);
        expect(vC === vB).toBe(false);
        expect(vC).toEqual({x: 1/3, y: 2/3, z: 3/3});
    });

    it("_divides a Vec3", function() {
        vA = new Vec3(1,2,3);
        vB = new Vec3(3,4,5);
        vC = vA._divide(vB);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC === vA).toBe(true);
        expect(vC).toEqual({x: 1/3, y: 2/4, z: 3/5});
    });

    it("_divides a Vec2", function() {
        vA = new Vec3(1,2,3);
        vB = new Vec2(3,4);
        vC = vA._divide(vB);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC === vA).toBe(true);
        expect(vC).toEqual({x: 1/3, y: 2/4, z: 0});
    });

    it("_divides a Number", function() {
        vA = new Vec3(1,2,3);
        vC = vA._divide(3);
        expect(vC instanceof Vec3).toBe(true);
        expect(vC === vA).toBe(true);
        expect(vC).toEqual({x: 1/3, y: 2/3, z: 3/3});
    });

    it("tests the equals() method", function() {
        vA = new Vec3(1,2,3);
        vB = new Vec3(3,4,3);
        vC = new Vec3(1,2,3);
        expect(vA.equals(vB)).toBe(false);
        expect(vA.equals(vC)).toBe(true);
    });

    it("tests the dot() method", function() {
        vA = new Vec3(1,2,3);
        vB = new Vec3(3,4,3);
        expect(vA.dot(vB)).toEqual(20);
    });

    it("crosses with a Vec3", function() {
        vA = new Vec3(1,2,3);
        vB = new Vec3(3,4,3);
        vC = vA.cross(vB);
        expect(vC).not.toBe(vA);
        expect(vC).toEqual({x: -6, y: 6, z: -2});
    });
    
    it("crosses with a Vec2", function() {
        vA = new Vec3(1,2,3);
        vB = new Vec2(3,4);
        vC = vA.cross(vB);
        expect(vC).not.toBe(vA);
        expect(vC).toEqual({x: -12, y: 9, z: -2});
    });
    
    it("_crosses with a Vec3", function() {
        vA = new Vec3(1,2,3);
        vB = new Vec3(3,4,3);
        vC = vA._cross(vB);
        expect(vC).toBe(vA);
        expect(vC).toEqual({x: -6, y: 6, z: -2});
    });
    
    it("_crosses with a Vec2", function() {
        vA = new Vec3(1,2,3);
        vB = new Vec2(3,4);
        vC = vA._cross(vB);
        expect(vC).toBe(vA);
        expect(vC).toEqual({x: -12, y: 9, z: -2});
    });

    it("retrieves the length", function() {
        vA = new Vec3(1,2,3);
        expect(vA.length()).toEqual(Math.sqrt(14));
    });

    it("gets the theta and phi angles", function() {
        vA = new Vec3(1,1,1);
        var angs = vA.toAngles();
        expect(Math.abs(angs.theta-0.785398163)).toBeLessThan(0.000000001);
        expect(Math.abs(angs.phi-0.615479708)).toBeLessThan(0.000000001);
    });

    it("creates a new Vec3 with given length without changing direction", function() {
        vA = new Vec3(1,1,1);
        vB = vA.toLength(5);
        var angsA = vA.toAngles();
        var angsB = vB.toAngles();
        expect(vA === vB).toBe(false);
        expect(Math.abs(vB.length()-5)).toBeLessThan(0.00000000001);
        expect(Math.abs(angsA.theta-angsB.theta)).toBeLessThan(0.000000001);
        expect(Math.abs(angsA.phi-angsB.phi)).toBeLessThan(0.000000001);
    });

    it("modifies the length without changing direction", function() {
        vA = new Vec3(1,1);
        var angsA = vA.toAngles();
        vA._toLength(5);
        var angsB = vA.toAngles();
        expect(Math.abs(vA.length()-5)).toBeLessThan(0.00000000001);
        expect(Math.abs(angsA.theta-angsB.theta)).toBeLessThan(0.000000001);
        expect(Math.abs(angsA.phi-angsB.phi)).toBeLessThan(0.000000001);
    });

    it("creates a new unit vector", function() {
        vA = new Vec3(1,2,3);
        var len = Math.sqrt(14);
        vB = vA.unit();
        expect(vA === vB).toBe(false);
        expect(vB).toEqual({x: 1/len, y: 2/len, z: 3/len});
    });

    it("changes into a unit vector", function() {
        vA = new Vec3(1,2,3);
        var len = Math.sqrt(14);
        vB = vA._unit();
        expect(vA === vB).toBe(true);
        expect(vB).toEqual({x: 1/len, y: 2/len, z: 3/len});
    });

    it("gets the minimum axis value", function() {
        vA = new Vec3(1,5,9);
        expect(vA.min()).toEqual(1);
    });

    it("gets the maximum axis value", function() {
        vA = new Vec3(1,5,3);
        expect(vA.max()).toEqual(5);
    });

    it("converts to an Array", function() {
        vA = new Vec3(1,5,9).toArray();
        expect(vA).toEqual([1,5,9]);
    });

    it("clones to a new Vec3", function() {
        vA = new Vec3(1,5,9);
        vB = vA.clone();
        expect(vB).not.toBe(vA);
        expect(vB).toEqual({x:1, y:5, z:9});
    });

    it("converts to a string with customizable precision", function() {
        vA = new Vec3(1.234792346,5.132476123,3.45820676);
        expect(typeof vA.toString()).toBe('string');
        expect(vA.toString(3)).toBe('{x: 1.235, y: 5.132, z: 3.458}');
    });

    it("converts to a Vec2", function() {
        vA = new Vec3(2,3,4);
        vB = vA.toVec2();
        expect(vB).not.toBe(vA);
        expect(vB instanceof Vec2).toBe(true);
        expect(vB).toEqual({x: 2, y: 3});
    });

    it("rounds each component to the nearest whole number and returns a new Vec3", function() {
        vA = new Vec3(2.23461344,3.6908274,4.502756024);
        vB = vA.round();
        expect(vB).not.toBe(vA);
        expect(vB instanceof Vec3).toBe(true);
        expect(vB).toEqual({x: 2, y: 4, z: 5});
    });

    it("_rounds each component to the nearest whole number", function() {
        vA = new Vec3(2.23461344,3.6908274,4.502756024);
        vB = vA._round();
        expect(vB).toBe(vA);
        expect(vB).toEqual({x: 2, y: 4, z: 5});
    });

    it("converts to an array for JSON", function() {
        vA = new Vec3(2,3,4);
        expect(vA.toJSON()).toEqual([2,3,4]);
    });

    it("creates a new Vec3 converting to a different coordinate frame", function() {
        vA = new Vec3(2,2,2);
        vB = vA.toCoordinateFrame([[0,0,1], [-1,0,0],[0,-1,0]]);
        expect(vB).not.toBe(vA);
        expect(vB).toEqual({x:2, y: -2, z: -2});
    });

    it("converts to a different coordinate frame", function() {
        vA = new Vec3(2,2,2);
        vB = vA._toCoordinateFrame([[0,0,1], [-1,0,0],[0,-1,0]]);
        expect(vB).toBe(vA);
        expect(vB).toEqual({x:2, y: -2, z: -2});
    });

    it("raises each component to the power p and returns a new Vec3", function() {
        vA = new Vec3(2,3,4);
        vB = vA.pow(2);
        expect(vB).not.toBe(vA);
        expect(vB).toEqual({x: 4, y: 9, z: 16});
    });

    it("raises each component in place to the power p", function() {
        vA = new Vec3(2,3,4);
        vB = vA._pow(2);
        expect(vB).toBe(vA);
        expect(vB).toEqual({x: 4, y: 9, z: 16});
    });

    // Static methods
    it("calculates the distance between two Vec3's", function() {
        vA = new Vec3(2,3,4);
        vB = new Vec3(-3,4,-4);
        expect(Math.abs(Vec3.distance(vA,vB)-9.486832980)).toBeLessThan(0.000000001);
    });

    it("creates a unit vector from an angle", function() {
        vA = Vec3.fromAngles(Math.PI, Math.PI/2);
        expect(Math.abs(vA.x)).toBeLessThan(0.000000001);
        expect(vA.y).toEqual(1);
        expect(Math.abs(vA.z)).toBeLessThan(0.000000001);
    });

    it("creates a random Vec3", function() {
        vA = Vec3.randomDirection();
        expect(vA instanceof Vec3).toBe(true);
    });

    it("creates a new Vec3 with the minimum values of each component", function() {
        vA = new Vec3(3,7,9);
        vB = new Vec3(5,6,2);
        expect(Vec3.min(vA,vB)).toEqual({x: 3, y: 6, z: 2});
    });

    it("creates a new Vec3 with the maximum values of each component", function() {
        vA = new Vec3(3,7,9);
        vB = new Vec3(5,6,2);
        expect(Vec3.max(vA,vB)).toEqual({x: 5, y: 7, z: 9});
    });

    it("computes a linear interpolation vector between two vectors", function() {
        vA = new Vec3(2,2,2);
        vB = new Vec3(-2,-2,-2);
        expect(Vec3.lerp(vA, vB, 0.5)).toEqual({x: 0, y: 0, z: 0});
    });

    it("initializes a Vec3 from an array", function() {
        vA = Vec3.fromArray([3,5,7]);
        expect(vA instanceof Vec3).toBe(true);
        expect(vA).toEqual({x: 3, y: 5, z: 7});
    });

});