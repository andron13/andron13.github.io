# Методы в Java немного подробнее: возвратные и исполняющие-введение в Java 011


## Главный метод класса 

**public static void main(String[] args)**
Каждый раз пишем эту магическую строку что бы запустить нашу программу. **MAIN** - обозначает точку входа в программу. Мы можем один раз написать этот метод в главном классе, например Main:

```Java
public class Main {
    public static void main(String[] args) {
        // просто тестирование
    }
}
```

Следующим методом мы можем написать метод сложения двух целых чисел. Название метода **addition** мы пишем с маленькой буквы.

```
	static void addition (){
        int a = 4;
        int b = 5;
        int c = a + b;
		System.out.println(c);
	}
```

 И тогда мы можем в нашей **точке входа** запустить(вызвать) метод сложения и весь наш класс тогда будет выглядеть вот так:

```Java
 public class Main {
	public static void main(String[] args) {
		addition();
	}
	static void addition() {
		int a = 4;
		int b = 5;
		int c = a + b;
		System.out.println(c);
	}
}
```

## Создание класса

Точно также мы можем создать совсем новый класс для вычисления целых чисел. И назвать его Calculator, и в нём написать наш метод:

```Java
public class Calculator {
	static void addition() {
		int a = 4;
		int b = 5;
		int c = a + b;
		System.out.println(c);
	}
}
```

## Аргументы

Мы можем сделать метод принимающим параметры(атрибуты, аргументы), например так:

```
	static void addition (int a, int b){
		System.out.println(a+b);
    }
```

Тогда запустить этот метод в Main можно, давайте сначала подумаем как, а потом попробуем посмотреть:

```
Calculator.addition(a, b);
//Запускать метод мы можем один или несколько раз
Calculator.addition(4, 7);
Calculator.addition(17, 25);
```

Метод сам по себе у нас может быть нетронутым и только в месте его вызова мы "манипулируем" с аргументами.

## Типы методов

Принципиально в Java два типа методов:

1. Исполняемые (void). Эти методы просто исполняют команды. 
2. Возвратные. Эти методы всегда что-то возвращают.

Пример метода, который возвращает значение int:

```
public static int devide() {
	int a = 0;
	return a;
}
```

Пример метода, который возвращает int и принимает два int аргумента

```
public static int devide(int a, int b) {
	return a / b;
}
```

Пример метода, который принимает String, а возвращает int:

```
public static int vornameAndName(String vorname, String name) {
	int result = vorname.length() + name.length();
	return result;
}
```

Очень важно понимать, что main вход в программу, с этого метода начинаются необходимые действия. Например на условной кассе в магазине в точке мейн запускается процесс подсчитывания стоимости продуктов, и после этого стоимость передаётся в метод вывода чека на печать и ещё раз на экране у кассира. Нет хороших или плохих методов, удобных или неудобных; это просто инструменты и левша может использовать другие инструменты чем правша. "Правильность" особо нигде не прописана.

Ещё один пример. Нам надо поехать в отпуск:

```Java
 public class Main {
	public static void main(String[] args) {
		weGoOnVacation();
	}
	static void weGoOnVacation() {
		// псевдометод, который описывает, что надо сделать что бы поехать в отпуск
		bookFlights();
		bookHotel();
		packUp();
		callTaxi();
		excellentMood();
	}
	static void excellentMood() {
		//каждый из этих методов описывает как добиться поставленной цели. а может вызывать и другие дополнительные методы.
		// например для хорошего настроения нужно отключиться от работы и улететь туда где тепло	
	}
}
```

## Зарезервированные слова

|Нельзя| использовать |в| переменных|
|:----|:----:|:----:|----:|
|abstract| double| int| super|
|boolean| else| interface| switch|
|break| extends| long| synchronized|
|byte| final| native| this|
|case| finally| new| throw|
|catch| float| package| throws|
|char| for| private| transient*|
|class| goto*| protected| try|
|const*| if| public| void|
|continue| implements| return| volatile|
|default| import| short| while|
|do| instanceof| static|

## Модификаторы доступа. Private, protected, default, public

- private;
- default;
- protected;
- public.

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

### Модификатор static в Java 

**Static** показывает, что это метод или переменная класса. На данном этапе большего нам знать пока не надо.

```Java
public class HelloStatic {
	private static int count = 10;

	public static void main(String args[]) {
		System.out.println(count); //compile time error
	}
}
```

## Дополнительные материалы

1. https://www.oreilly.com/library/view/think-java/9781491929551/ch04.html
2. https://docs.oracle.com/javase/tutorial/java/javaOO/returnvalue.html
3. https://www.baeldung.com/java-methods
4. Ещё раз ссылка с конвенцией (договор о правописании и синтаксисе) - https://www.oracle.com/technetwork/articles/javaee/codeconventions-135099.html
5. https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html

## Домашнее задание

1. Давайте попробуем написать методы для вычисления площади и периметра фигур: квадрата, прямоугольника, треугольника, круга. И один раз напишем их исполняющими, а один раз возвратными. В обоих случаях методы должны принимать необходимые данные для вычисления: как радиус, длину сторон или прочее.
2. Давайте напишем генератор паролей. Методу передаётся длина пароля. И метод генерирует пароль используя латиницу, цифры и некоторые спецсимволы(на ваш выбор). Подсказка - использовать только те знания, которые были уже изучены. Существует как минимум два(на самом деле 222) разных подхода к решению этой проблемы. Не бойтесь пробовать.
