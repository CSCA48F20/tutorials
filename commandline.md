---
title: Using the Command Line
sidebar-legal: 15
sidebar-title: Command Line
---

---
<h2> Contents </h2>
{% include toc header="" %}

---
## What is the command line, and why should I use it?
---
The command line (also called terminal) is an interface where you can directly execute commands on your computer. It allows you to traverse through all your directories, change settings, run programs, [watch movies](https://www.instructables.com/id/How-to-Watch-Star-Wars-in-Terminal/) and the list goes on!

As a computer science student, this is going to be an invaluable resource to you. Though it takes some time to get used to the commands, with some practice it offers you more power and speed than a user interface can offer. More importantly, we need it to compile our C code properly.

Once you start your second year courses, you will be expected to be using the command line extensively, so it's better to give yourself a head start!

---

## What terminal should I use?
---
### Windows

If you're on windows, you have a bunch of options. By default, you should have `Command Prompt` installed. If you're using a recent version of Windows, you should also have `Powershell` available to you. These are both Windows-based, and are more than good enough for this course. Of these, I recommend using Powershell, since it has more commands available to you to make your life easier.


Additionally, you can also install the `Ubuntu Subsystem` which will give you a Linux-based terminal. This is a lot more powerful than the options above (and what you will be using in your upper year courses). You can find more information [here](https://answers.microsoft.com/en-us/windows/forum/apps_windows_10-winapps-appscat_books/how-to-access-your-ubuntu-bash-files-in-windows/201bb314-6b3a-4913-83b0-3d38037b9470) on how to access your files if you choose to use this option. **I highly recommend this if you have the space for it.**

---
### MacOS / Linux

You should have a terminal installed by default, simply called `Terminal`. This is Linux-based, and plenty good enough for the rest of your university career. There are alternative terminals you can install - but I don't recommend going down that rabbit hole just yet - wait till you're more comfortable using it.

---

## Differences between terminals
---

Different terminals may have different names for commands that do very similar things. If you are using Command Prompt on Windows, some of these commands may have different names (I'm using a Linux-based terminal). 

Powershell should support all the commands here, as well as the ones from Command Prompt, which is why I suggest using it. When in doubt - Google is your friend!

---
## The Prompt
---

The prompt is the line that shows up when you open up a new terminal, and this is where you run your command. Here's an example of my prompt:

```sh
mustafa@xps:~/Desktop$ 
```

It usually consists of your username (mustafa), the name of the device (xps), and the current folder the terminal is in (Desktop). Your prompt may look different, but it'll usually have the same format as this.

---
## Tips and Tricks
---

- Use `up`/`down` arrow keys to access the previous commands you typed in. You don't need to type everything in all the time!

- Use `Ctrl+R` to search for a previous command you used. (This is very handy when you've run a bunch of stuff and don't wan't to keep pressing up)

- Pressing `tab` will auto-complete the names of files/folders in the current directory.

- On Powershell, right-clicking can be used to copy and paste text. On Mac, use `Cmd+C` and `Cmd+V`. On Linux, use `Ctrl+Shift+C` and `Ctrl+Shift+V`.

- If you don't know what a command does, or how to use is, run `man <command name>` in your terminal to get information on how it works!

---
## Navigating the File System
---

The first thing you need to realize about using the terminal is that there is a concept of a 'current directory'. Much like the File Explorer, the terminal starts off in some directory. Pretty much all the time, you're going to want to be moving around different folders (for whatever reason). Here we'll talk about some commands that help you do this.

---
### pwd

The command `pwd` (**p**rint **w**orking **d**irectory) prints out the full path to the directory your terminal is currently in (called the working directory). For example, if I run the command while the terminal is opened on my Desktop

```sh
mustafa@xps:~/Desktop$ pwd
/home/mustafa/Desktop
```

*Note: Command Prompt doesn't have a nice equivalent to this. You can use `cd`, however this command is not meant for just this. More on this below.*

---
### ls

The command `ls` (**l**i**s**t) lists out the contents of the current (working) directory. 

```sh
mustafa@xps:~$ ls
Desktop       Downloads
Documents     Pictures
...
```
*Note: The equivalent to this on Command Prompt is `dir`*

You can additionally also give it the name of a directory, and it will list you the contents of it.
```sh
mustafa@xps:~$ ls Desktop
Folder1       Folder3
Folder2       Folder4
...
```

---
### cd

The command `cd` (**c**hange **d**irectory) lets you change the current working directory. 

```sh
mustafa@xps:~$ cd Desktop
mustafa@xps:~/Desktop$ 
```

You can use `.` to refer to the current directory, and `..` to refer to the parent directory

```sh
mustafa@xps:~/Desktop/Folder1$ cd ..
mustafa@xps:~/Desktop$ 
```

---
## Working with files
---

### cp

The command `cp` (**c**o**p**y) can be used to copy a file. It takes in 2 parameters, the first is a path to the file you want to copy, the second is the location you want to copy it to (optionally with a new filename). You will need to include the `-r` flag if you want to copy directories with all the contents inside them.

```sh
mustafa@xps:~/Desktop$ ls
file1.c       folder

# Copying a file to the same directory with a different name
mustafa@xps:~/Desktop$ cp file1.c file1.c
mustafa@xps:~/Desktop$ ls
file1.c       file2.c       folder

# Copying the file to a different directory, same name
mustafa@xps:~/Desktop$ cp file.c folder/
mustafa@xps:~/Desktop$ ls folder
file1.c
```
---

### mv

The command `mv` (**m**o**v**e) can be used to move a file from one location to another. It is used similar to `cp`. Files are renamed this way using the terminal.

---

### rm

The command `rm` (**r**e**m**ove) can be used to delete a file. **Be careful with this. It is permanent and the file cannot be recovered**.

```sh
# Don't do something like this if you don't have a backup!
mustafa@xps:~/Desktop/A1$ rm turtle.c
```
---

### diff

The command `diff` (**diff**erence) is used to compare two plaintext files (`.txt`, `.c`, `.py`, ...). It tells you the differences between them if any exist. If the files are the same, you will get no output.

```sh
# Comparing a file with itself
mustafa@xps:~/Desktop$ diff file1.c file2.c
mustafa@xps:~/Desktop$ 

# Comparing different files
mustafa@xps:~/Desktop$ diff file1.c file2.c
1c1
< This is file 1
---
> This is file 2
```

*Note: The output you get in case of the files being different may not be the same on Windows*

---
## Compiling and running your Code
---

First, make sure that you have `gcc` in your `PATH`. If you are still unsure how to do this, detailed instructions (for Windows) can be found [here](http://www.codebind.com/cprogramming/install-mingw-windows-10-gcc/).

Now, navigate to the directory where your code is located. You can compile and run your code as follows:
```sh
mustafa@xps:~/Desktop$ gcc file.c
mustafa@xps:~/Desktop$ ./a.out      # (.\a.exe on Command Prompt)
```

Note that by default `gcc` calls the compiled executable `a.out` or `a.exe`. If you want to change the name of the output file, use the `-o` flag, immediately followed by the desired name.

```sh
mustafa@xps:~/Desktop$ gcc file.c -o myProgram
mustafa@xps:~/Desktop$ ./myProgram  # (.\myProgram.exe on Command Prompt)
```

Additional flags can be added as well, for example:
```sh
mustafa@xps:~/Desktop$ gcc -Wall -Werror file.c -o myProgram -lm
```
We will talk about what they do as we go on in the course.
