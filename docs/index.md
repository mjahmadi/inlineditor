# inlineditor
Inlineditor is a WYSIWYG editor for web pages. Its goal is to be powerful, simple and easy to use. Inlineditor is extremely lightweight and can be easily integrated in any web application.

<br />
<br />

### Features
- Extremely lightweight
- Multilingual
- Configurable
- More tahn 40 built-in plugin
- Minimum dependencies
- Themable

<br />
<br />

### Dependencies
Inlineditor has some very common dependencies shown below
- jquery
- font-awesome

<br />
<br />

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

---
<br />

### Options
The options is defined in jQuery.fn.inlineditor.defaults

|Name                  |Type      |Default   |Valid values                 |Description      |
|:---------------------|:---------|:---------|:----------------------------|:----------------|
|mode                  |string    |'auto'    |'inline', 'auto', 'fixed'|...|
|position|string       |'top'     |'top', 'bottom', 'left', 'right'|...|
|spellcheck|boolean    |false     |true, false|...|
|toolbarDirection      |string    |null  |'ltr', 'rtl'|...|
|toolbarContentAlign   |string    |'center'  |'left', 'center', 'right'|...|
|imagePathPrefix       |string    |null  | |...|
|audioPathPrefix       |string    |null  | |...|
|mediaPathPrefix       |string    |null  | |...|
|embedPathPrefix       |string    |null  | |...|
|language              |string    |null or 'default'  | |...|
|buttons               |array     |null  | |...|
|heading               |array     |'Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'|...|
|styles                |string    | |...|
|fonts                 |array     | |...|
|sizes                 |array     | |...|
|elements              |array     | |...|
|emoji                 |array     | |...|
|colors                |array     | |...|

<br />
<br />


### Plugins
The plugins is defined in jQuery.fn.inlineditor.defaults

|Name                       |Description                                                       |
|:--------------------------|:-----------------------------------------------------------------|
|bold                       |Toggles bold on/off for the selection or at the insertion point.  |
|italic                     |...                                                  |
|justifyLeft                |...                                                  |
|justifyRight               |...                                                  |
|justifyCenter              |...                                                  |
|justifyFull                |...                                                  |
|cut                        |Removes the current selection and copies it to the clipboard.     |
|copy                       |Copies the current selection to the clipboard.                    |
|paste                      |...                                                  |
|delete                     |Deletes the current selection.                       |
|underline                  |...                                                  |
|strikethrough              |...                                                  |
|subscript                  |...                                                  |
|superscript                |...                                                  |
|fonts                      |Changes the font name for the selection or at the insertion point.  |
|sizes                      |Changes the font size for the selection or at the insertion point.  |
|foreColor                  |...                                                  |
|backColor                  |Changes the document background color.               |
|direction                  |...                                                  |
|heading                    |...                                                  |
|paragraph                  |...                                                  |
|linkBreak                  |...                                                  |
|horizontalRule             |...                                                  |
|orderedList                |...                                                  |
|unorderedList              |...                                                  |
|indent                     |...                                                  |
|outdent                    |...                                                  |
|leftQuote                  |...                                                  |
|rightQuote                 |...                                                  |
|table                      |...                                                  |
|emoji                      |...                                                  |
|image                      |...                                                  |
|embed                      |...                                                  |
|media                      |...                                                  |
|youtube                    |...                                                  |
|audio                      |...                                                  |
|link                       |...                                                  |
|unlink                     |...                                                  |
|elements                   |...                                                  |
|styles                     |...                                                  |
|removeFormat               |...                                                  |
|undo                       |...                                                  |
|redo                       |...                                                  |
|code                       |...                                                  |


<br />
<br />



### Methods
The events(callback functions) is defined in jQuery.fn.inlineditor.defaults also.

|Name          |Parameters      |Description |
|:-------------|:---------------|:-----------|
|getValue      |                |...         |
|setValue      |string          |...         |

<br />
<br />

### Events
The calling method syntax: $('selector').inlineditor('method', parameter);

|Name          |Parameters      |Description |
|:-------------|:---------------|:-----------|
|onBeforeEdit  |jquery selector |...         |
|onAfterEdit   |jquery selector |...         |

<br />
<br />

---

### Demos
- [Mini](https://mjahmadi.github.io/inlineditor/demos/mini.html)
- [Basic](https://mjahmadi.github.io/inlineditor/demos/basic.html)
- [Editors](https://mjahmadi.github.io/inlineditor/demos/editors.html)
- [Full featured](https://mjahmadi.github.io/inlineditor/demos/full.html)
