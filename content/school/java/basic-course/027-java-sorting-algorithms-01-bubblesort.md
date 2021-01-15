---
bookCollapseSection: true
weight: 1
title: Пузырьковая сортировка — Bubble Sort. Алгоритмы сортировок.
description: Введение в сортировки. Пузырьковая сортировка. Описание самой простой сортировки.
---

# Алгоритмы сортировок, Bubble Sort — введение в Java 027

{{< figure src="/img/res/java/27/27-01-bubble-sort.png" title="массив требующий сортировки" alt="массив требующий сортировки" >}}

Представьте себе ситуацию, что вы просите свой компьютер отсортировать фотографии по размеру или занимаемому месту, товары на странице магазина по цене и новости на сайте по дате написания.

Все эти данные, массивы информации сортируются. Сейчас мы попробуем написать простейший алгоритм сортировки массива состоящего из чисел.

![](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif)

## Пузырьковая сортировка

В пузырьковой сортировке мы по очереди просматриваем попарно весь массив. Для визуализации можно ещэ раз посмотреть прекрасный танец

{{< youtube lyZQPjUT5B4 >}}

Названа сортировка так потому, что цифры "всплывают" меняясь местами.
 
 {{< figure src="/img/res/java/27/27-02-soap-bubbles.jpg" title="Пузырьковая сортировка или Bubble sort" alt="Пузырьковая сортировка или Bubble sort" >}}

### Bubble Sort и рекурсия

```Java
import java.util.Arrays;

public class BubbleSort {
	static void bubbleSort(int[] arrUnsort) {
		int count = 0;
		for (int i = 0; i < arrUnsort.length - 1; i++)
			if (arrUnsort[i] > arrUnsort[i + 1]) {
				int temp = arrUnsort[i];
				arrUnsort[i] = arrUnsort[i + 1];
				arrUnsort[i + 1] = temp;
				count++;
			}
		if (count > 0) {
			bubbleSort(arrUnsort);
		}
	}

	public static void main(String[] args) {
		int[] myArr = {104, 64, 34, 25, 12, 22, 11, 90};
		bubbleSort(myArr);
		System.out.println(Arrays.toString(myArr));
	}
}
```


### Bubble Sort без рекурсии

```java
public static void bubbleSort(int[] array) {
    boolean unsorted = true;
    int temp;
    while (unsorted) {
        unsorted = false;
        for (int i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                unsorted = true;
            }
        }
    }
}
```

## Пузырьковая сортировка строковых значений по алфавиту

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        String name = "Andrej";
        String[] array = name.split("");
        System.out.println(Arrays.toString(bubbleSort(array)));
    }

    public static String[] bubbleSort(String[] array) {
        int count = 0;
        for (int i = 0; i < array.length - 1; i++) {
            if (array[i + 1].toLowerCase().compareTo(array[i].toLowerCase()) < 0) {
                String tempStr = array[i];
                array[i] = array[i + 1];
                array[i + 1] = tempStr;
                count++;
            }
        }
        if (count > 0) {
            bubbleSort(array);
        }
        return array;
    }
}
```

## Рекурсия

Некоторые алгоритмы можно описать очень просто - выполняй, пока соблюдается условие. Порой вместо цикла уместнее использовать рекурсию.

**Рекурсия** - определение метода через саму себя. 

Рекурсия в алгоритмах сортировки будет использоваться достаточно часто и охотно. Стоит потратить время на укрепление материала. 

1. [Рекурсия, 17-ый урок]({{< relref "/school/java/basic-course/017-java-recursion-intro.md" >}})
2. Домашнее задание и закрепление материала - [рекурсия. Занимательные задачки](https://habr.com/ru/post/275813/)
3. Как работает рекурсия – [объяснение в блок-схемах и видео](https://habr.com/ru/post/337030/)
4. Просто для ознакомления - [рекурсивное программирование](https://medium.com/nuances-of-programming/%D1%80%D0%B5%D0%BA%D1%83%D1%80%D1%81%D0%B8%D0%B2%D0%BD%D0%BE%D0%B5-%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-74c03b764d38)

## Дополнительные материалы к пузырьковой сортировке

1. Пузырьковая сортировка и [все-все-все](https://habr.com/ru/post/204600/)
2. Очень важный материал для самостоятельного изучения - [двоичное дерево поиска](https://ru.wikipedia.org/wiki/%D0%94%D0%B2%D0%BE%D0%B8%D1%87%D0%BD%D0%BE%D0%B5_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE_%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0)
3. [Сортировка пузырьком](https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0_%D0%BF%D1%83%D0%B7%D1%8B%D1%80%D1%8C%D0%BA%D0%BE%D0%BC)
4. https://www.baeldung.com/java-bubble-sort

### Дополнительные материалы для ознакомления и расширения кругозора

1. [Алгоритм сортировки](https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8)
2. [Блочная сортировка](https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%BE%D1%87%D0%BD%D0%B0%D1%8F_%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0)



