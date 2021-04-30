---
bookCollapseSection: true
weight: 1
title:
description:
images:
---

## Тернарный оператор "?:" — введение в Java 016

Выражение:

```bash
if (условие) {
   number = 10;
}
else {
   number = -10;
}
```

Можно заменить на

```
number = (условие) ? 10 : -10;
```

То есть **?:** укороченный условный оператор if, if-else из [седьмого урока]({{< relref "/school/java/basic-course/007-java-if-else.md" >}}) 


```
переменная = (выражение) ? значение if true : значение if false
```

```
public static void ternar(int schoolАttestat){
    String resultAtHome = "";
    resultAtHome = (schoolАttestat >= 3) ? "Ребёнок переходит в следуюший класс" : "Ребёнок остаётся на второй год";
    System.out.println( "Результат учёбы за год: " +  resultAtHome);
   }
```

Ещё пример для закрепления:

```Java
class TernarOperator {
   public static void main(String[] args) {   
      Double kelvin = -273.15;
      String result;
      
      result = (kelvin > 0.0) ? "positive" : "not positive";
      System.out.println(number + " is " + result);
   }
}
```

Рекурсивный метод нахождения факториала для будущего урока можно записать так:

```
    static int fact(int num) {
        return ((num > 1) ? num * fact(num - 1) : 1);
    }
```

Тернарный оператор применяют когда абсолютно простая операция может иметь два варианта развития. Это так называемый синтаксический сахар. Помогает быстрее и лаконичнее писать код.

Я несколько раз видел, как тернарный оператор вкладывают один в другого. Я не буду приводить пример, потому что моё личное мнение — такой код абсолютно нечитаем.

## Дополнительная ссылка

1. https://www.baeldung.com/java-ternary-operator
2. Спорный пример использования тернарного оператора в JS - [Несколько болезненный тройной вложенный тернарный оператор](https://coderoad.ru/10526739/%D0%9D%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D0%B1%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%82%D1%80%D0%BE%D0%B9%D0%BD%D0%BE%D0%B9-%D0%B2%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9-%D1%82%D0%B5%D1%80%D0%BD%D0%B0%D1%80%D0%BD%D1%8B%D0%B9-%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80).

## Домашнее задание

1. Даны два числа, a и b. Верните большее из них. Не используйте никаких методов из библиотеки Math. Покажите работу тернарного оператора. 
    ```  
    getMeMax(15, 5) → 15
    getMeMax(4, 16) → 16
    getMeMax(20, 100) → 100
    ```
2. Даны два числа, a и b. Верните меньшее из них. Не используйте никаких методов из библиотеки Math. Покажите работу тернарного оператора. 
    ```  
    getMeMin(15, 45) → 15
    getMeMin(44, 16) → 16
    getMeMin(200, 100) → 100
    ```
3. Даны два строковых значения. Верните идущее по алфавиту раньше.
    ``` 
    myFirstCompareTo("Berlin", "Moscow"); → "Berlin"
    myFirstCompareTo("Kyiv", "Paris"); → "Kyiv"
    myFirstCompareTo("Могилёв", "Потсдам"); → "Могилёв"
   ``` 
