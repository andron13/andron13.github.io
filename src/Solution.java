/**
 * mydocs
 * 02 08 : 39
 */
public class Solution {
     boolean xyBalance(String input) {
        char x = 'x';
        if (input.contains("x")) {
            return input.substring(input.indexOf(x)).contains("y");
        }
        return false;
    }
}

class Test1{
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.xyBalance("aaxbby"));
        System.out.println(sol.xyBalance("aaxbb"));
        System.out.println(sol.xyBalance("yaaxbb"));
    }
}