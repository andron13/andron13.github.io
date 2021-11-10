/**
 * mydocs
 * 05 15 : 52
 */
public class Main {
    public static void main(String[] args) {
        System.out.println('1' + '1');
        boolean papa = false;
        boolean mama = true;
        if (papa | mama) {
            System.out.println("Запрещено");
        }

        if (papa || mama) {
            System.out.println("Запрещено");
        }else{
            System.out.println("razre+eno");
        }
    }
}
