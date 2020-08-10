---
bookCollapseSection: true
weight: 1
title: StringBuffer, StringBuilder и String в чём отличие
description: StringBuffer, StringBuilder и String — в чём отличие? Давайте разберёмся, что когда использовать.
---

#String, StringBuffer и StringBuilder — введение в Java 026

Нас уже не должны пугать ключевые слова с большой буквы. Нам известны как минимум два из них String и Scanner. StringBuffer и StringBuilder родные братья уже давно изученного типа данных String. 

## Чем был плох String?

String всем прекрасен, только он неизменяем (immutable). И операции со строковыми величинами иногда дороги в потреблении ресурсов. Например, если мы в цикле изменяем строку добавляя к ней символы. Java каждый раз создаёт новый String. Пример:

```Java
public class MyString {
    public static void main(String[] args) {
        triangle(10);
    }
    private static void triangle(int n) {
        String star = "*";
        String row = "";
        for (int i = 0; i < n; i++) {
            row = row + star;
            System.out.println(row);
        }
    }
}
```

Короткая рекомендация - использовать String для редко изменяемых переменных. Например для имени, фамилии, адреса пользователя. 

## StringBuffer и StringBuilder, почему сразу два новых типа?

StringBuffer и StringBuilder абсолютно идентичные классы и их следует использовать для часто изменяемых строк. Различие в том, что 

**StringBuffer** синхронизированный(synchronized) и потокобезопасный.
**StringBuilder** однопоточный и не потокобезопасный.

### Что такое синхронизация, коротко

Представьте, что вы пишите приложение для продажи ЖД-билетов. И вы не можете дважды продать одно место. **Синхронизация** блокирует метод, если один из потоков его запустил. То есть в многопоточном приложении доступ к продаже ведётся поочерёдно. В однопоточном приложении доступ разрешается всем сразу. Совсем коротко, синхронизация более дорогая в ресурсах, но по другому проблему доступа решить не всегда возможно. 





https://javarush.ru/groups/posts/2351-znakomstvo-so-string-stringbuffer-i-stringbuilder-v-java
https://metanit.com/java/tutorial/7.3.php

    - [26 - StringBuffer]({{< relref "/school/java/basic-course/026-java-string-stringbuffer-stringbuilder.md" >}})