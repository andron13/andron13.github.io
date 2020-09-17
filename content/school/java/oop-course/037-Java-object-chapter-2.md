 А запомнить нам поможет, то, что String тоже пишется с большой буквы, но как исключение из всех объектов инициализируется по упрощённой формуле. Вернее может, а может и по новой:

```Java
String helloWorld = new String("Hello Java World!")
```


https://www.baeldung.com/java-string-pool



/**
 * BC12-Morning
 * 16 18 : 25
 */
public class Test {
    public static void main(String[] args) {
        String a = "Андрей";
        String b = new String("Андрей");
        String e = new String("Андрей");
        String newE = e;
        boolean c = a.equals(b);
        boolean d = (a == b);
        System.out.println(c);
        System.out.println(d);
        boolean f = b == e;
        System.out.println(f);
        System.out.println("исчо раз" + newE == e);

        String str1 = "Java";
        String str2 = new String(); // пустая строка
        String str3 = new String(new char[]{'h', 'e', 'l', 'l', 'o'});
        String str4 = new String(new char[]{'w', 'e', 'l', 'c', 'o', 'm', 'e'}, 3, 4);//3 -начальный индекс, 4 -кол-во символов

        System.out.println(str1); // Java
        System.out.println(str2); //
        System.out.println(str3); // hello
        System.out.println(str4); // come

        String str10 = "Hello World!!";
        String str20 = "Hello World!!";
        System.out.println(str10 == str20);  // правда
    }
}
