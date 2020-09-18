---
bookCollapseSection: true
weight: 2
title: Java-OOP 01 - Первые объекты
description: Введение в объектно-ориентированное программирование на Java. Курс разработан в 2020 году.
type: book 
author: andron13
date: 2020-09-06
linktitle: 01 - Первые объекты
---

# Первые объекты в Java - введение в Java-OOP 001

Введение в объектно-ориентированное программирование(Object-Oriented Programming) продолжает курс  - [Басовый курс Java]({{< relref "/school/java/basic-course" >}}). 

Java является объектно-ориентированным языком. Хотя на сегодня в ООП умеют играть все популярные языки. Это новшество на конец прошлого века, сегодня уже добавлено даже в старые языки, изначально не поддерживающие ООП (например php, javascript).

ООП очень важная тема. И всё что было до этого было просто разминкой перед настоящей Java.

Очевидно, что в работе, например при создании сайтов достаточно элементов, которые повторяются.

К примеру статьи, в статьях присутствует заголовок, дата публикации, возможно дата редактирования, автор, сама статья, фотография в анонсе, может быть в статье выделен отдельно анонс, возможно у статьи есть комментарии и оценка пользователей.

Помимо статей на сайте есть комментарии, у которых есть автор, время публикации, текст комментария.

Статьи и комментарии у нас обычно пишут живые люди. У людей есть ник, имя, фамилия, емайл, время регистрации. Люди пишут статьи и оставляют комментарии, загружают фотографии.

Давайте просто попробуем создать шаблон для наших повторяющихся объектов. И для примера возьмём утку.

```Java
public class Duck {
	String breed;		// порода утки
	int age;			// возраст утки
	String color;		// раскраска утки
	// утка плавает, утка крякает, утка летает, утка ест
	void swims() {
		System.out.println("Duck swims");
	}

	void quacks() {
		System.out.println("Duck quacks");
	}

	void flies() {
		System.out.println("I CAN FLY!!!");
		System.out.println("I fly!");
	}

	void eats() {
		System.out.println("Duck eats");
	}
}
```

Давайте в мейне создадим пару экземпляров нашего класса.

```Java
	public static void main(String[] args) {

		Duck greyDuck = new Duck();
		greyDuck.age = 4;
		greyDuck.breed = "anasPlatyrhynchos";
		greyDuck.color = "grey";
		greyDuck.flies();
	}
```

```Java
I CAN FLY!!!
I fly!
```

Я создал экземпляр нового СЛОЖНОГО типа данных(он пишется с ЗАГЛАВНОЙ буквы). Тип данных Duck, переменная greyDuck и завершил инициализацию магической формулой с уже знакомым нам **new** оператором. Многие ругают Java именно за эту длинную инициализацию объектов. Нам просто надо запомнить.

И так мы создали экземпляр объекта УТКА. после чего инициализировали те параметры утки, которые нам были известны и нужны. Можно было и не все. И вызвали метод утки "летит". И утка полетела.

Мы создали объекты, инициализировали то, что мы знали о них. И запустили методы, которые нам были нужны. Результат можно посмотреть в сообщениях терминала.

Утки и люди вполне могут быть в одной программе, например в игре. Или в обучении. Есть метод [Rubber duck debugging](https://en.wikipedia.org/wiki/Rubber_duck_debuggin)
  или по-русски [метод утёнка](https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%82%D0%BE%D0%B4_%D1%83%D1%82%D1%91%D0%BD%D0%BA%D0%B0).

Суть метода в том, что бы рассказывать утёнку о своих методах решения задачи.
 
А пока создадим новый шаблон для наших объектов Car:

```Java
public class Car {
	String modelName;
	String motorID;
	String color;
	int tiles;
	int doors;
	int mileage;

	void move(int km) {
		System.out.println("Машина проехала " + km);
		mileage += km;
	}
}

class CarTest {
	public static void main(String[] args) {
		Car myNewCar = new Car();
		myNewCar.move(100);
		System.out.println(myNewCar.mileage);
		myNewCar.move(300);
		System.out.println(myNewCar.mileage);
	}
}
```

Класс это основа языка Java. И именно класс определяет объект. Класс лежит в основе ООП-принципа. 

Всё что вы делаете в Java  должно быть написано в Java. До сих пор мы не использовали всю силу классов. Мы просто запускали в классе метод мейн и его примитивные инструкции. 

### Creating New Class Instances

Важно понимать, что класс определяет новый тип данных. Класс это шаблон объекта, а объект это "instance" класса. Instance или экземпляр класса являются синонимами слова объект. 

"Мы создаём объект класса Car. Мы создаём экземпляр класса Car"

```Java
class ИмяКласса {
    тип названиеПеременной_1;
    тип названиеПеременной_2;
    тип названиеПеременной_NN;
    тип имяМетода_1(список парамтров){
    // Тело метода
    }
    тип имяМетода_2(список парамтров){
    // Тело метода
    }
    тип имяМетода_NN(список парамтров){
    // Тело метода
    }
}
```

### Person и BMI в ООП

```Java

public class Main {
    public static void main(String[] args) {
        System.out.println(bmiIndex(100, 175));
        int[] array = {5, 3, 8, 9, 1, 10, 34, 12};

        Person person1 = new Person();
        person1.height = 175;
        person1.weight = 100;
        System.out.println(bmiIndex(person1.weight, person1.height));
        person1.bmiIndex();
        double test = person1.bmi;
        System.out.println(test);
    }

    public static double bmiIndex(double m, double h) {
        h = h / 100;
        return m / (h * h);
    }
}

public class Person {
    String name;
    double weight;
    double height;
    double bmi;

    public Person(){

    }

    public Person(double w, double h){
        bmiIndex();
    }

    public void bmiIndex() {
        double m, h;
        m = weight;
        h = height;
        h = h / 100;
        bmi = m / (h * h);
    }
}
```

## Повторение

Модификаторы доступа играют важную роль в программировании. С помощью модификаторов мы делаем часть методов, объектов, переменных "невидимыми" для других классов, защищая их от изменения извне. Существует 4 типа модификаторов доступа:
- private;
- default;
- protected;
- public.

### Модификаторы доступа. Private, protected, default, public

**Private** — наиболее строгий модификатор доступа. Он ограничивает видимость данных и методов пределами одного класса.  
**Default** — package visible.  
**Protected** — package visible.  
Protected data member and method are only accessible by the classes of the same package and the subclasses present in any package. You can also say
 that the protected access modifier is similar to default access modifier with one exception that it has visibility in sub classes.   
**Public** — Кто угодно может этим пользоваться.  

|_| Class |Package| Subclass(same pkg)|Subclass(diff pkg)|World|
|:----:| :----: |:----:|:----: |:----:|:----:|
|public|+ |+|+|+|+|
|protected| +|+|+|+||
|no modifier| +|+|+|||
|private| +|||||

## Дополнительная литература

1. https://docs.oracle.com/javase/tutorial/java/javaOO/objectcreation.html
2. https://www.baeldung.com/java-classes-objects

## Домашнее задание

1. Создать класс лебедь - **Swan**. И несколько его экземпляров. Чем различаются ваши лебеди? Какие у них атрибуты? Какие методы?
2. Создать класс книги: название, isbn, автор, год издания, количество страниц, переплёт, жанр, рейтинг, цена(, возможно параметры, которые придумаете сами). Создать 5 экземпляров этого класса: азбука, война и мир, книга о вкусной и полезной пище, и два своих примера. Использовать в названиях переменных осмысленный английский язык.
