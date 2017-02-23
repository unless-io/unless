(function() {
	var triggerBttn = document.getElementById( 'trigger-overlay' ),
	overlay = document.querySelector( 'div.overlay' ),
	transEndEventNames = {
		'WebkitTransition': 'webkitTransitionEnd',
		'MozTransition': 'transitionend',
		'OTransition': 'oTransitionEnd',
		'msTransition': 'MSTransitionEnd',
		'transition': 'transitionend'
	},
	transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
	support = { transitions : Modernizr.csstransitions };
	s = Snap( overlay.querySelector( 'svg' ) ), 
	path = s.select( 'path' ),
	pathConfig = {
		from : path.attr( 'd' ),
		to : overlay.getAttribute( 'data-path-to' )
	};

	function toggleOverlay() {
		if( classie.has( overlay, 'open' ) ) {
			classie.remove( overlay, 'open' );
			classie.add( overlay, 'close' );
			
			var onEndTransitionFn = function( ev ) {
				classie.remove( overlay, 'close' );
			};
			
			path.animate( { 'path' : pathConfig.from }, 400, mina.linear, onEndTransitionFn );
		}
		else if( !classie.has( overlay, 'close' ) ) {
			classie.add( overlay, 'open' );
			path.animate( { 'path' : pathConfig.to }, 400, mina.linear );
		}
	}
    // if ($('.overlay.overlay-cornershape').hasClass('open')) {
    //   toggleOverlay()
    // }

    $('.overlay.overlay-cornershape a').on('click', function(){
    	toggleOverlay()
    })

    triggerBttn.addEventListener( 'click', toggleOverlay );
  })();