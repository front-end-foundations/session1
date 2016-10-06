#FOUNDATIONS Session One


##The Doctype

A doctype is the first piece of text in an HTML document and the first thing a browser sees when it attempts to display (or 'parse') your page. It tells the browser which version of HTML your are using and how it should render the code. 

```<!doctype html>```

###Block and Inline

HTML tags or elements all have a default property - “display“ - which is either block or inline.

Most HTML elements are block elements which means that they create a rectangular region in the browser. These are part of the box model upon which all web page rendering is based. We'll see these boxes using the inspector.

The "opposite" of block in HTML is inline. An example might be a piece of italicized text or a link inside a paragraph. The paragraph tag - `<p>` - creates a box and typically has space above and below it while the italicized text does not and simply flows along with the rest of the text.

A `<div>` tag is a special block tag which is used to create a logical division in your code. It creates an arbitrary box in a browser but other than that has no display characteristics. 

A `<span>` tag is used to create arbitrary inline elements.

We shall see examples of these tags in action shortly.

###The Box Model

Block elements are interpreted as a box by the browser. But boxes have other characteristics such as spacing, borders and margins. Taken together these elements form what is called the box model.

##The Browser and Developer Tools

Despite recent moves by Microsoft - Chrome, Safari, and Firefox are still the browsers of choice for web designers. One of the reasons for this is their excellent developer tools. 

You should take some time to familiarize yourself with thier full functionality. For now the only piece of functionality you need is to be able to right or control click on a portion of the page in the browser and select Inspect from the resulting pop up menu.

The inspector is your first line of defense when troubleshooting.

###User Agent Styles

User agent styles are the default styles for HTML elements.

Open box-model.html in Chrome, right click on the text and select Inspect.
￼
By default the browser has placed a 16px margin above and below the paragraph. 
Let's add padding, border and override the margins.

```html
<style type="text/css" media="screen">
p { 
padding:12px; 
margin:6px; 
border:1px solid #333;
height:200px;
width: 300px;
}
</style> 
```

Refresh the page and inspect the paragraph again. You should see the changes in the inspector’s Style and Layout tabs.
Add `box-sizing: border-box/content-box` to review box model options. (We will use the box-sizing property in future lessons.)
```html
<style type="text/css" media="screen">
p { 
padding:12px; 
margin:6px; 
border:1px solid #333;
height:200px;
width: 300px;
box-sizing:border-box; 
}
</style>
```

##CSS syntax, whitespace and comments

CSS rules consist of a selector, a set of curly braces, and a series of property(s) and values separated by a full colon and terminated by a semi colon.

```css
selector { property1: value; property2: value; }
```
e.g.

```css
p { color:#000; font-family:verdana, sans-serif; }
```

The selector determines which HTML tag will be selected. The properties (there are many but we will be focusing on a few of the most useful at the outset) are set by the value after the full colon. These almost always have a unit when used for measurements.

Whitespace and line breaks can be used to make the CSS rule more readable but are often removed before release to optimize file size.

```css
selector { 
  property1: value;
  /* property2: value; */
  property3: value;
}
```

Note the border property:

```css
p { border:1px solid #333; }
```

This is a shortcut and could also be written in long form.

```css
border-style: solid; 	border-color: #f00; 	border-width: 4px;
```

We will see many CSS shortcuts as we proceed.

#Exercise - Converting to Standards

Open before.html and examine the HTML. Then examine start.html. See the difference? The latter is a more standardized document that uses HTML tags semantically. The former is often referred to as tag soup as it makes little sense to humans looking at the code.

Examine start.html in the inspector to display the default (user agent) styling. Note the defaults for margins and padding used to display the unordered list (`<ul>`).

Add a CSS block within the `<head> `of start.html as follows:

```html
<style type="text/css"> 
	body { 	
		margin: 0; 	color: #333; 
		font-size: 12px; 
		font-family: Verdana, Arial, Helvetica, sans-serif; 
		}
 </style>
```

##Formatting the Navigation

Add a nav class to the `<ul>` that will form the navigation for our page.

```html
<ul class="nav">
	<li><a href="#">my profile</a></li>
	...
</ul>
```

