# FOUNDATIONS Session One

## Textbooks

Jeremy Keith & Rachel Andrew - [HTML5 for Web Designers](https://html5forwebdesigners.com) (content is on the right)

Dan Cederholm - [CSS3 for Web Designers](https://abookapart.com/products/css3-for-web-designers)

Mat Marquis - [JavaScript for Web Designers](https://abookapart.com/products/javascript-for-web-designers)

Ethan Marcotte - [Responsive Web Design](https://abookapart.com/products/responsive-web-design)

Dan Cederholm - [SASS for Web Designers](https://abookapart.com/products/sass-for-web-designers)

[Syllabus](http://daniel.deverell.com/)



## Homework

Note: the finished files I was working on in class can be [downloaded](https://github.com/front-end-foundations/session1/tree/work) from the `work` branch of this repo for reference.

1. Download the original files as distributed in class and, using the steps above, try to recreate the design we did in class.
1. Examine the provided homework samples for inspiration and try your hand at redesigning the page using the CSS techniques described in class.

## Reading 
* HTML5 for Web Designers - chapters 1, 2, 5 and 6. 
* CSS3 for Web Designers - start it


## The Doctype

Open `box-model.html` in Chrome, right click on the text and select Inspect.

A doctype is the first piece of text in an HTML document and the first thing a browser sees when it attempts to display ('parse') your page. It tells the browser which version of HTML your are using and how it should render the code. 

```
<!doctype html>
```

### Block and Inline

HTML tags or elements all have a default `display` property which is either `block` or `inline`.

Most HTML elements are block elements which means that they create a rectangular region in the browser. These are part of the box model upon which all web page rendering is based. We can see these boxes using the inspector.

The "opposite" of block in HTML is inline. An example might be a piece of italicized text `<em>` or a link `<a>` inside a paragraph. The paragraph tag - `<p>` - creates a box and typically has space above and below it while the italicized text does not and simply flows along with the rest of the text.

A `<div>` tag is a special block tag which is used to create a logical division in your code. It creates an arbitrary box in a browser but other than that has no display characteristics. 

A `<span>` tag is used to create arbitrary inline elements.

* These display modes can be controlled using the `display` property in CSS.


### The Box Model

Block elements are interpreted as a box by the browser. But boxes have other characteristics such as spacing, borders and margins. Taken together these elements form the box model. You can view this in the inspector.

## The Browser and Developer Tools

Despite recent moves by Microsoft - Chrome, Safari, and Firefox are still the browsers of choice for web designers. One of the reasons for this is their  superior developer tools. 

You should take some time to familiarize yourself with their full functionality. For now the only piece of functionality you need is to be able to right or control click on a portion of the page in the browser and select Inspect from the resulting pop up menu.

* The inspector is your first line of defense when troubleshooting.
* Safari's developer tool is not turned on by default and most be enabled in Safari preferences.

### User Agent Styles

User agent styles are the default styles for HTML elements.
￼
By default the browser has placed a 16px margin above and below the paragraph. 
Let's add padding, border and override the margins.

```html
<style media="screen">
p { 
    padding: 12px; 
    margin: 6px; 
    border: 1px solid #333;
    height: 200px;
    width: 300px;
}
</style> 
```

Refresh the page and inspect the paragraph again. You should see the changes in the inspector’s Style and Layout tabs.

### Box Sizing

Boxes are additive by default. This means their width will be a combination of width, padding and border (margins are outside the box model). There is another sizing method that is often prefered called `border-box`. This method calculates the border and padding within the width and is simpler to work with.

Add `box-sizing: border-box/content-box` to review box model options.

```html
<style media="screen">
    p { 
        ...
        box-sizing: border-box; 
    }
</style>
```

### Media Queries

Add a media query (min and max width):

```
@media (min-width: 500px){
    p {
        color: red;
    }
}
```

## CSS syntax, whitespace and comments

CSS rules consist of a selector, a set of curly braces, and a series of property(s) and values separated by a full colon and terminated by a semi colon.

```css
selector { 
    property1: value; 
    property2: value; 
    }
```
e.g.

```css
p { 
    color:#000; 
    font-family:verdana, sans-serif;
    border:1px solid #333; 
    }
```

The selector determines which HTML tag will be selected. The properties (there are many but we will be focusing on a few of the most useful at the outset) are set by the value after the full colon. These almost always have a unit when used for measurements.

Note the border property:

```css
p { 
    border:1px solid #333; 
    }
```

This is a CSS shortcut and could also be written in long form.

```css
border-style: solid; 
border-color: #f00;     
border-width: 4px;
```

# Exercise - Converting to Standards

Open before.html in an editor and examine the HTML. Then examine index.html. The latter is a more standardized document that uses HTML tags semantically. The former is often referred to as tag soup as it makes little sense to humans looking at the code.

Examine index.html in the browser inspector to display the default (user agent) styling. Note the defaults for margins and padding used to display the body and the unordered list (`<ul>`).

## Terminal

```sh
$ cd <path-to-folder>
$ python -m SimpleHTTPServer 9000
```

Add a CSS block within the `<head> `of start.html as follows:

```html
<style>
    body {
        margin: 0;
        color: #333;
        font-family: Verdana, Arial, sans-serif;
    }
</style>
```

## Google font

https://fonts.google.com

```css
@import url('http://fonts.googleapis.com/css?family=Lato:300,400,700');
font-family: 'Lato', sans-serif;
```

```
<link href="https://fonts.googleapis.com/css?family=Crushed" rel="stylesheet">
```

```
font-family: 'Crushed', cursive;
```

## Formatting the Navigation

Add a nav class to the `<ul>` that will form the navigation for our page.

```html
<ul class="nav">
    <li><a href="#">Cuisines</a></li>
    ...
</ul>
```

By doing so we have created a name space that allows us to differentiate the two `<ul>` lists in `start.html` and apply two different styles.

Add the following to our style block:

```css
.nav { list-style: none; }
.nav li { 
    display: inline-block;
    margin-right: 10px;
}
.nav a {
    color: #333;
    text-decoration: none;
    padding: 4px;
    display: block;
    background-color: #f0dfb4
}
.nav a:hover {
  color: #fff; 
  background-color: #600; 
}
```

Add to the nav a css rule:

```
transition: all 0.5s;
```

Edit the nav CSS rule to position it

```css
.nav {
    list-style:none;
    position: absolute;
    right:0;
    top:60px; 
    }
```

Add an `<aside>` tag around the table and list then add the following CSS:

```css
aside {
  position: absolute; 
  top: 200px; 
  left: 10px; 
  width: 180px; 
  background-color: #F0DFB4; 
  padding: 6px;
  border: 1px solid #600; 
}
```

Note how the text flows under the aside. 

Add margin to move the article over to the right:

```css
article {
  margin: 0 20px 0 200px;
}
```

(This is another CSS short cut - the four values for margin run clockwise from the top.)

Format the pull quote and image:

```css
blockquote  {
  float: right; 
  width: 40%;
  padding: 16px; 
  font-size: 24px; 
}
article img {
    float:  right;
}
```

Note the float property and how the text wraps around it before and after we have defined a width. By default, the floated container shrinks to the width determined by the content.

## Converting the document to fixed width

Currently our document flexes as we make the browser wider - it makes use of all the available horizontal space. While flexibility is good practice, many sites use fixed widths to imporve readability.

Add wrapper `<div id="wrapper">` to entire content area (after the `<body>` tag and close it before the closing `</body>` tag) and add the following to our CSS style block.

```css
#wrapper {
    width: 840px;
    max-width: 840px;
}
```

Then center it in the browser.

```css
#wrapper {
    width: 840px;
    margin: 0 auto 0 auto;
}
```

Add a relative positioning instruction.

```css
#wrapper {
    position: relative;
    width: 840px;
    margin: 0 auto 0 auto;
}
```

Note the impact the relative positioning has on the layout (toggle it on and off using the inspector). The two absolutely positioned elements (aside and .nav) previously had no positioning context and aligned themselves to the edges of the browser window. With the addition of the relative positioning to the wrapper they now become positioned relative to the wrapper box. The rule here is that absolutely positioned elements are positioned relative to their nearest positioned ancestor in the HTML tree. This is an important CSS design pattern and well will see it again.

## Adding color to our layout

Edit the CSS body rule.

```css
body {  
    ...
    background-color: #ddd;
}
```

Note that the wrapper's background is transparent and shows through to the gray applied to the body. 

Let's add a white background to wrapper.

```css
#wrapper {
    ...
    background-color: #fff;
}
```

## Formatting the content

```css
h1, h2 {
  color: #600;
   margin-top: 20px;
   margin-left: 20px;
   font-size: 36px;
}
h2 {
  font-size: 24px;
}
```

Note multiple selectors, h1 margin outside the containing elements, and margin collapsing. Note that the lack of namespacing allows this to effect the Matsu text as well.

Add a summary class to "bottom line" p:

```html
<p class="summary"><strong>Bottom Line:</strong>
```

Add CSS to format it:

```css
.summary {
  font-size: 16px; 
  border-bottom: 1px dotted #600;
}
```

Format elements in the list and table

```css
aside th {
    text-align: right;
}

aside ul {
  list-style: none; 
  margin: 1em; 
  padding: 0;
}
```

## Formatting the Mast Head

Note the `<header>` tag around the h1 and h2 at the top of the document.

```html
<header>
  <h1>Cleveland Eats</h1>
  <h2>A Guide to Fine Northeast Ohio Dining</h2>
</header>
```

Format the branding div:

```css
header {
  height:120px; 
}
```

Edit the CSS in preparation for absolutely positioning its children.

```css
#header {
    ...
  position:relative;
}
```

Edit:

```css
header h1, header h2 {
    position: absolute;
    top: 10px;
}
header h2 {
    top: 50px;
}
```

Use positioning to reposition up the info and nav elements.
￼
Clean up the code formatting in Sublime by using the Command Palette and searching for Reindent Lines.

### Inline, In Page & External CSS

There are three ways to add CSS to an HTML document:

* Inline via the HTML style attribute
* In page via the HTML style tag
* As an external .CSS file via linking (HTML <link> tag)
* As an external .CSS file via importing (CSS @import statements)

We will be looking at all three methods.

Inline styles are inefficient: 

```html
<p style="margin-top: 12px;">
```

However, this method is acceptable and often used when dynamically changing the page after it has been loaded in the browser. 

Try using the inspector to inspect a dynamic site (such as http://www.w3schools.com/jquery/jquery_animate.asp). Note how it displays dynamic changes to the HTML by temporarily highlighting them.

Remove the CSS from the head of the document and paste it into a new text document. Save it in a new css directory calling it styles.css. We have two options here: link to our CSS file using an HTML tag, or to use a CSS @import statement.

```html
<link href="css/styles.css" media="all" />
```

Try not to use the alternative:

```css
<style>
  @import url("css/styles.css");
</style>
```

Ideally, all your stylesheets should be in one file to cut down on the number of requests the browser needs to make tothe server.

### Adding Simple Responsiveness

At the bottom of the stylesheet

```
@media print {
    * {
        display: none !important;
    }
}

@media all and (max-width: 800px){
    .nav {
        top: 0;
        left:0;
        margin: 0;
    }
    aside {
        position: static;
        float: left;
        margin-right: 20px;
    }
    article {
        margin-left: 20px;
    }
    blockquote {
        width: 100%;
        float: none;
        margin: 0;
    }
}
```


### Using Flexbox (optional - demo only)

```css
.nav {
    display: flex;
}
.nav li { 
    flex: 1;
    background-color: #f0dfb4;
    list-style: none;
}
```


## Some simple CSS3 Enhancements

As work on a new version of CSS progressed it was found that releasing an entirely new specification would be too cumbersome so the standards committee (http://W3C.org) decided to break the process into modules. (For compatibility and advice see http://CanIuse.com.)

Some of the earlier CSS 3 specifications include provisions for visual effects such as rounded corners, drop shadows and gradients. A useful page that allows you to become familiar with these enhancements is http://css3generator.com/.

Add a drop shadow to the CSS for the info div. (See https://developer.mozilla.org/en/CSS/-moz-box-shadow for specifications)

```css
aside {     
    ...     
    border-radius: 6px; 
}
```

Add rounded corners to the info div. (See https://developer.mozilla.org/en/CSS/border-radius for specifications.)

```css
aside { 
    ...     
    box-shadow: 5px 5px 5px #ddd; 
}
```

Add a box shadow to the wrapper's CSS

```css
box-shadow: 10px 10px 20px #ddd;
```
Note: to make these work in very old browsers you need to add vendor prefixes:

```css
...
-webkit-box-shadow: 10px 10px 150px #666;
-moz-box-shadow: 10px 10px 150px #666;
...
```

If you use vendor prefixes always make sure that the non-prefixed line appears last.

```css
#wrapper { 
    width:780px; 
    position:relative; 
    margin:0 auto;  
    background: #fff;  
    -webkit-box-shadow: 10px 10px 150px #aaa; 
    -moz-box-shadow: 10px 10px 150px #aaa; 
    box-shadow: 10px 10px 150px #aaa;
}
```

Add CSS 3 Gradients. (See: http://www.colorzilla.com/gradient-editor/)


## Highlight one of the tabs

This is a simple way to create color coded navigation on a web site.
Add a class to body tag so we know what kind of page this is.

```html
<body class="p-review">
```

Add a list item to the nav list with a class of review-link.

```html
<li><a class="t-review" href="#">Reviews</a></li>
```
Add the following to our CSS block:

```css
.review-page .review-link {
    color: #fff;
    background:#600;
 }
```
Note that the tab is now highlighted. 



