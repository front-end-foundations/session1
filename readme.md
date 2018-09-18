# I - Intro & Converting to Standards

## Resources

[Email](mailto:daniel.deverell@nyu.edu) - `daniel.deverell@nyu.edu`

[Syllabus](http://daniel.deverell.com/syllabus-fall2018.pdf) - `http://daniel.deverell.com/syllabus-fall2018.pdf`

[Github](https://github.com/front-end-foundations) - `https://github.com/front-end-foundations`, is the source for *all files* used in this class. The  edited files as they existed at the end of class can be [downloaded](https://github.com/front-end-foundations/session1/tree/fall2018-done) from the `fall2018-done` branch of this and all subsequent Github repositories (_"repos"_). Be sure to select the branch on Github _before_ downloading the zip.

[Text Book](https://www.packtpub.com/web-development/html5-and-css3-building-responsive-websites) -  _HTML5 and CSS3: Building Responsive Websites_ is available in paperback at the NYU bookstore or [online](https://www.packtpub.com/web-development/html5-and-css3-building-responsive-websites) in a variety of formats.

[Server Space](http://oit2.scps.nyu.edu) - `http://oit2.scps.nyu.edu`, you will be provided with server space on an NYU web server. Your username will be the first seven letters of your last name + the first letter of first name. e.g `jdoe`. (If your name is less than 7 characters, your username is your entire last name plus the first letter of your first name.)

Test to see if your account is active by entering `http://oit2.scps.nyu.edu/~<username>` into a browser (note the tilde`~`, be sure to replace `<username>` with your username).

Your password is your first initial plus your last initial plus 123890. e.g. `dd123890` and the computer name is `oit2.scps.nyu.edu`

You can upload and download files using SFTP (Secure File Transfer Protocol). Recommended free SFTP clients include [Cyberduck](https://cyberduck.io) and [Filezilla](https://filezilla-project.org). Note - you _must_ use port 22 or SFTP in order to connect.

When you log into your account you will see a number of files and folders. The `web` folder is where you place folders and files in order to make them accessible at `http://oit2.scps.nyu.edu/~<username>/`. This is where you will hand in your assignments.

Do not leave original copies of material on the server as accounts are deleted at the end of the semester.

## Homework

1. Download Sublime text and install [Package Control](https://packagecontrol.io/)
1. Install [Emmet](https://packagecontrol.io/packages/Emmet) into Sublime text using Package Control
1. Download the files as distributed in class from Github and, using the notes below, try to recreate the design we did in class from scratch
1. Examine the provided homework samples (in the `home-work-samples` folder) using Chrome's developer tools. Pick two or three visual formatting features that appeal to you and apply them to your page. Be sure to Google any CSS properties you are unfamiliar with.

Note: the finished files I was working on in class can be [downloaded](https://github.com/front-end-foundations/session1/tree/fall2018-done) from the `fall2018-done` branch of this repo for reference. Be sure to select the branch on Github _before_ downloading the zip.

## Additional Reading

These are good resources for absolute beginners and go into more depth in some areas than we will have time for in class. You should try to watch them over the first two weeks of the semester. Be sure to download the accompanying files in order to follow along on your own.

* Video: [HTML Crash Course for Absolute Beginners](https://youtu.be/UB1O30fR-EE), and the [accompanying files](https://www.youtube.com/redirect?redir_token=1Yb19FwXTj2Zp4L-bRWo-VIllCl8MTUxODAxNjc4OUAxNTE3OTMwMzg5&event=video_description&v=UB1O30fR-EE&q=http%3A%2F%2Fwww.traversymedia.com%2Fdownloads%2Fhtmlcheatsheet.zip)
* Video: [CSS Crash Course for Absolute Beginners](https://youtu.be/yfoY53QXEnI), and the [accompanying files](https://www.youtube.com/redirect?event=video_description&v=yfoY53QXEnI&redir_token=7uspCtsw-mSVQ-CRLJqyBuXp4B18MTUzNzIwOTU4MUAxNTM3MTIzMTgx&q=http%3A%2F%2Fwww.traversymedia.com%2Fdownloads%2Fcsscrashcourse.zip)

## Text Editors, Browsers and Developer Tools

In this class we will be using [Sublime Text](https://www.sublimetext.com/).

Other popular text editors you can try include:

* [Atom](https://atom.io/)
* [Visual Studio Code](https://code.visualstudio.com/)

In order to extend Sublime Text you need to install [Package Control](https://packagecontrol.io/) first. Once installed you can take advantage of a large assortment of [packages](https://packagecontrol.io/browse/popular).

(Note that in NYU labs, configuration changes are not saved after restart. You should only install Package Control, Emmet and any other Packages that might be useful to you _on your own computer_.)

## Browser Tools

Open the folder (`cmd-o`) `session1` in the text editor and then open `box-model-inspector/index.html` in Chrome. Right click on any text and choose `Inspect`.

No matter which browser you are working in, the inspector is your first line of defense when troubleshooting and should be kept open _at all times_ when you are working.

## The Three Pillars of Web Design

* Content (HTML) - uses HTML tags to semantically markup the contents 
* Appearance (CSS) - uses CSS rules to determine how the content will appear to the user
* Behavior (JavaScript) - uses scripts written in JavaScript to allow the user to interact with the content

Try:
* Click on the cat picture and note the changes in the document, how the inspector displays it, and the Console tab in the inspector
* Click on the link and note the change in the browser's address bar
* Force the link to hover using the inspector

## Separation of Concerns

The three pillars are an example of the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)

Another example is MVC (model, view, controller) - database, interface, busiiness logic

Concerns here are the different aspects of software functionality. For instance, in MVC, the business logic or _controller_ is a concern, and the interface or _view_ through which a person uses this logic is another. Changing the interface should not require changing the business logic code, and vice versa. This makes it possible to assign different roles and responsibilities to each area for workgroups.

### Semantics

HTML tags can be styled to look any way you want. They convey meaning to the code that comprises the document and help make it understandable. HTML tags are [semantically important](https://en.wikipedia.org/wiki/Semantic_HTML) - not stylistically important.

* Try: use the inspector to change the `div` tag to an `article` tag.

### User Agent Styles

User agent styles are the default styles for HTML elements. By default the browser has placed margins above and below the header, paragraph and on all four sides of the body. These default styles make sure that the content is understandable even in the absence of a style sheet.

### Block vs Inline

Most HTML tags or elements all have a default `display` property which is set to `block` which means that they create a rectangular region in the browser.

The "opposite" of block in HTML is inline. An example might be a piece of italicized text `<em>` or a link `<a>`. A `<span>` tag is used to create arbitrary inline elements.

* Try: use the inspector to set the em tag to display block.

The paragraph tag - `<p>` - creates a box and by default has space above and below it while the italicized text does not and simply flows along with the rest of the text.

A `<div>` tag is a block tag which is used to create a logical division in your code. It creates an arbitrary box in a browser but other than that has no display characteristics. `div` tags are useful but don't say anything about the content inside them. Use HTML5 [semantic tags](https://www.w3schools.com/html/html5_semantic_elements.asp) whenever possible.

### HTML, CSS and JavaScript Comments

In most editors the keyboard shortcut `cmd-/` will comment out a line or lines with the appropriate code:

* HTML: `<!-- -->`
* CSS: `/*  */`
* JavaScript: `/*  */` for multiline comments and `//` for single line comments

### The Box Model

Block elements are interpreted as a box in the browser. Boxes have other characteristics such as padding, borders and margins. Taken together these elements form the box model. You can view this in the inspector.

* Try: adding a 3em margin to the `em` tag with and without `display: block` and `display: inline-block`

Let's add padding, border and override the margins.

Edit `styles.css` to add:

```css
p {
  padding: 16px;
  margin: 1em;
  border: 3px solid #333;
  height: 200px;
  width: 80%;
}
```

Refresh the page and inspect the paragraph again. Note the changes in the inspector.

* Try: setting the height of the `p` to 3px in the inspector with `overflow: hidden;` and `overflow: auto;`

## CSS Syntax

CSS rules consist of a selector, a set of curly braces, and a series of properties and values separated by a full colon and terminated by a semi colon.

```css
selector {
  property1: value;
  property2: value;
}
```

The selector determines which HTML element will be selected.

The properties (there are many but we will be focusing on a few of the most useful at the outset) are set by the value after the full colon. These almost always have a unit such as `px`, `s`, `em` or `%`.

Note the drop down (triangle) next to padding, margin and border properties in the inspector. This are CSS shortcuts. Our border property could also be written in long form.

```css
border-style: solid;
border-color: #333;
border-width: 3px;
```

### Box Sizing

Boxes are additive by default - the amount of space they take up in the browser will be a combination of CSS width, padding and border properties (margins are outside the box model). 

There is another sizing method that is often prefered called `border-box`. This method calculates the border and padding within the width and is simpler to work with.

Add `box-sizing: border-box/content-box` to review box model options.

```css
p {
    ...
    box-sizing: border-box;
}
```

### Media Queries Demo

Add a media query to `styles.css`:

```css
@media (min-width: 500px) {
  p {
    border: 3px solid red;
  }
}
```

Resize the browser and note:

* overrides in the inspector
* `min-width` = greater than
* the css for `>` (greater than) 500px is _added_ to the styles when the condition is true.

Change it to:

```css
@media (max-width: 500px) {
  p {
    width: 100%;
  }
}
```

Note:

* the inspector overrides (cascade)
* `max-width` = less than
* the css for `<` (less than) 500px is _added_ to the styles when the condition is true.

### Debugging CSS with the inspector

* misspelling
* bad selectors
* missing units
* whitespace

## Exercise - Converting to Standards

Open the `Sushi` folder and `before.html` in an editor and examine the HTML. This is often referred to as tag soup as it makes little sense to humans looking at the code.

Open `index.html`. This is an html5 document that uses HTML tags semantically. Note the defaults for margins and padding used to display the body and the unordered list (`<ul>`).

Add a CSS declaration to `styles.css` as follows:

```css
body {
    margin: 12px;
    color: #333;
    font-family: Verdana, Arial, sans-serif;
}
```

and link it to `index.html` in the head:

```html
<link href="css/styles.css" media="all" />
```

## Google fonts

Google has a CDN (Content Delivery Network) offering [free fonts](https://fonts.google.com) for use in HTML documents. We'll use this as an example of using external stylesheets via @import and the `<link>` tag.

We will use [Lato](https://fonts.google.com/specimen/Lato) for our main text and [Lobster](https://fonts.google.com/specimen/Lobster) for our branding.

### Linking to a css file from css

```css
@import url('http://fonts.googleapis.com/css?family=Lato:300,400,700');
```

Add this to the top of our css (@import statements should always come first) to use the font within our stylesheet. 

Add to the body css rule:

```css
font-family: 'Lato', Verdana, Arial, sans-serif;
```

### Linking to a css file from html

THe html link tag:

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
```

In use:

```css
header {
  font-family: 'Lobster', cursive;
  font-weight: normal;
}
```

Note: the bold property belongs to the `h1` tag, not the `header` tag.

```css
header h1,
header h2 {
  font-weight: normal;
  font-size: 3rem;
}
header h2 {
  font-size: 2rem;
}
```

Note margin collapsing.

```css
header h1,
header h2 {
  font-weight: normal;
	font-size: 3rem;
	margin: 8px 0;
}
```

Note the use of weights in Lato:

```css
@import url('http://fonts.googleapis.com/css?family=Lato:300,400,700');
```

Use 400:

```css
h2 {
  font-weight: 400;
}
```

## Formatting the Navigation

Add a _class_ to the `<ul>` that will form the navigation for our page.

```html
<ul class="nav">
    <li><a href="#">Cuisines</a></li>
    ...
</ul>
```

By doing so we have created a name space that allows us to differentiate the two `<ul>` lists in `start.html` and apply two different styles.

Add the following to our style block:

```css
.nav {
  list-style: none;
  padding: 0;
}
.nav li {
  display: inline-block;
  margin-right: 10px;
}
.nav a {
  color: #fff;
  text-decoration: none;
  padding: 4px;
  display: block;
  background-color: #600;
}
.nav a:hover {
  color: #222;
  background-color: #f0dfb4;
}
```

Examine display options for making the buttons horizontal using block, float, inline-block, and flex.

Examine the inspector's color picker. Note the ability to force element hover state.

Add css to `nav a`:

```css
transition: all 0.5s linear;
```

Edit the animation using the inspector's animation settings.

To animate only one difference specify it instead of `all`:

```css
transition: background-color 0.5s linear;
```

## Absolutely Positioning the Navigation

_Edit_ the nav CSS rule to position it

```css
.nav {
  list-style: none;
  padding: 0;
  position: absolute;
  right: 0;
  top: 12px;
}
```

Add an `<aside>` tag around the table and list then add the following CSS:

```css
aside {
  position: absolute;
  top: 200px;
  left: 10px;
  width: 180px;
  background-color: #f0dfb4;
  padding: 6px;
  border: 1px solid #600;
}
```

Note how the text flows under the aside.

Add margin to move the article over to the right:

```css
article {
  margin: 0 20px 0 240px;
}
```

The four values for margin run clockwise from the top.

<!-- ### CSS Variables

(These)[https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables] allow us to store commonly used information as a variable for use throughout our css.

```
html {
  --bg-color: #f0dfb4;
}
```

```
.nav a {
  ...
  background-color: var(--bg-color);
}

aside {
  ...
  background-color: var(--bg-color);
}
``` -->

### Floating

Format the pull quote and image:

```css
blockquote {
  float: right;
  width: 40%;
  padding: 16px;
  font-size: 24px;
}
article img {
  float: right;
}
```

Note the float property and how the text wraps around it before and after we have defined a width. By default, the floated container shrinks to the width determined by the content.

Take a moment to resize the browser. Toggle the device button in the developer tools. Note: this is not a responsive design.

Add the device meta tag:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Toggle the device button in the developer tools again.

## Converting the document to fixed width

Currently our document flexes as we make the browser wider to makes use of all the available horizontal space. While flexibility is generally a good practice, many sites still use fixed widths to improve readability. cf [Wikipedia](https://en.wikipedia.org/wiki/Line_length) vs [The Guardian](https://www.theguardian.com)

Add wrapper `<div id="wrapper">` to entire content area (after the `<body>` tag and close it before the closing `</body>` tag) and add the following to our CSS style block.

```css
#wrapper {
  width: 840px;
}
```

vs.

```css
#wrapper {
  max-width: 840px;
}
```

Then center it in the browser.

```css
#wrapper {
  max-width: 840px;
  margin: 0 auto 0 auto;
  border: 1px solid #999;
}
```

Add a relative positioning instruction.

```css
#wrapper {
  position: relative;
  ...;
}
```

Note the impact the relative positioning has on the layout (toggle it on and off using the inspector). The two absolutely positioned elements (aside and .nav) previously had no positioning context and aligned themselves to the edges of the browser window. With the addition of the relative positioning to the wrapper they now become positioned relative to the wrapper box. The rule here is that absolutely positioned elements are positioned relative to their nearest positioned ancestor in the HTML tree. This is an important CSS design pattern and well will see it again.

## Adding color to our layout

Edit the CSS body rule to include ` background-color: #ddd;`:

```css
body {
		margin: 12px;
		color: #333;
		font-family: 'Lato', Verdana, Arial, sans-serif;
    background-color: #ddd;
}
```

Note that the wrapper's background is transparent and shows through to the gray applied to the body.

Let's add a white background to wrapper.

```css
#wrapper {
  ...
    background-color: #fff;
    margin: 12px;
}
```

Change margin to padding. Why is margin a poor choice here?

Note the body background color is grayed out in the inspector. Neither it nor the margin are inherited by other elements.

## Formatting the content

Note the h1's margin outside the containing elements (not part of the box model).

```css
header h1,
header h2 {
  font-weight: normal;
	font-size: 3rem;
	margin: 8px 0;
  color: #600;
}
header h2 {
	font-size: 2rem;
}
article h2 {
  font-weight: 400;
  color: #600;
  border-bottom: 1px solid #600;
}
```

Note - selector strength here. Note that the lack of namespacing allows this to effect the Matsu text as well.

Format elements in the list and table

```css
aside {
  position: absolute;
  top: 200px;
  left: 10px;
  width: 180px;
  background-color: #f0dfb4;
  padding: 6px;
  border: 1px solid #600;
  font-size: 0.875rem;
}

aside th {
  text-align: right;
}

aside ul {
  list-style: none;
  margin: 0.5rem;
  padding: 0;
}
```

### Inline, In Page & External CSS

We've already seen the link tag and @import methods of adding css to our document. Let's examine all the ways to add CSS to an HTML document:

* Inline via the HTML `style=` attribute
* In page via the HTML `<style>` tag
* As an external .CSS file via linking (HTML `<link>` tag)
* As an external .CSS file via importing (CSS `@import` statements)

Inline styles are inefficient:

```html
<p style="margin-top: 12px;">
```

However this method is often used when dynamically changing the page after it has been loaded in the browser.

Try using the inspector to inspect a dynamic page (such as [http://www.w3schools.com/jquery/jquery_animate.asp](http://www.w3schools.com/jquery/jquery_animate.asp)). Note how it displays animation by temporarily highlighting inline css in purple.

It is best practice not to use the alternative:

```html
<style>
  @import url("css/styles.css");
</style>
```

Note: ideally, all your stylesheets should be in one file to reduce the number of requests the browser needs to make to the server (a major cause of slow loading sites).

## Some simple CSS3 Enhancements

As work on a new version of CSS progressed it was found that releasing an entirely new specification would be too cumbersome so the standards committee [http://W3C.org](http://W3C.org) decided to break the process into modules. (For compatibility and advice see [http://CanIuse.com](http://CanIuse.com).)

Some of the earlier CSS 3 specifications include provisions for visual effects such as rounded corners, drop shadows and gradients. A useful page that allows you to become familiar with these enhancements is [http://css3generator.com/](http://css3generator.com/).

Add rounded corners to the info div. (See [https://developer.mozilla.org/en/CSS/border-radius](https://developer.mozilla.org/en/CSS/border-radius) for specifications.)

```css
aside {
  ...
    border-radius: 6px;
}
```

Add a drop shadow to the CSS for the info div using the inspector (...).

```css
aside {
  box-shadow: 3px 4px 3px 2px #d6d6d6;
}
```

Add a box shadow to the wrapper's CSS:

```css
box-shadow: 10px 10px 20px #ddd;
```

<!-- Add CSS 3 Gradients. (See: http://www.colorzilla.com/gradient-editor/) -->

## Highlight one of the tabs

A simple way to create navigation on a web site.

1 Add a class to body tag so we know what kind of page this is.

```html
<body class="p-review">
```

2 Add a list item to the nav list with a class of review-link.

```html
<li><a class="t-review" href="#">Reviews</a></li>
```

3 Add the following to our CSS block:

```css
.review-page .review-link {
    color: #fff;
    background:#600;
}
```

Note that the tab is now highlighted.

### Adding Simple Responsiveness

At the bottom of the stylesheet

```css
@media print {
  * {
    display: none !important;
  }
}

@media all and (max-width: 800px) {
  .nav {
    top: 0;
    left: 0;
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
  padding: 0;
}
.nav li {
  flex: 1;
  background-color: #f0dfb4;
  list-style: none;
}
```

### Notes

slack
daniel.deverell@nyu.edu