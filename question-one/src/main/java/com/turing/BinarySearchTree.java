package com.turing;

public class BinarySearchTree {
    private Node root;

    public BinarySearchTree() {
        root = null;
    }

    public Node insert(int key, Object value) {
        root = insertHelper(root, key, value);
        return root;
    }

    private Node insertHelper(Node root, int key, Object value) {
        if (root == null) {
            root = new Node(key, value);
            return root;
        }

        if (key < root.getKey()) root.left = insertHelper(root.left, key, value);
        else if (key > root.getKey()) root.right = insertHelper(root.right, key, value);
        return root;
    }

    public Object search(int key) {
        return searchHelper(root, key);
    }

    private Object searchHelper(Node root, int key) {
        if (root == null) return null;
        if (root.getKey() == key) return root.getValue();

        if (key < root.getKey()) return searchHelper(root.left, key);
        else if (key > root.getKey()) return searchHelper(root.right, key);

        return root.getValue();
    }

    public void printKeys() {
        printKeysHelper(root);
    }

    private void printKeysHelper(Node root) {
        if (root != null) {
            printKeysHelper(root.left);
            System.out.print(String.format("%s, ", root.getKey()));
            printKeysHelper(root.right);
        }
    }

    public void deleteKey(int key) {
        root = deleteKeyHelper(root, key);
    }

    private Node deleteKeyHelper(Node root, int key) {
        if (root == null) return root;

        if (key > root.getKey()) {
            root.right = deleteKeyHelper(root.right, key);
        } else if (key > root.getKey()) {
            root.left = deleteKeyHelper(root.left, key);
        } else {
            if (root.left == null) return root.right;
            else if (root.right == null) return root.left;

            int minValOnRight = getMinValueOnRight(root.right);
            root.setKey(minValOnRight);
            root.right = deleteKeyHelper(root.right, minValOnRight);
        }
        return root;
    }

    private int getMinValueOnRight(Node root)  {
        int value = root.getKey();
        while (root.left != null)  {
            value = root.left.getKey();
            root = root.left;
        }
        return value;
    }
}
