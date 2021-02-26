---
bookCollapseSection: true
weight: 2
title: Java-OOP 05 - наследование - inheritance
description: Мы можем наследовать не только какие-то поля, мы можем наследовать методы. Давайте создадим в Person метод eats... Введение в объектно-ориентированное программирование на Java. Курс разработан в 2020 году.
type: book 
author: andron13
date: 2020-11-06
linktitle: 05 - Наследование - inheritance
---

# Наследование - inheritance

При разработке приложения для предприятия мы можем столкнуться с тем, что у различных профессий или должностей существуют различные параметры(поля класса) и поведение(методы).

Простейший пример университет. В нём есть студенты, преподаватели, научные и технические работники. У всех этих преподавателей должен быть пропуск. Например в зависимости от типа пропуска различные скидки в университетской столовой(например).

Давайте создадим класс Студента, Препода, и Работника. 

```Java
public class Student {
    private String firstName;
    private String secondName;
    private String uniID;

    void study(){
    }
}
```

```Java

public class Teacher {
    private String firstName;
    private String secondName;
    private String uniID;

    void teach(){
    }
}
```

```Java
public class Worker {
    private String firstName;
    private String secondName;
    private String uniID;

    void work(){
    }
}
```

На самой ранней стадии написания поля мы видим, что в нашем приложении будут 3 класса, которые содержат повторяющийся код. Такого следует избегать и мы можем вынести общую часть в родительский класс и назовём его как-то в стиле человек, персон, пользователь. Если вы не против, то я создам класс Person и в классе Person напишу конструктор для инстанцирование(создание) объектов с типом данных Person.

```Java
public class Person {
    private String firstName;
    private String secondName;
    private String uniID;

    public Person(String firstName, String secondName, String uniID) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.uniID = uniID;
    }
}
```

1. После создания класса Person мы можем указать нашему уже созданному выше классу Student с помощью ключевого слова **extends**, что его родительский Person.  
2. Так как в родительском классе отсутствует "пустой" конструктор, то мы обязаны(IDEA недвусмысленно намекнёт нам об этом) создать собственный конструктор, желательно реализовав родительские поля класса.  
{{< figure src="/img/res/java-oop/005/student-person-inheritance.png" alt="student person inheritance" >}}  
3. Редудантные(повторяющиеся) поля, которые у нас были до этого мы можем удалить.

Тогда мы получим вот такое:
```Java
public class Student extends Person {

    public Student(String firstName, String secondName, String uniID) {
        super(firstName, secondName, uniID);
    }

    void study() {
    }
}
```

Мы можем наследовать не только какие-то поля, мы можем наследовать методы. Давайте создадим в Персоне метод eats

```Java
    void eats(){
        System.out.println("Обед в 13:00");
    }
```

А потом переопределим его в Student: 

```Java
    @Override
    void eats() {
        super.eats();
        System.out.println("Ужин в 18:00");
    }
```
В данный момент переопределённый метод использует родительский, как он есть и добавляет свою собственную строчку.  

## Аннотация @Override 

Аннотация @Override указывает, что далее мы собираемся переопределять метод родительского класса.

При этом, если в родительском классе не окажется метода с аналогичной сигнатурой, то мы получим предупреждение компилятора о том, что хотя мы и собирались что-то переопределить, по факту этого не произошло.

На этом действие аннотации заканчивается.

Таким образом, аннотация никак не влияет на сам факт переопределения метода - при совпадении сигнатур с методом базового класса он и так будет переопределен, независимо от наличия, либо отсутствия этой аннотации. Аннотация служит лишь для контроля успешности действия при сборке проекта.

В случае отсутствия аннотации **@Override** и не совпадении сигнатур (в результате ошибки) с методом, который мы собирались переопределять - случится страшное - очень трудноуловимая ошибка, когда вы думаете, что должно бы переопределяться, а по факту имеете отдельный независимый метод, который скорее всего вообще не выполняется. При этом компилятор считает, что с его точки зрения все в порядке - хотите собственный метод в классе-наследнике - нет проблем. И молчит.

## toString

Все классы в Java по умолчанию являются дочерними классами самого главного класса в Java **Object**. Мы можем наследовать некоторые [методы главного класса](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html). Один из них метод "toString". Это тот метод, который переопределяется чаще всего. В нём программист обычно выводит информацию о своём объекте. 

В студенте мы можем реализовать такой код:

