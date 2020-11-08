# Naming a Package и массивы объектов 

>__Практическая реализация пройденного материала__

Огромное количество теоретического материала с теоретическими примерами плохо усваиваемы.

Давайте попробуем это исправить.

Я создам новый проект:

```
project
.
+-- src
|   +-- de
|       +-- andron13
|           +-- application
|               +-- LibraryApp.java
|           +-- dao
|               +-- Library.java
|           +-- data
|               +-- Book.java 
+-- .gitignore
+-- readme.md
```

В файл readme.md обычно пишут о чём проект, как его запустить и кто его делал. Подобие минимальной документации. Пример такого ридми можно посмотреть например у проекта [Hugo/readme.md](https://github.com/gohugoio/hugo/blob/master/README.md).

Если вы пользуетесь гитом, то хорошим стилем является исключать из репозитория темпоральные файлы. В файл .gitignore добавляют исключения из репозитория. У Hugo есть такой файл - [Hugo/.gitignore](https://github.com/gohugoio/hugo/blob/master/.gitignore). 

В папке src я использовал в названии своё собственное доменное имя. Это конвенция, которую рекомендует использовать Java - [Naming a Package](https://docs.oracle.com/javase/tutorial/java/package/namingpkgs.html). Согласно этой конвенции моя вебстраница andron13.de становится в названии package как **de.andron13**. Точка значит переход к дочерней папке. 

Внутри я создал папку **data**, где создам мой класс для работы. В данном случае **Book**.
В папке **application** моя программа будет запускаться. Это будет точка входа в мою программу. 
Папка **dao** расшифровывается как Data Access Object. Data Access Object используется в одном из когда-то очень популярном в Java шаблонов(дизайнов) проектирования приложения. Наш пример с этим паттерном имеет очень посредственную связь. Но как-то думать о разделение разных частей кода надо. и почему бы не разделить так? Как бы то ни было именно в папке **dao** мы сегодня и будем делать всё самое интересное. 

{{< figure src="/img/res/java-oop/006/books.jpg" alt="различные типы наследования в Java" >}} 

Начинаем реализацию с класса Book в папке data:

```Java
public class Book {
    private String title;
    private String author;
    private int dateOfIssue;
    private int pages;

    public Book (String title, String author, int pages, int dateOfIssue){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.dateOfIssue = dateOfIssue;
    }

    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public int getPages() {
        return pages;
    }

    public int getDateOfIssue() {
        return dateOfIssue;
    }

    public void setTitle(String title) {
        this.title = title;
    }


    public void setAuthor(String author) {
        this.author = author;
    }

    public void setPages(int pages) {
        this.pages = pages;
    }

    public void setDateOfIssue(int dateOfIssue) {
        this.dateOfIssue = dateOfIssue;
    }

    @Override
    public String toString() {
        return "Book: " + title +
                ",  " + author +
                ", " + pages +
                ", " + dateOfIssue;
    }
}
```

Делаем все поля закрытыми, один конструктор, гетеры, сетеры и переопределяем toString. Вроде пока больше ничего не надо. 

В application пишем:

```Java
public class LibraryApp {
    public static void main(String[] args) {
        Book book1 = new Book("Harry Potter", "Joan Rollings", 435, 2010);
        Book book2 = new Book("Winnie the Pooh", "Alex Milan", 256, 1957);
        Book book3 = new Book("Sherlock Holmes", "Artur Conan Doyle", 388, 1892);
        Book book4 = new Book("Little prince", "Antoine de Saint-Exupery", 200, 1943);
    }
} 
```

Книги создаются и дошло время до создания библиотеки. Библиотека будет состоять из массивов книг:

```Java
public class Library {
    private Book[] books;
}
```

Для создания массива нам надо знать как минимум размер массива. Потому конструктор будет принимать размер

```Java
    public Library(int capacity) {
        books = new Book[capacity];
    }
```

Наша библиотека может заполнятся по мере добавления новых книжек и хотелось бы знать количество уже добавленных. Размер массива не равен количеству добавленных книг. Если мы спроектируем наше приложение так, что бы книги добавлялись по порядку, то мы сможем работать с индексом последней книги. Индекс последней добавленной книги можно назвать size. И наш класс выглядит теперь вот так:

```Java
public class Library {
    private Book[] books;
    private int size;

    public Library(int capacity) {
        books = new Book[capacity];
        size = 0;
    }

    public int getSize() {
        return size;
    }
}
```

У нас есть массив книг, пока пустой и у нас есть начальное количество книг - 0. Надо реализовать метод добавления книг. Прежде всего мы должны задуматься какой тип данных возвращает нам метод добавления книги в массив. 

Есть мнение, что человеку, который будет ставить книгу на полку не важен ни номер полки, ни номер книги. Ему надо знать только одно смогла книга встать на полку или нет. Хватило ли ей места. Соответственно метод добавления будет возвращать логическое значение. 

```Java
    public boolean addBook(Book book) {
        if (size < books.length) {
            books[size] = book;
            size++;
            return true;
        }
        return false;
    }
```

Таким же образом мы можем удалить книгу из массива:

```Java
    public boolean deleteBook(Book book) {
        for (int i = 0; i < size; i++) {
            if (books[i].equals(book)) {
                books[i] = books[size - 1];
                size--;
                return true;
            }
        }
        return false;
    }
```

Метод отображения массива:

```Java
   public void display() {
        for (int i = 0; i < size; i++) {
            System.out.println(books[i]);
        }
    }
```

Метод поиска нужной книги по автору:

```Java
    public void searchBookByAuthor(String author) {
        boolean flag = false;
        for (int i = 0; i < size; i++) {
            if (books[i].getAuthor().equalsIgnoreCase(author)) {
                System.out.println(books[i]);
                flag = true;
            }

        }
        if (!flag) {
            System.out.println("book is not found");
        }
    }
```

Давайте в точке входа программы создадим библиотеку и поиграем с нашими данными. 

```Java
        Library myLib = new Library(100);

        System.out.println(myLib.getSize());
        myLib.addBook(book1);
        myLib.addBook(book2);
        myLib.addBook(book3);
        myLib.addBook(book4);
        System.out.println(myLib.getSize());
        myLib.addBook(new Book("War and Peace", "Lev Tolstoy", 678, 1886));

        myLib.deleteBook(book3);
        myLib.display();

        myLib.searchBookByAuthor("Alex Milan");
        myLib.searchBookByAuthor("Gogol");
```

## Дополнительные ссылки

1. [Naming a Package](https://docs.oracle.com/javase/tutorial/java/package/namingpkgs.html)
2. [Что такое шаблоны проектирования?](https://habr.com/ru/post/307942/)
3. [Dao](https://ru.wikipedia.org/wiki/Data_Access_Object)
4. [Шпаргалка по шаблонам проектирования](https://habr.com/ru/post/210288/)
5. [Design Patterns and Frameworks](https://docs.oracle.com/cd/E19929-01/816-4337/03_design_issues.html#pgfId-9178)

