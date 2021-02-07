---
bookCollapseSection: true 
weight: 1 
title: 06-html-form - основы 
description: Формы HTML 
type: book
---

## Формочки и формошлёпы

Один мой друг, а именно Геннадий Колтун с ib.by, называет фронтендщиков формошлёпами.

В чём то он определённо прав. Формы и формочки поджидают нас в интернете везде. Формы логина и регистрации на сайте, форма отправки емайлов, контактов, биллинга и всего чего только может быть.

{{< figure src="/img/res/fe-exe/html/03-form/03-04.png" title="Пример формы" alt="Пример формы" >}}

И мы шлёпаем эти формы всё время. И пожалуй этот тот тег, который нам надо разобрать досконально.

Так давайте просто начнём:

## Form и input

Тегом **&#60;form&#62;** мы объединяем поля для ввода данных.

```HTML

<form>
    Здесь будет форма
</form>
```

На самом деле у тега есть определённые полезные и достаточно обязательные атрибуты. Эти атрибуты указывают куда отправлять форму и каким способом. Соответственно они называются **action** и **method**. Это может выглядеть вот так

- ```<form action="" method="">```. Предлагаю сразу вписать туда значения, что бы мы привыкали к заполнению нужных
  атрибутов. В action мы поставим заглушку **#**, решётка часто используется заглушки ссылки. А в метод передачи данных
  мы напишем **post**. Теоретически там можно написать и **get**. Это то как будут передаваться наши данные. Подробнее о
  HTTP и методах HTTP можно почитать по ссылкам внизу статьи. Результат:

```HTML

<form action="#" method="post">
    Здесь будет форма
</form>
```

Если я говорю о формочках, то я представляю себе сразу форму логина на сайт. Давайте я её и реализую. Для этого у меня
есть тег **&#60;input&#62;**

```HTML

<form action="#" method="post">
    <b>Форма логина на наш сайт</b><br>
    Имя пользователя <input type="text">
</form>
```

Вроде выглядит всё очевидно. Подпись для поля, тег для ввода и даже тип ввода "text" не должен вызывать удивления.

Делаем второе такое поле - **пароль**.

```HTML

<form action="#" method="post">
    <p><b>Форма логина на наш сайт</b></p>
    <p>Имя пользователя <input type="text"></p>
    <p> Пароль <input type="password"></p>
</form>
```

Если мы попытаемся заполнить поле текста, то мы будем видеть символы, которые вводим. Если же мы будем заполнять поле
пароля, то вместо символов мы увидим звёздочки. Помимо text и password существует ещё несколько полей.

## Значения атрибута type в input

### button

**button**: делает поле ввода кнопкой. С помощью дoполнительного атрибута **value** мы можем подписать эту кнопку.
Пример:

```HTML
    <input type="button" value="Кнопка">
```

### submit

**submit**: тоже кнопка, обычно эта кнопка отправляет данные.

```HTML
 <input type="submit">
```

### reset

**reset**: кнопка сброса данных в форме

```HTML
<input type="reset">
```

### image

**image**: собственная кнопка на сайте. Пример:

```HTML
<input type="image" src="button-help.png" alt="help" width="100" height="100">
```

### checkbox

**checkbox**: Флажок или чекбокс. Атрибут **value** и в данном случае поможет подписать поле чекбокса.

Атрибут **checked** сделает поле активным(выбранным).

```HTML
<input type="checkbox" checked>
```

### color

**color**: этот атрибут появился в HTML5, и он управляет выбором цвета.

```HTML
<input type="color" value="#169FA2">
```

### date, datetime-local, month, time

Атрибуты работы с датой и временем. Надеюсь, что они говорят сами за себя.

**date**: я был бы удивлён, если бы с помощью date мы не могли бы выбрать дату.

**datetime-local**: даёт возможность помимо даты ввести ещё и время.

**month**: ввод месяца и года.

**time**: ввод времени.

**week**: ввод недели.

```HTML
    <input type="date">
<input type="datetime-local">
<input type="month">
<input type="time" value="22:53:05">
<input type="week">
```

### email

**email**: поле для ввода емайл-адреса. Поле проверяется средствами HTML на минимальную валидность: наличие собачки, и
подобия доменного имени после него.

