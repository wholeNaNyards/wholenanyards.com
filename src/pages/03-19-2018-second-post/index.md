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

# Horizontal Rules

---

---

---

# Emphasis

This is **bold** text

# Blockquotes

> Someone important once said that it is important to say things.

# Lists

## Unordered

* Create a list by starting a line with +, -, or \*
* Sub-lists are made by indenting 2 spaces:
  * Marker character change forces new list start:

## Ordered

1.  Lorem ipsum dolor sit amet
2.  Consectetur adipiscing elit

# Code

## Inline Code

Let's look at this code snippet: `let x = 42;`. As we can see here, it's confusing.

## Syntax highlighting

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

# Tables

| Option | Description                                                               |
| ------ | ------------------------------------------------------------------------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default.    |
| ext    | extension to be used for dest files.                                      |

# Links

[link text](http://dev.nodeca.com)

# Images

![Minion](https://octodex.github.com/images/minion.png)

# YouTube

<iframe width="600" height="400" src="https://www.youtube.com/embed/cOc6U5DgkQM"></iframe>
