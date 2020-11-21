---
title: Week 12 Tutorial
sidebar: 12
sidebar-title: Week 12
---


---

# How to write a recursive algorithm

---
Assume you have a problem of some type:

1. Break down the problem into a smaller (easier) problem(s) of the same type
2. Recursively solve that smaller problem(s)
3. Use the solution of the 'easier' problem to solve the original problem 

---

# Recursion Examples

---

## Find the Largest number in an array

We have solved this problem in a non-recursive way multiple times before. There are multiple ways we can solve it using recursion too. Sometimes using a helper can be useful, specially if you need to add more parameters to a function.

### Exercise:

Implement the larger function using loops, once you find a working solution, implement it using recursion.

```c
#include <stdio.h>

int main() {
    int array[] = {33, 12, 45, 9, 24};
    int n = 5;

    // Implement the large function!
    int largest_element = large(array, n);

    printf("The largest number of the list is: %d\n", largest_element);
}
```
---

## Find if a string is a palindrome or not

A palindrome is a word or phrase that reads the same backward as forward. Implement a recursive function to find is a word is a palindrome or not.

### Exercise:

Implement the isPalindrome function using loops, once you find a working solution, implement it using recursion.

```c
#include <stdio.h>
#include <string.h>

#define MAX_LENGTH 1024

int main() {
    char word [MAX_LENGTH] = "racecar";

    // Implement the isPalindrome function!
    if (isPalindrome(word)){
        printf("The word %s is a palindrome", word);
    } else{
        printf("The word %s is not a palindrome", word);
    }
}
```
---
