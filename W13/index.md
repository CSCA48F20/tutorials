---
title: Week 13 Tutorial
sidebar: 13
sidebar-title: Week 13
---


---

# How to write a recursive algorithm

---
Assume you have a problem of some type:

1. Break down the problem into a smaller (easier) problem(s) of the same type
2. Recursively solve that smaller problem(s)
3. Use the solution of the 'easier' problem to solve the original problem 

---

# More Recursion Examples !

---

## Find the reverse of a string

### Exercise:

Given

```c
#include <stdio.h>
#include <string.h>

char* string_reverse(char str[]){
    // TODO
}

int main() {
    char str[1024] = "TEST";

    char *reversed = string_reverse(str);

    printf("The reversed string is %s\n:", reversed);
    // Expected: TSET
}

```

---

## Can you find the right password?

Let's say there is a _secret_ function to validate a password. 

```c
#include <stdio.h>
#include <string.h>

/**
 * Assumes `password` is exactly 6 characters long.
 * `password` only contains lowercase letters a-z
 *
 * Returns 1 if password is correct, 0 otherwise
 */
int check_password(char *password) {
  int hash[7] = {2876, 2832, 3196, 2908, 2712, 2988};
  for (int i = 0; i < 6; i++)
    if ((password[i] ^ (password[5 - i] * 29)) != hash[i])
      return 0;
  return 1;
}
```

### Exercise:

Implement a function that returns the secret password.


---
