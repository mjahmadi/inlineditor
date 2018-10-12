
# inlineditor
Inlineditor is a WYSIWYG editor for websites. Its goal is to be powerful and simple and configurable. Inlineditor is extremely lightweight and can be easily integrated in any web application.

@ConcordionOptions(declareNamespaces = { "ext", "urn:concordion-extensions:2010" })
<script src="../dist/js/inlineditor.js"></script>
## Example
<div id="container"></div>

<script>
  $.fn.inlineditor("div#container", {
    
  });
</script>
