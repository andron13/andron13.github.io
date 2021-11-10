/**
 * mydocs
 * 10 19 : 22
 */
public class Gcd {
    public static int euclideanAlgorithm(int a, int b) {
        while (a != b) {
            if (a > b) {
                a = a - b;
            } else {
                b = b - a;
            }
        }
        return a;
    }

    public static int gcdAlgorithmModulo(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    public static void main(String[] args) {
        System.out.println(euclideanAlgorithm(38, 36));
        System.out.println(gcdAlgorithmModulo(38, 36));
        System.out.println(gcdAlgorithmModulo(36, 38));

    }

    public static int gcdRecursionAlgorithm(int a, int b) {
        if (b == 0) {
            return a;
        }
        return gcdRecursionAlgorithm(b, a % b);
    }


    public static int leastCommonMultiple(int a, int b) {
        return a / gcdRecursionAlgorithm(a, b) * b;
    }
}
