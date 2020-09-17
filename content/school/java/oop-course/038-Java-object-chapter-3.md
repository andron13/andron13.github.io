# Три ноги на которых стоит Java

1. Наследование - inheritance.
    https://vertex-academy.com/tutorials/ru/pravila-nasledovaniya-v-java/
2. Инкапсуляция - encapsulation.
3. Полиморфизм - polymorphism.
    - перегрузка - overloading.
    - overriding

Инкапсуляция — ограничение доступа к составляющим объект компонентам (методам и переменным).





```Java
public class Person {
    private String name;
    private String firstName;
    public int age;

    public Person(String ln, String fn) {
        name = ln;
        firstName = fn;
    }

    public Person() {
        this("Doe", "John");
    }

    public void setName(String ln, String fn) {
        name = ln;
        firstName = fn;
    }

    public String fullName() {
        return (name + " " + firstName);
    }
}

import java.util.Arrays;

public class Employee extends Person {
    private String employeeId;

    public Employee(String ln, String fn, String EmpId, int a) {
        super(ln, fn); // Java ruft hier den Konstruktor der Oberklasse auf
        employeeId = EmpId;
        age = a;
    }

    public String getEmployeeId() {
        return employeeId;
    }

    public String printAll() {
        return (fullName() + " "
                + employeeId + " "
                + age);
    }
}

class EmployeeTest {
    public static void main(String[] args) {
        Employee ceo = new Employee("Doe", "Jane", "1", 25);
        Employee cto = new Employee("Miller", "John", "2", 30);
        Employee e1 = new Employee("Сергей", "Серёгин", "3", 25);
        Employee e2 = new Employee("Петя", "Петров", "4", 57);
        Employee e3 = new Employee("Вася", "Васечкин", "5", 43);
        Employee e4 = new Employee("Дмитрий", "Дмитриев", "6", 36);
        cto.age++;
        System.out.println(ceo.printAll());
        System.out.println(cto.printAll());
        Employee[] work = {ceo, cto, e1, e2, e3, e4};

        System.out.println("Принт ансорт аррэй");
        for (Employee empl : work) {
            System.out.println(empl.printAll());
        }
        Employee[] work1 = bubbleSort(work);
        System.out.println("Принт сорт аррэй");
        for (Employee empl : work1) {
            System.out.println(empl.printAll());
        }
    }

    public static Employee[] bubbleSort(Employee[] myArray) {
        boolean unsorted = true;
        while (unsorted) {
            int count = 0;
            for (int i = 0; i < myArray.length - 1; i++) {
                if (myArray[i].age > myArray[i + 1].age) {
                    myArray[i].age = myArray[i].age + myArray[i + 1].age;
                    myArray[i + 1].age = myArray[i].age - myArray[i + 1].age;
                    myArray[i].age = myArray[i].age - myArray[i + 1].age;
                    count++;
                }
            }
            if (count == 0) {
                unsorted = false;
            }
        }
        return myArray;
    }
}

```

