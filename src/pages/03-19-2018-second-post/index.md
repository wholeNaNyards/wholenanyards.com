---
path: '/second-post'
title: 'Second Blog Post'
published: true
date: 'March 19th 2018'
description: 'Apparently we had reached a great height in the atmosphere, for the sky was a dead black, an'
image: 'https://octodex.github.com/images/stormtroopocat.jpg'
imageDescription: 'Description of second blog post image'
---

# h1 Heading

## h2 Heading

### h3 Heading

#### h4 Heading

##### h5 Heading

###### h6 Heading

## Horizontal Rules

---

---

---

## Emphasis

**This is bold text**

_This is italic text_

~~Strikethrough~~

## Blockquotes

> Blockquotes can also be nested...
>
> > ...by using additional greater-than signs right next to each other...
> >
> > > ...or with spaces between arrows.

## Lists

Unordered

* Create a list by starting a line with +, -, or \*
* Sub-lists are made by indenting 2 spaces:
  * Marker character change forces new list start:

Ordered

1.  Lorem ipsum dolor sit amet
2.  Consectetur adipiscing elit

## Code

Inline `code`

Syntax highlighting

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark-this-plugin-has-a-really-long-name-for-some-reason`,
    options: {
      plugins: [`gatsby-remark-prismjs`],
    },
  },
]

function myFunction() {
  let x = 3
  let y = 4
  return x + y
}
```

```java
import java.util.Scanner;

public static void main(String[] args) {
  System.out.println("What's your name?");
  String name = Scanner.nextLine();
  System.out.println("Hello!" + name);
}
```

## Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

Right aligned columns

| Option |                                                               Description |
| -----: | ------------------------------------------------------------------------: |
|   data | path to data files to supply the data that will be passed into templates. |
| engine |    engine to be used for processing templates. Handlebars is the default. |
|    ext |                                      extension to be used for dest files. |

## Links

[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ 'title text!')

## Images

![Minion](https://octodex.github.com/images/minion.png)
![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg 'The Stormtroopocat')

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: https://octodex.github.com/images/dojocat.jpg 'The Dojocat'
