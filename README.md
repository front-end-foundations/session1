#FOUNDATIONS Session One

##HTML

In this course you will come to know and understand basic HTML. The following HTML constructs will be used.

###Paragraph
```html
<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. </p>
Headers
<h1>Lorem ipsum dolor sit amet</h1>
<h6>Lorem ipsum dolor sit amet</h6>
```

###Lists

####Unordered List

```html
<ul> 	<li>Lorem ipsum dolor sit amet.</li>
	<li>Aliquam tincidunt mauris eu risus.</li>
	<li>Vestibulum auctor dapibus neque.</li>
</ul>
```

####Ordered List

```html
<ol>
   <li>Lorem ipsum dolor si.</li>
   <li>Aliquam tincidunt mauris eu risus.</li>
   <li>Vestibulum auctor dapibus neque.</li>
</ol>
```

####Definition List

```html
<dl>
   <dt>Definition list</dt>
   <dd>Consectetur adipisicing elit, sed do eiusmod.</dd>
   <dt>Lorem ipsum dolor sit amet</dt>
   <dd>Consectetur elit, sed. Ut enim ad.</dd>
</dl>
```

####Standard List Navigation

```html
<nav>
	<ul>
		<li><a href="#">Home</a></li>
		<li><a href="#">About</a></li>
		<li><a href="#">Clients</a></li>
		<li><a href="#">Contact Us</a></li>
	</ul>
</nav>
```

###Tables

```html
<table>
	<thead>
		<tr>
			<th></th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td></td>
			<td></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
		</tr>
	</tbody>
</table>
```

###Forms

```html
<form action="#" method="post">
	<label for="name">Text Input:</label>
	<input type="text" name="name" id="name" value=""  />
	<label for="select-choice">Select Dropdown Choice:</label>
<select name="select-choice" id="select-choice">
			<option value="Choice 1">Choice 1</option>
			<option value="Choice 2">Choice 2</option>
			<option value="Choice 3">Choice 3</option>
		</select>
	<label for="checkbox">Checkbox:</label>
	<input type="checkbox" name="checkbox" id="checkbox" />
	<input type="submit" value="Submit" />
</form>
```

###HTML Semantics

[New HTML5 tags](http://diveintohtml5.info/semantics.html )

```html
<head>  <aside>  <article>  <nav> 
```

Attributes and semantic richness - [Schemas](http://schema.org/docs/gs.html) 

[Reviews](https://schema.org/Review)


##The Doctype

A doctype is the first piece of text in an HTML document and the first thing a browser sees when it attempts to display or parse your page. They tell the browser which version of HTML your are using and how it should render the code.
Common examples include:

###HTML 4

```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
XHTML
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

and the simplest of all - HTML 5:

```html
<!DOCTYPE html>
```

As long as an HTML page has a doctype you will be able to apply the concepts as presented. The one important exception is when there is no doctype at all - such as when `<html>` is the first line of code in the page.

In this case the browser has no way of knowing which version of HTML you are using. Since this is an older method of coding pages (it dates from a time before standards had been established) Internet Explorer switches to a different way of calculating sizes known as quirks mode. This is known as "quirks mode."

###Block and Inline

HTML elements all have a property known as “display“ which is either block or inline.

Most HTML tags are block which means that they create a rectangular region in the browser. These are part of the box model upon which all web page rendering is based. It is easy to see the boxes using the inspector.
￼
The "opposite" of block in HTML is inline. An example might be a piece of italicized text or a link inside a paragraph. The paragraph tag - `<p>` - creates a box and typically has space above and below it while the italicized text does not and simply flows along with the rest of the text.

A `<div> `tag is a special block tag which is used to create a logical division in your code. It creates an arbitrary box in a browser but other than that has no display characteristics. 

A `<span>` tag is used to create arbitrary inline elements.

We shall see examples of these tags in action shortly.

###The Box Model

Paragraphs, headers, lists, almost everything is interpreted as a box by the browser. But boxes have other characteristics such as spacing, borders and margins. Taken together these elements form what is called the box model.

##The Browser and Developer Tools

Despite recent moves by Microsoft, Chrome, Safari, and Firefox are still the browsers of choice for web designers. One of the reasons for this is their excellent developer tools. 

You should take some time to familiarize yourself with thier full functionality. For now the only piece of functionality you need is to be able to right or control click on a portion of the page in the browser and select Inspect from the resulting pop up menu.

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


##Google font

```css
@import url('http://fonts.googleapis.com/css?family=Lato:300,400,700');
$font-family: 'Lato', sans-serif;
```

##Homework

1.  
