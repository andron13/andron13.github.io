# Variable arguments - Varargs — введение в Java 020
 
Давайте сложим два числа:

```Java
public class Main {
    public static void main(String[] args) {
        sum(2, 3);
    }

    private static int sum(int a, int b) {
        return a + b;
    }
}
```

Удобно находить сумму, но не очень. Ведь если надо найти сумму трёх чисел, надо писать другой метод:

```Java
public class Main {
    public static void main(String[] args) {
        sum(2, 3, 5);
    }

    private static int sum(int a, int b, int c) {
        return a + b + c;
    }
}
```

А если надо найти сумму трёх чисел? десяти? В конце месяца надо посчитать оплату за все рабочие дни. Дней каждый месяц разное количество, разное количество праздников, прогулов, больничных. Так что вопрос закономерный. Что делать, если мы не знаем сколько значений нам надо сложить?

Ответ кроется в ключевом слове **Varargs**. 

```Java
public class MyVarargs {
    public static void main(String[] args) {
        System.out.println(sum(2, 3, 4, 7, 9));
    }

    private static int sum(int... allDigits) {
        int result = 0;
        for (int digit : allDigits) {
            result = result + digit;
        }
        return result;
    }
}
```

Метод **sum** принимает любое количество целочисленных переменных. Об этом нам говорит эта запись (**int... allDigits
**).  И дальше мы можем работать с переменными, как будто у нас есть массив данных. 

Если хотите, то **Varargs** принимает распакованный массив как аргумент метода и подготавливает его для нас на лету. 

>> —  Может ли такой метод принимать другие данные?  
> —  Ответ да. Но с оговорками. Variable arguments могут быть приняты лишь единожды и они принимаются последними.

```Java
public class MyLovelyVarargs {
    public static void main(String[] args) {
        System.out.println(sum("мой интересный массив", 2, 3, 4, 7, 9));
    }

    private static int sum(String arrayName, int... allDigits) {
        int result = 0;
        for (int digit : allDigits) {
            result = result + digit;
        }
        return result;
    }
}
```

## Домашнее задание

1. Напишите метод, который принимает динамичное количество городов Германии и выводит их столбиком.
2. Создайте новый массив, в котором города записаны от коротких имён к длинным.

