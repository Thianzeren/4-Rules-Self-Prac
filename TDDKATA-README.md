# Lab 7

*String calculator Kata*

In this Lab, we are going to do a popular coding Kata called String calculator

## Before you start:
* __Try not to read ahead.__
* Do one task at a time. The trick is to learn to work incrementally.
* Make sure you only test for correct inputs. there is no need to test for invalid inputs for this kata

## String Calculator

---------

<details>
<summary>Step 1</summary>

1. Create a simple String calculator function add(numbers: string):number
    1. The method can take 0, 1 or 2 numbers, and will return their sum (for an empty string it will return 0)for example "" or "1" or "1,2"
    2. Start with the simplest test case of an empty string and move to 1 and two numbers
    3. Remember to solve things as simply as possible so that you force yourself to write tests you did not think about
    4. __Remember to refactor after each passing test__
    
</details>

---------

<details>
<summary>Step 2</summary>

2. Allow the Add method to handle an unknown amount of numbers

</details>

---------

<details>
<summary>Step 3</summary>

3. Allow the Add method to handle new lines between numbers (instead of commas).
    1. the following input is ok:  "1\n2,3"  (will equal 6)
    2. the following input is NOT ok:  "1,\n" (not need to prove it - just clarifying)

</details>

---------

<details>
<summary>Step 4</summary>

4. Support different delimiters
    1. to change a delimiter, the beginning of the string will contain a separate line that looks like this:   "//[delimiter]\n[numbers…]" for example "//;\n1;2" should return three where the default delimiter is ‘;’ .
    2. the first line is optional. all existing scenarios should still be supported

</details>

---------

<details>
<summary>Step 5</summary>

5. Calling Add with a negative number will throw an exception "negatives not allowed" - and the negative that was passed.if there are multiple negatives, show all of them in the exception message

</details>

---------

### Stop here if you are a beginner. Continue if you can finish the steps so far in less than 30 minutes.

---------

<details>
<summary>Step 6</summary>

6. Numbers bigger than 1000 should be ignored, so adding 2 + 1001  = 2

</details>

---------

<details>
<summary>Step 7</summary>

7. Delimiters can be of any length with the following format:  "//[delimiter]\n" for example: "//[***]\n1***2***3" should return 6

</details>

---------

<details>
<summary>Step 8</summary>

8. Allow multiple delimiters like this:  "//[delim1][delim2]\n" for example "//[*][%]\n1*2%3" should return 6.

</details>

---------

<details>
<summary>Step 9</summary>

9. make sure you can also handle multiple delimiters with length longer than one char

</details>

---------
