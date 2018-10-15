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

|Name                       |Description                                                                                   |
|:--------------------------|:---------------------------------------------------------------------------------------------|
|bold                       |Toggles bold on/off for the selection or at the insertion point.                              |
|italic                     |Toggles italics on/off for the selection or at the insertion point.                           |
|justifyLeft                |Justifies the selection or insertion point to the left.                                       |
|justifyRight               |Right-justifies the selection or the insertion point.                                         |
|justifyCenter              |Centers the selection or insertion point.                                                     |
|justifyFull                |Justifies the selection or insertion point.                                                   |
|cut                        |Removes the current selection and copies it to the clipboard.                                 |
|copy                       |Copies the current selection to the clipboard.                                                |
|paste                      |Pastes the clipboard contents at the insertion point (replaces current selection).            |
|delete                     |Deletes the current selection.                                                                |
|underline                  |Toggles underline on/off for the selection or at the insertion point.                         |
|strikethrough              |Toggles strikethrough on/off for the selection or at the insertion point.                     |
|subscript                  |Toggles subscript on/off for the selection or at the insertion point.                         |
|superscript                |Toggles superscript on/off for the selection or at the insertion point.                       |
|fonts                      |Changes the font name for the selection or at the insertion point.                            |
|sizes                      |Changes the font size for the selection or at the insertion point.                            |
|foreColor                  |Changes a font color for the selection or at the insertion point.                             |
|backColor                  |Changes the document background color.                                                        |
|direction                  |Changes the paragraph writing direction to 'ltr' or 'rtl'.                                    |
|heading                    |Adds a heading element around a selection or insertion point line.                            |
|paragraph                  |Inserts a paragraph around the selection or the current line.                                 |
|linkBreak                  |Inserts a ```<br />``` at the insertion point (deletes selection).                            |
|horizontalRule             |Inserts a ```<hr />``` element at the insertion point, or replaces the selection with it.     |
|orderedList                |Creates a numbered ordered list for the selection or at the insertion point.                  |
|unorderedList              |Creates a bulleted unordered list for the selection or at the insertion point.                |
|indent                     |Indents the line containing the selection or insertion point.                                 |
|outdent                    |Outdents the line containing the selection or insertion point.                                |
|leftQuote                  |Adds an HTML left side ```<blockquote>``` around the selection.                               |
|rightQuote                 |Adds an HTML right side ```<blockquote>``` around the selection.                              |
|table                      |Inserts a table at the insertion point (deletes selection) with given dimension.              |
|emoji                      |Inserts a native browser emoji at the insertion point (deletes selection).                    |
|image                      |Inserts an image at the insertion point (deletes selection). Requires a image URL string.     |
|embed                      |Inserts a embed object at the insertion point (deletes selection).                            |
|media                      |Inserts a video box at the insertion point (deletes selection).                               |
|youtube                    |Inserts a Youtube video box at the insertion point (deletes selection).                       |
|audio                      |Inserts a audio box at the insertion point (deletes selection).                               |
|link                       |Creates an hyperlink from the selection, but only if there is a selection.                    |
|unlink                     |Removes the anchor element from a selected hyperlink.                                         |
|elements                   |Inserts a selected element at the insertion point (deletes selection).                        |
|styles                     |Adds a selected pre user defined css style to the selection.                                  |
|removeFormat               |Removes all formatting from the current selection.                                            |
|undo                       |Undoes the last executed command.                                                             |
|redo                       |Redoes the previous undo command.                                                             |
|code                       |Will shows HTML code of editing area in a read only window.                                   |


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
