//package task4;
import java.util.*;
public class SumOfNodes {
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
    //inorder traversal
    static void inorder(Node root) {
        if (root == null)
            return;
        inorder(root.left);
        System.out.print(root.data + " ");
        inorder(root.right);
    }
    static int sum = 0;
    static void sumOfLeaveNode(Node root) {
        if (root == null)
            return;
        else {
            if (root.left == null && root.right == null)
                sum += root.data;
            sumOfLeaveNode(root.left);
            sumOfLeaveNode(root.right);
        }
    }
    static int total = 0;
    static void sumOfNodesWithOneChild(Node root) {
        if(root==null)
        return;
        else {
            System.out.println(total);
            if(root.left==null && root.right!=null)
                total += root.data;
            if(root.left!=null && root.right==null)
                total += root.data;
            sumOfNodesWithOneChild(root.left);
            sumOfNodesWithOneChild(root.right);
        }
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
        // inorder call
        System.out.println("\nInorder:");
        inorder(root);
        System.out.println();
        sumOfLeaveNode(root);
        System.out.println("Sum of leave nodes : " + sum);
        sumOfNodesWithOneChild(root);
        System.out.println("Sum Of node with One Child : "+ total);
    }
}












