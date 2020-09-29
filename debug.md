---
title: Debugging Your Code
sidebar-legal: 16
sidebar-title: Debugging
---

---
## How do I know my program doesn't work?
---
There's no easy way to do this, except test, *test, and  **test!*** You want to be checking your program *thoroughly*, and make sure it's doing what you want it to do - or find out where it isn't. Your program might not do what you expect it to do, or even crash and stop running completely.

Most of the time (on Windows, at least) you will get a nice window that shows up and tells you that the program ended unexpectefly, however this may not always be the case. 

This is where the return value of `main()` comes into play. Remember how we said that we return `0` in main at the end of our code. This return value (also called *exit status*) is sent back to the terminal, which is stored in a variable and can be used to say if your program ended successfully or not. Whenever your program crashes, it will return with a **non-zero** exit status. 

On your Windows terminal, you can check the exit status of your previously run command using this:
```
echo %errorlevel%
```

On Linux / Mac, this is the equivalent command:
```
echo $?
```
If these print out a `0`, your program ended successfully (because it reached the `return 0` line in your main function). Otherwise, you know that it has crashed somewhere.

---
## Debugging your code
---

Once you know that there's some issue in your code, it's time to start debugging. There's many ways to debug your program, and also several debuggers than you can use to help you. 

I personally just use `printf()` statements in my code in several places to print out the values of different variables,
to see if they are behaving the way I would expect them to, and find out where something is going wrong. Using this properly is also an important skill, because it will help you get an intuition for where your code can go wrong, and once you do this enough it can become a fairly quick way to get rid of small bugs.

---
## Using GDB (a very quick guide)
---

If you prefer a more systematic way of debugging your code using a debugger, you can use GDB for this. Be warned that it's not as nice as the Python debugger you may be used to from CSCA08, and you will need to run it from the Command-Line. I'm going to demonstrate some very basic usage of GDB here, however it is extremely powerful and you can learn a lot more about the things it can do [here](http://www.yolinux.com/TUTORIALS/GDB-Commands.html).

If you don't already have GDB installed, you can install it with this command on Windows (run this `C:\MinGW\bin`):
```
mingw-get.exe install gdb
```

Here, I'm using the following code to run the example on, in case you want to follow along.
```c
#include <stdio.h>

int main() {
  int i, sum, n;

  n = 100;
  sum = 0;
  for (i = 1; i <= n; i++) {
    sum += i;
  }
  
  printf("Sum of numbers from 1 to %d is %d\n", n, sum);
  return 0;
}
```

First, you want to add the `-g` flag to your compilation command to store debug information into the executable you generate. GDB will still work without this, but it won't give you any helpful output that you can use easily.


```
gcc -g -Wall -Werror test.c
```

Next, we will run GDB and tell it what the executable file is called (here, `a.out`)
```
gdb ./a.out
```

This will start up GDB and load in the executable. You will not be presented with a `(gdb)` prompt, in which you can enter different instructions to tell the debugger what to do. GDB also has shorthand for all the common commands, and they are usually just the first letter.

You can add breakpoints to your code on specific line numbers or function names (your program will run up till this point and then stop, you can look at the values of variables in memory, etc). If you don't add breakpoints, your code will simply keep running until it either ends, or crashes (which can be useful to find out where your program crashed). 

In the code above, I'm going to add one breakpoint to the statement inside the loop, it is on line `9`. This is done using the `break` command, or `b` for short. You can also use a function name instead.
```
(gdb) break 9
Breakpoint 1 at 0x669: file test.c, line 9.
```
Once you are done adding breakpoints, it is now time to run the program. To do this, use `run` or `r`.
```
(gdb) run
Starting program: /home/mustafa/Desktop/a.out 

Breakpoint 1, main () at test.c:9
9           sum += i;
```
This shows you where the program has stopped at, including the line of code  along with it's line number.

Now, we can look at the values of the variables in memory. Use the `print` command for this, or `p` for short.
```
(gdb) print i
$1 = 1
(gdb) print sum
$2 = 0
(gdb) print n
$3 = 100
```
You can also (if you need to) change the value of variables in memory using the `set` command.
```
(gdb) set variable n = 10
(gdb) print n
$4 = 10
```
You can use the `next` (or `n`) command to run the next line of code.  In this case, we're in a loop so it will go back to line `8`.
```
(gdb) next
8         for (i = 1; i <= n; i++) {
```
*Note This will **not** jump into a function. If you want to do this, use `step` instead.*

You can also use `continue` (or `c`) to run the code from the current line until you hit the next breakpoint.
```
(gdb) continue
Continuing.

Breakpoint 1, main () at test.c:9
9           sum += i;
```

If you want to clear all breakpoints, the `clear` command can do that for you.
```
(gdb) clear
Deleted breakpoint 1
```
Now, I'll continue again, and since there's no breakpoints, it will run the program till it exits.
```
(gdb) continue
Continuing.
Sum of numbers from 1 to 10 is 55
[Inferior 1 (process 8554) exited normally]
```

*Note that we only computed the sum up till `10` because we changed `n` in memory!*

---
## Using LLDB (a quicker guide)
---

For Mac iOS users, a good debugger that comes installed with Xcode is [LLDB](https://lldb.llvm.org/use/tutorial.html). To run it, you have to follow similar steps.

```
gcc -g -Wall -Werror test.c
```
Once you compile, you can run lldb,
```
lldb ./a.out
```
The following prompt will appear:
```
(lldb) target create "./a.out"
Current executable set to '/Users/angelazb/Documents/a.out' (x86_64).
(lldb) 
```

I found this [cheat sheet](https://lldb.llvm.org/use/map.html) useful, if you want to know the equivalents from GDB in LLDB.

---