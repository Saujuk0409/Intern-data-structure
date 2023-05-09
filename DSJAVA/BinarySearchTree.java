import java.util.*;
public class BinarySearchTree {
    static Node root = null;
    static Queue<queueData> queue = new LinkedList<queueData>();
    static TreeMap<Integer, List<Integer>> map = new TreeMap<>();
    //Tree Node
    static class Node {
        int data;
        Node left;
        Node right;
        int dist;
        Node(int data) {
            this.data = data;
            left = null;
            right = null;
            dist = 0;
        }
    }
    //queue data
    static class queueData {
        Node node;
        int dist;
        queueData(Node node, int dist) {
            this.node = node;
            this.dist = dist;
        }
    }
    //inserting new node to tree
    static void insert(int data) {
        Node newnode = new Node(data);
        if (root == null) {
            root = newnode;
        } else {
            Node current = root;
            while (true) {
                if (data < current.data) {
                    if (current.left == null) {
                        current.left = newnode;
                        break;
                    }
                    current = current.left;
                } else {
                    if (current.right == null) {
                        current.right = newnode;
                        break;
                    }
                    current = current.right;
                }
            }
        }
    }
    //calculate th horizontal distance for each nodes
    static void calcDist(Node root) {
        if (root == null)
            return;
            if (root.left != null)
            root.left.dist = root.dist - 1;
            if (root.right != null)
            root.right.dist = root.dist + 1;
            calcDist(root.left);
            calcDist(root.right);
    }
    //creating Map
    static void createMap(Node root) {
        if (root == null) {
            return;
        }
        //if right not null enqueue right node to queue
        if (root.left != null) {
            queueData left = new queueData(root.left, root.left.dist);
            queue.add(left);
        }
        //if right not null enqueue right node to queue
        if (root.right != null) {
            queueData right = new queueData(root.right, root.right.dist);
            queue.add(right);
        }
        //pushing root to map
        if (!map.containsKey(root.dist)) {
            map.put(root.dist, new ArrayList<Integer>());
        }
        map.get(root.dist).add(root.data);
        //dequeue the element current root
        queue.remove();
        //if queue is not empty continue the recursion
        if (!queue.isEmpty()) {
            Node current = queue.peek().node;
            createMap(current);
        }
    }
    //verticalOrder Traversal
    static void VerticalOrder() {
        calcDist(root);
        queueData data = new queueData(root, root.dist);
        queue.add(data);
        createMap(root);
        //printing the nodes in vertical order
        for (Map.Entry<Integer, List<Integer>> entry : map.entrySet()) {
            List<Integer> nodes = entry.getValue();
            for (int i : nodes) {
                System.out.print(i + " ");
            }
        }
    }
    //preorder traversal
    static void preorder(Node root) {
        if (root == null)
            return;
        preorder(root.left);
        preorder(root.right);
        System.out.println(root.data + "---->" +root.dist);
    }
    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);
        int ele;
        //dynamic input
        // while (true) {
        //     ele = s.nextInt();
        //     if (ele == -1) {
        //         break;
        //     }
        //     insert(ele);
        // }
        //static input
        // insert(100);
        // insert(50);
        // insert(150);
        // insert(30);
        // insert(70);
        // insert(130);
        // insert(170);
        // insert(20);
        // insert(40);
        // insert(60);
        // insert(90);
        // insert(190);
        // insert(160);
        System.out.print("VerticalOrder Traversal : ");
        VerticalOrder();
        System.out.println();
    }
}