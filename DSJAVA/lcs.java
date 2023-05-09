import java.util.Arrays;

class lcs
{
    static int findlcs(int i,int j,int [][]dp,String s1,String s2)
    {
        System.out.println("inside findlcs "+ s1.charAt(i)+" "+s2.charAt(j));
        if(i<0 || j<0) return 0;
        if(dp[i][j]!=-1) return dp[i][j];
        if(s1.charAt(i)==s2.charAt(j))
            return dp[i][j]=1+findlcs(i-1,j-1,dp,s1,s2);
        else
            return dp[i][j]=Math.max(findlcs(i-1,j,dp,s1,s2),findlcs(i,j-1,dp,s1,s2));
    }  

public static void main(String args[])
{
    // Scanner sc=new Scanner(System.in);
    // String s1=sc.nextln();
    // String s2=sc.nextln();
    String s1="abcde";
    String s2="ace";
    int l1=s1.length();
    int l2=s2.length();
    int[][]dp=new int[l1+1][l2+1];
    for(int[] arr:dp)
    {
        Arrays.fill(arr,-1);
    }
    for(int i=0;i<l1;i++)
    {
        for(int j=0;j<l2;j++)
        {
            System.out.print(dp[i][j]+" ");
        }
        System.out.println();
    }
    System.out.println(findlcs(l1-1,l2-1,dp,s1,s2));
    System.out.println(dp[0][0]);
}
}