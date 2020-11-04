# Двоичное дерево — введение в Java 033

Введение
От выбора заветной пары джинсов из гардероба до выбора следующего фильма для просмотра с партнером, человеческая жизнь наполнена поиском вещей.

В то время как в повседневной жизни люди обычно ищут между несколькими, если не дюжиной вещей. Компьютерам приходится иметь дело с поиском по данным сравнительно больших объемов по их размеру и количеству.

Это требует от компьютера наличия эффективного метода для максимально эффективного поиска внутри своих массивов и коллекций.

Возможность поиска информации в коллекции является одной из основных функциональных точек приложения.

Двоичный поиск
Двоичный поиск (иногда известный как Логарифмический поиск) - это широко распространенный алгоритм для поиска отсортированного массива по позиции заданного элемента.

Он работает по принципу "разделяй и властвуй", сравнивая целевой элемент со средним элементом массива. Если найдено совпадение - его позиция возвращается, в противном случае, если целевой элемент меньше среднего, то он не может находиться справа от среднего элемента.

Поэтому правая половина массива (включая средний элемент) отбрасывается, а поиск продолжается на левой половине массива с использованием того же подхода.

Аналогично, если целевой элемент больше среднего, он не может находиться в месте, предшествующем середине массива. Поэтому левая половина массива отбрасывается, а поиск продолжается в правой половине.

Это повторяется до тех пор, пока не будет найдено совпадение.

Мы можем сделать это предположение просто потому, что знаем, что массив отсортирован заранее. Если бы он не был отсортирован, мы не смогли бы реализовать двоичный поиск.

Вот визуальное представление того, как работает Бинарный Поиск:


```Java
public static int iterativeSearch(int[] arrayToSearch, int element) {
    int lowIndex = 0;
    int highIndex = arrayToSearch.length-1;

    // Holds the position in array for given element
    // Initial negative integer set to be returned if no match was found on array
    int elementPos = -1;

    // If lowIndex less than highIndex, there's still elements in the array
    while (lowIndex <= highIndex) {
        int midIndex = (lowIndex + highIndex) / 2;
        if (element == arrayToSearch[midIndex]) {
            elementPos = midIndex;
            break;
        } else if (element < arrayToSearch[midIndex]) {
            highIndex = midIndex-1;
        } else if (element > arrayToSearch[midIndex]) {
            lowIndex = midIndex+1;
        }
    }
    return elementPos;
}
```

```Java
public static int recursiveSearch(int[] arrayToSearch, int element) {
    return recursiveSearch(arrayToSearch, element, 0, arrayToSearch.length-1);
}

private static int recursiveSearch(int[] arrayToSearch, int element, int lowIndex, int highIndex) {
    // If lowIndex surpasses highIndex, the element has not been found
    if (lowIndex > highIndex) return -1;

    // Default assumption is that the element is not found
    int elementPos = -1;

    int midIndex = (lowIndex + highIndex) / 2;

    if (element == arrayToSearch[midIndex]) {
        elementPos = midIndex;
    } else if (element < arrayToSearch[midIndex]) {
        recursiveSearch(arrayToSearch, element, lowIndex, midIndex-1);
    } else if (element > arrayToSearch[midIndex]) {
        recursiveSearch(arrayToSearch, element, midIndex+1, highIndex);
    }
    return elementPos;
}
```

https://stackabuse.com/binary-search-in-java/