# JAR - Java Archive — введение в Java 035

Приложения обычно делают, что бы они использовались. Java приложения обычно собираются в JAR-файл.

Думаю разумно уже сейчас узнать как собираются JAR приложения, потому что это совсем не сложно, ну и у JAR файлов есть один приятный бонус. Мы можем использовать их как собственную библиотеку.

## Создание JAR

Давайте просто попробуем в IDEA создать наш JAR-файл.

Заходим в меню **File** -> **Project Structure**.

 {{<figure src="/img/res/java/34/instruction-01.png" title="Создание JAR, первый шаг" alt="Создание JAR, первый шаг" >}}

Переходим в подменю **Artifacts** и нажимаем на плюсик в следующей колонке.

 {{<figure src="/img/res/java/34/instruction-02.png" title="Создание JAR, второй шаг" alt="Создание JAR, второй шаг" >}}

Выбираем создание **JAR from modules with dependencies**

 {{<figure src="/img/res/java/34/instruction-03.png" title="Создание JAR, третий шаг" alt="Создание JAR, третий шаг" >}}
 
Выбираем директорию куда должен создаться файл и возможную точку входа в программу (Main-class).

 {{<figure src="/img/res/java/34/instruction-04.png" title="Создание JAR, четвёртый шаг" alt="Создание JAR, четвёртый шаг" >}}
 
В итоге у нас должно было получиться что-то вроде этого.

После этого заходим в меню Build-> Build Artifacts

В директории **out** стоит поискать наш созданный JAR.

## Как добавить в проект уже имеющиеся наработки. 

https://commons.apache.org/proper/commons-lang/download_lang.cgi
https://github.com/pengrad/java-telegram-bot-api/releases


## Дополнительные материалы

https://docs.oracle.com/javase/tutorial/deployment/jar/build.html

## Домашнее задание

1. Создать JAR библиотеку подсчитывания BMI и высчитывания сжигаемых колорий.
2. Создать JAR библиотеку проверки високосного года.
3. Создать JAR библиотеку генерации пароля.
