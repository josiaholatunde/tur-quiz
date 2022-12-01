import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Node {
    private String tagName;
    private String text;
    private List<Node> children = new ArrayList<>();
    private Map<String, String> attributeMap = new HashMap<>();

    private boolean isSelfClosing;
    private Node parent;


    public Node(String tagName, String text, boolean isSelfClosing) {
        this.tagName = tagName;
        this.text = text;
        this.isSelfClosing = isSelfClosing;
    }

    public Node(String tagName, String text, boolean isSelfClosing, List<Node> children) {
        this(tagName, text, isSelfClosing);
        this.children = children;
    }

    public void setTagName(String tagName) {
        this.tagName = tagName;
    }

    public void setText(String text) {
        this.text = text;
    }

    public void addChild(Node child) {
        if (child != null) this.children.add(child);
    }

    public void setAttributeMap(Map<String, String> attributeMap) {
        this.attributeMap = attributeMap;
    }

    public void addAttribute(String title, String value) {
        if (title == null || value == null) return;
        this.attributeMap.putIfAbsent(title, value);
    }

    public void setParent(Node parent) {
        this.parent = parent;
    }
}
