# For-Each Loop — введение в Java 019

Мы изучали цикл **for**, где в определённом диапазоне мы перебирали элементы. Существует брат уже изученного цикла - **for each** (фор ич). For each позволяет просмотреть все элементы массива не обращаясь к ним по индексу. Например:

```Java
public class Main {
    public static void main(String[] args) {
        int[] arr = new int[]{1, 2, 3, 4, 5, 6};
        printArray(arr);
    }

    public static void printArray(int[] inputArray) {
        System.out.println("Начинаем печатать массив");
        for (int element : inputArray) {
            System.out.print(element + ", ");
        }
        System.out.println();
        System.out.println("Конец печати массива");
    }
}
```

For each отличается от for тем, что он проработает со всеми элементами массива, а for только с теми , на которые попал шаг.

Выгодное отличие, благодаря этому нам не надо указывать с какого элемента начинать работать и длину массива.

Единственное, помните, что foreach не изменит массив. И в цикле распечатки сработают. Но массив останется неизменным. Попробуйте сами.

```Java
    public static void arrayTryAndCry() {
        int arrayLength = 10;
        int[] myArray = new int[arrayLength];
        for (int element : myArray) {
            element = element + (int) (Math.random() * 100);
            System.out.print(element + ", ");
        }
        System.out.println();
        printArray(myArray);
    }  
```

Так происходит потому, что изменить содержимое массива мы можем только обратившись к отдельному элементу по индексу.

Несмотря на данное ограничение цикл foreach является достаточно популярным и его следует знать. 

## Домашнее задание

1. Распечатайте с помощью foreach строковый массив
2. Распечатайте с помощью foreach массив символов.

