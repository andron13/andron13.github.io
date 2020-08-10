# Задачи для закрепления цикла for, введение — 05

Задачи на закрепление основ программирования.
Требуется знание простых типов данных, String, switch, if-else, for

## Закрепление изученного

1. Существует такая традиция: при приготовлении пельменей в один из них кладут монетку на счастье.  Считается, что тому, кому попадется пельмень с монеткой, улыбнется удача. 
   - Представим, что у нас есть кастрюля, в которой лежит 10
 пельменей. 
   - Один из них счастливый —  а именно пятый пельмень. 
   - Давайте напишем программу, которая ищет счастливый пельмень. 
   - Программа перебирает пельмени в кастрюле по одному, 
   - и когда доходит до пятого пельменя —  напишет "Вот счастливый пельмень!" и выходит из цикла.
2. Вывести на экран все числа от 1 до 100, которые делятся на 3 без остатка.
3. Необходимо, чтоб программа выводила на экран вот такую последовательность:
    ```
    myLine(100) ->
    7 14 21 28 35 42 49 56 63 70 77 84 91 98
    ```
4. Необходимо вывести на консоль такую последовательность чисел:
    ```
    mySecondLine(1000) ->
    1 2 4 8 16 32 64 128 256 512
    ```
5. Вывести каждую букву американского алфавита от A-Z по 4 буквы в строке.
6. Выведите на экран первые 11 членов последовательности Фибоначчи.    
   - первый и второй члены последовательности равны единицам
   - а каждый следующий — сумме двух предыдущих
   - То есть числа Фибоначчи - это 1  1  2  3  5  8  13  21  34  55  89  и т.д.  
7. Дано целое трехзначное число. Написать метод, который возвращает число, записанное в обратном порядке, например: 
    ```
    123 -> 321
    768 -> 867
    ```
8. Дано целое трехзначное число. Написать метод, который возвращает сумму разрядов этого числа, например:
    ```
    123 -> 6  (1+2+3)
    768 -> 21 (7+6+8)
    ```
9. Найдите в заданном диапазоне хотя бы одно натуральное число, которое делится на 11, а при делении на 2, 3, 4, ..., 10 дает в остатке 1.
    ```
    findDigits(99999, 11) -> 25201, 52921, 80641
    ```
10. Дано целое трехзначное число. Написать метод, который определит четность/ нечетность разрядов этого числа, например: 
    ```
    123 -> 1 – нечет. 2- чет. 3-нечет.
    768 ->  1 – нечет. 2- чет. 3-чет.
    ```
11. реализовать метод, который выводит на экран заданную строку N раз.
    ```
    printLineNtimes(“hello”,3) -> 
    hello
    hello
    hello 
    ```
12. Реализовать метод “ Обратный отсчёт ” который выводит на экран цифры от n до 1, затем выводит строку „start“.
    ```
    countdown(5)  -> 
    5
    4
    3
    2
    1
    start
    ```
13. реализовать метод “ Обратный отсчёт ” который выводит на экран цифры от 5 до 1 текстом, затем выводит строку „start“.
    ```
    countdown()  -> 
    five
    four
    tree
    two
    one
    start
    ```
12. Написать свой метод проверки строки на палиндром.
    Учесть, что палиндром может быть предложением с пробелами. 
    При решении задачи используйте цикл. 
    
    Нельзя использовать методы replace(), reverse() и конструкции, которые вы не учили.
    ```
    checkPalindrom( "А роза упала на лапу Азора") -> true 
    checkPalindrom( "поп") -> true  
    checkPalindrom( "школа") -> false
    ```
13. Разработайте шифровальную машину для нового клиента фирмы - Гая Юлия Цезаря.  
    Клиент придумал шифровальный алгоритм и хочет, что бы мы реализовали его в методе.   
    Пример выполнения метода:
    ```
    enigmaCaesar("Съешь же ещё этих мягких французских булок, да выпей чаю.")
    -> "Фэзыя йз зьи ахлш пвёнлш чугрщцкфнлш дцосн, жг еютзм ъгб."
    ```
    О самом методе шифрования(шифр подстановки) написана подробная документация, которая доступна [по ссылке](https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F). 
14. Давайте напишем генератор паролей. Методу передаётся длина пароля. И метод генерирует пароль используя латиницу, цифры и некоторые спецсимволы(на ваш выбор). Подсказка - использовать только те знания, которые были уже изучены. Существует как минимум два(на самом деле 222) разных подхода к решению этой проблемы. Не бойтесь пробовать.
