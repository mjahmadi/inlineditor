# inlineditor
Inlineditor is a WYSIWYG editor for web pages. Its goal is to be powerful and simple and configurable. Inlineditor is extremely lightweight and can be easily integrated in any web application.



## Features
- Extremely lightweight
- Multilingual
- Configurable
- Themes



### Dependencies
Inlineditor has some very common dependencies shown below
- jquery
- font-awesome



### Usage

#### Add belowe lines to your html page
```
<script type="text/javascript" src="jquery.js"></script>
<link rel="stylesheet" type="text/css"  href="font-awesome.min.css" />

<script type="text/javascript" src="dist/js/inlineditor.js"></script>
<link rel="stylesheet" type="text/css"  href="dist/css/inlineditor.css" />
```

#### HTML
```
<div id="container"></div>
```

#### Javascript
```
var editor = $.inlineditor('div#container', {
  /*options*/
  ...
});
```


### Options

```
mode: 'fixed',
position: 'top',
spellcheck: true,
toolbarDirection: 'ltr',
toolbarContentAlign: 'center',
imagePathPrefix: '',
audioPathPrefix: '',
mediaPathPrefix: '',
embedPathPrefix: '',
language: '',
buttons: [],
toolbar: 'full',
heading: ['Normal', ['Heading1', 'h1'], ['Heading2', 'h2'], ['Heading3', 'h3'], ['Heading4', 'h4'], ['Heading5', 'h5'], ['Heading6', 'h6']],
styles: [],
fonts: ['Arial', 'Helvetica', 'Times', 'Courier', 'Impact', 'Shabnam', 'B Nazanin', 'BMitra', 'BMitraBold', 'BRoya', 'BTabassom', 'BTitr', 'BTitrTGE', 'Yekan', 'BTraffic', 'BNasim', 'Tahoma'],
sizes: [['xx-small', '1'], ['x-small', '2'], ['small', '3'], ['normal', '4'], ['large', '5'], ['x-large', '6'], ['xx-large', '7']],
elements: ['div', 'p', 'form', 'label', ['input', 'text'], 'password', 'textarea', 'select', 'checkbox', 'radio', 'submit', 'reset', 'button'],
emoji: [
[128513, 128591], [9986, 10160], [128640, 128704]
],
```


### Demos
- [Mini](https://mjahmadi.github.io/inlineditor/demos/mini.html)
- [Basic](https://mjahmadi.github.io/inlineditor/demos/basic.html)
- [Editors](https://mjahmadi.github.io/inlineditor/demos/editors.html)
- [Full featured](https://mjahmadi.github.io/inlineditor/demos/full.html)
