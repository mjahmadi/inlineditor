# inlineditor
Inlineditor is a WYSIWYG editor for web pages. Its goal is to be powerful, simple and easy to use. Inlineditor is extremely lightweight and can be easily integrated in any web application.

<br />
<br />

### Features
- Extremely lightweight and realy easy to use
- Minimum dependencies
- Configurable
- Multiple instances
- More than 40 built-in commands
- Multilingual and RTL support
- Themable

<br />
<br />

### Dependencies
Inlineditor has some very common dependencies shown below
- [jquery](https://jquery.com/) (as inlineditor is a jquery plugin)
- [font-awesome](https://fontawesome.com/)

<br />
<br />

### Usage

Add belowe lines to your html page
```html
<script type="text/javascript" src="lib/jquery.js"></script>
<link rel="stylesheet" type="text/css"  href="lib/font-awesome/css/font-awesome.min.css" />

<script type="text/javascript" src="dist/js/inlineditor.js"></script>
<link rel="stylesheet" type="text/css"  href="dist/css/inlineditor.css" />
```

HTML :
```html
<div id="container"></div>
```

Javascript :
```javascript
var editor = $.fn.inlineditor('div#container', {
  /*options*/
});
```

<br />
<br />

### Options
The options is defined in $.fn.inlineditor.defaults

|Name                |Type    |Default |Description                                                                           |
|:-------------------|:-------|:-------|:-------------------------------------------------------------------------------------|
|mode                |string  |'auto'  |'auto', 'inline', 'fixed'                                                             |
|position            |string  |'top'   |'top', 'bottom', 'left', 'right'                                                      |
|spellcheck          |boolean |false   |true, false                                                                           |
|toolbarDirection    |string  |null or ‘default’ |'ltr', 'rtl'                                                                |
|toolbarContentAlign |string  |'center'|'left', 'center', 'right'                                                             |
|imagePathPrefix     |string  |null    |---                                                                                   |
|audioPathPrefix     |string  |null    |---                                                                                   |
|mediaPathPrefix     |string  |null    |---                                                                                   |
|embedPathPrefix     |string  |null    |---                                                                                   |
|globalPathPrefix    |string  |null    |Will add address prefix to all address boxes.                                         |
|language            |string  |null or 'default' or 'en_US' |The default language is 'en_US' that has no definition 'js' file.  All other languages must have 'js' file in the 'locale/' directory.   |
|commands            |array   |null    |[List of all built-in commands](#commands)                                            |
|toolbar             |string  |'standard'  |Predefined toolbar buttons 'full', 'standard', 'mini'                             |
|theme               |string  |null or 'default' |Editor theme.                                                               |
|heading             |array   |'Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'|                                                  |
|styles              |array   |null    |User defined styles and CSS rules.                                                    |
|fonts               |array   |'Arial', 'Times', 'Courier', 'Impact', 'Tahoma'|Editor standard default fonts.                 |
|additionalFonts     |array   |null    |User defined addtional fonts.                                                         |
|sizes               |array   |'xx-small', 'x-small', 'small', 'normal', 'large', 'x-large', 'xx-large' |---                  |
|elements            |array   |'div', 'p', 'form', 'label', ['input', 'text'], 'password', 'textarea', 'select', 'checkbox', 'radio', 'submit', 'reset', 'button'   |Tag names or array of [title, tag].                                                            |
|emoji               |array   |[128513, 128591], [9986, 10160], [128640, 128704] |Range or exact unicode value.               |
|colors              |array   |140 named colors |[Color Names Supported by All Browsers](https://www.w3schools.com/colors/colors_names.asp)                                    |
|generateStyle       |boolean |false   |True generates style attributes in markup, false generates presentational elements.   |
|fadeinOnHover       |boolean |false   |true, false                                                                           |

<br />
<br />

### Commands
The commands is defined in $.fn.inlineditor.commands

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
The methods is defined in $.fn.inlineditor and calling method syntax is ```$.fn.inlineditor.{method}(parameters);```

|Name          |Parameters      |Description                                                                              |
|:-------------|:---------------|:----------------------------------------------------------------------------------------|
|getElement    |none            |Returns the editing area jquery object.                                                  |
|getOption     |string          |Returns the option property as array.                                                    |
|setOption     |string, string  |Sets the option property.                                                                |
|getValue      |none            |Returns the editing area content as string.                                              |
|setValue      |string          |Sets the editing area content.                                                           |
|execCommand   |string, target  |Execute the given command with given parameters.                                         |
|destroy       |none            |Destroys the editor object.                                                              |

<br />
<br />

### Events
The events(callback functions) is defined in $.fn.inlineditor.defaults also.

|Name             |Parameters      |Description                                                            |
|:----------------|:---------------|:----------------------------------------------------------------------|
|onInit           |none            |The onInit event occurs after all controls have been initialized.      |
|onDestroy        |none            |The onDestroy event occurs before editor destroy.                      |
|onEdit           |event           |The onEdit event occurs after editing editable area.                   |
|onBeforeExecCmd  |string          |The onBeforeExecCmd event occurs before before command execution.      |
|onAfterExecCmd   |string          |The onAfterExecCmd event occurs after command execution.               |

<br />
<br />

### Translations
A language file contains a set of translations for the text strings used in Inlineditor. Language files can be found under locale directory in ```js``` format. The default language is ```en_US``` which is the built-in and has no js file in locale directory, other languages can be created and used as below.

Add the language file to your HTML page.
```html
<script type="text/javascript" src="locale/fa_IR.js"></script>
```

Set the current language for editor.
```javascript
var editor = $.fn.inlineditor('div#container', {
  ...
  language: 'fa_IR'
  ...
});
```


<br />
<br />


### Browser compatibility

|Name                  |Version         |Description                                                       |
|:---------------------|:--------------:|:-----------------------------------------------------------------|
|Chrome                |?               |...                                                               |
|Firefox               |>= 41           |copy, cut commands will not work correctly in older versions.     |
|Edge                  |?               |...                                                               |
|Internet Explorer     |>= 9            |Very limited support.                                             |
|Opera                 |>= 29           |copy, cut commands will not work correctly in older versions.     |
|Safari                |>= 10           |copy, cut commands will not work correctly in older versions.     |
|Android webview       |?               |...                                                               |
|Chrome for Android    |?               |...                                                               |
|Edge Mobile           |?               |...                                                               |
|Firefox for Android   |>= 41           |copy, cut commands will not work correctly in older versions.     |
|Opera for Android     |>= 29           |copy, cut commands will not work correctly in older versions.     |
|iOS Safari            |>= 10           |copy, cut commands will not work correctly in older versions.     |


<br />
<br />


### Screenshot

<img src="https://github.com/mjahmadi/inlineditor/raw/master/docs/screenshot.png" style="max-width:100%;">
