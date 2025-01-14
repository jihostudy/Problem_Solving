import java.util.*;

class Solution {
    public int BFS(int[][] land, boolean[][] visited, int gasNum, int sRow, int sCol, int N, int M) {
        int[] dr = {0, 1, 0, -1};
        int[] dc = {1, 0, -1, 0};
        Queue<int[]> queue = new LinkedList<>();
        queue.add(new int[]{sRow, sCol});
        visited[sRow][sCol] = true;

        int gasSize = 0;
        while (!queue.isEmpty()) {
            int[] current = queue.poll();
            int row = current[0];
            int col = current[1];
            land[row][col] = gasNum;
            gasSize++;

            for (int i = 0; i < 4; i++) {
                int nRow = row + dr[i];
                int nCol = col + dc[i];

                if (nRow >= 0 && nRow < N && nCol >= 0 && nCol < M && !visited[nRow][nCol] && land[nRow][nCol] == 1) {
                    queue.add(new int[]{nRow, nCol});
                    visited[nRow][nCol] = true;
                }
            }
        }

        return gasSize;
    }

    public int solution(int[][] land) {
        int N = land.length;
        int M = land[0].length;

        boolean[][] visited = new boolean[N][M];
        Map<Integer, Integer> gasSizes = new HashMap<>();

        int gasNum = 2;
        for (int row = 0; row < N; row++) {
            for (int col = 0; col < M; col++) {
                if (!visited[row][col] && land[row][col] == 1) {
                    int gasSize = BFS(land, visited, gasNum, row, col, N, M);
                    gasSizes.put(gasNum, gasSize);
                    gasNum++;
                }
            }
        }

        int maxGas = 0;
        for (int col = 0; col < M; col++) {
            Set<Integer> gases = new HashSet<>();
            for (int row = 0; row < N; row++) {
                int val = land[row][col];
                if (val != 0 && !gases.contains(val)) {
                    gases.add(val);
                }
            }

            int sumGas = 0;
            for (int gas : gases) {
                sumGas += gasSizes.getOrDefault(gas, 0);
            }
            maxGas = Math.max(maxGas, sumGas);
        }

        return maxGas;
    }
}
