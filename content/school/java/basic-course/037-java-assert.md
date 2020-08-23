---
bookCollapseSection: true
weight: 1
title: 
description: 
---

```code
public class Test {
    public static void main(String[] args) {
        System.out.println(sum(1922222225, 1922222225));
    }
    
    // Calculates the sum of a (int) + b (int) and returns the result (int).
    public static int sum(int a, int b) {
        assert (Integer.MAX_VALUE - a >= b) : "Value of " + a + " + " + b + " is too large to add.";
        final int result = a + b;
        assert (result - a == b) : "Sum of " + a + " + " + b + " returned wrong sum " + result;
        return result;
    }
}
```

https://askdev.ru/q/chto-delaet-klyuchevoe-slovo-java-assert-i-kogda-ego-sleduet-ispolzovat-1901/

https://stackoverflow.com/questions/18168257/where-to-add-compiler-options-like-ea-in-intellij-idea#:~:text=Add%20it%20as%20a%20VM%20option%20for%20your%20runtime%20configuration.&text=You%20can%20also%20make%20IntelliJ,Defaults%20%3E%20Application%20%3E%20VM%20options.