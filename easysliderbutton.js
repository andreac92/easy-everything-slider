(function() {
    tinymce.PluginManager.add('easy_slider_button', function( editor, url ) {
        editor.addButton( 'easy_slider_button', {
            text: 'Add slider',
            icon: false,
            onclick: function() {
                    editor.windowManager.open( {
			        title: 'How many slides?',
			        body: [{
			            type: 'textbox',
			            name: 'number',
			            label: 'Number of slides'
			        }],
			        onsubmit: function( e ) {
			        	var num = parseFloat(e.data.number);
			        	if (!isNaN(num) && isFinite(e.data.number) && num > 0){
			        		var txt = '[easy_slider_container]';
			        		for (var i = 0; i < num; i++){
			        			txt+='[easy_slide id="slide'+ (i+1) + '"] SLIDE NUMBER ' + (i+1) + ' CONTENT HERE [/easy_slide]';
			        		}
			        		txt+= '[/easy_slider_container]';
			        		editor.insertContent( txt );
			        	}
			        }
			    });
            }
        });
    });
})();