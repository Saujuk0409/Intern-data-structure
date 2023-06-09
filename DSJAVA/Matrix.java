

public class Matrix {
	public static int matrixChainMultiplication(int[] dims, int i, int j)
	{
		if (j == i + 1) {
			return 0;
		}
		int min = Integer.MAX_VALUE;
		for (int k = i + 1; k <= j - 1; k++)
		{
			int cost = matrixChainMultiplication(dims, i, k)+matrixChainMultiplication(dims, k, j)+dims[i] * dims[k] * dims[j];
			if (cost < min) {
				min = cost;
			}
		}
		return min;
	}
	public static void main(String[] args)
	{
		int[] dims = { 1, 3, 5, 6 };
		System.out.print("The minimum cost is " +
				matrixChainMultiplication(dims, 0, dims.length - 1));
		
	}
}
