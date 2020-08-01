# Рекурсивные методы в Java — введение в Java 017

{{< figure src="/img/res/java/17/17-recursion-vlc.png" title="рекурсия экрана" alt="рекурсия экрана" >}}

Многие из нас пытались сфотографировать себя в зеркале так, что бы в зеркале было снова изображение фотографирующего в зеркале и так до бесконечности. Это и есть частный случай рекурсии. В программировании это - метод, вызывающий(повторяющий) сам себя.

## Рекурсия в программировании

Давайте попробуем найти факториал числа

```Java
public class Factorial{
	static int calculateFactorial(int n){
		int result = 1;
		for (int i = 1; i <=n; i ++){
			result = result*i;
		}
		return result;
	}	
 
	public static void main(String[] args){
		System.out.println(calculateFactorial(4)); 
	}
}
```

То же самое можно сделать и рекурсивным способом

```Java
// Вычисление факториала числа
public class Factorial{
	public static void main(String[] args) {
		System.out.println(fact(5));
	}
	static int fact(int digits) {
		if (digits > 1) {
			return digits * fact(digits - 1); // здесь переменная умножается на метод
		} else {
			return 1;
		}
	}
}
```

Ещё раз:

```bash
{
	if (digits <= 1) // Базовый случай
	{
		return 1;
		} else {
		return digits * fact(digits - 1);
		// рекурсивный вызов с аргументом, который стремится к базовoму случаю.
	}
```


### Рекурсия и тернарный оператор вместе

```code
static int fact(int num) {
    return ((num > 1) ? num * fact(num - 1) : 1);
}
```

**Рекурсия в программировании** – это вызов функцией самой себя с другими аргументами. Во избежание бесконечного цикла самозапуска внутри функции должно быть условие выхода **(digits <= 1)**. Рекурсивная функция вызывает себя с аргументами, которые стремятся к базовому случаю **(digits - 1)**.

## Числа Фибоначчи

Решение  задачи обычным способом:

```Java
public class Fibonaci {
	public static void main(String[] args){
		int n0 = 1;
		int n1 = 1;
		int n2;
		System.out.print(n0+" "+n1+" ");
		for(int i = 3; i <= 11; i++){
			n2=n0+n1;
			System.out.print(n2+" ");
			n0=n1;
			n1=n2;
		}
		System.out.println();
	}
}
```

Рекурсивное решение

```bash
static int calculateFibonaci(int n){
     if (n == 0){
        return 0;
    }
    if (n == 1){
        return 1;
    }
    else{
        return calculateFibonaci(n - 1) + calculateFibonaci(n - 2);
    }
}
```

## Дополнительные материалы

1. https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D1%8F
2. https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%B1%D0%BE%D0%BD%D0%B0%D1%87%D1%87%D0%B8
3. https://www.baeldung.com/java-recursion



