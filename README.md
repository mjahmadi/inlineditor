# inlineditor
Inlineditor is a WYSIWYG editor for websites. Its goal is to be powerful and simple and configurable. Inlineditor is extremely lightweight and can be easily integrated in any web application.

site https://mjahmadi.github.io/inlineditor/

demo https://mjahmadi.github.io/inlineditor/demos/

## usage


#### Add to page header
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
