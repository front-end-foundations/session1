@import url('http://fonts.googleapis.com/css?family=Lato:300,400,700');

body {
  margin: 12px;
  color: #333;
  font-family: 'Lato', Verdana, Arial, sans-serif;
  background-color: #ddd;
}

a {
  color: #600;
}

header {
  font-family: 'Lobster', cursive;
  font-weight: normal;
}

header h1,
header h2 {
  font-weight: normal;
  font-size: 4rem;
  margin: 8px 0;
  color: #600;
}
header h2 {
  font-size: 2rem;
}

.nav {
  list-style: none;
  padding: 0;
  position: absolute;
  right: 0;
  top: 12px;
}
.nav li {
  display: inline-block;
  margin-right: 10px;
}
.nav a {
  color: #fff;
  text-decoration: none;
  padding: 4px 8px;
  display: block;
  background-color: #600;
  transition: all 0.5s linear;
  border-radius: 3px;
}
.nav a:hover {
  color: #222;
  background-color: #f0dfb4;
}

aside {
  position: absolute;
  top: 200px;
  left: 10px;
  width: 180px;
  background-color: #f0dfb4;
  padding: 6px;
  border: 1px solid #600;
  font-size: 0.875rem;
  border-radius: 6px;
  box-shadow: 3px 4px 3px 2px #d6d6d6;
}
aside th {
  text-align: right;
}

aside ul {
  list-style: none;
  margin: 0.5rem;
  padding: 0;
}
article {
  margin: 0 20px 0 240px;
}
#wrapper {
  max-width: 840px;
  margin: 0 auto 0 auto;
  background-color: #fff;
  /* margin: 12px; */
  padding: 1rem;
  position: relative;
  box-shadow: 10px 10px 20px #aaa;
}
article h2 {
  font-weight: 400;
  color: #600;
  border-bottom: 1px solid #600;
}

blockquote {
  float: right;
  width: 40%;
  padding: 8px;
  font-size: 24px;
}
blockquote::before {
  content: '“';
  font-size: 4rem;
  font-family: serif;
  color: #333;
  line-height: 0.1em;
  vertical-align: -0.4em;
  color: #600;
}
article img {
  float: right;
}
@media print {
  * {
    display: none !important;
  }
}

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
