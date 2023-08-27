public class MaximumProductSubarray {
    public static void main(String[] args) {
        int[] arr = { 2, 3, -2, 4 };
        int min = arr[0];
        int ans = arr[0], max = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < 0) {
                int t = min;
                min = max;
                max = t;
            }
            max = Math.max(arr[i], arr[i] * max);
            min = Math.min(arr[i], arr[i] * min);
            ans = Math.max(ans, max);
        }
        System.out.println(ans);
    }
}
