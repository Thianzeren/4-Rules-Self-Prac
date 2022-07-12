# 4 Rules of Simple Design

## 1. Tests Pass

- Verify system works
- Automated testing
- Verification speed should be fast to make it "Easier to Change"

  <details>
  <summary>Example</summary>

  ```Typescript
  describe("test add function", () => {
      it("should return 0 for an empty string", () =>{
          expect(add("")).toBe(0);
      })

      it("should return sum of numbers for different limiters", () => {
        expect(add("//;\n1;2")).toBe(3);
      })
  })
  ```

  using yarn test --watch
  </details>

## 2. Expresses Intent

- Helps with identifying code
- Makes code "Easier to Change"

  <details>
  <summary>Example</summary>

  ```Typescript

    function splitStringToNumList(input: string) {
        if (input.charAt(0) == "/") {
            var delimiter = input.charAt(input.indexOf("\n") - 1)
            var numStr = input.substring(input.indexOf("\n") + 1, input.length)
            return numStr.split(delimiter).join(",").split("\n").join(",").split(",");
        } else {
            return input.split("\n").join(",").split(",");
        }
    }

    export function add(input: string) {
        var numStrList = splitStringToNumList(input)
    ...
  ```
  </details>

## 3. No Duplication (DRY)

- Refers to **Knowledge Duplication** not **Code Duplication**
- Once and only Once

## 4. Small

- Are there vestigal code that are not used?
- Are there duplicate abstractions?
- Have I extracted too far?

### Notes
* The rules are in priority order "Tests Pass" > "Expresses Intent"
* 

---

## Other Relevant Concepts

### Object Oriented Programming (OOP) Concepts

- Abstraction

  Hide unwanted information. Only know which methods of the object are available to call and which input parameters are needed but don’t need to understand how this method is implemented

- Extraction

  Protect data. Bundling data and methods using the data into one unit and controlling the access to these data

- Inheritance

  Derive a class from another class for a hierarchy of classes that share a set of attributes and methods

## Examples

1. Test Names Should Influence Object’s API (Tests Pass, Expresses Intent)
    * Mismatch between test name and what is exactly being tested
    * Since we write tests first before code, our tests name should influence code
2. Behaviours Attractors (DRY, Expresses Intent)
	* By aggressively eliminating knowledge duplication through reification, we often find that we have built classes that naturally accept new behaviors that arise. They not only accept, but attract them;
3. Testing State vs Testing Behaviour (Tests Pass)
	* Test behaviour that mimics user journey, not just action -> state
4. Don't have tests depend on previous tests (Tests Pass)
	* Explicitly create a starting state in tests
5. Breaking Abstraction Level (Tests Pass)
	* Use a test double or a builder method that does not expose implementation details
6. Procedural Polymorphism (Expresses Intent)
	* Polymorphism is about being able to call a method/send a message to an object and have more than one possible behaviour.
	* If statements provide "Procedural Polymorphism"
7. Making assumptions about Usage (Expresses Intent)

---

## Other Good Stuff
* SOLID Principles
    * Single Responsibility (SRP)
    * Open-Closed (OCP)
    * Liskov Substitution (LSP)
    * Interface Segregation
    * Dependency Inversion
* Law of Demeter
    * A method can access either locally-instantiated variables, parameters
    passed in, or instance variables.
    * Only one dot per statement.
* Example Constraints
    * Refers to hard low level rules (3 lines per method, No return values etc.)
* Pair-Programming Styles
    * Driver-Navigator
    * Ping-Pong Pairing

---