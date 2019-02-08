# I - Intro & Converting to Standards

## Resources

[Email](mailto:daniel.deverell@nyu.edu) - `daniel.deverell@nyu.edu`

[Syllabus](http://daniel.deverell.com/syllabus.pdf) - `http://daniel.deverell.com/syllabus.pdf`

### Github

[Github](https://github.com/front-end-foundations) - `https://github.com/front-end-foundations`, is the source for _all files_ used in this class. Each class's activities will be documented in the readme file.

Please keep the page open in a tab during class for reference and in order to copy and paste code.

The edited files as they existed at the end of class can be downloaded from the `*-done` branch of this and all subsequent Github repositories (_"repos"_). Be sure to select the branch on Github _before_ downloading the zip.

### Textbook (optional)

A [text Book](https://www.packtpub.com/web-development/html5-and-css3-building-responsive-websites) - _HTML5 and CSS3: Building Responsive Websites_ is available in paperback [online](https://www.packtpub.com/web-development/html5-and-css3-building-responsive-websites) in a variety of formats. _This text is optional but recommended for those who would like some additional material._ Online reading and videos will be assigned.

### NYU Server

[Server Space](http://oit2.scps.nyu.edu) - `http://oit2.scps.nyu.edu`, you will be provided with server space on an NYU web server.

Your username will be the first seven letters of your last name + the first letter of first name. e.g `jdoe`. (If your name is less than 7 characters, your username is your entire last name plus the first letter of your first name.)

First, test to see if your account is active by entering `http://oit2.scps.nyu.edu/~<username>` into a browser (note the tilde`~`, be sure to replace `<username>` with your username).

Your password is your first initial plus your last initial plus 123890. e.g. `dd123890` and the computer name is `oit2.scps.nyu.edu`.

You can upload and download files using SFTP (Secure File Transfer Protocol). Recommended free SFTP clients include [Cyberduck](https://cyberduck.io) and [Filezilla](https://filezilla-project.org). Note - you _must_ use port 22 or SFTP in order to connect via SFTP.

When you log into your account you will see a number of files and folders. The `web` folder is where you place folders and files in order to make them accessible at `http://oit2.scps.nyu.edu/~<username>/`. This is where you will hand in your assignments.

Do not leave original copies of material on the server as accounts are deleted at the end of the semester.

## Homework

Homework should be handed in by uploading the files to the NYU server and alerting me via email.

<!-- 1. Download Sublime text and install [Package Control](https://packagecontrol.io/)
1. Install [Emmet](https://packagecontrol.io/packages/Emmet) into Sublime text using Package Control -->

## This Week's Homework

1. Download the files as distributed in class from Github and, using the notes below, try to recreate the design we did in class from scratch
1. Examine the provided homework samples (in the `home-work-samples` folder) using Chrome's developer tools. Pick two or three visual formatting features that appeal to you and apply them to your page. Be sure to Google any CSS properties you are unfamiliar with.

As noted above, the "end state" files (the files I was working as they were at the end of class) can be downloaded from the `fall2019-done` branch of the repo for reference. Be sure to select the branch on Github _before_ downloading the zip.

### Additional Reading

These are good resources for absolute beginners and go into more depth in some areas than we will have time for in class. You should try to watch them over the first two weeks of the semester. Be sure to download the accompanying files in order to follow along on your own.

- Video: [HTML Crash Course for Absolute Beginners](https://youtu.be/UB1O30fR-EE), and the [accompanying files](https://www.youtube.com/redirect?redir_token=1Yb19FwXTj2Zp4L-bRWo-VIllCl8MTUxODAxNjc4OUAxNTE3OTMwMzg5&event=video_description&v=UB1O30fR-EE&q=http%3A%2F%2Fwww.traversymedia.com%2Fdownloads%2Fhtmlcheatsheet.zip)
- Video: [CSS Crash Course for Absolute Beginners](https://youtu.be/yfoY53QXEnI), and the [accompanying files](https://www.youtube.com/redirect?event=video_description&v=yfoY53QXEnI&redir_token=7uspCtsw-mSVQ-CRLJqyBuXp4B18MTUzNzIwOTU4MUAxNTM3MTIzMTgx&q=http%3A%2F%2Fwww.traversymedia.com%2Fdownloads%2Fcsscrashcourse.zip)

<!-- ## Text Editors, Browsers and Browser Developer Tools -->

<!-- In this class we will be using [Sublime Text](https://www.sublimetext.com/).

Other popular text editors you can try include:

- [Atom](https://atom.io/)
- [Visual Studio Code](https://code.visualstudio.com/)

In order to extend Sublime Text you need to install [Package Control](https://packagecontrol.io/) first. Once installed you can take advantage of a large assortment of [packages](https://packagecontrol.io/browse/popular).

(Note that in NYU labs, configuration changes are not saved after restart. You should only install Package Control, Emmet and any other Packages that might be useful to you _on your own computer_.) -->

## Developer Tools

Download the zip file from this page using the green download button.

Open the folder (`cmd-o`) `session1-master` in the text editor.

Open `box-model-inspector/index.html` in Google Chrome. Right click on any text and choose `Inspect`.

No matter which browser you are working in, the inspector is your first line of defense when troubleshooting and should be kept open _at all times_ when you are working - seriously.

The shortcut for opening the developer tools is `command-shift-c`.

## Three Pillars of Web Design

This simple page illustrates the three pillars of the web - content, appreance and behavior - and together with the accompanying CSS and JavaScript, is an example of the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) - an important principle in programming.

- Content (HTML) - uses HTML to _semantically_ markup the contents
- Appearance (CSS) - uses CSS to determine how the content will appear to the user
- Behavior (JavaScript) - uses JavaScript to control how the pages works and allow the user to interact with the content

Try:

- Examine elements in the browser with the Elements and Styles dev tools panels open
- Click on the cat picture and note the changes in the document, how the Elements inspector displays the number, and what happens in the Console tab
- Click on the link and note the change in the browser's address bar
- Force the link to hover using the inspector
  <!-- - Use multiple cursors to change a variable -->

Note that the CSS is linked in the head of the document and the JavaScript is the last item in the HTML just above the closing body tag.

<!-- ## Separation of Concerns

This sample page illustrates the three pillars of the web and comprise an example of the [separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns) - an important principle in programming.

Another example of the separation of concerns might be MVC (model, view, controller) which corresponds to database, interface, and business logic.

Concerns here are the different aspects of software functionality. For instance, in MVC, the business logic or _controller_ is a concern, and the interface or _view_ through which a person uses this logic is another. Changing the interface should not require changing the business logic, and vice versa. This makes it possible to assign different roles and responsibilities to each area for a large organization. -->

### HTML and Semantics

HTML tags convey _meaning_ to the content that makes up the document to help make it understandable. HTML tags can be made to look anyway you want. They are [semantically](https://en.wikipedia.org/wiki/Semantic_HTML) - not stylistically - important.

Try:

- Use the inspector to change the `div` tag to an `article` or aside tag

There are only a small [number](https://www.w3schools.com/tags/) of html tags but each has a meaning.

### User Agent Styles

`User agent styles` are the default styles for HTML elements. By default the browser places margins above and below the header, paragraph and on all four sides of the body. These default styles make sure that the content is understandable even in the absence of a style sheet. You will typically build on top of these.

### Block vs Inline

Most HTML tags or elements all have a default `display` property set to `block` which means that they create a rectangular region in the browser.

The "opposite" of block in HTML is inline. An example might be a piece of italicized text `<em>` or a link `<a>`. A `<span>` tag is used to create arbitrary inline elements.

The paragraph tag `<p>` creates a box (block) and by default has space above and below it while the italicized text (inline) does not and simply flows along with the rest of the text.

A `<div>` tag is a block tag which is used to create a logical division in your code. It creates an arbitrary box in a browser but other than that has no display characteristics. `div` tags are useful but don't say anything about the content inside them. Use HTML5 [semantic tags](https://www.w3schools.com/html/html5_semantic_elements.asp) whenever possible.

Try:

- Use the inspector to set the em tag to `display: block`

### HTML, CSS and JavaScript Comments

In most editors the keyboard shortcut `cmd-/` will comment out a line or lines with the appropriate code:

- HTML: `<!-- -->`
- CSS: `/* */`
- JavaScript: `/* */` for multiline comments and `//` for single line comments

Try:

- Comment on and off the meta tag in the HTML file and viewing the result in the browser with the Toggle device button on and off
- Comment out a CSS property and a CSS rule
- Comment out the first line of JavaScript - click on the kitten and note the error

### The Box Model

Block elements are interpreted as a box in the browser. Boxes have properties such as padding, borders, position and margins. Taken together these elements form the box model.

Try:

- Adding `margin`, `padding` and `height` to the `em` tag with and without `display: block` and `display: inline-block` noting the box model graphic in the inspector

## CSS Syntax

CSS rules consist of a selector, a set of curly braces, and a series of properties and values separated by a full colon and terminated by a semi colon.

```css
selector {
  property: value;
  property: value;
}
```

The selector determines which HTML element will be selected.

The properties are set by the value after the full colon. These almost always have a unit such as `px`, `s`, `em` or `%`.

Let's add padding, border and override the margins.

Edit `styles.css` to add:

```css
p {
  padding: 16px;
  margin: 1em;
  border: 3px solid #333;
  height: 100px;
  width: 80%;
}
```

Refresh the page and inspect the paragraph again. Note the changes in the inspector.

<!-- Try:

- Setting the height to 4px with `overflow: hidden;` and `overflow: auto;` -->

Note the drop down (triangle) next to padding, margin and border properties in the inspector. This indicates a CSS shortcut. Click on it. Our border property could also be written in long form.

```css
border-style: solid;
border-color: #333333;
border-width: 3px;
```

Try:

- `border-top-style: dotted;`

### Box Sizing

Examine the paragraphs in the inspector. Box dimensions are additive by default - the amount of space they take up in the browser will be a combination of the amount of content, width, padding and border properties (margins are outside the box model).

There is another sizing method called `border-box`. This method calculates the border and padding within the width and is simpler to work with.

Add `box-sizing: border-box/content-box` to review box model options.

```css
p {
  box-sizing: border-box;
  ...;
}
```

Note the the height is now exactly 100px.

Try:

- Setting the width of the paragraphs to 400px
- Then comment out the box sizing property and examine the width and height using the inspector

### Media Queries Demo

Add a media query to `styles.css`:

```css
@media (min-width: 700px) {
  p {
    border: 3px solid red;
    width: 600px;
  }
}
```

Resize the browser and note:

- overrides in the inspector
- `min-width` means "greater than"
- the css for `>` (greater than) 700px is _added_ to the styles when the condition is true.

Change it to use `max-width`:

```css
@media (max-width: 700px) {
  p {
    border: 3px solid red;
    width: 600px;
  }
}
```

Note:

- `max-width` means "less than"

In the first case (`min-width`) the styles are added when the screen is small. In the second the styles are added when the screen is wide. This will be important when we start optimizing our CSS for devices with different screen sizes.

### Debugging CSS with the inspector

By keeping an eye on the inspector you will quickly see when something has gone wrong with:

- misspelling
- bad or inapropriate selectors
- missing units
- and more

## Hands On Exercise - Sushi

A finished version of this exercise can be [viewed here](http://oit2.scps.nyu.edu/~devereld/session1/Sushi/). Be sure to resize the browser to see the responsive features.

In this exercise we use the contents of the Sushi folder to begin looking at layout with the following properties:

- Margin and Padding
- Display
- Floats
- Overflow
- Position
- Visibility
- Z-Index

Examine `before.html`. This is often referred to as tag soup as it makes little sense to humans looking at the code. Note the preponderance of visual markup code in the file. This is how html was written from the late 90's to about a decade ago.

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
<link rel="stylesheet" href="css/styles.css" media="all" />
```

## Google fonts

Google has a CDN (Content Delivery Network) offering [free fonts](https://fonts.google.com) for use in HTML documents. We'll use this as an example of using external stylesheets via @import vs the `<link>` tag.

We will use [Lato](https://fonts.google.com/specimen/Lato) for our main text and [Lobster](https://fonts.google.com/specimen/Lobster) for our branding.

### Linking to a css file from css

```css
@import url('http://fonts.googleapis.com/css?family=Lato:300,400,700');
```

Add this to the _top_ of our css (@import statements should always come first) to use the font within our stylesheet.

Edit the body css rule:

```css
font-family: 'Lato', Verdana, Arial, sans-serif;
```

Link to the Google fonts css file from html:

```html
<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" />
```

In use:

```css
header {
  font-family: 'Lobster', cursive;
  font-weight: normal;
}
```

Note: `h1` tags are bold by default but Lobster has no bold version. Thus we use `font-weight: normal` to keep the browser from applying bold.

```css
header h1,
header h2 {
  font-size: 4rem;
  margin: 8px 0;
}
header h2 {
  font-size: 2rem;
}
```

`header h1` is a _descendant selector_.

Here we apply the same properties to multiple items using a comma in the selector and then override one of the properties. The application of font family to the entire header region is an example of the "C" in CSS - [the cascade](https://css-tricks.com/the-c-in-css-the-cascade/). In order to use the cascade effectively we will look at _specificity_ as we proceed.

Note the _margin collapsing_ beween the H1 and H2 tags.

## Formatting the Navigation

Note that we have two unordered lists in our page. Add a _class_ to the `<ul>` that will form the navigation for our page so we have a name space that will allow us to target it exclusively.

```html
<ul class="nav">
  <li><a href="#">Cuisines</a></li>
  ...
</ul>
```

We have created a name space that allows us to differentiate the two `<ul>` lists in `start.html` and apply different styles.

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

<!-- We will examine display options for making the navigation elements horizontal using float and flex. -->

Note the use of a colon to target the hover state. This is an example of a _pseudo_ selector. So called because, unlike other selectors, it doesn't really target an HTML tag.

Examine the inspector's color picker. Also, note again the ability to force element hover state.

Add css to `nav a`:

```css
transition: all 0.5s linear;
```

Transition is another CSS [short cut](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions). Try editing the animation's timing using the inspector's animation settings.

Note: to animate only one difference specify it instead of `all`:

```css
transition: background-color 0.5s linear;
```

## Absolute Positioning

_Edit_ the nav CSS rule to position it

```css
.nav {
  list-style: none;
  padding: 0;
  position: absolute;
  right: 0;
  top: 24px;
}
```

Examine the nav ul in the inspector. Note the coordinate system.

Tooggle the position property on and off in the inspector.

Add an `<aside>` tag around the table and the unordered list then add the following CSS:

```css
aside {
  position: absolute;
  top: 200px;
  left: 24px;
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
  font-size: 24px;
}
article img {
  float: right;
}
```

Note the float property and how the text wraps around it before and after we have defined a width. By default, the floated container shrinks to the width determined by the content. [Live example](https://theintercept.com/2019/02/04/google-ai-project-maven-figure-eight/) - use the inspector to examine the blockquote.

## Pseudo Elements vs Pseudo Classes

A pseudo-class is a selector that assists in the selection of something that cannot be expressed by a simple selector, for example `:hover`. A pseudo-element allows you to create items that do not normally exist in the document tree such as `::before` or `::first-line`.

```css
blockquote::before {
  content: '“';
  font-size: 4rem;
  font-family: serif;
  color: #333;
  line-height: 0.1em;
  vertical-align: -0.4em;
  color: #600;
}
```

Or

```css
article p::first-line {
  font-weight: bold;
}
```

## Relative Positioning

Currently our document flexes as we make the browser wider to make use of all the available horizontal space. While flexibility is a good practice, we need to understand more about the drawbacks of fixed widths.

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

## Adding More Design to Our layout

Edit the CSS body rule to include `background-color: #ddd;`:

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
  background-color: #fff;
  padding: 12px;
  ...;
}
```

Note the body background color is grayed out in the inspector. Neither it nor the margin are inherited by other elements.

Add a box shadow to the wrapper CSS:

```css
#wrapper {
  box-shadow: 6px 6px 10px #999;
  ...;
}
```

Note the chip in the styles inspector that allows you to finesse the box shadow.

Make it a glow:

```css
#wrapper {
  box-shadow: 0px 0px 6px 2px #aaa;
  ...;
}
```

## Formatting the content

<!-- Note the h1's margin outside the containing elements (not part of the box model). -->

```css
header h1,
header h2 {
  color: #600;
  ...;
}

article h2 {
  font-weight: 600;
  color: #600;
  border-bottom: 1px dotted #600;
}
```

<!-- Note - selector strength here. Note that the lack of namespacing allows this to effect the "Geido" text as well. -->

Format elements in the list and table:

```css
aside {
  font-size: 0.875rem;
  box-shadow: 3px 3px 3px #ddd;
  border-radius: 4px;
  ...;
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

### A Note on Inline CSS

We've already seen the link tag and @import methods of adding css to our document.

- As an external .CSS file via linking (HTML `<link>` tag)
- As an external .CSS file via importing (CSS `@import` statements)

Here are some additional ways to add CSS to an HTML document:

- Inline via the HTML `style=` attribute
- In page via the HTML `<style>` tag

The style tag applies to a specific page only. Since we are coding a single page here we could have used a `<style>` block in the head of our document.

Inline styles are inefficient because they apply to a single element on a single page:

```html
<p style="margin-top: 12px;"></p>
```

However this method is often used when dynamically changing the page after it has been loaded in the browser.

Try using the inspector to inspect a dynamic page (such as [http://www.w3schools.com/jquery/jquery_animate.asp](http://www.w3schools.com/jquery/jquery_animate.asp)). Note how it displays animation by temporarily highlighting inline css in purple.

Ideally, all your stylesheets should be located in a single file to reduce the number of requests the browser needs to make to the server (a major cause of slow loading sites).

<!-- ## Additional CSS3 Enhancements

As work on new versions of CSS progressed it was found that releasing an entirely new specification would be too cumbersome so the standards committee [http://W3C.org](http://W3C.org) decided to break the process into modules. (For compatibility and advice see [http://CanIuse.com](http://CanIuse.com).)

Some of the earlier CSS 3 specifications included provisions for visual effects such as rounded corners, drop shadows and gradients. A useful page that allows you to become familiar with these enhancements is [http://css3generator.com/](http://css3generator.com/).

Newer CSS modules that we will look at include CSS Grids and Flexbox.

Add rounded corners to the info div and buttons. (See [https://developer.mozilla.org/en/CSS/border-radius](https://developer.mozilla.org/en/CSS/border-radius) for specifications.)

```css
aside {
  border-radius: 6px;
  ...;
}
``` -->

<!-- ```css
nav a {
  border-radius: 3px;
  ...;
}
``` -->

<!-- Add a [drop shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow) to the CSS for the info div:

```css
aside {
  box-shadow: 3px 4px 6px #d6d6d6;
  ...;
}
```

Add a box shadow to the `wrapper`'s CSS:

```css
box-shadow: 10px 10px 20px #aaa;
``` -->

<!-- Add CSS 3 Gradients. (See: http://www.colorzilla.com/gradient-editor/) -->

<!-- ## Highlight one of the tabs

A simple way to create navigation on a web site.

1 Add a class to body tag so we know what kind of page this is.

```html
<body class="p-review"></body>
```

2 Add a list item to the nav list with a class of review-link.

```html
<li><a class="t-review" href="#">Reviews</a></li>
```

3 Add the following to our CSS block:

```css
.review-page .review-link {
  color: #fff;
  background: #600;
}
```

Note that the tab is now highlighted. -->

## A Quick Reality Check

Take a moment to resize the browser.

Toggle the device button in the developer tools.

Add the device meta tag to the head of the HTML:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

Toggle the device button in the developer tools again. This is not a responsive design.

### Adding Simple Responsiveness

Responsive design uses media queries in conjunction with a flexible layout to allow us to adapt the page to various devices.

The first media query for most designers was the _print_ media query.

Copy and paste this at the bottom of the stylesheet:

```css
@media print {
  * {
    display: none !important;
  }
}
```

Try printing the document to see what happens.

We will use `max-width` and add CSS that overrides undesirable features to correct the display on smaller devices.

Begin by removing the margin from the body and fixing the nav to the top of the screen.

```css
@media all and (max-width: 800px) {
  body {
    margin: 0;
  }
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
  }
}
```

Use the flexbox CSS module on the nav:

```css
@media all and (max-width: 800px) {
  body {
    margin: 0;
  }
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    display: flex;
  }
  .nav li {
    margin: 0;
    flex-grow: 1;
  }
}
```

Add adjustments to the aside, article and blockquote:

```css
@media all and (max-width: 800px) {
  body {
    margin: 0;
  }
  header h1 {
    line-height: 1;
    margin-top: 1rem;
  }
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    display: flex;
  }
  .nav li {
    margin: 0;
    flex-grow: 1;
  }
  .nav li a {
    border-radius: 0;
  }
  aside {
    position: static;
    float: none;
    margin-right: 20px;
  }
  article {
    margin-left: 0;
  }
  blockquote {
    width: 100%;
    float: none;
    margin: 0;
  }
}
```

<!-- ### Using Flexbox (optional - demo only)

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
-->

### Notes

CodePen [Intro-margin-auto]()

```html
<div class="container">
  <div class="inner">
  Hello
  </div>
</div>
```

```css
.container {
  width: 300px;
  height: 200px;
  border: 3px solid red;
  margin: 0 auto;
}
.inner {
  width: 150px;
  height: 100px;
  border: 2px solid black;
  margin: 0 auto;
}
```

CodePen [Intro-position](https://codepen.io/DannyBoyNYC/pen/YBYyoq)

```html
<div class="container">
  <div class="inner"></div>
</div>
```

```css
div {
  width: 200px;
  height: 200px;
  border: 20px solid;
  position: relative;
  box-sizing: border-box;
}

.inner {
  width: 100px;
  height: 100px;
  position: absolute;
  right: 0;
  border-color: red;
}
```

CodePen [Intro-float](https://codepen.io/DannyBoyNYC/pen/pGpgyQ)

```html
<div class="container">
  <div class="inner">Hello</div>
</div>
```

```css
div {
  width: 200px;
  border: 20px solid;
}

.inner {
  width: 100px;
  height: 100px;
  border-color: red;
  float: right;
}
```

CodePen [Intro-flexbox](https://codepen.io/DannyBoyNYC/pen/QYaNab)

```html
<div class="container">
  <nav>
    <ul>
      <li><a href="#">Cuisines</a></li>
      <li><a href="#">Recipes</a></li>
      <li><a href="#">Reviews</a></li>
      <li><a href="#">Delivery</a></li>
    </ul>
  </nav>
</div>
```

```css
ul {
  margin: 0;
  padding: 6px;
  /*   display: flex; */
}

ul li {
  display: inline;
  /*   flex-grow: 1 */
}

ul a {
  padding: 8px;
  border: 1px solid #333;
}
```
