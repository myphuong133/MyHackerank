package Ez;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

public class VongDeoTay {
    public static String solve(String bracelet) {
        int i;
        char[] chars = bracelet.toCharArray();
        // Tạo list để sắp xếp
        ArrayList<String> braceletlist = new ArrayList<>();
        // Tạo ra số lượng n vòng liên tiếp
        for (i = 0; i < chars.length;i++){
            String res = "";
            int j = i;
            for (int k = 0; k< chars.length;k++){
                if (j < chars.length){
                    res += (chars[j]);
                } else {
                    res += (chars[j - chars.length]);
                }
                j++;
            }
            braceletlist.add(res);
            System.out.println(res);
        }
        // Sắp xếp theo thứ tự bảng chữ cái
        Collections.sort(braceletlist, ((o1, o2) -> o1.compareToIgnoreCase(o2)));
        System.out.println(braceletlist);
        return braceletlist.get(0);
    }

    public static void main(String[] args) {
        // Test
        solve("CDAB");
    }
}
