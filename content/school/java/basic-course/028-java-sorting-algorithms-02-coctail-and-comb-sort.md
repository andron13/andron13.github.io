# Сортировка расчёской(Combsort) и сортировка перемешиванием(Cocktail sort) — введение в Java 028

Обе сортировки базируются на пузырьковой сортировке и вносят в неё некоторые улучшения. По этому мы их и рассмотрим вместе. Давайте начнём с коктейльной сортировки. 

## Сортировка перемешиванием(Cocktail sort)

 {{< figure src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Sorting_shaker_sort_anim.gif" title="Cocktail sort" alt="Cocktail sort" >}}

**Cocktail sort** - шейкерная сортировка, двунаправленная, коктейльная, сортировка перемешиванием. 

В пузырьковой сортировке мы проходимся раз за разом, от начала массива до его конца и проверяем попарные элементы и если надо меняем их местами. 

Если задуматься, то становится очевидным, что нам незачем каждый раз идти до конца, ведь за один проход мы вытаскиваем самый "тяжёлый" элемент наверх. И возможно, что если мы после каждого прохода будем уменьшать диапазон, то сэкономим компьютерное время. 

Если задуматься глубже, то мы может проходить по массиву не только от начала до конца, но и из конца в начало. И если в обычном проходе мы вытаскивали тяжелые элементы, то на обратном пути мы можем подбирать самый лёгкий элемент и снова уменьшать диапазон сверяемых элементов.

Самое позднее, когда динамичные начало и конец нашего массива встретятся - сортировка будет закончена.

Взяв за основу эти два принципа мы и попробуем улучшить нашу пузырьковую сортировку. 

Помимо самой коктейльной сортировки я создам вспомогательные методы для создания и копирования созданного массива. Так как это теоретически помогает отсортировать массив разными способами и сравнить их. 

```Java
import java.util.Arrays;

public class CocktailSort {
    public static void main(String[] args) {
        int[] array = createArray(10);
        int[] newArray = myNewCopyArray(array);
        System.out.println("Оригинал массива " + Arrays.toString(array));
        System.out.println("Копия массива " + Arrays.toString(newArray));
        System.out.println("Коктейльная сортировка " + Arrays.toString(cocktailSort(newArray)));
    }

    private static int[] cocktailSort(int[] array) {
        int start = 0;
        int end = array.length - 1;
        while (start <= end) {
            boolean swapped = false;
            for (int j = start; j < end; j++) {
                if (array[j] > array[j + 1]) {
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                    swapped = true;
                }
            }
            end--;
            for (int k = end; k > start; k--) {
                if (array[k] < array[k - 1]) {
                    int temp = array[k - 1];
                    array[k - 1] = array[k];
                    array[k] = temp;
                    swapped = true;
                }
            }
            start++;
            if (!swapped) {
                break;
            }
        }
        return array;
    }

    private static int[] myNewCopyArray(int[] array) {
        int[] copy = new int[array.length];
        for (int i = 0; i < array.length; i++) {
            copy[i] = array[i];
        }
        return copy;
    }
    
    private static int[] createArray(int length) {
        int[] myArray = new int[length];
        for (int i = 0; i < length; i++) {
            myArray[i] = (int) (Math.random() * 100);
        }
        return myArray;
    }
}
```

Прошу заметить, что принципиально только 4 первые строчки метода cocktailSort чем то могут привлечь начинающего программиста. Создание переменной **start**, и **end**, объявление массива **while**, которые следит за обеими переменными и дополнительная проверка на "отсортированность" - **swapped**. Всё остальное мы как встречали в методе bubbleSort.

## Сортировка расчёской (Combsort)

 {{< figure src="https://upload.wikimedia.org/wikipedia/commons/4/46/Comb_sort_demo.gif" title="Сортировка расчёской" alt="Сортировка расчёской" >}}

В сортировке расчёской ставится под сомнение эффективность шага равного единице. На эту тему написано несколько диссертаций суть которых сводится к тому, что динамичным шагом устраняются черепахи. Черепахами в сортировке называют неудачно расположенные элементы, которые по закону подлости оказались не в том месте. В нашем случае это тяжёлые элементы в самом начале списка.

В сортировке расчёской, которая вычёсывает черепах мы начинаем с шага равной длине, а потом каждый раз уменьшаем его деля на константу. Константа равна **1.24733095**. 

Пример:

```Java
import java.util.Arrays;

public class CombSort {
    public static void main(String[] args) {
        int[] array = createArray(30);
        System.out.println(Arrays.toString(array));
        System.out.println(Arrays.toString(comb(array)));
    }

    public static int[] comb(int[] array) {
        final double stepConstant = 1.24733095;
        int step = array.length;
        while (step > 1) {
            step = (int) (step / stepConstant);
            System.out.println(step);
            for (int i = 0; step + i < array.length; i++) {
                if (array[i] > array[i + step]) {
                    swap(array, i, i + step);
                }
            }
        }
        return array;
    }

    public static void swap(int[] array, int x, int y) {
        int temp = array[x];
        array[x] = array[y];
        array[y] = temp;
    }

    private static int[] createArray(int length) {
        int[] myArray = new int[length];
        for (int i = 0; i < length; i++) {
            myArray[i] = (int) (Math.random() * 100);
        }
        return myArray;
    }
}
```

Прошу заметить, что переменные можно поменять не только как я показал в - [24-м уроке]({{< relref "/school/java/basic-course/024-java-swap-two-variables.md" >}}), но и написав свой собственный метод и передав ему массив и два индекса для обмена.

{{< youtube uXO5c__9uWk >}}

## Дополнительные ссылки

- О сортировках (пузырьковой, быстрой, расческой) - https://habr.com/ru/post/357640/
- Описание алгоритмов сортировки и сравнение их производительности - https://habr.com/ru/post/335920/
