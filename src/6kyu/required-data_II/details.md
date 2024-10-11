[6 kyu - Required Data II (Easy One)]
https://www.codewars.com/kata/560985a07add63e1a1000019/javascript
Tags: Fundamentals Algorithms DataStructures Sorting

Description:
Your function given_nth_value() (Javascript: givenNthValue())will receive an array or list of integers, positive or negative, then, it will receive an integer k, to search a certain term and finally the mode string "min" or "max". We may understand better graphically

given_nth_value(arr, k, "max") or given_nth_value(arr, k, "min")
The function will work differently depending on the receiving last entry, that string define the mode of the function:

if it is "max", the function will build internally an array of received values in descending order and will output the k-th term in the list.

if it is "min", the function will build internally an array of received values in ascending order and will output the k-th term in the list.

Let's see clearer all these explanations with some cases.

arr = [3, 3, -1, 10, 6, 8, -5, 4, 22, 31, 34, - 16, -16, 8 , 8] # (15 elements)
k = 5
str_ = "min"
given_nth_value(arr, k, str_) -------> 4 
/// The ascending list of values of this array is:
k-th value    Value   (we received 15 elements but there are only 11 values)
   1            -16 
   2             -5 
   3             -1
   4              3
   5  ------->    4  (As k = 5, the value to output is 4)
   6              6 
   7              8
   8             10
   9             22
   10            31 
   11            34
Let's see the inverse case:

the same arr in the above case
k = 6
str_ = "max"
given_nth_value(arr, k, str_) -------> 6
/// The desending list of values of this array is:
k-th value    Value
    1            34
    2            31
    3            22
    4            10
    5             8
    6 ------->    6 (As k = 6, the value to output is 6)
    7             4
    8             3
    9            -1
    10           -5
    11          -16
If the value of k is higher than the number of values, the asked function will return the string "No way"

the same array above
k = 13
str_ = "max"
given_nth_value(arr, k, str_) -------> No way
If we have a "corrupted array", an array that has one element that is not an integer, the function will output "Invalid entry list"

arr = [3, 3, -1, 10, 6, 8, -5, 'Yes', 4, 22, 31]
k= 4
str_ = "max"
given_nth_value(arr, k, str_) -------> Invalid entry list
On the other hand, if our array is an empty list, the function should output: "No values in the array"

arr = []
k= 4
str_ = "max"
given_nth_value(arr, k, str_) -------> No values in the array
If there is a typing mistake in the third entry, the function will return: "Valid entries: 'max' or 'min'"

arr = [3, 3, -1, 10, 6, 8, -5, 4, 22, 31]
k = 2
str_ = 'mix'
given_nth_value(arr, k, str_) -------> Valid entries: 'max' or 'min'
But if the last string has uppercases letters of the words max or min, the function should work without problems. For example:

arr = [3, 3, -1, 10, 6, 8, -5, 4, 22, 31]
k = 2
str_ = 'MaX'
given_nth_value(arr, k, str_) -------> 22
If the second entry is not a positive integer (k < 0), the function should output "Incorrect value for k". The code should detect if k is a string , too, with the same result.

arr = [3, 3, -1, 10, 6, 8, -5, 4, 22, 31]
k = "Second"
str_ = 'MaX'
given_nth_value(arr, k, str_) -------> "Incorrect value for k"
If we have more than one "irregularity" simultaneously the code should not output all the mistakes or invalid entries. It will output only one, checking in the following order:

The value of k.

The mode strings: "max" or "min".

The array with the values.

Let's see some cases with more than one invalid entry following the priority described above:

arr = []
k = "Second"
str_ = 'MaX'
given_nth_value(arr, k, str_) -------> "Incorrect value for k"

arr = []
k = - 10
str_ = 'asdasd'
given_nth_value(arr, k, str_) ------->
"Incorrect value for k"

arr = [1,2,3,2,4,-5, 'Four']
k = 29
str_ = 'kljklj'
given_nth_value(arr, k, str_) -------> "Valid entries: 'max' or 'min'"

arr = [1,2,3,2,4,-5, 'Four']
k = 29
str_ = 'MiN'
given_nth_value(arr, k, str_) -------> "Invalid entry list"
For all the cases the function will receive three arguments. Enjoy it!!