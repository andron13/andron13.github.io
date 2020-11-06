# Сортировка вставками - Insertion Sort — введение в Java 029

Сортировка вставками - делит условно массив на две части. В левой собирается отсортированная часть, а из правой части берутся элементы и по очереди ставятся на своё место. Пожалуй, это самый близкий метод сортировки к обычному человеческому мышлению. _Берём по одному и ставим на своё место._

Часто возникает вопрос, как можно узнать, что левая часть отсортирована? Давайте представим, что у нас есть полное собрание сочинений какого-нибудь политика. Или нет, лучше пусть у нас дома будет полная энциклопедия Брокгауза и Ефрона.

{{< figure src="/img/res/java/29/29-efron.jpg" title="энциклопедия Брокгауза и Ефрона" alt="энциклопедия Брокгауза и Ефрона" >}}

86 полутомов. Пронумерованных. Прекрасный пример контейнера с информацией, массива. Одна беда. Представьте себе, что в библиотеке играли дети, и все книги оказались на полу. На полу они лежат в беспорядке и неотсортированные. 

Мы берём первую книгу с пола и нам попадается том 27. Мы ставим эту книгу на книжную полку, и в этот момент массив становится отсортированным. Несмотря на то, что в массиве всего один элемент.

Мы берём следующую книгу и подносим её к уже отсортированной, что бы посмотреть где её ставить справа или слева. И в итоге выставляем все книги по порядку.

Именно так и работает **Insertion Sort**, или сортировка вставками.

Давайте посмотрим сортировку в танце:

{{< youtube ROalU379l3U >}}

Псевдокод:
```code
for j = 2 to A.length do 
    key = A[j]
    i = j-1
    while (i > 0 and A[i] > key) do 
        A[i + 1] = A[i]
        i = i - 1
    end while
    A[i+1] = key
end for
```

И ещё раз более быстрая визуализация в работе. 

{{< youtube 8oJS1BMKE64 >}}

Несмотря на огромное предисловие сам код достаточно компактен и сортировка считается одной из __простых сортировок__.

## Сортировка вставками, java-code:

```java
public class InsertionSort {
    public static void main(String[] args) {
        System.out.println("Сортировка массива");
        int[] array = {22, 100, 55, 33, 88, 7};
        insertionSortImperative(array);
        System.out.println(Arrays.toString(array));
    }

    private static void insertionSortImperative(int[] input) {
        for (int i = 1; i < input.length; i++) {
            // временная переменная, которая хранит значение
            int newElement = input[i]; 
            // цикл начался не с нуля, а с единицы - location предыдущее МЕСТО от элемента массива
            int location = i - 1; 
            System.out.println("i или круг = " + i);
            System.out.println(newElement);
            System.out.println(input[location]);
            System.out.println("**");

            // пока значение от location больше значения элемента проверки
            while (location >= 0 && input[location] > newElement) { 
                System.out.println("Находимся в цикл while при i = " + i);
                System.out.println(newElement);
                System.out.println(input[location]);
                System.out.println("++");
                // присвоить значению на котором был элемент проверки значение предыдущего
                input[location + 1] = input[location]; 
                location = location - 1;  // Декремент  location
            }
            input[location + 1] = newElement;  // значению location+1 передаём значение из памяти
        }
    }
}
```

## Сортировка вставками. Рекурсия, java-code:

```java
public class InsertionSortRecursion {
    public static void main(String[] args) {
        int[] arr = {10, 6, 3, 9, 15, 27};
        insertionSortRecursive(arr);
        System.out.println(Arrays.toString(arr));
    }

    public static void insertionSortRecursive(int[] input) {
        insertionSortRecursive(input, input.length);
    }

    private static void insertionSortRecursive(int[] input, int i) {
        if (i <= 1) {
            return;
        }
        insertionSortRecursive(input, i - 1);
        int key = input[i - 1];
        int j = i - 2;
        while (j >= 0 && input[j] > key) {
            input[j + 1] = input[j];
            j = j - 1;
        }
        input[j + 1] = key;
    }
}
```

Объяснение рекурсии в данной сортировке - https://www.baeldung.com/java-insertion-sort.

## Дополнительные ссылки

1. Очень интересная и полезная статья о сортировке - https://juja.com.ua/java/algorithms/sorting-optimizing/
2. Немного болье, чем просто сортировка вставками  - https://habr.com/ru/post/422085/
3. Сортировки вставками, ещё статья - https://habr.com/ru/post/415935/
4. https://www.codeflow.site/ru/article/java-insertion-sort
5. https://github.com/eugenp/tutorials/tree/master/algorithms-sorting