```Java
    @Override
    public String toString() {
        return super.toString();
    }
```

А в персоне:

```Java
    @Override
    public String toString() {
        return "Person{" +
                "firstName='" + firstName + '\'' +
                ", secondName='" + secondName + '\'' +
                ", uniID='" + uniID + '\'' +
                '}';
    }
```

Такая запись toString() де-факто стандарт Java. Старайтесь в таком стиле записывать информацию о ваших объектах.

Наш класс Student теперь выглядит вот так.

```Java
public class Student extends Person {

    public Student(String firstName, String secondName, String uniID) {
        super(firstName, secondName, uniID);
    }

    @Override
    void eats() {
        super.eats();
    }

    @Override
    public String toString() {
        return super.toString();
    }

    void study() {
    }
}
```

Класс Person вот так:

```Java
public class Person {
    private String firstName;
    private String secondName;
    private String uniID;

    public Person(String firstName, String secondName, LocalDate birthDate, String uniID) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.uniID = uniID;
    }

    void eats(){
        System.out.println("Обед в 13:00");
    }

    @Override
    public String toString() {
        return "Person{" +
                "firstName='" + firstName + '\'' +
                ", secondName='" + secondName + '\'' +
                ", uniID='" + uniID + '\'' +
                '}';
    }
}
```

Помните, что модификатор доступа у переопределённого класса должен быть уровнем не ниже родительского. То есть, если у базового(Person) класса он был public, то и у дочернего(Student) он тоже должен быть public.

## Запрет наследования

Мы можем запретить наследовать с помощью ключевого слова **final**. 
Тогда наш класс может начинаться так:


```Java
public final class Human {
    final void eats(){
        System.out.println("Обед в 13:00");
    }
}
```

Класс Human не может иметь наследников. 

```Java
public class Alien {
    final void eats(){
        System.out.println("Обед в 13:00");
    }
}
```
В классе Alien финализирован метод. Это значит, что дочерние классы не смогут его наследовать. 

## Создание объектов

Давайте я создам трёх студентов тремя способами.

```Java
public class Main {
    public static void main(String[] args) {
        Student pasha = new Student("Паша", "Алеексеев", "12345");
        Person sasha = new Student("Саша", "Семёнов", "3425345");
        Object dasha = new Student("Дарья", "Иванова", "3425345");
        Student newStudent = (Student) dasha;
    }
}
```

Наш студент является объектом, персоной и студентом. Теоретически мы можем создавать наш объект так, как нам это нужно для сверки, складирования или передачи данных. 

Приведение типов данных работает именно так, как показано на примере. 

## Пример с котиком

Давайте попробуем вспомнить школьную биологию и котиков - [википедиа](https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%88%D0%BA%D0%B0):  
{{< figure src="/img/res/java-oop/005/cat.jpg" title="наследование в java" alt="наследование в java" >}}

|Научная классификация| тип|
|:----:| :----: |
|Домен|	Эукариоты|
|Царство|	Животные|
Тип|	Хордовые
Класс|	Млекопитающие
Отряд|	Хищные
Семейство|	Кошачьи
Род|	Кошки
Вид|	Лесной кот
Подвид|	Кошка

Кошка является одновременно животным, хордовой, хищницей.

Примерно эта же мысль реализована в Java. 

## Types of Inheritance

Различные типы наследования:
{{< figure src="/img/res/java-oop/005/types_of_inheritance.jpg" alt="различные типы наследования в Java" >}} 

Java не поддерживает множественное наследование. Папа может быть только один. 

## Домашнее задание

1. Допишите классы Person, Student, Teacher, Worker
2. Добавьте в них дополнительные параметры общие в родительский и уникальные в дочерние.
3. Добавьте методы ходить, оплата за учёбу, выплата зарплаты
4. Создайте массив студентов, учителей, рабочих и персон. 
5. Создайте метод удаления, добавление, изменения элементов из массива.
6. Отсортируйте массивы по возрасту.
7. Создайте базовый класс домашних животных и несколько дочерних классов: кот, собака, попугай, канарейка, рыбка, свинка, лошадь, гусь. 
    - Продумайте какие поля у объектов общие, а какие уникальные
    - Добавьте методы в родительский класс и переопределите их в дочерних: есть, пить, издавать звуки, двигаться

## Дополнительные ссылки

1. Object - [docs.oracle.com](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) 
2. Inheritance - [docs.oracle.com](https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html)
