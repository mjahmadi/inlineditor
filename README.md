# inlineditor
Lightweight On the fly HTML editor for web pages.

## usage


## Add to page header
```
<script type="text/javascript" src="jquery.js"></script>
<link rel="stylesheet" type="text/css"  href="font-awesome.min.css" />

<script type="text/javascript" src="dist/js/inlineditor.js"></script>
<link rel="stylesheet" type="text/css"  href="dist/css/inlineditor.css" />
```

## HTML
```
<div id="container"></div>
```

## Javascript
```
var editor = $.inlineditor('div#container', {
  /*options*/
  ...
});
```
