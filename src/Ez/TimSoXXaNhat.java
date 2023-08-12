package Ez;

import java.text.DecimalFormat;
import java.util.ArrayList;

public class TimSoXXaNhat {
    public static float solve(String s, float x) {

        s.trim();
        String[] inputList = s.split(" ");
        ArrayList<Float> listFloat = new ArrayList<>();
        for (String in: inputList
             ) {
            System.out.println(in);
            listFloat.add(Float.parseFloat(in));
        }
        System.out.println(listFloat);

        float maxGap = Math.abs(listFloat.get(0) - x);

        float numberChosen = listFloat.get(0);
        for (int i = 1; i < listFloat.size();i++){
            float gap = Math.abs(listFloat.get(i) - x);
            if (gap > maxGap){
                maxGap = gap;
                numberChosen = listFloat.get(i);
            }
        }
        return numberChosen;
    }

    public static void main(String[] args) {
        solve("22343534.12 42312312.13 7235345.154 0 -5 42312312.12", 42312312.12F);

    }

}
