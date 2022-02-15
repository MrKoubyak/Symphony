---
title: Cheatsheet
---
## Headings

Sometimes it is useful to have different levels of headings to structure your documents. Start lines with `#` to create headings. Multiple `##` in a row denote smaller heading size. The following demonstrate the full range of heading sizes:

# Heading One (h1)

## Heading Two (h2)

### Heading Three (h3)

#### Heading Four (h4)

##### Heading Five (h5)

###### Heading Six (h6)

## Emphasis

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

## Paragraphs

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas elementum ligula, vel accumsan nulla hendrerit a. Duis viverra at ante pharetra lacinia. Maecenas feugiat arcu felis, id ultricies dolor vehicula eget. Cras quis felis urna. Suspendisse id vestibulum orci. Nulla facilisi. Fusce convallis ut turpis bibendum eleifend.

Proin ultrices maximus suscipit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed consectetur elementum nisi vel tincidunt. Nulla feugiat consequat nulla ut eleifend. Vestibulum hendrerit porttitor dolor, non tristique massa. Mauris facilisis interdum lorem vitae ultricies. Mauris commodo pretium dolor, eget bibendum leo sagittis sed. Donec sed ante nulla. Praesent tempor ultrices sapien at interdum. Sed pulvinar turpis quis nunc rhoncus ornare. Nullam in turpis a nisi gravida commodo. Duis in sem maximus, venenatis eros tempus, elementum lacus. Nunc leo est, eleifend et pretium id, mattis mattis nibh.

## Unordered and Numbered Lists

* List item one
    * List item one
        * List item one
        * List item two
        * List item three
        * List item four
    * List item two
    * List item three
    * List item four
* List item two
* List item three
* List item four

1. List item one
    1. List item one
        1. List item one
        2. List item two
        3. List item three
        4. List item four
    2. List item two
    3. List item three
    4. List item four
2. List item two
3. List item three
4. List item four

## Definition List
term
: definition
: another definition

another term
and another term
: and a definition for the term

## Links

You can create an inline link by wrapping link text in square brackets `[ ]`, and then wrapping the URL in parentheses `( )`. For example, it is very easy to [link to Google!](http://google.com).
[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

## Images
Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

## Code and Syntax Highlighting

Inline `code` has `back-ticks around` it.

```
No language indicated, so no syntax highlighting.
```

```ruby
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
```

{% highlight js %}
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// > 8
{% endhighlight %}

## Tables

| A simple | table |
| with multiple | lines|

| Header1 | Header2 | Header3 |
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|----
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |
|=====
| Foot1   | Foot2   | Foot3
{: rules="groups"}

## Blockquotes

Blockquotes are useful for denoting quotes, or highlighting a large block of text. Single line blockquote:

> This quote will change your life.

> A nice blockquote with Title
{: title="Blockquote title"}

Multi line blockquote with a cite reference:

> People think focus means saying yes to the thing you've got to focus on. But that's not what it means at all. It means saying no to the hundred other good ideas that there are. You have to pick carefully. I'm actually as proud of the things we haven't done as the things I have done. Innovation is saying no to 1,000 things.

## Footnotes

This is a text with a footnote[^1].

[^1]: And here is the definition.


## Abbreviations
This is an HTML
example.

*[HTML]: Hyper Text Markup Language

## Horizontal Rule
Three or more...

---

Hyphens

***

Asterisks

___

Underscores