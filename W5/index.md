---
title: Week 5 Tutorial
sidebar: 5
sidebar-title: Week 5
---


---


<p align="center"> <a href="https://www.youtube.com/playlist?list=PLKjkL6I7UpX8kEaSQZZ0aoev1GjX1hF-U"> Recorded videos (courtesy Mustafa) </a> </p>

---

# Pointers!

Before you get scared off - pointers are just variables! The only thing different about them is that the store the *memory addresses* (or box numbers) of other variables - which we can decide. When we create a pointer, its type must match the variable type.

For example, if you want to initialize the pointer `p` that will store the address of an integer, we can do the following:

```c
int *p = NULL;
```

Note that in this case we have said `p` points to an integer. `NULL` is the default value we give something. Think of it as saying "Does not point to anything".

---

## How do we use pointers?

---

We first need to **assign** a variable to our pointer. For that we use the `&` operator. The `&` operator is the *address-of* the variable we are referencing.

```c
// We have already declared our pointer above.
// Now, we are going to store the address of an integer.
int x = 0;
p = &x;
```

We use pointers to **access** the value from the variable that they are pointing to. 

```c
// In this case, now y will have the same value as the one
// p is pointing to (aka 'x')
int y = *(p);
// Let's say now you want to access the variable that is
// stored next to x.
int z = *(p + 1);
```

We can not only copy the contents of the variable that the pointer is pointing to, but we can also access memory boxes that are around the variable box. For that we can use an *offset*, that will help us move around memory.

```c
// Let's say now you want to access the variable that is
// stored next to x.
int z = *(p + 1);
// The offset is 1 in this case.
```

We can also **modify** the value of the memory box stored in the pointer.

```c
// Let's change the value of x to 3.
// We need to modify then it's memory box
*(p) = 3;
```

---

## Worked exercise

---

Implement a function called `div_mod()` that takes in two integers `a` and `b`, and returns the quotient (`a / b`) and the remainder (`a % b`).

*Hint:* You **can not** return multiple values directly... How can pointers help?

```c
#include <stdio.h>

_____ div_mod( ________ ) {
    _______ // Fill in
}

int main() {
  int a = 19;
  int b = 5;
  int div, mod;

  // Call your function here...
  ______

  // Should print: "a / b = 3,  a % b = 4"
  printf("a / b = %d,  a %% b = %d\n", div, mod);
  return 0;
}

```

---

## Pointers and Arrays

---

Now that we have learnt about pointers, you can use those to work with arrays too. There are two ways we can store the address of the head of the array in a pointer.

```c
// Don't forget to initialize the pointer
int *p = NULL;
int my_array[5];

// Way 1: getting the address of the first element
p = &my_array[0];
// Way 2: direct assignment
p = my_array;
```

We can use offsets to access (and modify) other values of the array.

```c
// We can initialize the values of the array to 0
*(p) = 0;
*(p + 1) = 0;
*(p + 2) = 0;
*(p + 3) = 0;
*(p + 4) = 0;
```

- ***Note:*** `my_array[x]` is exactly equivalent to `*(my_array + x)`. In fact, your compiler translates array indexing into pointer dereferencing in precisely this way! Think of it as taking the address of the first element, adding an offset to find the correct address for the element you want, and then dereferencing to get the element.

---

## Exercises

---

Given the following starter code, implement the function *findMinMax* to return the minimum and maximum values in a given array. Use **only** pointer notation!

*Hint:* You can't return multiple values directly... How can pointers help?

```c
#include<stdio.h>

___ findMinMax(int *arr, int arr_size, _____) {
    ______ // Fill in
}

int main() {
    int array[5] = {10, 3, 24, 9, -1};
    int arr_min, arr_max;

    // Call your function...
    _______

    printf("min is %d, max is %d\n", arr_min, arr_max);
}
```

---

In lecture we showed you how to write the `reverse()` function to reverse arrays (and as a result, also strings). Rewrite this function using **just** pointer notation with what you learned above.

*Hint:* Use pointers and offsets!

```c
#include <stdio.h>

void reverse(char *str) {
    ______ // Fill in
}

int main() {
    char str[1024] = "Hello World!";

    // Expected: Hello World!
    printf("Before: %s\n", str);

    reverse(str);

    // Expected: !dlorW olleH
    printf("After: %s\n", str);
}
```
---
