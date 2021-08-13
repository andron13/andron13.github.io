---
bookCollapseSection: true
weight: 1
title: Emmet
draft: false
---

## Emmet и HTML

Emmet — это слово, которое первоначально означало муравей. Это то самое маленькое насекомое, способное переносить груз в
50 раз больше собственного веса. Это слово также похоже на "emit", что, по сути, и делает Emmet, когда расширяет
аббревиатуры.

То есть **emmet** набор сокращений и горячих клавиш, которые помогают в повседневной работе фронтендеру.

Появился Emmet в 2008-м году под названием **Zen Coding**. Zen Coding ускорял написание кода HTML, XML, XSL, а также код
на некоторых других языках. Автор проекта Вадим Макеев.

На данный момент Emmet интегрирован во многие популярные редакторы кода изначально. На август 2021 года плагин работал в
Visual Studio Code, во всех продуктах JetBrains(например WebStorm) и Brackets.

Не думаю, что надо тратить время и текст на то "как настроить мой редактор". Просто воспользуйтесь одним из
перечисленных выше. Начинающим не нужно усложнять свою жизнь больше, чем она и так есть.

{{< youtube id="EiJkNyXfOOg" title="Видео к уроку Emmet и HTML" >}}


Давайте начнём с азов. Мы создаём пустой html-файл. И в нём надо написать как минимум доктайп, кодировку, язык, тайтл и
само тело страницы. Что-то вроде вот этого.

````html
<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>

</body>
</html>
````

Всё это не надо заучивать и запоминать в 2021-м году. Да 25 лет назад разработчик веб-страниц должен был писать по
шпаргалкам или запомнить наизусть.

Нам не надо учить многое или сбивать наши пальчики в кровь. На пустой странице нам достаточно написать восклицательный
знак **!** и сразу за ним нажать на **Tab**. В некоторых редакторах надо нажать **Enter**. В некоторых сработают обе
клавиши. Обычно всё это можно в настройках изменить. В JetBrains продуктах по умолчанию срабатывает **Tab**. В **Visual
Studio Code** срабатывают обе кнопки.

{{< figure src="/img/res/keyboard-tab-enter.jpg" title="Кнопки Tab и Enter на клавиатуре" alt="Кнопки Tab и Enter на клавиатуре" >}}

Если вы всё правильно сделали, то у вас должен появится примерно тот же код, который и у меня вверху. От редактора к
редактору, от версии к версии могут быть небольшие несоответствия. Это не столь важно на стадии изучения HTML и плагина Emmet.

Emmet может очень многое и в рамках статьи я покажу многие его возможности. Но эта статья не заменит оригинального
сайта **emmet.io** с документацией.

В работе постоянно нужен контент. Без статей, текста, предложений и заголовков сайт сделать сложновато. Можно копировать
уже из имеющегося контента. Заготовить текст, который отвечает всем правилам и копировать и вставлять его по мере
надобности. Но, зная горячии клавиши всё это не нужно.

Веб-верстальщики (люди, которые делают веб-страницы) пользуются рыбой, специальным, чаще всего сгенерированным текстом.
Такой текст для латинского алфавита называют **lorem ipsum**.

Если мы введём в редакторе **lorem** и нажмём **таб**, то нам сгенерируется небольшой абзац текста, начинающийся с **Lorem ipsum dolor sit amet, consectetur adipisicing elit**. Если вы увидите на рабочей странице такой текст, то вероятно
вебмастер забыл удалить дев-версию проекта.

И так, мы вводим lorem + tab и получаем:

````html
<!--lorem-->
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias animi aperiam aut dolorum eius error expedita, fugiat
ipsam iste maiores modi natus, nostrum quaerat quibusdam quisquam quos sequi vero voluptatibus?
````

В этом абзаце вверху 30 слов. **lorem10** даст нам рыбу из 10 слов. **Рыба** это термин для текста-заглушки.

````html
<!--lorem10-->
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, saepe.
````

Соответственно **lorem150** даст нам огромный абзац из 150 слов. Хотя в html, пожалуй, правильнее говорить параграф.
Ведь html-элемент отвечающий за абзац называется именно так и обозначается буквой p. И если мы хотим один абзац с рыбой,
то вводим **p>lorem**.

