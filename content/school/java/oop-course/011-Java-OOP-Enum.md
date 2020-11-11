
```Java
enum Level {
  LOW,
  MEDIUM,
  HIGH
}

Level myVar = Level.MEDIUM;
enum Level {
  LOW,
  MEDIUM,
  HIGH
}

public class MyClass {
  public static void main(String[] args) {
    Level myVar = Level.MEDIUM;

    switch(myVar) {
      case LOW:
        System.out.println("Low level");
        break;
      case MEDIUM:
         System.out.println("Medium level");
        break;
      case HIGH:
        System.out.println("High level");
        break;
    }
  }
}
```

https://mkyong.com/java/java-enum-example/
https://www.w3schools.com/java/java_enums.asp
https://javarush.ru/groups/posts/1963-kak-ispoljhzovatjh-klass-enum

```Java
public enum Gender {
	M(1),
	W(2),
	D(3);

	private int gend;

	private Gender(int gend) {
		this.gend = gend;
	}

	public int getGend() {
		return gend;
	}
}
```

https://javarush.ru/groups/posts/1963-kak-ispoljhzovatjh-klass-enum

https://github.com/sergeylukichev/JavaCourse/blob/master/Drafts/DayOfWeek/src/DayOfWeek.java