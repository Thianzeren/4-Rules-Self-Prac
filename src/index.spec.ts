import { add } from "./index"

describe("test add function", () => {
    it("should return 0 for an empty string", () =>{
        expect(add("")).toBe(0);
    })

    it("should return number for only 1 number", () => {
        expect(add("1")).toBe(1);
    })

    it("should return sum of numbers for 2 numbers", () =>{
        expect(add("1,2")).toBe(3);
    })

    it("should return sum for any amount of numbers", () => {
        expect(add("1,2,3")).toBe(6);
        expect(add("1,2,3,4,5,6,7,8,9,10")).toBe(55);
    })

    it("should return sum of numbers for new lines between numbers", () => {
        expect(add("1\n2,3")).toBe(6);
    })

    it("should return sum of numbers for different limiters", () => {
        expect(add("//;\n1;2")).toBe(3);
    })

    it("should throw an exception for negative number", () => {
        expect(() => {add("-1")}).toThrow(Error)
        expect(() => {add("-1\n-2,-3")}).toThrow(Error)
        expect(() => {add("//;\n-1;-2")}).toThrow(Error)
    })
})

// This is a test