````html
<!--p>lorem-->
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci error facere magnam maiores optio sed tenetur,
  unde! Autem consequuntur eius esse iure laborum optio quisquam? Ab harum numquam optio? At?</p>
````

p*5>lorem сгенерирует 5 абзацев с рыбой. Дословно мы можем прочитать так. Сделай параграф пять раз и в нём лорем.

Дальше Я буду писать код и давать короткое пояснение. Начинающим может показаться информация менее удобоваримая. Но эта
статья должна помочь разобраться с горячими клавишами, а не с HTML. По мере изучения вёрстки вы можете возвращаться к
этой шпаргалке.

**p.announce** создаёт параграф с классом announce.

````html
<!--p.announce-->
<p class="announce"></p>
````

**div.announce** создаст див с классом announce

````html
<!--div.announce-->
<div class="announce"></div>
````

Div можно не писать вообще, так как этот элемент используют часто, то по умолчанию и **emmet** установил его. И тогда мы
можем использовать **.announce**

````html
<!--.announce-->
<div class="announce"></div>
````

Кстати именно это и является одной из причин злоупотреблений дивом и как результат плохой вёрстки в 2021-м году. Лень
верстальщиков и невероятно удобный emmet, который помогает писать быстро.

Но вернёмся к сокращениям. Мы можем установить и ID для элемента:  
**h3#title**

````html
<!--h3#title-->
<h3 id="title"></h3>
````

Можно и айди, и класс, и даже два класса.
**h5#block-title.green.right**

````html
<!--h5#block-title.green.right-->
<h5 id="block-title" class="green right"></h5>
````

А что если нам надо сделать 5 блоков с пронумерованными стилями и/или ID. Для этого мы можем использовать переменную **$**.

````html
<!--  p#block$.item$*3-->
<p id="block1" class="item1"></p>
<p id="block2" class="item2"></p>
<p id="block3" class="item3"></p>
````

Мы можем задавать и свой текст:

````html
<!--p>{Свой текст}-->
<p>Свой текст</p>
````

Можем работать с изменяющимся текстом

````html
<!--p#block$.item$*3>{Мой текст и переменная № $}-->
<p id="block1" class="item1">Мой текст и переменная № 1</p>
<p id="block2" class="item2">Мой текст и переменная № 2</p>
<p id="block3" class="item3">Мой текст и переменная № 3</p>
````

### Заметка на полях

Прошу заметить, что для начинающих изучать HTML emmet чаще всего не даёт прибавки в скорости, по очень многим причинам:

- не очень понятно, что именно надо писать и постоянно сверяться со шпаргалкой
- дополнительные знания, которые не очень помещаются в голове
- скорости мешает мышка, от работы с которой многие начинающие долго не могут отучиться.
- низкая скорость набивки символов. Это совсем не значит, что надо специально учиться скоропечатнью.

Скорее надо просто постепенно, ежедневно заниматься изучением и закреплением нового.


## Домашнее задание

Посмотрите что получится, если ввести:
- &num;header
- .title
- .class
- form#search.wide
- ul>li
- ul>li>a{текст}
- ul>li*3
- ul>li.item$*3
- ul>li.item$$$*3
- ul>li.item$@-*3
- h2{Заголовок]+p*3>lorem
- ul.style>li.list-items*5
- div+p+bq>lorem
- div+div>p>span+em+bq
- div+div>p>span+em^bq
- div+div>p>span+em^^bq
- div>(header>ul>li*2>a)+footer>p
- p[title="Hello world"]
- h$[title=item$]{Header $}*3
- td[rowspan=2 colspan=3 title]
- [a='value1' b="value2"]
- a{Click me}
- p>{Click }+a{here}+{ to continue}
- em>.class 
- ul>.class
- table>.row>.col
- .wrapper>h1{My Text}+p*3>lorem5

## Полезные ссылки

1. [Официальная документация emmet](https://docs.emmet.io/)
2. [Шпаргалка](https://dwstroy.ru/stail/plaginy-rasshireniya/emmet-shpargalka/)