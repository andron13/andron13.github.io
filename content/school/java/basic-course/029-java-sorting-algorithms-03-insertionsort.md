# Сортировка вставками - Insertion Sort — введение в Java 029

(В разработке) 

Сортировка вставками - делит условно массив на две части. В левой собирается отсортированная часть, а из правой части берутся элементы и по очереди ставятся на своё место. Пожалуй, это самый близкий метод сортировки к обычному человеческому мышлению. Берём по одному и ставим на своё место. 

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

https://www.youtube.com/watch?time_continue=7&v=ROalU379l3U&feature=emb_logo

https://www.youtube.com/watch?time_continue=10&v=8oJS1BMKE64&feature=emb_logo


```java
public class InsertionSort {
    public static void main(String[] args) {
        System.out.println("тест");
        int[] array = {22, 100, 55, 33, 88, 7};
        System.out.println(Arrays.toString(insertionSortImperative(array)));
    }

    private static int[] insertionSortImperative(int[] input) {
        for (int i = 1; i < input.length; i++) {
            int newElement = input[i]; // временная переменная, которая хранит значение
            int location = i - 1; // цикл начался не с нуля, а с единицы - location предыдущий элемент массива
            while (location >= 0 && input[location] > newElement) { // пока значение от location больше значения элемента проверки
                input[location + 1] = input[location]; // присвоить значению на котором был элемент проверки значение предыдущего
                location = location - 1;  // Декремент  location
            }
            input[location + 1] = newElement;  // значению location+1 передаём значение из памяти
        }
        return input;
    }
}
```

# Дополнительные ссылки

1. https://www.codeflow.site/ru/article/java-insertion-sort
2. https://juja.com.ua/java/algorithms/sorting-optimizing/