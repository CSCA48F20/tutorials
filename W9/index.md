---
title: Week 9 Tutorial
sidebar: 9
sidebar-title: Week 9
---


---


<p align="center"> <a href="https://youtu.be/fVlrxg754HE"> Recorded videos (Thanks Willy!) </a> </p>

---

# Binary Trees

A Binary Tree consists of nodes that store some type of information, and two links to its children nodes, the left and right child. Nodes can have two, one or zero children.

The node at the top of the tree is called the root node and the nodes with zero children are called leaf nodes. Each level in the tree, contains nodes that have the same distance to the root node.

# Binary Search Trees

A Binary Search Tree (BST) is a Binary Tree such that the data of the nodes on the left sub-tree of a node have value less than, or equal to the value of the data in the node; and the data of the nodes on the right sub-tree of a node have value greater than the value of the data in the node. 

With that set up, is easier for us to traverse through the tree to find a specific node, as we know which sub-tree to go to based on the value of the node. We call the values used to search: keys.

## BST of Integers

Each node can contain any data type, but today we will work with a BST of integers. Let's start defining the node.

```c
typedef struct BST_Node_Struct {
  int data;
  struct BST_Node_Struct *left;
  struct BST_Node_Struct *right;
} BST_Node
```

Similar to linked lists, we should write a function to create a new node:

```c
BST_Node *new_BST_Node(int key){

  // Create the pointer to a new node and allocate memory
  BST_Node *new_node = NULL;
  new_node = (BST_Node *)calloc(1, sizeof(BST_Node));

  // Initialize the node
  new_node->data = key;
  new_node->left = NULL;
  new_node->right = NULL;

  return new_node;
}
```

---

### How can we insert a node?

---

If the BST is empty, we just need to insert the node at the root. If the BST is not empty, then we need to insert the node where it corresponds: if the key is less or equal than the root, we will insert it in the left sub-tree and if the key is greater than the root, we will insert it in the right sub-tree.

```c
BST_Node *BST_insert(BST_Node *root, BST_Node *new_node) {
  // TODO

  return root;
}
```

Let's traverse through this code, and insert the elements of the follwing array to an empty BST: ```[56, 17, 24, 78, 67, 98, 5, 2, 15, 31, 71]```. Once you are done, try it in <a href="https://www.cs.usfca.edu/~galles/visualization/BST.html">this simulator</a> to compare the results.

*Note:* The simulator inserts nodes equal than the root on the right sub-tree instead of the next, so you need to keep that in mind while comparing exercises with duplicate elements.

---

### How can we search for a node?

---

When we search for a node, we want to return a pointer to it. If the BST is empty, we just need to return NULL, which will be also the case if we can't find the element. If the BST is not empty, then we need to traverse the subtree where it corresponds: if the key we are looking for is less or equal than the root, we will traverse the left sub-tree and if the key we are looking for is greater than the root, we will traverse the right sub-tree. Once we find the key we want we can return a pointer to it.

```c
BST_Node *BST_search(BST_Node *root, int key) {
  // TODO
  
  return root;
}
```

#### Exercise: Find the smallest element in the BST

By the definition of BST, the smallest value will be the very left node. Complete the following function that returns the smallest key of the BST.

```c
int minNode (BST_Node *root) {
  // TODO

  return 0;
}
```

---

### How can we delete a node?

---

As we discussed before, in a BST there can be 3 types of nodes: One with one child, with two children or with zero. The deletion process of a node is different based on how many children the node we want to delete has.

Deleting a leaf is simpler as we can replace the parent to point to NULL. When we are deleting a node with one child, we can "replace" it with that child node. 

Deleting a node with two children is more complex as we need to find the successor node to the node we are doing to delete, which will "replace" that node. The successor of the node is the smallest node from the right sub-tree, the element that comes right after it. To implement this case, it might be helpful for us to use our minNode function...

```c
BST_Node *BST_delete(BST_Node *root, int key) {
  // TODO
  
  return root;
}
```

To verify your function, try deleting a couple of nodes from the previous BST example: ```[56, 17, 24, 78, 67, 98, 5, 2, 15, 31, 71]```.

---