С помощью важного атрибута **placeholder**  мы можем ввести значение, которое исчезнет, как только пользователь начнёт
вводить данные.

С помощью волшебного атрибута **size** увеличивается поле ввода. **Size** измеряется в буквах. Значение 25 означает 25
символов моноспейсного шрифта.

```HTML 
<input type="email" placeholder="ваш емайл ввиде user@user.ru" size="25">
```

### file

**file**: Если вы вдруг скачали ненужный файл из интернета, то с помощью формы и атрибута **file** вы сможете его
закачать обратно. Атрибут **accept** настраивает какие файлы можно принимать и то какие файлы сможет отправить
пользователь на сервер. Пример:

```HTML
<input type="file" accept=".doc,.docx">
```

### hidden

**hidden**: Элемент управления, которые не отображается, но чье значение отправлено на сервер. Пример:

```HTML
<input type="hidden" id="secretID" name="verySecret" value="666">
```

### number

**number**: Принимает числа. Мы можем указать минимальные значения и даже шаг - **step**.

```HTML
<input type="number" min="0" step="10">
```

### password

**password**: Мы рассмотрели этот атрибут в самом начале. Можно добавить, что у нас есть возможность указания
максимальной и минимальной длины - minlength и maxlength.

```HTML
<input type="password" minlength="10" maxlength="20">
```

Хочу заметить, что пароли стоит передавать только по защищённому протоколу - HTTPS. Я бы сказал, что отправка паролей
пользователя по обычным протоколам - преступная халатность.

### radio

**radio**: возможность выбор с переключением.

```HTML
<p>M
    <input type="radio" name="gender" value="male"></p>
<p>W
    <input type="radio" name="gender" value="female"></p>
<p>D
    <input type="radio" name="gender" value="diverse"></p>
```

С помощью атрибута **name** мы можем связать три радио-поля и только одно из них может быть выбрано. Если атрибут **
name** удалить, что все три поля могут быть выбранными.

### range

**range**: можно использовать для визуализации изменения значений. Например звука:

```HTML
<p>Звук
    <input type="range" id="volume" name="volume"
           min="0" max="11"></p>
```

По умолчанию в теги атрибуты со следующими значениями:
min: 0 max: 100 value: min + (max-min)/2, or min if max is less than min step: 1

### search

**search**: предположу, что этот инпут для поиска.

```HTML
Поиск <input type="search">
```

### tel

**tel**: Поле ввода телефонного номера.

```HTML
<p>Телефон:<input type="tel"></p>
```

### text

**text**: Однострочное текстовое поле

```HTML
<p>Text:<input type="text" required minlength="4" maxlength="20" size="10"></p>
```

Мы можем сделать поле(кстати не только это обязательным), мы можем изменить размер и ввести минимальное и/или
максимальное вводимое значение.

### textarea

Существует и многострочное поле для ввода. Это правда не атрибут для инпута а отдельный тег. Но я думаю, что его стоит
разместить здесь, что бы мы видели и альтернативу.  
Пример:

```HTML
<p> Комментарий</p>
<textarea name="comment" cols="30" rows="4"></textarea>
```

### url

**url**: Поле ввода/редактирования урла. С минимальной проверкой валидности.

## Label

Поля обычно подписывают. Мы использовали простой текст в абзаце или заголовок. Взрослые программисты используют лейбл для подписывания инпутов.

Есть два принципиальных способа использования **label**.

Пример первый: 
```HTML
<label for="firstname">First name:</label>
<input type="text" name="firstname" id="firstname"><br>

<input type="checkbox" name="subscribe" id="subscribe">
<label for="subscribe">Subscribe to newsletter</label>
```

Пример второй:
```HTML
<label> Чекбокс
    <input type="checkbox" checked>
</label>
```

Вся разница в том, что в первом случае мы должны связать label и input с помощью for и name значений. А во втором случае у нас input внутри label и дополнительная связка необязательна. 

## Атрибуты

Мы рассмотрели подробно атрибут type. Давай посмотрим список других возможных атрибутов в теге **input**: autocomplete,
list, maxlength, minlength, pattern, placeholder, readonly, required, size, spellcheck.

### autocomplete

