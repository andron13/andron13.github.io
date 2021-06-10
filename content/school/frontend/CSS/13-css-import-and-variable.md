

```CSS
@import "navigation.css"; /* Via string */
or
@import url("navigation.css"); /* Via url */
or
@import url("css/print-style.css") print;
@import url("fineprint.css") print;
@import url("bluish.css") projection, tv;
@import 'custom.css';
@import url("chrome://communicator/skin/");
@import "common.css" screen, projection;
@import url('landscape.css') screen and (orientation:landscape);
:root {
    --bg-dark: #ffffff;
}
home.css

@import "colors.css";

body: var(--bg-dark)
@import 'style-sheet-name.css';
@import url(../relative/path/to/styles.css);
@import url(http://absolute-path.com/css/some-styles.css);
```


1. https://www.w3.org/TR/css3-mediaqueries/
2. http://htmlbook.ru/css/import
3. https://www.tutorialrepublic.com/css-tutorial/css-media-types.php
4. https://developer.mozilla.org/en-US/docs/Web/CSS/@import
5. https://tympanus.net/codrops/css_reference/import/