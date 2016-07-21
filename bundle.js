webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	// user require with a reference to bundle the file and use it in this file
	// var example = require('./example');

	// load manifests
	// scripts

	__webpack_require__(1);

	// styles
	__webpack_require__(43);

	// attach jQuery globally
	__webpack_require__(52);
	__webpack_require__(53);

	// attach getFormFields globally

	__webpack_require__(54);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var drop = __webpack_require__(3);

	var authEvents = __webpack_require__(6);
	var challengeEvents = __webpack_require__(12);
	var submissionEvents = __webpack_require__(39);

	// On document ready
	$(function () {
	  authEvents.addHandlers();
	  authEvents.signInOrOut();
	  challengeEvents.addHandlers();
	  submissionEvents.addHandlers();
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery UI Effects Drop @VERSION
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Drop Effect
	//>>group: Effects
	//>>description: Moves an element in one direction and hides it at the same time.
	//>>docs: http://api.jqueryui.com/drop-effect/
	//>>demos: http://jqueryui.com/effect/

	( function( factory ) {
		if ( true ) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [
				__webpack_require__(2),
				__webpack_require__(4),
				__webpack_require__(5)
			], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {

			// Browser globals
			factory( jQuery );
		}
	}( function( $ ) {

	return $.effects.define( "drop", "hide", function( options, done ) {

		var distance,
			element = $( this ),
			mode = options.mode,
			show = mode === "show",
			direction = options.direction || "left",
			ref = ( direction === "up" || direction === "down" ) ? "top" : "left",
			motion = ( direction === "up" || direction === "left" ) ? "-=" : "+=",
			oppositeMotion = ( motion === "+=" ) ? "-=" : "+=",
			animation = {
				opacity: 0
			};

		$.effects.createPlaceholder( element );

		distance = options.distance ||
			element[ ref === "top" ? "outerHeight" : "outerWidth" ]( true ) / 2;

		animation[ ref ] = motion + distance;

		if ( show ) {
			element.css( animation );

			animation[ ref ] = oppositeMotion + distance;
			animation.opacity = 1;
		}

		// Animate
		element.animate( animation, {
			queue: false,
			duration: options.duration,
			easing: options.easing,
			complete: done
		} );
	} );

	} ) );


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;( function( factory ) {
		if ( true ) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {

			// Browser globals
			factory( jQuery );
		}
	} ( function( $ ) {

	$.ui = $.ui || {};

	return $.ui.version = "@VERSION";

	} ) );


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery UI Effects @VERSION
	 * http://jqueryui.com
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 */

	//>>label: Effects Core
	//>>group: Effects
	// jscs:disable maximumLineLength
	//>>description: Extends the internal jQuery effects. Includes morphing and easing. Required by all other effects.
	// jscs:enable maximumLineLength
	//>>docs: http://api.jqueryui.com/category/effects-core/
	//>>demos: http://jqueryui.com/effect/

	( function( factory ) {
		if ( true ) {

			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [ __webpack_require__(2), __webpack_require__(4) ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {

			// Browser globals
			factory( jQuery );
		}
	}( function( $ ) {

	var dataSpace = "ui-effects-",
		dataSpaceStyle = "ui-effects-style",
		dataSpaceAnimated = "ui-effects-animated",

		// Create a local jQuery because jQuery Color relies on it and the
		// global may not exist with AMD and a custom build (#10199)
		jQuery = $;

	$.effects = {
		effect: {}
	};

	/*!
	 * jQuery Color Animations v2.1.2
	 * https://github.com/jquery/jquery-color
	 *
	 * Copyright 2014 jQuery Foundation and other contributors
	 * Released under the MIT license.
	 * http://jquery.org/license
	 *
	 * Date: Wed Jan 16 08:47:09 2013 -0600
	 */
	( function( jQuery, undefined ) {

		var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor " +
			"borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

		// Plusequals test for += 100 -= 100
		rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,

		// A set of RE's that can match strings and generate color tuples.
		stringParsers = [ {
				re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse: function( execResult ) {
					return [
						execResult[ 1 ],
						execResult[ 2 ],
						execResult[ 3 ],
						execResult[ 4 ]
					];
				}
			}, {
				re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				parse: function( execResult ) {
					return [
						execResult[ 1 ] * 2.55,
						execResult[ 2 ] * 2.55,
						execResult[ 3 ] * 2.55,
						execResult[ 4 ]
					];
				}
			}, {

				// This regex ignores A-F because it's compared against an already lowercased string
				re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
				parse: function( execResult ) {
					return [
						parseInt( execResult[ 1 ], 16 ),
						parseInt( execResult[ 2 ], 16 ),
						parseInt( execResult[ 3 ], 16 )
					];
				}
			}, {

				// This regex ignores A-F because it's compared against an already lowercased string
				re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
				parse: function( execResult ) {
					return [
						parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
						parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
						parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
					];
				}
			}, {
				re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
				space: "hsla",
				parse: function( execResult ) {
					return [
						execResult[ 1 ],
						execResult[ 2 ] / 100,
						execResult[ 3 ] / 100,
						execResult[ 4 ]
					];
				}
			} ],

		// JQuery.Color( )
		color = jQuery.Color = function( color, green, blue, alpha ) {
			return new jQuery.Color.fn.parse( color, green, blue, alpha );
		},
		spaces = {
			rgba: {
				props: {
					red: {
						idx: 0,
						type: "byte"
					},
					green: {
						idx: 1,
						type: "byte"
					},
					blue: {
						idx: 2,
						type: "byte"
					}
				}
			},

			hsla: {
				props: {
					hue: {
						idx: 0,
						type: "degrees"
					},
					saturation: {
						idx: 1,
						type: "percent"
					},
					lightness: {
						idx: 2,
						type: "percent"
					}
				}
			}
		},
		propTypes = {
			"byte": {
				floor: true,
				max: 255
			},
			"percent": {
				max: 1
			},
			"degrees": {
				mod: 360,
				floor: true
			}
		},
		support = color.support = {},

		// Element for support tests
		supportElem = jQuery( "<p>" )[ 0 ],

		// Colors = jQuery.Color.names
		colors,

		// Local aliases of functions called often
		each = jQuery.each;

	// Determine rgba support immediately
	supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
	support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;

	// Define cache name and alpha properties
	// for rgba and hsla spaces
	each( spaces, function( spaceName, space ) {
		space.cache = "_" + spaceName;
		space.props.alpha = {
			idx: 3,
			type: "percent",
			def: 1
		};
	} );

	function clamp( value, prop, allowEmpty ) {
		var type = propTypes[ prop.type ] || {};

		if ( value == null ) {
			return ( allowEmpty || !prop.def ) ? null : prop.def;
		}

		// ~~ is an short way of doing floor for positive numbers
		value = type.floor ? ~~value : parseFloat( value );

		// IE will pass in empty strings as value for alpha,
		// which will hit this case
		if ( isNaN( value ) ) {
			return prop.def;
		}

		if ( type.mod ) {

			// We add mod before modding to make sure that negatives values
			// get converted properly: -10 -> 350
			return ( value + type.mod ) % type.mod;
		}

		// For now all property types without mod have min and max
		return 0 > value ? 0 : type.max < value ? type.max : value;
	}

	function stringParse( string ) {
		var inst = color(),
			rgba = inst._rgba = [];

		string = string.toLowerCase();

		each( stringParsers, function( i, parser ) {
			var parsed,
				match = parser.re.exec( string ),
				values = match && parser.parse( match ),
				spaceName = parser.space || "rgba";

			if ( values ) {
				parsed = inst[ spaceName ]( values );

				// If this was an rgba parse the assignment might happen twice
				// oh well....
				inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
				rgba = inst._rgba = parsed._rgba;

				// Exit each( stringParsers ) here because we matched
				return false;
			}
		} );

		// Found a stringParser that handled it
		if ( rgba.length ) {

			// If this came from a parsed string, force "transparent" when alpha is 0
			// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
			if ( rgba.join() === "0,0,0,0" ) {
				jQuery.extend( rgba, colors.transparent );
			}
			return inst;
		}

		// Named colors
		return colors[ string ];
	}

	color.fn = jQuery.extend( color.prototype, {
		parse: function( red, green, blue, alpha ) {
			if ( red === undefined ) {
				this._rgba = [ null, null, null, null ];
				return this;
			}
			if ( red.jquery || red.nodeType ) {
				red = jQuery( red ).css( green );
				green = undefined;
			}

			var inst = this,
				type = jQuery.type( red ),
				rgba = this._rgba = [];

			// More than 1 argument specified - assume ( red, green, blue, alpha )
			if ( green !== undefined ) {
				red = [ red, green, blue, alpha ];
				type = "array";
			}

			if ( type === "string" ) {
				return this.parse( stringParse( red ) || colors._default );
			}

			if ( type === "array" ) {
				each( spaces.rgba.props, function( key, prop ) {
					rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
				} );
				return this;
			}

			if ( type === "object" ) {
				if ( red instanceof color ) {
					each( spaces, function( spaceName, space ) {
						if ( red[ space.cache ] ) {
							inst[ space.cache ] = red[ space.cache ].slice();
						}
					} );
				} else {
					each( spaces, function( spaceName, space ) {
						var cache = space.cache;
						each( space.props, function( key, prop ) {

							// If the cache doesn't exist, and we know how to convert
							if ( !inst[ cache ] && space.to ) {

								// If the value was null, we don't need to copy it
								// if the key was alpha, we don't need to copy it either
								if ( key === "alpha" || red[ key ] == null ) {
									return;
								}
								inst[ cache ] = space.to( inst._rgba );
							}

							// This is the only case where we allow nulls for ALL properties.
							// call clamp with alwaysAllowEmpty
							inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
						} );

						// Everything defined but alpha?
						if ( inst[ cache ] &&
								jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {

							// Use the default of 1
							inst[ cache ][ 3 ] = 1;
							if ( space.from ) {
								inst._rgba = space.from( inst[ cache ] );
							}
						}
					} );
				}
				return this;
			}
		},
		is: function( compare ) {
			var is = color( compare ),
				same = true,
				inst = this;

			each( spaces, function( _, space ) {
				var localCache,
					isCache = is[ space.cache ];
				if ( isCache ) {
					localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
					each( space.props, function( _, prop ) {
						if ( isCache[ prop.idx ] != null ) {
							same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
							return same;
						}
					} );
				}
				return same;
			} );
			return same;
		},
		_space: function() {
			var used = [],
				inst = this;
			each( spaces, function( spaceName, space ) {
				if ( inst[ space.cache ] ) {
					used.push( spaceName );
				}
			} );
			return used.pop();
		},
		transition: function( other, distance ) {
			var end = color( other ),
				spaceName = end._space(),
				space = spaces[ spaceName ],
				startColor = this.alpha() === 0 ? color( "transparent" ) : this,
				start = startColor[ space.cache ] || space.to( startColor._rgba ),
				result = start.slice();

			end = end[ space.cache ];
			each( space.props, function( key, prop ) {
				var index = prop.idx,
					startValue = start[ index ],
					endValue = end[ index ],
					type = propTypes[ prop.type ] || {};

				// If null, don't override start value
				if ( endValue === null ) {
					return;
				}

				// If null - use end
				if ( startValue === null ) {
					result[ index ] = endValue;
				} else {
					if ( type.mod ) {
						if ( endValue - startValue > type.mod / 2 ) {
							startValue += type.mod;
						} else if ( startValue - endValue > type.mod / 2 ) {
							startValue -= type.mod;
						}
					}
					result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
				}
			} );
			return this[ spaceName ]( result );
		},
		blend: function( opaque ) {

			// If we are already opaque - return ourself
			if ( this._rgba[ 3 ] === 1 ) {
				return this;
			}

			var rgb = this._rgba.slice(),
				a = rgb.pop(),
				blend = color( opaque )._rgba;

			return color( jQuery.map( rgb, function( v, i ) {
				return ( 1 - a ) * blend[ i ] + a * v;
			} ) );
		},
		toRgbaString: function() {
			var prefix = "rgba(",
				rgba = jQuery.map( this._rgba, function( v, i ) {
					return v == null ? ( i > 2 ? 1 : 0 ) : v;
				} );

			if ( rgba[ 3 ] === 1 ) {
				rgba.pop();
				prefix = "rgb(";
			}

			return prefix + rgba.join() + ")";
		},
		toHslaString: function() {
			var prefix = "hsla(",
				hsla = jQuery.map( this.hsla(), function( v, i ) {
					if ( v == null ) {
						v = i > 2 ? 1 : 0;
					}

					// Catch 1 and 2
					if ( i && i < 3 ) {
						v = Math.round( v * 100 ) + "%";
					}
					return v;
				} );

			if ( hsla[ 3 ] === 1 ) {
				hsla.pop();
				prefix = "hsl(";
			}
			return prefix + hsla.join() + ")";
		},
		toHexString: function( includeAlpha ) {
			var rgba = this._rgba.slice(),
				alpha = rgba.pop();

			if ( includeAlpha ) {
				rgba.push( ~~( alpha * 255 ) );
			}

			return "#" + jQuery.map( rgba, function( v ) {

				// Default to 0 when nulls exist
				v = ( v || 0 ).toString( 16 );
				return v.length === 1 ? "0" + v : v;
			} ).join( "" );
		},
		toString: function() {
			return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
		}
	} );
	color.fn.parse.prototype = color.fn;

	// Hsla conversions adapted from:
	// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

	function hue2rgb( p, q, h ) {
		h = ( h + 1 ) % 1;
		if ( h * 6 < 1 ) {
			return p + ( q - p ) * h * 6;
		}
		if ( h * 2 < 1 ) {
			return q;
		}
		if ( h * 3 < 2 ) {
			return p + ( q - p ) * ( ( 2 / 3 ) - h ) * 6;
		}
		return p;
	}

	spaces.hsla.to = function( rgba ) {
		if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
			return [ null, null, null, rgba[ 3 ] ];
		}
		var r = rgba[ 0 ] / 255,
			g = rgba[ 1 ] / 255,
			b = rgba[ 2 ] / 255,
			a = rgba[ 3 ],
			max = Math.max( r, g, b ),
			min = Math.min( r, g, b ),
			diff = max - min,
			add = max + min,
			l = add * 0.5,
			h, s;

		if ( min === max ) {
			h = 0;
		} else if ( r === max ) {
			h = ( 60 * ( g - b ) / diff ) + 360;
		} else if ( g === max ) {
			h = ( 60 * ( b - r ) / diff ) + 120;
		} else {
			h = ( 60 * ( r - g ) / diff ) + 240;
		}

		// Chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
		// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
		if ( diff === 0 ) {
			s = 0;
		} else if ( l <= 0.5 ) {
			s = diff / add;
		} else {
			s = diff / ( 2 - add );
		}
		return [ Math.round( h ) % 360, s, l, a == null ? 1 : a ];
	};

	spaces.hsla.from = function( hsla ) {
		if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
			return [ null, null, null, hsla[ 3 ] ];
		}
		var h = hsla[ 0 ] / 360,
			s = hsla[ 1 ],
			l = hsla[ 2 ],
			a = hsla[ 3 ],
			q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
			p = 2 * l - q;

		return [
			Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
			Math.round( hue2rgb( p, q, h ) * 255 ),
			Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
			a
		];
	};

	each( spaces, function( spaceName, space ) {
		var props = space.props,
			cache = space.cache,
			to = space.to,
			from = space.from;

		// Makes rgba() and hsla()
		color.fn[ spaceName ] = function( value ) {

			// Generate a cache for this space if it doesn't exist
			if ( to && !this[ cache ] ) {
				this[ cache ] = to( this._rgba );
			}
			if ( value === undefined ) {
				return this[ cache ].slice();
			}

			var ret,
				type = jQuery.type( value ),
				arr = ( type === "array" || type === "object" ) ? value : arguments,
				local = this[ cache ].slice();

			each( props, function( key, prop ) {
				var val = arr[ type === "object" ? key : prop.idx ];
				if ( val == null ) {
					val = local[ prop.idx ];
				}
				local[ prop.idx ] = clamp( val, prop );
			} );

			if ( from ) {
				ret = color( from( local ) );
				ret[ cache ] = local;
				return ret;
			} else {
				return color( local );
			}
		};

		// Makes red() green() blue() alpha() hue() saturation() lightness()
		each( props, function( key, prop ) {

			// Alpha is included in more than one space
			if ( color.fn[ key ] ) {
				return;
			}
			color.fn[ key ] = function( value ) {
				var vtype = jQuery.type( value ),
					fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
					local = this[ fn ](),
					cur = local[ prop.idx ],
					match;

				if ( vtype === "undefined" ) {
					return cur;
				}

				if ( vtype === "function" ) {
					value = value.call( this, cur );
					vtype = jQuery.type( value );
				}
				if ( value == null && prop.empty ) {
					return this;
				}
				if ( vtype === "string" ) {
					match = rplusequals.exec( value );
					if ( match ) {
						value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
					}
				}
				local[ prop.idx ] = value;
				return this[ fn ]( local );
			};
		} );
	} );

	// Add cssHook and .fx.step function for each named hook.
	// accept a space separated string of properties
	color.hook = function( hook ) {
		var hooks = hook.split( " " );
		each( hooks, function( i, hook ) {
			jQuery.cssHooks[ hook ] = {
				set: function( elem, value ) {
					var parsed, curElem,
						backgroundColor = "";

					if ( value !== "transparent" && ( jQuery.type( value ) !== "string" ||
							( parsed = stringParse( value ) ) ) ) {
						value = color( parsed || value );
						if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
							curElem = hook === "backgroundColor" ? elem.parentNode : elem;
							while (
								( backgroundColor === "" || backgroundColor === "transparent" ) &&
								curElem && curElem.style
							) {
								try {
									backgroundColor = jQuery.css( curElem, "backgroundColor" );
									curElem = curElem.parentNode;
								} catch ( e ) {
								}
							}

							value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
								backgroundColor :
								"_default" );
						}

						value = value.toRgbaString();
					}
					try {
						elem.style[ hook ] = value;
					} catch ( e ) {

						// Wrapped to prevent IE from throwing errors on "invalid" values like
						// 'auto' or 'inherit'
					}
				}
			};
			jQuery.fx.step[ hook ] = function( fx ) {
				if ( !fx.colorInit ) {
					fx.start = color( fx.elem, hook );
					fx.end = color( fx.end );
					fx.colorInit = true;
				}
				jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
			};
		} );

	};

	color.hook( stepHooks );

	jQuery.cssHooks.borderColor = {
		expand: function( value ) {
			var expanded = {};

			each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
				expanded[ "border" + part + "Color" ] = value;
			} );
			return expanded;
		}
	};

	// Basic color names only.
	// Usage of any of the other color names requires adding yourself or including
	// jquery.color.svg-names.js.
	colors = jQuery.Color.names = {

		// 4.1. Basic color keywords
		aqua: "#00ffff",
		black: "#000000",
		blue: "#0000ff",
		fuchsia: "#ff00ff",
		gray: "#808080",
		green: "#008000",
		lime: "#00ff00",
		maroon: "#800000",
		navy: "#000080",
		olive: "#808000",
		purple: "#800080",
		red: "#ff0000",
		silver: "#c0c0c0",
		teal: "#008080",
		white: "#ffffff",
		yellow: "#ffff00",

		// 4.2.3. "transparent" color keyword
		transparent: [ null, null, null, 0 ],

		_default: "#ffffff"
	};

	} )( jQuery );

	/******************************************************************************/
	/****************************** CLASS ANIMATIONS ******************************/
	/******************************************************************************/
	( function() {

	var classAnimationActions = [ "add", "remove", "toggle" ],
		shorthandStyles = {
			border: 1,
			borderBottom: 1,
			borderColor: 1,
			borderLeft: 1,
			borderRight: 1,
			borderTop: 1,
			borderWidth: 1,
			margin: 1,
			padding: 1
		};

	$.each(
		[ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ],
		function( _, prop ) {
			$.fx.step[ prop ] = function( fx ) {
				if ( fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr ) {
					jQuery.style( fx.elem, prop, fx.end );
					fx.setAttr = true;
				}
			};
		}
	);

	function getElementStyles( elem ) {
		var key, len,
			style = elem.ownerDocument.defaultView ?
				elem.ownerDocument.defaultView.getComputedStyle( elem, null ) :
				elem.currentStyle,
			styles = {};

		if ( style && style.length && style[ 0 ] && style[ style[ 0 ] ] ) {
			len = style.length;
			while ( len-- ) {
				key = style[ len ];
				if ( typeof style[ key ] === "string" ) {
					styles[ $.camelCase( key ) ] = style[ key ];
				}
			}

		// Support: Opera, IE <9
		} else {
			for ( key in style ) {
				if ( typeof style[ key ] === "string" ) {
					styles[ key ] = style[ key ];
				}
			}
		}

		return styles;
	}

	function styleDifference( oldStyle, newStyle ) {
		var diff = {},
			name, value;

		for ( name in newStyle ) {
			value = newStyle[ name ];
			if ( oldStyle[ name ] !== value ) {
				if ( !shorthandStyles[ name ] ) {
					if ( $.fx.step[ name ] || !isNaN( parseFloat( value ) ) ) {
						diff[ name ] = value;
					}
				}
			}
		}

		return diff;
	}

	// Support: jQuery <1.8
	if ( !$.fn.addBack ) {
		$.fn.addBack = function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		};
	}

	$.effects.animateClass = function( value, duration, easing, callback ) {
		var o = $.speed( duration, easing, callback );

		return this.queue( function() {
			var animated = $( this ),
				baseClass = animated.attr( "class" ) || "",
				applyClassChange,
				allAnimations = o.children ? animated.find( "*" ).addBack() : animated;

			// Map the animated objects to store the original styles.
			allAnimations = allAnimations.map( function() {
				var el = $( this );
				return {
					el: el,
					start: getElementStyles( this )
				};
			} );

			// Apply class change
			applyClassChange = function() {
				$.each( classAnimationActions, function( i, action ) {
					if ( value[ action ] ) {
						animated[ action + "Class" ]( value[ action ] );
					}
				} );
			};
			applyClassChange();

			// Map all animated objects again - calculate new styles and diff
			allAnimations = allAnimations.map( function() {
				this.end = getElementStyles( this.el[ 0 ] );
				this.diff = styleDifference( this.start, this.end );
				return this;
			} );

			// Apply original class
			animated.attr( "class", baseClass );

			// Map all animated objects again - this time collecting a promise
			allAnimations = allAnimations.map( function() {
				var styleInfo = this,
					dfd = $.Deferred(),
					opts = $.extend( {}, o, {
						queue: false,
						complete: function() {
							dfd.resolve( styleInfo );
						}
					} );

				this.el.animate( this.diff, opts );
				return dfd.promise();
			} );

			// Once all animations have completed:
			$.when.apply( $, allAnimations.get() ).done( function() {

				// Set the final class
				applyClassChange();

				// For each animated element,
				// clear all css properties that were animated
				$.each( arguments, function() {
					var el = this.el;
					$.each( this.diff, function( key ) {
						el.css( key, "" );
					} );
				} );

				// This is guarnteed to be there if you use jQuery.speed()
				// it also handles dequeuing the next anim...
				o.complete.call( animated[ 0 ] );
			} );
		} );
	};

	$.fn.extend( {
		addClass: ( function( orig ) {
			return function( classNames, speed, easing, callback ) {
				return speed ?
					$.effects.animateClass.call( this,
						{ add: classNames }, speed, easing, callback ) :
					orig.apply( this, arguments );
			};
		} )( $.fn.addClass ),

		removeClass: ( function( orig ) {
			return function( classNames, speed, easing, callback ) {
				return arguments.length > 1 ?
					$.effects.animateClass.call( this,
						{ remove: classNames }, speed, easing, callback ) :
					orig.apply( this, arguments );
			};
		} )( $.fn.removeClass ),

		toggleClass: ( function( orig ) {
			return function( classNames, force, speed, easing, callback ) {
				if ( typeof force === "boolean" || force === undefined ) {
					if ( !speed ) {

						// Without speed parameter
						return orig.apply( this, arguments );
					} else {
						return $.effects.animateClass.call( this,
							( force ? { add: classNames } : { remove: classNames } ),
							speed, easing, callback );
					}
				} else {

					// Without force parameter
					return $.effects.animateClass.call( this,
						{ toggle: classNames }, force, speed, easing );
				}
			};
		} )( $.fn.toggleClass ),

		switchClass: function( remove, add, speed, easing, callback ) {
			return $.effects.animateClass.call( this, {
				add: add,
				remove: remove
			}, speed, easing, callback );
		}
	} );

	} )();

	/******************************************************************************/
	/*********************************** EFFECTS **********************************/
	/******************************************************************************/

	( function() {

	if ( $.expr && $.expr.filters && $.expr.filters.animated ) {
		$.expr.filters.animated = ( function( orig ) {
			return function( elem ) {
				return !!$( elem ).data( dataSpaceAnimated ) || orig( elem );
			};
		} )( $.expr.filters.animated );
	}

	if ( $.uiBackCompat !== false ) {
		$.extend( $.effects, {

			// Saves a set of properties in a data storage
			save: function( element, set ) {
				var i = 0, length = set.length;
				for ( ; i < length; i++ ) {
					if ( set[ i ] !== null ) {
						element.data( dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ] );
					}
				}
			},

			// Restores a set of previously saved properties from a data storage
			restore: function( element, set ) {
				var val, i = 0, length = set.length;
				for ( ; i < length; i++ ) {
					if ( set[ i ] !== null ) {
						val = element.data( dataSpace + set[ i ] );
						element.css( set[ i ], val );
					}
				}
			},

			setMode: function( el, mode ) {
				if ( mode === "toggle" ) {
					mode = el.is( ":hidden" ) ? "show" : "hide";
				}
				return mode;
			},

			// Wraps the element around a wrapper that copies position properties
			createWrapper: function( element ) {

				// If the element is already wrapped, return it
				if ( element.parent().is( ".ui-effects-wrapper" ) ) {
					return element.parent();
				}

				// Wrap the element
				var props = {
						width: element.outerWidth( true ),
						height: element.outerHeight( true ),
						"float": element.css( "float" )
					},
					wrapper = $( "<div></div>" )
						.addClass( "ui-effects-wrapper" )
						.css( {
							fontSize: "100%",
							background: "transparent",
							border: "none",
							margin: 0,
							padding: 0
						} ),

					// Store the size in case width/height are defined in % - Fixes #5245
					size = {
						width: element.width(),
						height: element.height()
					},
					active = document.activeElement;

				// Support: Firefox
				// Firefox incorrectly exposes anonymous content
				// https://bugzilla.mozilla.org/show_bug.cgi?id=561664
				try {
					active.id;
				} catch ( e ) {
					active = document.body;
				}

				element.wrap( wrapper );

				// Fixes #7595 - Elements lose focus when wrapped.
				if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
					$( active ).trigger( "focus" );
				}

				// Hotfix for jQuery 1.4 since some change in wrap() seems to actually
				// lose the reference to the wrapped element
				wrapper = element.parent();

				// Transfer positioning properties to the wrapper
				if ( element.css( "position" ) === "static" ) {
					wrapper.css( { position: "relative" } );
					element.css( { position: "relative" } );
				} else {
					$.extend( props, {
						position: element.css( "position" ),
						zIndex: element.css( "z-index" )
					} );
					$.each( [ "top", "left", "bottom", "right" ], function( i, pos ) {
						props[ pos ] = element.css( pos );
						if ( isNaN( parseInt( props[ pos ], 10 ) ) ) {
							props[ pos ] = "auto";
						}
					} );
					element.css( {
						position: "relative",
						top: 0,
						left: 0,
						right: "auto",
						bottom: "auto"
					} );
				}
				element.css( size );

				return wrapper.css( props ).show();
			},

			removeWrapper: function( element ) {
				var active = document.activeElement;

				if ( element.parent().is( ".ui-effects-wrapper" ) ) {
					element.parent().replaceWith( element );

					// Fixes #7595 - Elements lose focus when wrapped.
					if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
						$( active ).trigger( "focus" );
					}
				}

				return element;
			}
		} );
	}

	$.extend( $.effects, {
		version: "@VERSION",

		define: function( name, mode, effect ) {
			if ( !effect ) {
				effect = mode;
				mode = "effect";
			}

			$.effects.effect[ name ] = effect;
			$.effects.effect[ name ].mode = mode;

			return effect;
		},

		scaledDimensions: function( element, percent, direction ) {
			if ( percent === 0 ) {
				return {
					height: 0,
					width: 0,
					outerHeight: 0,
					outerWidth: 0
				};
			}

			var x = direction !== "horizontal" ? ( ( percent || 100 ) / 100 ) : 1,
				y = direction !== "vertical" ? ( ( percent || 100 ) / 100 ) : 1;

			return {
				height: element.height() * y,
				width: element.width() * x,
				outerHeight: element.outerHeight() * y,
				outerWidth: element.outerWidth() * x
			};

		},

		clipToBox: function( animation ) {
			return {
				width: animation.clip.right - animation.clip.left,
				height: animation.clip.bottom - animation.clip.top,
				left: animation.clip.left,
				top: animation.clip.top
			};
		},

		// Injects recently queued functions to be first in line (after "inprogress")
		unshift: function( element, queueLength, count ) {
			var queue = element.queue();

			if ( queueLength > 1 ) {
				queue.splice.apply( queue,
					[ 1, 0 ].concat( queue.splice( queueLength, count ) ) );
			}
			element.dequeue();
		},

		saveStyle: function( element ) {
			element.data( dataSpaceStyle, element[ 0 ].style.cssText );
		},

		restoreStyle: function( element ) {
			element[ 0 ].style.cssText = element.data( dataSpaceStyle ) || "";
			element.removeData( dataSpaceStyle );
		},

		mode: function( element, mode ) {
			var hidden = element.is( ":hidden" );

			if ( mode === "toggle" ) {
				mode = hidden ? "show" : "hide";
			}
			if ( hidden ? mode === "hide" : mode === "show" ) {
				mode = "none";
			}
			return mode;
		},

		// Translates a [top,left] array into a baseline value
		getBaseline: function( origin, original ) {
			var y, x;

			switch ( origin[ 0 ] ) {
			case "top":
				y = 0;
				break;
			case "middle":
				y = 0.5;
				break;
			case "bottom":
				y = 1;
				break;
			default:
				y = origin[ 0 ] / original.height;
			}

			switch ( origin[ 1 ] ) {
			case "left":
				x = 0;
				break;
			case "center":
				x = 0.5;
				break;
			case "right":
				x = 1;
				break;
			default:
				x = origin[ 1 ] / original.width;
			}

			return {
				x: x,
				y: y
			};
		},

		// Creates a placeholder element so that the original element can be made absolute
		createPlaceholder: function( element ) {
			var placeholder,
				cssPosition = element.css( "position" ),
				position = element.position();

			// Lock in margins first to account for form elements, which
			// will change margin if you explicitly set height
			// see: http://jsfiddle.net/JZSMt/3/ https://bugs.webkit.org/show_bug.cgi?id=107380
			// Support: Safari
			element.css( {
				marginTop: element.css( "marginTop" ),
				marginBottom: element.css( "marginBottom" ),
				marginLeft: element.css( "marginLeft" ),
				marginRight: element.css( "marginRight" )
			} )
			.outerWidth( element.outerWidth() )
			.outerHeight( element.outerHeight() );

			if ( /^(static|relative)/.test( cssPosition ) ) {
				cssPosition = "absolute";

				placeholder = $( "<" + element[ 0 ].nodeName + ">" ).insertAfter( element ).css( {

					// Convert inline to inline block to account for inline elements
					// that turn to inline block based on content (like img)
					display: /^(inline|ruby)/.test( element.css( "display" ) ) ?
						"inline-block" :
						"block",
					visibility: "hidden",

					// Margins need to be set to account for margin collapse
					marginTop: element.css( "marginTop" ),
					marginBottom: element.css( "marginBottom" ),
					marginLeft: element.css( "marginLeft" ),
					marginRight: element.css( "marginRight" ),
					"float": element.css( "float" )
				} )
				.outerWidth( element.outerWidth() )
				.outerHeight( element.outerHeight() )
				.addClass( "ui-effects-placeholder" );

				element.data( dataSpace + "placeholder", placeholder );
			}

			element.css( {
				position: cssPosition,
				left: position.left,
				top: position.top
			} );

			return placeholder;
		},

		removePlaceholder: function( element ) {
			var dataKey = dataSpace + "placeholder",
					placeholder = element.data( dataKey );

			if ( placeholder ) {
				placeholder.remove();
				element.removeData( dataKey );
			}
		},

		// Removes a placeholder if it exists and restores
		// properties that were modified during placeholder creation
		cleanUp: function( element ) {
			$.effects.restoreStyle( element );
			$.effects.removePlaceholder( element );
		},

		setTransition: function( element, list, factor, value ) {
			value = value || {};
			$.each( list, function( i, x ) {
				var unit = element.cssUnit( x );
				if ( unit[ 0 ] > 0 ) {
					value[ x ] = unit[ 0 ] * factor + unit[ 1 ];
				}
			} );
			return value;
		}
	} );

	// Return an effect options object for the given parameters:
	function _normalizeArguments( effect, options, speed, callback ) {

		// Allow passing all options as the first parameter
		if ( $.isPlainObject( effect ) ) {
			options = effect;
			effect = effect.effect;
		}

		// Convert to an object
		effect = { effect: effect };

		// Catch (effect, null, ...)
		if ( options == null ) {
			options = {};
		}

		// Catch (effect, callback)
		if ( $.isFunction( options ) ) {
			callback = options;
			speed = null;
			options = {};
		}

		// Catch (effect, speed, ?)
		if ( typeof options === "number" || $.fx.speeds[ options ] ) {
			callback = speed;
			speed = options;
			options = {};
		}

		// Catch (effect, options, callback)
		if ( $.isFunction( speed ) ) {
			callback = speed;
			speed = null;
		}

		// Add options to effect
		if ( options ) {
			$.extend( effect, options );
		}

		speed = speed || options.duration;
		effect.duration = $.fx.off ? 0 :
			typeof speed === "number" ? speed :
			speed in $.fx.speeds ? $.fx.speeds[ speed ] :
			$.fx.speeds._default;

		effect.complete = callback || options.complete;

		return effect;
	}

	function standardAnimationOption( option ) {

		// Valid standard speeds (nothing, number, named speed)
		if ( !option || typeof option === "number" || $.fx.speeds[ option ] ) {
			return true;
		}

		// Invalid strings - treat as "normal" speed
		if ( typeof option === "string" && !$.effects.effect[ option ] ) {
			return true;
		}

		// Complete callback
		if ( $.isFunction( option ) ) {
			return true;
		}

		// Options hash (but not naming an effect)
		if ( typeof option === "object" && !option.effect ) {
			return true;
		}

		// Didn't match any standard API
		return false;
	}

	$.fn.extend( {
		effect: function( /* effect, options, speed, callback */ ) {
			var args = _normalizeArguments.apply( this, arguments ),
				effectMethod = $.effects.effect[ args.effect ],
				defaultMode = effectMethod.mode,
				queue = args.queue,
				queueName = queue || "fx",
				complete = args.complete,
				mode = args.mode,
				modes = [],
				prefilter = function( next ) {
					var el = $( this ),
						normalizedMode = $.effects.mode( el, mode ) || defaultMode;

					// Sentinel for duck-punching the :animated psuedo-selector
					el.data( dataSpaceAnimated, true );

					// Save effect mode for later use,
					// we can't just call $.effects.mode again later,
					// as the .show() below destroys the initial state
					modes.push( normalizedMode );

					// See $.uiBackCompat inside of run() for removal of defaultMode in 1.13
					if ( defaultMode && ( normalizedMode === "show" ||
							( normalizedMode === defaultMode && normalizedMode === "hide" ) ) ) {
						el.show();
					}

					if ( !defaultMode || normalizedMode !== "none" ) {
						$.effects.saveStyle( el );
					}

					if ( $.isFunction( next ) ) {
						next();
					}
				};

			if ( $.fx.off || !effectMethod ) {

				// Delegate to the original method (e.g., .show()) if possible
				if ( mode ) {
					return this[ mode ]( args.duration, complete );
				} else {
					return this.each( function() {
						if ( complete ) {
							complete.call( this );
						}
					} );
				}
			}

			function run( next ) {
				var elem = $( this );

				function cleanup() {
					elem.removeData( dataSpaceAnimated );

					$.effects.cleanUp( elem );

					if ( args.mode === "hide" ) {
						elem.hide();
					}

					done();
				}

				function done() {
					if ( $.isFunction( complete ) ) {
						complete.call( elem[ 0 ] );
					}

					if ( $.isFunction( next ) ) {
						next();
					}
				}

				// Override mode option on a per element basis,
				// as toggle can be either show or hide depending on element state
				args.mode = modes.shift();

				if ( $.uiBackCompat !== false && !defaultMode ) {
					if ( elem.is( ":hidden" ) ? mode === "hide" : mode === "show" ) {

						// Call the core method to track "olddisplay" properly
						elem[ mode ]();
						done();
					} else {
						effectMethod.call( elem[ 0 ], args, done );
					}
				} else {
					if ( args.mode === "none" ) {

						// Call the core method to track "olddisplay" properly
						elem[ mode ]();
						done();
					} else {
						effectMethod.call( elem[ 0 ], args, cleanup );
					}
				}
			}

			// Run prefilter on all elements first to ensure that
			// any showing or hiding happens before placeholder creation,
			// which ensures that any layout changes are correctly captured.
			return queue === false ?
				this.each( prefilter ).each( run ) :
				this.queue( queueName, prefilter ).queue( queueName, run );
		},

		show: ( function( orig ) {
			return function( option ) {
				if ( standardAnimationOption( option ) ) {
					return orig.apply( this, arguments );
				} else {
					var args = _normalizeArguments.apply( this, arguments );
					args.mode = "show";
					return this.effect.call( this, args );
				}
			};
		} )( $.fn.show ),

		hide: ( function( orig ) {
			return function( option ) {
				if ( standardAnimationOption( option ) ) {
					return orig.apply( this, arguments );
				} else {
					var args = _normalizeArguments.apply( this, arguments );
					args.mode = "hide";
					return this.effect.call( this, args );
				}
			};
		} )( $.fn.hide ),

		toggle: ( function( orig ) {
			return function( option ) {
				if ( standardAnimationOption( option ) || typeof option === "boolean" ) {
					return orig.apply( this, arguments );
				} else {
					var args = _normalizeArguments.apply( this, arguments );
					args.mode = "toggle";
					return this.effect.call( this, args );
				}
			};
		} )( $.fn.toggle ),

		cssUnit: function( key ) {
			var style = this.css( key ),
				val = [];

			$.each( [ "em", "px", "%", "pt" ], function( i, unit ) {
				if ( style.indexOf( unit ) > 0 ) {
					val = [ parseFloat( style ), unit ];
				}
			} );
			return val;
		},

		cssClip: function( clipObj ) {
			if ( clipObj ) {
				return this.css( "clip", "rect(" + clipObj.top + "px " + clipObj.right + "px " +
					clipObj.bottom + "px " + clipObj.left + "px)" );
			}
			return parseClip( this.css( "clip" ), this );
		},

		transfer: function( options, done ) {
			var element = $( this ),
				target = $( options.to ),
				targetFixed = target.css( "position" ) === "fixed",
				body = $( "body" ),
				fixTop = targetFixed ? body.scrollTop() : 0,
				fixLeft = targetFixed ? body.scrollLeft() : 0,
				endPosition = target.offset(),
				animation = {
					top: endPosition.top - fixTop,
					left: endPosition.left - fixLeft,
					height: target.innerHeight(),
					width: target.innerWidth()
				},
				startPosition = element.offset(),
				transfer = $( "<div class='ui-effects-transfer'></div>" )
					.appendTo( "body" )
					.addClass( options.className )
					.css( {
						top: startPosition.top - fixTop,
						left: startPosition.left - fixLeft,
						height: element.innerHeight(),
						width: element.innerWidth(),
						position: targetFixed ? "fixed" : "absolute"
					} )
					.animate( animation, options.duration, options.easing, function() {
						transfer.remove();
						if ( $.isFunction( done ) ) {
							done();
						}
					} );
		}
	} );

	function parseClip( str, element ) {
			var outerWidth = element.outerWidth(),
				outerHeight = element.outerHeight(),
				clipRegex = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
				values = clipRegex.exec( str ) || [ "", 0, outerWidth, outerHeight, 0 ];

			return {
				top: parseFloat( values[ 1 ] ) || 0,
				right: values[ 2 ] === "auto" ? outerWidth : parseFloat( values[ 2 ] ),
				bottom: values[ 3 ] === "auto" ? outerHeight : parseFloat( values[ 3 ] ),
				left: parseFloat( values[ 4 ] ) || 0
			};
	}

	$.fx.step.clip = function( fx ) {
		if ( !fx.clipInit ) {
			fx.start = $( fx.elem ).cssClip();
			if ( typeof fx.end === "string" ) {
				fx.end = parseClip( fx.end, fx.elem );
			}
			fx.clipInit = true;
		}

		$( fx.elem ).cssClip( {
			top: fx.pos * ( fx.end.top - fx.start.top ) + fx.start.top,
			right: fx.pos * ( fx.end.right - fx.start.right ) + fx.start.right,
			bottom: fx.pos * ( fx.end.bottom - fx.start.bottom ) + fx.start.bottom,
			left: fx.pos * ( fx.end.left - fx.start.left ) + fx.start.left
		} );
	};

	} )();

	/******************************************************************************/
	/*********************************** EASING ***********************************/
	/******************************************************************************/

	( function() {

	// Based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

	var baseEasings = {};

	$.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
		baseEasings[ name ] = function( p ) {
			return Math.pow( p, i + 2 );
		};
	} );

	$.extend( baseEasings, {
		Sine: function( p ) {
			return 1 - Math.cos( p * Math.PI / 2 );
		},
		Circ: function( p ) {
			return 1 - Math.sqrt( 1 - p * p );
		},
		Elastic: function( p ) {
			return p === 0 || p === 1 ? p :
				-Math.pow( 2, 8 * ( p - 1 ) ) * Math.sin( ( ( p - 1 ) * 80 - 7.5 ) * Math.PI / 15 );
		},
		Back: function( p ) {
			return p * p * ( 3 * p - 2 );
		},
		Bounce: function( p ) {
			var pow2,
				bounce = 4;

			while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
			return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
		}
	} );

	$.each( baseEasings, function( name, easeIn ) {
		$.easing[ "easeIn" + name ] = easeIn;
		$.easing[ "easeOut" + name ] = function( p ) {
			return 1 - easeIn( 1 - p );
		};
		$.easing[ "easeInOut" + name ] = function( p ) {
			return p < 0.5 ?
				easeIn( p * 2 ) / 2 :
				1 - easeIn( p * -2 + 2 ) / 2;
		};
	} );

	} )();

	return $.effects;

	} ) );


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var getFormFields = __webpack_require__(7);
	var app = __webpack_require__(8);
	var api = __webpack_require__(9);
	var ui = __webpack_require__(10);
	var helpers = __webpack_require__(11);

	var onSignUp = function onSignUp(event) {
	  event.preventDefault();
	  var data = getFormFields(event.target);
	  api.signUp(data).done(ui.signUpSuccess).fail(ui.signUpFailure);
	};

	var onSignIn = function onSignIn(event) {
	  event.preventDefault();
	  var data = getFormFields(event.target);
	  api.signIn(data).done(ui.signInSuccess).fail(ui.signInFailure);
	};

	var onSignOut = function onSignOut(event) {
	  event.preventDefault();
	  api.signOut().done(ui.signOutSuccess).fail(ui.failure);
	};

	var onChangePassword = function onChangePassword(event) {
	  event.preventDefault();
	  var data = getFormFields(event.target);
	  api.changePassword(data).done(ui.changePasswordSuccess).fail(ui.changePasswordFailure);
	};

	var addHandlers = function addHandlers() {
	  $('#sign-up').on('submit', onSignUp);
	  $('#sign-in').on('submit', onSignIn);
	  $('#sign-out').on('submit', onSignOut);
	  $('#change-password').on('submit', onChangePassword);
	};

	var signInOrOut = function signInOrOut() {
	  $(function () {
	    if (app.user) {
	      $('.signed-out').hide();
	      $('#signed-out').hide();
	    } else {
	      $('.signed-in').hide();
	    }
	  });
	};

	module.exports = {
	  addHandlers: addHandlers,
	  signInOrOut: signInOrOut
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	var addFormField = function addFormField(target, names, value) {
	  var name = names.shift();
	  var next = names[0];
	  if (next === '') {
	    // name is an array
	    target[name] = target[name] || [];
	    target[name].push(value);
	  } else if (next) {
	    // name is a parent key
	    target[name] = target[name] || {};
	    addFormField(target[name], names, value);
	  } else {
	    // name is the key for value
	    target[name] = value;
	  }

	  return target;
	};

	var getFormFields = function getFormFields(form) {
	  var target = {};

	  var elements = form.elements || [];
	  for (var i = 0; i < elements.length; i++) {
	    var e = elements[i];
	    if (!e.hasAttribute('name')) {
	      continue;
	    }

	    var type = 'TEXT';
	    switch (e.nodeName.toUpperCase()) {
	      case 'SELECT':
	        type = e.hasAttribute('multiple') ? 'MULTIPLE' : type;
	        break;
	      case 'INPUT':
	        type = e.getAttribute('type').toUpperCase();
	        break;
	    }

	    var names = e.getAttribute('name').split('[').map(function (k) {
	      return k.replace(/]$/, '');
	    });

	    if (type === 'MULTIPLE') {
	      for (var _i = 0; _i < e.length; _i++) {
	        if (e[_i].selected) {
	          addFormField(target, names.slice(), e[_i].value);
	        }
	      }
	    } else if (type !== 'RADIO' && type !== 'CHECKBOX' || e.checked) {
	      addFormField(target, names, e.value);
	    }
	  }

	  return target;
	};

	module.exports = getFormFields;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	var app = {
	  host: 'https://hackstash.herokuapp.com',
	  // host: 'http://localhost:3000',
	  user: null,
	  currentUserChallenge: null
	};

	module.exports = app;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var app = __webpack_require__(8);

	var signUp = function signUp(data) {
	  return $.ajax({
	    url: app.host + '/sign-up',
	    method: "POST",
	    data: data
	  });
	};

	var signIn = function signIn(data) {
	  return $.ajax({
	    url: app.host + '/sign-in',
	    method: "POST",
	    data: data
	  });
	};

	var signOut = function signOut() {
	  return $.ajax({
	    url: app.host + '/sign-out/' + app.user._id,
	    method: "DELETE",
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    }
	  });
	};

	var changePassword = function changePassword(data) {
	  return $.ajax({
	    url: app.host + '/change-password/' + app.user._id,
	    method: "PATCH",
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    },
	    data: data
	  });
	};

	module.exports = {
	  signUp: signUp,
	  signIn: signIn,
	  signOut: signOut,
	  changePassword: changePassword
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var app = __webpack_require__(8);
	var helpers = __webpack_require__(11);

	var failure = function failure(error) {
	  console.error(error);
	};

	var signInFailure = function signInFailure() {
	  $('#sign-in-notes').empty();
	  $('#sign-in-notes').append('Incorrect Username or Password. Try Again.');
	};

	var signUpFailure = function signUpFailure() {
	  $('#sign-up-notes').empty();
	  $('#sign-up-notes').append("Passwords don't match or this username already exists. Try Again.");
	};

	var signUpSuccess = function signUpSuccess(data) {
	  $('#signin-email').val($('#signup-email').val());
	  $('#signin-password').val($('#signup-password').val());
	  $('#sign-in').submit();
	  app.user = data.user;
	  $('#signin-modal').modal('hide');
	  $('#signup-modal').modal('hide');
	  $('#signed-out').hide();
	  $('.signed-in').show();
	};

	var signInSuccess = function signInSuccess(data) {
	  app.user = data.user;
	  $('#signin-modal').modal('hide');
	  $('#signup-modal').modal('hide');
	  $('#signed-out').hide();
	  $('body').toggleClass('intro-body');
	  $('.signed-in').show();
	  $('.jumbotron').show();
	  $('.welcome').show();
	  $('.welcome').html('<h1>Hello, ' + app.user.givenName + '</h1>');
	  helpers.runBanner();
	};

	var signOutSuccess = function signOutSuccess() {
	  app.user = null;
	  app.currentUserChallenge = null;
	  $('#signout-modal').modal('hide');
	  $('#password-modal').modal('hide');
	  $('#signup-email').val('');
	  $('#signup-password').val('');
	  $('#signup-password-confirmation').val('');
	  $('#signin-email').val('');
	  $('#signin-password').val('');
	  $('#signed-in').hide();
	  $('.signed-in').hide();
	  $('#contents').empty();
	  $('#signed-out').show();
	  $('body').toggleClass('intro-body');
	  $('.jumbotron').show();
	  $('.welcome').hide();
	  $('.step4').hide();
	};

	var changePasswordSuccess = function changePasswordSuccess() {
	  $('#password-modal').modal('hide');
	};

	var changePasswordFailure = function changePasswordFailure() {
	  $('#change-password').append('Password is incorrect. Try Again.');
	};

	module.exports = {
	  failure: failure,
	  signInSuccess: signInSuccess,
	  signUpSuccess: signUpSuccess,
	  signOutSuccess: signOutSuccess,
	  signInFailure: signInFailure,
	  signUpFailure: signUpFailure,
	  changePasswordSuccess: changePasswordSuccess,
	  changePasswordFailure: changePasswordFailure
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	// this function needs more

	var hideAll = function hideAll() {
	  $('.signed-in').hide();
	  $('.signed-out').hide();
	  $('.all-challenges').hide();
	  $('.my-submissions').hide();
	  $('#my-challenge-info').hide();
	  $('#my-challenge-table').hide();
	  $('.single-challenge-view').hide();
	};

	// sarah should check over this function
	var runBanner = function runBanner() {
	  $('.step1').hide();
	  $('.step2').hide();
	  $('.step3').hide();
	  $('.step4').hide();
	  $('.step1').show(900).delay(2000).effect('drop', { direction: 'right' }, 600);
	  $('.step2').delay(3900).show(600).delay(2200).effect('drop', { direction: 'right' }, 600);
	  $('.step3').delay(7500).show(600).delay(2200).effect('drop', { direction: 'right' }, 600);
	  $('.step4').delay(11200).show(600);
	};

	module.exports = {
	  hideAll: hideAll,
	  runBanner: runBanner
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var getFormFields = __webpack_require__(7);
	var api = __webpack_require__(13);
	var ui = __webpack_require__(14);

	var app = __webpack_require__(8);

	var onCreateChallenge = function onCreateChallenge(event) {
	  event.preventDefault();
	  var data = getFormFields(event.target);
	  api.create(data).done(ui.challengeCreated).fail(ui.challengeFailure);
	};

	var onViewUserChallenges = function onViewUserChallenges(event) {
	  event.preventDefault();
	  api.viewUserChallenges().done(ui.viewChallengesSuccess).fail(ui.failure);
	};

	var viewChallenges = function viewChallenges(event) {
	  event.preventDefault();
	  $('.jumbotron').hide();
	  $('#contents').empty();
	  event.preventDefault();
	  api.viewAllChallenges().done(ui.viewChallengesSuccess).fail(ui.failure);
	};

	var onSelectChallenge = function onSelectChallenge(event) {
	  event.preventDefault();
	  var id = $(event.target).parent().data("id");
	  var owner = $(event.target).parent().attr("name");
	  ui.checkChallengeOwner(owner);

	  api.showChallenge(id).done(ui.showChallengeSuccess).then(function () {
	    api.showChallengeSubmissions(id).done(ui.appendSubmissionsSuccess).fail(ui.failure);
	  }).fail(ui.failure);
	};

	var goToChallenge = function goToChallenge(event) {
	  event.preventDefault();
	  var id = $(event.target).parent().data("id");
	  var owner = null;
	  ui.checkChallengeOwner(owner);

	  api.showChallenge(id).done(ui.showChallengeSuccess).then(function () {
	    api.showChallengeSubmissions(id).done(ui.appendSubmissionsSuccess).fail(ui.failure);
	  }).fail(ui.failure);
	};

	var onDeleteChallenge = function onDeleteChallenge(event) {
	  event.preventDefault();
	  var id = $(event.target).data("id");
	  api.deleteChallenge(id).done(ui.deleteChallengeSuccess).then(function () {
	    return $(event.target).parent().parent().empty();
	  }).fail(ui.failure);
	};

	var createSubmission = function createSubmission(event) {
	  event.preventDefault();
	  $.ajax({
	    method: 'POST',
	    url: 'http://localhost:3000/submissions',
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    },
	    data: new FormData(event.target),
	    contentType: false,
	    processData: false
	  }).done(function (data) {
	    console.log(data);
	  }).fail(function (error) {
	    console.error(error);
	  });
	};

	var onGradeSubmission = function onGradeSubmission(event) {
	  event.preventDefault();
	  var data = getFormFields(event.target);
	  var id = data.submissionId;
	  var passfail = void 0;
	  if (data.passfail === 'pass') {
	    passfail = true;
	  } else {
	    passfail = false;
	  }
	  api.gradeSubmission(passfail, id).done(ui.gradeSubmissionSuccess).fail(ui.failure);
	};

	var addHandlers = function addHandlers() {
	  $('#view-challenges').on('click', viewChallenges);
	  $('#create-challenge-form').on('submit', onCreateChallenge);
	  $(document).on('click', '#view-my-challenges', onViewUserChallenges);
	  $(document).on('click', '#view-all-challenges', viewChallenges);
	  $(document).on('click', '.select-challenge', onSelectChallenge);
	  $(document).on('click', '.delete-challenge', onDeleteChallenge);
	  $(document).on('submit', '#upload-forms', createSubmission);
	  $(document).on('submit', '#grade-form', onGradeSubmission);
	  $(document).on('click', '#go-to-challenge', goToChallenge);
	};

	module.exports = {
	  onCreateChallenge: onCreateChallenge,
	  onViewUserChallenges: onViewUserChallenges,
	  viewChallenges: viewChallenges,
	  addHandlers: addHandlers,
	  onSelectChallenge: onSelectChallenge,
	  onDeleteChallenge: onDeleteChallenge,
	  createSubmission: createSubmission,
	  onGradeSubmission: onGradeSubmission,
	  goToChallenge: goToChallenge
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var app = __webpack_require__(8);

	var create = function create(data) {
	  return $.ajax({
	    url: app.host + '/challenges',
	    method: "POST",
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    },
	    data: data
	  });
	};

	var viewUserChallenges = function viewUserChallenges() {
	  return $.ajax({
	    url: app.host + '/user-challenges',
	    method: "GET",
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    }
	  });
	};

	var viewAllChallenges = function viewAllChallenges() {
	  return $.ajax({
	    url: app.host + '/challenges',
	    method: "GET",
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    }
	  });
	};

	var deleteChallenge = function deleteChallenge(id) {
	  return $.ajax({
	    url: app.host + '/challenges/' + id,
	    method: "DELETE",
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    }
	  });
	};

	var showChallenge = function showChallenge(challengeId) {
	  return $.ajax({
	    url: app.host + '/challenges/' + challengeId,
	    method: "GET",
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    }
	  });
	};

	var showChallengeSubmissions = function showChallengeSubmissions(challengeId) {
	  return $.ajax({
	    url: app.host + '/challenge-submissions/' + challengeId,
	    method: "GET",
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    }
	  });
	};

	// const incrementSubmissionCount = (data) => {
	//   return $.ajax({
	//     url: app.host + '/challenges/' + data.challenge._id,
	//     method: "PATCH",
	//     headers: {
	//       Authorization: 'Token token=' + app.user.token,
	//     },
	//     data: {
	//       challenge: {
	//         submissionCount: data.challenge.submissionCount + 1,
	//       }
	//     }
	//   });
	// };

	// const decrementSubmissionCount = (data) => {
	//   return $.ajax({
	//     url: app.host + '/challenges/' + data.challenge._id,
	//     method: "PATCH",
	//     headers: {
	//       Authorization: 'Token token=' + app.user.token,
	//     },
	//     data: {
	//       challenge: {
	//         submissionCount: data.challenge.submissionCount - 1,
	//       }
	//     }
	//   });
	// };

	var gradeSubmission = function gradeSubmission(passfail, id) {
	  return $.ajax({
	    url: app.host + '/grade-submission/' + id,
	    method: "PATCH",
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    },
	    data: {
	      submission: {
	        graded: true,
	        pass: passfail
	      }
	    }
	  });
	};

	module.exports = {
	  create: create,
	  viewUserChallenges: viewUserChallenges,
	  viewAllChallenges: viewAllChallenges,
	  deleteChallenge: deleteChallenge,
	  showChallenge: showChallenge,
	  showChallengeSubmissions: showChallengeSubmissions,
	  // incrementSubmissionCount,
	  // decrementSubmissionCount,
	  gradeSubmission: gradeSubmission
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var app = __webpack_require__(8);
	var fileinput = __webpack_require__(15);

	var api = __webpack_require__(13);

	var multipleChallengesTemplate = __webpack_require__(16);
	var challengeSubmissionsTemplate = __webpack_require__(36);
	var showChallengeTemplate = __webpack_require__(37);
	var myChallengeSubmissionsTemplate = __webpack_require__(38);

	var checkChallengeOwner = function checkChallengeOwner(ownerId) {
	  if (ownerId === app.user._id) {
	    app.currentUserChallenge = true;
	  } else {
	    app.currentUserChallenge = false;
	  }
	  return true;
	};

	var failure = function failure(error) {
	  console.error(error);
	};

	var challengeFailure = function challengeFailure() {
	  $('#challenge-notes').empty();
	  $('#challenge-notes').append('All Fields are Required. Try Again.');
	};

	var success = function success(data) {
	  console.log(data);
	};

	var challengeCreated = function challengeCreated(data) {
	  $('.jumbotron').hide();
	  $('#create-challenge-modal').modal('hide');
	  $('#challenge-name').val('');
	  $('#challenge-description').val('');
	  $('#challenge-invoke').val('');
	  $('#challenge-answer').val('');
	  $('#challenge-notes').empty();
	  checkChallengeOwner(data.challenge._owner);
	  $('#contents').html(showChallengeTemplate(data));
	  $('#set-challengeName').val(data.challenge.name);
	  $('.upload-container').show();
	  $("#fileinput").fileinput({
	    maxFileSize: 1000,
	    allowedFileExtensions: ['js']
	  });
	};

	var setDeletePermissions = function setDeletePermissions(challengeData) {
	  var challengeArray = challengeData.challenges;
	  challengeArray = challengeArray.map(function (c) {
	    var currentChallenge = c;
	    if (currentChallenge._owner === app.user._id) {
	      currentChallenge.currentUserOwned = true;
	    }
	    return currentChallenge;
	  });
	  return challengeArray;
	};

	var viewChallengesSuccess = function viewChallengesSuccess(data) {
	  $('.jumbotron').hide();
	  $('#contents').empty();
	  data.challenges = setDeletePermissions(data);
	  data.challenges.sort(function (a, b) {
	    return a.submissionCount - b.submissionCount;
	  }).reverse();
	  $('#contents').html(multipleChallengesTemplate(data));
	};

	var deleteChallengeSuccess = function deleteChallengeSuccess() {};

	var showChallengeSuccess = function showChallengeSuccess(data) {
	  $('.jumbotron').hide();
	  $('#contents').empty();
	  $('#contents').html(showChallengeTemplate(data));
	  $('#set-challengeName').val(data.challenge.name);
	  $('.upload-container').show();
	  $("#fileinput").fileinput();
	};

	var setSubmissionPermissions = function setSubmissionPermissions(submissionData) {
	  var submissionArray = submissionData.submissions;
	  submissionArray = submissionArray.map(function (s) {
	    var currentSubmission = s;
	    if (currentSubmission._owner === app.user._id) {
	      currentSubmission.currentUserOwned = true;
	    }
	    return currentSubmission;
	  });
	  return submissionArray;
	};

	var appendSubmissionsSuccess = function appendSubmissionsSuccess(data) {
	  if (app.currentUserChallenge === true) {
	    data.submissions = setSubmissionPermissions(data);
	    data.submissions.forEach(function (e) {
	      return e.createdAt = e.createdAt.split('T')[0];
	    });
	    $('#challenge-submission-div').html(myChallengeSubmissionsTemplate(data));
	    $('.owner-grade').popover();
	  } else {
	    data.submissions = setSubmissionPermissions(data);
	    data.submissions.forEach(function (e) {
	      return e.createdAt = e.createdAt.split('T')[0];
	    });
	    $('#challenge-submission-div').html(challengeSubmissionsTemplate(data));
	  }
	};

	var refreshChallenge = function refreshChallenge(id) {
	  var owner = app.user._id;
	  checkChallengeOwner(owner);

	  api.showChallenge(id).done(showChallengeSuccess).then(function () {
	    api.showChallengeSubmissions(id).done(appendSubmissionsSuccess).fail(failure);
	  }).fail(failure);
	};

	var gradeSubmissionSuccess = function gradeSubmissionSuccess(data) {
	  var id = data.submission._challenge;
	  refreshChallenge(id);
	};

	module.exports = {
	  failure: failure,
	  challengeCreated: challengeCreated,
	  viewChallengesSuccess: viewChallengesSuccess,
	  success: success,
	  showChallengeSuccess: showChallengeSuccess,
	  appendSubmissionsSuccess: appendSubmissionsSuccess,
	  deleteChallengeSuccess: deleteChallengeSuccess,
	  setDeletePermissions: setDeletePermissions,
	  setSubmissionPermissions: setSubmissionPermissions,
	  refreshChallenge: refreshChallenge,
	  gradeSubmissionSuccess: gradeSubmissionSuccess,
	  checkChallengeOwner: checkChallengeOwner,
	  challengeFailure: challengeFailure
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};/*!
	 * bootstrap-fileinput v4.3.3
	 * http://plugins.krajee.com/file-input
	 *
	 * Author: Kartik Visweswaran
	 * Copyright: 2014 - 2016, Kartik Visweswaran, Krajee.com
	 *
	 * Licensed under the BSD 3-Clause
	 * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md
	 */(function(factory){"use strict";//noinspection JSUnresolvedVariable
	if(true){// jshint ignore:line
	// AMD. Register as an anonymous module.
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));// jshint ignore:line
	}else{// noinspection JSUnresolvedVariable
	if((typeof module==='undefined'?'undefined':_typeof(module))==='object'&&module.exports){// jshint ignore:line
	// Node/CommonJS
	// noinspection JSUnresolvedVariable
	module.exports=factory(require('jquery'));// jshint ignore:line
	}else{// Browser globals
	factory(window.jQuery);}}})(function($){"use strict";$.fn.fileinputLocales={};$.fn.fileinputThemes={};var NAMESPACE,MODAL_ID,STYLE_SETTING,OBJECT_PARAMS,DEFAULT_PREVIEW,objUrl,compare,isIE,handler,previewCache,getNum,hasFileAPISupport,hasDragDropSupport,hasFileUploadSupport,addCss,tMain1,tMain2,tPreview,tFileIcon,tClose,tCaption,tBtnDefault,tBtnLink,tBtnBrowse,tModalMain,tModal,tProgress,tSize,tFooter,tActions,tActionDelete,tActionUpload,tActionZoom,tActionDrag,tTagBef,tTagBef1,tTagBef2,tTagAft,tGeneric,tHtml,tImage,tText,tVideo,tAudio,tFlash,tObject,tPdf,tOther,defaultFileActionSettings,defaultLayoutTemplates,defaultPreviewTemplates,defaultPreviewZoomSettings,defaultPreviewTypes,getElement,defaultPreviewSettings,defaultFileTypeSettings,isEmpty,isArray,ifSet,uniqId,htmlEncode,replaceTags,cleanMemory,findFileName,checkFullScreen,toggleFullScreen,moveArray,FileInput;NAMESPACE='.fileinput';MODAL_ID='kvFileinputModal';STYLE_SETTING='style="width:{width};height:{height};"';OBJECT_PARAMS='<param name="controller" value="true" />\n'+'<param name="allowFullScreen" value="true" />\n'+'<param name="allowScriptAccess" value="always" />\n'+'<param name="autoPlay" value="false" />\n'+'<param name="autoStart" value="false" />\n'+'<param name="quality" value="high" />\n';DEFAULT_PREVIEW='<div class="file-preview-other">\n'+'<span class="{previewFileIconClass}">{previewFileIcon}</span>\n'+'</div>';//noinspection JSUnresolvedVariable
	objUrl=window.URL||window.webkitURL;compare=function compare(input,str,exact){return input!==undefined&&(exact?input===str:input.match(str));};isIE=function isIE(ver){// check for IE versions < 11
	if(navigator.appName!=='Microsoft Internet Explorer'){return false;}if(ver===10){return new RegExp('msie\\s'+ver,'i').test(navigator.userAgent);}var div=document.createElement("div"),status;div.innerHTML="<!--[if IE "+ver+"]> <i></i> <![endif]-->";status=div.getElementsByTagName("i").length;document.body.appendChild(div);div.parentNode.removeChild(div);return status;};handler=function handler($el,event,callback,skipNS){var ev=skipNS?event:event.split(' ').join(NAMESPACE+' ')+NAMESPACE;$el.off(ev).on(ev,callback);};previewCache={data:{},init:function init(obj){var content=obj.initialPreview,id=obj.id;if(content.length>0&&!isArray(content)){content=content.split(obj.initialPreviewDelimiter);}previewCache.data[id]={content:content,config:obj.initialPreviewConfig,tags:obj.initialPreviewThumbTags,delimiter:obj.initialPreviewDelimiter,previewFileType:obj.initialPreviewFileType,previewAsData:obj.initialPreviewAsData,template:obj.previewGenericTemplate,showZoom:obj.fileActionSettings.showZoom,showDrag:obj.fileActionSettings.showDrag,getSize:function getSize(size){return obj._getSize(size);},parseTemplate:function parseTemplate(cat,data,fname,ftype,pId,ftr,ind){var fc=' file-preview-initial';return obj._generatePreviewTemplate(cat,data,fname,ftype,pId,false,null,fc,ftr,ind);},msg:function msg(n){return obj._getMsgSelected(n);},initId:obj.previewInitId,footer:obj._getLayoutTemplate('footer').replace(/\{progress}/g,obj._renderThumbProgress()),isDelete:obj.initialPreviewShowDelete,caption:obj.initialCaption,actions:function actions(showUpload,showDelete,showZoom,showDrag,disabled,url,key){return obj._renderFileActions(showUpload,showDelete,showZoom,showDrag,disabled,url,key,true);}};},fetch:function fetch(id){return previewCache.data[id].content.filter(function(n){return n!==null;});},count:function count(id,all){return!!previewCache.data[id]&&!!previewCache.data[id].content?all?previewCache.data[id].content.length:previewCache.fetch(id).length:0;},get:function get(id,i,isDisabled){var ind='init_'+i,data=previewCache.data[id],config=data.config[i],content=data.content[i],previewId=data.initId+'-'+ind,out,$tmp,frameClass=' file-preview-initial',cat,cap,ftr,ftype,asData=ifSet('previewAsData',config,data.previewAsData);isDisabled=isDisabled===undefined?true:isDisabled;/** @namespace config.frameAttr *//** @namespace config.frameClass *//** @namespace config.filetype */if(!content){return'';}if(config&&config.frameClass){frameClass+=' '+config.frameClass;}if(asData){cat=data.previewAsData?ifSet('type',config,data.previewFileType||'generic'):'generic';cap=ifSet('caption',config);ftr=previewCache.footer(id,i,isDisabled,config&&config.size||null);ftype=ifSet('filetype',config,cat);out=data.parseTemplate(cat,content,cap,ftype,previewId,ftr,ind,null);}else{out=data.template.replace(/\{previewId}/g,previewId).replace(/\{frameClass}/g,frameClass).replace(/\{fileindex}/g,ind).replace(/\{content}/g,data.content[i]).replace(/\{template}/g,ifSet('type',config,data.previewFileType)).replace(/\{footer}/g,previewCache.footer(id,i,isDisabled,config&&config.size||null));}if(data.tags.length&&data.tags[i]){out=replaceTags(out,data.tags[i]);}if(!isEmpty(config)&&!isEmpty(config.frameAttr)){$tmp=$(document.createElement('div')).html(out);$tmp.find('.file-preview-initial').attr(config.frameAttr);out=$tmp.html();$tmp.remove();}return out;},add:function add(id,content,config,tags,append){var data=$.extend(true,{},previewCache.data[id]),index;if(!isArray(content)){content=content.split(data.delimiter);}if(append){index=data.content.push(content)-1;data.config[index]=config;data.tags[index]=tags;}else{index=content.length-1;data.content=content;data.config=config;data.tags=tags;}previewCache.data[id]=data;return index;},set:function set(id,content,config,tags,append){var data=$.extend(true,{},previewCache.data[id]),i,chk;if(!content||!content.length){return;}if(!isArray(content)){content=content.split(data.delimiter);}chk=content.filter(function(n){return n!==null;});if(!chk.length){return;}if(data.content===undefined){data.content=[];}if(data.config===undefined){data.config=[];}if(data.tags===undefined){data.tags=[];}if(append){for(i=0;i<content.length;i++){if(content[i]){data.content.push(content[i]);}}for(i=0;i<config.length;i++){if(config[i]){data.config.push(config[i]);}}for(i=0;i<tags.length;i++){if(tags[i]){data.tags.push(tags[i]);}}}else{data.content=content;data.config=config;data.tags=tags;}previewCache.data[id]=data;},unset:function unset(id,index){var chk=previewCache.count(id);if(!chk){return;}if(chk===1){previewCache.data[id].content=[];previewCache.data[id].config=[];previewCache.data[id].tags=[];return;}previewCache.data[id].content[index]=null;previewCache.data[id].config[index]=null;previewCache.data[id].tags[index]=null;},out:function out(id){var html='',data=previewCache.data[id],caption,len=previewCache.count(id,true);if(len===0){return{content:'',caption:''};}for(var i=0;i<len;i++){html+=previewCache.get(id,i);}caption=data.msg(previewCache.count(id));return{content:'<div class="file-initial-thumbs">'+html+'</div>',caption:caption};},footer:function footer(id,i,isDisabled,size){var data=previewCache.data[id];isDisabled=isDisabled===undefined?true:isDisabled;if(data.config.length===0||isEmpty(data.config[i])){return'';}var config=data.config[i],caption=ifSet('caption',config),width=ifSet('width',config,'auto'),url=ifSet('url',config,false),key=ifSet('key',config,null),showDel=ifSet('showDelete',config,true),showZoom=ifSet('showZoom',config,data.showZoom),showDrag=ifSet('showDrag',config,data.showDrag),disabled=url===false&&isDisabled,actions=data.isDelete?data.actions(false,showDel,showZoom,showDrag,disabled,url,key):'',footer=data.footer.replace(/\{actions}/g,actions);return footer.replace(/\{caption}/g,caption).replace(/\{size}/g,data.getSize(size)).replace(/\{width}/g,width).replace(/\{indicator}/g,'').replace(/\{indicatorTitle}/g,'');}};getNum=function getNum(num,def){def=def||0;if(typeof num==="number"){return num;}if(typeof num==="string"){num=parseFloat(num);}return isNaN(num)?def:num;};hasFileAPISupport=function hasFileAPISupport(){return!!(window.File&&window.FileReader);};hasDragDropSupport=function hasDragDropSupport(){var div=document.createElement('div');/** @namespace div.draggable *//** @namespace div.ondragstart *//** @namespace div.ondrop */return!isIE(9)&&(div.draggable!==undefined||div.ondragstart!==undefined&&div.ondrop!==undefined);};hasFileUploadSupport=function hasFileUploadSupport(){return hasFileAPISupport()&&window.FormData;};addCss=function addCss($el,css){$el.removeClass(css).addClass(css);};defaultFileActionSettings={showRemove:true,showUpload:true,showZoom:true,showDrag:true,removeIcon:'<i class="glyphicon glyphicon-trash text-danger"></i>',removeClass:'btn btn-xs btn-default',removeTitle:'Remove file',uploadIcon:'<i class="glyphicon glyphicon-upload text-info"></i>',uploadClass:'btn btn-xs btn-default',uploadTitle:'Upload file',zoomIcon:'<i class="glyphicon glyphicon-zoom-in"></i>',zoomClass:'btn btn-xs btn-default',zoomTitle:'View Details',dragIcon:'<i class="glyphicon glyphicon-menu-hamburger"></i>',dragClass:'text-info',dragTitle:'Move / Rearrange',dragSettings:{},indicatorNew:'<i class="glyphicon glyphicon-hand-down text-warning"></i>',indicatorSuccess:'<i class="glyphicon glyphicon-ok-sign text-success"></i>',indicatorError:'<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>',indicatorLoading:'<i class="glyphicon glyphicon-hand-up text-muted"></i>',indicatorNewTitle:'Not uploaded yet',indicatorSuccessTitle:'Uploaded',indicatorErrorTitle:'Upload Error',indicatorLoadingTitle:'Uploading ...'};tMain1='{preview}\n'+'<div class="kv-upload-progress hide"></div>\n'+'<div class="input-group {class}">\n'+'   {caption}\n'+'   <div class="input-group-btn">\n'+'       {remove}\n'+'       {cancel}\n'+'       {upload}\n'+'       {browse}\n'+'   </div>\n'+'</div>';tMain2='{preview}\n<div class="kv-upload-progress hide"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n';tPreview='<div class="file-preview {class}">\n'+'    {close}'+'    <div class="{dropClass}">\n'+'    <div class="file-preview-thumbnails">\n'+'    </div>\n'+'    <div class="clearfix"></div>'+'    <div class="file-preview-status text-center text-success"></div>\n'+'    <div class="kv-fileinput-error"></div>\n'+'    </div>\n'+'</div>';tClose='<div class="close fileinput-remove">&times;</div>\n';tFileIcon='<i class="glyphicon glyphicon-file kv-caption-icon"></i>';tCaption='<div tabindex="500" class="form-control file-caption {class}">\n'+'   <div class="file-caption-name"></div>\n'+'</div>\n';//noinspection HtmlUnknownAttribute
	tBtnDefault='<button type="{type}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</button>';tBtnLink='<a href="{href}" tabindex="500" title="{title}" class="{css}" {status}>{icon} {label}</a>';tBtnBrowse='<div tabindex="500" class="{css}" {status}>{icon} {label}</div>';tModalMain='<div id="'+MODAL_ID+'" class="file-zoom-dialog modal fade" tabindex="-1" aria-labelledby="'+MODAL_ID+'Label"></div>';tModal='<div class="modal-dialog modal-lg" role="document">\n'+'  <div class="modal-content">\n'+'    <div class="modal-header">\n'+'      <div class="kv-zoom-actions pull-right">{toggleheader}{fullscreen}{borderless}{close}</div>\n'+'      <h3 class="modal-title">{heading} <small><span class="kv-zoom-title"></span></small></h3>\n'+'    </div>\n'+'    <div class="modal-body">\n'+'      <div class="floating-buttons"></div>\n'+'      <div class="kv-zoom-body file-zoom-content"></div>\n'+'{prev} {next}\n'+'    </div>\n'+'  </div>\n'+'</div>\n';tProgress='<div class="progress">\n'+'    <div class="{class}" role="progressbar"'+' aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n'+'        {percent}%\n'+'     </div>\n'+'</div>';tSize=' <br><samp>({sizeText})</samp>';tFooter='<div class="file-thumbnail-footer">\n'+'    <div class="file-footer-caption" title="{caption}">{caption}{size}</div>\n'+'    {progress} {actions}\n'+'</div>';tActions='<div class="file-actions">\n'+'    <div class="file-footer-buttons">\n'+'        {upload} {delete} {zoom} {other}'+'    </div>\n'+'    {drag}\n'+'    <div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>\n'+'    <div class="clearfix"></div>\n'+'</div>';tActionDelete='<button type="button" class="kv-file-remove {removeClass}" '+'title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</button>\n';tActionUpload='<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">'+'{uploadIcon}</button>';tActionZoom='<button type="button" class="kv-file-zoom {zoomClass}" title="{zoomTitle}">{zoomIcon}</button>';tActionDrag='<span class="file-drag-handle {dragClass}" title="{dragTitle}">{dragIcon}</span>';tTagBef='<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}"'+' data-template="{template}"';tTagBef1=tTagBef+'><div class="kv-file-content">\n';tTagBef2=tTagBef+' title="{caption}" '+STYLE_SETTING+'><div class="kv-file-content">\n';tTagAft='</div>{footer}\n</div>\n';tGeneric='{content}\n';tHtml='<div class="kv-preview-data file-preview-html" title="{caption}" '+STYLE_SETTING+'>{data}</div>\n';tImage='<img src="{data}" class="kv-preview-data file-preview-image" title="{caption}" alt="{caption}" '+STYLE_SETTING+'>\n';tText='<textarea class="kv-preview-data file-preview-text" title="{caption}" readonly '+STYLE_SETTING+'>{data}</textarea>\n';tVideo='<video class="kv-preview-data" width="{width}" height="{height}" controls>\n'+'<source src="{data}" type="{type}">\n'+DEFAULT_PREVIEW+'\n</video>\n';tAudio='<audio class="kv-preview-data" controls>\n<source src="'+'{data}'+'" type="{type}">\n'+DEFAULT_PREVIEW+'\n</audio>\n';tFlash='<object class="kv-preview-data file-object" type="application/x-shockwave-flash" '+'width="{width}" height="{height}" data="{data}">\n'+OBJECT_PARAMS+' '+DEFAULT_PREVIEW+'\n</object>\n';tObject='<object class="kv-preview-data file-object" data="{data}" type="{type}" width="{width}" height="{height}">\n'+'<param name="movie" value="{caption}" />\n'+OBJECT_PARAMS+' '+DEFAULT_PREVIEW+'\n</object>\n';tPdf='<embed class="kv-preview-data" src="{data}" width="{width}" height="{height}" type="application/pdf">\n';tOther='<div class="kv-preview-data file-preview-other-frame">\n'+DEFAULT_PREVIEW+'\n</div>\n';defaultLayoutTemplates={main1:tMain1,main2:tMain2,preview:tPreview,close:tClose,fileIcon:tFileIcon,caption:tCaption,modalMain:tModalMain,modal:tModal,progress:tProgress,size:tSize,footer:tFooter,actions:tActions,actionDelete:tActionDelete,actionUpload:tActionUpload,actionZoom:tActionZoom,actionDrag:tActionDrag,btnDefault:tBtnDefault,btnLink:tBtnLink,btnBrowse:tBtnBrowse};defaultPreviewTemplates={generic:tTagBef1+tGeneric+tTagAft,html:tTagBef1+tHtml+tTagAft,image:tTagBef1+tImage+tTagAft,text:tTagBef1+tText+tTagAft,video:tTagBef2+tVideo+tTagAft,audio:tTagBef2+tAudio+tTagAft,flash:tTagBef2+tFlash+tTagAft,object:tTagBef2+tObject+tTagAft,pdf:tTagBef2+tPdf+tTagAft,other:tTagBef2+tOther+tTagAft};defaultPreviewTypes=['image','html','text','video','audio','flash','pdf','object'];defaultPreviewSettings={image:{width:"auto",height:"160px"},html:{width:"213px",height:"160px"},text:{width:"213px",height:"160px"},video:{width:"213px",height:"160px"},audio:{width:"213px",height:"80px"},flash:{width:"213px",height:"160px"},object:{width:"160px",height:"160px"},pdf:{width:"160px",height:"160px"},other:{width:"160px",height:"160px"}};defaultPreviewZoomSettings={image:{width:"100%",height:"100%"},html:{width:"100%",height:"100%",'min-height':"480px"},text:{width:"100%",height:"100%",'min-height':"480px"},video:{width:"auto",height:"100%",'max-width':"100%"},audio:{width:"100%",height:"30px"},flash:{width:"auto",height:"480px"},object:{width:"auto",height:"100%",'min-height':"480px"},pdf:{width:"100%",height:"100%",'min-height':"480px"},other:{width:"auto",height:"100%",'min-height':"480px"}};defaultFileTypeSettings={image:function image(vType,vName){return compare(vType,'image.*')||compare(vName,/\.(gif|png|jpe?g)$/i);},html:function html(vType,vName){return compare(vType,'text/html')||compare(vName,/\.(htm|html)$/i);},text:function text(vType,vName){return compare(vType,'text.*')||compare(vName,/\.(xml|javascript)$/i)||compare(vName,/\.(txt|md|csv|nfo|ini|json|php|js|css)$/i);},video:function video(vType,vName){return compare(vType,'video.*')&&(compare(vType,/(ogg|mp4|mp?g|webm|3gp)$/i)||compare(vName,/\.(og?|mp4|webm|mp?g|3gp)$/i));},audio:function audio(vType,vName){return compare(vType,'audio.*')&&(compare(vName,/(ogg|mp3|mp?g|wav)$/i)||compare(vName,/\.(og?|mp3|mp?g|wav)$/i));},flash:function flash(vType,vName){return compare(vType,'application/x-shockwave-flash',true)||compare(vName,/\.(swf)$/i);},pdf:function pdf(vType,vName){return compare(vType,'application/pdf',true)||compare(vName,/\.(pdf)$/i);},object:function object(){return true;},other:function other(){return true;}};isEmpty=function isEmpty(value,trim){return value===undefined||value===null||value.length===0||trim&&$.trim(value)==='';};isArray=function isArray(a){return Array.isArray(a)||Object.prototype.toString.call(a)==='[object Array]';};ifSet=function ifSet(needle,haystack,def){def=def||'';return(typeof haystack==='undefined'?'undefined':_typeof(haystack))==='object'&&needle in haystack?haystack[needle]:def;};getElement=function getElement(options,param,value){return isEmpty(options)||isEmpty(options[param])?value:$(options[param]);};uniqId=function uniqId(){return Math.round(new Date().getTime()+Math.random()*100);};htmlEncode=function htmlEncode(str){return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&apos;');};replaceTags=function replaceTags(str,tags){var out=str;if(!tags){return out;}$.each(tags,function(key,value){if(typeof value==="function"){value=value();}out=out.split(key).join(value);});return out;};cleanMemory=function cleanMemory($thumb){var data=$thumb.is('img')?$thumb.attr('src'):$thumb.find('source').attr('src');/** @namespace objUrl.revokeObjectURL */objUrl.revokeObjectURL(data);};findFileName=function findFileName(filePath){var sepIndex=filePath.lastIndexOf('/');if(sepIndex===-1){sepIndex=filePath.lastIndexOf('\\');}return filePath.split(filePath.substring(sepIndex,sepIndex+1)).pop();};checkFullScreen=function checkFullScreen(){//noinspection JSUnresolvedVariable
	return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement;};toggleFullScreen=function toggleFullScreen(maximize){if(maximize&&!checkFullScreen()){/** @namespace document.documentElement.requestFullscreen *//** @namespace document.documentElement.msRequestFullscreen *//** @namespace document.documentElement.mozRequestFullScreen *//** @namespace document.documentElement.webkitRequestFullscreen *//** @namespace Element.ALLOW_KEYBOARD_INPUT */if(document.documentElement.requestFullscreen){document.documentElement.requestFullscreen();}else if(document.documentElement.msRequestFullscreen){document.documentElement.msRequestFullscreen();}else if(document.documentElement.mozRequestFullScreen){document.documentElement.mozRequestFullScreen();}else if(document.documentElement.webkitRequestFullscreen){document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);}}else{/** @namespace document.exitFullscreen *//** @namespace document.msExitFullscreen *//** @namespace document.mozCancelFullScreen *//** @namespace document.webkitExitFullscreen */if(document.exitFullscreen){document.exitFullscreen();}else if(document.msExitFullscreen){document.msExitFullscreen();}else if(document.mozCancelFullScreen){document.mozCancelFullScreen();}else if(document.webkitExitFullscreen){document.webkitExitFullscreen();}}};moveArray=function moveArray(arr,oldIndex,newIndex){if(newIndex>=arr.length){var k=newIndex-arr.length;while(k--+1){arr.push(undefined);}}arr.splice(newIndex,0,arr.splice(oldIndex,1)[0]);return arr;};FileInput=function FileInput(element,options){var self=this;self.$element=$(element);if(!self._validate()){return;}self.isPreviewable=hasFileAPISupport();self.isIE9=isIE(9);self.isIE10=isIE(10);if(self.isPreviewable||self.isIE9){self._init(options);self._listen();}else{self.$element.removeClass('file-loading');}};FileInput.prototype={constructor:FileInput,_init:function _init(options){var self=this,$el=self.$element,t;$.each(options,function(key,value){switch(key){case'minFileCount':case'maxFileCount':case'maxFileSize':self[key]=getNum(value);break;default:self[key]=value;break;}});self.fileInputCleared=false;self.fileBatchCompleted=true;if(!self.isPreviewable){self.showPreview=false;}self.uploadFileAttr=!isEmpty($el.attr('name'))?$el.attr('name'):'file_data';self.reader=null;self.formdata={};self.clearStack();self.uploadCount=0;self.uploadStatus={};self.uploadLog=[];self.uploadAsyncCount=0;self.loadedImages=[];self.totalImagesCount=0;self.ajaxRequests=[];self.isError=false;self.ajaxAborted=false;self.cancelling=false;t=self._getLayoutTemplate('progress');self.progressTemplate=t.replace('{class}',self.progressClass);self.progressCompleteTemplate=t.replace('{class}',self.progressCompleteClass);self.progressErrorTemplate=t.replace('{class}',self.progressErrorClass);self.dropZoneEnabled=hasDragDropSupport()&&self.dropZoneEnabled;self.isDisabled=self.$element.attr('disabled')||self.$element.attr('readonly');self.isUploadable=hasFileUploadSupport()&&!isEmpty(self.uploadUrl);self.isClickable=self.browseOnZoneClick&&self.showPreview&&(self.isUploadable&&self.dropZoneEnabled||!isEmpty(self.defaultPreviewContent));self.slug=typeof options.slugCallback==="function"?options.slugCallback:self._slugDefault;self.mainTemplate=self.showCaption?self._getLayoutTemplate('main1'):self._getLayoutTemplate('main2');self.captionTemplate=self._getLayoutTemplate('caption');self.previewGenericTemplate=self._getPreviewTemplate('generic');if(self.resizeImage&&(self.maxImageWidth||self.maxImageHeight)){self.imageCanvas=document.createElement('canvas');self.imageCanvasContext=self.imageCanvas.getContext('2d');}if(isEmpty(self.$element.attr('id'))){self.$element.attr('id',uniqId());}if(self.$container===undefined){self.$container=self._createContainer();}else{self._refreshContainer();}self.$dropZone=self.$container.find('.file-drop-zone');self.$progress=self.$container.find('.kv-upload-progress');self.$btnUpload=self.$container.find('.fileinput-upload');self.$captionContainer=getElement(options,'elCaptionContainer',self.$container.find('.file-caption'));self.$caption=getElement(options,'elCaptionText',self.$container.find('.file-caption-name'));self.$previewContainer=getElement(options,'elPreviewContainer',self.$container.find('.file-preview'));self.$preview=getElement(options,'elPreviewImage',self.$container.find('.file-preview-thumbnails'));self.$previewStatus=getElement(options,'elPreviewStatus',self.$container.find('.file-preview-status'));self.$errorContainer=getElement(options,'elErrorContainer',self.$previewContainer.find('.kv-fileinput-error'));if(!isEmpty(self.msgErrorClass)){addCss(self.$errorContainer,self.msgErrorClass);}self.$errorContainer.hide();self.fileActionSettings=$.extend(true,defaultFileActionSettings,options.fileActionSettings);self.previewInitId="preview-"+uniqId();self.id=self.$element.attr('id');previewCache.init(self);self._initPreview(true);self._initPreviewActions();self.options=options;self._setFileDropZoneTitle();self.$element.removeClass('file-loading');if(self.$element.attr('disabled')){self.disable();}self._initZoom();},_validate:function _validate(){var self=this,$exception;if(self.$element.attr('type')==='file'){return true;}$exception='<div class="help-block alert alert-warning">'+'<h4>Invalid Input Type</h4>'+'You must set an input <code>type = file</code> for <b>bootstrap-fileinput</b> plugin to initialize.'+'</div>';self.$element.after($exception);return false;},_errorsExist:function _errorsExist(){var self=this,$err;if(self.$errorContainer.find('li').length){return true;}$err=$(document.createElement('div')).html(self.$errorContainer.html());$err.find('span.kv-error-close').remove();$err.find('ul').remove();return $.trim($err.text()).length?true:false;},_errorHandler:function _errorHandler(evt,caption){var self=this,err=evt.target.error;/** @namespace err.NOT_FOUND_ERR *//** @namespace err.SECURITY_ERR *//** @namespace err.NOT_READABLE_ERR */if(err.code===err.NOT_FOUND_ERR){self._showError(self.msgFileNotFound.replace('{name}',caption));}else if(err.code===err.SECURITY_ERR){self._showError(self.msgFileSecured.replace('{name}',caption));}else if(err.code===err.NOT_READABLE_ERR){self._showError(self.msgFileNotReadable.replace('{name}',caption));}else if(err.code===err.ABORT_ERR){self._showError(self.msgFilePreviewAborted.replace('{name}',caption));}else{self._showError(self.msgFilePreviewError.replace('{name}',caption));}},_addError:function _addError(msg){var self=this,$error=self.$errorContainer;if(msg&&$error.length){$error.html(self.errorCloseButton+msg);handler($error.find('.kv-error-close'),'click',function(){$error.fadeOut('slow');});}},_resetErrors:function _resetErrors(fade){var self=this,$error=self.$errorContainer;self.isError=false;self.$container.removeClass('has-error');$error.html('');if(fade){$error.fadeOut('slow');}else{$error.hide();}},_showFolderError:function _showFolderError(folders){var self=this,$error=self.$errorContainer,msg;if(!folders){return;}msg=self.msgFoldersNotAllowed.replace(/\{n}/g,folders);self._addError(msg);addCss(self.$container,'has-error');$error.fadeIn(800);self._raise('filefoldererror',[folders,msg]);},_showUploadError:function _showUploadError(msg,params,event){var self=this,$error=self.$errorContainer,ev=event||'fileuploaderror',e=params&&params.id?'<li data-file-id="'+params.id+'">'+msg+'</li>':'<li>'+msg+'</li>';if($error.find('ul').length===0){self._addError('<ul>'+e+'</ul>');}else{$error.find('ul').append(e);}$error.fadeIn(800);self._raise(ev,[params,msg]);self.$container.removeClass('file-input-new');addCss(self.$container,'has-error');return true;},_showError:function _showError(msg,params,event){var self=this,$error=self.$errorContainer,ev=event||'fileerror';params=params||{};params.reader=self.reader;self._addError(msg);$error.fadeIn(800);self._raise(ev,[params,msg]);if(!self.isUploadable){self._clearFileInput();}self.$container.removeClass('file-input-new');addCss(self.$container,'has-error');self.$btnUpload.attr('disabled',true);return true;},_noFilesError:function _noFilesError(params){var self=this,label=self.minFileCount>1?self.filePlural:self.fileSingle,msg=self.msgFilesTooLess.replace('{n}',self.minFileCount).replace('{files}',label),$error=self.$errorContainer;self._addError(msg);self.isError=true;self._updateFileDetails(0);$error.fadeIn(800);self._raise('fileerror',[params,msg]);self._clearFileInput();addCss(self.$container,'has-error');},_parseError:function _parseError(jqXHR,errorThrown,fileName){/** @namespace jqXHR.responseJSON */var self=this,errMsg=$.trim(errorThrown+''),dot=errMsg.slice(-1)==='.'?'':'.',text=jqXHR.responseJSON!==undefined&&jqXHR.responseJSON.error!==undefined?jqXHR.responseJSON.error:jqXHR.responseText;if(self.cancelling&&self.msgUploadAborted){errMsg=self.msgUploadAborted;}if(self.showAjaxErrorDetails&&text){text=$.trim(text.replace(/\n\s*\n/g,'\n'));text=text.length>0?'<pre>'+text+'</pre>':'';errMsg+=dot+text;}else{errMsg+=dot;}self.cancelling=false;return fileName?'<b>'+fileName+': </b>'+errMsg:errMsg;},_parseFileType:function _parseFileType(file){var self=this,isValid,vType,cat,i;for(i=0;i<defaultPreviewTypes.length;i+=1){cat=defaultPreviewTypes[i];isValid=ifSet(cat,self.fileTypeSettings,defaultFileTypeSettings[cat]);vType=isValid(file.type,file.name)?cat:'';if(!isEmpty(vType)){return vType;}}return'other';},_parseFilePreviewIcon:function _parseFilePreviewIcon(content,fname){var self=this,proceed,ext,icn=self.previewFileIcon;if(fname&&fname.indexOf('.')>-1){ext=fname.split('.').pop();if(self.previewFileIconSettings&&self.previewFileIconSettings[ext]){icn=self.previewFileIconSettings[ext];}if(self.previewFileExtSettings){$.each(self.previewFileExtSettings,function(key,func){if(self.previewFileIconSettings[key]&&func(ext)){icn=self.previewFileIconSettings[key];return;}proceed=true;});}}if(content.indexOf('{previewFileIcon}')>-1){return content.replace(/\{previewFileIconClass}/g,self.previewFileIconClass).replace(/\{previewFileIcon}/g,icn);}return content;},_raise:function _raise(event,params){var self=this,e=$.Event(event);if(params!==undefined){self.$element.trigger(e,params);}else{self.$element.trigger(e);}if(e.isDefaultPrevented()){return false;}if(!e.result){return e.result;}switch(event){// ignore these events
	case'filebatchuploadcomplete':case'filebatchuploadsuccess':case'fileuploaded':case'fileclear':case'filecleared':case'filereset':case'fileerror':case'filefoldererror':case'fileuploaderror':case'filebatchuploaderror':case'filedeleteerror':case'filecustomerror':case'filesuccessremove':break;// receive data response via `filecustomerror` event`
	default:self.ajaxAborted=e.result;break;}return true;},_listenFullScreen:function _listenFullScreen(isFullScreen){var self=this,$modal=self.$modal,$btnFull,$btnBord;if(!$modal||!$modal.length){return;}$btnFull=$modal&&$modal.find('.btn-fullscreen');$btnBord=$modal&&$modal.find('.btn-borderless');if(!$btnFull.length||!$btnBord.length){return;}$btnFull.removeClass('active').attr('aria-pressed','false');$btnBord.removeClass('active').attr('aria-pressed','false');if(isFullScreen){$btnFull.addClass('active').attr('aria-pressed','true');}else{$btnBord.addClass('active').attr('aria-pressed','true');}if($modal.hasClass('file-zoom-fullscreen')){self._maximizeZoomDialog();}else{if(isFullScreen){self._maximizeZoomDialog();}else{$btnBord.removeClass('active').attr('aria-pressed','false');}}},_listen:function _listen(){var self=this,$el=self.$element,$form=$el.closest('form'),$cont=self.$container;handler($el,'change',$.proxy(self._change,self));if(self.showBrowse){handler(self.$btnFile,'click',$.proxy(self._browse,self));}handler($form,'reset',$.proxy(self.reset,self));handler($cont.find('.fileinput-remove:not([disabled])'),'click',$.proxy(self.clear,self));handler($cont.find('.fileinput-cancel'),'click',$.proxy(self.cancel,self));self._initDragDrop();if(!self.isUploadable){handler($form,'submit',$.proxy(self._submitForm,self));}handler(self.$container.find('.fileinput-upload'),'click',$.proxy(self._uploadClick,self));handler($(window),'resize',function(){self._listenFullScreen(screen.width===window.innerWidth&&screen.height===window.innerHeight);});handler($(document),'webkitfullscreenchange mozfullscreenchange fullscreenchange MSFullscreenChange',function(){self._listenFullScreen(checkFullScreen());});self._initClickable();},_initClickable:function _initClickable(){var self=this,$zone;if(!self.isClickable){return;}$zone=self.isUploadable?self.$dropZone:self.$preview.find('.file-default-preview');addCss($zone,'clickable');$zone.attr('tabindex',-1);handler($zone,'click',function(e){var $target=$(e.target);if(!$target.parents('.file-preview-thumbnails').length||$target.parents('.file-default-preview').length){self.$element.trigger('click');$zone.blur();}});},_initDragDrop:function _initDragDrop(){var self=this,$zone=self.$dropZone;if(self.isUploadable&&self.dropZoneEnabled&&self.showPreview){handler($zone,'dragenter dragover',$.proxy(self._zoneDragEnter,self));handler($zone,'dragleave',$.proxy(self._zoneDragLeave,self));handler($zone,'drop',$.proxy(self._zoneDrop,self));handler($(document),'dragenter dragover drop',self._zoneDragDropInit);}},_zoneDragDropInit:function _zoneDragDropInit(e){e.stopPropagation();e.preventDefault();},_zoneDragEnter:function _zoneDragEnter(e){var self=this,hasFiles=$.inArray('Files',e.originalEvent.dataTransfer.types)>-1;self._zoneDragDropInit(e);if(self.isDisabled||!hasFiles){e.originalEvent.dataTransfer.effectAllowed='none';e.originalEvent.dataTransfer.dropEffect='none';return;}addCss(self.$dropZone,'file-highlighted');},_zoneDragLeave:function _zoneDragLeave(e){var self=this;self._zoneDragDropInit(e);if(self.isDisabled){return;}self.$dropZone.removeClass('file-highlighted');},_zoneDrop:function _zoneDrop(e){var self=this;e.preventDefault();/** @namespace e.originalEvent.dataTransfer */if(self.isDisabled||isEmpty(e.originalEvent.dataTransfer.files)){return;}self._change(e,'dragdrop');self.$dropZone.removeClass('file-highlighted');},_uploadClick:function _uploadClick(e){var self=this,$btn=self.$container.find('.fileinput-upload'),$form,isEnabled=!$btn.hasClass('disabled')&&isEmpty($btn.attr('disabled'));if(e&&e.isDefaultPrevented()){return;}if(!self.isUploadable){if(isEnabled&&$btn.attr('type')!=='submit'){$form=$btn.closest('form');// downgrade to normal form submit if possible
	if($form.length){$form.trigger('submit');}e.preventDefault();}return;}e.preventDefault();if(isEnabled){self.upload();}},_submitForm:function _submitForm(){var self=this,$el=self.$element,files=$el.get(0).files;if(files&&self.minFileCount>0&&self._getFileCount(files.length)<self.minFileCount){self._noFilesError({});return false;}return!self._abort({});},_clearPreview:function _clearPreview(){var self=this,$thumbs=!self.showUploadedThumbs?self.$preview.find('.file-preview-frame'):self.$preview.find('.file-preview-frame:not(.file-preview-success)');$thumbs.remove();if(!self.$preview.find('.file-preview-frame').length||!self.showPreview){self._resetUpload();}self._validateDefaultPreview();},_initSortable:function _initSortable(){var self=this,$preview=self.$preview,$el,settings;if(!window.Sortable){return;}$el=$preview.find('.file-initial-thumbs');settings={handle:'.drag-handle-init',dataIdAttr:'data-preview-id',draggable:'.file-preview-initial',onSort:function onSort(e){var oldIndex=e.oldIndex,newIndex=e.newIndex;self.initialPreview=moveArray(self.initialPreview,oldIndex,newIndex);self.initialPreviewConfig=moveArray(self.initialPreviewConfig,oldIndex,newIndex);previewCache.init(self);self._raise('filesorted',{previewId:$(e.item).attr('id'),'oldIndex':oldIndex,'newIndex':newIndex,stack:self.initialPreviewConfig});}};if($el.data('sortable')){$el.sortable('destroy');}$.extend(true,settings,self.fileActionSettings.dragSettings);$el.sortable(settings);},_initPreview:function _initPreview(isInit){var self=this,cap=self.initialCaption||'',out;if(!previewCache.count(self.id)){self._clearPreview();if(isInit){self._setCaption(cap);}else{self._initCaption();}return;}out=previewCache.out(self.id);cap=isInit&&self.initialCaption?self.initialCaption:out.caption;self.$preview.html(out.content);self._setCaption(cap);self._initSortable();if(!isEmpty(out.content)){self.$container.removeClass('file-input-new');}},_getZoomButton:function _getZoomButton(type){var self=this,label=self.previewZoomButtonIcons[type],css=self.previewZoomButtonClasses[type],title=' title="'+(self.previewZoomButtonTitles[type]||'')+'" ',params=title+(type==='close'?' data-dismiss="modal" aria-hidden="true"':'');if(type==='fullscreen'||type==='borderless'||type==='toggleheader'){params+=' data-toggle="button" aria-pressed="false" autocomplete="off"';}return'<button type="button" class="'+css+' btn-'+type+'"'+params+'>'+label+'</button>';},_getModalContent:function _getModalContent(){var self=this;return self._getLayoutTemplate('modal').replace(/\{heading}/g,self.msgZoomModalHeading).replace(/\{prev}/g,self._getZoomButton('prev')).replace(/\{next}/g,self._getZoomButton('next')).replace(/\{toggleheader}/g,self._getZoomButton('toggleheader')).replace(/\{fullscreen}/g,self._getZoomButton('fullscreen')).replace(/\{borderless}/g,self._getZoomButton('borderless')).replace(/\{close}/g,self._getZoomButton('close'));},_listenModalEvent:function _listenModalEvent(event){var self=this,$modal=self.$modal,getParams=function getParams(e){return{sourceEvent:e,previewId:$modal.data('previewId'),modal:$modal};};$modal.on(event+'.bs.modal',function(e){var $btnFull=$modal.find('.btn-fullscreen'),$btnBord=$modal.find('.btn-borderless');self._raise('filezoom'+event,getParams(e));if(event==='shown'){$btnBord.removeClass('active').attr('aria-pressed','false');$btnFull.removeClass('active').attr('aria-pressed','false');if($modal.hasClass('file-zoom-fullscreen')){self._maximizeZoomDialog();if(checkFullScreen()){$btnFull.addClass('active').attr('aria-pressed','true');}else{$btnBord.addClass('active').attr('aria-pressed','true');}}}});},_initZoom:function _initZoom(){var self=this,$dialog,modalMain=self._getLayoutTemplate('modalMain'),modalId='#'+MODAL_ID;self.$modal=$(modalId);if(!self.$modal||!self.$modal.length){$dialog=$(document.createElement('div')).html(modalMain).insertAfter(self.$container);self.$modal=$('#'+MODAL_ID).insertBefore($dialog);$dialog.remove();}self.$modal.html(self._getModalContent());self._listenModalEvent('show');self._listenModalEvent('shown');self._listenModalEvent('hide');self._listenModalEvent('hidden');self._listenModalEvent('loaded');},_initZoomButtons:function _initZoomButtons(){var self=this,previewId=self.$modal.data('previewId')||'',$first,$last,frames=self.$preview.find('.file-preview-frame').toArray(),len=frames.length,$prev=self.$modal.find('.btn-prev'),$next=self.$modal.find('.btn-next');if(!len){return;}$first=$(frames[0]);$last=$(frames[len-1]);$prev.removeAttr('disabled');$next.removeAttr('disabled');if($first.length&&$first.attr('id')===previewId){$prev.attr('disabled',true);}if($last.length&&$last.attr('id')===previewId){$next.attr('disabled',true);}},_maximizeZoomDialog:function _maximizeZoomDialog(){var self=this,$modal=self.$modal,$head=$modal.find('.modal-header:visible'),$foot=$modal.find('.modal-footer:visible'),$body=$modal.find('.modal-body'),h=$(window).height(),diff=0;$modal.addClass('file-zoom-fullscreen');if($head&&$head.length){h-=$head.outerHeight(true);}if($foot&&$foot.length){h-=$foot.outerHeight(true);}if($body&&$body.length){diff=$body.outerHeight(true)-$body.height();h-=diff;}$modal.find('.kv-zoom-body').height(h);},_resizeZoomDialog:function _resizeZoomDialog(fullScreen){var self=this,$modal=self.$modal,$btnFull=$modal.find('.btn-fullscreen'),$btnBord=$modal.find('.btn-borderless');if($modal.hasClass('file-zoom-fullscreen')){toggleFullScreen(false);if(!fullScreen){if(!$btnFull.hasClass('active')){$modal.removeClass('file-zoom-fullscreen');self.$modal.find('.kv-zoom-body').css('height',self.zoomModalHeight);}else{$btnFull.removeClass('active').attr('aria-pressed','false');}}else{if(!$btnFull.hasClass('active')){$modal.removeClass('file-zoom-fullscreen');self._resizeZoomDialog(true);if($btnBord.hasClass('active')){$btnBord.removeClass('active').attr('aria-pressed','false');}}}}else{if(!fullScreen){self._maximizeZoomDialog();return;}toggleFullScreen(true);}$modal.focus();},_setZoomContent:function _setZoomContent($preview,animate){var self=this,$content,tmplt,body,title,$body,$dataEl,config,previewId=$preview.attr('id'),$modal=self.$modal,$prev=$modal.find('.btn-prev'),$next=$modal.find('.btn-next'),$tmp,$btnFull=$modal.find('.btn-fullscreen'),$btnBord=$modal.find('.btn-borderless'),$btnTogh=$modal.find('.btn-toggleheader');tmplt=$preview.data('template')||'generic';$content=$preview.find('.kv-file-content');body=$content.length?$content.html():'';title=$preview.find('.file-footer-caption').text()||'';$modal.find('.kv-zoom-title').html(title);$body=$modal.find('.kv-zoom-body');if(animate){$tmp=$body.clone().insertAfter($body);$body.html(body).hide();$tmp.fadeOut('fast',function(){$body.fadeIn('fast');$tmp.remove();});}else{$body.html(body);}config=self.previewZoomSettings[tmplt];if(config){$dataEl=$body.find('.kv-preview-data');addCss($dataEl,'file-zoom-detail');$.each(config,function(key,value){$dataEl.css(key,value);if($dataEl.attr('width')&&key==='width'||$dataEl.attr('height')&&key==='height'){$dataEl.removeAttr(key);}});}$modal.data('previewId',previewId);handler($prev,'click',function(){self._zoomSlideShow('prev',previewId);});handler($next,'click',function(){self._zoomSlideShow('next',previewId);});handler($btnFull,'click',function(){self._resizeZoomDialog(true);});handler($btnBord,'click',function(){self._resizeZoomDialog(false);});handler($btnTogh,'click',function(){var $header=$modal.find('.modal-header'),$floatBar=$modal.find('.modal-body .floating-buttons'),ht,$actions=$header.find('.kv-zoom-actions'),resize=function resize(height){var $body=self.$modal.find('.kv-zoom-body'),h=self.zoomModalHeight;if($modal.hasClass('file-zoom-fullscreen')){h=$body.outerHeight(true);if(!height){h=h-$header.outerHeight(true);}}$body.css('height',height?h+height:h);};if($header.is(':visible')){ht=$header.outerHeight(true);$header.slideUp('slow',function(){$actions.find('.btn').appendTo($floatBar);resize(ht);});}else{$floatBar.find('.btn').appendTo($actions);$header.slideDown('slow',function(){resize();});}$modal.focus();});handler($modal,'keydown',function(e){var key=e.which||e.keyCode;if(key===37&&!$prev.attr('disabled')){self._zoomSlideShow('prev',previewId);}if(key===39&&!$next.attr('disabled')){self._zoomSlideShow('next',previewId);}});},_zoomPreview:function _zoomPreview($btn){var self=this,$preview;if(!$btn.length){throw'Cannot zoom to detailed preview!';}self.$modal.html(self._getModalContent());$preview=$btn.closest('.file-preview-frame');self._setZoomContent($preview);self.$modal.modal('show');self._initZoomButtons();},_zoomSlideShow:function _zoomSlideShow(dir,previewId){var self=this,$btn=self.$modal.find('.kv-zoom-actions .btn-'+dir),$targFrame,i,frames=self.$preview.find('.file-preview-frame').toArray(),len=frames.length,out;if($btn.attr('disabled')){return;}for(i=0;i<len;i++){if($(frames[i]).attr('id')===previewId){out=dir==='prev'?i-1:i+1;break;}}if(out<0||out>=len||!frames[out]){return;}$targFrame=$(frames[out]);if($targFrame.length){self._setZoomContent($targFrame,true);}self._initZoomButtons();self._raise('filezoom'+dir,{'previewId':previewId,modal:self.$modal});},_initZoomButton:function _initZoomButton(){var self=this;self.$preview.find('.kv-file-zoom').each(function(){var $el=$(this);handler($el,'click',function(){self._zoomPreview($el);});});},_initPreviewActions:function _initPreviewActions(){var self=this,deleteExtraData=self.deleteExtraData||{},resetProgress=function resetProgress(){var hasFiles=self.isUploadable?previewCache.count(self.id):self.$element.get(0).files.length;if(self.$preview.find('.kv-file-remove').length===0&&!hasFiles){self.reset();self.initialCaption='';}};self._initZoomButton();self.$preview.find('.kv-file-remove').each(function(){var $el=$(this),vUrl=$el.data('url')||self.deleteUrl,vKey=$el.data('key');if(isEmpty(vUrl)||vKey===undefined){return;}var $frame=$el.closest('.file-preview-frame'),cache=previewCache.data[self.id],settings,params,index=$frame.data('fileindex'),config,extraData;index=parseInt(index.replace('init_',''));config=isEmpty(cache.config)&&isEmpty(cache.config[index])?null:cache.config[index];extraData=isEmpty(config)||isEmpty(config.extra)?deleteExtraData:config.extra;if(typeof extraData==="function"){extraData=extraData();}params={id:$el.attr('id'),key:vKey,extra:extraData};settings=$.extend(true,{},{url:vUrl,type:'POST',dataType:'json',data:$.extend(true,{},{key:vKey},extraData),beforeSend:function beforeSend(jqXHR){self.ajaxAborted=false;self._raise('filepredelete',[vKey,jqXHR,extraData]);if(self.ajaxAborted){jqXHR.abort();}else{addCss($frame,'file-uploading');addCss($el,'disabled');}},success:function success(data,textStatus,jqXHR){var n,cap;if(isEmpty(data)||isEmpty(data.error)){previewCache.unset(self.id,index);n=previewCache.count(self.id);cap=n>0?self._getMsgSelected(n):'';self._raise('filedeleted',[vKey,jqXHR,extraData]);self._setCaption(cap);}else{params.jqXHR=jqXHR;params.response=data;self._showError(data.error,params,'filedeleteerror');$frame.removeClass('file-uploading');$el.removeClass('disabled');resetProgress();return;}$frame.removeClass('file-uploading').addClass('file-deleted');$frame.fadeOut('slow',function(){self._clearObjects($frame);$frame.remove();resetProgress();if(!n&&self.getFileStack().length===0){self._setCaption('');self.reset();}});},error:function error(jqXHR,textStatus,errorThrown){var errMsg=self._parseError(jqXHR,errorThrown);params.jqXHR=jqXHR;params.response={};self._showError(errMsg,params,'filedeleteerror');$frame.removeClass('file-uploading');resetProgress();}},self.ajaxDeleteSettings);handler($el,'click',function(){if(!self._validateMinCount()){return false;}$.ajax(settings);});});},_clearObjects:function _clearObjects($el){$el.find('video audio').each(function(){this.pause();$(this).remove();});$el.find('img object div').each(function(){$(this).remove();});},_clearFileInput:function _clearFileInput(){var self=this,$el=self.$element,$srcFrm,$tmpFrm,$tmpEl;if(isEmpty($el.val())){return;}// Fix for IE ver < 11, that does not clear file inputs. Requires a sequence of steps to prevent IE
	// crashing but still allow clearing of the file input.
	if(self.isIE9||self.isIE10){$srcFrm=$el.closest('form');$tmpFrm=$(document.createElement('form'));$tmpEl=$(document.createElement('div'));$el.before($tmpEl);if($srcFrm.length){$srcFrm.after($tmpFrm);}else{$tmpEl.after($tmpFrm);}$tmpFrm.append($el).trigger('reset');$tmpEl.before($el).remove();$tmpFrm.remove();}else{// normal input clear behavior for other sane browsers
	$el.val('');}self.fileInputCleared=true;},_resetUpload:function _resetUpload(){var self=this;self.uploadCache={content:[],config:[],tags:[],append:true};self.uploadCount=0;self.uploadStatus={};self.uploadLog=[];self.uploadAsyncCount=0;self.loadedImages=[];self.totalImagesCount=0;self.$btnUpload.removeAttr('disabled');self._setProgress(0);addCss(self.$progress,'hide');self._resetErrors(false);self.ajaxAborted=false;self.ajaxRequests=[];self._resetCanvas();},_resetCanvas:function _resetCanvas(){var self=this;if(self.canvas&&self.imageCanvasContext){self.imageCanvasContext.clearRect(0,0,self.canvas.width,self.canvas.height);}},_hasInitialPreview:function _hasInitialPreview(){var self=this;return!self.overwriteInitial&&previewCache.count(self.id);},_resetPreview:function _resetPreview(){var self=this,out,cap;if(previewCache.count(self.id)){out=previewCache.out(self.id);self.$preview.html(out.content);cap=self.initialCaption?self.initialCaption:out.caption;self._setCaption(cap);}else{self._clearPreview();self._initCaption();}if(self.showPreview){self._initZoom();self._initSortable();}},_clearDefaultPreview:function _clearDefaultPreview(){var self=this;self.$preview.find('.file-default-preview').remove();},_validateDefaultPreview:function _validateDefaultPreview(){var self=this;if(!self.showPreview||isEmpty(self.defaultPreviewContent)){return;}self.$preview.html('<div class="file-default-preview">'+self.defaultPreviewContent+'</div>');self.$container.removeClass('file-input-new');self._initClickable();},_resetPreviewThumbs:function _resetPreviewThumbs(isAjax){var self=this,out;if(isAjax){self._clearPreview();self.clearStack();return;}if(self._hasInitialPreview()){out=previewCache.out(self.id);self.$preview.html(out.content);self._setCaption(out.caption);self._initPreviewActions();}else{self._clearPreview();}},_getLayoutTemplate:function _getLayoutTemplate(t){var self=this,template=ifSet(t,self.layoutTemplates,defaultLayoutTemplates[t]);if(isEmpty(self.customLayoutTags)){return template;}return replaceTags(template,self.customLayoutTags);},_getPreviewTemplate:function _getPreviewTemplate(t){var self=this,template=ifSet(t,self.previewTemplates,defaultPreviewTemplates[t]);if(isEmpty(self.customPreviewTags)){return template;}return replaceTags(template,self.customPreviewTags);},_getOutData:function _getOutData(jqXHR,responseData,filesData){var self=this;jqXHR=jqXHR||{};responseData=responseData||{};filesData=filesData||self.filestack.slice(0)||{};return{form:self.formdata,files:filesData,filenames:self.filenames,extra:self._getExtraData(),response:responseData,reader:self.reader,jqXHR:jqXHR};},_getMsgSelected:function _getMsgSelected(n){var self=this,strFiles=n===1?self.fileSingle:self.filePlural;return n>0?self.msgSelected.replace('{n}',n).replace('{files}',strFiles):self.msgNoFilesSelected;},_getThumbs:function _getThumbs(css){css=css||'';return this.$preview.find('.file-preview-frame:not(.file-preview-initial)'+css);},_getExtraData:function _getExtraData(previewId,index){var self=this,data=self.uploadExtraData;if(typeof self.uploadExtraData==="function"){data=self.uploadExtraData(previewId,index);}return data;},_initXhr:function _initXhr(xhrobj,previewId,fileCount){var self=this;if(xhrobj.upload){xhrobj.upload.addEventListener('progress',function(event){var pct=0,position=event.loaded||event.position,total=event.total;/** @namespace event.lengthComputable */if(event.lengthComputable){pct=Math.ceil(position/total*100);}if(previewId){self._setAsyncUploadStatus(previewId,pct,fileCount);}else{self._setProgress(Math.ceil(pct));}},false);}return xhrobj;},_ajaxSubmit:function _ajaxSubmit(fnBefore,fnSuccess,fnComplete,fnError,previewId,index){var self=this,settings;self._raise('filepreajax',[previewId,index]);self._uploadExtra(previewId,index);settings=$.extend(true,{},{xhr:function xhr(){var xhrobj=$.ajaxSettings.xhr();return self._initXhr(xhrobj,previewId,self.getFileStack().length);},url:self.uploadUrl,type:'POST',dataType:'json',data:self.formdata,cache:false,processData:false,contentType:false,beforeSend:fnBefore,success:fnSuccess,complete:fnComplete,error:fnError},self.ajaxSettings);self.ajaxRequests.push($.ajax(settings));},_initUploadSuccess:function _initUploadSuccess(out,$thumb,allFiles){var self=this,append,data,index,$newThumb,content,config,tags,i;if(!self.showPreview||(typeof out==='undefined'?'undefined':_typeof(out))!=='object'||$.isEmptyObject(out)){return;}if(out.initialPreview!==undefined&&out.initialPreview.length>0){self.hasInitData=true;content=out.initialPreview||[];config=out.initialPreviewConfig||[];tags=out.initialPreviewThumbTags||[];append=out.append===undefined||out.append?true:false;if(content.length>0&&!isArray(content)){content=content.split(self.initialPreviewDelimiter);}self.overwriteInitial=false;self.initialPreview.concat(content);self.initialPreviewThumbTags.concat(tags);self.initialPreviewConfig.concat(config);if($thumb!==undefined){if(!allFiles){index=previewCache.add(self.id,content,config[0],tags[0],append);data=previewCache.get(self.id,index,false);$newThumb=$(data).hide();$thumb.after($newThumb).fadeOut('slow',function(){$newThumb.fadeIn('slow').css('display:inline-block');self._initPreviewActions();self._clearFileInput();$thumb.remove();});}else{i=$thumb.attr('data-fileindex');self.uploadCache.content[i]=content[0];self.uploadCache.config[i]=config[0];self.uploadCache.tags[i]=tags[0];self.uploadCache.append=append;}}else{previewCache.set(self.id,content,config,tags,append);self._initPreview();self._initPreviewActions();}}},_initSuccessThumbs:function _initSuccessThumbs(){var self=this;if(!self.showPreview){return;}self._getThumbs('.file-preview-success').each(function(){var $thumb=$(this),$remove=$thumb.find('.kv-file-remove');$remove.removeAttr('disabled');handler($remove,'click',function(){var out=self._raise('filesuccessremove',[$thumb.attr('id'),$thumb.data('fileindex')]);cleanMemory($thumb);if(out===false){return;}$thumb.fadeOut('slow',function(){$thumb.remove();if(!self.$preview.find('.file-preview-frame').length){self.reset();}});});});},_checkAsyncComplete:function _checkAsyncComplete(){var self=this,previewId,i;for(i=0;i<self.filestack.length;i++){if(self.filestack[i]){previewId=self.previewInitId+"-"+i;if($.inArray(previewId,self.uploadLog)===-1){return false;}}}return self.uploadAsyncCount===self.uploadLog.length;},_uploadExtra:function _uploadExtra(previewId,index){var self=this,data=self._getExtraData(previewId,index);if(data.length===0){return;}$.each(data,function(key,value){self.formdata.append(key,value);});},_uploadSingle:function _uploadSingle(i,files,allFiles){var self=this,total=self.getFileStack().length,formdata=new FormData(),outData,previewId=self.previewInitId+"-"+i,$thumb,chkComplete,$btnUpload,$btnDelete,hasPostData=self.filestack.length>0||!$.isEmptyObject(self.uploadExtraData),fnBefore,fnSuccess,fnComplete,fnError,updateUploadLog,params={id:previewId,index:i};self.formdata=formdata;if(self.showPreview){$thumb=$('#'+previewId+':not(.file-preview-initial)');$btnUpload=$thumb.find('.kv-file-upload');$btnDelete=$thumb.find('.kv-file-remove');$('#'+previewId).find('.file-thumb-progress').removeClass('hide');}if(total===0||!hasPostData||$btnUpload&&$btnUpload.hasClass('disabled')||self._abort(params)){return;}updateUploadLog=function updateUploadLog(i,previewId){self.updateStack(i,undefined);self.uploadLog.push(previewId);if(self._checkAsyncComplete()){self.fileBatchCompleted=true;}};chkComplete=function chkComplete(){var u=self.uploadCache;if(!self.fileBatchCompleted){return;}setTimeout(function(){if(self.showPreview){previewCache.set(self.id,u.content,u.config,u.tags,u.append);if(self.hasInitData){self._initPreview();self._initPreviewActions();}}self.unlock();self._clearFileInput();self._raise('filebatchuploadcomplete',[self.filestack,self._getExtraData()]);self.uploadCount=0;self.uploadStatus={};self.uploadLog=[];self._setProgress(100);},100);};fnBefore=function fnBefore(jqXHR){outData=self._getOutData(jqXHR);self.fileBatchCompleted=false;if(self.showPreview){if(!$thumb.hasClass('file-preview-success')){self._setThumbStatus($thumb,'Loading');addCss($thumb,'file-uploading');}$btnUpload.attr('disabled',true);$btnDelete.attr('disabled',true);}if(!allFiles){self.lock();}self._raise('filepreupload',[outData,previewId,i]);$.extend(true,params,outData);if(self._abort(params)){jqXHR.abort();self._setProgressCancelled();}};fnSuccess=function fnSuccess(data,textStatus,jqXHR){outData=self._getOutData(jqXHR,data);$.extend(true,params,outData);setTimeout(function(){if(isEmpty(data)||isEmpty(data.error)){if(self.showPreview){self._setThumbStatus($thumb,'Success');$btnUpload.hide();self._initUploadSuccess(data,$thumb,allFiles);}self._raise('fileuploaded',[outData,previewId,i]);if(!allFiles){self.updateStack(i,undefined);}else{updateUploadLog(i,previewId);}}else{self._showUploadError(data.error,params);self._setPreviewError($thumb,i);if(allFiles){updateUploadLog(i,previewId);}}},100);};fnComplete=function fnComplete(){setTimeout(function(){if(self.showPreview){$btnUpload.removeAttr('disabled');$btnDelete.removeAttr('disabled');$thumb.removeClass('file-uploading');}if(!allFiles){self.unlock(false);self._clearFileInput();}else{chkComplete();}self._initSuccessThumbs();},100);};fnError=function fnError(jqXHR,textStatus,errorThrown){var errMsg=self._parseError(jqXHR,errorThrown,allFiles?files[i].name:null);setTimeout(function(){if(allFiles){updateUploadLog(i,previewId);}self.uploadStatus[previewId]=100;self._setPreviewError($thumb,i);$.extend(true,params,self._getOutData(jqXHR));self._showUploadError(errMsg,params);},100);};formdata.append(self.uploadFileAttr,files[i],self.filenames[i]);formdata.append('file_id',i);self._ajaxSubmit(fnBefore,fnSuccess,fnComplete,fnError,previewId,i);},_uploadBatch:function _uploadBatch(){var self=this,files=self.filestack,total=files.length,params={},fnBefore,fnSuccess,fnError,fnComplete,hasPostData=self.filestack.length>0||!$.isEmptyObject(self.uploadExtraData),setAllUploaded;self.formdata=new FormData();if(total===0||!hasPostData||self._abort(params)){return;}setAllUploaded=function setAllUploaded(){$.each(files,function(key){self.updateStack(key,undefined);});self._clearFileInput();};fnBefore=function fnBefore(jqXHR){self.lock();var outData=self._getOutData(jqXHR);if(self.showPreview){self._getThumbs().each(function(){var $thumb=$(this),$btnUpload=$thumb.find('.kv-file-upload'),$btnDelete=$thumb.find('.kv-file-remove');if(!$thumb.hasClass('file-preview-success')){self._setThumbStatus($thumb,'Loading');addCss($thumb,'file-uploading');}$btnUpload.attr('disabled',true);$btnDelete.attr('disabled',true);});}self._raise('filebatchpreupload',[outData]);if(self._abort(outData)){jqXHR.abort();self._setProgressCancelled();}};fnSuccess=function fnSuccess(data,textStatus,jqXHR){/** @namespace data.errorkeys */var outData=self._getOutData(jqXHR,data),$thumbs=self._getThumbs(':not(.file-preview-error)'),key=0,keys=isEmpty(data)||isEmpty(data.errorkeys)?[]:data.errorkeys;if(isEmpty(data)||isEmpty(data.error)){self._raise('filebatchuploadsuccess',[outData]);setAllUploaded();if(self.showPreview){$thumbs.each(function(){var $thumb=$(this),$btnUpload=$thumb.find('.kv-file-upload');$thumb.find('.kv-file-upload').hide();self._setThumbStatus($thumb,'Success');$thumb.removeClass('file-uploading');$btnUpload.removeAttr('disabled');});self._initUploadSuccess(data);}else{self.reset();}}else{if(self.showPreview){$thumbs.each(function(){var $thumb=$(this),$btnDelete=$thumb.find('.kv-file-remove'),$btnUpload=$thumb.find('.kv-file-upload');$thumb.removeClass('file-uploading');$btnUpload.removeAttr('disabled');$btnDelete.removeAttr('disabled');if(keys.length===0){self._setPreviewError($thumb);return;}if($.inArray(key,keys)!==-1){self._setPreviewError($thumb);}else{$thumb.find('.kv-file-upload').hide();self._setThumbStatus($thumb,'Success');self.updateStack(key,undefined);}key++;});self._initUploadSuccess(data);}self._showUploadError(data.error,outData,'filebatchuploaderror');}};fnComplete=function fnComplete(){self._setProgress(100);self.unlock();self._initSuccessThumbs();self._clearFileInput();self._raise('filebatchuploadcomplete',[self.filestack,self._getExtraData()]);};fnError=function fnError(jqXHR,textStatus,errorThrown){var outData=self._getOutData(jqXHR),errMsg=self._parseError(jqXHR,errorThrown);self._showUploadError(errMsg,outData,'filebatchuploaderror');self.uploadFileCount=total-1;if(!self.showPreview){return;}self._getThumbs().each(function(){var $thumb=$(this),key=$thumb.attr('data-fileindex');$thumb.removeClass('file-uploading');if(self.filestack[key]!==undefined){self._setPreviewError($thumb);}});self._getThumbs().removeClass('file-uploading');self._getThumbs(' .kv-file-upload').removeAttr('disabled');self._getThumbs(' .kv-file-delete').removeAttr('disabled');};$.each(files,function(key,data){if(!isEmpty(files[key])){self.formdata.append(self.uploadFileAttr,data,self.filenames[key]);}});self._ajaxSubmit(fnBefore,fnSuccess,fnComplete,fnError);},_uploadExtraOnly:function _uploadExtraOnly(){var self=this,params={},fnBefore,fnSuccess,fnComplete,fnError;self.formdata=new FormData();if(self._abort(params)){return;}fnBefore=function fnBefore(jqXHR){self.lock();var outData=self._getOutData(jqXHR);self._raise('filebatchpreupload',[outData]);self._setProgress(50);params.data=outData;params.xhr=jqXHR;if(self._abort(params)){jqXHR.abort();self._setProgressCancelled();}};fnSuccess=function fnSuccess(data,textStatus,jqXHR){var outData=self._getOutData(jqXHR,data);if(isEmpty(data)||isEmpty(data.error)){self._raise('filebatchuploadsuccess',[outData]);self._clearFileInput();self._initUploadSuccess(data);}else{self._showUploadError(data.error,outData,'filebatchuploaderror');}};fnComplete=function fnComplete(){self._setProgress(100);self.unlock();self._clearFileInput();self._raise('filebatchuploadcomplete',[self.filestack,self._getExtraData()]);};fnError=function fnError(jqXHR,textStatus,errorThrown){var outData=self._getOutData(jqXHR),errMsg=self._parseError(jqXHR,errorThrown);params.data=outData;self._showUploadError(errMsg,outData,'filebatchuploaderror');};self._ajaxSubmit(fnBefore,fnSuccess,fnComplete,fnError);},_initFileActions:function _initFileActions(){var self=this;if(!self.showPreview){return;}self._initZoomButton();self.$preview.find('.kv-file-remove').each(function(){var $el=$(this),$frame=$el.closest('.file-preview-frame'),hasError,id=$frame.attr('id'),ind=$frame.attr('data-fileindex'),n,cap,status;handler($el,'click',function(){status=self._raise('filepreremove',[id,ind]);if(status===false||!self._validateMinCount()){return false;}hasError=$frame.hasClass('file-preview-error');cleanMemory($frame);$frame.fadeOut('slow',function(){self.updateStack(ind,undefined);self._clearObjects($frame);$frame.remove();if(id&&hasError){self.$errorContainer.find('li[data-file-id="'+id+'"]').fadeOut('fast',function(){$(this).remove();if(!self._errorsExist()){self._resetErrors();}});}self._clearFileInput();var filestack=self.getFileStack(true),chk=previewCache.count(self.id),len=filestack.length,hasThumb=self.showPreview&&self.$preview.find('.file-preview-frame').length;if(len===0&&chk===0&&!hasThumb){self.reset();}else{n=chk+len;cap=n>1?self._getMsgSelected(n):filestack[0]?self._getFileNames()[0]:'';self._setCaption(cap);}self._raise('fileremoved',[id,ind]);});});});self.$preview.find('.kv-file-upload').each(function(){var $el=$(this);handler($el,'click',function(){var $frame=$el.closest('.file-preview-frame'),ind=$frame.attr('data-fileindex');if(!$frame.hasClass('file-preview-error')){self._uploadSingle(ind,self.filestack,false);}});});},_hideFileIcon:function _hideFileIcon(){if(this.overwriteInitial){this.$captionContainer.find('.kv-caption-icon').hide();}},_showFileIcon:function _showFileIcon(){this.$captionContainer.find('.kv-caption-icon').show();},_getSize:function _getSize(bytes){var size=parseFloat(bytes);if(bytes===null||isNaN(size)){return'';}var self=this,i,func=self.fileSizeGetter,sizes,out;if(typeof func==='function'){out=func(bytes);}else{i=Math.floor(Math.log(size)/Math.log(1024));sizes=['B','KB','MB','GB','TB','PB','EB','ZB','YB'];out=(size/Math.pow(1024,i)).toFixed(2)*1+' '+sizes[i];}return self._getLayoutTemplate('size').replace('{sizeText}',out);},_generatePreviewTemplate:function _generatePreviewTemplate(cat,data,fname,ftype,previewId,isError,size,frameClass,foot,ind){var self=this,tmplt=self._getPreviewTemplate(cat),content,sText,css=frameClass||'',config=ifSet(cat,self.previewSettings,defaultPreviewSettings[cat]),caption=self.slug(fname),footer=foot||self._renderFileFooter(caption,size,config.width,isError);ind=ind||previewId.slice(previewId.lastIndexOf('-')+1);tmplt=self._parseFilePreviewIcon(tmplt,fname);if(cat==='text'||cat==='html'){sText=cat==='text'?htmlEncode(data):data;content=tmplt.replace(/\{previewId}/g,previewId).replace(/\{caption}/g,caption).replace(/\{width}/g,config.width).replace(/\{height}/g,config.height).replace(/\{frameClass}/g,css).replace(/\{cat}/g,ftype).replace(/\{footer}/g,footer).replace(/\{fileindex}/g,ind).replace(/\{data}/g,sText).replace(/\{template}/g,cat);}else{content=tmplt.replace(/\{previewId}/g,previewId).replace(/\{caption}/g,caption).replace(/\{frameClass}/g,css).replace(/\{type}/g,ftype).replace(/\{fileindex}/g,ind).replace(/\{width}/g,config.width).replace(/\{height}/g,config.height).replace(/\{footer}/g,footer).replace(/\{data}/g,data).replace(/\{template}/g,cat);}return content;},_previewDefault:function _previewDefault(file,previewId,isDisabled){var self=this,$preview=self.$preview,$previewLive=$preview.find('.file-live-thumbs');if(!self.showPreview){return;}var fname=file?file.name:'',ftype=file?file.type:'',content,isError=isDisabled===true&&!self.isUploadable,data=objUrl.createObjectURL(file);self._clearDefaultPreview();content=self._generatePreviewTemplate('other',data,fname,ftype,previewId,isError,file.size);if(!$previewLive.length){$previewLive=$(document.createElement('div')).addClass('file-live-thumbs').appendTo($preview);}$previewLive.append("\n"+content);if(isDisabled===true&&self.isUploadable){self._setThumbStatus($('#'+previewId),'Error');}},_previewFile:function _previewFile(i,file,theFile,previewId,data){if(!this.showPreview){return;}var self=this,cat=self._parseFileType(file),fname=file?file.name:'',caption=self.slug(fname),types=self.allowedPreviewTypes,mimes=self.allowedPreviewMimeTypes,$preview=self.$preview,chkTypes=types&&types.indexOf(cat)>=0,$previewLive=$preview.find('.file-live-thumbs'),iData=cat==='text'||cat==='html'||cat==='image'?theFile.target.result:data,content,chkMimes=mimes&&mimes.indexOf(file.type)!==-1;if(!$previewLive.length){$previewLive=$(document.createElement('div')).addClass('file-live-thumbs').appendTo($preview);}/** @namespace window.DOMPurify */if(cat==='html'&&self.purifyHtml&&window.DOMPurify){iData=window.DOMPurify.sanitize(iData);}if(chkTypes||chkMimes){content=self._generatePreviewTemplate(cat,iData,fname,file.type,previewId,false,file.size);self._clearDefaultPreview();$previewLive.append("\n"+content);self._validateImage(i,previewId,caption,file.type);}else{self._previewDefault(file,previewId);}self._initSortable();},_slugDefault:function _slugDefault(text){return isEmpty(text)?'':String(text).replace(/[\-\[\]\/\{}:;#%=\(\)\*\+\?\\\^\$\|<>&"']/g,'_');},_readFiles:function _readFiles(files){this.reader=new FileReader();var self=this,$el=self.$element,$preview=self.$preview,reader=self.reader,$container=self.$previewContainer,$status=self.$previewStatus,msgLoading=self.msgLoading,msgProgress=self.msgProgress,previewInitId=self.previewInitId,numFiles=files.length,settings=self.fileTypeSettings,ctr=self.filestack.length,_readFile,maxPreviewSize=self.maxFilePreviewSize&&parseFloat(self.maxFilePreviewSize),canPreview=$preview.length&&(!maxPreviewSize||isNaN(maxPreviewSize)),throwError=function throwError(msg,file,previewId,index){var p1=$.extend(true,{},self._getOutData({},{},files),{id:previewId,index:index}),p2={id:previewId,index:index,file:file,files:files};self._previewDefault(file,previewId,true);if(self.isUploadable){self.addToStack(undefined);}setTimeout(function(){_readFile(index+1);},100);self._initFileActions();if(self.removeFromPreviewOnError){$('#'+previewId).remove();}return self.isUploadable?self._showUploadError(msg,p1):self._showError(msg,p2);};self.loadedImages=[];self.totalImagesCount=0;$.each(files,function(key,file){var func=self.fileTypeSettings.image||defaultFileTypeSettings.image;if(func&&func(file.type)){self.totalImagesCount++;}});_readFile=function readFile(i){if(isEmpty($el.attr('multiple'))){numFiles=1;}if(i>=numFiles){if(self.isUploadable&&self.filestack.length>0){self._raise('filebatchselected',[self.getFileStack()]);}else{self._raise('filebatchselected',[files]);}$container.removeClass('file-thumb-loading');$status.html('');return;}var node=ctr+i,previewId=previewInitId+"-"+node,isText,isImage,file=files[i],caption=self.slug(file.name),fileSize=(file.size||0)/1000,checkFile,fileExtExpr='',previewData=objUrl.createObjectURL(file),fileCount=0,j,msg,typ,chk,fileTypes=self.allowedFileTypes,strTypes=isEmpty(fileTypes)?'':fileTypes.join(', '),fileExt=self.allowedFileExtensions,strExt=isEmpty(fileExt)?'':fileExt.join(', ');if(!isEmpty(fileExt)){fileExtExpr=new RegExp('\\.('+fileExt.join('|')+')$','i');}fileSize=fileSize.toFixed(2);if(self.maxFileSize>0&&fileSize>self.maxFileSize){msg=self.msgSizeTooLarge.replace('{name}',caption).replace('{size}',fileSize).replace('{maxSize}',self.maxFileSize);self.isError=throwError(msg,file,previewId,i);return;}if(!isEmpty(fileTypes)&&isArray(fileTypes)){for(j=0;j<fileTypes.length;j+=1){typ=fileTypes[j];checkFile=settings[typ];chk=checkFile!==undefined&&checkFile(file.type,caption);fileCount+=isEmpty(chk)?0:chk.length;}if(fileCount===0){msg=self.msgInvalidFileType.replace('{name}',caption).replace('{types}',strTypes);self.isError=throwError(msg,file,previewId,i);return;}}if(fileCount===0&&!isEmpty(fileExt)&&isArray(fileExt)&&!isEmpty(fileExtExpr)){chk=compare(caption,fileExtExpr);fileCount+=isEmpty(chk)?0:chk.length;if(fileCount===0){msg=self.msgInvalidFileExtension.replace('{name}',caption).replace('{extensions}',strExt);self.isError=throwError(msg,file,previewId,i);return;}}if(!self.showPreview){self.addToStack(file);setTimeout(function(){_readFile(i+1);},100);self._raise('fileloaded',[file,previewId,i,reader]);return;}if(!canPreview&&fileSize>maxPreviewSize){self.addToStack(file);$container.addClass('file-thumb-loading');self._previewDefault(file,previewId);self._initFileActions();self._updateFileDetails(numFiles);_readFile(i+1);return;}if($preview.length&&FileReader!==undefined){$status.html(msgLoading.replace('{index}',i+1).replace('{files}',numFiles));$container.addClass('file-thumb-loading');reader.onerror=function(evt){self._errorHandler(evt,caption);};reader.onload=function(theFile){self._previewFile(i,file,theFile,previewId,previewData);self._initFileActions();};reader.onloadend=function(){msg=msgProgress.replace('{index}',i+1).replace('{files}',numFiles).replace('{percent}',50).replace('{name}',caption);setTimeout(function(){$status.html(msg);self._updateFileDetails(numFiles);_readFile(i+1);},100);self._raise('fileloaded',[file,previewId,i,reader]);};reader.onprogress=function(data){if(data.lengthComputable){var fact=data.loaded/data.total*100,progress=Math.ceil(fact);msg=msgProgress.replace('{index}',i+1).replace('{files}',numFiles).replace('{percent}',progress).replace('{name}',caption);setTimeout(function(){$status.html(msg);},100);}};isText=ifSet('text',settings,defaultFileTypeSettings.text);isImage=ifSet('image',settings,defaultFileTypeSettings.image);if(isText(file.type,caption)){reader.readAsText(file,self.textEncoding);}else{if(isImage(file.type,caption)){reader.readAsDataURL(file);}else{reader.readAsArrayBuffer(file);}}}else{self._previewDefault(file,previewId);setTimeout(function(){_readFile(i+1);self._updateFileDetails(numFiles);},100);self._raise('fileloaded',[file,previewId,i,reader]);}self.addToStack(file);};_readFile(0);self._updateFileDetails(numFiles,false);},_updateFileDetails:function _updateFileDetails(numFiles){var self=this,$el=self.$element,fileStack=self.getFileStack(),name=isIE(9)&&findFileName($el.val())||$el[0].files[0]&&$el[0].files[0].name||fileStack.length&&fileStack[0].name||'',label=self.slug(name),n=self.isUploadable?fileStack.length:numFiles,nFiles=previewCache.count(self.id)+n,log=n>1?self._getMsgSelected(nFiles):label;if(self.isError){self.$previewContainer.removeClass('file-thumb-loading');self.$previewStatus.html('');self.$captionContainer.find('.kv-caption-icon').hide();}else{self._showFileIcon();}self._setCaption(log,self.isError);self.$container.removeClass('file-input-new file-input-ajax-new');if(arguments.length===1){self._raise('fileselect',[numFiles,label]);}if(previewCache.count(self.id)){self._initPreviewActions();}},_setThumbStatus:function _setThumbStatus($thumb,status){var self=this;if(!self.showPreview){return;}var icon='indicator'+status,msg=icon+'Title',css='file-preview-'+status.toLowerCase(),$indicator=$thumb.find('.file-upload-indicator'),config=self.fileActionSettings;$thumb.removeClass('file-preview-success file-preview-error file-preview-loading');if(status==='Error'){$thumb.find('.kv-file-upload').attr('disabled',true);}if(status==='Success'){$thumb.find('.file-drag-handle').remove();$indicator.css('margin-left',0);}$indicator.html(config[icon]);$indicator.attr('title',config[msg]);$thumb.addClass(css);},_setProgressCancelled:function _setProgressCancelled(){var self=this;self._setProgress(100,self.$progress,self.msgCancelled);},_setProgress:function _setProgress(p,$el,error){var self=this,pct=Math.min(p,100),template=pct<100?self.progressTemplate:error?self.progressErrorTemplate:self.progressCompleteTemplate;$el=$el||self.$progress;if(!isEmpty(template)){$el.html(template.replace(/\{percent}/g,pct));if(error){$el.find('[role="progressbar"]').html(error);}}},_setFileDropZoneTitle:function _setFileDropZoneTitle(){var self=this,$zone=self.$container.find('.file-drop-zone'),title=self.dropZoneTitle,strFiles;if(self.isClickable){strFiles=isEmpty(self.$element.attr('multiple'))?self.fileSingle:self.filePlural;title+=self.dropZoneClickTitle.replace('{files}',strFiles);}$zone.find('.'+self.dropZoneTitleClass).remove();if(!self.isUploadable||!self.showPreview||$zone.length===0||self.getFileStack().length>0||!self.dropZoneEnabled){return;}if($zone.find('.file-preview-frame').length===0&&isEmpty(self.defaultPreviewContent)){$zone.prepend('<div class="'+self.dropZoneTitleClass+'">'+title+'</div>');}self.$container.removeClass('file-input-new');addCss(self.$container,'file-input-ajax-new');},_setAsyncUploadStatus:function _setAsyncUploadStatus(previewId,pct,total){var self=this,sum=0;self._setProgress(pct,$('#'+previewId).find('.file-thumb-progress'));self.uploadStatus[previewId]=pct;$.each(self.uploadStatus,function(key,value){sum+=value;});self._setProgress(Math.ceil(sum/total));},_validateMinCount:function _validateMinCount(){var self=this,len=self.isUploadable?self.getFileStack().length:self.$element.get(0).files.length;if(self.validateInitialCount&&self.minFileCount>0&&self._getFileCount(len-1)<self.minFileCount){self._noFilesError({});return false;}return true;},_getFileCount:function _getFileCount(fileCount){var self=this,addCount=0;if(self.validateInitialCount&&!self.overwriteInitial){addCount=previewCache.count(self.id);fileCount+=addCount;}return fileCount;},_getFileName:function _getFileName(file){return file&&file.name?this.slug(file.name):undefined;},_getFileNames:function _getFileNames(skipNull){var self=this;return self.filenames.filter(function(n){return skipNull?n!==undefined:n!==undefined&&n!==null;});},_setPreviewError:function _setPreviewError($thumb,i,val){var self=this;if(i!==undefined){self.updateStack(i,val);}if(self.removeFromPreviewOnError){$thumb.remove();}else{self._setThumbStatus($thumb,'Error');}},_checkDimensions:function _checkDimensions(i,chk,$img,$thumb,fname,type,params){var self=this,msg,dim,tag=chk==='Small'?'min':'max',limit=self[tag+'Image'+type],$imgEl,isValid;if(isEmpty(limit)||!$img.length){return;}$imgEl=$img[0];dim=type==='Width'?$imgEl.naturalWidth||$imgEl.width:$imgEl.naturalHeight||$imgEl.height;isValid=chk==='Small'?dim>=limit:dim<=limit;if(isValid){return;}msg=self['msgImage'+type+chk].replace('{name}',fname).replace('{size}',limit);self._showUploadError(msg,params);self._setPreviewError($thumb,i,null);},_validateImage:function _validateImage(i,previewId,fname,ftype){var self=this,$preview=self.$preview,params,w1,w2,$thumb=$preview.find("#"+previewId),$img=$thumb.find('img');fname=fname||'Untitled';if(!$img.length){return;}handler($img,'load',function(){w1=$thumb.width();w2=$preview.width();if(w1>w2){$img.css('width','100%');$thumb.css('width','97%');}params={ind:i,id:previewId};self._checkDimensions(i,'Small',$img,$thumb,fname,'Width',params);self._checkDimensions(i,'Small',$img,$thumb,fname,'Height',params);if(!self.resizeImage){self._checkDimensions(i,'Large',$img,$thumb,fname,'Width',params);self._checkDimensions(i,'Large',$img,$thumb,fname,'Height',params);}self._raise('fileimageloaded',[previewId]);self.loadedImages.push({ind:i,img:$img,thumb:$thumb,pid:previewId,typ:ftype});self._validateAllImages();objUrl.revokeObjectURL($img.attr('src'));});},_validateAllImages:function _validateAllImages(){var self=this,i,config,$img,$thumb,pid,ind,params={},errFunc;if(self.loadedImages.length!==self.totalImagesCount){return;}self._raise('fileimagesloaded');if(!self.resizeImage){return;}errFunc=self.isUploadable?self._showUploadError:self._showError;for(i=0;i<self.loadedImages.length;i++){config=self.loadedImages[i];$img=config.img;$thumb=config.thumb;pid=config.pid;ind=config.ind;params={id:pid,'index':ind};if(!self._getResizedImage($img[0],config.typ,pid,ind)){errFunc(self.msgImageResizeError,params,'fileimageresizeerror');self._setPreviewError($thumb,ind);}}self._raise('fileimagesresized');},_getResizedImage:function _getResizedImage(image,type,pid,ind){var self=this,width=image.naturalWidth,height=image.naturalHeight,ratio=1,maxWidth=self.maxImageWidth||width,maxHeight=self.maxImageHeight||height,isValidImage=width&&height,chkWidth,chkHeight,canvas=self.imageCanvas,context=self.imageCanvasContext;if(!isValidImage){return false;}if(width===maxWidth&&height===maxHeight){return true;}type=type||self.resizeDefaultImageType;chkWidth=width>maxWidth;chkHeight=height>maxHeight;if(self.resizePreference==='width'){ratio=chkWidth?maxWidth/width:chkHeight?maxHeight/height:1;}else{ratio=chkHeight?maxHeight/height:chkWidth?maxWidth/width:1;}self._resetCanvas();width*=ratio;height*=ratio;canvas.width=width;canvas.height=height;try{context.drawImage(image,0,0,width,height);canvas.toBlob(function(blob){self._raise('fileimageresized',[pid,ind]);self.filestack[ind]=blob;},type,self.resizeQuality);return true;}catch(err){return false;}},_initBrowse:function _initBrowse($container){var self=this;if(self.showBrowse){self.$btnFile=$container.find('.btn-file');self.$btnFile.append(self.$element);}else{self.$element.hide();}},_initCaption:function _initCaption(){var self=this,cap=self.initialCaption||'';if(self.overwriteInitial||isEmpty(cap)){self.$caption.html('');return false;}self._setCaption(cap);return true;},_setCaption:function _setCaption(content,isError){var self=this,title,out,n,cap,stack=self.getFileStack();if(!self.$caption.length){return;}if(isError){title=$('<div>'+self.msgValidationError+'</div>').text();n=stack.length;if(n){cap=n===1&&stack[0]?self._getFileNames()[0]:self._getMsgSelected(n);}else{cap=self._getMsgSelected(self.msgNo);}out='<span class="'+self.msgValidationErrorClass+'">'+self.msgValidationErrorIcon+(isEmpty(content)?cap:content)+'</span>';}else{if(isEmpty(content)){return;}title=$('<div>'+content+'</div>').text();out=self._getLayoutTemplate('fileIcon')+title;}self.$caption.html(out);self.$caption.attr('title',title);self.$captionContainer.find('.file-caption-ellipsis').attr('title',title);},_createContainer:function _createContainer(){var self=this,$container=$(document.createElement("div")).attr({"class":'file-input file-input-new'}).html(self._renderMain());self.$element.before($container);self._initBrowse($container);if(self.theme){$container.addClass('theme-'+self.theme);}return $container;},_refreshContainer:function _refreshContainer(){var self=this,$container=self.$container;$container.before(self.$element);$container.html(self._renderMain());self._initBrowse($container);},_renderMain:function _renderMain(){var self=this,dropCss=self.isUploadable&&self.dropZoneEnabled?' file-drop-zone':'file-drop-disabled',close=!self.showClose?'':self._getLayoutTemplate('close'),preview=!self.showPreview?'':self._getLayoutTemplate('preview').replace(/\{class}/g,self.previewClass).replace(/\{dropClass}/g,dropCss),css=self.isDisabled?self.captionClass+' file-caption-disabled':self.captionClass,caption=self.captionTemplate.replace(/\{class}/g,css+' kv-fileinput-caption');return self.mainTemplate.replace(/\{class}/g,self.mainClass+(!self.showBrowse&&self.showCaption?' no-browse':'')).replace(/\{preview}/g,preview).replace(/\{close}/g,close).replace(/\{caption}/g,caption).replace(/\{upload}/g,self._renderButton('upload')).replace(/\{remove}/g,self._renderButton('remove')).replace(/\{cancel}/g,self._renderButton('cancel')).replace(/\{browse}/g,self._renderButton('browse'));},_renderButton:function _renderButton(type){var self=this,tmplt=self._getLayoutTemplate('btnDefault'),css=self[type+'Class'],title=self[type+'Title'],icon=self[type+'Icon'],label=self[type+'Label'],status=self.isDisabled?' disabled':'',btnType='button';switch(type){case'remove':if(!self.showRemove){return'';}break;case'cancel':if(!self.showCancel){return'';}css+=' hide';break;case'upload':if(!self.showUpload){return'';}if(self.isUploadable&&!self.isDisabled){tmplt=self._getLayoutTemplate('btnLink').replace('{href}',self.uploadUrl);}else{btnType='submit';}break;case'browse':if(!self.showBrowse){return'';}tmplt=self._getLayoutTemplate('btnBrowse');break;default:return'';}css+=type==='browse'?' btn-file':' fileinput-'+type+' fileinput-'+type+'-button';if(!isEmpty(label)){label=' <span class="'+self.buttonLabelClass+'">'+label+'</span>';}return tmplt.replace('{type}',btnType).replace('{css}',css).replace('{title}',title).replace('{status}',status).replace('{icon}',icon).replace('{label}',label);},_renderThumbProgress:function _renderThumbProgress(){return'<div class="file-thumb-progress hide">'+this.progressTemplate.replace(/\{percent}/g,'0')+'</div>';},_renderFileFooter:function _renderFileFooter(caption,size,width,isError){var self=this,config=self.fileActionSettings,rem=config.showRemove,drg=config.showDrag,upl=config.showUpload,zoom=config.showZoom,out,template=self._getLayoutTemplate('footer'),indicator=isError?config.indicatorError:config.indicatorNew,title=isError?config.indicatorErrorTitle:config.indicatorNewTitle;size=self._getSize(size);if(self.isUploadable){out=template.replace(/\{actions}/g,self._renderFileActions(upl,rem,zoom,drg,false,false,false)).replace(/\{caption}/g,caption).replace(/\{size}/g,size).replace(/\{width}/g,width).replace(/\{progress}/g,self._renderThumbProgress()).replace(/\{indicator}/g,indicator).replace(/\{indicatorTitle}/g,title);}else{out=template.replace(/\{actions}/g,self._renderFileActions(false,false,zoom,drg,false,false,false)).replace(/\{caption}/g,caption).replace(/\{size}/g,size).replace(/\{width}/g,width).replace(/\{progress}/g,'').replace(/\{indicator}/g,indicator).replace(/\{indicatorTitle}/g,title);}out=replaceTags(out,self.previewThumbTags);return out;},_renderFileActions:function _renderFileActions(showUpload,showDelete,showZoom,showDrag,disabled,url,key,isInit){if(!showUpload&&!showDelete&&!showZoom&&!showDrag){return'';}var self=this,vUrl=url===false?'':' data-url="'+url+'"',vKey=key===false?'':' data-key="'+key+'"',btnDelete='',btnUpload='',btnZoom='',btnDrag='',css,template=self._getLayoutTemplate('actions'),config=self.fileActionSettings,otherButtons=self.otherActionButtons.replace(/\{dataKey}/g,vKey),removeClass=disabled?config.removeClass+' disabled':config.removeClass;if(showDelete){btnDelete=self._getLayoutTemplate('actionDelete').replace(/\{removeClass}/g,removeClass).replace(/\{removeIcon}/g,config.removeIcon).replace(/\{removeTitle}/g,config.removeTitle).replace(/\{dataUrl}/g,vUrl).replace(/\{dataKey}/g,vKey);}if(showUpload){btnUpload=self._getLayoutTemplate('actionUpload').replace(/\{uploadClass}/g,config.uploadClass).replace(/\{uploadIcon}/g,config.uploadIcon).replace(/\{uploadTitle}/g,config.uploadTitle);}if(showZoom){btnZoom=self._getLayoutTemplate('actionZoom').replace(/\{zoomClass}/g,config.zoomClass).replace(/\{zoomIcon}/g,config.zoomIcon).replace(/\{zoomTitle}/g,config.zoomTitle);}if(showDrag&&isInit){css='drag-handle-init '+config.dragClass;btnDrag=self._getLayoutTemplate('actionDrag').replace(/\{dragClass}/g,css).replace(/\{dragTitle}/g,config.dragTitle).replace(/\{dragIcon}/g,config.dragIcon);}return template.replace(/\{delete}/g,btnDelete).replace(/\{upload}/g,btnUpload).replace(/\{zoom}/g,btnZoom).replace(/\{drag}/g,btnDrag).replace(/\{other}/g,otherButtons);},_browse:function _browse(e){var self=this;self._raise('filebrowse');if(e&&e.isDefaultPrevented()){return;}if(self.isError&&!self.isUploadable){self.clear();}self.$captionContainer.focus();},_change:function _change(e){var self=this,$el=self.$element;if(!self.isUploadable&&isEmpty($el.val())&&self.fileInputCleared){// IE 11 fix
	self.fileInputCleared=false;return;}self.fileInputCleared=false;var tfiles,msg,total,isDragDrop=arguments.length>1,isAjaxUpload=self.isUploadable,i=0,f,n,len,files=isDragDrop?e.originalEvent.dataTransfer.files:$el.get(0).files,ctr=self.filestack.length,isSingleUpload=isEmpty($el.attr('multiple')),flagSingle=isSingleUpload&&ctr>0,folders=0,throwError=function throwError(mesg,file,previewId,index){var p1=$.extend(true,{},self._getOutData({},{},files),{id:previewId,index:index}),p2={id:previewId,index:index,file:file,files:files};return self.isUploadable?self._showUploadError(mesg,p1):self._showError(mesg,p2);};self.reader=null;self._resetUpload();self._hideFileIcon();if(self.isUploadable){self.$container.find('.file-drop-zone .'+self.dropZoneTitleClass).remove();}if(isDragDrop){tfiles=[];while(files[i]){f=files[i];if(!f.type&&f.size%4096===0){folders++;}else{tfiles.push(f);}i++;}}else{if(e.target.files===undefined){tfiles=e.target&&e.target.value?[{name:e.target.value.replace(/^.+\\/,'')}]:[];}else{tfiles=e.target.files;}}if(isEmpty(tfiles)||tfiles.length===0){if(!isAjaxUpload){self.clear();}self._showFolderError(folders);self._raise('fileselectnone');return;}self._resetErrors();len=tfiles.length;total=self._getFileCount(self.isUploadable?self.getFileStack().length+len:len);if(self.maxFileCount>0&&total>self.maxFileCount){if(!self.autoReplace||len>self.maxFileCount){n=self.autoReplace&&len>self.maxFileCount?len:total;msg=self.msgFilesTooMany.replace('{m}',self.maxFileCount).replace('{n}',n);self.isError=throwError(msg,null,null,null);self.$captionContainer.find('.kv-caption-icon').hide();self._setCaption('',true);self.$container.removeClass('file-input-new file-input-ajax-new');return;}if(total>self.maxFileCount){self._resetPreviewThumbs(isAjaxUpload);}}else{if(!isAjaxUpload||flagSingle){self._resetPreviewThumbs(false);if(flagSingle){self.clearStack();}}else{if(isAjaxUpload&&ctr===0&&(!previewCache.count(self.id)||self.overwriteInitial)){self._resetPreviewThumbs(true);}}}if(self.isPreviewable){self._readFiles(tfiles);}else{self._updateFileDetails(1);}self._showFolderError(folders);},_abort:function _abort(params){var self=this,data;if(self.ajaxAborted&&_typeof(self.ajaxAborted)==="object"&&self.ajaxAborted.message!==undefined){data=$.extend(true,{},self._getOutData(),params);data.abortData=self.ajaxAborted.data||{};data.abortMessage=self.ajaxAborted.message;self.cancel();self._setProgress(100,self.$progress,self.msgCancelled);self._showUploadError(self.ajaxAborted.message,data,'filecustomerror');return true;}return false;},_resetFileStack:function _resetFileStack(){var self=this,i=0,newstack=[],newnames=[];self._getThumbs().each(function(){var $thumb=$(this),ind=$thumb.attr('data-fileindex'),file=self.filestack[ind];if(ind===-1){return;}if(file!==undefined){newstack[i]=file;newnames[i]=self._getFileName(file);$thumb.attr({'id':self.previewInitId+'-'+i,'data-fileindex':i});i++;}else{$thumb.attr({'id':'uploaded-'+uniqId(),'data-fileindex':'-1'});}});self.filestack=newstack;self.filenames=newnames;},clearStack:function clearStack(){var self=this;self.filestack=[];self.filenames=[];return self.$element;},updateStack:function updateStack(i,file){var self=this;self.filestack[i]=file;self.filenames[i]=self._getFileName(file);return self.$element;},addToStack:function addToStack(file){var self=this;self.filestack.push(file);self.filenames.push(self._getFileName(file));return self.$element;},getFileStack:function getFileStack(skipNull){var self=this;return self.filestack.filter(function(n){return skipNull?n!==undefined:n!==undefined&&n!==null;});},lock:function lock(){var self=this;self._resetErrors();self.disable();if(self.showRemove){addCss(self.$container.find('.fileinput-remove'),'hide');}if(self.showCancel){self.$container.find('.fileinput-cancel').removeClass('hide');}self._raise('filelock',[self.filestack,self._getExtraData()]);return self.$element;},unlock:function unlock(reset){var self=this;if(reset===undefined){reset=true;}self.enable();if(self.showCancel){addCss(self.$container.find('.fileinput-cancel'),'hide');}if(self.showRemove){self.$container.find('.fileinput-remove').removeClass('hide');}if(reset){self._resetFileStack();}self._raise('fileunlock',[self.filestack,self._getExtraData()]);return self.$element;},cancel:function cancel(){var self=this,xhr=self.ajaxRequests,len=xhr.length,i;if(len>0){for(i=0;i<len;i+=1){self.cancelling=true;xhr[i].abort();}}self._setProgressCancelled();self._getThumbs().each(function(){var $thumb=$(this),ind=$thumb.attr('data-fileindex');$thumb.removeClass('file-uploading');if(self.filestack[ind]!==undefined){$thumb.find('.kv-file-upload').removeClass('disabled').removeAttr('disabled');$thumb.find('.kv-file-remove').removeClass('disabled').removeAttr('disabled');}self.unlock();});return self.$element;},clear:function clear(){var self=this,cap;self.$btnUpload.removeAttr('disabled');self._getThumbs().find('video,audio,img').each(function(){cleanMemory($(this));});self._resetUpload();self.clearStack();self._clearFileInput();self._resetErrors(true);self._raise('fileclear');if(self._hasInitialPreview()){self._showFileIcon();self._resetPreview();self._initPreviewActions();self.$container.removeClass('file-input-new');}else{self._getThumbs().each(function(){self._clearObjects($(this));});if(self.isUploadable){previewCache.data[self.id]={};}self.$preview.html('');cap=!self.overwriteInitial&&self.initialCaption.length>0?self.initialCaption:'';self._setCaption(cap);self.$caption.attr('title','');addCss(self.$container,'file-input-new');self._validateDefaultPreview();}if(self.$container.find('.file-preview-frame').length===0){if(!self._initCaption()){self.$captionContainer.find('.kv-caption-icon').hide();}}self._hideFileIcon();self._raise('filecleared');self.$captionContainer.focus();self._setFileDropZoneTitle();return self.$element;},reset:function reset(){var self=this;self._resetPreview();self.$container.find('.fileinput-filename').text('');self._raise('filereset');addCss(self.$container,'file-input-new');if(self.$preview.find('.file-preview-frame').length||self.isUploadable&&self.dropZoneEnabled){self.$container.removeClass('file-input-new');}self._setFileDropZoneTitle();self.clearStack();self.formdata={};return self.$element;},disable:function disable(){var self=this;self.isDisabled=true;self._raise('filedisabled');self.$element.attr('disabled','disabled');self.$container.find(".kv-fileinput-caption").addClass("file-caption-disabled");self.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").attr("disabled",true);self._initDragDrop();return self.$element;},enable:function enable(){var self=this;self.isDisabled=false;self._raise('fileenabled');self.$element.removeAttr('disabled');self.$container.find(".kv-fileinput-caption").removeClass("file-caption-disabled");self.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").removeAttr("disabled");self._initDragDrop();return self.$element;},upload:function upload(){var self=this,totLen=self.getFileStack().length,params={},i,outData,len,hasExtraData=!$.isEmptyObject(self._getExtraData());if(self.minFileCount>0&&self._getFileCount(totLen)<self.minFileCount){self._noFilesError(params);return;}if(!self.isUploadable||self.isDisabled||totLen===0&&!hasExtraData){return;}self._resetUpload();self.$progress.removeClass('hide');self.uploadCount=0;self.uploadStatus={};self.uploadLog=[];self.lock();self._setProgress(2);if(totLen===0&&hasExtraData){self._uploadExtraOnly();return;}len=self.filestack.length;self.hasInitData=false;if(self.uploadAsync){outData=self._getOutData();self._raise('filebatchpreupload',[outData]);self.fileBatchCompleted=false;self.uploadCache={content:[],config:[],tags:[],append:true};self.uploadAsyncCount=self.getFileStack().length;for(i=0;i<len;i++){self.uploadCache.content[i]=null;self.uploadCache.config[i]=null;self.uploadCache.tags[i]=null;}for(i=0;i<len;i++){if(self.filestack[i]!==undefined){self._uploadSingle(i,self.filestack,true);}}return;}self._uploadBatch();return self.$element;},destroy:function destroy(){var self=this,$cont=self.$container;$cont.find('.file-drop-zone').off();self.$element.insertBefore($cont).off(NAMESPACE).removeData();$cont.off().remove();return self.$element;},refresh:function refresh(options){var self=this,$el=self.$element;options=options?$.extend(true,{},self.options,options):self.options;self.destroy();$el.fileinput(options);if($el.val()){$el.trigger('change.fileinput');}return $el;}};$.fn.fileinput=function(option){if(!hasFileAPISupport()&&!isIE(9)){return;}var args=Array.apply(null,arguments),retvals=[];args.shift();this.each(function(){var self=$(this),data=self.data('fileinput'),options=(typeof option==='undefined'?'undefined':_typeof(option))==='object'&&option,theme=options.theme||self.data('theme'),l={},t={},lang=options.language||self.data('language')||'en',opts;if(!data){if(theme){t=$.fn.fileinputThemes[theme]||{};}if(lang!=='en'&&!isEmpty($.fn.fileinputLocales[lang])){l=$.fn.fileinputLocales[lang]||{};}opts=$.extend(true,{},$.fn.fileinput.defaults,t,$.fn.fileinputLocales.en,l,options,self.data());data=new FileInput(this,opts);self.data('fileinput',data);}if(typeof option==='string'){retvals.push(data[option].apply(data,args));}});switch(retvals.length){case 0:return this;case 1:return retvals[0];default:return retvals;}};$.fn.fileinput.defaults={language:'en',showCaption:true,showBrowse:true,showPreview:true,showRemove:true,showUpload:true,showCancel:true,showClose:true,showUploadedThumbs:true,browseOnZoneClick:false,autoReplace:false,previewClass:'',captionClass:'',mainClass:'file-caption-main',mainTemplate:null,purifyHtml:true,fileSizeGetter:null,initialCaption:'',initialPreview:[],initialPreviewDelimiter:'*$$*',initialPreviewAsData:false,initialPreviewFileType:'image',initialPreviewConfig:[],initialPreviewThumbTags:[],previewThumbTags:{},initialPreviewShowDelete:true,removeFromPreviewOnError:false,deleteUrl:'',deleteExtraData:{},overwriteInitial:true,layoutTemplates:defaultLayoutTemplates,previewTemplates:defaultPreviewTemplates,previewZoomSettings:defaultPreviewZoomSettings,previewZoomButtonIcons:{prev:'<i class="glyphicon glyphicon-triangle-left"></i>',next:'<i class="glyphicon glyphicon-triangle-right"></i>',toggleheader:'<i class="glyphicon glyphicon-resize-vertical"></i>',fullscreen:'<i class="glyphicon glyphicon-fullscreen"></i>',borderless:'<i class="glyphicon glyphicon-resize-full"></i>',close:'<i class="glyphicon glyphicon-remove"></i>'},previewZoomButtonClasses:{prev:'btn btn-navigate',next:'btn btn-navigate',toggleheader:'btn btn-default btn-header-toggle',fullscreen:'btn btn-default',borderless:'btn btn-default',close:'btn btn-default'},allowedPreviewTypes:defaultPreviewTypes,allowedPreviewMimeTypes:null,allowedFileTypes:null,allowedFileExtensions:null,defaultPreviewContent:null,customLayoutTags:{},customPreviewTags:{},previewSettings:defaultPreviewSettings,fileTypeSettings:defaultFileTypeSettings,previewFileIcon:'<i class="glyphicon glyphicon-file"></i>',previewFileIconClass:'file-other-icon',previewFileIconSettings:{},previewFileExtSettings:{},buttonLabelClass:'hidden-xs',browseIcon:'<i class="glyphicon glyphicon-folder-open"></i>&nbsp;',browseClass:'btn btn-primary',removeIcon:'<i class="glyphicon glyphicon-trash"></i>',removeClass:'btn btn-default',cancelIcon:'<i class="glyphicon glyphicon-ban-circle"></i>',cancelClass:'btn btn-default',uploadIcon:'<i class="glyphicon glyphicon-upload"></i>',uploadClass:'btn btn-default',uploadUrl:null,uploadAsync:true,uploadExtraData:{},zoomModalHeight:480,minImageWidth:null,minImageHeight:null,maxImageWidth:null,maxImageHeight:null,resizeImage:false,resizePreference:'width',resizeQuality:0.92,resizeDefaultImageType:'image/jpeg',maxFileSize:0,maxFilePreviewSize:25600,// 25 MB
	minFileCount:0,maxFileCount:0,validateInitialCount:false,msgValidationErrorClass:'text-danger',msgValidationErrorIcon:'<i class="glyphicon glyphicon-exclamation-sign"></i> ',msgErrorClass:'file-error-message',progressThumbClass:"progress-bar progress-bar-success progress-bar-striped active",progressClass:"progress-bar progress-bar-success progress-bar-striped active",progressCompleteClass:"progress-bar progress-bar-success",progressErrorClass:"progress-bar progress-bar-danger",previewFileType:'image',elCaptionContainer:null,elCaptionText:null,elPreviewContainer:null,elPreviewImage:null,elPreviewStatus:null,elErrorContainer:null,errorCloseButton:'<span class="close kv-error-close">&times;</span>',slugCallback:null,dropZoneEnabled:true,dropZoneTitleClass:'file-drop-zone-title',fileActionSettings:{},otherActionButtons:'',textEncoding:'UTF-8',ajaxSettings:{},ajaxDeleteSettings:{},showAjaxErrorDetails:true};$.fn.fileinputLocales.en={fileSingle:'file',filePlural:'files',browseLabel:'Browse &hellip;',removeLabel:'Remove',removeTitle:'Clear selected files',cancelLabel:'Cancel',cancelTitle:'Abort ongoing upload',uploadLabel:'Upload',uploadTitle:'Upload selected files',msgNo:'No',msgNoFilesSelected:'No files selected',msgCancelled:'Cancelled',msgZoomModalHeading:'Detailed Preview',msgSizeTooLarge:'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',msgFilesTooLess:'You must select at least <b>{n}</b> {files} to upload.',msgFilesTooMany:'Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.',msgFileNotFound:'File "{name}" not found!',msgFileSecured:'Security restrictions prevent reading the file "{name}".',msgFileNotReadable:'File "{name}" is not readable.',msgFilePreviewAborted:'File preview aborted for "{name}".',msgFilePreviewError:'An error occurred while reading the file "{name}".',msgInvalidFileType:'Invalid type for file "{name}". Only "{types}" files are supported.',msgInvalidFileExtension:'Invalid extension for file "{name}". Only "{extensions}" files are supported.',msgUploadAborted:'The file upload was aborted',msgValidationError:'Validation Error',msgLoading:'Loading file {index} of {files} &hellip;',msgProgress:'Loading file {index} of {files} - {name} - {percent}% completed.',msgSelected:'{n} {files} selected',msgFoldersNotAllowed:'Drag & drop files only! {n} folder(s) dropped were skipped.',msgImageWidthSmall:'Width of image file "{name}" must be at least {size} px.',msgImageHeightSmall:'Height of image file "{name}" must be at least {size} px.',msgImageWidthLarge:'Width of image file "{name}" cannot exceed {size} px.',msgImageHeightLarge:'Height of image file "{name}" cannot exceed {size} px.',msgImageResizeError:'Could not get the image dimensions to resize.',msgImageResizeException:'Error while resizing the image.<pre>{errors}</pre>',dropZoneTitle:'Drag & drop files here &hellip;',dropZoneClickTitle:'<br>(or click to select {files})',previewZoomButtonTitles:{prev:'View previous file',next:'View next file',toggleheader:'Toggle header',fullscreen:'Toggle full screen',borderless:'Toggle borderless mode',close:'Close detailed preview'}};$.fn.fileinput.Constructor=FileInput;/**
	     * Convert automatically file inputs with class 'file' into a bootstrap fileinput control.
	     */$(document).ready(function(){var $input=$('input.file[type=file]');if($input.length){$input.fileinput();}});});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(17);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

	  return "  <tr>\n    <td><h4>"
	    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
	    + "</h4></td>\n    <td><h4 style=\"color:#000\">"
	    + alias4(((helper = (helper = helpers.submissionCount || (depth0 != null ? depth0.submissionCount : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"submissionCount","hash":{},"data":data}) : helper)))
	    + "</h4></td>\n    <td><h4>"
	    + alias4(((helper = (helper = helpers.language || (depth0 != null ? depth0.language : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"language","hash":{},"data":data}) : helper)))
	    + "</h4></td>\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.currentUserOwned : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(4, data, 0),"data":data})) != null ? stack1 : "")
	    + "    <td style=\"padding-top: 2%\" data-id="
	    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
	    + " name="
	    + alias4(((helper = (helper = helpers._owner || (depth0 != null ? depth0._owner : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_owner","hash":{},"data":data}) : helper)))
	    + ">\n      <span style=\"color:black\" class=\"glyphicon glyphicon-folder-open select-challenge\"></span>\n    </td>\n  </tr>\n";
	},"2":function(container,depth0,helpers,partials,data) {
	    var helper;

	  return "      <td id=\"select-challenge\">\n        <h5><span style=\"color:#777\" class=\"glyphicon glyphicon-user\"></span> You</h5>\n      </td>\n      <td style=\"padding-top: 2%\">\n        <span style=\"color:black\"  data-id="
	    + container.escapeExpression(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"_id","hash":{},"data":data}) : helper)))
	    + " class=\"glyphicon glyphicon-trash delete-challenge\"></span>\n      </td>\n";
	},"4":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

	  return "    <td id=\"select-challenge\" style=\"padding-top: 2%; color:#000\">\n      <span style=\"color:#777\" class=\"glyphicon glyphicon-user\"></span> "
	    + alias4(((helper = (helper = helpers.ownerName || (depth0 != null ? depth0.ownerName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ownerName","hash":{},"data":data}) : helper)))
	    + "\n    </td>\n      <td style=\"padding-top: 2%\" data-id="
	    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
	    + " disabled>\n        <span style=\"color:black; opacity:.2\" class=\"glyphicon glyphicon-trash\"></span>\n      </td>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1;

	  return "<div class=\"all-challenges\">\n<div class=\"content\">\n  <br />\n<div class=\"col-sm-12\">\n<h1 style=\"font-weight:300; color:#777; margin-top: 25px;\">Code Challenge Folders</h1>\n<div class=\"btn-group\" style=\"float:left; text-align:center; margin-bottom: 15px\">\n<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n  Choose A Language <span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu\">\n  <li><a href=\"#\">Javascript</a></li>\n  <li role=\"separator\" class=\"divider\"></li>\n  <li><h5 style=\"color:#777; font-weight:300; text-align:center\">Python</h5></li>\n  <li role=\"separator\" class=\"divider\"></li>\n  <li><h5 style=\"color:#777; font-weight:300; text-align:center\">Ruby</h5></li>\n</ul>\n</div>\n<div class=\"btn-group\" style=\"float:right; text-align:center; margin-bottom: 15px\">\n<button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n  Select Challenges <span class=\"caret\"></span>\n</button>\n<ul class=\"dropdown-menu\">\n  <li><a href=\"#\" id=\"view-my-challenges\">My Challenges</a></li>\n  <li role=\"separator\" class=\"divider\"></li>\n  <li><a href=\"#\" id=\"view-all-challenges\">All Challenges</a></li>\n</ul>\n</div>\n<!-- <button id=\"view-my-challenges\" class=\"btn btn-default\" style=\"float:right; text-align:center; margin-bottom: 15px\"><span class=\"glyphicon glyphicon-folder-open\"></span>&nbsp; My Challenges</button> -->\n\n<table class=\"table table-hover\" id=\"item-table\">\n  <tr>\n    <td><h4 style=\"color:#000; text-decoration: underline\">Challenge Name</h4></td>\n    <td><h4 style=\"color:#000; text-decoration: underline\">Submissions</h4></td>\n    <td><h4 style=\"color:#000; text-decoration: underline\">Language</h4></td>\n    <td><h4 style=\"color:#000; text-decoration: underline\">Created By</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Delete</h4></td>\n    <td><h4 style=\"color:#000; text-decoration: underline\">Open</h4></td>\n  </tr>\n  <tbody>\n"
	    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.challenges : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "</tbody>\n</table>\n</div>\n</div>\n</div>\n";
	},"useData":true});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	// Create a simple path alias to allow browserify to resolve
	// the runtime on a supported path.
	module.exports = __webpack_require__(18)['default'];


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	// istanbul ignore next

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _handlebarsBase = __webpack_require__(19);

	var base = _interopRequireWildcard(_handlebarsBase);

	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)

	var _handlebarsSafeString = __webpack_require__(33);

	var _handlebarsSafeString2 = _interopRequireDefault(_handlebarsSafeString);

	var _handlebarsException = __webpack_require__(21);

	var _handlebarsException2 = _interopRequireDefault(_handlebarsException);

	var _handlebarsUtils = __webpack_require__(20);

	var Utils = _interopRequireWildcard(_handlebarsUtils);

	var _handlebarsRuntime = __webpack_require__(34);

	var runtime = _interopRequireWildcard(_handlebarsRuntime);

	var _handlebarsNoConflict = __webpack_require__(35);

	var _handlebarsNoConflict2 = _interopRequireDefault(_handlebarsNoConflict);

	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();

	  Utils.extend(hb, base);
	  hb.SafeString = _handlebarsSafeString2['default'];
	  hb.Exception = _handlebarsException2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;

	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };

	  return hb;
	}

	var inst = create();
	inst.create = create;

	_handlebarsNoConflict2['default'](inst);

	inst['default'] = inst;

	exports['default'] = inst;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9oYW5kbGViYXJzLnJ1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OEJBQXNCLG1CQUFtQjs7SUFBN0IsSUFBSTs7Ozs7b0NBSU8sMEJBQTBCOzs7O21DQUMzQix3QkFBd0I7Ozs7K0JBQ3ZCLG9CQUFvQjs7SUFBL0IsS0FBSzs7aUNBQ1Esc0JBQXNCOztJQUFuQyxPQUFPOztvQ0FFSSwwQkFBMEI7Ozs7O0FBR2pELFNBQVMsTUFBTSxHQUFHO0FBQ2hCLE1BQUksRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7O0FBRTFDLE9BQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLElBQUUsQ0FBQyxVQUFVLG9DQUFhLENBQUM7QUFDM0IsSUFBRSxDQUFDLFNBQVMsbUNBQVksQ0FBQztBQUN6QixJQUFFLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNqQixJQUFFLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLGdCQUFnQixDQUFDOztBQUU3QyxJQUFFLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNoQixJQUFFLENBQUMsUUFBUSxHQUFHLFVBQVMsSUFBSSxFQUFFO0FBQzNCLFdBQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7R0FDbkMsQ0FBQzs7QUFFRixTQUFPLEVBQUUsQ0FBQztDQUNYOztBQUVELElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOztBQUVyQixrQ0FBVyxJQUFJLENBQUMsQ0FBQzs7QUFFakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksQ0FBQzs7cUJBRVIsSUFBSSIsImZpbGUiOiJoYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBiYXNlIGZyb20gJy4vaGFuZGxlYmFycy9iYXNlJztcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcbmltcG9ydCBTYWZlU3RyaW5nIGZyb20gJy4vaGFuZGxlYmFycy9zYWZlLXN0cmluZyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vaGFuZGxlYmFycy9leGNlcHRpb24nO1xuaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi9oYW5kbGViYXJzL3V0aWxzJztcbmltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnLi9oYW5kbGViYXJzL3J1bnRpbWUnO1xuXG5pbXBvcnQgbm9Db25mbGljdCBmcm9tICcuL2hhbmRsZWJhcnMvbm8tY29uZmxpY3QnO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgbGV0IGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IFNhZmVTdHJpbmc7XG4gIGhiLkV4Y2VwdGlvbiA9IEV4Y2VwdGlvbjtcbiAgaGIuVXRpbHMgPSBVdGlscztcbiAgaGIuZXNjYXBlRXhwcmVzc2lvbiA9IFV0aWxzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgaGIuVk0gPSBydW50aW1lO1xuICBoYi50ZW1wbGF0ZSA9IGZ1bmN0aW9uKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG5sZXQgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbm5vQ29uZmxpY3QoaW5zdCk7XG5cbmluc3RbJ2RlZmF1bHQnXSA9IGluc3Q7XG5cbmV4cG9ydCBkZWZhdWx0IGluc3Q7XG4iXX0=


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(20);

	var _exception = __webpack_require__(21);

	var _exception2 = _interopRequireDefault(_exception);

	var _helpers = __webpack_require__(22);

	var _decorators = __webpack_require__(30);

	var _logger = __webpack_require__(32);

	var _logger2 = _interopRequireDefault(_logger);

	var VERSION = '4.0.5';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 7;

	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1',
	  7: '>= 4.0.0'
	};

	exports.REVISION_CHANGES = REVISION_CHANGES;
	var objectType = '[object Object]';

	function HandlebarsEnvironment(helpers, partials, decorators) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	  this.decorators = decorators || {};

	  _helpers.registerDefaultHelpers(this);
	  _decorators.registerDefaultDecorators(this);
	}

	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,

	  logger: _logger2['default'],
	  log: _logger2['default'].log,

	  registerHelper: function registerHelper(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple helpers');
	      }
	      _utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },

	  registerPartial: function registerPartial(name, partial) {
	    if (_utils.toString.call(name) === objectType) {
	      _utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _exception2['default']('Attempting to register a partial called "' + name + '" as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  },

	  registerDecorator: function registerDecorator(name, fn) {
	    if (_utils.toString.call(name) === objectType) {
	      if (fn) {
	        throw new _exception2['default']('Arg not supported with multiple decorators');
	      }
	      _utils.extend(this.decorators, name);
	    } else {
	      this.decorators[name] = fn;
	    }
	  },
	  unregisterDecorator: function unregisterDecorator(name) {
	    delete this.decorators[name];
	  }
	};

	var log = _logger2['default'].log;

	exports.log = log;
	exports.createFrame = _utils.createFrame;
	exports.logger = _logger2['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2Jhc2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7cUJBQTRDLFNBQVM7O3lCQUMvQixhQUFhOzs7O3VCQUNFLFdBQVc7OzBCQUNSLGNBQWM7O3NCQUNuQyxVQUFVOzs7O0FBRXRCLElBQU0sT0FBTyxHQUFHLE9BQU8sQ0FBQzs7QUFDeEIsSUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUM7OztBQUU1QixJQUFNLGdCQUFnQixHQUFHO0FBQzlCLEdBQUMsRUFBRSxhQUFhO0FBQ2hCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxlQUFlO0FBQ2xCLEdBQUMsRUFBRSxVQUFVO0FBQ2IsR0FBQyxFQUFFLGtCQUFrQjtBQUNyQixHQUFDLEVBQUUsaUJBQWlCO0FBQ3BCLEdBQUMsRUFBRSxVQUFVO0NBQ2QsQ0FBQzs7O0FBRUYsSUFBTSxVQUFVLEdBQUcsaUJBQWlCLENBQUM7O0FBRTlCLFNBQVMscUJBQXFCLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDbkUsTUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQzdCLE1BQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxJQUFJLEVBQUUsQ0FBQztBQUMvQixNQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsSUFBSSxFQUFFLENBQUM7O0FBRW5DLGtDQUF1QixJQUFJLENBQUMsQ0FBQztBQUM3Qix3Q0FBMEIsSUFBSSxDQUFDLENBQUM7Q0FDakM7O0FBRUQscUJBQXFCLENBQUMsU0FBUyxHQUFHO0FBQ2hDLGFBQVcsRUFBRSxxQkFBcUI7O0FBRWxDLFFBQU0scUJBQVE7QUFDZCxLQUFHLEVBQUUsb0JBQU8sR0FBRzs7QUFFZixnQkFBYyxFQUFFLHdCQUFTLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDakMsUUFBSSxnQkFBUyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3RDLFVBQUksRUFBRSxFQUFFO0FBQUUsY0FBTSwyQkFBYyx5Q0FBeUMsQ0FBQyxDQUFDO09BQUU7QUFDM0Usb0JBQU8sSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUM1QixNQUFNO0FBQ0wsVUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7S0FDekI7R0FDRjtBQUNELGtCQUFnQixFQUFFLDBCQUFTLElBQUksRUFBRTtBQUMvQixXQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDM0I7O0FBRUQsaUJBQWUsRUFBRSx5QkFBUyxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3ZDLFFBQUksZ0JBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUN0QyxvQkFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzdCLE1BQU07QUFDTCxVQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtBQUNsQyxjQUFNLHlFQUEwRCxJQUFJLG9CQUFpQixDQUFDO09BQ3ZGO0FBQ0QsVUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFPLENBQUM7S0FDL0I7R0FDRjtBQUNELG1CQUFpQixFQUFFLDJCQUFTLElBQUksRUFBRTtBQUNoQyxXQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDNUI7O0FBRUQsbUJBQWlCLEVBQUUsMkJBQVMsSUFBSSxFQUFFLEVBQUUsRUFBRTtBQUNwQyxRQUFJLGdCQUFTLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdEMsVUFBSSxFQUFFLEVBQUU7QUFBRSxjQUFNLDJCQUFjLDRDQUE0QyxDQUFDLENBQUM7T0FBRTtBQUM5RSxvQkFBTyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQy9CLE1BQU07QUFDTCxVQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztLQUM1QjtHQUNGO0FBQ0QscUJBQW1CLEVBQUUsNkJBQVMsSUFBSSxFQUFFO0FBQ2xDLFdBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUM5QjtDQUNGLENBQUM7O0FBRUssSUFBSSxHQUFHLEdBQUcsb0JBQU8sR0FBRyxDQUFDOzs7UUFFcEIsV0FBVztRQUFFLE1BQU0iLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRnJhbWUsIGV4dGVuZCwgdG9TdHJpbmd9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuL2V4Y2VwdGlvbic7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdEhlbHBlcnN9IGZyb20gJy4vaGVscGVycyc7XG5pbXBvcnQge3JlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnN9IGZyb20gJy4vZGVjb3JhdG9ycyc7XG5pbXBvcnQgbG9nZ2VyIGZyb20gJy4vbG9nZ2VyJztcblxuZXhwb3J0IGNvbnN0IFZFUlNJT04gPSAnNC4wLjUnO1xuZXhwb3J0IGNvbnN0IENPTVBJTEVSX1JFVklTSU9OID0gNztcblxuZXhwb3J0IGNvbnN0IFJFVklTSU9OX0NIQU5HRVMgPSB7XG4gIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG4gIDI6ICc9PSAxLjAuMC1yYy4zJyxcbiAgMzogJz09IDEuMC4wLXJjLjQnLFxuICA0OiAnPT0gMS54LngnLFxuICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG4gIDY6ICc+PSAyLjAuMC1iZXRhLjEnLFxuICA3OiAnPj0gNC4wLjAnXG59O1xuXG5jb25zdCBvYmplY3RUeXBlID0gJ1tvYmplY3QgT2JqZWN0XSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMsIGRlY29yYXRvcnMpIHtcbiAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcbiAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuICB0aGlzLmRlY29yYXRvcnMgPSBkZWNvcmF0b3JzIHx8IHt9O1xuXG4gIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnModGhpcyk7XG4gIHJlZ2lzdGVyRGVmYXVsdERlY29yYXRvcnModGhpcyk7XG59XG5cbkhhbmRsZWJhcnNFbnZpcm9ubWVudC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cbiAgbG9nZ2VyOiBsb2dnZXIsXG4gIGxvZzogbG9nZ2VyLmxvZyxcblxuICByZWdpc3RlckhlbHBlcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7IHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgaGVscGVycycpOyB9XG4gICAgICBleHRlbmQodGhpcy5oZWxwZXJzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oZWxwZXJzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuaGVscGVyc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUsIHBhcnRpYWwpIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgZXh0ZW5kKHRoaXMucGFydGlhbHMsIG5hbWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodHlwZW9mIHBhcnRpYWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oYEF0dGVtcHRpbmcgdG8gcmVnaXN0ZXIgYSBwYXJ0aWFsIGNhbGxlZCBcIiR7bmFtZX1cIiBhcyB1bmRlZmluZWRgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFydGlhbHNbbmFtZV0gPSBwYXJ0aWFsO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBkZWxldGUgdGhpcy5wYXJ0aWFsc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlckRlY29yYXRvcjogZnVuY3Rpb24obmFtZSwgZm4pIHtcbiAgICBpZiAodG9TdHJpbmcuY2FsbChuYW1lKSA9PT0gb2JqZWN0VHlwZSkge1xuICAgICAgaWYgKGZuKSB7IHRocm93IG5ldyBFeGNlcHRpb24oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgZGVjb3JhdG9ycycpOyB9XG4gICAgICBleHRlbmQodGhpcy5kZWNvcmF0b3JzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kZWNvcmF0b3JzW25hbWVdID0gZm47XG4gICAgfVxuICB9LFxuICB1bnJlZ2lzdGVyRGVjb3JhdG9yOiBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuZGVjb3JhdG9yc1tuYW1lXTtcbiAgfVxufTtcblxuZXhwb3J0IGxldCBsb2cgPSBsb2dnZXIubG9nO1xuXG5leHBvcnQge2NyZWF0ZUZyYW1lLCBsb2dnZXJ9O1xuIl19


/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports.extend = extend;
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.createFrame = createFrame;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  "'": '&#x27;',
	  '`': '&#x60;',
	  '=': '&#x3D;'
	};

	var badChars = /[&<>"'`=]/g,
	    possible = /[&<>"'`=]/;

	function escapeChar(chr) {
	  return escape[chr];
	}

	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }

	  return obj;
	}

	var toString = Object.prototype.toString;

	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/* eslint-disable func-style */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	exports.isFunction = isFunction;

	/* eslint-enable func-style */

	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};

	exports.isArray = isArray;
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.

	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}

	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }

	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }

	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}

	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}

	function createFrame(object) {
	  var frame = extend({}, object);
	  frame._parent = object;
	  return frame;
	}

	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}

	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE1BQU0sR0FBRztBQUNiLEtBQUcsRUFBRSxPQUFPO0FBQ1osS0FBRyxFQUFFLE1BQU07QUFDWCxLQUFHLEVBQUUsTUFBTTtBQUNYLEtBQUcsRUFBRSxRQUFRO0FBQ2IsS0FBRyxFQUFFLFFBQVE7QUFDYixLQUFHLEVBQUUsUUFBUTtBQUNiLEtBQUcsRUFBRSxRQUFRO0NBQ2QsQ0FBQzs7QUFFRixJQUFNLFFBQVEsR0FBRyxZQUFZO0lBQ3ZCLFFBQVEsR0FBRyxXQUFXLENBQUM7O0FBRTdCLFNBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN2QixTQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNwQjs7QUFFTSxTQUFTLE1BQU0sQ0FBQyxHQUFHLG9CQUFtQjtBQUMzQyxPQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN6QyxTQUFLLElBQUksR0FBRyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUM1QixVQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUU7QUFDM0QsV0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUM5QjtLQUNGO0dBQ0Y7O0FBRUQsU0FBTyxHQUFHLENBQUM7Q0FDWjs7QUFFTSxJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQzs7Ozs7O0FBS2hELElBQUksVUFBVSxHQUFHLG9CQUFTLEtBQUssRUFBRTtBQUMvQixTQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsQ0FBQztDQUNwQyxDQUFDOzs7QUFHRixJQUFJLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRTtBQUNuQixVQUlNLFVBQVUsR0FKaEIsVUFBVSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzNCLFdBQU8sT0FBTyxLQUFLLEtBQUssVUFBVSxJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssbUJBQW1CLENBQUM7R0FDcEYsQ0FBQztDQUNIO1FBQ08sVUFBVSxHQUFWLFVBQVU7Ozs7O0FBSVgsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLE9BQU8sSUFBSSxVQUFTLEtBQUssRUFBRTtBQUN0RCxTQUFPLEFBQUMsS0FBSyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsR0FBSSxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLGdCQUFnQixHQUFHLEtBQUssQ0FBQztDQUNqRyxDQUFDOzs7OztBQUdLLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUU7QUFDcEMsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNoRCxRQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUU7QUFDdEIsYUFBTyxDQUFDLENBQUM7S0FDVjtHQUNGO0FBQ0QsU0FBTyxDQUFDLENBQUMsQ0FBQztDQUNYOztBQUdNLFNBQVMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFO0FBQ3ZDLE1BQUksT0FBTyxNQUFNLEtBQUssUUFBUSxFQUFFOztBQUU5QixRQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQzNCLGFBQU8sTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ3hCLE1BQU0sSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ3pCLGFBQU8sRUFBRSxDQUFDO0tBQ1gsTUFBTSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGFBQU8sTUFBTSxHQUFHLEVBQUUsQ0FBQztLQUNwQjs7Ozs7QUFLRCxVQUFNLEdBQUcsRUFBRSxHQUFHLE1BQU0sQ0FBQztHQUN0Qjs7QUFFRCxNQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUFFLFdBQU8sTUFBTSxDQUFDO0dBQUU7QUFDOUMsU0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztDQUM3Qzs7QUFFTSxTQUFTLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDN0IsTUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO0FBQ3pCLFdBQU8sSUFBSSxDQUFDO0dBQ2IsTUFBTSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUMvQyxXQUFPLElBQUksQ0FBQztHQUNiLE1BQU07QUFDTCxXQUFPLEtBQUssQ0FBQztHQUNkO0NBQ0Y7O0FBRU0sU0FBUyxXQUFXLENBQUMsTUFBTSxFQUFFO0FBQ2xDLE1BQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDL0IsT0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDdkIsU0FBTyxLQUFLLENBQUM7Q0FDZDs7QUFFTSxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFO0FBQ3ZDLFFBQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ2xCLFNBQU8sTUFBTSxDQUFDO0NBQ2Y7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFO0FBQ2pELFNBQU8sQ0FBQyxXQUFXLEdBQUcsV0FBVyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUEsR0FBSSxFQUFFLENBQUM7Q0FDcEQiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBlc2NhcGUgPSB7XG4gICcmJzogJyZhbXA7JyxcbiAgJzwnOiAnJmx0OycsXG4gICc+JzogJyZndDsnLFxuICAnXCInOiAnJnF1b3Q7JyxcbiAgXCInXCI6ICcmI3gyNzsnLFxuICAnYCc6ICcmI3g2MDsnLFxuICAnPSc6ICcmI3gzRDsnXG59O1xuXG5jb25zdCBiYWRDaGFycyA9IC9bJjw+XCInYD1dL2csXG4gICAgICBwb3NzaWJsZSA9IC9bJjw+XCInYD1dLztcblxuZnVuY3Rpb24gZXNjYXBlQ2hhcihjaHIpIHtcbiAgcmV0dXJuIGVzY2FwZVtjaHJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXh0ZW5kKG9iai8qICwgLi4uc291cmNlICovKSB7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3VtZW50c1tpXSkge1xuICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhcmd1bWVudHNbaV0sIGtleSkpIHtcbiAgICAgICAgb2JqW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5leHBvcnQgbGV0IHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuLy8gU291cmNlZCBmcm9tIGxvZGFzaFxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Jlc3RpZWpzL2xvZGFzaC9ibG9iL21hc3Rlci9MSUNFTlNFLnR4dFxuLyogZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSAqL1xubGV0IGlzRnVuY3Rpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufTtcbi8vIGZhbGxiYWNrIGZvciBvbGRlciB2ZXJzaW9ucyBvZiBDaHJvbWUgYW5kIFNhZmFyaVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmlmIChpc0Z1bmN0aW9uKC94LykpIHtcbiAgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbiAgfTtcbn1cbmV4cG9ydCB7aXNGdW5jdGlvbn07XG4vKiBlc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUgKi9cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gKHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpID8gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IEFycmF5XScgOiBmYWxzZTtcbn07XG5cbi8vIE9sZGVyIElFIHZlcnNpb25zIGRvIG5vdCBkaXJlY3RseSBzdXBwb3J0IGluZGV4T2Ygc28gd2UgbXVzdCBpbXBsZW1lbnQgb3VyIG93biwgc2FkbHkuXG5leHBvcnQgZnVuY3Rpb24gaW5kZXhPZihhcnJheSwgdmFsdWUpIHtcbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgaWYgKGFycmF5W2ldID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG4gIHJldHVybiAtMTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gZXNjYXBlRXhwcmVzc2lvbihzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgZXNjYXBlIFNhZmVTdHJpbmdzLCBzaW5jZSB0aGV5J3JlIGFscmVhZHkgc2FmZVxuICAgIGlmIChzdHJpbmcgJiYgc3RyaW5nLnRvSFRNTCkge1xuICAgICAgcmV0dXJuIHN0cmluZy50b0hUTUwoKTtcbiAgICB9IGVsc2UgaWYgKHN0cmluZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfSBlbHNlIGlmICghc3RyaW5nKSB7XG4gICAgICByZXR1cm4gc3RyaW5nICsgJyc7XG4gICAgfVxuXG4gICAgLy8gRm9yY2UgYSBzdHJpbmcgY29udmVyc2lvbiBhcyB0aGlzIHdpbGwgYmUgZG9uZSBieSB0aGUgYXBwZW5kIHJlZ2FyZGxlc3MgYW5kXG4gICAgLy8gdGhlIHJlZ2V4IHRlc3Qgd2lsbCBkbyB0aGlzIHRyYW5zcGFyZW50bHkgYmVoaW5kIHRoZSBzY2VuZXMsIGNhdXNpbmcgaXNzdWVzIGlmXG4gICAgLy8gYW4gb2JqZWN0J3MgdG8gc3RyaW5nIGhhcyBlc2NhcGVkIGNoYXJhY3RlcnMgaW4gaXQuXG4gICAgc3RyaW5nID0gJycgKyBzdHJpbmc7XG4gIH1cblxuICBpZiAoIXBvc3NpYmxlLnRlc3Qoc3RyaW5nKSkgeyByZXR1cm4gc3RyaW5nOyB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gIGlmICghdmFsdWUgJiYgdmFsdWUgIT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZyYW1lKG9iamVjdCkge1xuICBsZXQgZnJhbWUgPSBleHRlbmQoe30sIG9iamVjdCk7XG4gIGZyYW1lLl9wYXJlbnQgPSBvYmplY3Q7XG4gIHJldHVybiBmcmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJsb2NrUGFyYW1zKHBhcmFtcywgaWRzKSB7XG4gIHBhcmFtcy5wYXRoID0gaWRzO1xuICByZXR1cm4gcGFyYW1zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XG4gIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xufVxuIl19


/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;

	    message += ' - ' + line + ':' + column;
	  }

	  var tmp = Error.prototype.constructor.call(this, message);

	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }

	  /* istanbul ignore else */
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }

	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}

	Exception.prototype = new Error();

	exports['default'] = Exception;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsSUFBTSxVQUFVLEdBQUcsQ0FBQyxhQUFhLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFbkcsU0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUNoQyxNQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7TUFDdEIsSUFBSSxZQUFBO01BQ0osTUFBTSxZQUFBLENBQUM7QUFDWCxNQUFJLEdBQUcsRUFBRTtBQUNQLFFBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQztBQUN0QixVQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7O0FBRTFCLFdBQU8sSUFBSSxLQUFLLEdBQUcsSUFBSSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUM7R0FDeEM7O0FBRUQsTUFBSSxHQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQzs7O0FBRzFELE9BQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ2hELFFBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7R0FDOUM7OztBQUdELE1BQUksS0FBSyxDQUFDLGlCQUFpQixFQUFFO0FBQzNCLFNBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7R0FDMUM7O0FBRUQsTUFBSSxHQUFHLEVBQUU7QUFDUCxRQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztBQUN2QixRQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztHQUN0QjtDQUNGOztBQUVELFNBQVMsQ0FBQyxTQUFTLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQzs7cUJBRW5CLFNBQVMiLCJmaWxlIjoiZXhjZXB0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5jb25zdCBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcbiAgbGV0IGxvYyA9IG5vZGUgJiYgbm9kZS5sb2MsXG4gICAgICBsaW5lLFxuICAgICAgY29sdW1uO1xuICBpZiAobG9jKSB7XG4gICAgbGluZSA9IGxvYy5zdGFydC5saW5lO1xuICAgIGNvbHVtbiA9IGxvYy5zdGFydC5jb2x1bW47XG5cbiAgICBtZXNzYWdlICs9ICcgLSAnICsgbGluZSArICc6JyArIGNvbHVtbjtcbiAgfVxuXG4gIGxldCB0bXAgPSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuICAvLyBVbmZvcnR1bmF0ZWx5IGVycm9ycyBhcmUgbm90IGVudW1lcmFibGUgaW4gQ2hyb21lIChhdCBsZWFzdCksIHNvIGBmb3IgcHJvcCBpbiB0bXBgIGRvZXNuJ3Qgd29yay5cbiAgZm9yIChsZXQgaWR4ID0gMDsgaWR4IDwgZXJyb3JQcm9wcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdGhpc1tlcnJvclByb3BzW2lkeF1dID0gdG1wW2Vycm9yUHJvcHNbaWR4XV07XG4gIH1cblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFeGNlcHRpb24pO1xuICB9XG5cbiAgaWYgKGxvYykge1xuICAgIHRoaXMubGluZU51bWJlciA9IGxpbmU7XG4gICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gIH1cbn1cblxuRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5leHBvcnQgZGVmYXVsdCBFeGNlcHRpb247XG4iXX0=


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.registerDefaultHelpers = registerDefaultHelpers;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _helpersBlockHelperMissing = __webpack_require__(23);

	var _helpersBlockHelperMissing2 = _interopRequireDefault(_helpersBlockHelperMissing);

	var _helpersEach = __webpack_require__(24);

	var _helpersEach2 = _interopRequireDefault(_helpersEach);

	var _helpersHelperMissing = __webpack_require__(25);

	var _helpersHelperMissing2 = _interopRequireDefault(_helpersHelperMissing);

	var _helpersIf = __webpack_require__(26);

	var _helpersIf2 = _interopRequireDefault(_helpersIf);

	var _helpersLog = __webpack_require__(27);

	var _helpersLog2 = _interopRequireDefault(_helpersLog);

	var _helpersLookup = __webpack_require__(28);

	var _helpersLookup2 = _interopRequireDefault(_helpersLookup);

	var _helpersWith = __webpack_require__(29);

	var _helpersWith2 = _interopRequireDefault(_helpersWith);

	function registerDefaultHelpers(instance) {
	  _helpersBlockHelperMissing2['default'](instance);
	  _helpersEach2['default'](instance);
	  _helpersHelperMissing2['default'](instance);
	  _helpersIf2['default'](instance);
	  _helpersLog2['default'](instance);
	  _helpersLookup2['default'](instance);
	  _helpersWith2['default'](instance);
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7eUNBQXVDLGdDQUFnQzs7OzsyQkFDOUMsZ0JBQWdCOzs7O29DQUNQLDBCQUEwQjs7Ozt5QkFDckMsY0FBYzs7OzswQkFDYixlQUFlOzs7OzZCQUNaLGtCQUFrQjs7OzsyQkFDcEIsZ0JBQWdCOzs7O0FBRWxDLFNBQVMsc0JBQXNCLENBQUMsUUFBUSxFQUFFO0FBQy9DLHlDQUEyQixRQUFRLENBQUMsQ0FBQztBQUNyQywyQkFBYSxRQUFRLENBQUMsQ0FBQztBQUN2QixvQ0FBc0IsUUFBUSxDQUFDLENBQUM7QUFDaEMseUJBQVcsUUFBUSxDQUFDLENBQUM7QUFDckIsMEJBQVksUUFBUSxDQUFDLENBQUM7QUFDdEIsNkJBQWUsUUFBUSxDQUFDLENBQUM7QUFDekIsMkJBQWEsUUFBUSxDQUFDLENBQUM7Q0FDeEIiLCJmaWxlIjoiaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZWdpc3RlckJsb2NrSGVscGVyTWlzc2luZyBmcm9tICcuL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcnO1xuaW1wb3J0IHJlZ2lzdGVyRWFjaCBmcm9tICcuL2hlbHBlcnMvZWFjaCc7XG5pbXBvcnQgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nIGZyb20gJy4vaGVscGVycy9oZWxwZXItbWlzc2luZyc7XG5pbXBvcnQgcmVnaXN0ZXJJZiBmcm9tICcuL2hlbHBlcnMvaWYnO1xuaW1wb3J0IHJlZ2lzdGVyTG9nIGZyb20gJy4vaGVscGVycy9sb2cnO1xuaW1wb3J0IHJlZ2lzdGVyTG9va3VwIGZyb20gJy4vaGVscGVycy9sb29rdXAnO1xuaW1wb3J0IHJlZ2lzdGVyV2l0aCBmcm9tICcuL2hlbHBlcnMvd2l0aCc7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RlckRlZmF1bHRIZWxwZXJzKGluc3RhbmNlKSB7XG4gIHJlZ2lzdGVyQmxvY2tIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJFYWNoKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJIZWxwZXJNaXNzaW5nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJJZihpbnN0YW5jZSk7XG4gIHJlZ2lzdGVyTG9nKGluc3RhbmNlKTtcbiAgcmVnaXN0ZXJMb29rdXAoaW5zdGFuY2UpO1xuICByZWdpc3RlcldpdGgoaW5zdGFuY2UpO1xufVxuIl19


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(20);

	exports['default'] = function (instance) {
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;

	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (_utils.isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }

	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }

	      return fn(context, options);
	    }
	  });
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvYmxvY2staGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBc0QsVUFBVTs7cUJBRWpELFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZFLFFBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPO1FBQ3pCLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7QUFDcEIsYUFBTyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDakIsTUFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtBQUMvQyxhQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0QixNQUFNLElBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUMzQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLFlBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLGlCQUFPLENBQUMsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlCOztBQUVELGVBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQ2hELE1BQU07QUFDTCxlQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUN0QjtLQUNGLE1BQU07QUFDTCxVQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixZQUFJLElBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdFLGVBQU8sR0FBRyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsQ0FBQztPQUN4Qjs7QUFFRCxhQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7S0FDN0I7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJibG9jay1oZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGNyZWF0ZUZyYW1lLCBpc0FycmF5fSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdibG9ja0hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgbGV0IGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gZm4odGhpcyk7XG4gICAgfSBlbHNlIGlmIChjb250ZXh0ID09PSBmYWxzZSB8fCBjb250ZXh0ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgaWYgKGNvbnRleHQubGVuZ3RoID4gMCkge1xuICAgICAgICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICAgICAgICBvcHRpb25zLmlkcyA9IFtvcHRpb25zLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnMuZWFjaChjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBpbnZlcnNlKHRoaXMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGxldCBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgZGF0YS5jb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5uYW1lKTtcbiAgICAgICAgb3B0aW9ucyA9IHtkYXRhOiBkYXRhfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfSk7XG59XG4iXX0=


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _utils = __webpack_require__(20);

	var _exception = __webpack_require__(21);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _exception2['default']('Must pass iterator to #each');
	    }

	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;

	    if (options.data && options.ids) {
	      contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }

	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    if (options.data) {
	      data = _utils.createFrame(options.data);
	    }

	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;

	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }

	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: _utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }

	    if (context && typeof context === 'object') {
	      if (_utils.isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          if (i in context) {
	            execIteration(i, i, i === context.length - 1);
	          }
	        }
	      } else {
	        var priorKey = undefined;

	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey !== undefined) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey !== undefined) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }

	    if (i === 0) {
	      ret = inverse(this);
	    }

	    return ret;
	  });
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvZWFjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O3FCQUErRSxVQUFVOzt5QkFDbkUsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixZQUFNLDJCQUFjLDZCQUE2QixDQUFDLENBQUM7S0FDcEQ7O0FBRUQsUUFBSSxFQUFFLEdBQUcsT0FBTyxDQUFDLEVBQUU7UUFDZixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU87UUFDekIsQ0FBQyxHQUFHLENBQUM7UUFDTCxHQUFHLEdBQUcsRUFBRTtRQUNSLElBQUksWUFBQTtRQUNKLFdBQVcsWUFBQSxDQUFDOztBQUVoQixRQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUMvQixpQkFBVyxHQUFHLHlCQUFrQixPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0tBQ2pGOztBQUVELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsVUFBSSxHQUFHLG1CQUFZLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNsQzs7QUFFRCxhQUFTLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtBQUN6QyxVQUFJLElBQUksRUFBRTtBQUNSLFlBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO0FBQ2pCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0FBQ25CLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxLQUFLLENBQUMsQ0FBQztBQUN6QixZQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7O0FBRW5CLFlBQUksV0FBVyxFQUFFO0FBQ2YsY0FBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO09BQ0Y7O0FBRUQsU0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzdCLFlBQUksRUFBRSxJQUFJO0FBQ1YsbUJBQVcsRUFBRSxtQkFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDL0UsQ0FBQyxDQUFDO0tBQ0o7O0FBRUQsUUFBSSxPQUFPLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQzFDLFVBQUksZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNwQixhQUFLLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUN2QyxjQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7QUFDaEIseUJBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1dBQy9DO1NBQ0Y7T0FDRixNQUFNO0FBQ0wsWUFBSSxRQUFRLFlBQUEsQ0FBQzs7QUFFYixhQUFLLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRTtBQUN2QixjQUFJLE9BQU8sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Ozs7QUFJL0IsZ0JBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQiwyQkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDaEM7QUFDRCxvQkFBUSxHQUFHLEdBQUcsQ0FBQztBQUNmLGFBQUMsRUFBRSxDQUFDO1dBQ0w7U0FDRjtBQUNELFlBQUksUUFBUSxLQUFLLFNBQVMsRUFBRTtBQUMxQix1QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RDO09BQ0Y7S0FDRjs7QUFFRCxRQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDWCxTQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3JCOztBQUVELFdBQU8sR0FBRyxDQUFDO0dBQ1osQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoiZWFjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YXBwZW5kQ29udGV4dFBhdGgsIGJsb2NrUGFyYW1zLCBjcmVhdGVGcmFtZSwgaXNBcnJheSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IEV4Y2VwdGlvbiBmcm9tICcuLi9leGNlcHRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignZWFjaCcsIGZ1bmN0aW9uKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ011c3QgcGFzcyBpdGVyYXRvciB0byAjZWFjaCcpO1xuICAgIH1cblxuICAgIGxldCBmbiA9IG9wdGlvbnMuZm4sXG4gICAgICAgIGludmVyc2UgPSBvcHRpb25zLmludmVyc2UsXG4gICAgICAgIGkgPSAwLFxuICAgICAgICByZXQgPSAnJyxcbiAgICAgICAgZGF0YSxcbiAgICAgICAgY29udGV4dFBhdGg7XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICBjb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoKG9wdGlvbnMuZGF0YS5jb250ZXh0UGF0aCwgb3B0aW9ucy5pZHNbMF0pICsgJy4nO1xuICAgIH1cblxuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7IGNvbnRleHQgPSBjb250ZXh0LmNhbGwodGhpcyk7IH1cblxuICAgIGlmIChvcHRpb25zLmRhdGEpIHtcbiAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGV4ZWNJdGVyYXRpb24oZmllbGQsIGluZGV4LCBsYXN0KSB7XG4gICAgICBpZiAoZGF0YSkge1xuICAgICAgICBkYXRhLmtleSA9IGZpZWxkO1xuICAgICAgICBkYXRhLmluZGV4ID0gaW5kZXg7XG4gICAgICAgIGRhdGEuZmlyc3QgPSBpbmRleCA9PT0gMDtcbiAgICAgICAgZGF0YS5sYXN0ID0gISFsYXN0O1xuXG4gICAgICAgIGlmIChjb250ZXh0UGF0aCkge1xuICAgICAgICAgIGRhdGEuY29udGV4dFBhdGggPSBjb250ZXh0UGF0aCArIGZpZWxkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldCA9IHJldCArIGZuKGNvbnRleHRbZmllbGRdLCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dFtmaWVsZF0sIGZpZWxkXSwgW2NvbnRleHRQYXRoICsgZmllbGQsIG51bGxdKVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbnRleHQgJiYgdHlwZW9mIGNvbnRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAoaXNBcnJheShjb250ZXh0KSkge1xuICAgICAgICBmb3IgKGxldCBqID0gY29udGV4dC5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICBpZiAoaSBpbiBjb250ZXh0KSB7XG4gICAgICAgICAgICBleGVjSXRlcmF0aW9uKGksIGksIGkgPT09IGNvbnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgcHJpb3JLZXk7XG5cbiAgICAgICAgZm9yIChsZXQga2V5IGluIGNvbnRleHQpIHtcbiAgICAgICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3RcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcbiAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgICBpZiAocHJpb3JLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmlvcktleSA9IGtleTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yS2V5ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBleGVjSXRlcmF0aW9uKHByaW9yS2V5LCBpIC0gMSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgcmV0ID0gaW52ZXJzZSh0aGlzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9KTtcbn1cbiJdfQ==


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _exception = __webpack_require__(21);

	var _exception2 = _interopRequireDefault(_exception);

	exports['default'] = function (instance) {
	  instance.registerHelper('helperMissing', function () /* [args, ]options */{
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} construct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaGVscGVyLW1pc3NpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozt5QkFBc0IsY0FBYzs7OztxQkFFckIsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLEVBQUUsaUNBQWdDO0FBQ3ZFLFFBQUksU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7O0FBRTFCLGFBQU8sU0FBUyxDQUFDO0tBQ2xCLE1BQU07O0FBRUwsWUFBTSwyQkFBYyxtQkFBbUIsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7S0FDdkY7R0FDRixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJoZWxwZXItbWlzc2luZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGNlcHRpb24gZnJvbSAnLi4vZXhjZXB0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbigvKiBbYXJncywgXW9wdGlvbnMgKi8pIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy8gQSBtaXNzaW5nIGZpZWxkIGluIGEge3tmb299fSBjb25zdHJ1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ01pc3NpbmcgaGVscGVyOiBcIicgKyBhcmd1bWVudHNbYXJndW1lbnRzLmxlbmd0aCAtIDFdLm5hbWUgKyAnXCInKTtcbiAgICB9XG4gIH0pO1xufVxuIl19


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(20);

	exports['default'] = function (instance) {
	  instance.registerHelper('if', function (conditional, options) {
	    if (_utils.isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }

	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || _utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });

	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvaWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztxQkFBa0MsVUFBVTs7cUJBRTdCLFVBQVMsUUFBUSxFQUFFO0FBQ2hDLFVBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLFVBQVMsV0FBVyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxRQUFJLGtCQUFXLFdBQVcsQ0FBQyxFQUFFO0FBQUUsaUJBQVcsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQUU7Ozs7O0FBS3RFLFFBQUksQUFBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsV0FBVyxJQUFLLGVBQVEsV0FBVyxDQUFDLEVBQUU7QUFDdkUsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCLE1BQU07QUFDTCxhQUFPLE9BQU8sQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDekI7R0FDRixDQUFDLENBQUM7O0FBRUgsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQy9ELFdBQU8sUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxFQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztHQUN2SCxDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJpZi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aXNFbXB0eSwgaXNGdW5jdGlvbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignaWYnLCBmdW5jdGlvbihjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkgeyBjb25kaXRpb25hbCA9IGNvbmRpdGlvbmFsLmNhbGwodGhpcyk7IH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCghb3B0aW9ucy5oYXNoLmluY2x1ZGVaZXJvICYmICFjb25kaXRpb25hbCkgfHwgaXNFbXB0eShjb25kaXRpb25hbCkpIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmZuKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3VubGVzcycsIGZ1bmN0aW9uKGNvbmRpdGlvbmFsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlLmhlbHBlcnNbJ2lmJ10uY2FsbCh0aGlzLCBjb25kaXRpb25hbCwge2ZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaH0pO1xuICB9KTtcbn1cbiJdfQ==


/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('log', function () /* message, options */{
	    var args = [undefined],
	        options = arguments[arguments.length - 1];
	    for (var i = 0; i < arguments.length - 1; i++) {
	      args.push(arguments[i]);
	    }

	    var level = 1;
	    if (options.hash.level != null) {
	      level = options.hash.level;
	    } else if (options.data && options.data.level != null) {
	      level = options.data.level;
	    }
	    args[0] = level;

	    instance.log.apply(instance, args);
	  });
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsa0NBQWlDO0FBQzlELFFBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDO1FBQ2xCLE9BQU8sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM5QyxTQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDN0MsVUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6Qjs7QUFFRCxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxRQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtBQUM5QixXQUFLLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7S0FDNUIsTUFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO0FBQ3JELFdBQUssR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztLQUM1QjtBQUNELFFBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7O0FBRWhCLFlBQVEsQ0FBQyxHQUFHLE1BQUEsQ0FBWixRQUFRLEVBQVMsSUFBSSxDQUFDLENBQUM7R0FDeEIsQ0FBQyxDQUFDO0NBQ0oiLCJmaWxlIjoibG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uKC8qIG1lc3NhZ2UsIG9wdGlvbnMgKi8pIHtcbiAgICBsZXQgYXJncyA9IFt1bmRlZmluZWRdLFxuICAgICAgICBvcHRpb25zID0gYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICAgIH1cblxuICAgIGxldCBsZXZlbCA9IDE7XG4gICAgaWYgKG9wdGlvbnMuaGFzaC5sZXZlbCAhPSBudWxsKSB7XG4gICAgICBsZXZlbCA9IG9wdGlvbnMuaGFzaC5sZXZlbDtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmRhdGEubGV2ZWwgIT0gbnVsbCkge1xuICAgICAgbGV2ZWwgPSBvcHRpb25zLmRhdGEubGV2ZWw7XG4gICAgfVxuICAgIGFyZ3NbMF0gPSBsZXZlbDtcblxuICAgIGluc3RhbmNlLmxvZyguLi4gYXJncyk7XG4gIH0pO1xufVxuIl19


/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;

	exports['default'] = function (instance) {
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvbG9va3VwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQWUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsVUFBUyxHQUFHLEVBQUUsS0FBSyxFQUFFO0FBQ3JELFdBQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUMxQixDQUFDLENBQUM7Q0FDSiIsImZpbGUiOiJsb29rdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbihpbnN0YW5jZSkge1xuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignbG9va3VwJywgZnVuY3Rpb24ob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59XG4iXX0=


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(20);

	exports['default'] = function (instance) {
	  instance.registerHelper('with', function (context, options) {
	    if (_utils.isFunction(context)) {
	      context = context.call(this);
	    }

	    var fn = options.fn;

	    if (!_utils.isEmpty(context)) {
	      var data = options.data;
	      if (options.data && options.ids) {
	        data = _utils.createFrame(options.data);
	        data.contextPath = _utils.appendContextPath(options.data.contextPath, options.ids[0]);
	      }

	      return fn(context, {
	        data: data,
	        blockParams: _utils.blockParams([context], [data && data.contextPath])
	      });
	    } else {
	      return options.inverse(this);
	    }
	  });
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2hlbHBlcnMvd2l0aC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUErRSxVQUFVOztxQkFFMUUsVUFBUyxRQUFRLEVBQUU7QUFDaEMsVUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pELFFBQUksa0JBQVcsT0FBTyxDQUFDLEVBQUU7QUFBRSxhQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUFFOztBQUUxRCxRQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUVwQixRQUFJLENBQUMsZUFBUSxPQUFPLENBQUMsRUFBRTtBQUNyQixVQUFJLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO0FBQ3hCLFVBQUksT0FBTyxDQUFDLElBQUksSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQy9CLFlBQUksR0FBRyxtQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDakMsWUFBSSxDQUFDLFdBQVcsR0FBRyx5QkFBa0IsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO09BQ2hGOztBQUVELGFBQU8sRUFBRSxDQUFDLE9BQU8sRUFBRTtBQUNqQixZQUFJLEVBQUUsSUFBSTtBQUNWLG1CQUFXLEVBQUUsbUJBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDaEUsQ0FBQyxDQUFDO0tBQ0osTUFBTTtBQUNMLGFBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QjtHQUNGLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6IndpdGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2FwcGVuZENvbnRleHRQYXRoLCBibG9ja1BhcmFtcywgY3JlYXRlRnJhbWUsIGlzRW1wdHksIGlzRnVuY3Rpb259IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbihjb250ZXh0LCBvcHRpb25zKSB7XG4gICAgaWYgKGlzRnVuY3Rpb24oY29udGV4dCkpIHsgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTsgfVxuXG4gICAgbGV0IGZuID0gb3B0aW9ucy5mbjtcblxuICAgIGlmICghaXNFbXB0eShjb250ZXh0KSkge1xuICAgICAgbGV0IGRhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICBpZiAob3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCB7XG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIGJsb2NrUGFyYW1zOiBibG9ja1BhcmFtcyhbY29udGV4dF0sIFtkYXRhICYmIGRhdGEuY29udGV4dFBhdGhdKVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBvcHRpb25zLmludmVyc2UodGhpcyk7XG4gICAgfVxuICB9KTtcbn1cbiJdfQ==


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.registerDefaultDecorators = registerDefaultDecorators;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _decoratorsInline = __webpack_require__(31);

	var _decoratorsInline2 = _interopRequireDefault(_decoratorsInline);

	function registerDefaultDecorators(instance) {
	  _decoratorsInline2['default'](instance);
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Z0NBQTJCLHFCQUFxQjs7OztBQUV6QyxTQUFTLHlCQUF5QixDQUFDLFFBQVEsRUFBRTtBQUNsRCxnQ0FBZSxRQUFRLENBQUMsQ0FBQztDQUMxQiIsImZpbGUiOiJkZWNvcmF0b3JzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlZ2lzdGVySW5saW5lIGZyb20gJy4vZGVjb3JhdG9ycy9pbmxpbmUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0ZXJEZWZhdWx0RGVjb3JhdG9ycyhpbnN0YW5jZSkge1xuICByZWdpc3RlcklubGluZShpbnN0YW5jZSk7XG59XG5cbiJdfQ==


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(20);

	exports['default'] = function (instance) {
	  instance.registerDecorator('inline', function (fn, props, container, options) {
	    var ret = fn;
	    if (!props.partials) {
	      props.partials = {};
	      ret = function (context, options) {
	        // Create a new partials stack frame prior to exec.
	        var original = container.partials;
	        container.partials = _utils.extend({}, original, props.partials);
	        var ret = fn(context, options);
	        container.partials = original;
	        return ret;
	      };
	    }

	    props.partials[options.args[0]] = options.fn;

	    return ret;
	  });
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2RlY29yYXRvcnMvaW5saW5lLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7cUJBQXFCLFVBQVU7O3FCQUVoQixVQUFTLFFBQVEsRUFBRTtBQUNoQyxVQUFRLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFVBQVMsRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzNFLFFBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNiLFFBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFO0FBQ25CLFdBQUssQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ3BCLFNBQUcsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7O0FBRS9CLFlBQUksUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7QUFDbEMsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsY0FBTyxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxRCxZQUFJLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQy9CLGlCQUFTLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUM5QixlQUFPLEdBQUcsQ0FBQztPQUNaLENBQUM7S0FDSDs7QUFFRCxTQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDOztBQUU3QyxXQUFPLEdBQUcsQ0FBQztHQUNaLENBQUMsQ0FBQztDQUNKIiwiZmlsZSI6ImlubGluZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZXh0ZW5kfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKGluc3RhbmNlKSB7XG4gIGluc3RhbmNlLnJlZ2lzdGVyRGVjb3JhdG9yKCdpbmxpbmUnLCBmdW5jdGlvbihmbiwgcHJvcHMsIGNvbnRhaW5lciwgb3B0aW9ucykge1xuICAgIGxldCByZXQgPSBmbjtcbiAgICBpZiAoIXByb3BzLnBhcnRpYWxzKSB7XG4gICAgICBwcm9wcy5wYXJ0aWFscyA9IHt9O1xuICAgICAgcmV0ID0gZnVuY3Rpb24oY29udGV4dCwgb3B0aW9ucykge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcGFydGlhbHMgc3RhY2sgZnJhbWUgcHJpb3IgdG8gZXhlYy5cbiAgICAgICAgbGV0IG9yaWdpbmFsID0gY29udGFpbmVyLnBhcnRpYWxzO1xuICAgICAgICBjb250YWluZXIucGFydGlhbHMgPSBleHRlbmQoe30sIG9yaWdpbmFsLCBwcm9wcy5wYXJ0aWFscyk7XG4gICAgICAgIGxldCByZXQgPSBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3JpZ2luYWw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgICB9O1xuICAgIH1cblxuICAgIHByb3BzLnBhcnRpYWxzW29wdGlvbnMuYXJnc1swXV0gPSBvcHRpb25zLmZuO1xuXG4gICAgcmV0dXJuIHJldDtcbiAgfSk7XG59XG4iXX0=


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _utils = __webpack_require__(20);

	var logger = {
	  methodMap: ['debug', 'info', 'warn', 'error'],
	  level: 'info',

	  // Maps a given level value to the `methodMap` indexes above.
	  lookupLevel: function lookupLevel(level) {
	    if (typeof level === 'string') {
	      var levelMap = _utils.indexOf(logger.methodMap, level.toLowerCase());
	      if (levelMap >= 0) {
	        level = levelMap;
	      } else {
	        level = parseInt(level, 10);
	      }
	    }

	    return level;
	  },

	  // Can be overridden in the host environment
	  log: function log(level) {
	    level = logger.lookupLevel(level);

	    if (typeof console !== 'undefined' && logger.lookupLevel(logger.level) <= level) {
	      var method = logger.methodMap[level];
	      if (!console[method]) {
	        // eslint-disable-line no-console
	        method = 'log';
	      }

	      for (var _len = arguments.length, message = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        message[_key - 1] = arguments[_key];
	      }

	      console[method].apply(console, message); // eslint-disable-line no-console
	    }
	  }
	};

	exports['default'] = logger;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL2xvZ2dlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O3FCQUFzQixTQUFTOztBQUUvQixJQUFJLE1BQU0sR0FBRztBQUNYLFdBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztBQUM3QyxPQUFLLEVBQUUsTUFBTTs7O0FBR2IsYUFBVyxFQUFFLHFCQUFTLEtBQUssRUFBRTtBQUMzQixRQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtBQUM3QixVQUFJLFFBQVEsR0FBRyxlQUFRLE1BQU0sQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFDOUQsVUFBSSxRQUFRLElBQUksQ0FBQyxFQUFFO0FBQ2pCLGFBQUssR0FBRyxRQUFRLENBQUM7T0FDbEIsTUFBTTtBQUNMLGFBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzdCO0tBQ0Y7O0FBRUQsV0FBTyxLQUFLLENBQUM7R0FDZDs7O0FBR0QsS0FBRyxFQUFFLGFBQVMsS0FBSyxFQUFjO0FBQy9CLFNBQUssR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVsQyxRQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxNQUFNLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLEVBQUU7QUFDL0UsVUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNyQyxVQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFOztBQUNwQixjQUFNLEdBQUcsS0FBSyxDQUFDO09BQ2hCOzt3Q0FQbUIsT0FBTztBQUFQLGVBQU87OztBQVEzQixhQUFPLENBQUMsTUFBTSxPQUFDLENBQWYsT0FBTyxFQUFZLE9BQU8sQ0FBQyxDQUFDO0tBQzdCO0dBQ0Y7Q0FDRixDQUFDOztxQkFFYSxNQUFNIiwiZmlsZSI6ImxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5kZXhPZn0gZnJvbSAnLi91dGlscyc7XG5cbmxldCBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogWydkZWJ1ZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InXSxcbiAgbGV2ZWw6ICdpbmZvJyxcblxuICAvLyBNYXBzIGEgZ2l2ZW4gbGV2ZWwgdmFsdWUgdG8gdGhlIGBtZXRob2RNYXBgIGluZGV4ZXMgYWJvdmUuXG4gIGxvb2t1cExldmVsOiBmdW5jdGlvbihsZXZlbCkge1xuICAgIGlmICh0eXBlb2YgbGV2ZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsZXQgbGV2ZWxNYXAgPSBpbmRleE9mKGxvZ2dlci5tZXRob2RNYXAsIGxldmVsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgaWYgKGxldmVsTWFwID49IDApIHtcbiAgICAgICAgbGV2ZWwgPSBsZXZlbE1hcDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldmVsID0gcGFyc2VJbnQobGV2ZWwsIDEwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbGV2ZWw7XG4gIH0sXG5cbiAgLy8gQ2FuIGJlIG92ZXJyaWRkZW4gaW4gdGhlIGhvc3QgZW52aXJvbm1lbnRcbiAgbG9nOiBmdW5jdGlvbihsZXZlbCwgLi4ubWVzc2FnZSkge1xuICAgIGxldmVsID0gbG9nZ2VyLmxvb2t1cExldmVsKGxldmVsKTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxvb2t1cExldmVsKGxvZ2dlci5sZXZlbCkgPD0gbGV2ZWwpIHtcbiAgICAgIGxldCBtZXRob2QgPSBsb2dnZXIubWV0aG9kTWFwW2xldmVsXTtcbiAgICAgIGlmICghY29uc29sZVttZXRob2RdKSB7ICAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gICAgICAgIG1ldGhvZCA9ICdsb2cnO1xuICAgICAgfVxuICAgICAgY29uc29sZVttZXRob2RdKC4uLm1lc3NhZ2UpOyAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGxvZ2dlcjtcbiJdfQ==


/***/ },
/* 33 */
/***/ function(module, exports) {

	// Build out our basic SafeString type
	'use strict';

	exports.__esModule = true;
	function SafeString(string) {
	  this.string = string;
	}

	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};

	exports['default'] = SafeString;
	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxTQUFTLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDMUIsTUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7Q0FDdEI7O0FBRUQsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsWUFBVztBQUN2RSxTQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0NBQ3pCLENBQUM7O3FCQUVhLFVBQVUiLCJmaWxlIjoic2FmZS1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnJyArIHRoaXMuc3RyaW5nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FmZVN0cmluZztcbiJdfQ==


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;
	// istanbul ignore next

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	// istanbul ignore next

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _utils = __webpack_require__(20);

	var Utils = _interopRequireWildcard(_utils);

	var _exception = __webpack_require__(21);

	var _exception2 = _interopRequireDefault(_exception);

	var _base = __webpack_require__(19);

	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _base.COMPILER_REVISION;

	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _base.REVISION_CHANGES[currentRevision],
	          compilerVersions = _base.REVISION_CHANGES[compilerRevision];
	      throw new _exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}

	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }

	  templateSpec.main.decorator = templateSpec.main_d;

	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);

	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	      if (options.ids) {
	        options.ids[0] = true;
	      }
	    }

	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);

	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }

	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }

	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },

	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,

	    fn: function fn(i) {
	      var ret = templateSpec[i];
	      ret.decorator = templateSpec[i + '_d'];
	      return ret;
	    },

	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },

	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;

	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }

	      return obj;
	    },

	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };

	  function ret(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var data = options.data;

	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      if (options.depths) {
	        depths = context !== options.depths[0] ? [context].concat(options.depths) : options.depths;
	      } else {
	        depths = [context];
	      }
	    }

	    function main(context /*, options*/) {
	      return '' + templateSpec.main(container, context, container.helpers, container.partials, data, blockParams, depths);
	    }
	    main = executeDecorators(templateSpec.main, main, container, options.depths || [], data, blockParams);
	    return main(context, options);
	  }
	  ret.isTop = true;

	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);

	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	      if (templateSpec.usePartial || templateSpec.useDecorators) {
	        container.decorators = container.merge(options.decorators, env.decorators);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	      container.decorators = options.decorators;
	    }
	  };

	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _exception2['default']('must pass parent depths');
	    }

	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}

	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

	    var currentDepths = depths;
	    if (depths && context !== depths[0]) {
	      currentDepths = [context].concat(depths);
	    }

	    return fn(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), currentDepths);
	  }

	  prog = executeDecorators(fn, prog, container, depths, data, blockParams);

	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}

	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    if (options.name === '@partial-block') {
	      partial = options.data['partial-block'];
	    } else {
	      partial = options.partials[options.name];
	    }
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}

	function invokePartial(partial, context, options) {
	  options.partial = true;
	  if (options.ids) {
	    options.data.contextPath = options.ids[0] || options.data.contextPath;
	  }

	  var partialBlock = undefined;
	  if (options.fn && options.fn !== noop) {
	    options.data = _base.createFrame(options.data);
	    partialBlock = options.data['partial-block'] = options.fn;

	    if (partialBlock.partials) {
	      options.partials = Utils.extend({}, options.partials, partialBlock.partials);
	    }
	  }

	  if (partial === undefined && partialBlock) {
	    partial = partialBlock;
	  }

	  if (partial === undefined) {
	    throw new _exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}

	function noop() {
	  return '';
	}

	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _base.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

	function executeDecorators(fn, prog, container, depths, data, blockParams) {
	  if (fn.decorator) {
	    var props = {};
	    prog = fn.decorator(prog, props, container, depths && depths[0], data, blockParams, depths);
	    Utils.extend(prog, props);
	  }
	  return prog;
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL3J1bnRpbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBQXVCLFNBQVM7O0lBQXBCLEtBQUs7O3lCQUNLLGFBQWE7Ozs7b0JBQzhCLFFBQVE7O0FBRWxFLFNBQVMsYUFBYSxDQUFDLFlBQVksRUFBRTtBQUMxQyxNQUFNLGdCQUFnQixHQUFHLFlBQVksSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztNQUN2RCxlQUFlLDBCQUFvQixDQUFDOztBQUUxQyxNQUFJLGdCQUFnQixLQUFLLGVBQWUsRUFBRTtBQUN4QyxRQUFJLGdCQUFnQixHQUFHLGVBQWUsRUFBRTtBQUN0QyxVQUFNLGVBQWUsR0FBRyx1QkFBaUIsZUFBZSxDQUFDO1VBQ25ELGdCQUFnQixHQUFHLHVCQUFpQixnQkFBZ0IsQ0FBQyxDQUFDO0FBQzVELFlBQU0sMkJBQWMseUZBQXlGLEdBQ3ZHLHFEQUFxRCxHQUFHLGVBQWUsR0FBRyxtREFBbUQsR0FBRyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNoSyxNQUFNOztBQUVMLFlBQU0sMkJBQWMsd0ZBQXdGLEdBQ3RHLGlEQUFpRCxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNuRjtHQUNGO0NBQ0Y7O0FBRU0sU0FBUyxRQUFRLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxDQUFDLEdBQUcsRUFBRTtBQUNSLFVBQU0sMkJBQWMsbUNBQW1DLENBQUMsQ0FBQztHQUMxRDtBQUNELE1BQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQ3ZDLFVBQU0sMkJBQWMsMkJBQTJCLEdBQUcsT0FBTyxZQUFZLENBQUMsQ0FBQztHQUN4RTs7QUFFRCxjQUFZLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsTUFBTSxDQUFDOzs7O0FBSWxELEtBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFNUMsV0FBUyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUN2RCxRQUFJLE9BQU8sQ0FBQyxJQUFJLEVBQUU7QUFDaEIsYUFBTyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDbEQsVUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO0FBQ2YsZUFBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7T0FDdkI7S0FDRjs7QUFFRCxXQUFPLEdBQUcsR0FBRyxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RFLFFBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQzs7QUFFeEUsUUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyxPQUFPLEVBQUU7QUFDakMsYUFBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN6RixZQUFNLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0tBQzNEO0FBQ0QsUUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO0FBQ2xCLFVBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtBQUNsQixZQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQy9CLGFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDNUMsY0FBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUM1QixrQkFBTTtXQUNQOztBQUVELGVBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN0QztBQUNELGNBQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQzNCO0FBQ0QsYUFBTyxNQUFNLENBQUM7S0FDZixNQUFNO0FBQ0wsWUFBTSwyQkFBYyxjQUFjLEdBQUcsT0FBTyxDQUFDLElBQUksR0FBRywwREFBMEQsQ0FBQyxDQUFDO0tBQ2pIO0dBQ0Y7OztBQUdELE1BQUksU0FBUyxHQUFHO0FBQ2QsVUFBTSxFQUFFLGdCQUFTLEdBQUcsRUFBRSxJQUFJLEVBQUU7QUFDMUIsVUFBSSxFQUFFLElBQUksSUFBSSxHQUFHLENBQUEsQUFBQyxFQUFFO0FBQ2xCLGNBQU0sMkJBQWMsR0FBRyxHQUFHLElBQUksR0FBRyxtQkFBbUIsR0FBRyxHQUFHLENBQUMsQ0FBQztPQUM3RDtBQUNELGFBQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xCO0FBQ0QsVUFBTSxFQUFFLGdCQUFTLE1BQU0sRUFBRSxJQUFJLEVBQUU7QUFDN0IsVUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztBQUMxQixXQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQzVCLFlBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7QUFDeEMsaUJBQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3hCO09BQ0Y7S0FDRjtBQUNELFVBQU0sRUFBRSxnQkFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ2pDLGFBQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDO0tBQ3hFOztBQUVELG9CQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7QUFDeEMsaUJBQWEsRUFBRSxvQkFBb0I7O0FBRW5DLE1BQUUsRUFBRSxZQUFTLENBQUMsRUFBRTtBQUNkLFVBQUksR0FBRyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixTQUFHLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7QUFDdkMsYUFBTyxHQUFHLENBQUM7S0FDWjs7QUFFRCxZQUFRLEVBQUUsRUFBRTtBQUNaLFdBQU8sRUFBRSxpQkFBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7QUFDbkUsVUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7VUFDakMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEIsVUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLFdBQVcsSUFBSSxtQkFBbUIsRUFBRTtBQUN4RCxzQkFBYyxHQUFHLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO09BQzNGLE1BQU0sSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUMxQixzQkFBYyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7T0FDOUQ7QUFDRCxhQUFPLGNBQWMsQ0FBQztLQUN2Qjs7QUFFRCxRQUFJLEVBQUUsY0FBUyxLQUFLLEVBQUUsS0FBSyxFQUFFO0FBQzNCLGFBQU8sS0FBSyxJQUFJLEtBQUssRUFBRSxFQUFFO0FBQ3ZCLGFBQUssR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDO09BQ3ZCO0FBQ0QsYUFBTyxLQUFLLENBQUM7S0FDZDtBQUNELFNBQUssRUFBRSxlQUFTLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDN0IsVUFBSSxHQUFHLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQzs7QUFFMUIsVUFBSSxLQUFLLElBQUksTUFBTSxJQUFLLEtBQUssS0FBSyxNQUFNLEFBQUMsRUFBRTtBQUN6QyxXQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ3ZDOztBQUVELGFBQU8sR0FBRyxDQUFDO0tBQ1o7O0FBRUQsUUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSTtBQUNqQixnQkFBWSxFQUFFLFlBQVksQ0FBQyxRQUFRO0dBQ3BDLENBQUM7O0FBRUYsV0FBUyxHQUFHLENBQUMsT0FBTyxFQUFnQjtRQUFkLE9BQU8seURBQUcsRUFBRTs7QUFDaEMsUUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQzs7QUFFeEIsT0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNwQixRQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFO0FBQzVDLFVBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ2hDO0FBQ0QsUUFBSSxNQUFNLFlBQUE7UUFDTixXQUFXLEdBQUcsWUFBWSxDQUFDLGNBQWMsR0FBRyxFQUFFLEdBQUcsU0FBUyxDQUFDO0FBQy9ELFFBQUksWUFBWSxDQUFDLFNBQVMsRUFBRTtBQUMxQixVQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDbEIsY0FBTSxHQUFHLE9BQU8sS0FBSyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDO09BQzVGLE1BQU07QUFDTCxjQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUNwQjtLQUNGOztBQUVELGFBQVMsSUFBSSxDQUFDLE9BQU8sZ0JBQWU7QUFDbEMsYUFBTyxFQUFFLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ3JIO0FBQ0QsUUFBSSxHQUFHLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFDdEcsV0FBTyxJQUFJLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQy9CO0FBQ0QsS0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7O0FBRWpCLEtBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBUyxPQUFPLEVBQUU7QUFDN0IsUUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7QUFDcEIsZUFBUyxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUVsRSxVQUFJLFlBQVksQ0FBQyxVQUFVLEVBQUU7QUFDM0IsaUJBQVMsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUN0RTtBQUNELFVBQUksWUFBWSxDQUFDLFVBQVUsSUFBSSxZQUFZLENBQUMsYUFBYSxFQUFFO0FBQ3pELGlCQUFTLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7T0FDNUU7S0FDRixNQUFNO0FBQ0wsZUFBUyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQ3BDLGVBQVMsQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQztBQUN0QyxlQUFTLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7S0FDM0M7R0FDRixDQUFDOztBQUVGLEtBQUcsQ0FBQyxNQUFNLEdBQUcsVUFBUyxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7QUFDbEQsUUFBSSxZQUFZLENBQUMsY0FBYyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQy9DLFlBQU0sMkJBQWMsd0JBQXdCLENBQUMsQ0FBQztLQUMvQztBQUNELFFBQUksWUFBWSxDQUFDLFNBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNyQyxZQUFNLDJCQUFjLHlCQUF5QixDQUFDLENBQUM7S0FDaEQ7O0FBRUQsV0FBTyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7R0FDakYsQ0FBQztBQUNGLFNBQU8sR0FBRyxDQUFDO0NBQ1o7O0FBRU0sU0FBUyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7QUFDNUYsV0FBUyxJQUFJLENBQUMsT0FBTyxFQUFnQjtRQUFkLE9BQU8seURBQUcsRUFBRTs7QUFDakMsUUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDO0FBQzNCLFFBQUksTUFBTSxJQUFJLE9BQU8sS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDbkMsbUJBQWEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztLQUMxQzs7QUFFRCxXQUFPLEVBQUUsQ0FBQyxTQUFTLEVBQ2YsT0FBTyxFQUNQLFNBQVMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLFFBQVEsRUFDckMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLEVBQ3BCLFdBQVcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQ3hELGFBQWEsQ0FBQyxDQUFDO0dBQ3BCOztBQUVELE1BQUksR0FBRyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFDOztBQUV6RSxNQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNqQixNQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztBQUN4QyxNQUFJLENBQUMsV0FBVyxHQUFHLG1CQUFtQixJQUFJLENBQUMsQ0FBQztBQUM1QyxTQUFPLElBQUksQ0FBQztDQUNiOztBQUVNLFNBQVMsY0FBYyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3hELE1BQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixRQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssZ0JBQWdCLEVBQUU7QUFDckMsYUFBTyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7S0FDekMsTUFBTTtBQUNMLGFBQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUMxQztHQUNGLE1BQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFOztBQUV6QyxXQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztBQUN2QixXQUFPLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztHQUNyQztBQUNELFNBQU8sT0FBTyxDQUFDO0NBQ2hCOztBQUVNLFNBQVMsYUFBYSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3ZELFNBQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLE1BQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtBQUNmLFdBQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7R0FDdkU7O0FBRUQsTUFBSSxZQUFZLFlBQUEsQ0FBQztBQUNqQixNQUFJLE9BQU8sQ0FBQyxFQUFFLElBQUksT0FBTyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUU7QUFDckMsV0FBTyxDQUFDLElBQUksR0FBRyxrQkFBWSxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekMsZ0JBQVksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7O0FBRTFELFFBQUksWUFBWSxDQUFDLFFBQVEsRUFBRTtBQUN6QixhQUFPLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzlFO0dBQ0Y7O0FBRUQsTUFBSSxPQUFPLEtBQUssU0FBUyxJQUFJLFlBQVksRUFBRTtBQUN6QyxXQUFPLEdBQUcsWUFBWSxDQUFDO0dBQ3hCOztBQUVELE1BQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtBQUN6QixVQUFNLDJCQUFjLGNBQWMsR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLHFCQUFxQixDQUFDLENBQUM7R0FDNUUsTUFBTSxJQUFJLE9BQU8sWUFBWSxRQUFRLEVBQUU7QUFDdEMsV0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQ2xDO0NBQ0Y7O0FBRU0sU0FBUyxJQUFJLEdBQUc7QUFBRSxTQUFPLEVBQUUsQ0FBQztDQUFFOztBQUVyQyxTQUFTLFFBQVEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFO0FBQy9CLE1BQUksQ0FBQyxJQUFJLElBQUksRUFBRSxNQUFNLElBQUksSUFBSSxDQUFBLEFBQUMsRUFBRTtBQUM5QixRQUFJLEdBQUcsSUFBSSxHQUFHLGtCQUFZLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztBQUNyQyxRQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztHQUNyQjtBQUNELFNBQU8sSUFBSSxDQUFDO0NBQ2I7O0FBRUQsU0FBUyxpQkFBaUIsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUN6RSxNQUFJLEVBQUUsQ0FBQyxTQUFTLEVBQUU7QUFDaEIsUUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO0FBQ2YsUUFBSSxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQzVGLFNBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO0dBQzNCO0FBQ0QsU0FBTyxJQUFJLENBQUM7Q0FDYiIsImZpbGUiOiJydW50aW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVXRpbHMgZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgRXhjZXB0aW9uIGZyb20gJy4vZXhjZXB0aW9uJztcbmltcG9ydCB7IENPTVBJTEVSX1JFVklTSU9OLCBSRVZJU0lPTl9DSEFOR0VTLCBjcmVhdGVGcmFtZSB9IGZyb20gJy4vYmFzZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JldmlzaW9uKGNvbXBpbGVySW5mbykge1xuICBjb25zdCBjb21waWxlclJldmlzaW9uID0gY29tcGlsZXJJbmZvICYmIGNvbXBpbGVySW5mb1swXSB8fCAxLFxuICAgICAgICBjdXJyZW50UmV2aXNpb24gPSBDT01QSUxFUl9SRVZJU0lPTjtcblxuICBpZiAoY29tcGlsZXJSZXZpc2lvbiAhPT0gY3VycmVudFJldmlzaW9uKSB7XG4gICAgaWYgKGNvbXBpbGVyUmV2aXNpb24gPCBjdXJyZW50UmV2aXNpb24pIHtcbiAgICAgIGNvbnN0IHJ1bnRpbWVWZXJzaW9ucyA9IFJFVklTSU9OX0NIQU5HRVNbY3VycmVudFJldmlzaW9uXSxcbiAgICAgICAgICAgIGNvbXBpbGVyVmVyc2lvbnMgPSBSRVZJU0lPTl9DSEFOR0VTW2NvbXBpbGVyUmV2aXNpb25dO1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYW4gb2xkZXIgdmVyc2lvbiBvZiBIYW5kbGViYXJzIHRoYW4gdGhlIGN1cnJlbnQgcnVudGltZS4gJyArXG4gICAgICAgICAgICAnUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIHJ1bnRpbWVWZXJzaW9ucyArICcpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVyVmVyc2lvbnMgKyAnKS4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIHRoZSBlbWJlZGRlZCB2ZXJzaW9uIGluZm8gc2luY2UgdGhlIHJ1bnRpbWUgZG9lc24ndCBrbm93IGFib3V0IHRoaXMgcmV2aXNpb24geWV0XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUZW1wbGF0ZSB3YXMgcHJlY29tcGlsZWQgd2l0aCBhIG5ld2VyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgK1xuICAgICAgICAgICAgJ1BsZWFzZSB1cGRhdGUgeW91ciBydW50aW1lIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVySW5mb1sxXSArICcpLicpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGVtcGxhdGUodGVtcGxhdGVTcGVjLCBlbnYpIHtcbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgaWYgKCFlbnYpIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGUnKTtcbiAgfVxuICBpZiAoIXRlbXBsYXRlU3BlYyB8fCAhdGVtcGxhdGVTcGVjLm1haW4pIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdVbmtub3duIHRlbXBsYXRlIG9iamVjdDogJyArIHR5cGVvZiB0ZW1wbGF0ZVNwZWMpO1xuICB9XG5cbiAgdGVtcGxhdGVTcGVjLm1haW4uZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjLm1haW5fZDtcblxuICAvLyBOb3RlOiBVc2luZyBlbnYuVk0gcmVmZXJlbmNlcyByYXRoZXIgdGhhbiBsb2NhbCB2YXIgcmVmZXJlbmNlcyB0aHJvdWdob3V0IHRoaXMgc2VjdGlvbiB0byBhbGxvd1xuICAvLyBmb3IgZXh0ZXJuYWwgdXNlcnMgdG8gb3ZlcnJpZGUgdGhlc2UgYXMgcHN1ZWRvLXN1cHBvcnRlZCBBUElzLlxuICBlbnYuVk0uY2hlY2tSZXZpc2lvbih0ZW1wbGF0ZVNwZWMuY29tcGlsZXIpO1xuXG4gIGZ1bmN0aW9uIGludm9rZVBhcnRpYWxXcmFwcGVyKHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgICBjb250ZXh0ID0gVXRpbHMuZXh0ZW5kKHt9LCBjb250ZXh0LCBvcHRpb25zLmhhc2gpO1xuICAgICAgaWYgKG9wdGlvbnMuaWRzKSB7XG4gICAgICAgIG9wdGlvbnMuaWRzWzBdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwYXJ0aWFsID0gZW52LlZNLnJlc29sdmVQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG4gICAgbGV0IHJlc3VsdCA9IGVudi5WTS5pbnZva2VQYXJ0aWFsLmNhbGwodGhpcywgcGFydGlhbCwgY29udGV4dCwgb3B0aW9ucyk7XG5cbiAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgZW52LmNvbXBpbGUpIHtcbiAgICAgIG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXSA9IGVudi5jb21waWxlKHBhcnRpYWwsIHRlbXBsYXRlU3BlYy5jb21waWxlck9wdGlvbnMsIGVudik7XG4gICAgICByZXN1bHQgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0oY29udGV4dCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgaWYgKG9wdGlvbnMuaW5kZW50KSB7XG4gICAgICAgIGxldCBsaW5lcyA9IHJlc3VsdC5zcGxpdCgnXFxuJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGluZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFsaW5lc1tpXSAmJiBpICsgMSA9PT0gbCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbGluZXNbaV0gPSBvcHRpb25zLmluZGVudCArIGxpbmVzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IGxpbmVzLmpvaW4oJ1xcbicpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEV4Y2VwdGlvbignVGhlIHBhcnRpYWwgJyArIG9wdGlvbnMubmFtZSArICcgY291bGQgbm90IGJlIGNvbXBpbGVkIHdoZW4gcnVubmluZyBpbiBydW50aW1lLW9ubHkgbW9kZScpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEp1c3QgYWRkIHdhdGVyXG4gIGxldCBjb250YWluZXIgPSB7XG4gICAgc3RyaWN0OiBmdW5jdGlvbihvYmosIG5hbWUpIHtcbiAgICAgIGlmICghKG5hbWUgaW4gb2JqKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdcIicgKyBuYW1lICsgJ1wiIG5vdCBkZWZpbmVkIGluICcgKyBvYmopO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9ialtuYW1lXTtcbiAgICB9LFxuICAgIGxvb2t1cDogZnVuY3Rpb24oZGVwdGhzLCBuYW1lKSB7XG4gICAgICBjb25zdCBsZW4gPSBkZXB0aHMubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZGVwdGhzW2ldICYmIGRlcHRoc1tpXVtuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGRlcHRoc1tpXVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFtYmRhOiBmdW5jdGlvbihjdXJyZW50LCBjb250ZXh0KSB7XG4gICAgICByZXR1cm4gdHlwZW9mIGN1cnJlbnQgPT09ICdmdW5jdGlvbicgPyBjdXJyZW50LmNhbGwoY29udGV4dCkgOiBjdXJyZW50O1xuICAgIH0sXG5cbiAgICBlc2NhcGVFeHByZXNzaW9uOiBVdGlscy5lc2NhcGVFeHByZXNzaW9uLFxuICAgIGludm9rZVBhcnRpYWw6IGludm9rZVBhcnRpYWxXcmFwcGVyLFxuXG4gICAgZm46IGZ1bmN0aW9uKGkpIHtcbiAgICAgIGxldCByZXQgPSB0ZW1wbGF0ZVNwZWNbaV07XG4gICAgICByZXQuZGVjb3JhdG9yID0gdGVtcGxhdGVTcGVjW2kgKyAnX2QnXTtcbiAgICAgIHJldHVybiByZXQ7XG4gICAgfSxcblxuICAgIHByb2dyYW1zOiBbXSxcbiAgICBwcm9ncmFtOiBmdW5jdGlvbihpLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgICBsZXQgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuICAgICAgICAgIGZuID0gdGhpcy5mbihpKTtcbiAgICAgIGlmIChkYXRhIHx8IGRlcHRocyB8fCBibG9ja1BhcmFtcyB8fCBkZWNsYXJlZEJsb2NrUGFyYW1zKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgICAgfSBlbHNlIGlmICghcHJvZ3JhbVdyYXBwZXIpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2dyYW1XcmFwcGVyO1xuICAgIH0sXG5cbiAgICBkYXRhOiBmdW5jdGlvbih2YWx1ZSwgZGVwdGgpIHtcbiAgICAgIHdoaWxlICh2YWx1ZSAmJiBkZXB0aC0tKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuX3BhcmVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuICAgIG1lcmdlOiBmdW5jdGlvbihwYXJhbSwgY29tbW9uKSB7XG4gICAgICBsZXQgb2JqID0gcGFyYW0gfHwgY29tbW9uO1xuXG4gICAgICBpZiAocGFyYW0gJiYgY29tbW9uICYmIChwYXJhbSAhPT0gY29tbW9uKSkge1xuICAgICAgICBvYmogPSBVdGlscy5leHRlbmQoe30sIGNvbW1vbiwgcGFyYW0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG5cbiAgICBub29wOiBlbnYuVk0ubm9vcCxcbiAgICBjb21waWxlckluZm86IHRlbXBsYXRlU3BlYy5jb21waWxlclxuICB9O1xuXG4gIGZ1bmN0aW9uIHJldChjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblxuICAgIHJldC5fc2V0dXAob3B0aW9ucyk7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwgJiYgdGVtcGxhdGVTcGVjLnVzZURhdGEpIHtcbiAgICAgIGRhdGEgPSBpbml0RGF0YShjb250ZXh0LCBkYXRhKTtcbiAgICB9XG4gICAgbGV0IGRlcHRocyxcbiAgICAgICAgYmxvY2tQYXJhbXMgPSB0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgPyBbXSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocykge1xuICAgICAgaWYgKG9wdGlvbnMuZGVwdGhzKSB7XG4gICAgICAgIGRlcHRocyA9IGNvbnRleHQgIT09IG9wdGlvbnMuZGVwdGhzWzBdID8gW2NvbnRleHRdLmNvbmNhdChvcHRpb25zLmRlcHRocykgOiBvcHRpb25zLmRlcHRocztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlcHRocyA9IFtjb250ZXh0XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBtYWluKGNvbnRleHQvKiwgb3B0aW9ucyovKSB7XG4gICAgICByZXR1cm4gJycgKyB0ZW1wbGF0ZVNwZWMubWFpbihjb250YWluZXIsIGNvbnRleHQsIGNvbnRhaW5lci5oZWxwZXJzLCBjb250YWluZXIucGFydGlhbHMsIGRhdGEsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgIH1cbiAgICBtYWluID0gZXhlY3V0ZURlY29yYXRvcnModGVtcGxhdGVTcGVjLm1haW4sIG1haW4sIGNvbnRhaW5lciwgb3B0aW9ucy5kZXB0aHMgfHwgW10sIGRhdGEsIGJsb2NrUGFyYW1zKTtcbiAgICByZXR1cm4gbWFpbihjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxuICByZXQuaXNUb3AgPSB0cnVlO1xuXG4gIHJldC5fc2V0dXAgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zLnBhcnRpYWwpIHtcbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMuaGVscGVycywgZW52LmhlbHBlcnMpO1xuXG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwpIHtcbiAgICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gY29udGFpbmVyLm1lcmdlKG9wdGlvbnMucGFydGlhbHMsIGVudi5wYXJ0aWFscyk7XG4gICAgICB9XG4gICAgICBpZiAodGVtcGxhdGVTcGVjLnVzZVBhcnRpYWwgfHwgdGVtcGxhdGVTcGVjLnVzZURlY29yYXRvcnMpIHtcbiAgICAgICAgY29udGFpbmVyLmRlY29yYXRvcnMgPSBjb250YWluZXIubWVyZ2Uob3B0aW9ucy5kZWNvcmF0b3JzLCBlbnYuZGVjb3JhdG9ycyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnRhaW5lci5oZWxwZXJzID0gb3B0aW9ucy5oZWxwZXJzO1xuICAgICAgY29udGFpbmVyLnBhcnRpYWxzID0gb3B0aW9ucy5wYXJ0aWFscztcbiAgICAgIGNvbnRhaW5lci5kZWNvcmF0b3JzID0gb3B0aW9ucy5kZWNvcmF0b3JzO1xuICAgIH1cbiAgfTtcblxuICByZXQuX2NoaWxkID0gZnVuY3Rpb24oaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgJiYgIWJsb2NrUGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdtdXN0IHBhc3MgYmxvY2sgcGFyYW1zJyk7XG4gICAgfVxuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlRGVwdGhzICYmICFkZXB0aHMpIHtcbiAgICAgIHRocm93IG5ldyBFeGNlcHRpb24oJ211c3QgcGFzcyBwYXJlbnQgZGVwdGhzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgdGVtcGxhdGVTcGVjW2ldLCBkYXRhLCAwLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgfTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBQcm9ncmFtKGNvbnRhaW5lciwgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpIHtcbiAgZnVuY3Rpb24gcHJvZyhjb250ZXh0LCBvcHRpb25zID0ge30pIHtcbiAgICBsZXQgY3VycmVudERlcHRocyA9IGRlcHRocztcbiAgICBpZiAoZGVwdGhzICYmIGNvbnRleHQgIT09IGRlcHRoc1swXSkge1xuICAgICAgY3VycmVudERlcHRocyA9IFtjb250ZXh0XS5jb25jYXQoZGVwdGhzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZm4oY29udGFpbmVyLFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLFxuICAgICAgICBvcHRpb25zLmRhdGEgfHwgZGF0YSxcbiAgICAgICAgYmxvY2tQYXJhbXMgJiYgW29wdGlvbnMuYmxvY2tQYXJhbXNdLmNvbmNhdChibG9ja1BhcmFtcyksXG4gICAgICAgIGN1cnJlbnREZXB0aHMpO1xuICB9XG5cbiAgcHJvZyA9IGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpO1xuXG4gIHByb2cucHJvZ3JhbSA9IGk7XG4gIHByb2cuZGVwdGggPSBkZXB0aHMgPyBkZXB0aHMubGVuZ3RoIDogMDtcbiAgcHJvZy5ibG9ja1BhcmFtcyA9IGRlY2xhcmVkQmxvY2tQYXJhbXMgfHwgMDtcbiAgcmV0dXJuIHByb2c7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIGlmICghcGFydGlhbCkge1xuICAgIGlmIChvcHRpb25zLm5hbWUgPT09ICdAcGFydGlhbC1ibG9jaycpIHtcbiAgICAgIHBhcnRpYWwgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFydGlhbCA9IG9wdGlvbnMucGFydGlhbHNbb3B0aW9ucy5uYW1lXTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIXBhcnRpYWwuY2FsbCAmJiAhb3B0aW9ucy5uYW1lKSB7XG4gICAgLy8gVGhpcyBpcyBhIGR5bmFtaWMgcGFydGlhbCB0aGF0IHJldHVybmVkIGEgc3RyaW5nXG4gICAgb3B0aW9ucy5uYW1lID0gcGFydGlhbDtcbiAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1twYXJ0aWFsXTtcbiAgfVxuICByZXR1cm4gcGFydGlhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGludm9rZVBhcnRpYWwocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICBvcHRpb25zLnBhcnRpYWwgPSB0cnVlO1xuICBpZiAob3B0aW9ucy5pZHMpIHtcbiAgICBvcHRpb25zLmRhdGEuY29udGV4dFBhdGggPSBvcHRpb25zLmlkc1swXSB8fCBvcHRpb25zLmRhdGEuY29udGV4dFBhdGg7XG4gIH1cblxuICBsZXQgcGFydGlhbEJsb2NrO1xuICBpZiAob3B0aW9ucy5mbiAmJiBvcHRpb25zLmZuICE9PSBub29wKSB7XG4gICAgb3B0aW9ucy5kYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICBwYXJ0aWFsQmxvY2sgPSBvcHRpb25zLmRhdGFbJ3BhcnRpYWwtYmxvY2snXSA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAocGFydGlhbEJsb2NrLnBhcnRpYWxzKSB7XG4gICAgICBvcHRpb25zLnBhcnRpYWxzID0gVXRpbHMuZXh0ZW5kKHt9LCBvcHRpb25zLnBhcnRpYWxzLCBwYXJ0aWFsQmxvY2sucGFydGlhbHMpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQgJiYgcGFydGlhbEJsb2NrKSB7XG4gICAgcGFydGlhbCA9IHBhcnRpYWxCbG9jaztcbiAgfVxuXG4gIGlmIChwYXJ0aWFsID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXhjZXB0aW9uKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgZm91bmQnKTtcbiAgfSBlbHNlIGlmIChwYXJ0aWFsIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gcGFydGlhbChjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbm9vcCgpIHsgcmV0dXJuICcnOyB9XG5cbmZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcbiAgaWYgKCFkYXRhIHx8ICEoJ3Jvb3QnIGluIGRhdGEpKSB7XG4gICAgZGF0YSA9IGRhdGEgPyBjcmVhdGVGcmFtZShkYXRhKSA6IHt9O1xuICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGV4ZWN1dGVEZWNvcmF0b3JzKGZuLCBwcm9nLCBjb250YWluZXIsIGRlcHRocywgZGF0YSwgYmxvY2tQYXJhbXMpIHtcbiAgaWYgKGZuLmRlY29yYXRvcikge1xuICAgIGxldCBwcm9wcyA9IHt9O1xuICAgIHByb2cgPSBmbi5kZWNvcmF0b3IocHJvZywgcHJvcHMsIGNvbnRhaW5lciwgZGVwdGhzICYmIGRlcHRoc1swXSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocyk7XG4gICAgVXRpbHMuZXh0ZW5kKHByb2csIHByb3BzKTtcbiAgfVxuICByZXR1cm4gcHJvZztcbn1cbiJdfQ==


/***/ },
/* 35 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {/* global window */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	    return Handlebars;
	  };
	};

	module.exports = exports['default'];
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYi9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O3FCQUNlLFVBQVMsVUFBVSxFQUFFOztBQUVsQyxNQUFJLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLEdBQUcsTUFBTSxHQUFHLE1BQU07TUFDdEQsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O0FBRWxDLFlBQVUsQ0FBQyxVQUFVLEdBQUcsWUFBVztBQUNqQyxRQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO0FBQ2xDLFVBQUksQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDO0tBQy9CO0FBQ0QsV0FBTyxVQUFVLENBQUM7R0FDbkIsQ0FBQztDQUNIIiwiZmlsZSI6Im5vLWNvbmZsaWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZ2xvYmFsIHdpbmRvdyAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBsZXQgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChyb290LkhhbmRsZWJhcnMgPT09IEhhbmRsZWJhcnMpIHtcbiAgICAgIHJvb3QuSGFuZGxlYmFycyA9ICRIYW5kbGViYXJzO1xuICAgIH1cbiAgICByZXR1cm4gSGFuZGxlYmFycztcbiAgfTtcbn1cbiJdfQ==

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(17);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

	  return "  <tr>\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.graded : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
	    + "      <td style=\"padding-top: 2%; color:#777\">"
	    + alias4(((helper = (helper = helpers.autoPass || (depth0 != null ? depth0.autoPass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"autoPass","hash":{},"data":data}) : helper)))
	    + "</td>\n      <td><h4>"
	    + alias4(((helper = (helper = helpers.createdAt || (depth0 != null ? depth0.createdAt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"createdAt","hash":{},"data":data}) : helper)))
	    + "</h4></td>\n\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.currentUserOwned : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
	    + "  </tr>\n";
	},"2":function(container,depth0,helpers,partials,data) {
	    var stack1;

	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.pass : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
	},"3":function(container,depth0,helpers,partials,data) {
	    return "      <td id=\"grade\" style=\"padding-top: 2%\">\n        <span style=\"color:green\" class=\"glyphicon glyphicon-thumbs-up\"></span>\n      </td>\n";
	},"5":function(container,depth0,helpers,partials,data) {
	    return "      <td id=\"grade\" style=\"padding-top: 2%\">\n        <span style=\"color:red\" class=\"glyphicon glyphicon-thumbs-down\"></span>\n      </td>\n";
	},"7":function(container,depth0,helpers,partials,data) {
	    return "      <td id=\"grade\" style=\"padding-top: 2%\">\n        <span style=\"color:#000\" class=\"glyphicon glyphicon-hourglass\"></span> Awaiting Grade\n      </td>\n";
	},"9":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

	  return "      <td style=\"padding-top: 2%;\">\n        <span style=\"color:#777\" class=\"glyphicon glyphicon-user\"></span> You\n      </td>\n      <td style=\"padding-top: 2%\">\n        <a href="
	    + alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
	    + " target=\"_blank\"><span style=\"color:black\" class=\"glyphicon glyphicon-download-alt\"></span></a>\n      </td>\n      <td style=\"padding-top: 2%\">\n        <span style=\"color:black\" id=\"resubmit\" class=\"glyphicon glyphicon-share\" data-id="
	    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
	    + "></span>\n      </td>\n      <td style=\"padding-top: 2%\">\n        <span style=\"color:black\" id=\"delete-submission\" class=\"glyphicon glyphicon-trash\" data-id="
	    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
	    + "></span>\n      </td>\n";
	},"11":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

	  return "      <td style=\"padding-top: 2%; color:#000\">\n        <span style=\"color:#777\" class=\"glyphicon glyphicon-user\"></span> "
	    + alias4(((helper = (helper = helpers.ownerName || (depth0 != null ? depth0.ownerName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ownerName","hash":{},"data":data}) : helper)))
	    + "\n      </td>\n      <td style=\"padding-top: 2%\">\n        <span style=\"color:black; opacity:.2\" class=\"glyphicon glyphicon-download-alt\"></span>\n      </td>\n      <td style=\"padding-top: 2%\">\n        <span style=\"color:black; opacity:.2\" class=\"glyphicon glyphicon-share\"></span>\n      </td>\n      <td data-id="
	    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
	    + " style=\"padding-top: 2%\">\n        <span style=\"color:black; opacity:.2\" class=\"glyphicon glyphicon-trash\"></span>\n      </td>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1;

	  return "<div class=\"my-submissions\">\n<div class=\"content\">\n  <br />\n<div class=\"col-sm-12\">\n  <h1 style=\"margin: 25px auto; font-weight:300; color:#777;\">Solution Files</h1>\n  <table class=\"table table-hover\" id=\"item-table\">\n    <tr>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Grade</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Auto Pass</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Date Submitted</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Submitted By</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Download</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Resubmit</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Delete</h4></td>\n    </tr>\n    <tbody>\n"
	    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.submissions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n</tbody>\n  </table>\n</div>\n</div>\n</div>\n";
	},"useData":true});

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(17);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

	  return "<div class=\"content\">\n  <div class=\"single-challenge\">\n    <br />\n    <h1>"
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.challenge : depth0)) != null ? stack1.name : stack1), depth0))
	    + "</h1>\n    <div id=\"challenge-info\">\n    <h5 style=\"color:#777\">Language: "
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.challenge : depth0)) != null ? stack1.language : stack1), depth0))
	    + "</h5>\n    <h4 style=\"color:#000; line-height:1.5\">"
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.challenge : depth0)) != null ? stack1.description : stack1), depth0))
	    + "</h4>\n    </div>\n    <hr>\n    <div class=\"col-sm-12\">\n      <div id=\"submit-success\"></div>\n      <div class=\"upload-container\">\n      <h3 style=\"color:#777; font-weight:300\">Submit A Solution</h3>\n      <form id=\"upload-form\" enctype=\"multipart/form-data\">\n        <input id=\"fileinput\" name=\"upload[file]\" type=\"file\" class=\"file-loading\" data-allowed-file-extensions='[\"js\"]'>\n        <input type=\"hidden\" name=\"upload[challenge_id]\" value="
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.challenge : depth0)) != null ? stack1._id : stack1), depth0))
	    + ">\n        <input type=\"hidden\" name=\"upload[_challengeOwner]\" value="
	    + alias2(alias1(((stack1 = (depth0 != null ? depth0.challenge : depth0)) != null ? stack1._owner : stack1), depth0))
	    + ">\n        <input id=\"set-challengeName\" type=\"hidden\" name=\"upload[challengeName]\">\n      </form>\n    </div>\n    <h5 style=\"font-weight:300; color:#777\">Submission Files must be .js & less than 50 lines. Do not include 'use strict' in your file.</h5>\n  </div>\n</div>\n</div\n      <div id=\"submit-success\"></div>\n\n\n        <div id=\"challenge-submission-div\">\n        </div>\n";
	},"useData":true});

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(17);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

	  return "  <tr>\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.graded : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
	    + "      <td style=\"padding-top: 2%; color:#777\">"
	    + alias4(((helper = (helper = helpers.autoPass || (depth0 != null ? depth0.autoPass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"autoPass","hash":{},"data":data}) : helper)))
	    + "</td>\n      <td><h4>"
	    + alias4(((helper = (helper = helpers.createdAt || (depth0 != null ? depth0.createdAt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"createdAt","hash":{},"data":data}) : helper)))
	    + "</h4></td>\n\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.currentUserOwned : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.program(11, data, 0),"data":data})) != null ? stack1 : "")
	    + "  </tr>\n";
	},"2":function(container,depth0,helpers,partials,data) {
	    var stack1;

	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.pass : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
	},"3":function(container,depth0,helpers,partials,data) {
	    return "      <td id=\"grade\" style=\"padding-top: 2%\">\n        <span style=\"color:green\" class=\"glyphicon glyphicon-thumbs-up\"></span>\n      </td>\n";
	},"5":function(container,depth0,helpers,partials,data) {
	    return "      <td id=\"grade\" style=\"padding-top: 2%\">\n        <span style=\"color:red\" class=\"glyphicon glyphicon-thumbs-down\"></span>\n      </td>\n";
	},"7":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

	  return "      <td style=\"padding-top: 2%\">\n        <button type=\"button\" class=\"btn btn-default btn-sm owner-grade\"\n        data-html=\"true\" data-toggle=\"popover\" data-id="
	    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
	    + "\n        data-placement=\"right\" data-content='<form id=\"grade-form\"><select name=\"passfail\">\n        <option selected>Grade this Solution</option>\n        <option value=\"pass\">Pass</option>\n        <option value=\"fail\">Fail</option>\n      </select>\n      <input name=\"submissionId\" type=\"hidden\" value="
	    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
	    + ">\n      <button type=\"submit\" class=\"btn btn-default btn-sm\">Grade</button>\n    </form>'>\n          <span style=\"color:#000\" class=\"glyphicon glyphicon-edit\"></span> Grade Submission\n        </button>\n      </td>\n";
	},"9":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

	  return "      <td style=\"padding-top: 2%;\">\n        <span style=\"color:#777\" class=\"glyphicon glyphicon-user\"></span> You\n      </td>\n      <td style=\"padding-top: 2%\">\n        <a href="
	    + alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
	    + " target=\"_blank\"><span style=\"color:black\" class=\"glyphicon glyphicon-download-alt\"></span></a>\n      </td>\n      <td style=\"padding-top: 2%\">\n        <span style=\"color:black\" id=\"resubmit\" class=\"glyphicon glyphicon-share\" data-id="
	    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
	    + "></span>\n      </td>\n      <td style=\"padding-top: 2%\">\n        <span style=\"color:black\" id=\"delete-submission\" class=\"glyphicon glyphicon-trash\" data-id="
	    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
	    + "></span>\n      </td>\n";
	},"11":function(container,depth0,helpers,partials,data) {
	    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

	  return "      <td style=\"padding-top: 2%; color:#000\">\n        <span style=\"color:#777\" class=\"glyphicon glyphicon-user\"></span> "
	    + alias4(((helper = (helper = helpers.ownerName || (depth0 != null ? depth0.ownerName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"ownerName","hash":{},"data":data}) : helper)))
	    + "\n      </td>\n      <td style=\"padding-top: 2%\">\n        <a href="
	    + alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
	    + " target=\"_blank\"><span style=\"color:black\" class=\"glyphicon glyphicon-download-alt\"></span></a>\n      </td>\n      <td style=\"padding-top: 2%\">\n        <span style=\"color:black; opacity:.2\" class=\"glyphicon glyphicon-share\"></span>\n      </td>\n      <td data-id="
	    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
	    + " style=\"padding-top: 2%\">\n        <span style=\"color:black; opacity:.2\" class=\"glyphicon glyphicon-trash\"></span>\n      </td>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1;

	  return "<div class=\"my-submissions\">\n<div class=\"content\">\n  <br />\n<div class=\"col-sm-12\">\n  <h1 style=\"margin: 25px auto; font-weight:300; color:#777;\">Solution Files</h1>\n  <table class=\"table table-hover\" id=\"item-table\">\n    <tr>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Grade</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Auto Pass</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Date Submitted</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Submitted By</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Download</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Resubmit</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Delete</h4></td>\n    </tr>\n    <tbody>\n"
	    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.submissions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n</tbody>\n  </table>\n</div>\n</div>\n</div>\n";
	},"useData":true});

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var getFormFields = __webpack_require__(7);
	var api = __webpack_require__(40);
	var ui = __webpack_require__(41);
	var fileinput = __webpack_require__(15);

	var onViewUserSubmissions = function onViewUserSubmissions(event) {
	  event.preventDefault();
	  api.viewUserSubmissions().done(ui.viewSubmissionsSuccess).fail(ui.failure);
	};

	var onViewSubmissions = function onViewSubmissions(event) {
	  event.preventDefault();
	  console.log('viewing submissions');
	  $('.jumbotron').hide();
	  $('#contents').empty();
	  api.viewAllSubmissions().done(ui.viewSubmissionsSuccess).fail(ui.failure);
	};

	var onSubmitUploadForm = function onSubmitUploadForm(event) {
	  event.preventDefault();
	  var data = new FormData(event.target);
	  api.createSubmission(data).done(ui.submissionSuccess).fail(ui.failure);
	};

	var onDeleteSubmission = function onDeleteSubmission(event) {
	  event.preventDefault();
	  var id = $(event.target).data("id");
	  api.deleteSubmission(id).done(ui.deleteSubmissionSuccess).then(function () {
	    return $(event.target).parent().parent().empty();
	  }).fail(ui.failure);
	};

	var onResubmit = function onResubmit(event) {
	  event.preventDefault();
	  var id = $(event.target).data("id");
	  $('#resubmitSubmissionId').val(id);
	  $('#resubmitModal').modal('show');
	};

	var onSubmitReUpload = function onSubmitReUpload(event) {
	  event.preventDefault();
	  var data = getFormFields(event.target);
	  var id = data.resubmitSubmissionId;
	  console.log(id);
	  var formData = new FormData(event.target);
	  console.log('hi');
	  api.reSubmission(formData, id).done(ui.reSubmissionSuccess).fail(ui.failure);
	};

	var addHandlers = function addHandlers() {
	  $('#view-submissions').on('click', onViewSubmissions);
	  $('#view-my-submissions').on('click', onViewUserSubmissions);
	  $('#view-all-submissions').on('click', onViewSubmissions);
	  $('#reupload-form').on('submit', onSubmitReUpload);
	  $('#fileinput-resubmit').fileinput({
	    maxFileSize: 1000,
	    allowedFileExtensions: ['js']
	  });
	  $(document).on('click', '#resubmit', onResubmit);
	  $(document).on('submit', '#upload-form', onSubmitUploadForm);
	  $(document).on('click', '#delete-submission', onDeleteSubmission);
	};

	module.exports = {
	  onViewSubmissions: onViewSubmissions,
	  onViewUserSubmissions: onViewUserSubmissions,
	  onSubmitUploadForm: onSubmitUploadForm,
	  addHandlers: addHandlers,
	  onDeleteSubmission: onDeleteSubmission,
	  onResubmit: onResubmit,
	  onSubmitReUpload: onSubmitReUpload
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var app = __webpack_require__(8);

	var viewAllSubmissions = function viewAllSubmissions() {
	  return $.ajax({
	    url: app.host + '/submissions',
	    method: "GET",
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    }
	  });
	};

	var show = function show(id) {
	  return $.ajax({
	    url: app.host + '/submissions/' + id,
	    method: "GET",
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    }
	  });
	};

	var viewUserSubmissions = function viewUserSubmissions() {
	  return $.ajax({
	    url: app.host + '/user-submissions',
	    method: "GET",
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    }
	  });
	};

	var createSubmission = function createSubmission(data) {
	  return $.ajax({
	    method: 'POST',
	    url: app.host + '/submissions',
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    },
	    data: data,
	    contentType: false,
	    processData: false
	  });
	};

	var reSubmission = function reSubmission(data, id) {
	  return $.ajax({
	    method: 'PATCH',
	    url: app.host + '/submissions/' + id,
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    },
	    data: data,
	    contentType: false,
	    processData: false
	  });
	};

	var deleteSubmission = function deleteSubmission(id) {
	  return $.ajax({
	    url: app.host + '/submissions/' + id,
	    method: "DELETE",
	    headers: {
	      Authorization: 'Token token=' + app.user.token
	    }
	  });
	};

	module.exports = {
	  viewAllSubmissions: viewAllSubmissions,
	  show: show,
	  viewUserSubmissions: viewUserSubmissions,
	  createSubmission: createSubmission,
	  deleteSubmission: deleteSubmission,
	  reSubmission: reSubmission
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';

	var challengeApi = __webpack_require__(13);
	var challengeUi = __webpack_require__(14);

	var multipleSubmissionsTemplate = __webpack_require__(42);

	var success = function success(data) {
	  console.log('data in generic success handler: ', data);
	};

	var failure = function failure(error) {
	  console.error(error);
	};

	var viewSubmissionsSuccess = function viewSubmissionsSuccess(data) {
	  $('.jumbotron').hide();
	  $('#contents').empty();
	  data.submissions.forEach(function (e) {
	    return e.createdAt = e.createdAt.split('T')[0];
	  });
	  $('#contents').html(multipleSubmissionsTemplate(data));
	};

	var submissionSuccess = function submissionSuccess(data) {
	  var id = data.submission._challenge;
	  $('.fileinput-remove-button').trigger('click');
	  $('.upload-container').hide();
	  $('#submit-success').html('<h4 style="color:green"><span style="color:green" class="glyphicon glyphicon-folder-open"></span>&nbsp; File successfully submitted!</h5>').delay(1200).fadeOut();
	  $('.upload-container').delay(1200).fadeIn();
	  challengeApi.showChallenge(id)
	  // .done((data) => challengeApi.incrementSubmissionCount(data)
	  .then(function () {
	    challengeApi.showChallengeSubmissions(id).done(challengeUi.appendSubmissionsSuccess).fail(challengeUi.failure);
	  })
	  // .fail(challengeUi.failure)
	  // )
	  .fail(challengeUi.failure);
	};

	var deleteSubmissionSuccess = function deleteSubmissionSuccess(data) {
	  var id = data.responseSubmission._challenge;
	  challengeApi.showChallenge(id)
	  // .then((data) => challengeApi.decrementSubmissionCount(data))
	  .fail(challengeUi.failure);
	};

	var reloadSubmissions = function reloadSubmissions(data) {
	  window.setTimeout(function () {
	    var id = data.submission._challenge;
	    var owner = data.submission._challengeOwner;
	    challengeUi.checkChallengeOwner(owner);

	    challengeApi.showChallenge(id).done(challengeUi.showChallengeSuccess).then(function () {
	      challengeApi.showChallengeSubmissions(id).done(challengeUi.appendSubmissionsSuccess).fail(challengeUi.failure);
	    }).fail(challengeUi.failure);
	  }, 1500);
	};

	var reSubmissionSuccess = function reSubmissionSuccess(data) {
	  $('.fileinput-remove-button').trigger('click');
	  $('#resubmitModal').modal('hide');
	  $('#submit-success').html('<h4 style="color:green; font-weight:300"><span style="color:green" class="glyphicon glyphicon-folder-open"></span>&nbsp; File successfully submitted!</h5>').delay(1400).fadeOut();
	  reloadSubmissions(data);
	};

	module.exports = {
	  success: success,
	  failure: failure,
	  viewSubmissionsSuccess: viewSubmissionsSuccess,
	  submissionSuccess: submissionSuccess,
	  deleteSubmissionSuccess: deleteSubmissionSuccess,
	  reSubmissionSuccess: reSubmissionSuccess
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(17);
	function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
	    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

	  return "  <tr>\n"
	    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.graded : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
	    + "\n      <td style=\"padding-top: 2%; color:#777\">"
	    + alias4(((helper = (helper = helpers.autoPass || (depth0 != null ? depth0.autoPass : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"autoPass","hash":{},"data":data}) : helper)))
	    + "</td>\n      <td id=\"go-to-challenge\" data-id="
	    + alias4(((helper = (helper = helpers._challenge || (depth0 != null ? depth0._challenge : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_challenge","hash":{},"data":data}) : helper)))
	    + "><h4>"
	    + alias4(((helper = (helper = helpers.challengeName || (depth0 != null ? depth0.challengeName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"challengeName","hash":{},"data":data}) : helper)))
	    + "</h4></td>\n      <td><h4>"
	    + alias4(((helper = (helper = helpers.createdAt || (depth0 != null ? depth0.createdAt : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"createdAt","hash":{},"data":data}) : helper)))
	    + "</h4></td>\n      <td style=\"padding-top: 2%\">\n        <a href="
	    + alias4(((helper = (helper = helpers.location || (depth0 != null ? depth0.location : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"location","hash":{},"data":data}) : helper)))
	    + " target=\"_blank\"><span style=\"color:black\" class=\"glyphicon glyphicon-download-alt\"></span></a>\n      </td>\n      <td style=\"padding-top: 2%\">\n        <span style=\"color:black\" id=\"resubmit\" class=\"glyphicon glyphicon-share\" data-id="
	    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
	    + "></span>\n      </td>\n      <td style=\"padding-top: 2%\">\n        <span style=\"color:black\" id=\"delete-submission\" class=\"glyphicon glyphicon-trash\" data-id="
	    + alias4(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"_id","hash":{},"data":data}) : helper)))
	    + "></span>\n      </td>\n  </tr>\n";
	},"2":function(container,depth0,helpers,partials,data) {
	    var stack1;

	  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.pass : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
	},"3":function(container,depth0,helpers,partials,data) {
	    return "      <td id=\"grade\" style=\"padding-top: 2%\">\n        <span style=\"color:green\" class=\"glyphicon glyphicon-thumbs-up\"></span>\n      </td>\n";
	},"5":function(container,depth0,helpers,partials,data) {
	    return "      <td id=\"grade\" style=\"padding-top: 2%\">\n        <span style=\"color:red\" class=\"glyphicon glyphicon-thumbs-down\"></span>\n      </td>\n";
	},"7":function(container,depth0,helpers,partials,data) {
	    return "      <td id=\"grade\" style=\"padding-top: 2%\">\n        <span style=\"color:#000\" class=\"glyphicon glyphicon-hourglass\"></span> Awaiting Grade\n      </td>\n";
	},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
	    var stack1;

	  return "<div class=\"my-submissions\">\n<div class=\"content\">\n  <br />\n<div class=\"col-sm-12\">\n  <h1 style=\"margin: 25px auto; font-weight:300; color:#777;\">My Solution Files</h1>\n  <h4 style=\"font-weight:300; color:#777\">Manage Submissions</h4>\n  <table class=\"table table-hover\" id=\"item-table\">\n    <tr>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Grade</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Auto Pass</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Challenge Name</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Date Submitted</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Download</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Resubmit</h4></td>\n      <td><h4 style=\"color:#000; text-decoration: underline\">Delete</h4></td>\n    </tr>\n    <tbody>\n"
	    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.submissions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
	    + "\n</tbody>\n  </table>\n</div>\n</div>\n</div>\n";
	},"useData":true});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(44);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(51)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./index.scss", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(45)();
	// imports


	// module
	exports.push([module.id, "@charset \"UTF-8\";\n/*!\n * Bootstrap v3.3.6 (http://getbootstrap.com)\n * Copyright 2011-2015 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%; }\n\nbody {\n  margin: 0; }\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block; }\n\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline; }\n\naudio:not([controls]) {\n  display: none;\n  height: 0; }\n\n[hidden],\ntemplate {\n  display: none; }\n\na {\n  background-color: transparent; }\n\na:active,\na:hover {\n  outline: 0; }\n\nabbr[title] {\n  border-bottom: 1px dotted; }\n\nb,\nstrong {\n  font-weight: bold; }\n\ndfn {\n  font-style: italic; }\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\nmark {\n  background: #ff0;\n  color: #000; }\n\nsmall {\n  font-size: 80%; }\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsup {\n  top: -0.5em; }\n\nsub {\n  bottom: -0.25em; }\n\nimg {\n  border: 0; }\n\nsvg:not(:root) {\n  overflow: hidden; }\n\nfigure {\n  margin: 1em 40px; }\n\nhr {\n  box-sizing: content-box;\n  height: 0; }\n\npre {\n  overflow: auto; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em; }\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  color: inherit;\n  font: inherit;\n  margin: 0; }\n\nbutton {\n  overflow: visible; }\n\nbutton,\nselect {\n  text-transform: none; }\n\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer; }\n\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default; }\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0; }\n\ninput {\n  line-height: normal; }\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0; }\n\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: textfield;\n  box-sizing: content-box; }\n\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em; }\n\nlegend {\n  border: 0;\n  padding: 0; }\n\ntextarea {\n  overflow: auto; }\n\noptgroup {\n  font-weight: bold; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\ntd,\nth {\n  padding: 0; }\n\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    background: transparent !important;\n    color: #000 !important;\n    box-shadow: none !important;\n    text-shadow: none !important; }\n  a,\n  a:visited {\n    text-decoration: underline; }\n  a[href]:after {\n    content: \" (\" attr(href) \")\"; }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\"; }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\"; }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid; }\n  thead {\n    display: table-header-group; }\n  tr,\n  img {\n    page-break-inside: avoid; }\n  img {\n    max-width: 100% !important; }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3; }\n  h2,\n  h3 {\n    page-break-after: avoid; }\n  .navbar {\n    display: none; }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important; }\n  .label {\n    border: 1px solid #000; }\n  .table {\n    border-collapse: collapse !important; }\n    .table td,\n    .table th {\n      background-color: #fff !important; }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important; } }\n\n@font-face {\n  font-family: 'Glyphicons Halflings';\n  src: url(" + __webpack_require__(46) + ");\n  src: url(" + __webpack_require__(46) + "?#iefix) format(\"embedded-opentype\"), url(" + __webpack_require__(47) + ") format(\"woff2\"), url(" + __webpack_require__(48) + ") format(\"woff\"), url(" + __webpack_require__(49) + ") format(\"truetype\"), url(" + __webpack_require__(50) + "#glyphicons_halflingsregular) format(\"svg\"); }\n\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.glyphicon-asterisk:before {\n  content: \"*\"; }\n\n.glyphicon-plus:before {\n  content: \"+\"; }\n\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20AC\"; }\n\n.glyphicon-minus:before {\n  content: \"\\2212\"; }\n\n.glyphicon-cloud:before {\n  content: \"\\2601\"; }\n\n.glyphicon-envelope:before {\n  content: \"\\2709\"; }\n\n.glyphicon-pencil:before {\n  content: \"\\270F\"; }\n\n.glyphicon-glass:before {\n  content: \"\\E001\"; }\n\n.glyphicon-music:before {\n  content: \"\\E002\"; }\n\n.glyphicon-search:before {\n  content: \"\\E003\"; }\n\n.glyphicon-heart:before {\n  content: \"\\E005\"; }\n\n.glyphicon-star:before {\n  content: \"\\E006\"; }\n\n.glyphicon-star-empty:before {\n  content: \"\\E007\"; }\n\n.glyphicon-user:before {\n  content: \"\\E008\"; }\n\n.glyphicon-film:before {\n  content: \"\\E009\"; }\n\n.glyphicon-th-large:before {\n  content: \"\\E010\"; }\n\n.glyphicon-th:before {\n  content: \"\\E011\"; }\n\n.glyphicon-th-list:before {\n  content: \"\\E012\"; }\n\n.glyphicon-ok:before {\n  content: \"\\E013\"; }\n\n.glyphicon-remove:before {\n  content: \"\\E014\"; }\n\n.glyphicon-zoom-in:before {\n  content: \"\\E015\"; }\n\n.glyphicon-zoom-out:before {\n  content: \"\\E016\"; }\n\n.glyphicon-off:before {\n  content: \"\\E017\"; }\n\n.glyphicon-signal:before {\n  content: \"\\E018\"; }\n\n.glyphicon-cog:before {\n  content: \"\\E019\"; }\n\n.glyphicon-trash:before {\n  content: \"\\E020\"; }\n\n.glyphicon-home:before {\n  content: \"\\E021\"; }\n\n.glyphicon-file:before {\n  content: \"\\E022\"; }\n\n.glyphicon-time:before {\n  content: \"\\E023\"; }\n\n.glyphicon-road:before {\n  content: \"\\E024\"; }\n\n.glyphicon-download-alt:before {\n  content: \"\\E025\"; }\n\n.glyphicon-download:before {\n  content: \"\\E026\"; }\n\n.glyphicon-upload:before {\n  content: \"\\E027\"; }\n\n.glyphicon-inbox:before {\n  content: \"\\E028\"; }\n\n.glyphicon-play-circle:before {\n  content: \"\\E029\"; }\n\n.glyphicon-repeat:before {\n  content: \"\\E030\"; }\n\n.glyphicon-refresh:before {\n  content: \"\\E031\"; }\n\n.glyphicon-list-alt:before {\n  content: \"\\E032\"; }\n\n.glyphicon-lock:before {\n  content: \"\\E033\"; }\n\n.glyphicon-flag:before {\n  content: \"\\E034\"; }\n\n.glyphicon-headphones:before {\n  content: \"\\E035\"; }\n\n.glyphicon-volume-off:before {\n  content: \"\\E036\"; }\n\n.glyphicon-volume-down:before {\n  content: \"\\E037\"; }\n\n.glyphicon-volume-up:before {\n  content: \"\\E038\"; }\n\n.glyphicon-qrcode:before {\n  content: \"\\E039\"; }\n\n.glyphicon-barcode:before {\n  content: \"\\E040\"; }\n\n.glyphicon-tag:before {\n  content: \"\\E041\"; }\n\n.glyphicon-tags:before {\n  content: \"\\E042\"; }\n\n.glyphicon-book:before {\n  content: \"\\E043\"; }\n\n.glyphicon-bookmark:before {\n  content: \"\\E044\"; }\n\n.glyphicon-print:before {\n  content: \"\\E045\"; }\n\n.glyphicon-camera:before {\n  content: \"\\E046\"; }\n\n.glyphicon-font:before {\n  content: \"\\E047\"; }\n\n.glyphicon-bold:before {\n  content: \"\\E048\"; }\n\n.glyphicon-italic:before {\n  content: \"\\E049\"; }\n\n.glyphicon-text-height:before {\n  content: \"\\E050\"; }\n\n.glyphicon-text-width:before {\n  content: \"\\E051\"; }\n\n.glyphicon-align-left:before {\n  content: \"\\E052\"; }\n\n.glyphicon-align-center:before {\n  content: \"\\E053\"; }\n\n.glyphicon-align-right:before {\n  content: \"\\E054\"; }\n\n.glyphicon-align-justify:before {\n  content: \"\\E055\"; }\n\n.glyphicon-list:before {\n  content: \"\\E056\"; }\n\n.glyphicon-indent-left:before {\n  content: \"\\E057\"; }\n\n.glyphicon-indent-right:before {\n  content: \"\\E058\"; }\n\n.glyphicon-facetime-video:before {\n  content: \"\\E059\"; }\n\n.glyphicon-picture:before {\n  content: \"\\E060\"; }\n\n.glyphicon-map-marker:before {\n  content: \"\\E062\"; }\n\n.glyphicon-adjust:before {\n  content: \"\\E063\"; }\n\n.glyphicon-tint:before {\n  content: \"\\E064\"; }\n\n.glyphicon-edit:before {\n  content: \"\\E065\"; }\n\n.glyphicon-share:before {\n  content: \"\\E066\"; }\n\n.glyphicon-check:before {\n  content: \"\\E067\"; }\n\n.glyphicon-move:before {\n  content: \"\\E068\"; }\n\n.glyphicon-step-backward:before {\n  content: \"\\E069\"; }\n\n.glyphicon-fast-backward:before {\n  content: \"\\E070\"; }\n\n.glyphicon-backward:before {\n  content: \"\\E071\"; }\n\n.glyphicon-play:before {\n  content: \"\\E072\"; }\n\n.glyphicon-pause:before {\n  content: \"\\E073\"; }\n\n.glyphicon-stop:before {\n  content: \"\\E074\"; }\n\n.glyphicon-forward:before {\n  content: \"\\E075\"; }\n\n.glyphicon-fast-forward:before {\n  content: \"\\E076\"; }\n\n.glyphicon-step-forward:before {\n  content: \"\\E077\"; }\n\n.glyphicon-eject:before {\n  content: \"\\E078\"; }\n\n.glyphicon-chevron-left:before {\n  content: \"\\E079\"; }\n\n.glyphicon-chevron-right:before {\n  content: \"\\E080\"; }\n\n.glyphicon-plus-sign:before {\n  content: \"\\E081\"; }\n\n.glyphicon-minus-sign:before {\n  content: \"\\E082\"; }\n\n.glyphicon-remove-sign:before {\n  content: \"\\E083\"; }\n\n.glyphicon-ok-sign:before {\n  content: \"\\E084\"; }\n\n.glyphicon-question-sign:before {\n  content: \"\\E085\"; }\n\n.glyphicon-info-sign:before {\n  content: \"\\E086\"; }\n\n.glyphicon-screenshot:before {\n  content: \"\\E087\"; }\n\n.glyphicon-remove-circle:before {\n  content: \"\\E088\"; }\n\n.glyphicon-ok-circle:before {\n  content: \"\\E089\"; }\n\n.glyphicon-ban-circle:before {\n  content: \"\\E090\"; }\n\n.glyphicon-arrow-left:before {\n  content: \"\\E091\"; }\n\n.glyphicon-arrow-right:before {\n  content: \"\\E092\"; }\n\n.glyphicon-arrow-up:before {\n  content: \"\\E093\"; }\n\n.glyphicon-arrow-down:before {\n  content: \"\\E094\"; }\n\n.glyphicon-share-alt:before {\n  content: \"\\E095\"; }\n\n.glyphicon-resize-full:before {\n  content: \"\\E096\"; }\n\n.glyphicon-resize-small:before {\n  content: \"\\E097\"; }\n\n.glyphicon-exclamation-sign:before {\n  content: \"\\E101\"; }\n\n.glyphicon-gift:before {\n  content: \"\\E102\"; }\n\n.glyphicon-leaf:before {\n  content: \"\\E103\"; }\n\n.glyphicon-fire:before {\n  content: \"\\E104\"; }\n\n.glyphicon-eye-open:before {\n  content: \"\\E105\"; }\n\n.glyphicon-eye-close:before {\n  content: \"\\E106\"; }\n\n.glyphicon-warning-sign:before {\n  content: \"\\E107\"; }\n\n.glyphicon-plane:before {\n  content: \"\\E108\"; }\n\n.glyphicon-calendar:before {\n  content: \"\\E109\"; }\n\n.glyphicon-random:before {\n  content: \"\\E110\"; }\n\n.glyphicon-comment:before {\n  content: \"\\E111\"; }\n\n.glyphicon-magnet:before {\n  content: \"\\E112\"; }\n\n.glyphicon-chevron-up:before {\n  content: \"\\E113\"; }\n\n.glyphicon-chevron-down:before {\n  content: \"\\E114\"; }\n\n.glyphicon-retweet:before {\n  content: \"\\E115\"; }\n\n.glyphicon-shopping-cart:before {\n  content: \"\\E116\"; }\n\n.glyphicon-folder-close:before {\n  content: \"\\E117\"; }\n\n.glyphicon-folder-open:before {\n  content: \"\\E118\"; }\n\n.glyphicon-resize-vertical:before {\n  content: \"\\E119\"; }\n\n.glyphicon-resize-horizontal:before {\n  content: \"\\E120\"; }\n\n.glyphicon-hdd:before {\n  content: \"\\E121\"; }\n\n.glyphicon-bullhorn:before {\n  content: \"\\E122\"; }\n\n.glyphicon-bell:before {\n  content: \"\\E123\"; }\n\n.glyphicon-certificate:before {\n  content: \"\\E124\"; }\n\n.glyphicon-thumbs-up:before {\n  content: \"\\E125\"; }\n\n.glyphicon-thumbs-down:before {\n  content: \"\\E126\"; }\n\n.glyphicon-hand-right:before {\n  content: \"\\E127\"; }\n\n.glyphicon-hand-left:before {\n  content: \"\\E128\"; }\n\n.glyphicon-hand-up:before {\n  content: \"\\E129\"; }\n\n.glyphicon-hand-down:before {\n  content: \"\\E130\"; }\n\n.glyphicon-circle-arrow-right:before {\n  content: \"\\E131\"; }\n\n.glyphicon-circle-arrow-left:before {\n  content: \"\\E132\"; }\n\n.glyphicon-circle-arrow-up:before {\n  content: \"\\E133\"; }\n\n.glyphicon-circle-arrow-down:before {\n  content: \"\\E134\"; }\n\n.glyphicon-globe:before {\n  content: \"\\E135\"; }\n\n.glyphicon-wrench:before {\n  content: \"\\E136\"; }\n\n.glyphicon-tasks:before {\n  content: \"\\E137\"; }\n\n.glyphicon-filter:before {\n  content: \"\\E138\"; }\n\n.glyphicon-briefcase:before {\n  content: \"\\E139\"; }\n\n.glyphicon-fullscreen:before {\n  content: \"\\E140\"; }\n\n.glyphicon-dashboard:before {\n  content: \"\\E141\"; }\n\n.glyphicon-paperclip:before {\n  content: \"\\E142\"; }\n\n.glyphicon-heart-empty:before {\n  content: \"\\E143\"; }\n\n.glyphicon-link:before {\n  content: \"\\E144\"; }\n\n.glyphicon-phone:before {\n  content: \"\\E145\"; }\n\n.glyphicon-pushpin:before {\n  content: \"\\E146\"; }\n\n.glyphicon-usd:before {\n  content: \"\\E148\"; }\n\n.glyphicon-gbp:before {\n  content: \"\\E149\"; }\n\n.glyphicon-sort:before {\n  content: \"\\E150\"; }\n\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\E151\"; }\n\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\E152\"; }\n\n.glyphicon-sort-by-order:before {\n  content: \"\\E153\"; }\n\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\E154\"; }\n\n.glyphicon-sort-by-attributes:before {\n  content: \"\\E155\"; }\n\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\E156\"; }\n\n.glyphicon-unchecked:before {\n  content: \"\\E157\"; }\n\n.glyphicon-expand:before {\n  content: \"\\E158\"; }\n\n.glyphicon-collapse-down:before {\n  content: \"\\E159\"; }\n\n.glyphicon-collapse-up:before {\n  content: \"\\E160\"; }\n\n.glyphicon-log-in:before {\n  content: \"\\E161\"; }\n\n.glyphicon-flash:before {\n  content: \"\\E162\"; }\n\n.glyphicon-log-out:before {\n  content: \"\\E163\"; }\n\n.glyphicon-new-window:before {\n  content: \"\\E164\"; }\n\n.glyphicon-record:before {\n  content: \"\\E165\"; }\n\n.glyphicon-save:before {\n  content: \"\\E166\"; }\n\n.glyphicon-open:before {\n  content: \"\\E167\"; }\n\n.glyphicon-saved:before {\n  content: \"\\E168\"; }\n\n.glyphicon-import:before {\n  content: \"\\E169\"; }\n\n.glyphicon-export:before {\n  content: \"\\E170\"; }\n\n.glyphicon-send:before {\n  content: \"\\E171\"; }\n\n.glyphicon-floppy-disk:before {\n  content: \"\\E172\"; }\n\n.glyphicon-floppy-saved:before {\n  content: \"\\E173\"; }\n\n.glyphicon-floppy-remove:before {\n  content: \"\\E174\"; }\n\n.glyphicon-floppy-save:before {\n  content: \"\\E175\"; }\n\n.glyphicon-floppy-open:before {\n  content: \"\\E176\"; }\n\n.glyphicon-credit-card:before {\n  content: \"\\E177\"; }\n\n.glyphicon-transfer:before {\n  content: \"\\E178\"; }\n\n.glyphicon-cutlery:before {\n  content: \"\\E179\"; }\n\n.glyphicon-header:before {\n  content: \"\\E180\"; }\n\n.glyphicon-compressed:before {\n  content: \"\\E181\"; }\n\n.glyphicon-earphone:before {\n  content: \"\\E182\"; }\n\n.glyphicon-phone-alt:before {\n  content: \"\\E183\"; }\n\n.glyphicon-tower:before {\n  content: \"\\E184\"; }\n\n.glyphicon-stats:before {\n  content: \"\\E185\"; }\n\n.glyphicon-sd-video:before {\n  content: \"\\E186\"; }\n\n.glyphicon-hd-video:before {\n  content: \"\\E187\"; }\n\n.glyphicon-subtitles:before {\n  content: \"\\E188\"; }\n\n.glyphicon-sound-stereo:before {\n  content: \"\\E189\"; }\n\n.glyphicon-sound-dolby:before {\n  content: \"\\E190\"; }\n\n.glyphicon-sound-5-1:before {\n  content: \"\\E191\"; }\n\n.glyphicon-sound-6-1:before {\n  content: \"\\E192\"; }\n\n.glyphicon-sound-7-1:before {\n  content: \"\\E193\"; }\n\n.glyphicon-copyright-mark:before {\n  content: \"\\E194\"; }\n\n.glyphicon-registration-mark:before {\n  content: \"\\E195\"; }\n\n.glyphicon-cloud-download:before {\n  content: \"\\E197\"; }\n\n.glyphicon-cloud-upload:before {\n  content: \"\\E198\"; }\n\n.glyphicon-tree-conifer:before {\n  content: \"\\E199\"; }\n\n.glyphicon-tree-deciduous:before {\n  content: \"\\E200\"; }\n\n.glyphicon-cd:before {\n  content: \"\\E201\"; }\n\n.glyphicon-save-file:before {\n  content: \"\\E202\"; }\n\n.glyphicon-open-file:before {\n  content: \"\\E203\"; }\n\n.glyphicon-level-up:before {\n  content: \"\\E204\"; }\n\n.glyphicon-copy:before {\n  content: \"\\E205\"; }\n\n.glyphicon-paste:before {\n  content: \"\\E206\"; }\n\n.glyphicon-alert:before {\n  content: \"\\E209\"; }\n\n.glyphicon-equalizer:before {\n  content: \"\\E210\"; }\n\n.glyphicon-king:before {\n  content: \"\\E211\"; }\n\n.glyphicon-queen:before {\n  content: \"\\E212\"; }\n\n.glyphicon-pawn:before {\n  content: \"\\E213\"; }\n\n.glyphicon-bishop:before {\n  content: \"\\E214\"; }\n\n.glyphicon-knight:before {\n  content: \"\\E215\"; }\n\n.glyphicon-baby-formula:before {\n  content: \"\\E216\"; }\n\n.glyphicon-tent:before {\n  content: \"\\26FA\"; }\n\n.glyphicon-blackboard:before {\n  content: \"\\E218\"; }\n\n.glyphicon-bed:before {\n  content: \"\\E219\"; }\n\n.glyphicon-apple:before {\n  content: \"\\F8FF\"; }\n\n.glyphicon-erase:before {\n  content: \"\\E221\"; }\n\n.glyphicon-hourglass:before {\n  content: \"\\231B\"; }\n\n.glyphicon-lamp:before {\n  content: \"\\E223\"; }\n\n.glyphicon-duplicate:before {\n  content: \"\\E224\"; }\n\n.glyphicon-piggy-bank:before {\n  content: \"\\E225\"; }\n\n.glyphicon-scissors:before {\n  content: \"\\E226\"; }\n\n.glyphicon-bitcoin:before {\n  content: \"\\E227\"; }\n\n.glyphicon-btc:before {\n  content: \"\\E227\"; }\n\n.glyphicon-xbt:before {\n  content: \"\\E227\"; }\n\n.glyphicon-yen:before {\n  content: \"\\A5\"; }\n\n.glyphicon-jpy:before {\n  content: \"\\A5\"; }\n\n.glyphicon-ruble:before {\n  content: \"\\20BD\"; }\n\n.glyphicon-rub:before {\n  content: \"\\20BD\"; }\n\n.glyphicon-scale:before {\n  content: \"\\E230\"; }\n\n.glyphicon-ice-lolly:before {\n  content: \"\\E231\"; }\n\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\E232\"; }\n\n.glyphicon-education:before {\n  content: \"\\E233\"; }\n\n.glyphicon-option-horizontal:before {\n  content: \"\\E234\"; }\n\n.glyphicon-option-vertical:before {\n  content: \"\\E235\"; }\n\n.glyphicon-menu-hamburger:before {\n  content: \"\\E236\"; }\n\n.glyphicon-modal-window:before {\n  content: \"\\E237\"; }\n\n.glyphicon-oil:before {\n  content: \"\\E238\"; }\n\n.glyphicon-grain:before {\n  content: \"\\E239\"; }\n\n.glyphicon-sunglasses:before {\n  content: \"\\E240\"; }\n\n.glyphicon-text-size:before {\n  content: \"\\E241\"; }\n\n.glyphicon-text-color:before {\n  content: \"\\E242\"; }\n\n.glyphicon-text-background:before {\n  content: \"\\E243\"; }\n\n.glyphicon-object-align-top:before {\n  content: \"\\E244\"; }\n\n.glyphicon-object-align-bottom:before {\n  content: \"\\E245\"; }\n\n.glyphicon-object-align-horizontal:before {\n  content: \"\\E246\"; }\n\n.glyphicon-object-align-left:before {\n  content: \"\\E247\"; }\n\n.glyphicon-object-align-vertical:before {\n  content: \"\\E248\"; }\n\n.glyphicon-object-align-right:before {\n  content: \"\\E249\"; }\n\n.glyphicon-triangle-right:before {\n  content: \"\\E250\"; }\n\n.glyphicon-triangle-left:before {\n  content: \"\\E251\"; }\n\n.glyphicon-triangle-bottom:before {\n  content: \"\\E252\"; }\n\n.glyphicon-triangle-top:before {\n  content: \"\\E253\"; }\n\n.glyphicon-console:before {\n  content: \"\\E254\"; }\n\n.glyphicon-superscript:before {\n  content: \"\\E255\"; }\n\n.glyphicon-subscript:before {\n  content: \"\\E256\"; }\n\n.glyphicon-menu-left:before {\n  content: \"\\E257\"; }\n\n.glyphicon-menu-right:before {\n  content: \"\\E258\"; }\n\n.glyphicon-menu-down:before {\n  content: \"\\E259\"; }\n\n.glyphicon-menu-up:before {\n  content: \"\\E260\"; }\n\n* {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\n*:before,\n*:after {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\nhtml {\n  font-size: 10px;\n  -webkit-tap-highlight-color: transparent; }\n\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #333333;\n  background-color: #fff; }\n\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit; }\n\na {\n  color: #337ab7;\n  text-decoration: none; }\n  a:hover, a:focus {\n    color: #23527c;\n    text-decoration: underline; }\n  a:focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n\nfigure {\n  margin: 0; }\n\nimg {\n  vertical-align: middle; }\n\n.img-responsive {\n  display: block;\n  max-width: 100%;\n  height: auto; }\n\n.img-rounded {\n  border-radius: 6px; }\n\n.img-thumbnail {\n  padding: 4px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  display: inline-block;\n  max-width: 100%;\n  height: auto; }\n\n.img-circle {\n  border-radius: 50%; }\n\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eeeeee; }\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0; }\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto; }\n\n[role=\"button\"] {\n  cursor: pointer; }\n\nh1, h2, h3, h4, h5, h6,\n.h1, .h2, .h3, .h4, .h5, .h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit; }\n  h1 small,\n  h1 .small, h2 small,\n  h2 .small, h3 small,\n  h3 .small, h4 small,\n  h4 .small, h5 small,\n  h5 .small, h6 small,\n  h6 .small,\n  .h1 small,\n  .h1 .small, .h2 small,\n  .h2 .small, .h3 small,\n  .h3 .small, .h4 small,\n  .h4 .small, .h5 small,\n  .h5 .small, .h6 small,\n  .h6 .small {\n    font-weight: normal;\n    line-height: 1;\n    color: #777777; }\n\nh1, .h1,\nh2, .h2,\nh3, .h3 {\n  margin-top: 20px;\n  margin-bottom: 10px; }\n  h1 small,\n  h1 .small, .h1 small,\n  .h1 .small,\n  h2 small,\n  h2 .small, .h2 small,\n  .h2 .small,\n  h3 small,\n  h3 .small, .h3 small,\n  .h3 .small {\n    font-size: 65%; }\n\nh4, .h4,\nh5, .h5,\nh6, .h6 {\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  h4 small,\n  h4 .small, .h4 small,\n  .h4 .small,\n  h5 small,\n  h5 .small, .h5 small,\n  .h5 .small,\n  h6 small,\n  h6 .small, .h6 small,\n  .h6 .small {\n    font-size: 75%; }\n\nh1, .h1 {\n  font-size: 36px; }\n\nh2, .h2 {\n  font-size: 30px; }\n\nh3, .h3 {\n  font-size: 24px; }\n\nh4, .h4 {\n  font-size: 18px; }\n\nh5, .h5 {\n  font-size: 14px; }\n\nh6, .h6 {\n  font-size: 12px; }\n\np {\n  margin: 0 0 10px; }\n\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4; }\n  @media (min-width: 768px) {\n    .lead {\n      font-size: 21px; } }\n\nsmall,\n.small {\n  font-size: 85%; }\n\nmark,\n.mark {\n  background-color: #fcf8e3;\n  padding: .2em; }\n\n.text-left {\n  text-align: left; }\n\n.text-right {\n  text-align: right; }\n\n.text-center {\n  text-align: center; }\n\n.text-justify {\n  text-align: justify; }\n\n.text-nowrap {\n  white-space: nowrap; }\n\n.text-lowercase {\n  text-transform: lowercase; }\n\n.text-uppercase, .initialism {\n  text-transform: uppercase; }\n\n.text-capitalize {\n  text-transform: capitalize; }\n\n.text-muted {\n  color: #777777; }\n\n.text-primary {\n  color: #337ab7; }\n\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090; }\n\n.text-success {\n  color: #3c763d; }\n\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c; }\n\n.text-info {\n  color: #31708f; }\n\na.text-info:hover,\na.text-info:focus {\n  color: #245269; }\n\n.text-warning {\n  color: #8a6d3b; }\n\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c; }\n\n.text-danger {\n  color: #a94442; }\n\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534; }\n\n.bg-primary {\n  color: #fff; }\n\n.bg-primary {\n  background-color: #337ab7; }\n\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090; }\n\n.bg-success {\n  background-color: #dff0d8; }\n\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3; }\n\n.bg-info {\n  background-color: #d9edf7; }\n\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee; }\n\n.bg-warning {\n  background-color: #fcf8e3; }\n\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5; }\n\n.bg-danger {\n  background-color: #f2dede; }\n\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9; }\n\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eeeeee; }\n\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px; }\n  ul ul,\n  ul ol,\n  ol ul,\n  ol ol {\n    margin-bottom: 0; }\n\n.list-unstyled {\n  padding-left: 0;\n  list-style: none; }\n\n.list-inline {\n  padding-left: 0;\n  list-style: none;\n  margin-left: -5px; }\n  .list-inline > li {\n    display: inline-block;\n    padding-left: 5px;\n    padding-right: 5px; }\n\ndl {\n  margin-top: 0;\n  margin-bottom: 20px; }\n\ndt,\ndd {\n  line-height: 1.42857; }\n\ndt {\n  font-weight: bold; }\n\ndd {\n  margin-left: 0; }\n\n.dl-horizontal dd:before, .dl-horizontal dd:after {\n  content: \" \";\n  display: table; }\n\n.dl-horizontal dd:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    clear: left;\n    text-align: right;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; }\n  .dl-horizontal dd {\n    margin-left: 180px; } }\n\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777777; }\n\n.initialism {\n  font-size: 90%; }\n\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eeeeee; }\n  blockquote p:last-child,\n  blockquote ul:last-child,\n  blockquote ol:last-child {\n    margin-bottom: 0; }\n  blockquote footer,\n  blockquote small,\n  blockquote .small {\n    display: block;\n    font-size: 80%;\n    line-height: 1.42857;\n    color: #777777; }\n    blockquote footer:before,\n    blockquote small:before,\n    blockquote .small:before {\n      content: '\\2014   \\A0'; }\n\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  border-right: 5px solid #eeeeee;\n  border-left: 0;\n  text-align: right; }\n  .blockquote-reverse footer:before,\n  .blockquote-reverse small:before,\n  .blockquote-reverse .small:before,\n  blockquote.pull-right footer:before,\n  blockquote.pull-right small:before,\n  blockquote.pull-right .small:before {\n    content: ''; }\n  .blockquote-reverse footer:after,\n  .blockquote-reverse small:after,\n  .blockquote-reverse .small:after,\n  blockquote.pull-right footer:after,\n  blockquote.pull-right small:after,\n  blockquote.pull-right .small:after {\n    content: '\\A0   \\2014'; }\n\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857; }\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace; }\n\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px; }\n\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.25); }\n  kbd kbd {\n    padding: 0;\n    font-size: 100%;\n    font-weight: bold;\n    box-shadow: none; }\n\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857;\n  word-break: break-all;\n  word-wrap: break-word;\n  color: #333333;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  pre code {\n    padding: 0;\n    font-size: inherit;\n    color: inherit;\n    white-space: pre-wrap;\n    background-color: transparent;\n    border-radius: 0; }\n\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll; }\n\n.container {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container:before, .container:after {\n    content: \" \";\n    display: table; }\n  .container:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .container {\n      width: 750px; } }\n  @media (min-width: 992px) {\n    .container {\n      width: 970px; } }\n  @media (min-width: 1200px) {\n    .container {\n      width: 1170px; } }\n\n.container-fluid {\n  margin-right: auto;\n  margin-left: auto;\n  padding-left: 15px;\n  padding-right: 15px; }\n  .container-fluid:before, .container-fluid:after {\n    content: \" \";\n    display: table; }\n  .container-fluid:after {\n    clear: both; }\n\n.row {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .row:before, .row:after {\n    content: \" \";\n    display: table; }\n  .row:after {\n    clear: both; }\n\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-left: 15px;\n  padding-right: 15px; }\n\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left; }\n\n.col-xs-1 {\n  width: 8.33333%; }\n\n.col-xs-2 {\n  width: 16.66667%; }\n\n.col-xs-3 {\n  width: 25%; }\n\n.col-xs-4 {\n  width: 33.33333%; }\n\n.col-xs-5 {\n  width: 41.66667%; }\n\n.col-xs-6 {\n  width: 50%; }\n\n.col-xs-7 {\n  width: 58.33333%; }\n\n.col-xs-8 {\n  width: 66.66667%; }\n\n.col-xs-9 {\n  width: 75%; }\n\n.col-xs-10 {\n  width: 83.33333%; }\n\n.col-xs-11 {\n  width: 91.66667%; }\n\n.col-xs-12 {\n  width: 100%; }\n\n.col-xs-pull-0 {\n  right: auto; }\n\n.col-xs-pull-1 {\n  right: 8.33333%; }\n\n.col-xs-pull-2 {\n  right: 16.66667%; }\n\n.col-xs-pull-3 {\n  right: 25%; }\n\n.col-xs-pull-4 {\n  right: 33.33333%; }\n\n.col-xs-pull-5 {\n  right: 41.66667%; }\n\n.col-xs-pull-6 {\n  right: 50%; }\n\n.col-xs-pull-7 {\n  right: 58.33333%; }\n\n.col-xs-pull-8 {\n  right: 66.66667%; }\n\n.col-xs-pull-9 {\n  right: 75%; }\n\n.col-xs-pull-10 {\n  right: 83.33333%; }\n\n.col-xs-pull-11 {\n  right: 91.66667%; }\n\n.col-xs-pull-12 {\n  right: 100%; }\n\n.col-xs-push-0 {\n  left: auto; }\n\n.col-xs-push-1 {\n  left: 8.33333%; }\n\n.col-xs-push-2 {\n  left: 16.66667%; }\n\n.col-xs-push-3 {\n  left: 25%; }\n\n.col-xs-push-4 {\n  left: 33.33333%; }\n\n.col-xs-push-5 {\n  left: 41.66667%; }\n\n.col-xs-push-6 {\n  left: 50%; }\n\n.col-xs-push-7 {\n  left: 58.33333%; }\n\n.col-xs-push-8 {\n  left: 66.66667%; }\n\n.col-xs-push-9 {\n  left: 75%; }\n\n.col-xs-push-10 {\n  left: 83.33333%; }\n\n.col-xs-push-11 {\n  left: 91.66667%; }\n\n.col-xs-push-12 {\n  left: 100%; }\n\n.col-xs-offset-0 {\n  margin-left: 0%; }\n\n.col-xs-offset-1 {\n  margin-left: 8.33333%; }\n\n.col-xs-offset-2 {\n  margin-left: 16.66667%; }\n\n.col-xs-offset-3 {\n  margin-left: 25%; }\n\n.col-xs-offset-4 {\n  margin-left: 33.33333%; }\n\n.col-xs-offset-5 {\n  margin-left: 41.66667%; }\n\n.col-xs-offset-6 {\n  margin-left: 50%; }\n\n.col-xs-offset-7 {\n  margin-left: 58.33333%; }\n\n.col-xs-offset-8 {\n  margin-left: 66.66667%; }\n\n.col-xs-offset-9 {\n  margin-left: 75%; }\n\n.col-xs-offset-10 {\n  margin-left: 83.33333%; }\n\n.col-xs-offset-11 {\n  margin-left: 91.66667%; }\n\n.col-xs-offset-12 {\n  margin-left: 100%; }\n\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left; }\n  .col-sm-1 {\n    width: 8.33333%; }\n  .col-sm-2 {\n    width: 16.66667%; }\n  .col-sm-3 {\n    width: 25%; }\n  .col-sm-4 {\n    width: 33.33333%; }\n  .col-sm-5 {\n    width: 41.66667%; }\n  .col-sm-6 {\n    width: 50%; }\n  .col-sm-7 {\n    width: 58.33333%; }\n  .col-sm-8 {\n    width: 66.66667%; }\n  .col-sm-9 {\n    width: 75%; }\n  .col-sm-10 {\n    width: 83.33333%; }\n  .col-sm-11 {\n    width: 91.66667%; }\n  .col-sm-12 {\n    width: 100%; }\n  .col-sm-pull-0 {\n    right: auto; }\n  .col-sm-pull-1 {\n    right: 8.33333%; }\n  .col-sm-pull-2 {\n    right: 16.66667%; }\n  .col-sm-pull-3 {\n    right: 25%; }\n  .col-sm-pull-4 {\n    right: 33.33333%; }\n  .col-sm-pull-5 {\n    right: 41.66667%; }\n  .col-sm-pull-6 {\n    right: 50%; }\n  .col-sm-pull-7 {\n    right: 58.33333%; }\n  .col-sm-pull-8 {\n    right: 66.66667%; }\n  .col-sm-pull-9 {\n    right: 75%; }\n  .col-sm-pull-10 {\n    right: 83.33333%; }\n  .col-sm-pull-11 {\n    right: 91.66667%; }\n  .col-sm-pull-12 {\n    right: 100%; }\n  .col-sm-push-0 {\n    left: auto; }\n  .col-sm-push-1 {\n    left: 8.33333%; }\n  .col-sm-push-2 {\n    left: 16.66667%; }\n  .col-sm-push-3 {\n    left: 25%; }\n  .col-sm-push-4 {\n    left: 33.33333%; }\n  .col-sm-push-5 {\n    left: 41.66667%; }\n  .col-sm-push-6 {\n    left: 50%; }\n  .col-sm-push-7 {\n    left: 58.33333%; }\n  .col-sm-push-8 {\n    left: 66.66667%; }\n  .col-sm-push-9 {\n    left: 75%; }\n  .col-sm-push-10 {\n    left: 83.33333%; }\n  .col-sm-push-11 {\n    left: 91.66667%; }\n  .col-sm-push-12 {\n    left: 100%; }\n  .col-sm-offset-0 {\n    margin-left: 0%; }\n  .col-sm-offset-1 {\n    margin-left: 8.33333%; }\n  .col-sm-offset-2 {\n    margin-left: 16.66667%; }\n  .col-sm-offset-3 {\n    margin-left: 25%; }\n  .col-sm-offset-4 {\n    margin-left: 33.33333%; }\n  .col-sm-offset-5 {\n    margin-left: 41.66667%; }\n  .col-sm-offset-6 {\n    margin-left: 50%; }\n  .col-sm-offset-7 {\n    margin-left: 58.33333%; }\n  .col-sm-offset-8 {\n    margin-left: 66.66667%; }\n  .col-sm-offset-9 {\n    margin-left: 75%; }\n  .col-sm-offset-10 {\n    margin-left: 83.33333%; }\n  .col-sm-offset-11 {\n    margin-left: 91.66667%; }\n  .col-sm-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left; }\n  .col-md-1 {\n    width: 8.33333%; }\n  .col-md-2 {\n    width: 16.66667%; }\n  .col-md-3 {\n    width: 25%; }\n  .col-md-4 {\n    width: 33.33333%; }\n  .col-md-5 {\n    width: 41.66667%; }\n  .col-md-6 {\n    width: 50%; }\n  .col-md-7 {\n    width: 58.33333%; }\n  .col-md-8 {\n    width: 66.66667%; }\n  .col-md-9 {\n    width: 75%; }\n  .col-md-10 {\n    width: 83.33333%; }\n  .col-md-11 {\n    width: 91.66667%; }\n  .col-md-12 {\n    width: 100%; }\n  .col-md-pull-0 {\n    right: auto; }\n  .col-md-pull-1 {\n    right: 8.33333%; }\n  .col-md-pull-2 {\n    right: 16.66667%; }\n  .col-md-pull-3 {\n    right: 25%; }\n  .col-md-pull-4 {\n    right: 33.33333%; }\n  .col-md-pull-5 {\n    right: 41.66667%; }\n  .col-md-pull-6 {\n    right: 50%; }\n  .col-md-pull-7 {\n    right: 58.33333%; }\n  .col-md-pull-8 {\n    right: 66.66667%; }\n  .col-md-pull-9 {\n    right: 75%; }\n  .col-md-pull-10 {\n    right: 83.33333%; }\n  .col-md-pull-11 {\n    right: 91.66667%; }\n  .col-md-pull-12 {\n    right: 100%; }\n  .col-md-push-0 {\n    left: auto; }\n  .col-md-push-1 {\n    left: 8.33333%; }\n  .col-md-push-2 {\n    left: 16.66667%; }\n  .col-md-push-3 {\n    left: 25%; }\n  .col-md-push-4 {\n    left: 33.33333%; }\n  .col-md-push-5 {\n    left: 41.66667%; }\n  .col-md-push-6 {\n    left: 50%; }\n  .col-md-push-7 {\n    left: 58.33333%; }\n  .col-md-push-8 {\n    left: 66.66667%; }\n  .col-md-push-9 {\n    left: 75%; }\n  .col-md-push-10 {\n    left: 83.33333%; }\n  .col-md-push-11 {\n    left: 91.66667%; }\n  .col-md-push-12 {\n    left: 100%; }\n  .col-md-offset-0 {\n    margin-left: 0%; }\n  .col-md-offset-1 {\n    margin-left: 8.33333%; }\n  .col-md-offset-2 {\n    margin-left: 16.66667%; }\n  .col-md-offset-3 {\n    margin-left: 25%; }\n  .col-md-offset-4 {\n    margin-left: 33.33333%; }\n  .col-md-offset-5 {\n    margin-left: 41.66667%; }\n  .col-md-offset-6 {\n    margin-left: 50%; }\n  .col-md-offset-7 {\n    margin-left: 58.33333%; }\n  .col-md-offset-8 {\n    margin-left: 66.66667%; }\n  .col-md-offset-9 {\n    margin-left: 75%; }\n  .col-md-offset-10 {\n    margin-left: 83.33333%; }\n  .col-md-offset-11 {\n    margin-left: 91.66667%; }\n  .col-md-offset-12 {\n    margin-left: 100%; } }\n\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left; }\n  .col-lg-1 {\n    width: 8.33333%; }\n  .col-lg-2 {\n    width: 16.66667%; }\n  .col-lg-3 {\n    width: 25%; }\n  .col-lg-4 {\n    width: 33.33333%; }\n  .col-lg-5 {\n    width: 41.66667%; }\n  .col-lg-6 {\n    width: 50%; }\n  .col-lg-7 {\n    width: 58.33333%; }\n  .col-lg-8 {\n    width: 66.66667%; }\n  .col-lg-9 {\n    width: 75%; }\n  .col-lg-10 {\n    width: 83.33333%; }\n  .col-lg-11 {\n    width: 91.66667%; }\n  .col-lg-12 {\n    width: 100%; }\n  .col-lg-pull-0 {\n    right: auto; }\n  .col-lg-pull-1 {\n    right: 8.33333%; }\n  .col-lg-pull-2 {\n    right: 16.66667%; }\n  .col-lg-pull-3 {\n    right: 25%; }\n  .col-lg-pull-4 {\n    right: 33.33333%; }\n  .col-lg-pull-5 {\n    right: 41.66667%; }\n  .col-lg-pull-6 {\n    right: 50%; }\n  .col-lg-pull-7 {\n    right: 58.33333%; }\n  .col-lg-pull-8 {\n    right: 66.66667%; }\n  .col-lg-pull-9 {\n    right: 75%; }\n  .col-lg-pull-10 {\n    right: 83.33333%; }\n  .col-lg-pull-11 {\n    right: 91.66667%; }\n  .col-lg-pull-12 {\n    right: 100%; }\n  .col-lg-push-0 {\n    left: auto; }\n  .col-lg-push-1 {\n    left: 8.33333%; }\n  .col-lg-push-2 {\n    left: 16.66667%; }\n  .col-lg-push-3 {\n    left: 25%; }\n  .col-lg-push-4 {\n    left: 33.33333%; }\n  .col-lg-push-5 {\n    left: 41.66667%; }\n  .col-lg-push-6 {\n    left: 50%; }\n  .col-lg-push-7 {\n    left: 58.33333%; }\n  .col-lg-push-8 {\n    left: 66.66667%; }\n  .col-lg-push-9 {\n    left: 75%; }\n  .col-lg-push-10 {\n    left: 83.33333%; }\n  .col-lg-push-11 {\n    left: 91.66667%; }\n  .col-lg-push-12 {\n    left: 100%; }\n  .col-lg-offset-0 {\n    margin-left: 0%; }\n  .col-lg-offset-1 {\n    margin-left: 8.33333%; }\n  .col-lg-offset-2 {\n    margin-left: 16.66667%; }\n  .col-lg-offset-3 {\n    margin-left: 25%; }\n  .col-lg-offset-4 {\n    margin-left: 33.33333%; }\n  .col-lg-offset-5 {\n    margin-left: 41.66667%; }\n  .col-lg-offset-6 {\n    margin-left: 50%; }\n  .col-lg-offset-7 {\n    margin-left: 58.33333%; }\n  .col-lg-offset-8 {\n    margin-left: 66.66667%; }\n  .col-lg-offset-9 {\n    margin-left: 75%; }\n  .col-lg-offset-10 {\n    margin-left: 83.33333%; }\n  .col-lg-offset-11 {\n    margin-left: 91.66667%; }\n  .col-lg-offset-12 {\n    margin-left: 100%; } }\n\ntable {\n  background-color: transparent; }\n\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777777;\n  text-align: left; }\n\nth {\n  text-align: left; }\n\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px; }\n  .table > thead > tr > th,\n  .table > thead > tr > td,\n  .table > tbody > tr > th,\n  .table > tbody > tr > td,\n  .table > tfoot > tr > th,\n  .table > tfoot > tr > td {\n    padding: 8px;\n    line-height: 1.42857;\n    vertical-align: top;\n    border-top: 1px solid #ddd; }\n  .table > thead > tr > th {\n    vertical-align: bottom;\n    border-bottom: 2px solid #ddd; }\n  .table > caption + thead > tr:first-child > th,\n  .table > caption + thead > tr:first-child > td,\n  .table > colgroup + thead > tr:first-child > th,\n  .table > colgroup + thead > tr:first-child > td,\n  .table > thead:first-child > tr:first-child > th,\n  .table > thead:first-child > tr:first-child > td {\n    border-top: 0; }\n  .table > tbody + tbody {\n    border-top: 2px solid #ddd; }\n  .table .table {\n    background-color: #fff; }\n\n.table-condensed > thead > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > th,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > th,\n.table-condensed > tfoot > tr > td {\n  padding: 5px; }\n\n.table-bordered {\n  border: 1px solid #ddd; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td,\n  .table-bordered > tbody > tr > th,\n  .table-bordered > tbody > tr > td,\n  .table-bordered > tfoot > tr > th,\n  .table-bordered > tfoot > tr > td {\n    border: 1px solid #ddd; }\n  .table-bordered > thead > tr > th,\n  .table-bordered > thead > tr > td {\n    border-bottom-width: 2px; }\n\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9; }\n\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5; }\n\ntable col[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-column; }\n\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  float: none;\n  display: table-cell; }\n\n.table > thead > tr > td.active,\n.table > thead > tr > th.active,\n.table > thead > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr > td.active,\n.table > tbody > tr > th.active,\n.table > tbody > tr.active > td,\n.table > tbody > tr.active > th,\n.table > tfoot > tr > td.active,\n.table > tfoot > tr > th.active,\n.table > tfoot > tr.active > td,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5; }\n\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8; }\n\n.table > thead > tr > td.success,\n.table > thead > tr > th.success,\n.table > thead > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr > td.success,\n.table > tbody > tr > th.success,\n.table > tbody > tr.success > td,\n.table > tbody > tr.success > th,\n.table > tfoot > tr > td.success,\n.table > tfoot > tr > th.success,\n.table > tfoot > tr.success > td,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8; }\n\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6; }\n\n.table > thead > tr > td.info,\n.table > thead > tr > th.info,\n.table > thead > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr > td.info,\n.table > tbody > tr > th.info,\n.table > tbody > tr.info > td,\n.table > tbody > tr.info > th,\n.table > tfoot > tr > td.info,\n.table > tfoot > tr > th.info,\n.table > tfoot > tr.info > td,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7; }\n\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3; }\n\n.table > thead > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr > td.warning,\n.table > tbody > tr > th.warning,\n.table > tbody > tr.warning > td,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr > td.warning,\n.table > tfoot > tr > th.warning,\n.table > tfoot > tr.warning > td,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3; }\n\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc; }\n\n.table > thead > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr > td.danger,\n.table > tbody > tr > th.danger,\n.table > tbody > tr.danger > td,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr > td.danger,\n.table > tfoot > tr > th.danger,\n.table > tfoot > tr.danger > td,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede; }\n\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc; }\n\n.table-responsive {\n  overflow-x: auto;\n  min-height: 0.01%; }\n  @media screen and (max-width: 767px) {\n    .table-responsive {\n      width: 100%;\n      margin-bottom: 15px;\n      overflow-y: hidden;\n      -ms-overflow-style: -ms-autohiding-scrollbar;\n      border: 1px solid #ddd; }\n      .table-responsive > .table {\n        margin-bottom: 0; }\n        .table-responsive > .table > thead > tr > th,\n        .table-responsive > .table > thead > tr > td,\n        .table-responsive > .table > tbody > tr > th,\n        .table-responsive > .table > tbody > tr > td,\n        .table-responsive > .table > tfoot > tr > th,\n        .table-responsive > .table > tfoot > tr > td {\n          white-space: nowrap; }\n      .table-responsive > .table-bordered {\n        border: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:first-child,\n        .table-responsive > .table-bordered > thead > tr > td:first-child,\n        .table-responsive > .table-bordered > tbody > tr > th:first-child,\n        .table-responsive > .table-bordered > tbody > tr > td:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n          border-left: 0; }\n        .table-responsive > .table-bordered > thead > tr > th:last-child,\n        .table-responsive > .table-bordered > thead > tr > td:last-child,\n        .table-responsive > .table-bordered > tbody > tr > th:last-child,\n        .table-responsive > .table-bordered > tbody > tr > td:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n        .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n          border-right: 0; }\n        .table-responsive > .table-bordered > tbody > tr:last-child > th,\n        .table-responsive > .table-bordered > tbody > tr:last-child > td,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n        .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n          border-bottom: 0; } }\n\nfieldset {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  min-width: 0; }\n\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold; }\n\ninput[type=\"search\"] {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box; }\n\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal; }\n\ninput[type=\"file\"] {\n  display: block; }\n\ninput[type=\"range\"] {\n  display: block;\n  width: 100%; }\n\nselect[multiple],\nselect[size] {\n  height: auto; }\n\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: thin dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px; }\n\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555; }\n\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;\n  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }\n  .form-control:focus {\n    border-color: #66afe9;\n    outline: 0;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }\n  .form-control::-moz-placeholder {\n    color: #999;\n    opacity: 1; }\n  .form-control:-ms-input-placeholder {\n    color: #999; }\n  .form-control::-webkit-input-placeholder {\n    color: #999; }\n  .form-control::-ms-expand {\n    border: 0;\n    background-color: transparent; }\n  .form-control[disabled], .form-control[readonly],\n  fieldset[disabled] .form-control {\n    background-color: #eeeeee;\n    opacity: 1; }\n  .form-control[disabled],\n  fieldset[disabled] .form-control {\n    cursor: not-allowed; }\n\ntextarea.form-control {\n  height: auto; }\n\ninput[type=\"search\"] {\n  -webkit-appearance: none; }\n\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px; }\n  input[type=\"date\"].input-sm, .input-group-sm > input[type=\"date\"].form-control,\n  .input-group-sm > input[type=\"date\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-sm input[type=\"date\"],\n  input[type=\"time\"].input-sm,\n  .input-group-sm > input[type=\"time\"].form-control,\n  .input-group-sm > input[type=\"time\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-sm\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-sm,\n  .input-group-sm > input[type=\"datetime-local\"].form-control,\n  .input-group-sm > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-sm\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-sm,\n  .input-group-sm > input[type=\"month\"].form-control,\n  .input-group-sm > input[type=\"month\"].input-group-addon,\n  .input-group-sm > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-sm\n  input[type=\"month\"] {\n    line-height: 30px; }\n  input[type=\"date\"].input-lg, .input-group-lg > input[type=\"date\"].form-control,\n  .input-group-lg > input[type=\"date\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"date\"].btn,\n  .input-group-lg input[type=\"date\"],\n  input[type=\"time\"].input-lg,\n  .input-group-lg > input[type=\"time\"].form-control,\n  .input-group-lg > input[type=\"time\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"time\"].btn,\n  .input-group-lg\n  input[type=\"time\"],\n  input[type=\"datetime-local\"].input-lg,\n  .input-group-lg > input[type=\"datetime-local\"].form-control,\n  .input-group-lg > input[type=\"datetime-local\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"datetime-local\"].btn,\n  .input-group-lg\n  input[type=\"datetime-local\"],\n  input[type=\"month\"].input-lg,\n  .input-group-lg > input[type=\"month\"].form-control,\n  .input-group-lg > input[type=\"month\"].input-group-addon,\n  .input-group-lg > .input-group-btn > input[type=\"month\"].btn,\n  .input-group-lg\n  input[type=\"month\"] {\n    line-height: 46px; } }\n\n.form-group {\n  margin-bottom: 15px; }\n\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px; }\n  .radio label,\n  .checkbox label {\n    min-height: 20px;\n    padding-left: 20px;\n    margin-bottom: 0;\n    font-weight: normal;\n    cursor: pointer; }\n\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-left: -20px;\n  margin-top: 4px \\9; }\n\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px; }\n\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  vertical-align: middle;\n  font-weight: normal;\n  cursor: pointer; }\n\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px; }\n\ninput[type=\"radio\"][disabled], input[type=\"radio\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled]\ninput[type=\"checkbox\"] {\n  cursor: not-allowed; }\n\n.radio-inline.disabled,\nfieldset[disabled] .radio-inline,\n.checkbox-inline.disabled,\nfieldset[disabled]\n.checkbox-inline {\n  cursor: not-allowed; }\n\n.radio.disabled label,\nfieldset[disabled] .radio label,\n.checkbox.disabled label,\nfieldset[disabled]\n.checkbox label {\n  cursor: not-allowed; }\n\n.form-control-static {\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n  min-height: 34px; }\n  .form-control-static.input-lg, .input-group-lg > .form-control-static.form-control,\n  .input-group-lg > .form-control-static.input-group-addon,\n  .input-group-lg > .input-group-btn > .form-control-static.btn, .form-control-static.input-sm, .input-group-sm > .form-control-static.form-control,\n  .input-group-sm > .form-control-static.input-group-addon,\n  .input-group-sm > .input-group-btn > .form-control-static.btn {\n    padding-left: 0;\n    padding-right: 0; }\n\n.input-sm, .input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\nselect.input-sm, .input-group-sm > select.form-control,\n.input-group-sm > select.input-group-addon,\n.input-group-sm > .input-group-btn > select.btn {\n  height: 30px;\n  line-height: 30px; }\n\ntextarea.input-sm, .input-group-sm > textarea.form-control,\n.input-group-sm > textarea.input-group-addon,\n.input-group-sm > .input-group-btn > textarea.btn,\nselect[multiple].input-sm,\n.input-group-sm > select[multiple].form-control,\n.input-group-sm > select[multiple].input-group-addon,\n.input-group-sm > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px; }\n\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto; }\n\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.input-lg, .input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\nselect.input-lg, .input-group-lg > select.form-control,\n.input-group-lg > select.input-group-addon,\n.input-group-lg > .input-group-btn > select.btn {\n  height: 46px;\n  line-height: 46px; }\n\ntextarea.input-lg, .input-group-lg > textarea.form-control,\n.input-group-lg > textarea.input-group-addon,\n.input-group-lg > .input-group-btn > textarea.btn,\nselect[multiple].input-lg,\n.input-group-lg > select[multiple].form-control,\n.input-group-lg > select[multiple].input-group-addon,\n.input-group-lg > .input-group-btn > select[multiple].btn {\n  height: auto; }\n\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px; }\n\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto; }\n\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.33333; }\n\n.has-feedback {\n  position: relative; }\n  .has-feedback .form-control {\n    padding-right: 42.5px; }\n\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none; }\n\n.input-lg + .form-control-feedback, .input-group-lg > .form-control + .form-control-feedback,\n.input-group-lg > .input-group-addon + .form-control-feedback,\n.input-group-lg > .input-group-btn > .btn + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px; }\n\n.input-sm + .form-control-feedback, .input-group-sm > .form-control + .form-control-feedback,\n.input-group-sm > .input-group-addon + .form-control-feedback,\n.input-group-sm > .input-group-btn > .btn + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px; }\n\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d; }\n\n.has-success .form-control {\n  border-color: #3c763d;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-success .form-control:focus {\n    border-color: #2b542c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #67b168; }\n\n.has-success .input-group-addon {\n  color: #3c763d;\n  border-color: #3c763d;\n  background-color: #dff0d8; }\n\n.has-success .form-control-feedback {\n  color: #3c763d; }\n\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b; }\n\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-warning .form-control:focus {\n    border-color: #66512c;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #c0a16b; }\n\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  border-color: #8a6d3b;\n  background-color: #fcf8e3; }\n\n.has-warning .form-control-feedback {\n  color: #8a6d3b; }\n\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442; }\n\n.has-error .form-control {\n  border-color: #a94442;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075); }\n  .has-error .form-control:focus {\n    border-color: #843534;\n    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483;\n    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 6px #ce8483; }\n\n.has-error .input-group-addon {\n  color: #a94442;\n  border-color: #a94442;\n  background-color: #f2dede; }\n\n.has-error .form-control-feedback {\n  color: #a94442; }\n\n.has-feedback label ~ .form-control-feedback {\n  top: 25px; }\n\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0; }\n\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373; }\n\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle; }\n  .form-inline .form-control-static {\n    display: inline-block; }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle; }\n    .form-inline .input-group .input-group-addon,\n    .form-inline .input-group .input-group-btn,\n    .form-inline .input-group .form-control {\n      width: auto; }\n  .form-inline .input-group > .form-control {\n    width: 100%; }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle; }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle; }\n    .form-inline .radio label,\n    .form-inline .checkbox label {\n      padding-left: 0; }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0; }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0; } }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-top: 7px; }\n\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px; }\n\n.form-horizontal .form-group {\n  margin-left: -15px;\n  margin-right: -15px; }\n  .form-horizontal .form-group:before, .form-horizontal .form-group:after {\n    content: \" \";\n    display: table; }\n  .form-horizontal .form-group:after {\n    clear: both; }\n\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    text-align: right;\n    margin-bottom: 0;\n    padding-top: 7px; } }\n\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px; }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px; } }\n\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px; } }\n\n.btn {\n  display: inline-block;\n  margin-bottom: 0;\n  font-weight: normal;\n  text-align: center;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  background-image: none;\n  border: 1px solid transparent;\n  white-space: nowrap;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  border-radius: 4px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n  .btn:focus, .btn.focus, .btn:active:focus, .btn:active.focus, .btn.active:focus, .btn.active.focus {\n    outline: thin dotted;\n    outline: 5px auto -webkit-focus-ring-color;\n    outline-offset: -2px; }\n  .btn:hover, .btn:focus, .btn.focus {\n    color: #333;\n    text-decoration: none; }\n  .btn:active, .btn.active {\n    outline: 0;\n    background-image: none;\n    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn.disabled, .btn[disabled],\n  fieldset[disabled] .btn {\n    cursor: not-allowed;\n    opacity: 0.65;\n    filter: alpha(opacity=65);\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none; }\n\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc; }\n  .btn-default:focus, .btn-default.focus {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #8c8c8c; }\n  .btn-default:hover {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    color: #333;\n    background-color: #e6e6e6;\n    border-color: #adadad; }\n    .btn-default:active:hover, .btn-default:active:focus, .btn-default:active.focus, .btn-default.active:hover, .btn-default.active:focus, .btn-default.active.focus,\n    .open > .btn-default.dropdown-toggle:hover,\n    .open > .btn-default.dropdown-toggle:focus,\n    .open > .btn-default.dropdown-toggle.focus {\n      color: #333;\n      background-color: #d4d4d4;\n      border-color: #8c8c8c; }\n  .btn-default:active, .btn-default.active,\n  .open > .btn-default.dropdown-toggle {\n    background-image: none; }\n  .btn-default.disabled:hover, .btn-default.disabled:focus, .btn-default.disabled.focus, .btn-default[disabled]:hover, .btn-default[disabled]:focus, .btn-default[disabled].focus,\n  fieldset[disabled] .btn-default:hover,\n  fieldset[disabled] .btn-default:focus,\n  fieldset[disabled] .btn-default.focus {\n    background-color: #fff;\n    border-color: #ccc; }\n  .btn-default .badge {\n    color: #fff;\n    background-color: #333; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4; }\n  .btn-primary:focus, .btn-primary.focus {\n    color: #fff;\n    background-color: #286090;\n    border-color: #122b40; }\n  .btn-primary:hover {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    color: #fff;\n    background-color: #286090;\n    border-color: #204d74; }\n    .btn-primary:active:hover, .btn-primary:active:focus, .btn-primary:active.focus, .btn-primary.active:hover, .btn-primary.active:focus, .btn-primary.active.focus,\n    .open > .btn-primary.dropdown-toggle:hover,\n    .open > .btn-primary.dropdown-toggle:focus,\n    .open > .btn-primary.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #204d74;\n      border-color: #122b40; }\n  .btn-primary:active, .btn-primary.active,\n  .open > .btn-primary.dropdown-toggle {\n    background-image: none; }\n  .btn-primary.disabled:hover, .btn-primary.disabled:focus, .btn-primary.disabled.focus, .btn-primary[disabled]:hover, .btn-primary[disabled]:focus, .btn-primary[disabled].focus,\n  fieldset[disabled] .btn-primary:hover,\n  fieldset[disabled] .btn-primary:focus,\n  fieldset[disabled] .btn-primary.focus {\n    background-color: #337ab7;\n    border-color: #2e6da4; }\n  .btn-primary .badge {\n    color: #337ab7;\n    background-color: #fff; }\n\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c; }\n  .btn-success:focus, .btn-success.focus {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #255625; }\n  .btn-success:hover {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    color: #fff;\n    background-color: #449d44;\n    border-color: #398439; }\n    .btn-success:active:hover, .btn-success:active:focus, .btn-success:active.focus, .btn-success.active:hover, .btn-success.active:focus, .btn-success.active.focus,\n    .open > .btn-success.dropdown-toggle:hover,\n    .open > .btn-success.dropdown-toggle:focus,\n    .open > .btn-success.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #398439;\n      border-color: #255625; }\n  .btn-success:active, .btn-success.active,\n  .open > .btn-success.dropdown-toggle {\n    background-image: none; }\n  .btn-success.disabled:hover, .btn-success.disabled:focus, .btn-success.disabled.focus, .btn-success[disabled]:hover, .btn-success[disabled]:focus, .btn-success[disabled].focus,\n  fieldset[disabled] .btn-success:hover,\n  fieldset[disabled] .btn-success:focus,\n  fieldset[disabled] .btn-success.focus {\n    background-color: #5cb85c;\n    border-color: #4cae4c; }\n  .btn-success .badge {\n    color: #5cb85c;\n    background-color: #fff; }\n\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da; }\n  .btn-info:focus, .btn-info.focus {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #1b6d85; }\n  .btn-info:hover {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    color: #fff;\n    background-color: #31b0d5;\n    border-color: #269abc; }\n    .btn-info:active:hover, .btn-info:active:focus, .btn-info:active.focus, .btn-info.active:hover, .btn-info.active:focus, .btn-info.active.focus,\n    .open > .btn-info.dropdown-toggle:hover,\n    .open > .btn-info.dropdown-toggle:focus,\n    .open > .btn-info.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #269abc;\n      border-color: #1b6d85; }\n  .btn-info:active, .btn-info.active,\n  .open > .btn-info.dropdown-toggle {\n    background-image: none; }\n  .btn-info.disabled:hover, .btn-info.disabled:focus, .btn-info.disabled.focus, .btn-info[disabled]:hover, .btn-info[disabled]:focus, .btn-info[disabled].focus,\n  fieldset[disabled] .btn-info:hover,\n  fieldset[disabled] .btn-info:focus,\n  fieldset[disabled] .btn-info.focus {\n    background-color: #5bc0de;\n    border-color: #46b8da; }\n  .btn-info .badge {\n    color: #5bc0de;\n    background-color: #fff; }\n\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236; }\n  .btn-warning:focus, .btn-warning.focus {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #985f0d; }\n  .btn-warning:hover {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    color: #fff;\n    background-color: #ec971f;\n    border-color: #d58512; }\n    .btn-warning:active:hover, .btn-warning:active:focus, .btn-warning:active.focus, .btn-warning.active:hover, .btn-warning.active:focus, .btn-warning.active.focus,\n    .open > .btn-warning.dropdown-toggle:hover,\n    .open > .btn-warning.dropdown-toggle:focus,\n    .open > .btn-warning.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #d58512;\n      border-color: #985f0d; }\n  .btn-warning:active, .btn-warning.active,\n  .open > .btn-warning.dropdown-toggle {\n    background-image: none; }\n  .btn-warning.disabled:hover, .btn-warning.disabled:focus, .btn-warning.disabled.focus, .btn-warning[disabled]:hover, .btn-warning[disabled]:focus, .btn-warning[disabled].focus,\n  fieldset[disabled] .btn-warning:hover,\n  fieldset[disabled] .btn-warning:focus,\n  fieldset[disabled] .btn-warning.focus {\n    background-color: #f0ad4e;\n    border-color: #eea236; }\n  .btn-warning .badge {\n    color: #f0ad4e;\n    background-color: #fff; }\n\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a; }\n  .btn-danger:focus, .btn-danger.focus {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #761c19; }\n  .btn-danger:hover {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    color: #fff;\n    background-color: #c9302c;\n    border-color: #ac2925; }\n    .btn-danger:active:hover, .btn-danger:active:focus, .btn-danger:active.focus, .btn-danger.active:hover, .btn-danger.active:focus, .btn-danger.active.focus,\n    .open > .btn-danger.dropdown-toggle:hover,\n    .open > .btn-danger.dropdown-toggle:focus,\n    .open > .btn-danger.dropdown-toggle.focus {\n      color: #fff;\n      background-color: #ac2925;\n      border-color: #761c19; }\n  .btn-danger:active, .btn-danger.active,\n  .open > .btn-danger.dropdown-toggle {\n    background-image: none; }\n  .btn-danger.disabled:hover, .btn-danger.disabled:focus, .btn-danger.disabled.focus, .btn-danger[disabled]:hover, .btn-danger[disabled]:focus, .btn-danger[disabled].focus,\n  fieldset[disabled] .btn-danger:hover,\n  fieldset[disabled] .btn-danger:focus,\n  fieldset[disabled] .btn-danger.focus {\n    background-color: #d9534f;\n    border-color: #d43f3a; }\n  .btn-danger .badge {\n    color: #d9534f;\n    background-color: #fff; }\n\n.btn-link {\n  color: #337ab7;\n  font-weight: normal;\n  border-radius: 0; }\n  .btn-link, .btn-link:active, .btn-link.active, .btn-link[disabled],\n  fieldset[disabled] .btn-link {\n    background-color: transparent;\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n  .btn-link, .btn-link:hover, .btn-link:focus, .btn-link:active {\n    border-color: transparent; }\n  .btn-link:hover, .btn-link:focus {\n    color: #23527c;\n    text-decoration: underline;\n    background-color: transparent; }\n  .btn-link[disabled]:hover, .btn-link[disabled]:focus,\n  fieldset[disabled] .btn-link:hover,\n  fieldset[disabled] .btn-link:focus {\n    color: #777777;\n    text-decoration: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333;\n  border-radius: 6px; }\n\n.btn-sm, .btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-xs, .btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px; }\n\n.btn-block {\n  display: block;\n  width: 100%; }\n\n.btn-block + .btn-block {\n  margin-top: 5px; }\n\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%; }\n\n.fade {\n  opacity: 0;\n  -webkit-transition: opacity 0.15s linear;\n  -o-transition: opacity 0.15s linear;\n  transition: opacity 0.15s linear; }\n  .fade.in {\n    opacity: 1; }\n\n.collapse {\n  display: none; }\n  .collapse.in {\n    display: block; }\n\ntr.collapse.in {\n  display: table-row; }\n\ntbody.collapse.in {\n  display: table-row-group; }\n\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  -webkit-transition-property: height, visibility;\n  transition-property: height, visibility;\n  -webkit-transition-duration: 0.35s;\n  transition-duration: 0.35s;\n  -webkit-transition-timing-function: ease;\n  transition-timing-function: ease; }\n\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent; }\n\n.dropup,\n.dropdown {\n  position: relative; }\n\n.dropdown-toggle:focus {\n  outline: 0; }\n\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 4px;\n  -webkit-box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);\n  background-clip: padding-box; }\n  .dropdown-menu.pull-right {\n    right: 0;\n    left: auto; }\n  .dropdown-menu .divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .dropdown-menu > li > a {\n    display: block;\n    padding: 3px 20px;\n    clear: both;\n    font-weight: normal;\n    line-height: 1.42857;\n    color: #333333;\n    white-space: nowrap; }\n\n.dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus {\n  text-decoration: none;\n  color: #262626;\n  background-color: #f5f5f5; }\n\n.dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  outline: 0;\n  background-color: #337ab7; }\n\n.dropdown-menu > .disabled > a, .dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  color: #777777; }\n\n.dropdown-menu > .disabled > a:hover, .dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n  cursor: not-allowed; }\n\n.open > .dropdown-menu {\n  display: block; }\n\n.open > a {\n  outline: 0; }\n\n.dropdown-menu-right {\n  left: auto;\n  right: 0; }\n\n.dropdown-menu-left {\n  left: 0;\n  right: auto; }\n\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857;\n  color: #777777;\n  white-space: nowrap; }\n\n.dropdown-backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  z-index: 990; }\n\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto; }\n\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n  content: \"\"; }\n\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px; }\n\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto; }\n  .navbar-right .dropdown-menu-left {\n    left: 0;\n    right: auto; } }\n\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle; }\n  .btn-group > .btn,\n  .btn-group-vertical > .btn {\n    position: relative;\n    float: left; }\n    .btn-group > .btn:hover, .btn-group > .btn:focus, .btn-group > .btn:active, .btn-group > .btn.active,\n    .btn-group-vertical > .btn:hover,\n    .btn-group-vertical > .btn:focus,\n    .btn-group-vertical > .btn:active,\n    .btn-group-vertical > .btn.active {\n      z-index: 2; }\n\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px; }\n\n.btn-toolbar {\n  margin-left: -5px; }\n  .btn-toolbar:before, .btn-toolbar:after {\n    content: \" \";\n    display: table; }\n  .btn-toolbar:after {\n    clear: both; }\n  .btn-toolbar .btn,\n  .btn-toolbar .btn-group,\n  .btn-toolbar .input-group {\n    float: left; }\n  .btn-toolbar > .btn,\n  .btn-toolbar > .btn-group,\n  .btn-toolbar > .input-group {\n    margin-left: 5px; }\n\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0; }\n\n.btn-group > .btn:first-child {\n  margin-left: 0; }\n  .btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n    border-bottom-right-radius: 0;\n    border-top-right-radius: 0; }\n\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group > .btn-group {\n  float: left; }\n\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0; }\n\n.btn-group > .btn + .dropdown-toggle {\n  padding-left: 8px;\n  padding-right: 8px; }\n\n.btn-group > .btn-lg + .dropdown-toggle, .btn-group-lg.btn-group > .btn + .dropdown-toggle {\n  padding-left: 12px;\n  padding-right: 12px; }\n\n.btn-group.open .dropdown-toggle {\n  -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125); }\n  .btn-group.open .dropdown-toggle.btn-link {\n    -webkit-box-shadow: none;\n    box-shadow: none; }\n\n.btn .caret {\n  margin-left: 0; }\n\n.btn-lg .caret, .btn-group-lg > .btn .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0; }\n\n.dropup .btn-lg .caret, .dropup .btn-group-lg > .btn .caret {\n  border-width: 0 5px 5px; }\n\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%; }\n\n.btn-group-vertical > .btn-group:before, .btn-group-vertical > .btn-group:after {\n  content: \" \";\n  display: table; }\n\n.btn-group-vertical > .btn-group:after {\n  clear: both; }\n\n.btn-group-vertical > .btn-group > .btn {\n  float: none; }\n\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0; }\n\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0; }\n\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate; }\n  .btn-group-justified > .btn,\n  .btn-group-justified > .btn-group {\n    float: none;\n    display: table-cell;\n    width: 1%; }\n  .btn-group-justified > .btn-group .btn {\n    width: 100%; }\n  .btn-group-justified > .btn-group .dropdown-menu {\n    left: auto; }\n\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none; }\n\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate; }\n  .input-group[class*=\"col-\"] {\n    float: none;\n    padding-left: 0;\n    padding-right: 0; }\n  .input-group .form-control {\n    position: relative;\n    z-index: 2;\n    float: left;\n    width: 100%;\n    margin-bottom: 0; }\n    .input-group .form-control:focus {\n      z-index: 3; }\n\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell; }\n  .input-group-addon:not(:first-child):not(:last-child),\n  .input-group-btn:not(:first-child):not(:last-child),\n  .input-group .form-control:not(:first-child):not(:last-child) {\n    border-radius: 0; }\n\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle; }\n\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555555;\n  text-align: center;\n  background-color: #eeeeee;\n  border: 1px solid #ccc;\n  border-radius: 4px; }\n  .input-group-addon.input-sm,\n  .input-group-sm > .input-group-addon,\n  .input-group-sm > .input-group-btn > .input-group-addon.btn {\n    padding: 5px 10px;\n    font-size: 12px;\n    border-radius: 3px; }\n  .input-group-addon.input-lg,\n  .input-group-lg > .input-group-addon,\n  .input-group-lg > .input-group-btn > .input-group-addon.btn {\n    padding: 10px 16px;\n    font-size: 18px;\n    border-radius: 6px; }\n  .input-group-addon input[type=\"radio\"],\n  .input-group-addon input[type=\"checkbox\"] {\n    margin-top: 0; }\n\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0; }\n\n.input-group-addon:first-child {\n  border-right: 0; }\n\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0; }\n\n.input-group-addon:last-child {\n  border-left: 0; }\n\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap; }\n  .input-group-btn > .btn {\n    position: relative; }\n    .input-group-btn > .btn + .btn {\n      margin-left: -1px; }\n    .input-group-btn > .btn:hover, .input-group-btn > .btn:focus, .input-group-btn > .btn:active {\n      z-index: 2; }\n  .input-group-btn:first-child > .btn,\n  .input-group-btn:first-child > .btn-group {\n    margin-right: -1px; }\n  .input-group-btn:last-child > .btn,\n  .input-group-btn:last-child > .btn-group {\n    z-index: 2;\n    margin-left: -1px; }\n\n.nav {\n  margin-bottom: 0;\n  padding-left: 0;\n  list-style: none; }\n  .nav:before, .nav:after {\n    content: \" \";\n    display: table; }\n  .nav:after {\n    clear: both; }\n  .nav > li {\n    position: relative;\n    display: block; }\n    .nav > li > a {\n      position: relative;\n      display: block;\n      padding: 10px 15px; }\n      .nav > li > a:hover, .nav > li > a:focus {\n        text-decoration: none;\n        background-color: #eeeeee; }\n    .nav > li.disabled > a {\n      color: #777777; }\n      .nav > li.disabled > a:hover, .nav > li.disabled > a:focus {\n        color: #777777;\n        text-decoration: none;\n        background-color: transparent;\n        cursor: not-allowed; }\n  .nav .open > a, .nav .open > a:hover, .nav .open > a:focus {\n    background-color: #eeeeee;\n    border-color: #337ab7; }\n  .nav .nav-divider {\n    height: 1px;\n    margin: 9px 0;\n    overflow: hidden;\n    background-color: #e5e5e5; }\n  .nav > li > a > img {\n    max-width: none; }\n\n.nav-tabs {\n  border-bottom: 1px solid #ddd; }\n  .nav-tabs > li {\n    float: left;\n    margin-bottom: -1px; }\n    .nav-tabs > li > a {\n      margin-right: 2px;\n      line-height: 1.42857;\n      border: 1px solid transparent;\n      border-radius: 4px 4px 0 0; }\n      .nav-tabs > li > a:hover {\n        border-color: #eeeeee #eeeeee #ddd; }\n    .nav-tabs > li.active > a, .nav-tabs > li.active > a:hover, .nav-tabs > li.active > a:focus {\n      color: #555555;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-bottom-color: transparent;\n      cursor: default; }\n\n.nav-pills > li {\n  float: left; }\n  .nav-pills > li > a {\n    border-radius: 4px; }\n  .nav-pills > li + li {\n    margin-left: 2px; }\n  .nav-pills > li.active > a, .nav-pills > li.active > a:hover, .nav-pills > li.active > a:focus {\n    color: #fff;\n    background-color: #337ab7; }\n\n.nav-stacked > li {\n  float: none; }\n  .nav-stacked > li + li {\n    margin-top: 2px;\n    margin-left: 0; }\n\n.nav-justified, .nav-tabs.nav-justified {\n  width: 100%; }\n  .nav-justified > li, .nav-tabs.nav-justified > li {\n    float: none; }\n    .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n      text-align: center;\n      margin-bottom: 5px; }\n  .nav-justified > .dropdown .dropdown-menu {\n    top: auto;\n    left: auto; }\n  @media (min-width: 768px) {\n    .nav-justified > li, .nav-tabs.nav-justified > li {\n      display: table-cell;\n      width: 1%; }\n      .nav-justified > li > a, .nav-tabs.nav-justified > li > a {\n        margin-bottom: 0; } }\n\n.nav-tabs-justified, .nav-tabs.nav-justified {\n  border-bottom: 0; }\n  .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n    margin-right: 0;\n    border-radius: 4px; }\n  .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n    border: 1px solid #ddd; }\n  @media (min-width: 768px) {\n    .nav-tabs-justified > li > a, .nav-tabs.nav-justified > li > a {\n      border-bottom: 1px solid #ddd;\n      border-radius: 4px 4px 0 0; }\n    .nav-tabs-justified > .active > a, .nav-tabs.nav-justified > .active > a,\n    .nav-tabs-justified > .active > a:hover, .nav-tabs.nav-justified > .active > a:hover,\n    .nav-tabs-justified > .active > a:focus, .nav-tabs.nav-justified > .active > a:focus {\n      border-bottom-color: #fff; } }\n\n.tab-content > .tab-pane {\n  display: none; }\n\n.tab-content > .active {\n  display: block; }\n\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent; }\n  .navbar:before, .navbar:after {\n    content: \" \";\n    display: table; }\n  .navbar:after {\n    clear: both; }\n  @media (min-width: 768px) {\n    .navbar {\n      border-radius: 4px; } }\n\n.navbar-header:before, .navbar-header:after {\n  content: \" \";\n  display: table; }\n\n.navbar-header:after {\n  clear: both; }\n\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left; } }\n\n.navbar-collapse {\n  overflow-x: visible;\n  padding-right: 15px;\n  padding-left: 15px;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);\n  -webkit-overflow-scrolling: touch; }\n  .navbar-collapse:before, .navbar-collapse:after {\n    content: \" \";\n    display: table; }\n  .navbar-collapse:after {\n    clear: both; }\n  .navbar-collapse.in {\n    overflow-y: auto; }\n  @media (min-width: 768px) {\n    .navbar-collapse {\n      width: auto;\n      border-top: 0;\n      box-shadow: none; }\n      .navbar-collapse.collapse {\n        display: block !important;\n        height: auto !important;\n        padding-bottom: 0;\n        overflow: visible !important; }\n      .navbar-collapse.in {\n        overflow-y: visible; }\n      .navbar-fixed-top .navbar-collapse,\n      .navbar-static-top .navbar-collapse,\n      .navbar-fixed-bottom .navbar-collapse {\n        padding-left: 0;\n        padding-right: 0; } }\n\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px; }\n  @media (max-device-width: 480px) and (orientation: landscape) {\n    .navbar-fixed-top .navbar-collapse,\n    .navbar-fixed-bottom .navbar-collapse {\n      max-height: 200px; } }\n\n.container > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-header,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px; }\n  @media (min-width: 768px) {\n    .container > .navbar-header,\n    .container > .navbar-collapse,\n    .container-fluid > .navbar-header,\n    .container-fluid > .navbar-collapse {\n      margin-right: 0;\n      margin-left: 0; } }\n\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px; }\n  @media (min-width: 768px) {\n    .navbar-static-top {\n      border-radius: 0; } }\n\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030; }\n  @media (min-width: 768px) {\n    .navbar-fixed-top,\n    .navbar-fixed-bottom {\n      border-radius: 0; } }\n\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px; }\n\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0; }\n\n.navbar-brand {\n  float: left;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n  height: 50px; }\n  .navbar-brand:hover, .navbar-brand:focus {\n    text-decoration: none; }\n  .navbar-brand > img {\n    display: block; }\n  @media (min-width: 768px) {\n    .navbar > .container .navbar-brand,\n    .navbar > .container-fluid .navbar-brand {\n      margin-left: -15px; } }\n\n.navbar-toggle {\n  position: relative;\n  float: right;\n  margin-right: 15px;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .navbar-toggle:focus {\n    outline: 0; }\n  .navbar-toggle .icon-bar {\n    display: block;\n    width: 22px;\n    height: 2px;\n    border-radius: 1px; }\n  .navbar-toggle .icon-bar + .icon-bar {\n    margin-top: 4px; }\n  @media (min-width: 768px) {\n    .navbar-toggle {\n      display: none; } }\n\n.navbar-nav {\n  margin: 7.5px -15px; }\n  .navbar-nav > li > a {\n    padding-top: 10px;\n    padding-bottom: 10px;\n    line-height: 20px; }\n  @media (max-width: 767px) {\n    .navbar-nav .open .dropdown-menu {\n      position: static;\n      float: none;\n      width: auto;\n      margin-top: 0;\n      background-color: transparent;\n      border: 0;\n      box-shadow: none; }\n      .navbar-nav .open .dropdown-menu > li > a,\n      .navbar-nav .open .dropdown-menu .dropdown-header {\n        padding: 5px 15px 5px 25px; }\n      .navbar-nav .open .dropdown-menu > li > a {\n        line-height: 20px; }\n        .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-nav .open .dropdown-menu > li > a:focus {\n          background-image: none; } }\n  @media (min-width: 768px) {\n    .navbar-nav {\n      float: left;\n      margin: 0; }\n      .navbar-nav > li {\n        float: left; }\n        .navbar-nav > li > a {\n          padding-top: 15px;\n          padding-bottom: 15px; } }\n\n.navbar-form {\n  margin-left: -15px;\n  margin-right: -15px;\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1), 0 1px 0 rgba(255, 255, 255, 0.1);\n  margin-top: 8px;\n  margin-bottom: 8px; }\n  @media (min-width: 768px) {\n    .navbar-form .form-group {\n      display: inline-block;\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .form-control {\n      display: inline-block;\n      width: auto;\n      vertical-align: middle; }\n    .navbar-form .form-control-static {\n      display: inline-block; }\n    .navbar-form .input-group {\n      display: inline-table;\n      vertical-align: middle; }\n      .navbar-form .input-group .input-group-addon,\n      .navbar-form .input-group .input-group-btn,\n      .navbar-form .input-group .form-control {\n        width: auto; }\n    .navbar-form .input-group > .form-control {\n      width: 100%; }\n    .navbar-form .control-label {\n      margin-bottom: 0;\n      vertical-align: middle; }\n    .navbar-form .radio,\n    .navbar-form .checkbox {\n      display: inline-block;\n      margin-top: 0;\n      margin-bottom: 0;\n      vertical-align: middle; }\n      .navbar-form .radio label,\n      .navbar-form .checkbox label {\n        padding-left: 0; }\n    .navbar-form .radio input[type=\"radio\"],\n    .navbar-form .checkbox input[type=\"checkbox\"] {\n      position: relative;\n      margin-left: 0; }\n    .navbar-form .has-feedback .form-control-feedback {\n      top: 0; } }\n  @media (max-width: 767px) {\n    .navbar-form .form-group {\n      margin-bottom: 5px; }\n      .navbar-form .form-group:last-child {\n        margin-bottom: 0; } }\n  @media (min-width: 768px) {\n    .navbar-form {\n      width: auto;\n      border: 0;\n      margin-left: 0;\n      margin-right: 0;\n      padding-top: 0;\n      padding-bottom: 0;\n      -webkit-box-shadow: none;\n      box-shadow: none; } }\n\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-right-radius: 4px;\n  border-top-left-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px; }\n  .navbar-btn.btn-sm, .btn-group-sm > .navbar-btn.btn {\n    margin-top: 10px;\n    margin-bottom: 10px; }\n  .navbar-btn.btn-xs, .btn-group-xs > .navbar-btn.btn {\n    margin-top: 14px;\n    margin-bottom: 14px; }\n\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n  @media (min-width: 768px) {\n    .navbar-text {\n      float: left;\n      margin-left: 15px;\n      margin-right: 15px; } }\n\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important; }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px; }\n    .navbar-right ~ .navbar-right {\n      margin-right: 0; } }\n\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7; }\n  .navbar-default .navbar-brand {\n    color: #777; }\n    .navbar-default .navbar-brand:hover, .navbar-default .navbar-brand:focus {\n      color: #5e5e5e;\n      background-color: transparent; }\n  .navbar-default .navbar-text {\n    color: #777; }\n  .navbar-default .navbar-nav > li > a {\n    color: #777; }\n    .navbar-default .navbar-nav > li > a:hover, .navbar-default .navbar-nav > li > a:focus {\n      color: #333;\n      background-color: transparent; }\n  .navbar-default .navbar-nav > .active > a, .navbar-default .navbar-nav > .active > a:hover, .navbar-default .navbar-nav > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7; }\n  .navbar-default .navbar-nav > .disabled > a, .navbar-default .navbar-nav > .disabled > a:hover, .navbar-default .navbar-nav > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent; }\n  .navbar-default .navbar-toggle {\n    border-color: #ddd; }\n    .navbar-default .navbar-toggle:hover, .navbar-default .navbar-toggle:focus {\n      background-color: #ddd; }\n    .navbar-default .navbar-toggle .icon-bar {\n      background-color: #888; }\n  .navbar-default .navbar-collapse,\n  .navbar-default .navbar-form {\n    border-color: #e7e7e7; }\n  .navbar-default .navbar-nav > .open > a, .navbar-default .navbar-nav > .open > a:hover, .navbar-default .navbar-nav > .open > a:focus {\n    background-color: #e7e7e7;\n    color: #555; }\n  @media (max-width: 767px) {\n    .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n      color: #777; }\n      .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #333;\n        background-color: transparent; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .active > a, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #555;\n      background-color: #e7e7e7; }\n    .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #ccc;\n      background-color: transparent; } }\n  .navbar-default .navbar-link {\n    color: #777; }\n    .navbar-default .navbar-link:hover {\n      color: #333; }\n  .navbar-default .btn-link {\n    color: #777; }\n    .navbar-default .btn-link:hover, .navbar-default .btn-link:focus {\n      color: #333; }\n    .navbar-default .btn-link[disabled]:hover, .navbar-default .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-default .btn-link:hover,\n    fieldset[disabled] .navbar-default .btn-link:focus {\n      color: #ccc; }\n\n.navbar-inverse {\n  background-color: #222;\n  border-color: #090909; }\n  .navbar-inverse .navbar-brand {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-brand:hover, .navbar-inverse .navbar-brand:focus {\n      color: #fff;\n      background-color: transparent; }\n  .navbar-inverse .navbar-text {\n    color: #9d9d9d; }\n  .navbar-inverse .navbar-nav > li > a {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-nav > li > a:hover, .navbar-inverse .navbar-nav > li > a:focus {\n      color: #fff;\n      background-color: transparent; }\n  .navbar-inverse .navbar-nav > .active > a, .navbar-inverse .navbar-nav > .active > a:hover, .navbar-inverse .navbar-nav > .active > a:focus {\n    color: #fff;\n    background-color: #090909; }\n  .navbar-inverse .navbar-nav > .disabled > a, .navbar-inverse .navbar-nav > .disabled > a:hover, .navbar-inverse .navbar-nav > .disabled > a:focus {\n    color: #444;\n    background-color: transparent; }\n  .navbar-inverse .navbar-toggle {\n    border-color: #333; }\n    .navbar-inverse .navbar-toggle:hover, .navbar-inverse .navbar-toggle:focus {\n      background-color: #333; }\n    .navbar-inverse .navbar-toggle .icon-bar {\n      background-color: #fff; }\n  .navbar-inverse .navbar-collapse,\n  .navbar-inverse .navbar-form {\n    border-color: #101010; }\n  .navbar-inverse .navbar-nav > .open > a, .navbar-inverse .navbar-nav > .open > a:hover, .navbar-inverse .navbar-nav > .open > a:focus {\n    background-color: #090909;\n    color: #fff; }\n  @media (max-width: 767px) {\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n      border-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n      background-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n      color: #9d9d9d; }\n      .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n        color: #fff;\n        background-color: transparent; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n      color: #fff;\n      background-color: #090909; }\n    .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover, .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n      color: #444;\n      background-color: transparent; } }\n  .navbar-inverse .navbar-link {\n    color: #9d9d9d; }\n    .navbar-inverse .navbar-link:hover {\n      color: #fff; }\n  .navbar-inverse .btn-link {\n    color: #9d9d9d; }\n    .navbar-inverse .btn-link:hover, .navbar-inverse .btn-link:focus {\n      color: #fff; }\n    .navbar-inverse .btn-link[disabled]:hover, .navbar-inverse .btn-link[disabled]:focus,\n    fieldset[disabled] .navbar-inverse .btn-link:hover,\n    fieldset[disabled] .navbar-inverse .btn-link:focus {\n      color: #444; }\n\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px; }\n  .breadcrumb > li {\n    display: inline-block; }\n    .breadcrumb > li + li:before {\n      content: \"/\\A0\";\n      padding: 0 5px;\n      color: #ccc; }\n  .breadcrumb > .active {\n    color: #777777; }\n\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px; }\n  .pagination > li {\n    display: inline; }\n    .pagination > li > a,\n    .pagination > li > span {\n      position: relative;\n      float: left;\n      padding: 6px 12px;\n      line-height: 1.42857;\n      text-decoration: none;\n      color: #337ab7;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      margin-left: -1px; }\n    .pagination > li:first-child > a,\n    .pagination > li:first-child > span {\n      margin-left: 0;\n      border-bottom-left-radius: 4px;\n      border-top-left-radius: 4px; }\n    .pagination > li:last-child > a,\n    .pagination > li:last-child > span {\n      border-bottom-right-radius: 4px;\n      border-top-right-radius: 4px; }\n  .pagination > li > a:hover, .pagination > li > a:focus,\n  .pagination > li > span:hover,\n  .pagination > li > span:focus {\n    z-index: 2;\n    color: #23527c;\n    background-color: #eeeeee;\n    border-color: #ddd; }\n  .pagination > .active > a, .pagination > .active > a:hover, .pagination > .active > a:focus,\n  .pagination > .active > span,\n  .pagination > .active > span:hover,\n  .pagination > .active > span:focus {\n    z-index: 3;\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7;\n    cursor: default; }\n  .pagination > .disabled > span,\n  .pagination > .disabled > span:hover,\n  .pagination > .disabled > span:focus,\n  .pagination > .disabled > a,\n  .pagination > .disabled > a:hover,\n  .pagination > .disabled > a:focus {\n    color: #777777;\n    background-color: #fff;\n    border-color: #ddd;\n    cursor: not-allowed; }\n\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.33333; }\n\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-bottom-left-radius: 6px;\n  border-top-left-radius: 6px; }\n\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-bottom-right-radius: 6px;\n  border-top-right-radius: 6px; }\n\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5; }\n\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px; }\n\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  list-style: none;\n  text-align: center; }\n  .pager:before, .pager:after {\n    content: \" \";\n    display: table; }\n  .pager:after {\n    clear: both; }\n  .pager li {\n    display: inline; }\n    .pager li > a,\n    .pager li > span {\n      display: inline-block;\n      padding: 5px 14px;\n      background-color: #fff;\n      border: 1px solid #ddd;\n      border-radius: 15px; }\n    .pager li > a:hover,\n    .pager li > a:focus {\n      text-decoration: none;\n      background-color: #eeeeee; }\n  .pager .next > a,\n  .pager .next > span {\n    float: right; }\n  .pager .previous > a,\n  .pager .previous > span {\n    float: left; }\n  .pager .disabled > a,\n  .pager .disabled > a:hover,\n  .pager .disabled > a:focus,\n  .pager .disabled > span {\n    color: #777777;\n    background-color: #fff;\n    cursor: not-allowed; }\n\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em; }\n  .label:empty {\n    display: none; }\n  .btn .label {\n    position: relative;\n    top: -1px; }\n\na.label:hover, a.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.label-default {\n  background-color: #777777; }\n  .label-default[href]:hover, .label-default[href]:focus {\n    background-color: #5e5e5e; }\n\n.label-primary {\n  background-color: #337ab7; }\n  .label-primary[href]:hover, .label-primary[href]:focus {\n    background-color: #286090; }\n\n.label-success {\n  background-color: #5cb85c; }\n  .label-success[href]:hover, .label-success[href]:focus {\n    background-color: #449d44; }\n\n.label-info {\n  background-color: #5bc0de; }\n  .label-info[href]:hover, .label-info[href]:focus {\n    background-color: #31b0d5; }\n\n.label-warning {\n  background-color: #f0ad4e; }\n  .label-warning[href]:hover, .label-warning[href]:focus {\n    background-color: #ec971f; }\n\n.label-danger {\n  background-color: #d9534f; }\n  .label-danger[href]:hover, .label-danger[href]:focus {\n    background-color: #c9302c; }\n\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  color: #fff;\n  line-height: 1;\n  vertical-align: middle;\n  white-space: nowrap;\n  text-align: center;\n  background-color: #777777;\n  border-radius: 10px; }\n  .badge:empty {\n    display: none; }\n  .btn .badge {\n    position: relative;\n    top: -1px; }\n  .btn-xs .badge, .btn-group-xs > .btn .badge,\n  .btn-group-xs > .btn .badge {\n    top: 0;\n    padding: 1px 5px; }\n  .list-group-item.active > .badge,\n  .nav-pills > .active > a > .badge {\n    color: #337ab7;\n    background-color: #fff; }\n  .list-group-item > .badge {\n    float: right; }\n  .list-group-item > .badge + .badge {\n    margin-right: 5px; }\n  .nav-pills > li > a > .badge {\n    margin-left: 3px; }\n\na.badge:hover, a.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer; }\n\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eeeeee; }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    color: inherit; }\n  .jumbotron p {\n    margin-bottom: 15px;\n    font-size: 21px;\n    font-weight: 200; }\n  .jumbotron > hr {\n    border-top-color: #d5d5d5; }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    border-radius: 6px;\n    padding-left: 15px;\n    padding-right: 15px; }\n  .jumbotron .container {\n    max-width: 100%; }\n  @media screen and (min-width: 768px) {\n    .jumbotron {\n      padding-top: 48px;\n      padding-bottom: 48px; }\n      .container .jumbotron,\n      .container-fluid .jumbotron {\n        padding-left: 60px;\n        padding-right: 60px; }\n      .jumbotron h1,\n      .jumbotron .h1 {\n        font-size: 63px; } }\n\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  -webkit-transition: border 0.2s ease-in-out;\n  -o-transition: border 0.2s ease-in-out;\n  transition: border 0.2s ease-in-out; }\n  .thumbnail > img,\n  .thumbnail a > img {\n    display: block;\n    max-width: 100%;\n    height: auto;\n    margin-left: auto;\n    margin-right: auto; }\n  .thumbnail .caption {\n    padding: 9px;\n    color: #333333; }\n\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7; }\n\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px; }\n  .alert h4 {\n    margin-top: 0;\n    color: inherit; }\n  .alert .alert-link {\n    font-weight: bold; }\n  .alert > p,\n  .alert > ul {\n    margin-bottom: 0; }\n  .alert > p + p {\n    margin-top: 5px; }\n\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px; }\n  .alert-dismissable .close,\n  .alert-dismissible .close {\n    position: relative;\n    top: -2px;\n    right: -21px;\n    color: inherit; }\n\n.alert-success {\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n  color: #3c763d; }\n  .alert-success hr {\n    border-top-color: #c9e2b3; }\n  .alert-success .alert-link {\n    color: #2b542c; }\n\n.alert-info {\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n  color: #31708f; }\n  .alert-info hr {\n    border-top-color: #a6e1ec; }\n  .alert-info .alert-link {\n    color: #245269; }\n\n.alert-warning {\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n  color: #8a6d3b; }\n  .alert-warning hr {\n    border-top-color: #f7e1b5; }\n  .alert-warning .alert-link {\n    color: #66512c; }\n\n.alert-danger {\n  background-color: #f2dede;\n  border-color: #ebccd1;\n  color: #a94442; }\n  .alert-danger hr {\n    border-top-color: #e4b9c0; }\n  .alert-danger .alert-link {\n    color: #843534; }\n\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0; }\n  to {\n    background-position: 0 0; } }\n\n.progress {\n  overflow: hidden;\n  height: 20px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1); }\n\n.progress-bar {\n  float: left;\n  width: 0%;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);\n  -webkit-transition: width 0.6s ease;\n  -o-transition: width 0.6s ease;\n  transition: width 0.6s ease; }\n\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px; }\n\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n  -o-animation: progress-bar-stripes 2s linear infinite;\n  animation: progress-bar-stripes 2s linear infinite; }\n\n.progress-bar-success {\n  background-color: #5cb85c; }\n  .progress-striped .progress-bar-success {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-info {\n  background-color: #5bc0de; }\n  .progress-striped .progress-bar-info {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-warning {\n  background-color: #f0ad4e; }\n  .progress-striped .progress-bar-warning {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.progress-bar-danger {\n  background-color: #d9534f; }\n  .progress-striped .progress-bar-danger {\n    background-image: -webkit-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: -o-linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);\n    background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent); }\n\n.media {\n  margin-top: 15px; }\n  .media:first-child {\n    margin-top: 0; }\n\n.media,\n.media-body {\n  zoom: 1;\n  overflow: hidden; }\n\n.media-body {\n  width: 10000px; }\n\n.media-object {\n  display: block; }\n  .media-object.img-thumbnail {\n    max-width: none; }\n\n.media-right,\n.media > .pull-right {\n  padding-left: 10px; }\n\n.media-left,\n.media > .pull-left {\n  padding-right: 10px; }\n\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top; }\n\n.media-middle {\n  vertical-align: middle; }\n\n.media-bottom {\n  vertical-align: bottom; }\n\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.media-list {\n  padding-left: 0;\n  list-style: none; }\n\n.list-group {\n  margin-bottom: 20px;\n  padding-left: 0; }\n\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd; }\n  .list-group-item:first-child {\n    border-top-right-radius: 4px;\n    border-top-left-radius: 4px; }\n  .list-group-item:last-child {\n    margin-bottom: 0;\n    border-bottom-right-radius: 4px;\n    border-bottom-left-radius: 4px; }\n\na.list-group-item,\nbutton.list-group-item {\n  color: #555; }\n  a.list-group-item .list-group-item-heading,\n  button.list-group-item .list-group-item-heading {\n    color: #333; }\n  a.list-group-item:hover, a.list-group-item:focus,\n  button.list-group-item:hover,\n  button.list-group-item:focus {\n    text-decoration: none;\n    color: #555;\n    background-color: #f5f5f5; }\n\nbutton.list-group-item {\n  width: 100%;\n  text-align: left; }\n\n.list-group-item.disabled, .list-group-item.disabled:hover, .list-group-item.disabled:focus {\n  background-color: #eeeeee;\n  color: #777777;\n  cursor: not-allowed; }\n  .list-group-item.disabled .list-group-item-heading, .list-group-item.disabled:hover .list-group-item-heading, .list-group-item.disabled:focus .list-group-item-heading {\n    color: inherit; }\n  .list-group-item.disabled .list-group-item-text, .list-group-item.disabled:hover .list-group-item-text, .list-group-item.disabled:focus .list-group-item-text {\n    color: #777777; }\n\n.list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7; }\n  .list-group-item.active .list-group-item-heading,\n  .list-group-item.active .list-group-item-heading > small,\n  .list-group-item.active .list-group-item-heading > .small, .list-group-item.active:hover .list-group-item-heading,\n  .list-group-item.active:hover .list-group-item-heading > small,\n  .list-group-item.active:hover .list-group-item-heading > .small, .list-group-item.active:focus .list-group-item-heading,\n  .list-group-item.active:focus .list-group-item-heading > small,\n  .list-group-item.active:focus .list-group-item-heading > .small {\n    color: inherit; }\n  .list-group-item.active .list-group-item-text, .list-group-item.active:hover .list-group-item-text, .list-group-item.active:focus .list-group-item-text {\n    color: #c7ddef; }\n\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8; }\n\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d; }\n  a.list-group-item-success .list-group-item-heading,\n  button.list-group-item-success .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-success:hover, a.list-group-item-success:focus,\n  button.list-group-item-success:hover,\n  button.list-group-item-success:focus {\n    color: #3c763d;\n    background-color: #d0e9c6; }\n  a.list-group-item-success.active, a.list-group-item-success.active:hover, a.list-group-item-success.active:focus,\n  button.list-group-item-success.active,\n  button.list-group-item-success.active:hover,\n  button.list-group-item-success.active:focus {\n    color: #fff;\n    background-color: #3c763d;\n    border-color: #3c763d; }\n\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7; }\n\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f; }\n  a.list-group-item-info .list-group-item-heading,\n  button.list-group-item-info .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-info:hover, a.list-group-item-info:focus,\n  button.list-group-item-info:hover,\n  button.list-group-item-info:focus {\n    color: #31708f;\n    background-color: #c4e3f3; }\n  a.list-group-item-info.active, a.list-group-item-info.active:hover, a.list-group-item-info.active:focus,\n  button.list-group-item-info.active,\n  button.list-group-item-info.active:hover,\n  button.list-group-item-info.active:focus {\n    color: #fff;\n    background-color: #31708f;\n    border-color: #31708f; }\n\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3; }\n\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b; }\n  a.list-group-item-warning .list-group-item-heading,\n  button.list-group-item-warning .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-warning:hover, a.list-group-item-warning:focus,\n  button.list-group-item-warning:hover,\n  button.list-group-item-warning:focus {\n    color: #8a6d3b;\n    background-color: #faf2cc; }\n  a.list-group-item-warning.active, a.list-group-item-warning.active:hover, a.list-group-item-warning.active:focus,\n  button.list-group-item-warning.active,\n  button.list-group-item-warning.active:hover,\n  button.list-group-item-warning.active:focus {\n    color: #fff;\n    background-color: #8a6d3b;\n    border-color: #8a6d3b; }\n\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede; }\n\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442; }\n  a.list-group-item-danger .list-group-item-heading,\n  button.list-group-item-danger .list-group-item-heading {\n    color: inherit; }\n  a.list-group-item-danger:hover, a.list-group-item-danger:focus,\n  button.list-group-item-danger:hover,\n  button.list-group-item-danger:focus {\n    color: #a94442;\n    background-color: #ebcccc; }\n  a.list-group-item-danger.active, a.list-group-item-danger.active:hover, a.list-group-item-danger.active:focus,\n  button.list-group-item-danger.active,\n  button.list-group-item-danger.active:hover,\n  button.list-group-item-danger.active:focus {\n    color: #fff;\n    background-color: #a94442;\n    border-color: #a94442; }\n\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px; }\n\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3; }\n\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05); }\n\n.panel-body {\n  padding: 15px; }\n  .panel-body:before, .panel-body:after {\n    content: \" \";\n    display: table; }\n  .panel-body:after {\n    clear: both; }\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel-heading > .dropdown .dropdown-toggle {\n    color: inherit; }\n\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit; }\n  .panel-title > a,\n  .panel-title > small,\n  .panel-title > .small,\n  .panel-title > small > a,\n  .panel-title > .small > a {\n    color: inherit; }\n\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0; }\n  .panel > .list-group .list-group-item,\n  .panel > .panel-collapse > .list-group .list-group-item {\n    border-width: 1px 0;\n    border-radius: 0; }\n  .panel > .list-group:first-child .list-group-item:first-child,\n  .panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n    border-top: 0;\n    border-top-right-radius: 3px;\n    border-top-left-radius: 3px; }\n  .panel > .list-group:last-child .list-group-item:last-child,\n  .panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n    border-bottom: 0;\n    border-bottom-right-radius: 3px;\n    border-bottom-left-radius: 3px; }\n\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-right-radius: 0;\n  border-top-left-radius: 0; }\n\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0; }\n\n.list-group + .panel-footer {\n  border-top-width: 0; }\n\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0; }\n  .panel > .table caption,\n  .panel > .table-responsive > .table caption,\n  .panel > .panel-collapse > .table caption {\n    padding-left: 15px;\n    padding-right: 15px; }\n\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-right-radius: 3px;\n  border-top-left-radius: 3px; }\n  .panel > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table:first-child > tbody:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n  .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n      border-top-left-radius: 3px; }\n    .panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n    .panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n      border-top-right-radius: 3px; }\n\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px; }\n  .panel > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table:last-child > tfoot:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n  .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n    border-bottom-left-radius: 3px;\n    border-bottom-right-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n      border-bottom-left-radius: 3px; }\n    .panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n    .panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n      border-bottom-right-radius: 3px; }\n\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd; }\n\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0; }\n\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0; }\n  .panel > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-bordered > tfoot > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0; }\n  .panel > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-bordered > tfoot > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0; }\n  .panel > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-bordered > tbody > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n    border-bottom: 0; }\n  .panel > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-bordered > tfoot > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n  .panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n    border-bottom: 0; }\n\n.panel > .table-responsive {\n  border: 0;\n  margin-bottom: 0; }\n\n.panel-group {\n  margin-bottom: 20px; }\n  .panel-group .panel {\n    margin-bottom: 0;\n    border-radius: 4px; }\n    .panel-group .panel + .panel {\n      margin-top: 5px; }\n  .panel-group .panel-heading {\n    border-bottom: 0; }\n    .panel-group .panel-heading + .panel-collapse > .panel-body,\n    .panel-group .panel-heading + .panel-collapse > .list-group {\n      border-top: 1px solid #ddd; }\n  .panel-group .panel-footer {\n    border-top: 0; }\n    .panel-group .panel-footer + .panel-collapse .panel-body {\n      border-bottom: 1px solid #ddd; }\n\n.panel-default {\n  border-color: #ddd; }\n  .panel-default > .panel-heading {\n    color: #333333;\n    background-color: #f5f5f5;\n    border-color: #ddd; }\n    .panel-default > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ddd; }\n    .panel-default > .panel-heading .badge {\n      color: #f5f5f5;\n      background-color: #333333; }\n  .panel-default > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ddd; }\n\n.panel-primary {\n  border-color: #337ab7; }\n  .panel-primary > .panel-heading {\n    color: #fff;\n    background-color: #337ab7;\n    border-color: #337ab7; }\n    .panel-primary > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #337ab7; }\n    .panel-primary > .panel-heading .badge {\n      color: #337ab7;\n      background-color: #fff; }\n  .panel-primary > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #337ab7; }\n\n.panel-success {\n  border-color: #d6e9c6; }\n  .panel-success > .panel-heading {\n    color: #3c763d;\n    background-color: #dff0d8;\n    border-color: #d6e9c6; }\n    .panel-success > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #d6e9c6; }\n    .panel-success > .panel-heading .badge {\n      color: #dff0d8;\n      background-color: #3c763d; }\n  .panel-success > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #d6e9c6; }\n\n.panel-info {\n  border-color: #bce8f1; }\n  .panel-info > .panel-heading {\n    color: #31708f;\n    background-color: #d9edf7;\n    border-color: #bce8f1; }\n    .panel-info > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #bce8f1; }\n    .panel-info > .panel-heading .badge {\n      color: #d9edf7;\n      background-color: #31708f; }\n  .panel-info > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #bce8f1; }\n\n.panel-warning {\n  border-color: #faebcc; }\n  .panel-warning > .panel-heading {\n    color: #8a6d3b;\n    background-color: #fcf8e3;\n    border-color: #faebcc; }\n    .panel-warning > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #faebcc; }\n    .panel-warning > .panel-heading .badge {\n      color: #fcf8e3;\n      background-color: #8a6d3b; }\n  .panel-warning > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #faebcc; }\n\n.panel-danger {\n  border-color: #ebccd1; }\n  .panel-danger > .panel-heading {\n    color: #a94442;\n    background-color: #f2dede;\n    border-color: #ebccd1; }\n    .panel-danger > .panel-heading + .panel-collapse > .panel-body {\n      border-top-color: #ebccd1; }\n    .panel-danger > .panel-heading .badge {\n      color: #f2dede;\n      background-color: #a94442; }\n  .panel-danger > .panel-footer + .panel-collapse > .panel-body {\n    border-bottom-color: #ebccd1; }\n\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden; }\n  .embed-responsive .embed-responsive-item,\n  .embed-responsive iframe,\n  .embed-responsive embed,\n  .embed-responsive object,\n  .embed-responsive video {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    height: 100%;\n    width: 100%;\n    border: 0; }\n\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%; }\n\n.embed-responsive-4by3 {\n  padding-bottom: 75%; }\n\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05); }\n  .well blockquote {\n    border-color: #ddd;\n    border-color: rgba(0, 0, 0, 0.15); }\n\n.well-lg {\n  padding: 24px;\n  border-radius: 6px; }\n\n.well-sm {\n  padding: 9px;\n  border-radius: 3px; }\n\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  opacity: 0.2;\n  filter: alpha(opacity=20); }\n  .close:hover, .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\nbutton.close {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n  -webkit-appearance: none; }\n\n.modal-open {\n  overflow: hidden; }\n\n.modal {\n  display: none;\n  overflow: hidden;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  -webkit-overflow-scrolling: touch;\n  outline: 0; }\n  .modal.fade .modal-dialog {\n    -webkit-transform: translate(0, -25%);\n    -ms-transform: translate(0, -25%);\n    -o-transform: translate(0, -25%);\n    transform: translate(0, -25%);\n    -webkit-transition: -webkit-transform 0.3s ease-out;\n    -moz-transition: -moz-transform 0.3s ease-out;\n    -o-transition: -o-transform 0.3s ease-out;\n    transition: transform 0.3s ease-out; }\n  .modal.in .modal-dialog {\n    -webkit-transform: translate(0, 0);\n    -ms-transform: translate(0, 0);\n    -o-transform: translate(0, 0);\n    transform: translate(0, 0); }\n\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px; }\n\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);\n  background-clip: padding-box;\n  outline: 0; }\n\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000; }\n  .modal-backdrop.fade {\n    opacity: 0;\n    filter: alpha(opacity=0); }\n  .modal-backdrop.in {\n    opacity: 0.5;\n    filter: alpha(opacity=50); }\n\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5; }\n  .modal-header:before, .modal-header:after {\n    content: \" \";\n    display: table; }\n  .modal-header:after {\n    clear: both; }\n\n.modal-header .close {\n  margin-top: -2px; }\n\n.modal-title {\n  margin: 0;\n  line-height: 1.42857; }\n\n.modal-body {\n  position: relative;\n  padding: 15px; }\n\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5; }\n  .modal-footer:before, .modal-footer:after {\n    content: \" \";\n    display: table; }\n  .modal-footer:after {\n    clear: both; }\n  .modal-footer .btn + .btn {\n    margin-left: 5px;\n    margin-bottom: 0; }\n  .modal-footer .btn-group .btn + .btn {\n    margin-left: -1px; }\n  .modal-footer .btn-block + .btn-block {\n    margin-left: 0; }\n\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll; }\n\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto; }\n  .modal-content {\n    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5); }\n  .modal-sm {\n    width: 300px; } }\n\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px; } }\n\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 12px;\n  opacity: 0;\n  filter: alpha(opacity=0); }\n  .tooltip.in {\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .tooltip.top {\n    margin-top: -3px;\n    padding: 5px 0; }\n  .tooltip.right {\n    margin-left: 3px;\n    padding: 0 5px; }\n  .tooltip.bottom {\n    margin-top: 3px;\n    padding: 5px 0; }\n  .tooltip.left {\n    margin-left: -3px;\n    padding: 0 5px; }\n\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px; }\n\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-left .tooltip-arrow {\n  bottom: 0;\n  right: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.42857;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  font-size: 14px;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2); }\n  .popover.top {\n    margin-top: -10px; }\n  .popover.right {\n    margin-left: 10px; }\n  .popover.bottom {\n    margin-top: 10px; }\n  .popover.left {\n    margin-left: -10px; }\n\n.popover-title {\n  margin: 0;\n  padding: 8px 14px;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0; }\n\n.popover-content {\n  padding: 9px 14px; }\n\n.popover > .arrow, .popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n.popover > .arrow {\n  border-width: 11px; }\n\n.popover > .arrow:after {\n  border-width: 10px;\n  content: \"\"; }\n\n.popover.top > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-bottom-width: 0;\n  border-top-color: #999999;\n  border-top-color: rgba(0, 0, 0, 0.25);\n  bottom: -11px; }\n  .popover.top > .arrow:after {\n    content: \" \";\n    bottom: 1px;\n    margin-left: -10px;\n    border-bottom-width: 0;\n    border-top-color: #fff; }\n\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-left-width: 0;\n  border-right-color: #999999;\n  border-right-color: rgba(0, 0, 0, 0.25); }\n  .popover.right > .arrow:after {\n    content: \" \";\n    left: 1px;\n    bottom: -10px;\n    border-left-width: 0;\n    border-right-color: #fff; }\n\n.popover.bottom > .arrow {\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999999;\n  border-bottom-color: rgba(0, 0, 0, 0.25);\n  top: -11px; }\n  .popover.bottom > .arrow:after {\n    content: \" \";\n    top: 1px;\n    margin-left: -10px;\n    border-top-width: 0;\n    border-bottom-color: #fff; }\n\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999999;\n  border-left-color: rgba(0, 0, 0, 0.25); }\n  .popover.left > .arrow:after {\n    content: \" \";\n    right: 1px;\n    border-right-width: 0;\n    border-left-color: #fff;\n    bottom: -10px; }\n\n.carousel {\n  position: relative; }\n\n.carousel-inner {\n  position: relative;\n  overflow: hidden;\n  width: 100%; }\n  .carousel-inner > .item {\n    display: none;\n    position: relative;\n    -webkit-transition: 0.6s ease-in-out left;\n    -o-transition: 0.6s ease-in-out left;\n    transition: 0.6s ease-in-out left; }\n    .carousel-inner > .item > img,\n    .carousel-inner > .item > a > img {\n      display: block;\n      max-width: 100%;\n      height: auto;\n      line-height: 1; }\n    @media all and (transform-3d), (-webkit-transform-3d) {\n      .carousel-inner > .item {\n        -webkit-transition: -webkit-transform 0.6s ease-in-out;\n        -moz-transition: -moz-transform 0.6s ease-in-out;\n        -o-transition: -o-transform 0.6s ease-in-out;\n        transition: transform 0.6s ease-in-out;\n        -webkit-backface-visibility: hidden;\n        -moz-backface-visibility: hidden;\n        backface-visibility: hidden;\n        -webkit-perspective: 1000px;\n        -moz-perspective: 1000px;\n        perspective: 1000px; }\n        .carousel-inner > .item.next, .carousel-inner > .item.active.right {\n          -webkit-transform: translate3d(100%, 0, 0);\n          transform: translate3d(100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.prev, .carousel-inner > .item.active.left {\n          -webkit-transform: translate3d(-100%, 0, 0);\n          transform: translate3d(-100%, 0, 0);\n          left: 0; }\n        .carousel-inner > .item.next.left, .carousel-inner > .item.prev.right, .carousel-inner > .item.active {\n          -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n          left: 0; } }\n  .carousel-inner > .active,\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    display: block; }\n  .carousel-inner > .active {\n    left: 0; }\n  .carousel-inner > .next,\n  .carousel-inner > .prev {\n    position: absolute;\n    top: 0;\n    width: 100%; }\n  .carousel-inner > .next {\n    left: 100%; }\n  .carousel-inner > .prev {\n    left: -100%; }\n  .carousel-inner > .next.left,\n  .carousel-inner > .prev.right {\n    left: 0; }\n  .carousel-inner > .active.left {\n    left: -100%; }\n  .carousel-inner > .active.right {\n    left: 100%; }\n\n.carousel-control {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 15%;\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);\n  background-color: transparent; }\n  .carousel-control.left {\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.0001) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1); }\n  .carousel-control.right {\n    left: auto;\n    right: 0;\n    background-image: -webkit-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: -o-linear-gradient(left, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.0001) 0%, rgba(0, 0, 0, 0.5) 100%);\n    background-repeat: repeat-x;\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1); }\n  .carousel-control:hover, .carousel-control:focus {\n    outline: 0;\n    color: #fff;\n    text-decoration: none;\n    opacity: 0.9;\n    filter: alpha(opacity=90); }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right {\n    position: absolute;\n    top: 50%;\n    margin-top: -10px;\n    z-index: 5;\n    display: inline-block; }\n  .carousel-control .icon-prev,\n  .carousel-control .glyphicon-chevron-left {\n    left: 50%;\n    margin-left: -10px; }\n  .carousel-control .icon-next,\n  .carousel-control .glyphicon-chevron-right {\n    right: 50%;\n    margin-right: -10px; }\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 20px;\n    height: 20px;\n    line-height: 1;\n    font-family: serif; }\n  .carousel-control .icon-prev:before {\n    content: '\\2039'; }\n  .carousel-control .icon-next:before {\n    content: '\\203A'; }\n\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  margin-left: -30%;\n  padding-left: 0;\n  list-style: none;\n  text-align: center; }\n  .carousel-indicators li {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 1px;\n    text-indent: -999px;\n    border: 1px solid #fff;\n    border-radius: 10px;\n    cursor: pointer;\n    background-color: #000 \\9;\n    background-color: transparent; }\n  .carousel-indicators .active {\n    margin: 0;\n    width: 12px;\n    height: 12px;\n    background-color: #fff; }\n\n.carousel-caption {\n  position: absolute;\n  left: 15%;\n  right: 15%;\n  bottom: 20px;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6); }\n  .carousel-caption .btn {\n    text-shadow: none; }\n\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px; }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px; }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px; }\n  .carousel-caption {\n    left: 20%;\n    right: 20%;\n    padding-bottom: 30px; }\n  .carousel-indicators {\n    bottom: 20px; } }\n\n.clearfix:before, .clearfix:after {\n  content: \" \";\n  display: table; }\n\n.clearfix:after {\n  clear: both; }\n\n.center-block {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.pull-right {\n  float: right !important; }\n\n.pull-left {\n  float: left !important; }\n\n.hide {\n  display: none !important; }\n\n.show {\n  display: block !important; }\n\n.invisible {\n  visibility: hidden; }\n\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0; }\n\n.hidden {\n  display: none !important; }\n\n.affix {\n  position: fixed; }\n\n@-ms-viewport {\n  width: device-width; }\n\n.visible-xs {\n  display: none !important; }\n\n.visible-sm {\n  display: none !important; }\n\n.visible-md {\n  display: none !important; }\n\n.visible-lg {\n  display: none !important; }\n\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important; }\n\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important; }\n  table.visible-xs {\n    display: table !important; }\n  tr.visible-xs {\n    display: table-row !important; }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important; } }\n\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important; }\n  table.visible-sm {\n    display: table !important; }\n  tr.visible-sm {\n    display: table-row !important; }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important; }\n  table.visible-md {\n    display: table !important; }\n  tr.visible-md {\n    display: table-row !important; }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important; }\n  table.visible-lg {\n    display: table !important; }\n  tr.visible-lg {\n    display: table-row !important; }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important; } }\n\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important; } }\n\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important; } }\n\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important; } }\n\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important; } }\n\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important; } }\n\n.visible-print {\n  display: none !important; }\n\n@media print {\n  .visible-print {\n    display: block !important; }\n  table.visible-print {\n    display: table !important; }\n  tr.visible-print {\n    display: table-row !important; }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important; } }\n\n.visible-print-block {\n  display: none !important; }\n  @media print {\n    .visible-print-block {\n      display: block !important; } }\n\n.visible-print-inline {\n  display: none !important; }\n  @media print {\n    .visible-print-inline {\n      display: inline !important; } }\n\n.visible-print-inline-block {\n  display: none !important; }\n  @media print {\n    .visible-print-inline-block {\n      display: inline-block !important; } }\n\n@media print {\n  .hidden-print {\n    display: none !important; } }\n\nbody {\n  font-family: 'Lato', sans-serif;\n  padding: 45px; }\n\nbody {\n  background-color: #fff;\n  color: #31708f; }\n\n.intro-body {\n  background: url(\"http://i.imgur.com/NAn3ojT.gif\");\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n#content {\n  margin: 5%; }\n\n.logo {\n  margin-top: -15px; }\n\n.upload-container {\n  max-width: 45%;\n  margin: 10px auto 30px auto; }\n\n.dropdown {\n  margin: 20px auto;\n  text-align: center; }\n\n.well {\n  text-align: center; }\n\n.options {\n  max-width: 95%;\n  text-align: center;\n  margin: 50px auto; }\n\n#event-listing {\n  background-color: #ffffff;\n  border-radius: 20px;\n  margin: 25px auto;\n  padding: 15px 10%;\n  text-align: center;\n  height: 750px;\n  width: 85%; }\n\n.tools {\n  clear: both; }\n\n.functions {\n  position: absolute;\n  left: 20px;\n  top: 30px;\n  width: 20%; }\n\ncanvas {\n  background-color: #ffffff;\n  border-radius: 20px;\n  margin: 20px auto;\n  text-align: center; }\n\n.content {\n  clear: both;\n  margin: 20px auto;\n  max-width: 85%;\n  text-align: center; }\n\n.jumbotron {\n  background: none;\n  margin-top: 60px;\n  max-width: 75%; }\n\n.banner-text {\n  color: #000;\n  font-weight: 300; }\n\nlabel {\n  font-weight: 300;\n  color: #000;\n  font-size: 18px; }\n\n#account {\n  right: 10px;\n  position: absolute;\n  top: 30px; }\n\nh2 {\n  color: #2c8d3d; }\n\n.clicked {\n  color: #eee;\n  font-weight: 900; }\n\n.btn-default:hover {\n  color: #blue; }\n\n.navbar-btn:hover {\n  color: #31708f; }\n\n.nav {\n  margin-left: -15px;\n  margin-right: -15px;\n  margin-left: 75%; }\n  .nav:before, .nav:after {\n    content: \" \";\n    display: table; }\n  .nav:after {\n    clear: both; }\n  .nav .nav-button {\n    position: relative;\n    min-height: 1px;\n    padding-left: 15px;\n    padding-right: 15px;\n    position: relative;\n    min-height: 1px;\n    padding-left: 15px;\n    padding-right: 15px;\n    position: relative;\n    min-height: 1px;\n    padding-left: 15px;\n    padding-right: 15px;\n    position: relative;\n    float: left;\n    width: 25%;\n    min-height: 1px;\n    padding-left: 15px;\n    padding-right: 15px; }\n    @media (min-width: 1200px) {\n      .nav .nav-button {\n        float: left;\n        width: 25%; } }\n    @media (min-width: 992px) {\n      .nav .nav-button {\n        float: left;\n        width: 25%; } }\n    @media (min-width: 768px) {\n      .nav .nav-button {\n        float: left;\n        width: 25%; } }\n\n@media (max-width: 800px) {\n  .logo img {\n    margin: 40px auto 0;\n    max-width: 100px;\n    text-align: center; } }\n\n/*!\n * bootstrap-fileinput v4.3.3\n * http://plugins.krajee.com/file-input\n *\n * Author: Kartik Visweswaran\n * Copyright: 2014 - 2016, Kartik Visweswaran, Krajee.com\n *\n * Licensed under the BSD 3-Clause\n * https://github.com/kartik-v/bootstrap-fileinput/blob/master/LICENSE.md\n */\n.file-loading {\n  top: 0;\n  right: 0;\n  width: 25px;\n  height: 25px;\n  font-size: 999px;\n  text-align: right;\n  color: #fff;\n  border: none; }\n\n.file-object {\n  margin: 0 0 -5px 0;\n  padding: 0; }\n\n.btn-file {\n  position: relative;\n  overflow: hidden; }\n  .btn-file input[type=file] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    min-width: 100%;\n    min-height: 100%;\n    text-align: right;\n    opacity: 0;\n    background: none repeat scroll 0 0 transparent;\n    cursor: inherit;\n    display: block; }\n\n.file-caption-name {\n  display: inline-block;\n  overflow: hidden;\n  height: 20px;\n  word-break: break-all; }\n\n.input-group-lg .file-caption-name {\n  height: 25px; }\n\n.file-zoom-dialog {\n  text-align: left; }\n\n.file-error-message {\n  color: #a94442;\n  background-color: #f2dede;\n  margin: 5px;\n  border: 1px solid #ebccd1;\n  border-radius: 4px;\n  padding: 15px; }\n  .file-error-message pre, .file-error-message ul {\n    margin: 0;\n    text-align: left; }\n  .file-error-message pre {\n    margin: 5px 0; }\n\n.file-caption-disabled {\n  background-color: #EEEEEE;\n  cursor: not-allowed;\n  opacity: 1; }\n\n.file-preview {\n  border-radius: 5px;\n  border: 1px solid #ddd;\n  padding: 5px;\n  width: 100%;\n  margin-bottom: 5px; }\n\n.file-preview-frame {\n  position: relative;\n  display: table;\n  margin: 8px;\n  height: 160px;\n  border: 1px solid #ddd;\n  box-shadow: 1px 1px 5px 0 #a2958a;\n  padding: 6px;\n  float: left;\n  text-align: center;\n  vertical-align: middle; }\n  .file-preview-frame:not(.file-preview-error):hover {\n    box-shadow: 3px 3px 5px 0 #333; }\n\n.file-preview-image {\n  vertical-align: middle; }\n\n.file-preview-text {\n  display: block;\n  color: #428bca;\n  border: 1px solid #ddd;\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n  outline: none;\n  padding: 8px;\n  resize: none; }\n\n.file-preview-html {\n  border: 1px solid #ddd;\n  padding: 8px;\n  overflow: auto; }\n\n.file-zoom-dialog .file-preview-text {\n  font-size: 1.2em; }\n\n.file-preview-other {\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  margin: auto;\n  text-align: center;\n  vertical-align: middle;\n  padding: 10px; }\n  .file-preview-other:hover {\n    opacity: 0.8; }\n\n.file-actions, .file-other-error {\n  text-align: left; }\n\n.file-other-icon {\n  font-size: 4.8em; }\n\n/* noinspection CssOverwrittenProperties */\n.file-zoom-dialog .file-other-icon {\n  font-size: 8em;\n  font-size: 55vmin; }\n\n.file-input-new .file-preview, .file-input-new .close, .file-input-new .glyphicon-file, .file-input-new .fileinput-remove-button, .file-input-new .fileinput-upload-button {\n  display: none; }\n\n.file-input-ajax-new .fileinput-remove-button, .file-input-ajax-new .fileinput-upload-button {\n  display: none; }\n\n.file-actions {\n  margin-top: 15px; }\n\n.file-footer-buttons {\n  float: right; }\n\n.file-upload-indicator {\n  display: inline;\n  cursor: default;\n  opacity: 0.8;\n  width: 60%; }\n  .file-upload-indicator:hover {\n    font-weight: bold;\n    opacity: 1; }\n\n.file-footer-caption {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 160px;\n  text-align: center;\n  padding-top: 4px;\n  font-size: 11px;\n  color: #777;\n  margin: 5px auto; }\n\n.file-preview-error {\n  opacity: 0.65;\n  box-shadow: none; }\n\n.file-preview-frame:not(.file-preview-error) .file-footer-caption:hover {\n  color: #000; }\n\n.file-drop-zone {\n  border: 1px dashed #aaa;\n  border-radius: 4px;\n  height: 100%;\n  text-align: center;\n  vertical-align: middle;\n  margin: 12px 15px 12px 12px;\n  padding: 5px; }\n\n.file-drop-zone-title {\n  color: #aaa;\n  font-size: 40px;\n  padding: 85px 10px; }\n\n.file-highlighted {\n  border: 2px dashed #999 !important;\n  background-color: #f0f0f0; }\n\n.file-uploading {\n  opacity: 0.65; }\n\n.file-thumb-progress {\n  height: 10px; }\n  .file-thumb-progress .progress, .file-thumb-progress .progress-bar {\n    height: 10px;\n    font-size: 9px;\n    line-height: 10px; }\n\n.file-thumbnail-footer {\n  position: relative; }\n\n.file-thumb-progress {\n  position: absolute;\n  top: 35px;\n  left: 0;\n  right: 0; }\n\n.file-zoom-fullscreen.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\n.file-zoom-fullscreen .modal-dialog {\n  position: fixed;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0; }\n\n.file-zoom-fullscreen .modal-content {\n  border-radius: 0;\n  box-shadow: none; }\n\n.file-zoom-fullscreen .modal-body {\n  overflow-y: auto; }\n\n.file-zoom-dialog .modal-body {\n  position: relative !important; }\n\n.file-zoom-dialog .btn-navigate {\n  position: absolute;\n  padding: 0;\n  margin: 0;\n  background: transparent;\n  text-decoration: none;\n  outline: none;\n  opacity: 0.7;\n  top: 45%;\n  font-size: 4em;\n  color: #1c94c4; }\n\n.file-zoom-dialog .floating-buttons {\n  position: absolute;\n  top: 5px;\n  right: 10px; }\n\n.floating-buttons {\n  z-index: 3000; }\n  .floating-buttons .btn {\n    z-index: 3000; }\n\n.file-zoom-dialog .kv-zoom-actions .btn, .floating-buttons .btn {\n  margin-left: 3px; }\n\n.file-zoom-dialog .btn-navigate:not([disabled]):hover, .file-zoom-dialog .btn-navigate:not([disabled]):focus {\n  outline: none;\n  box-shadow: none;\n  opacity: 0.5; }\n\n.file-zoom-dialog .btn-navigate[disabled] {\n  opacity: 0.3; }\n\n.file-zoom-dialog .btn-prev {\n  left: 1px; }\n\n.file-zoom-dialog .btn-next {\n  right: 1px; }\n\n.file-drag-handle {\n  display: inline;\n  margin-right: 2px;\n  font-size: 16px;\n  cursor: move;\n  cursor: -webkit-grabbing; }\n  .file-drag-handle:hover {\n    opacity: 0.7; }\n\n.file-zoom-content {\n  height: 480px;\n  text-align: center; }\n\n.file-preview-initial.sortable-chosen {\n  background-color: #d9edf7; }\n\n.file-preview-frame.sortable-ghost {\n  background-color: #eee; }\n\n/* IE 10 fix */\n.btn-file ::-ms-browse {\n  width: 100%;\n  height: 100%; }\n", ""]);

	// exports


/***/ },
/* 45 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f4769f9bdb7466be65088239c12046d1.eot";

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "448c34a56d699c29117adc64c43affeb.woff2";

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fa2772327f55d8198301fdb8bcfc8158.woff";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "e18bbf611f2a2e43afc071aa2f4e1512.ttf";

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "89889688147bd7575d6327160d64e760.svg";

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["getFormFields"] = __webpack_require__(7);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
]);