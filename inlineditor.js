;(function($) {

    $.inlineditor = function(el, options) {

        var defaults = {
            mode: 'fixed',
			position: 'top',
			buttons: ['fontName', 'fontSize', '-', 'cut', 'copy', 'paste', 'delete', '-', 'bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', '-', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', '-', 'rtl', 'ltr', '-', 'indent', 'outdent', '-', 'foreColor', 'backColor', '-', 'heading', 'paragraph', '-' , 'horizontalLine', 'linkBreak', '-', 'orderedList', 'unorderedList', '-', 'table', '-', 'emoji', 'media', 'image', '-', 'link', 'unlink', '-', 'elements', '-', 'styles', 'removeFormat', '-', 'undo', 'redo', '-', 'code', '-', 'help', 'about'],
			headingList: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
			styleList: ['style1', 'style2'],
			fontNameList: ['font1', 'font2', 'font3'],
			fontSizeList: ['size1', 'size2', 'size3'],
			elementsList: ['label', 'input', 'textarea', 'checkbox', 'radio', 'button'],
			
			beforeEditCallback: function(el) {},
			afterEditCallback: function(el) {}
        };
		
        var plugin = this;

        plugin.settings = {};
		
		
        var init = function() {
            plugin.settings = $.extend({}, defaults, options);
            plugin.el = el;
			
			var buttons = {
				bold: {icon:'fa fa-bold', title:'Bold', type:'button', elements:'', cmd:'bold'},
				italic: {icon:'fa fa-italic', title:'Italic', type:'button', elements:'', cmd:'italic'},
				justifyLeft: {icon:'fa fa-align-left', title:'Align Left', type:'button', elements:'', cmd:'justifyLeft'},
				justifyCenter: {icon:'fa fa-align-center', title:'Align Center', type:'button', elements:'', cmd:'justifyCenter'},
				justifyRight: {icon:'fa fa-align-right', title:'Align Right', type:'button', elements:'', cmd:'justifyRight'},
				justifyFull: {icon:'fa fa-align-justify', title:'Justify', type:'button', elements:'', cmd:'justifyFull'},
				cut: {icon:'fa fa-cut', title:'cut', type:'button', elements:'', cmd:'cut'},
				copy: {icon:'fa fa-copy', title:'copy', type:'button', elements:'', cmd:'copy'},
				paste: {icon:'fa fa-paste', title:'paste', type:'button', elements:'', cmd:'paste'},
				delete: {icon:'fa fa-trash', title:'delete', type:'button', elements:'', cmd:'delete'},
				underline: {icon:'fa fa-underline', title:'Underline', type:'button', elements:'', cmd:'underline'},
				strikethrough: {icon:'fa fa-strikethrough', title:'Strikethrough', type:'button', elements:'', cmd:'strikethrough'},
				subscript: {icon:'fa fa-subscript', title:'Subscript', type:'button', elements:'', cmd:'subscript'},
				superscript: {icon:'fa fa-superscript', title:'Superscript', type:'button', elements:'', cmd:'superscript'},
				fontName: {icon:'fa fa-font', title:'Fonts', type:'select', items:plugin.settings.fontNameList, elements:'', cmd:'fontName'},
				fontSize: {icon:'fa fa-text-height', title:'Font Size', type:'select', items:plugin.settings.fontSizeList, elements:'', cmd:'fontSize'},
				foreColor: {icon:'fa fa-paint-brush', title:'Text Color', type:'color', elements:'', cmd:'foreColor'},
				backColor: {icon:'fa fa-tint', title:'Background Color', type:'color', elements:'', cmd:'backColor'},
				rtl: {icon:'fa fa-long-arrow-left', title:'RTL', type:'button', elements:'', cmd:'rtl'},
				ltr: {icon:'fa fa-long-arrow-right', title:'LTR', type:'button', elements:'', cmd:'ltr'},
				heading: {icon:'fa fa-header', title:'Heading', type:'select', items:plugin.settings.headingList, elements:'', cmd:'heading'},
				paragraph: {icon:'fa fa-paragraph', title:'Paragraph', type:'button', elements:'', cmd:'insertparagraph'},
				linkBreak: {icon:'fa fa-level-down', title:'Line Break', type:'button', elements:'', cmd:'insertLineBreak'},
				horizontalLine: {icon:'fa fa-minus', title:'Horizontal Line', type:'button', elements:'', cmd:'insertHorizontalRule'},
				orderedList: {icon:'fa fa-list-ol', title:'Orderd List', type:'button', elements:'', cmd:'insertOrderedList'},
				unorderedList: {icon:'fa fa-list-ul', title:'Unorderd List', type:'button', elements:'', cmd:'insertUnorderedList'},
				indent: {icon:'fa fa-indent', title:'Indent', type:'button', elements:'', cmd:'indent'},
				outdent: {icon:'fa fa-outdent', title:'Outdent', type:'button', elements:'', cmd:'outdent'},
				table: {icon:'fa fa-table', title:'Table', type:'popup', elements:'', cmd:'table'},
				emoji: {icon:'fa fa-smile-o', title:'Emoji', type:'popup', elements:'', cmd:'emoji'},
				image: {icon:'fa fa-image', title:'Image', type:'button', elements:'', cmd:'insertImage'},
				media: {icon:'fa fa-film', title:'Media', type:'button', elements:'', cmd:'media'},
				link: {icon:'fa fa-link', title:'Create Link', type:'button', elements:'', cmd:'createLink'},
				unlink: {icon:'fa fa-chain-broken', title:'Remove Link', type:'button', elements:'', cmd:'unlink'},
				elements: {icon:'fa fa-list-alt', title:'HTML Form Elements', type:'select', items:plugin.settings.elementsList, elements:'', cmd:'elements'},
				styles: {icon:'fa fa-text-width', title:'Styles', type:'select', items:plugin.settings.styleList, elements:'', cmd:'styles'},
				removeFormat: {icon:'fa fa-eraser', title:'Remove Formats', elements:'', cmd:'removeFormat'},
				undo: {icon:'fa fa-rotate-left', title:'Undo', type:'button', elements:'', cmd:'undo'},
				redo: {icon:'fa fa-rotate-right', title:'Redo', type:'button', elements:'', cmd:'redo'},
				code: {icon:'fa fa-code', title:'Code', type:'button', elements:'', cmd:'code'},
				help: {icon:'fa fa-support', title:'Help', type:'button', elements:'', cmd:'help'},
				about: {icon:'fa fa-info', title:'About', type:'button', elements:'', cmd:'about'}
			};

            
			$('<div id="inlineditor-popup" readonly="true">').appendTo('body');
			
			$.each(plugin.settings.buttons, function(key, value) {
				if (value === '-') {
					$('<span class="separator">|</span>').appendTo('#inlineditor-popup');
				} else {
					if (buttons[value]) {
						if (buttons[value]['type'] === 'button' || buttons[value]['type'] === 'popup') {
							$('<button id="' + value + '" title="' + (buttons[value]['title'] ? buttons[value]['title'] :'') + '" cmd-data="' + buttons[value]['cmd'] + '"><i class="'+ (buttons[value]['icon'] ? buttons[value]['icon'] :'') +'"></i>' + (['select', 'popup'].indexOf(buttons[value]['type']) > -1 ? '&nbsp;<i class="fa fa-caret-down"></i>' :'') + '</button>').appendTo('#inlineditor-popup');
						} else if (buttons[value]['type'] === 'select') {
							$('<select id="' + value + '" title="' + (buttons[value]['title'] ? buttons[value]['title'] :'') + '" cmd-data="' + buttons[value]['cmd'] + '"></select>').appendTo('#inlineditor-popup');
							$('select#'+value).append($('<option></option>').attr('value', '').text('---'));
							$.each(buttons[value]['items'] ? buttons[value]['items'] : [], function(key, val) {   
								$('select#'+value).append($('<option></option>').attr('value', val).text(val));
							});
						} else if (buttons[value]['type'] === 'color') {
							$('<input id="' + value + '" title="' + (buttons[value]['title'] ? buttons[value]['title'] :'') + '" cmd-data="' + buttons[value]['cmd'] + '" type="color" style="width:28px"/>').appendTo('#inlineditor-popup');
						}
					}
				}
			});
			
			$('#inlineditor-popup').on('click', function(e){
				if ($(e.target).is('button, i')) {
					var cmd = $(e.target).is('i') ? $(e.target).parent().attr('cmd-data') : $(e.target).attr('cmd-data');
					
					plugin.settings.beforeEditCallback(el);
					
					switch (cmd) {
						case '':
							alert(cmd);
							break;
							
						default:
							document.execCommand(cmd, false, null);
					}
					
					plugin.settings.afterEditCallback(el);
				}
			});
			
			if (plugin.settings.mode.indexOf('fixed') !== -1) {
				$('#inlineditor-popup').addClass(plugin.settings.position);
				if (plugin.settings.position === 'top') {
					$('body').css('padding-top', $('#inlineditor-popup').height());
				} else if (plugin.settings.position === 'bottom') {
					$('body').css('padding-bottom', $('#inlineditor-popup').height());
				}
			}
			
        };
		
		
		plugin.destroy = function() {
			$(document).remove('#inlineditor-popup');
		};
		
		
        init();

    };

})(jQuery);