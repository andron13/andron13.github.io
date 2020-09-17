# Java ArrayList - основы

При использовании массивов можно было заметить, что у них есть один минус - они конечны. Мы не можем расширить массив. При незапланированном увеличении элементов массива мы вынуждены создавать новый массив, так как массив не меняет своей длины.

Java предоставляет ArrayList, который решает эту и часть других ограничений обычного массива. Не надо считать эти ограничения массива его недостатками. Это просто особенности, которые надо учитывать.

На примере ниже можно посмотреть различия между способами хранения информации.

<table>
  <caption>Сравнение массива и списка </caption>
<tbody>
  <tr>
    <th>Array</th>
    <th>ArrayList</th>
  </tr>
  <tr>
<td colspan="2">Создание контейнера элементов</td>
  </tr>
  <tr>
    <td><code>String[] array = new String[10];</code></td>
    <td><code>ArrayList&lt;String&gt; list = new ArrayList&lt;String&gt;();</code></td>
  </tr>
 <tr>
<td colspan="2">
Получение количества элементов
</td>
  </tr>
  <tr>
    <td><code>int n = array.length;</code></td>
    <td><code>int n = list.size();
</code></td>
  </tr>
 <tr>
<td colspan="2"> Взятие элемента из массива/коллекции
</td>
  </tr>
  <tr>
    <td><code>String s = array[3];</code></td>
    <td><code>String s = list.get(3);
</code></td>
  </tr>
  <tr>
<td colspan="2"> Запись элемента в массив
</td>
  </tr>
  <tr>
    <td><code>array[3] = s;</code></td>
    <td><code>list.set(3, s);</code></td>
  </tr>
  </tbody>
</table>


## Создание ArrayList

```
List<String> list = Arrays.asList(array);          
System.out.println(list);
ArrayList<String> myList = new ArrayList<>();
ArrayList<String> yourList = new ArrayList<>(myList);
ArrayList<String> berliners = new ArrayList<>(3_500_000); // есть смысл указать сразу
```

## Работа с элементами в ArrayList

```
list.add(element); // добавление в конец 
list.add(7, element); // добавление на определённую позицию
list.add(0, element); // позиция равна нулю, начало
list.remove(3);  // удаление элемента на позиции три
```

## Заполнение ArrayList и получение информации из ArrayList.

```
import java.util.ArrayList;
import java.util.Random;

public class HalloArrayList {
    public static void main(String[] args) {
        addToArrayList();
    }

    private static String generateString(int n) {
        Random random = new Random();
        String result = "";
        for (int i = 0; i < n; i++) {
            char c = (char) (random.nextInt(25) + 65);
            result = result + c;
        }
        return result;
    }

    private static void addToArrayList() {
        ArrayList<String> list = new ArrayList<String>();
        for (int i = 0; i < 10; i++) {
            String s = generateString(10);
            list.add(s);
        }
        for (String element : list) {
            System.out.println("Вариант 1 " + element);
        }
        for (int i = 0; i < list.size(); i++) {
            System.out.println("вариант 2 " + list.get(i).toLowerCase());
        }
        System.out.println("вариант 3 " + list.toString());
    }
}
```

## Методы ArrayList

```
add(E e)
add(int index, E element)
addAll(Collection <? extends E> collection)
addAll(int index, Collection <? extends E> collection)
clear()
clone()

ArrayList<String> copyOfSecondList = (ArrayList<String>) secondList.clone();
secondList.clear();
System.out.println(copyOfSecondList);

contains(Object o)
ensureCapacity(int minCapacity)
get(int index)
isEmpty()
remove(int index)
remove(Object o)
removeAll(Collection<?> c)
set(int index, E element)
size()

toArray()

ArrayList<String> countryListArray = new ArrayList<String>();
listArray.add("Germany");
listArray.add("Holland");
listArray.add("Sweden");
String[] strArray = new String[3];
String[] a = listArray.toArray(strArray);
```

## ArrayList хранит объекты

### Примитивные типы данных и их обёртки(Wrapper classes)

|Примитивный тип | Класс обёртка |
|:----| :----|
|byte| Byte|
|short|	Short|
|char|	Character|
|int|	Integer|
|long|	Long|
|float	|Float|
|double	|Double|
| boolean | Boolean|

Wrapper classes числовых типов (Byte, Short, Integer, Long, Float, Double) наследуются от класса Number, который содержит код, общий для всех классов-оберток числовых типов. Все классы-обертки реализуют интерфейс Comparable.

## Дополнительные материалы

1. http://java-online.ru/java-lang-wrapper.xhtml
2. https://www.baeldung.com/java-arraylist
3. http://developer.alexanderklimov.ru/android/java/arraylist.php
4. https://docs.oracle.com/javase/tutorial/collections/interfaces/list.html
5. https://docs.oracle.com/javase/8/docs/api/java/lang/Number.html

## Домашнее задание

1. Добавить наши книги из библиотек предыдущих уроков в ArrayList.
2. Создать класс и лист пользователей библиотеки. 
