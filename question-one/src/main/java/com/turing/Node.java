package com.turing;

public class Node {

    private Object value;
    private int key;
    public Node left;
    public Node right;

    public Node(int key, Object value) {
        this.key = key;
        this.value = value;
        left = right = null;
    }

    public Object getValue() {
        return value;
    }

    public int getKey() {
        return key;
    }

    public void setKey(int key) {
        this.key = key;
    }
}


