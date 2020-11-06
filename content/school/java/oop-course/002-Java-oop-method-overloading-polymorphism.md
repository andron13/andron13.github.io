---
bookCollapseSection: true
weight: 2
title: Java-OOP 02 - Перегрузка методов в Java Overloadin 
description: Введение в объектно-ориентированное программирование на Java. Курс разработан в 2020 году.
type: book 
author: andron13
date: 2020-11-06
linktitle: 02 - Перегрузка методов в Java Overloading
---

# Перегрузка методов (Method Overloading)

В Java несколько методов из одного класса могут иметь одно название. 

## Одно название и несколько методов

Давайте сразу рассмотрим пример. 

```Java
public class Calculator {
    public static int addition(int a, int b) {
        return a + b;
    }

    public static double addition(double a, double b) {
        return a + b;
    }
}
```

Очевидное-невероятное, но Java сама выбирает подходящий метод, для решения проблемы.Если мы передадим ей два int, то выберется первый метод, если два double, то JDK выберет самостоятельно нижний метод. 

Мы можем создать метод с двумя long или с двумя String. 

```Java
    public static double addition(String a, String b) {
        return a + b;
    }
```

Каждый раз сигнатура метода будет меняться и Java выбирает подходящий. 

## Сигнатура метода

**Сигнатура метода** - это название метода и принимаемые им параметры. У метода выше сигнатурой называется **addition(int a, int b)**. При изменении параметров меняется и сигнатура. 

>> The signature of the method declared above is: calculateAnswer(double, int, double, double);

Два метода имеют одинаковую сигнатуру, если они имеют одинаковые имена и типы аргументов. Таким образом, возвращаемый тип метода или его модификатор доступа не является частью сигнатуры метода.

## Количество принимаемых атрибутов

Мы можем менять не только типы "переменных", но и их количество. 

В наш класс Calculator мы можем добавить новые методы:
```Java
public class Calculator {
    public static int addition(int a, int b) {
        return a + b;
    }

    public static double addition(double a, double b) {
        return a + b;
    }

    public static double addition(String a, String b) {
        return a + b;
    }
    public static int addition(int a, int b, int c) {
        return a + b;
    }

    public static double addition(double a, double b, double c) {
        return a + b;
    }

    public static double addition(String a, String b, String c) {
        return a + b;
    }
}
```

Сигнатура не должна повторяться. Java видит название метода и шесть разных вариантов переменных:
1. Два инта
2. Три инта
3. Два double
4. Три double
5. Два String
6. Три String

Вполне возможно передать один String и один int. Но это можно сделать лишь единожды. Сигнатура каждый раз должна отличаться. 

Перегрузка методов позволяет прописать свои свойства даже для простого сложения. В главе, в которой мы знакомились с [Assert]({{< relref "/school/java/basic-course/037-java-assert.md">}}) мы прописывали максимальное значение Integer. С помощью перегрузки мы должны прописать правильный и корректный метод для каждого типа данных. Возможно и для [Vararg]({{< relref "/school/java/basic-course/020-java-varargs.md" >}}) понадобится свой метод.

Перегрузка важная часть  полиморфизма, в объектно ориентированном программировании. 

Забегая вперёд в Java три важные части или даже кита, на которых она стоит.

## Три(четыре) кита на которых стоит Java

1. Наследование - inheritance.
2. Инкапсуляция - encapsulation. 
3. Полиморфизм - polymorphism.
    - перегрузка - overloading.
    - переопределение - overriding
4. Абстракция - data abstraction. 


Очень часто абстракцию не указывают как несущую часть ООП, считая её частью наследования. Я для себя истину не выяснил. В спорах участвовать мне лень. Вам я привожу оба существующих мнения. 

В течении следующей дюжины глав я попробую осветить все эти термины.

## Полиморфизм

Здесь  могло бы стоять определение. Но это очень обширная тема, проходящая через всё ООП. По этому пока просто запомните, что перегрузка входит в определение полиморфизма. 

## Дополнительные ссылки

1. Defining Methods - [Oracle](https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html). Перегрузка и нейминг методов.
2. Method Overloading and Overriding in Java - [baeldung](https://www.baeldung.com/java-method-overload-override). На этой странице затронут и overriding. 


