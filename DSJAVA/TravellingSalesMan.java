import java.util.Scanner;
public class TravellingSalesMan {
    static int[][] dist;
    static int n;
    static int[][] dp;
    static int ALL_VISITED;
    private static int TravelSalesMan(int mask, int pos) {
        if (mask == ALL_VISITED)
            return dist[pos][0];
        if(dp[mask][pos]!=-1)
            return dp[mask][pos];
        int ans=Integer.MAX_VALUE;
        for (int city = 0; city < n; city++) {
            if ((mask & (1 << city)) == 0) {
                int newans = dist[pos][city] + TravelSalesMan(mask | (1 << city), city);
                ans = Math.min(newans, ans);
            }
        }
        return dp[mask][pos]=ans;
    }
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        n = s.nextInt();
        ALL_VISITED = (1 << n) - 1;
        dist = new int[n][n];
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                dist[i][j] = s.nextInt();
            }
        }
        dp = new int[1 << n][n];
        for (int i = 0; i < (1 << n); i++) {
            for (int j = 0; j < n; j++) {
                dp[i][j] = -1;
            }
        }
        System.out.println(TravelSalesMan(1, 0));
    }
}












