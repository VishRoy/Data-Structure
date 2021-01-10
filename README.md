# Data-Structure
JavaScript Data Structure

Data Structure is a systematic way to organize data in order to use it efficiently.

Data Structure Topics

1. Array (built-in)
2. Objects (built-in)
3. Sets (built-in)
4. Maps (built-in)
5. Linked Lists (custom)
6. Stacks (custom)
7. Queues (custom)
8. Hash Tables (custom)
9. Basic Trees (custom)
10. Binary Search Trees (custom)
11. AVL Trees (custom)
12. Priority Queues (custom)
13. Heaps (custom)
14. Graphs (custom)


* Different Tasks Require Different Data Structures

1. Ordered List of Data, Duplicates Allowed = Array
2. Unordered List of Data, No Duplicates Allowed = Set
3. Key-value pairs of Unordered Data = Object
4. Key-value pairs of Ordered, Iterable Data = Map



A. Arrays 

  1. Insertion order is kept
  2. Element access via index
  3. Iterable (you can use the for-of loop)
  4. Size (length) adjusts dynamically
  5. Duplicate values are allowed
  6. In JavaScript, you can have mixtypes in Array.
  7. Downside - Deleting and finding item in arrays require extra work. 
  
  
B. Set

  1. Set lets you store unique values of any type, whether primitive values or object references.
  2. Insertion order is not sorted/memorised. Hence, we cannot access set elements via index.
  3. Element access and extration is done via methods.
  4. Iterable (you can use the for-of loops).
  5. Size (length) adjusts dynamically.
  6. Duplicate values are not allowed.
  7. Deletion and finding elements is trivial and faster than arrays.
  
  
C. Objects

  1. Unordered key-value pairs of data
  2. Element access via key(property name)
  3. Not iterable (only with for-in)
  4. Keys are unique, values are not
  5. Keys have to be strings, numbers or symbols
  6. Can store data & functionality (methods)
  
D. Map

  1. Ordered key-value pairs of data
  2. Element access via key
  3. Iterable
  4. Keys are unique, values are not
  5. Keys can be anything (including reference values like arrays)
  6. Pure data storage, optimized for data access
  
E. Linked List

  A list of elements that are linked to each other. Every element knows about the next element. Linked List allows for efficient re-sizing and insertion at start and end of the list.

F. Stack - LIFO

G. Queue - FIFO

  1. First in first out
  2. Enqueue - add elements at the end, dequeue - remove elements from the top
  3. E.q - Queue at a bank 
  
H. Hash Table

  A hash table (often called a hash map) is a data structure that maps keys to values. Hash tables combine lookup, insert, and delete operations in an efficient way. The key is sent to a hash function that performs arithmetic operations on it. The result (called the hash value or hash) is an index of the key-value pair.
  
  1. The existing javascript object is implemented as a Hash Table under the hood!
  2. Hash Table stores the data in index:value pair format instead of key:value pair format
  3. Hashing function is used to convert key into index
  
