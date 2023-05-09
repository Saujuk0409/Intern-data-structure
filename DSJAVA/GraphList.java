import java.util.*;
public class GraphList {
    static class Node {
        int data;
        Node(int data) {
            this.data = data;
        }
    }
    static Map<Integer, Node> nodes = new HashMap<>();
    static Map<Node, List<Node>> adjancencyList = new HashMap<>();
    public static void addNode(int data) {
        Node node = new Node(data);
        if (!nodes.containsKey(data)) {
            nodes.put(data, node);
        }
        // System.out.println(nodes.get(data).data);
    }
    public static void addEdge(int from, int to) {
        Node fromNode = nodes.get(from);
        Node toNode = nodes.get(to);
        if (toNode != null && fromNode != null) {
            if (!adjancencyList.containsKey(fromNode)) {
                adjancencyList.put(fromNode, new ArrayList<Node>());
            }
            adjancencyList.get(fromNode).add(toNode);
        }
    }
    static void removeEdge(int from, int to) {
        Node fromNode = nodes.get(from);
        Node toNode = nodes.get(to);
        if (fromNode != null && toNode != null) {
            adjancencyList.get(fromNode).remove(toNode);
        }
    }
    static void removeNode(int data) {
        if (nodes.containsKey(data)) {
            Node fromNode = nodes.get(data);
            adjancencyList.remove(fromNode);
            nodes.remove(data);
        }
    }
    static void print() {
        for (Node source : adjancencyList.keySet()) {
            var target = adjancencyList.get(source);
            if (!target.isEmpty()) {
                System.out.print(source.data + " is connected to ");
                for (Node i : target) {
                    System.out.print(i.data+"  ");
                }
                System.out.println();
            }
        }
    }
    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);
        int data;
        System.out.println("Enter the Nodes : ");
        while (true) {
            data = s.nextInt();
            if (data == -1)
                break;
            addNode(data);
        }
        System.out.println("Enter the Edges as FROM node and TO node: ");
        int from;
        int to;
        while (true) {
            from = s.nextInt();
            if(from==-1)
                break;
            to = s.nextInt();
            addEdge(from, to);
        }
        print();
    }
}