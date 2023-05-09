import java.util.*;
public class TreeTraversals {
    static Node root = null;
    //tree node
    static class Node {
        int data;
        Node left;
        Node right;
        Node(int data) {
            this.data = data;
            left = null;
            right = null;
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
    //preorder traversal
    static void preorder(Node root) {
        if (root == null)
            return;
        preorder(root.left);
        preorder(root.right);
        System.out.print(root.data + " ");
    }
    //postorder traversal
    static void postorder(Node root) {
        if (root == null)
            return;
        System.out.print(root.data + " ");
        postorder(root.left);
        postorder(root.right);
    }
    //inorder traversal
    static void inorder(Node root) {
        if (root == null)
            return;
        inorder(root.left);
        System.out.print(root.data + " ");
        inorder(root.right);
    }
    //levelorder traversal (bfs)
    static void levelorder() {
        for (int i = 0; i <= height(root); i++) {
            nodesAtLevel(root, i);
        }
    }
    //nodes at kth level
    static void nodesAtLevel(Node root, int level) {
        if (root == null)
            return;
        if (level == 0) {
            System.out.print(root.data + " ");
            return;
        }
        nodesAtLevel(root.left, level - 1);
        nodesAtLevel(root.right, level - 1);
    }
    //height of tree
    static int height(Node root) {
        if (root == null)
            return 0;
        if (root.left == null && root.right == null)
            return 0;
        return 1 + Math.max(height(root.left), height(root.right));
    }
    //depth of tree
    static int depth(Node root, int value) {
        if (root.data == value)
            return 0;
        if (root.data < value)
            return 1 + depth(root.right, value);
        if (root.data >= value)
            return 1 + depth(root.left, value);
        return 0;
    }
    //lowest common anchester
    static Node commonAnchester(Node root,int a, int b) {
        if (root==null || root.data == a || root.data == b )
            return root;
        Node left = commonAnchester(root.left, a, b);
        Node right = commonAnchester(root.right, a, b);
        if(left==null)
            return right;
        else if(right==null)
            return left;
        else
        return root;
    }
    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);
        int ele;
        //dynamic input
        while (true) {
            ele = s.nextInt();
            if (ele == -1) {
                break;
            }
            insert(ele);
        }
        //preorder call
        System.out.println("Preorder:");
        preorder(root);
        //postorder call
        System.out.println("\nPostorder:");
        postorder(root);
        // inorder call
        System.out.println("\nInorder:");
        inorder(root);
        //levelorder call
        System.out.println("\nLevelorder:");
        levelorder();
        //find height
        System.out.println("\nHeight of the tree : " + height(root));
        //find height
        System.out.print("Enter the element to which depth has to find : ");
        ele=s.nextInt();
        System.out.println("Depth of "+ele+" : " +depth(root,ele));
        //finding common anchester
        System.out.println("Enter the elements to finds its common anchester:");
        int a = s.nextInt();
        int b = s.nextInt();
        Node com_anchester = commonAnchester(root, a, b);
        //printing the commonanchester node's data if not null
        if(com_anchester != null)
            System.out.println("common anchester of " + a + " & " + b + " is : " + com_anchester.data);
    }
}














