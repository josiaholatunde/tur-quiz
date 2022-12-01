Q1
Design a data structure for a binary search tree where each node has a key and a value,
and implement the following operations:
- Search for a node, given as input a key, and output the value found on the
searched node (or Null if such a node is not found)
- Insert a node, given as input a (key, value) pair
- Delete all nodes having a certain key, given as input a key
- Print all keys in the tree in sorted order
- Given a reference to a node n in the tree, find the successor node, i.e., the node
whose key is the smallest key greater than the key in node n (assuming all keys
in the tree have distinct values)

Q2
Given an HTML document, write code to represent the contents of the HTML document
(seen as a tree) in the following data structure. This syntax is Python. Modify the syntax
appropriately if you’d like to work with a different programming language.
class Node:
tagName: Optional[str] # the name of the HTML tag represented in this node
text: Optional[str] # the text within this HTML tag
children: List[‘Node'] # the list of nodes immediately within (children of) this HTML tag
attributeMap: Dict[str, str] # dictionary of (key, value) pairs of attributes in this HTML
tag
parent: Optional['Node'] # parent node for this HTML tag

Q3
Write code to generate all subsets of a set of integers (assuming the size of the set is
reasonably small, say less than 20 elements). Note that you must enumerate all 2^n
subsets, with each subset listed exactly once.


Q4 Design and write REST API with express/nodejs to support CRUD operation to manage
a list of users, Assume the user is defined as following:
User = {
Id: string
Name: string
Email: string
}
And we can manage the users in memory, if you can sketch the code to work with
mongodb that would be a plus but not required
The operations we want to support are add/remove user, get user by id, query user by
name or email.

Project Installation:
- Run this command to install all dependencies `npm install`
- Run this command to start up the application: `npm start`
- Application starts up by default on port 4300 but can be modified via by the .env file

Q5
Implement these two functions: from_decimal, to_decimal. Then run the code (code in
main is already written, running which will print the results and check the correctness of
your code). Ensure you stick to the interfaces, simply implement the interfaces of these

functions. If Python is unfamiliar to you, write this in your programming language by
converting the interfaces and main to your programming language.