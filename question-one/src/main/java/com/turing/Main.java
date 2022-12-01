package com.turing;

public class Main {

    public static void main(String[] args) {
        System.out.println("My name is Olatunde");
        /* BST tree sample
                      25 - Ade
               /                    \
            10 - Amara              90 - Fidera
         /          \               /
        7 - Joseph   12 - Folake  50 - Jacob   */
        BinarySearchTree binarySearchTree = new BinarySearchTree();
        binarySearchTree.insert(25, "Ade");
        binarySearchTree.insert(10, "Amara");
        binarySearchTree.insert(7, "Joseph");
        binarySearchTree.insert(12, "Folake");
        binarySearchTree.insert(90, "Fidera");
        binarySearchTree.insert(50, "Jacob");

        System.out.println("Successfully inserted items into BST");
        Object value = binarySearchTree.search(90);
        System.out.println(String.format("Value of 90 in BST is %s", value));
        value = binarySearchTree.search(50);
        System.out.println(String.format("Value of 50 in BST is %s", value));
        value = binarySearchTree.search(12);
        System.out.println(String.format("Value of 12 in BST is %s", value));
        value = binarySearchTree.search(1000);
        System.out.println(String.format("Value of 1000 in BST is %s", value));

        binarySearchTree.printKeys();

        binarySearchTree.deleteKey(90);
        System.out.println("Deleted key 90 in BST");
        binarySearchTree.printKeys();
    }
}
