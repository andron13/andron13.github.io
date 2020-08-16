# Exception — введение в Java 034

Предположим, что пишем программу для кофеавтомата.

При выборе капучино, наш автомат собирает напиток из воды, кофе, молока. Мы же ему написали:

1. Возьми одну порцию воды
2. Возьми одну порцию кофе
3. Возьми порцию молока
4. Сделай по рецепту кофе.

Если одного из ингридиентов не будет, то автомат не сможет сделать кофе и возможно зависнет в ожидании ингредиентов или поломается и техник должен будет перезапускать его заново.

Подобные непонятные ситуации возникают при выполнении недопустимых действий, как деление на ноль; при запросе данных, которых больше нет, например сайт, который был указан для отправки сообщений временно или вообще больше не работает.

Ситуации могут быть ожидаемы(всегда при работе с записью на диск, а вдруг у пользователя нет прав?) или из опыта работы прошлых лет (вода в кофейном автомате иногда заканчивается).

Суть в том, что ошибки надо отловить, а программу довести до конца. Ведь если воды в кофейном автомате на вокзале нет, то деньги надо вернуть, отослать сигнал бедствия офис-менеджеру или технику по емайлу и выключить автомат.

Давайте посмотрим на примере.

```Java
	public static void main(String[] args){
  		int[] array = new int[5];
		int element = array[5];
	}
```

При запуске этого метода мы получим ошибку:

```Java
Exception in thread "main" java.lang.ArrayIndexOutOfBoundsException: 5
	at TestTryCatch.main(TestTryCatch.java:9)
```

В ошибке говорится, что у нас **ArrayIndexOutOfBoundsException**, что логично, ведь на пятом месте в массиве будет шестой элемент, а у нас массив всего из пяти элементов. И нам советуется попробовать трай кэтч **TestTryCatch**. Давайте попробуем:

{{< figure src="/img/res/java/34/try-catch.jpg" title="" alt="" >}}

```Java
public class TestTryCatch {
	public static void main(String[] args){
/*		int[] array = new int[5];
		int element = array[5];*/
		testArr();
	}
	static void testArr(){
		// инициализация массива с пятью элементами.
		int[] array = new int[5];
		try {
			int element = array[5];
			// это условие никогда не будет выполнено
			// потому что у нас в этом месте ошибка
			System.out.println("Я НИКОГДА НЕ УВИЖУ ТЕРМИНАЛ");
		} catch (ArrayIndexOutOfBoundsException ex) {
			System.out.println("Мы поймали ошибку");
		}
		// выполнение оставшейся части программы
		System.out.println("Область видимости программы вне блока try catch");
	}
}
```

Прошу заметить, что оператор **catch** знал какая ошибка может возникнуть и словил именно её - попытку взять несуществующий элемент. Если у нас будет другая ошибка, то мы её не словим. Если мы добавим в блок try строчку **int a = 5/0;**, то наша программа завершится новым Exception.

```
Exception in thread "main" java.lang.ArithmeticException: / by zero
	at TestTryCatch.testArr(TestTryCatch.java:16)
	at TestTryCatch.main(TestTryCatch.java:10)
```

В такой ситуации мы можем добавить **finally**

```Java
public class TestTryCatch {
	public static void main(String[] args) {
/*		int[] array = new int[5];
		int element = array[5];*/
		testArr();
	}

	static void testArr() {
		// инициализация массива с пятью элементами.
		int[] array = new int[5];
		try {
			int a = 5 / 0;
			int element = array[5];
			// это условие никогда не будет выполнено
			// потому что у нас в этом месте ошибка
			System.out.println("Я НИКОГДА НЕ УВИЖУ ТЕРМИНАЛ");
		} catch (ArrayIndexOutOfBoundsException ex) {
			System.out.println("Мы поймали ошибку");
		} finally {
			System.out.println("Выполнение финального блока: шеф всё плохо, посмотри код");
		}
		// выполнение оставшейся части программы
		System.out.println("Область видимости программы вне блока try catch");
	}
}
```

## Домашнее задание

Есть номера домов в текстовом формате.
Используя **Integer.parseInt** попытаться спарсить различные строки. Возможные ошибки отловить и вывести на экран полезную для оператора информацию.

Подсказка:

```Java
String str = "123";
int num = Integer.parseInt(str);
```

Проверьте возможно ли оператор catch использовать несколько раз:

```
try {
  //code
} catch (ExceptionType1 e1) { 
  // catch block
} catch (ExceptionType1 e2) {
 // catch block
} finally {
  // finally block always executes
}
```

## Дополнительные материалы

https://docs.oracle.com/javase/tutorial/essential/exceptions/try.html
