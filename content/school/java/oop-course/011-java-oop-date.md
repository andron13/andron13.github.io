


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

## Дополнительные ссылки

1. https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html
2. https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html
3. https://habr.com/ru/post/274811/
4. https://habr.com/ru/post/274905/