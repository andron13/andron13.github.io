# JUnit - тестировние приложений в Java

В начале перед первым уроком я стоял перед выбором какую из "страшных" технологий, дать в самом начале и не говорить что они страшные. В итоге я решил, что Git та технология, которая даётся сложнее всего и в каждом уроке стоит немного уделять ему внимания. Потому что без написания код нельзя выучить методы работы с Git.

Однако существует ещё одна технология, которая невозможна сама по себе, она требует уже написанного кода. Это тестирование. Ради этой главы и было введение в Maven и Gradle. Выучив тестирование и освоив его мы окунёмся в мир настоящего взрослого и прекрасного объектно-ориентированного программирования.

```java
public class Calculator {
    public static int addition(int... values) {
        int result = 0;
        for (int element : values) {
            result += element;
        }
        return result;
    }

    public static void main(String[] args) {
        testAdditionOne();
        testAdditionTwo();
        testAdditionThree();
        testAdditionFor();
    }

    private static void testAdditionFor() {
        if (addition(1, 2, 5) == 8) {
            System.out.println("Тест 4 прошёл успешно");
        } else System.out.println("Тест 4 не прошёл");
    }

    private static void testAdditionThree() {
        if (addition(5, -5) == 0) {
            System.out.println("Тест 3 прошёл успешно");
        } else System.out.println("Тест 3 не прошёл");

    }

    private static void testAdditionTwo() {
        if (addition(100, 1000) == 1100) {
            System.out.println("Тест 2 прошёл успешно");
        } else System.out.println("Тест 2 не прошёл");

    }

    private static void testAdditionOne() {
        if (addition(2, 5) == 7) {
            System.out.println("Тест 1 прошёл успешно");
        } else System.out.println("Тест 1 не прошёл");
    }
}
```

## Тестирование - основы

Существует самые различные виды тестирования. 

https://junit.org/junit5/