Браузеры запоминают, что мы вводим в формулярах. И мы можем отключить эти данные для всей формы или для отдельных полей.
Мне тяжело сейчас придумать, где именно вебмастер может решить, что он умнее пользователя. И на самом деле я считаю, что
вмешивание в поведение браузера достаточно смелое решение. Но ситуации бывают разные, возможность для этого есть и мы
должны её знать.

```HTML
<form action="#" method="post" autocomplete="on">
    <p><b>Форма логина на наш сайт</b></p>
    <p>Имя пользователя <input type="text" autocomplete="off"></p>
    <p> Пароль <input type="password"></p>
</form>
```

### list

```HTML
<form>
    <label for="color">Favorite color?</label><br> <input name="color" id="color" list="colors">
</form>
<datalist id="colors">
    <option>Red</option>
    <option>Yellow</option>
    <option>Blue</option>
    <option>Green</option>
    <option>Orange</option>
    <option>Purple</option>
    <option>Black</option>
    <option>White</option>
    <option>Gray</option>
</datalist>
```

И с помощью этих строчек мы получили выпадающий список с выбором.

Как вариант такой список может выглядеть и вот так.
```HTML
    <input list="browsers">

    <datalist id="browsers">
        <option value="Internet Explorer">
        <option value="Firefox">
        <option value="Google Chrome">
        <option value="Opera">
        <option value="Safari">
    </datalist>
```

### maxlength и minlength

maxlength и minlength мы рассмотрели уже пару раз вверху, да и говорят они сами за себя.

### pattern

В паттернах у нас есть возможность писать регулярные выражения, которые будут проверять значения на валидность. Регулярные выражения не самая важная тема в программировании. Её можно опустить, уверен что тебе есть что сейчас учить. 

### placeholder

**placeholder**: помогает пользователю понять как ему стоит заполнить поле. Это очень удобная вещь.

### readonly

Помечает поле "только к чтению".

### required

Поле обязательно к заполнению. Это те поля которые помечаются красной звёздочкой.

### size

Размер, длина строки.

### spellcheck

С помощью этого атрибута можно отключить проверку орфографии.

Я бы сказал это удобно, особенно для моей фамилии. Не очень приятно читать, что фамилия написана с ошибкой.

```HTML
<label>Фамилия с проверкой
    <input type="text" spellcheck="false">
</label>
<label>Фамилия без проверки
    <input type="text" spellcheck="true">
</label>
```

## select

Список выбора можно настроить используя тег **select**. Возможности HTML расширяются не просто так. Правильно настроенные теги вызывают нативные интерфейсы на тех же мобильниках. И человек не путается при вводе данных. 

```HTML
<form action="#" method="post">
    <p><label>Выберите язык <br>
        <select size="7" multiple name="language[]">
            <option disabled>список языков в нашей школе</option>
            <option selected value="java">Java</option>
            <option  value="PHP">PHP</option>
            <option value="Python">Python</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Dart">Dart</option>
            <option value="C-sharp">C#</option>
            <option value="C">C</option>
            <option value="ruby">Ruby</option>
            <option value="pascal">Pascal</option>
        </select>
    </label></p>
    <p><input type="submit" value="Отправить"></p>
```

## Дополнительные ссылки

1. Метод [Post](https://ru.wikipedia.org/wiki/POST_(HTTP))
2. Простым языком о [HTTP](https://habr.com/ru/post/215117/)
3. О [HTTPS](https://ru.wikipedia.org/wiki/HTTPS)
4. [Request_methods](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods)
5. [ib.by](https://ib.by/) - позже, после того как выучите front здесь можно попробовать устроится на свою первую работу. Сошлитесь на эту страницу.

## Домашнее задание

1. [Пимпочки](https://andron13.de/school/frontend/fe-exercises/03-form/01-exercises-html-forms/)
2. [Типичный формуляр](https://andron13.de/school/frontend/fe-exercises/03-form/02-exercises-html-forms/)
3. [Много инпутов](https://andron13.de/school/frontend/fe-exercises/03-form/03-exercises-html-forms/)
4. [Запись на курсы программирования](https://andron13.de/school/frontend/fe-exercises/03-form/01-exercises-html-forms/)