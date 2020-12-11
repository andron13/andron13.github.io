# Дата и время в Java 

Прежде чем

Java и время:
Пре
```Java
Date today = new Date();
System.out.println(today);
Date dateStart = new Date(0);
System.out.println("dateStart " + dateStart);
Date anotherDay = new Date(1_451_665_447_567L);
System.out.println("just anotherDay " + anotherDay);
Date theEnd = new Date(Long.MAX_VALUE);
System.out.println(theEnd);
```

В итоге у нас получился вот такой вот класс, в котором мы поработали с некоторыми вариантами даты в Java. 


```Java
import java.text.*;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.util.*;

public class HelloDate {
    public static void main(String[] args) throws Exception {
        // haliHalloDate();
        //findBirthDay();
        helloLocaleDate();
    }

    private static void helloLocaleDate() {
        LocalDate localDate = LocalDate.now();
        LocalDate plusDays = localDate.plusMonths(5).minusDays(5);
        System.out.println("plus minus " + plusDays);

        LocalDateTime myParseDate
                = LocalDateTime.parse("2018-02-20 10:15:30"
                , DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss"));

        System.out.println(myParseDate);

        final DateTimeFormatter formatter
                = DateTimeFormatter.ofPattern("EEEE", new Locale("ru"));
        final String day
                = myParseDate.format(formatter);

        System.out.println(day);
        final DateTimeFormatter formatterMonth
                = DateTimeFormatter.ofPattern("MMMMM", new Locale("ru"));
        final String month = myParseDate.format(formatterMonth);
        System.out.println("Попытка номер 5 " + month);

        LocalDateTime now = LocalDateTime.now();
        ZoneId berlin = ZoneId.of("Europe/Berlin");
        ZoneId moskow = ZoneId.of("Europe/Moscow");
        ZonedDateTime inBerlin = ZonedDateTime.of(now, berlin);
        ZonedDateTime inMoskow = ZonedDateTime.of(now, moskow);
        System.out.println("time in berlin" + inBerlin);
        System.out.println("time in moskow" + inMoskow);

        LocalDateTime plasDays2 = now.plusDays(10);
        LocalDateTime plasDays3 = now.minusWeeks(10);
        LocalDateTime plasDays4 = now.minusHours(1);

        long between = ChronoUnit.DAYS.between(now, plasDays2);
        System.out.println(between);

        ArrayList<LocalDate> dates = new ArrayList<>();
        Collections.addAll(dates,
                LocalDate.now(),
                LocalDate.now().plusDays(10),
                LocalDate.now().plusDays(20),
                LocalDate.now().plusWeeks(6));

        System.out.println(dates);

        ArrayList<String> stringDates = new ArrayList<>();
        Collections.addAll(stringDates, "03 Jun 2015", "08 JUL 2016", "12 DEZ 2013");
        System.out.println(stringDates);

        String test = "03/07/2015";
        System.out.println(createLocalDateFromString(test));

        System.out.println(createStringFromLocaleDate(plusDays));
    }

    public static LocalDate createLocalDateFromString(String s) {
        return LocalDate.parse(s, DateTimeFormatter.ofPattern("dd/MM/yyyy"));
    }

    public static String createStringFromLocaleDate(LocalDate d) {
        return d.format(DateTimeFormatter.ofPattern("EEEE, dd MMMM yyyy", new Locale("ru")));
    }


    private static void findBirthDay() {
        LocalDate today = LocalDate.now(); // день сегодня
        System.out.println("today" + today);
        LocalDate birthDay = LocalDate.of(1980, Month.AUGUST, 10);  // день варения
        System.out.println("birthDay " + birthDay);
        Period period = Period.between(birthDay, today);
        System.out.println("period = birthDay, today " + period);
        System.out.println(period.getYears());
        System.out.println(period.getMonths());
        System.out.println(period.getDays());
        System.out.println(period.getUnits());
        System.out.println(period.getChronology());
    }

    private static void haliHalloDate() throws ParseException {
        Date today = new Date();
        System.out.println(today);
        Date dateStart = new Date(0);
        System.out.println("dateStart " + dateStart);
        Date anotherDay = new Date(1_451_665_447_567L);
        System.out.println("just anotherDay " + anotherDay);

        Calendar calendar = Calendar.getInstance();
        calendar.setTime(anotherDay);
        // # August 17, 292278994 7:12:55 AM UTC

        // System.out.println("just calendar anotherDay " + calendar); //ужас-ужас

        System.out.println("calendar.getTime() " + calendar.getTime());
        calendar.add(Calendar.WEEK_OF_MONTH, 1);
        System.out.println("calendar.getTime() + week " + calendar.getTime());
        calendar.add(Calendar.MINUTE, 5);
        System.out.println("calendar.getTime() + minute " + calendar.getTime());

        DateFormat dateFormat = DateFormat.getDateInstance(DateFormat.SHORT);
        System.out.println("dateFormat.format(calendar.getTime()) "
                + dateFormat.format(calendar.getTime()));

        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd/MM/yyyy");
        System.out.println("simpleDateFormat.format(calendar.getTime())  "
                + simpleDateFormat.format(calendar.getTime()));
        SimpleDateFormat simpleDateFormatBerlin = new SimpleDateFormat("dd-M-yyyy");
        System.out.println("simpleDateFormatBerlin.format(calendar.getTime()) "
                + simpleDateFormatBerlin.format(calendar.getTime()));

        Calendar calendarToday = Calendar.getInstance();
        calendarToday.setTime(today);
        System.out.println("simple format today " + simpleDateFormatBerlin.format(calendarToday.getTime()));

        Date oldDate = simpleDateFormat.parse("20/07/1993");
        System.out.println("oldDate" + oldDate);
    }
}
```

## Joda-Time

Пока не вышла Java 8, программисты не мирились с недостатками языка и создавали свой функционал. Одной из самых популярных библиотек была библиотека Joda-Time.

На сайте создателей формата времени дословно стоит следующее.

>Joda-Time provides a quality replacement for the Java date and time classes.    
>  
>Joda-Time is the de facto standard date and time library for Java prior to Java SE 8. Users are now asked to migrate to java.time (JSR-310).

Это значит, что нам эта библиотека может быть интересна только в историческом и учебном плане. 

## Дополнительные ссылки

1. Docs.oracle - [SimpleDateFormat](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html)
2. Docs.oracle [DateTimeFormatter](https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html)
3. Oracle - [Java SE 8 Date and Time](https://www.oracle.com/technical-resources/articles/java/jf14-date-time.html)
4. Habr - Java и время: [часть первая](https://habr.com/ru/post/274811/), [часть вторая](https://habr.com/ru/post/274905/)
5. Baeldung - [Introduction to the Java 8 Date/Time API](https://www.baeldung.com/java-8-date-time-intro)
6. [Get the Current Date, Time and Timestamp in Java 8](https://www.baeldung.com/current-date-time-and-timestamp-in-java-8)
7. [Migrating to the New Java 8 Date Time API](https://www.baeldung.com/migrating-to-java-8-date-time-api)
8. [Joda-Time](https://www.joda.org/joda-time/) - _deprecated_
9. [Unix time](https://ru.wikipedia.org/wiki/Unix-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F), also known as Epoch time, POSIX time, seconds since the Epoch, or UNIX Epoch time.

## Домашнее задание

1. Создайте программу, которая находит сколько дней осталось до Нового Года.
2. Создайте класс Human и гетер, который даёт точный возраст человека(в годах), если нам известна дата его рождения.
3. Напишите калькулятор, который принимает от пользователя дату, и возвращает Unix time.