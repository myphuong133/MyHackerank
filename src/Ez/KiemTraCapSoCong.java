package Ez;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class KiemTraCapSoCong {
    public static int solve(int n, List<Integer> numbers) {
        int arithmetical_ratio = 0;
        if (numbers.size() <= 2) {
            return 0;
        } else {
            for (int i = 0; i < numbers.size()-1; i++) {
                if (i == 0){
                    arithmetical_ratio = numbers.get(i + 1) - numbers.get(i);
                } else {
                    if ((numbers.get(i + 1) - numbers.get(i)) != arithmetical_ratio ){
                        return 0;
                    }
                }
            }
            return 1;
        }
    }
    public static void main(String[] args) {
        // Test cases
        List<List<Integer>> testCases = new ArrayList<>();
        testCases.add(Arrays.asList(1, 2, 3, 4, 5));    // Expected: 1
        testCases.add(Arrays.asList(1, 3, 5, 7, 9));    // Expected: 1
        testCases.add(Arrays.asList(2, 4, 6, 8, 10));   // Expected: 1
        testCases.add(Arrays.asList(2, 4, 7, 9, 11));   // Expected: 0
        testCases.add(Arrays.asList(1, 1, 1, 1));       // Expected: 0
        testCases.add(Arrays.asList(1, 1));             // Expected: 0
        testCases.add(Arrays.asList(5, 10, 15));        // Expected: 1
        testCases.add(Arrays.asList(0, 5, 10, 15));     // Expected: 1
        testCases.add(Arrays.asList(1, 4, 7, 10));      // Expected: 1
        testCases.add(Arrays.asList(2, 5, 9, 12));      // Expected: 0
        testCases.add(Arrays.asList(0, 2, 4, 6));       // Expected: 1
        testCases.add(Arrays.asList(1, 3));             // Expected: 1
        testCases.add(Arrays.asList(3, 6, 9, 12));      // Expected: 1
        testCases.add(Arrays.asList(1, 1, 2, 3, 5));    // Expected: 0
        testCases.add(Arrays.asList(0, 0, 0));          // Expected: 0

        for (int i = 0; i < testCases.size(); i++) {
            int result = solve(testCases.get(i).size(), testCases.get(i));
            System.out.println("Test case " + (i + 1) + ": " + result);
        }
    }

}
