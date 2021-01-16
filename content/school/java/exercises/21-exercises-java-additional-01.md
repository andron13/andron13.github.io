# Задачи от Евгения - факультатив фирмы ТелРан

1. Given a String with different braces, check if the order of braces is correct. Every next brace can be an opening brace or should close a previous opening brace.
2. Given a long, check if it is a palindrom
3. Given a string with capital letters, small letters and symbols, return a string with capital letters turned into small, ans small into capital. Symbols remain unchanged.
4. Есть List<Integer> отсортированных чисел. Есть еще одно число, символизирующее длину некоего отрезка.  
   Найти максимальное количество точек на этой прямой, которые можно покрыть этим отрезком.
```code
int maxCoveredPoint(List<Imteger> numbers, int cut)

List<Integer>{10,15,20,31,40,55,58,64}, cut=9 -> maxCoveredPoint = 3    (55,58,64)
```
5. Посчитать максимальную длину "прыгающих" элементов в контейнере.
```code
[5 , 8, 5 , 8, 5] ->5
[5 , 8, 3] -> 2
```