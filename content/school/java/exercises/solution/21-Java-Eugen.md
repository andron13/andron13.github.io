# Задачи от Жени

1. Given a String with different braces, check if the order of braces is correct. Every next brace can be an opening brace or should close a previous opening brace.
2. Given a long, check if it is a palindrom
3. Given a string with capital letters, small letters and symbols, return a string with capital letters turned into small, ans small into capital. Symbols remain unchanged.

------------------------------

public class Palindrom {
    // given a long, check if it is a palindrom
    public static void main(String[] args) {
        System.out.println(isPalindrom(912345));
        System.out.println(isPalindrom(912219));
    }

    public static boolean isPalindrom(long number) {
        String input = "";
        String reversed = "";
        input = String.valueOf(number);
        for (int i = input.length() - 1; i >= 0; i--) {
            reversed = reversed + input.charAt(i);
        }
        if (input.equals(reversed)) {
            return true;
        } else {
            return false;
        }
    }
}



public class CapitalSmallLetters {
    // given a string with capital letters, small letters and symbols, return a string with capital letters turned
    // into small, ans small into capital. Symbols remain unchanged.
    public static void main(String[] args) {
        System.out.println(makeCapitalAndSmallLetters("AbRa CaDaBrA!?*"));
    }

    public static String makeCapitalAndSmallLetters(String input) {
        String result = "";
        for (int i = 0; i < input.length(); i++) {
            if (Character.isUpperCase(input.charAt(i))) {
                result += input.substring(i, i + 1).toLowerCase();
            }
            else {
                result += input.substring(i, i + 1).toUpperCase();
            }
        }
        return result;
    }
}


import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.Deque;

public class CorrectBraces {
    //given a String with different braces, check if the order of braces is correct. Every next brace can
    // be an opening brace or should close a previous opening brace.

    public static void main(String[] args) {
        System.out.println(checkBraces("[{}([[]])]")); //exp. true
        System.out.println(checkBraces("[{}([}[]])])")); //exp. false

    }

    public static boolean checkBraces(String input) {
        String[] arr = new String[input.length()];
        //String res = "";
        for (int i = 0; i < input.length() - 1; i++) {
            if (input.charAt(i) == '[' || input.charAt(i) == '(' || input.charAt(i) == '{') {
                arr[i] = input.substring(i, i + 1);
            } else if (arr[i + 1] == "]" || arr[i + 1] == ")" || arr[i + 1] == "}") {
            }
            // res += input.substring(i, i + 1);
        }
        System.out.println(Arrays.toString(arr));

        return false;
    }

    // Deque<Character> res = new ArrayDeque<Character>();
    // ArrayDeque<Character>
    // res = new Deque<Character> ;

}