By doing so we have created a name space that allows us to differentiate the two `<ul>` lists in start.html and apply two different styles.

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
``

Edit the nav CSS rule to position it

```css
.nav {
	list-style:none;
	position: absolute;
	right:0;
	top:60px; }
Add a div around the table and list and give it an ID info then add the following CSS
#info {
  position: absolute; 
  top: 120px; 
  left: 10px; 
  width: 140px; 
  background-color: #F0DFB4; 
  padding: 6px;
  border: 1px solid #600; 
}
```

Note how the text flows under the #info div. 

Add a article tag before `<h2>Matsu</h2>` and close it at the end of document before the `</body>`. Note that this does not effect the display of the document.

Add margin to review to move it over to the right:

```css
article {
  margin: 0 20px 0 180px;
}
```

Note that this is another CSS short cut. The four values run clockwise from the top.

Format the pull quote and image:

```css
blockquote  {
  float: right; 
  width: 40%;
  padding: 16px; 
  font-size: 18px; 
}
article img {
	float:  right;
}
```

Note the float property and how the text wraps around it before and after we have defined a width. By default, the floated container shrinks to the width determined by the content.

##Converting the document to fixed width

Currently our document is flexible width and makes use of all the available horizontal space. While flexibility is generally considered good practice, many sites are fixed width.

Add wrapper `<div id="wrapper">` to entire content area (after the `<body>` tag and close it before the closing `</body>` tag) and add the following to our CSS style block.

```css
#wrapper {
	width: 760px;
}
Then center it in the browser.
#wrapper {
	width: 760px;
	margin: 0 auto 0 auto;
}
Add a relative positioning instruction.
#wrapper {
	position: relative;
	width: 760px;
	margin: 0 auto 0 auto;
}
``

Note the impact the relative positioning has on the layout (toggle it on and off using the developer’s tools). The two absolutely positioned elements (#info and .nav) previously had no positioning context and aligned themselves to the edges of the browser window. With the addition of the relative positioning to the wrapper they now become positioned relative to the wrapper box. The rule here is that absolutely positioned elements are positioned relative to their nearest positioned ancestor in the HTML tree. This is an important CSS design pattern and well will see it again.

##Adding color to our layout

Edit the CSS body rule.

```css
body { 	
	margin:0; 
	font-size: 12px; 
	font-family: Verdana, Arial, Helvetica, sans-serif; 	background-color: #ddd;
	color:#333; 
}
```

Note that the wrapper's background is transparent and shows through to the gray applied to the body. 
Let's add a white background to wrapper.

```css
#wrapper {
	position: relative;
	width: 760px;
	margin: 0 auto 0 auto;
	background-color: #fff;
}
```

##Formatting the content

```css
h2 {
  color: #600; 
  font-size: 16px;
  /* or 1em 
     target / context = result */
  margin-top: 20px;
}
```

Add a summary class to "bottom line" p:

```html
<p class="summary"><strong>Bottom Line:</strong>
```

Add CSS to format it:

```css
.summary {
  font-size: 14px; 
  border-bottom: 1px dotted #600;
}
```

Format elements in the list and table

```css
#info th {text-align: right;}

#info ul {
  list-style: none; 
  margin: 1em; 
  padding: 0;
}
```

##Formatting the Mast Head

Add a `<header>` tag around the h1 and h2 at the top of the document.

```html
<header>
  <h1>Cleveland Eats</h1>
  <h2>A Guide to Fine Northeast Ohio Dining</h2>
