import java.util.*;
public class GraphMatrix {
    static int vertexCount;
    static int[][] edges;
    GraphMatrix(int v) {
        edges = new int[v][v];
        vertexCount = v;
    }
    static void addNode() {
        int[][] newEdges = new int[vertexCount][vertexCount];
        for(int i=0;i<vertexCount;i++)
        for(int j=0;j<vertexCount;j++)
            newEdges[i][j] = 0;
        edges=newEdges;
    }
    static void addEdges(int from, int to) {
        if (from >= vertexCount || to >= vertexCount) {
            System.out.println("enter valid vertex..");
            return;
        }
        edges[from][to] = 1;
    }
    static void removeEdges(int from, int to) {
        if (from >= vertexCount || to >= vertexCount) {
            System.out.println("enter valid vertex..");
            return;
        }
        edges[from][to] = 0;
    }
    static void print() {
        for (int i = 0; i < vertexCount; i++) {
            System.out.print(i + "--->");
            for(int j=0;j<vertexCount;j++)
            if(edges[i][j]==1)
                System.out.print(j+" ");
        System.out.println();
        }
    }
    public static void main(String args[]) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter the number of vertices : ");
        int n = s.nextInt();
        int from;
        int to;
        int choice;
        GraphMatrix graph = new GraphMatrix(n);
        do{
            System.out.println("1.addNodes    2.addEdges    3.removeEdges    4.print    5.exit");
            choice=s.nextInt();
            switch(choice) {
                case 1:addNode();
                break;
                case 2:
                    from=s.nextInt();
                    to=s.nextInt();
                    addEdges(from,to);
                    break;
                case 3:
                    from=s.nextInt();
                    to=s.nextInt();
                    removeEdges(from,to);
                    break;
                case 4:
                    print();
                    break;
                case 5:break;
            }
        }while(choice!=5);
    }
}