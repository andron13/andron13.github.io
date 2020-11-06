---
bookCollapseSection: true
weight: 2
title: Java-OOP 03 - Конструктор в Java и ключевое слово this - введение в Java-OOP 
description: Создание объектов в Java часто сравнивает с обычной стройкой в жизни. И английский **constructor** и русский **конструктор** связаны со строительством напрямую. 
type: book 
author: andron13
date: 2020-11-06
linktitle: 03 - Перегрузка методов в Java Overloading
---
# Конструктор в Java и ключевое слово this- введение в Java-OOP 003

{{< figure src="/img/res/java-oop/002/constructor-java.jpg" title="Стройка" alt="Стройка" >}}

Создание объектов в Java часто сравнивает с обычной стройкой в жизни. И английский **constructor** и русский **конструктор** связаны со строительством напрямую. 

Принципиально, конструктор - это просто метод. Просто метод который создаёт объекты. В связи с тем, что это очень важный метод и является краеугольным камнем всей парадигмы ООП, то у этого метода есть привилегия.

Конструкторы (методы по которым создаются объекты) - пишутся в java всегда с большой буквы.
 
Это помогает понять, что сейчас создаётся объект. 
 
В некоторых ситуациях нам достаточно создать пустой объект, без всяких полей, в других нам нужны объекты с параметрами. 
 
Например, мы не можем общаться с пользователем сайта, не зная его емайла и ника. Если мы говорим о базе данных школы, то мы не можем "создать ученика" без имени, фамилии, года рождения и возможно без документа(номера документа) подтверждающего личность это тоже не всегда возможно. 
 
 Ситуации и в жизни и в коде могут встретиться разные и потому мы можем встретить в ином классе целое семейство конструктов, а иногда вообще ни одного. Именно с такого примера мы и начнём.
 
## Объект есть, конструктора нет
 
На нашем (условном) сайте есть статьи и мы создаём **Article** класс, который поможет нам с ними работать. 
 
```Java
public class Article {

}
class Test {
    public static void main(String[] args) {
        Article art = new Article();
    }
}
```

Мы можем создать тестовый класс в том же файле. Мы должны знать, что модификатор доступа Public может применятся только к тому классу, который назван так же как и файл. Дополнительный класс в нашем файле скорее вспомогательный. Этим правилом мы и воспользовались для простоты. 

При создании объекта мы использовали пустой конструктор, конструктор без параметров. Но мы его не создавали в классе **Article**. Так откуда же он взялся?

Java создаёт один стандартный пустой конструктор сразу по умолчанию в каждом классе. Нам не обязательно прописывать пустой конструктор. Но как только мы прописываем хоть одно правило создания экземпляра объекта, то мы переписываем стандартное поведение Java. И если нам всё ещё нужен пустой конструктор, то мы должны его прописать самостоятельно. 

**Конструктор** - это специальный метод, не имеющий возвратного значения. Этот метод называется так же как и класс экземпляр которого он должен создать и пишется с большой буквы. 

В конструкторе мы можем указать начальные или стандартные значения будущих объектов.

```Java
public class Article {
    String title;
    String announce;
    String fullText;

    public Article() {
        title = "unknown";
        announce = "unknown";
        fullText = "unknown";
    }
}
```

## Для чего нужно создавать много разных конструкторов?

Много конструкторов обычно и не нужно. В рамках обучения можно создать несколько разных вариантов, в обычной жизни делают ровно столько, сколько используется другими частями программы. Чаще всего ровно один. 

```Java
public class Book {
    private String title;
    private String author;
    private String isbn;
    private int page;
    private int year;

    public Book() {
    }

    public Book(String bookTitle, String bookAuthor, int bookYear) {
        title = bookTitle;
        author = bookAuthor;
        year = bookYear;
    }

    public Book(String bookTitle, String bookAuthor, String bookIsbn, int bookPage) {
        title = bookTitle;
        author = bookAuthor;
        isbn = bookIsbn;
        page = bookPage;
    }
}
```

## this 

This это ссылка на самого себя, на класс, по которому создаются объекты.  

Простейшее применение this уместно в классе выше. Что бы не придумывать новые переменные для конструкторов, отличающиеся от переменных класса, но созвучные им. Мы используем this и как бы говорим: " ЭТА переменная из ПОЛЯ КЛАССА будет равна тому значению, которое мы получим из переменной в сигнатуре конструктора."

```Java
    public Book(String title, String author, int year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    public Book(String title, String author, String isbn, int page) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.page = page;
    }
```

Другой пример использования this указан в официальной документации и я просто попытаюсь прочитать его для вам. 

```Java
public class Rectangle {
    private int x, y;
    private int width, height;
        
    public Rectangle() {
        this(0, 0, 1, 1);
    }
    public Rectangle(int width, int height) {
        this(0, 0, width, height);
    }
    public Rectangle(int x, int y, int width, int height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    ...
}
```

Строчка "this(0, 0, 1, 1);" указывает на конструктор в этом же методе. И такой конструктор, которые принимает 4 параметра есть - "public Rectangle(int x, int y, int width, int height)". Вот этот this и вызывает СОБСТВЕННЫЙ конструктор. 

## Дополнительные ссылки

1. Providing Constructors for Your Classes - [официальная документация](https://docs.oracle.com/javase/tutorial/java/javaOO/constructors.html)
2. A Guide to Constructors in Java - [www.baeldung.com/java-constructors](https://www.baeldung.com/java-constructors)
3. Guide to the this Java Keyword [this от baeldung](https://www.baeldung.com/java-this) 
4. Using the this Keyword - [от Oracle](https://docs.oracle.com/javase/tutorial/java/javaOO/thiskey.html) 

## Домашнее задание

1. Сколько различных конструкторов можно создать, если у нас девять различных полей класса?
Допустим int, double, String, char, long, float, byte, short, boolean. 