</header>
```

Format the branding div:

```css
#header {
  height:120px; 
}
```
Edit the CSS in preparation for absolutely positioning its children.

```css
#header {
  height:120px;
  position:relative;
}
```

Add

```css
#header h1 {
	position: absolute;
	top: 10px;
	left: 10px;
}
#header h2 {
	position: absolute;
	top: 50px;
	left: 10px;
}
```

Use the developer tool layout inspector to position the position the h2 and h1 header elements and transfer the code into your CSS.

Use positioning to reposition up the info and nav elements.
￼
Clean up the code formatting in Sublime by using the Command Palette and searching for Reindent Lines.
Inline, In Page & External CSS

There are three ways to add CSS to an HTML document:

* Inline via the HTML style attribute
* In page via the HTML style tag
* As an external .CSS file via linking (HTML <link> tag)
* As an external .CSS file via importing (CSS @import statements)

We will be looking at all three methods but for now note that method one is inefficient as it requires each individual element on the page to have its own styling:

```html
<p style="margin-top: 12px;">
```

Whereas this in a CSS style sheet would apply to all paragraphs:

```css
p { margin-top:12px; }
```

However, this method is perfectly acceptable when dynamically changing the page after it has been loaded in the browser. 
Try using the inspector to inspect a dynamic site (such as http://www.w3schools.com/jquery/jquery_animate.asp). Note how Firebug displays dynamic changes to the HTML by temporarily highlighting them in yellow.

Remove the CSS from the head of the document and paste it into a new text document. Save it in a new css directory calling it review.css. We have two options here: link to our CSS file using an HTML tag, or to use a CSS @import statement.

```html
<link href="css/review.css" rel="stylesheet" media="all" />
```

```css
<style>
  @import url('css/review.css');
</style>
```

##Converting the layout to use floats

We used absolute positioning to create our layout. Now that you have been introduced to floats we will convert our layout to use them instead of absolute positioning. To do so we will need to change the HTML ordering of the layout.

Remove the `position:relative; declaration` from the wrapper CSS.

The absolutely positioned items are now positioned relative to the browser window.

Remove the absolute positioning from the nav and add the float declaration.

```css
.nav { 
	list-style-type:none; 
	padding:0; 
	float:right;
}
```
Note the new position of the nav element in the browser.

Edit the HTML, moving the entire nav block to just below the wrapper. The nav element is now rendered first and floated to the left hand side of the wrapper.

Remove the absolute positioning elements from the #info div.

The info div is now floated to the left of the review div.

Edit the HTML, moving the entire info block so it appears just above the `<article>`.

Now that it is outside the article the info block is positioned to the left of its parent (the wrapper).

Float the info div to the left

```css
float:left;
```

There may some additional adjustments required to correct the spacing of elements.

##Some simple CSS 3 Enhancements

As work on a new version of CSS progressed it was found that releasing an entirely new specification would be too cumbersome so the standards committee (http://W3C.org) decided to break the process into modules. (For compatibility and advise see http://CanIuse.com.)

Some of the earlier CSS 3 specifications include provisions for visual effects such as rounded corners, drop shadows and gradients. Let's add some to our page. (A useful page that allows you to become familiar with these enhancements is http://css3generator.com/.)

Add a drop shadow to the CSS for the info div. (See https://developer.mozilla.org/en/CSS/-moz-box-shadow for specifications)

```css
#info { 	... 	border-radius: 6px; }
```

Add rounded corners to the info div. (See https://developer.mozilla.org/en/CSS/border-radius for specifications.)

```css
#info { 	... 	border-radius: 6px; 	box-shadow: 5px 5px 5px #ddd; }
```

Add a box shadow to the wrapper's CSS

```css
box-shadow: 10px 10px 20px #ddd;
```
To make these work in very old browsers you need to add vendor prefixes:

```css
-webkit-box-shadow: 10px 10px 150px #666;
-moz-box-shadow: 10px 10px 150px #666;
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


##Highlight one of the tabs

This is a simple way to create color coded navigation on a web site.
Add a class to body tag so we know what kind of page this is.

```html
<body class="review-page">
```

Add a list item to the nav list with a class of review-link.

```html
<li><a class="review-link" href="#">Reviews</a></li>
```
Add the following to our CSS block:

```css
.review-page .review-link {
	color: #fff;
	background:#600;
 }
```
Note that the tab is now highlighted. 

##Resetting the browser defaults

An elements margins may stick out from its containing elements. Combined with the fact that various browsers may use different settings for default margins and padding on items it makes it very hard to accurately style a page.

Add a simple reset to the CSS style sheet:

```css
* {  margin:0;  padding:0; }
```

##Google font

```css
@import url('http://fonts.googleapis.com/css?family=Lato:300,400,700');
$font-family: 'Lato', sans-serif;
```

##Homework

1.  
