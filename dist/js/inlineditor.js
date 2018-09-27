;(function($) {

    $.inlineditor = function(el, options) {

        var defaults = {
            mode: 'fixed',
			position: 'top',
			labels: false,
			spellcheck: true,
			buttons: ['fonts', 'sizes', '-', 'cut', 'copy', 'paste', 'delete', '-', 'bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', '-', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', '-', 'rtl', 'ltr', '-', 'indent', 'outdent', '-', 'foreColor', 'backColor', '-', 'heading', 'paragraph', '-' , 'horizontalRule', 'linkBreak', '-', 'orderedList', 'unorderedList', '-', 'table', '-', 'emoji', 'embed', 'youtube', 'media', 'audio', 'image', '-', 'link', 'unlink', '-', 'elements', '-', 'styles', 'removeFormat', '-', 'undo', 'redo', '-', 'code', '-', 'help', 'about'],
			heading: ['Normal', ['Heading1', 'h1'], ['Heading2', 'h2'], ['Heading3', 'h3'], ['Heading4', 'h4'], ['Heading5', 'h5'], ['Heading6', 'h6']],
			styles: [['Style-1', 'style1'], ['Style-2', 'style2']],
			fonts: ['Arial', 'Helvetica', 'Times', 'Courier', 'Impact', 'B Nazanin', 'BMitra', 'BMitraBold', 'BRoya', 'BTabassom', 'BTitr', 'BTitrTGE', 'Yekan', 'BTraffic', 'BNasim', 'Tahoma'],
			sizes: [['xx-small', '1'], ['x-small', '2'], ['small', '3'], ['normal', '4'], ['large', '5'], ['x-large', '6'], ['xx-large', '7']],
			elements: ['div', 'form', 'label', 'input', 'textarea', 'select', 'checkbox', 'radio', 'submit', 'reset', 'button'],
			colors: [
				'AliceBlue', 'AntiqueWhite', 'Aquamarine', 'Azure', 'Beige', 'Bisque',
				'Black', 'BlanchedAlmond', 'Blue', 'BlueViolet', 'Brown', 'BurlyWood',
				'CadetBlue', 'Chartreuse', 'Chocolate', 'Coral', 'CornflowerBlue',
				'Cornsilk', 'Crimson', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkGoldenRod',
				'DarkGray', 'DarkGrey', 'DarkGreen', 'DarkKhaki', 'DarkMagenta',
				'DarkOliveGreen', 'DarkOrange', 'DarkOrchid', 'DarkRed', 'DarkSalmon',
				'DarkSeaGreen', 'DarkSlateBlue', 'DarkSlateGray', 'DarkSlateGrey',
				'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray',
				'DimGrey', 'DodgerBlue', 'FireBrick', 'FloralWhite', 'ForestGreen',
				'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Green',
				'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory',
				'Khaki', 'Lavender ', 'LavenderBlush', 'LawnGreen', 'LemonChiffon',
				'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray',
				'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen',
				'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue',
				'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'Maroon', 
				'MediumAquaMarine', 'MediumBlue', 'MediumOrchid', 'MediumPurple',
				'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise',
				'MediumVioletRed', 'MidnightBlue', 'MintCream', 'MistyRose', 'Moccasin',
				'NavajoWhite', 'Navy', 'OldLace', 'Olive', 'OliveDrab', 'Orange',
				'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise',
				'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum ',
				'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue',
				'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna',
				'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow',
				'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise',
				'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen'
			],
			
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
				cut: {icon:'fa fa-cut', title:'Cut Selection', type:'button', elements:'', cmd:'cut'},
				copy: {icon:'fa fa-copy', title:'Copy Selection', type:'button', elements:'', cmd:'copy'},
				paste: {icon:'fa fa-paste', title:'Paste', type:'button', elements:'', cmd:'paste'},
				delete: {icon:'fa fa-trash', title:'Delete Selection', type:'button', elements:'', cmd:'delete'},
				underline: {icon:'fa fa-underline', title:'Underline', type:'button', elements:'', cmd:'underline'},
				strikethrough: {icon:'fa fa-strikethrough', title:'Strikethrough', type:'button', elements:'', cmd:'strikethrough'},
				subscript: {icon:'fa fa-subscript', title:'Subscript', type:'button', elements:'', cmd:'subscript'},
				superscript: {icon:'fa fa-superscript', title:'Superscript', type:'button', elements:'', cmd:'superscript'},
				fonts: {icon:'fa fa-font', title:'Fonts', type:'select', items:plugin.settings.fonts, elements:'', cmd:'fontName'},
				sizes: {icon:'fa fa-text-height', title:'Font Size', type:'select', items:plugin.settings.sizes, elements:'', cmd:'fontSize'},
				foreColor: {icon:'fa fa-paint-brush', title:'Text Color', type:'colorpicker', items:plugin.settings.colors, elements:'', cmd:'foreColor'},
				backColor: {icon:'fa fa-tint', title:'Background Color', type:'colorpicker', items:plugin.settings.colors, elements:'', cmd:'backColor'},
				rtl: {icon:'fa fa-long-arrow-left', title:'RTL', type:'button', elements:'', cmd:'rtl'},
				ltr: {icon:'fa fa-long-arrow-right', title:'LTR', type:'button', elements:'', cmd:'ltr'},
				heading: {icon:'fa fa-header', title:'Heading', type:'select', items:plugin.settings.heading, elements:'', cmd:'heading'},
				paragraph: {icon:'fa fa-paragraph', title:'Paragraph', type:'button', elements:'', cmd:'insertparagraph'},
				linkBreak: {icon:'fa fa-level-down', title:'Line Break', type:'button', elements:'', cmd:'insertLineBreak'},
				horizontalRule: {icon:'fa fa-minus', title:'Horizontal Rule', type:'button', elements:'', cmd:'insertHorizontalRule'},
				orderedList: {icon:'fa fa-list-ol', title:'Orderd List', type:'button', elements:'', cmd:'insertOrderedList'},
				unorderedList: {icon:'fa fa-list-ul', title:'Unorderd List', type:'button', elements:'', cmd:'insertUnorderedList'},
				indent: {icon:'fa fa-indent', title:'Indent', type:'button', elements:'', cmd:'indent'},
				outdent: {icon:'fa fa-outdent', title:'Outdent', type:'button', elements:'', cmd:'outdent'},
				table: {icon:'fa fa-table', title:'Table', type:'popup', elements:'', cmd:'table'},
				emoji: {icon:'fa fa-smile-o', title:'Emoji', type:'popup', elements:'', cmd:'emoji'},
				image: {icon:'fa fa-image', title:'Image', type:'button', elements:'', cmd:'insertImage'},
				embed: {icon:'fa fa-plug', title:'Embed', type:'button', elements:'', cmd:'insertEmbed'},
				media: {icon:'fa fa-video-camera', title:'Media', type:'button', elements:'', cmd:'insertMedia'},
				youtube: {icon:'fa fa-film', title:'Youtube', type:'button', elements:'', cmd:'insertYoutube'},
				audio: {icon:'fa fa-volume-up', title:'Audio', type:'button', elements:'', cmd:'insertAudio'},
				link: {icon:'fa fa-link', title:'Create Link', type:'button', elements:'', cmd:'createLink'},
				unlink: {icon:'fa fa-chain-broken', title:'Remove Link', type:'button', elements:'', cmd:'unlink'},
				elements: {icon:'fa fa-list-alt', title:'HTML Form Elements', type:'select', items:plugin.settings.elements, elements:'', cmd:'elements'},
				styles: {icon:'fa fa-text-width', title:'Styles', type:'select', items:plugin.settings.styles, elements:'', cmd:'styles'},
				removeFormat: {icon:'fa fa-eraser', title:'Remove Formats', elements:'', cmd:'removeFormat'},
				undo: {icon:'fa fa-rotate-left', title:'Undo', type:'button', elements:'', cmd:'undo'},
				redo: {icon:'fa fa-rotate-right', title:'Redo', type:'button', elements:'', cmd:'redo'},
				code: {icon:'fa fa-code', title:'Code', type:'button', elements:'', cmd:'code'},
				help: {icon:'fa fa-support', title:'Help', type:'button', elements:'', cmd:'help'},
				about: {icon:'fa fa-info', title:'About', type:'button', elements:'', cmd:'about'}
			};
			
			
			$(el).attr('spellcheck', plugin.settings.spellcheck);
			$(el).attr('contenteditable', true);
			
			
			$('<div id="inlineditor-popup" readonly="true">').appendTo('body');
			
			$.each(plugin.settings.buttons, function(key, value) {
				if (value === '-') {
					$('<span class="separator">|</span>').appendTo('#inlineditor-popup');
				} else {
					if (buttons[value]) {
						if (buttons[value]['type'] === undefined || buttons[value]['type'] === 'button' || buttons[value]['type'] === 'popup') {
							$('<button id="' + value + '" title="' + (buttons[value]['title'] ? buttons[value]['title'] :'') + '" data-cmd="' + buttons[value]['cmd'] + '"><i class="'+ (buttons[value]['icon'] ? buttons[value]['icon'] :'') +'"></i>' + (['select', 'popup'].indexOf(buttons[value]['type']) > -1 ? '&nbsp;<i class="fa fa-caret-down"></i>' :'') + '</button>').appendTo('#inlineditor-popup');
							
						} else if (buttons[value]['type'] === 'select') {
							if (plugin.settings.showLabels) {
								$('<label for="' + value + '">' + (buttons[value]['title'] ? buttons[value]['title'] :'') + '</label>').appendTo('#inlineditor-popup');
							}
							
							$('<select id="' + value + '" title="' + (buttons[value]['title'] ? buttons[value]['title'] :'') + '" data-cmd="' + buttons[value]['cmd'] + '"></select>').appendTo('#inlineditor-popup');
							$('select#'+value).append($('<option></option>').attr('value', '').text('---'));
							$.each(buttons[value]['items'] ? buttons[value]['items'] : [], function(key, val){
								$('select#'+value).append($('<option></option>').attr('value', ($.isArray(val) ? val[1] : val)).text(($.isArray(val) ? val[0] : val)));
							});
							
						} else if (buttons[value]['type'] === 'colorpicker') {
							$('<select id="' + value + '" class="colorpicker" title="' + (buttons[value]['title'] ? buttons[value]['title'] :'') + '" data-cmd="' + buttons[value]['cmd'] + '"></select>').appendTo('#inlineditor-popup');
							$('select#'+value).append($('<option></option>').attr('value', '').text('---'));
							$.each(buttons[value]['items'] ? buttons[value]['items'] : [], function(key, val){
								$('select#'+value).append($('<option title="' + ($.isArray(val) ? val[1] : val) + '" style="background-color:' + ($.isArray(val) ? val[1] : val) + '"></option>').attr('value', ($.isArray(val) ? val[1] : val)).text(($.isArray(val) ? val[0] : val)));
							});
						}
					}
				}
			});
			
			$('#inlineditor-popup').on('click', function(e) {
				if ($(e.target).is('input, button, i')) {
					var cmd = $(e.target).is('i') ? $(e.target).parent().attr('data-cmd') : $(e.target).attr('data-cmd');
					
					plugin.settings.beforeEditCallback(el);
					
					switch (cmd) {
						
						case 'rtl': case 'ltr':
							var parent_element = getSelectionParentElement();
							$(parent_element).css('direction', cmd);
							break;
							
						case 'createLink':
							if (getSelectionText()) {
								var url = prompt('Link URL:');
								if (url && url.trim()) {
									document.execCommand(cmd, false, url);
								} else {
									alert('Link url missing!');
								}
							}
							break;
						
						case 'insertImage':
							var url = prompt('Image URL:');
							if (url && url.trim()) {
								document.execCommand(cmd, false, url.trim());
							}
							break;
							
						case 'insertMedia':
							var url = prompt('Media URL:');
							if (url && url.trim()) {
								var media = '<video controls>'+
											'<source src="' + url.trim() + '" type="video/' + url.split('.').pop() + '">'+
											'Your browser does not support the video tag.'+
											'</video>';
								document.execCommand('insertHTML', false, media);
							}
							break;
							
						case 'insertYoutube':
							var url = prompt('Youtube Video URL:');
							if (url && url.trim()) {
								var media = '<iframe src="' + url.trim() + '"></iframe>';
								document.execCommand('insertHTML', false, media);
							}
							break;
							
						case 'insertAudio':
							var url = prompt('Audio URL:');
							if (url && url.trim()) {
								var audio = '<audio controls>'+
											'<source src="' + url.trim() + '" type="audio/' + url.split('.').pop() + '">'+
											'Your browser does not support the audio element.'+
											'</audio>';
								document.execCommand('insertHTML', false, audio);
							}
							break;
							
						case 'insertEmbed':
							var url = prompt('Audio URL:');
							if (url && url.trim()) {
								var embed = '<embed src="' + url.trim() + '">';
								document.execCommand('insertHTML', false, embed);
							}
							break;
							
						default:
							document.execCommand(cmd, false, false);
					}
					
					plugin.settings.afterEditCallback(el);
				}
			});
			
			$('#inlineditor-popup').on('change', function(e) {
				if ($(e.target).is('select')) {
					var cmd = $(e.target).attr('data-cmd');
					var param = $(e.target).val();
					
					plugin.settings.beforeEditCallback(el);
					
					switch (cmd) {
						case 'heading':
							document.execCommand('formatBlock', false, '<' + $(e.target).val() + '>');
							break;
						
						case 'foreColor': case 'backColor':
							document.execCommand(cmd, false, $(e.target).val());
							break;
							
						case 'styles':
							wrappedselection = '<span class="' + $(e.target).val() + '">' + getSelectionText() + '</span>';
							document.execCommand('insertHTML', false, wrappedselection);
							break;
						
						default:
							document.execCommand(cmd, false, param);
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
			$(el).attr('spellcheck', false);
			$(el).attr('contenteditable', false);
			
			$(document).remove('#inlineditor-popup');
		};
		
		
		var getSelectionParentElement = function() {
			var parentEl = null, sel;
			if (window.getSelection) {
				sel = window.getSelection();
				if (sel.rangeCount) {
					parentEl = sel.getRangeAt(0).commonAncestorContainer;
					if (parentEl.nodeType !== 1) {
						parentEl = parentEl.parentNode;
					}
				}
			} else if ( (sel = document.selection) && sel.type !== 'Control') {
				parentEl = sel.createRange().parentElement();
			}
			
			return parentEl;
		};
		
		
		var getSelectionText = function() {
			var text = '';
			var activeEl = document.activeElement;
			var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
			
			if ((activeElTagName === 'textarea') || 
					(activeElTagName === 'input' && /^(?:text|search|password|tel|url)$/i.test(activeEl.type)) && (typeof activeEl.selectionStart === 'number')) {
				text = activeEl.value.slice(activeEl.selectionStart, activeEl.selectionEnd);
			} else if (window.getSelection) {
				text = window.getSelection().toString();
			}
			
			return text;
		};
		
		
        init();

    };

})(jQuery);