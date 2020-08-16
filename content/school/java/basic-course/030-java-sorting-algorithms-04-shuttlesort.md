# Челночная сортировка (Shuttle Sort) — введение в Java 030

(В разработке) 

```java
public class Shuttle {
    public static int[] shuttleSort(int[] array) {
        for (int i = 0; i < array.length - 1; i++) {       //  primary pass
            if (array[i] > array[i + 1]) {
                int j = i - 1;
                int temp = array[i + 1];    //  small value to move back
                array[i + 1] = array[i];
                while (j >= 0 && array[j] > temp) {    //  go back
                    array[j + 1] = array[j];    //  shuttle values forward
                    j = j - 1;
                }    //  end secondary pass
                array[j + 1] = temp;    //  insert small value further back
            }            //  else no secondary pass
        }        //  end all passes
        return array;
    }
}
```

