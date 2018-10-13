# inlineditor
Inlineditor is a WYSIWYG editor for web pages. Its goal is to be powerful and simple and configurable. Inlineditor is extremely lightweight and can be easily integrated in any web application.



### Features
- Extremely lightweight
- Multilingual
- Configurable
- Themes

<ENTER>
<ENTER>

### Dependencies
Inlineditor has some very common dependencies shown below
- jquery
- font-awesome



### Usage

Add belowe lines to your html page
```html
<script type="text/javascript" src="jquery.js"></script>
<link rel="stylesheet" type="text/css"  href="font-awesome.min.css" />

<script type="text/javascript" src="dist/js/inlineditor.js"></script>
<link rel="stylesheet" type="text/css"  href="dist/css/inlineditor.css" />
```

HTML:
```html
<div id="container"></div>
```

Javascript:
```javascript
var editor = $.inlineditor('div#container', {
  /*options*/
  ...
});
```

<br />

----------------------------------------------

### Options
The options is defined in jQuery.fn.inlineditor.defaults.

|Name  |Type    |Default |Valid values             |Description |
|:-----|:-------|:-------|:------------------------|:-----------|
|mode  |string  |'auto'  |'inline', 'auto', 'fixed'|...|
|position|string  |'top'  |'top', 'bottom', 'left', 'right'|...|
|spellcheck|boolean  |false  |true, false|...|
|toolbarDirection|string  |null  |'ltr', 'rtl'|...|
|toolbarContentAlign|string  |'center'  |'left', 'center', 'right'|...|
|imagePathPrefix|string  |null  | |...|
|audioPathPrefix|string  |null  | |...|
|mediaPathPrefix|string  |null  | |...|
|embedPathPrefix|string  |null  | |...|
|language|string  |null or 'default'  | |...|
|buttons|array  | |...|
|heading|string  | |'Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'|...|
|styles|string  | |...|
|fonts|array  | |...|
|sizes|array  | |...|
|elements|array  | |...|
|emoji|array  | |...|
|colors|array  | |...|

<br />

----------------------------------------------

<br />

### Methods
The events(callback functions) is defined in jQuery.fn.inlineditor.defaults also.

|Name          |Parameters      |Description |
|:-------------|:---------------|:-----------|
|onBeforeEdit  |jquery selector |...         |
|onAfterEdit   |jquery selector |...         |


<br />

----------------------------------------------

<br />


### Events
The calling method syntax: $('selector').inlineditor('method', parameter);

|Name          |Parameters      |Description |
|:-------------|:---------------|:-----------|
|  | |...         |
|  | |...         |


<br />

----------------------------------------------

<br />

### Demos
- [Mini](https://mjahmadi.github.io/inlineditor/demos/mini.html)
- [Basic](https://mjahmadi.github.io/inlineditor/demos/basic.html)
- [Editors](https://mjahmadi.github.io/inlineditor/demos/editors.html)
- [Full featured](https://mjahmadi.github.io/inlineditor/demos/full.html)
