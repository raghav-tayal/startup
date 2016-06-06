// Full loading page

function loader() {
	setTimeout(function() {
		if ($('audio').length) {
			audiojs.events.ready(function() { $('#preloader').fadeOut(1000); });
		} else {
			$('#preloader').fadeOut(1000);
		}
		return true;
	}, 1300);
	return true;
};

document.addEventListener("DOMContentLoaded", function() {
	loader();
}, false);

$('[data-rel^="prettyPhoto"]').each(function() {
	$rel = $(this).data('rel');
	$(this).attr('rel', $rel);
});
// window load

function isiPhone() {
	var ua = navigator.userAgent.toLowerCase();
	return (
		(navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPad") != -1 || ua.indexOf("android") > -1)
	);
}

loadGoogleMaps = function(){
	var script_tag = document.createElement('script');
	script_tag.setAttribute("type","text/javascript");
	script_tag.setAttribute("src","https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&callback=gMapsInitialize");
	document.body.appendChild(script_tag);
}

window.gMapsInitialize = function() {
	if ($('.gmap_container').length) {
		var myLatlng = new google.maps.LatLng(40.722803, -74.00396);
		var mapOptions = {
				zoom: 17,
				center: myLatlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false
			};
			var map = new google.maps.Map(document.getElementById('gmap'), mapOptions);
			var contentString = '';
			var styles = [{
				stylers: [{
					hue: "#acb3bc"
				}, {
					saturation: -100
				}, {
					lightness: 10
				}]
			}, {
				featureType: "road",
				elementType: "geometry",
				stylers: [{
					lightness: 100
				}, {
					visibility: "simplified"
				}]
			}, {
				featureType: "road",
				elementType: "labels",
				stylers: [{
					saturation: -100
				}, {
					lightness: 10
				}]
			}];
			map.setOptions({
				styles: styles
			});
			var infowindow = new google.maps.InfoWindow({
				content: contentString,
				maxWidth: 200
			});
			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				icon: 'images/gmap_marker.png'
			});
			google.maps.event.addListener(marker, 'mouseover', function() {
				if ($('html').hasClass('textshadow')) {
					$('.cd_container').stop().addClass('finished');
				} else if ($('html').hasClass('no-textshadow')) {
					$('.cd_container').fadeIn(500);
				}
			});
			$('.cd_container').on('mouseleave', function() {
				if ($('html').hasClass('textshadow')) {
					$(this).stop().fadeOut(500, function() {
						$(this).removeClass('finished');
						$(this).removeAttr('style');
					});
				} else if ($('html').hasClass('no-textshadow')) {
					$(this).fadeOut(500);
				}
			});
		}
}

function contact_form_init() {
	//gmap
	//$(window).on('resize', loadGoogleMaps);
	$('.hex_elem_rounded_type_2.open_contact_form').on('click', function() {
		$('.flip_container').addClass('flip_finished');
	});
	$('.close_form').on('click', function() {
		$('.flip_container').removeClass('flip_finished');
	});
	// form placeholder
	if ($('textarea').length) {
		$('textarea').each(function() {
			textval = $(this).text();
			$(this).on('focus', function() {
				if ($(this).text() === textval) $(this).text('');
			});
			$(this).on('blur', function() {
				if ($(this).text() === '') $(this).text(textval);
			});
		});
	}
}

// sticky 
function sticky() {
	var coords = $('.header').outerHeight(),
		next = $('.header').next();
		if ($('header').next().hasClass('main')) {
			$('.header').next().css('margin-top', coords);
		}
	/*if ($('.header').next('.ld_container').length) {
		$('.header').next().next().css('margin-top', coords);
		$('.header').next().css('margin-top', coords);
	} else {
		$('.header').next().css('margin-top', coords);
	}*/

	$(window).scroll(function() {
			if ($(window).width() > 767) {
				if ($(window).scrollTop() == 0) {
					$i = setInterval(function() {
						//$h = $('.header').outerHeight();
						//next.css('margin-top',$h);
					}, 1);
				}
			}
		}
	);
}

function header_animate(e) {
	var menu = $('.main_menu'),
			button = $('.menu_button');
		if ($(window).width() > 767) {
			menu.show();
			menu.children('li').find('ul').hide();
			menu.find('li').each(function() {
				$(this).off().on('mouseenter mouseleave', function() {
					$(this).children('ul').delay(200).stop(true, true).fadeSlideToggle(200);
				});
			});
			menu.find('a').off().on('click', function(event) {
				event.stopPropagation();
			});
			menu.find('li').removeClass('current_subitem');
			if ($('html').hasClass('touch')) {
				menu.find('li').each(function() {
					if ($(this).children('ul').length) {
						$(this).children('a').removeAttr('href');
					}
				});
			}
		} else if ($(window).width() < 767) {
			menu.hide();
			menu.children('li').find('ul').hide();
			button.off().on('click', function() {
				$(this).toggleClass('menu_button_active');
				$(this).next('ul').slideToggle(200);
			});
			menu.find('li').off('mouseenter');
			menu.find('li').off('mouseleave');
			menu.find('li').unbind('mouseenter');
			menu.find('li').unbind('mouseleave');

			menu.find('li').each(function() {
				if ($(this).children('ul').length) {
					$(this).children('a').off().on('click', function(event) {
						$(this).parent('li').toggleClass('current_subitem');
						event.preventDefault();
						$(this).next('ul').slideToggle(200);
						$(this).parent('li').siblings().children('ul').slideUp(200);
						$(this).parent('li').siblings().removeClass('current_subitem');
					});
				}
			});
		}
	button.removeClass('menu_button_active');
	menu.find('li').removeClass('current_subitem');
		
	sticky();
		
	$(window).on('resize', sticky);

	$header = $('.header').not('body.full_w .header'),
	$headerFW = $('body.full_w .header'),
	$optionsFW = $('body.full_w #options_panel > i'),
	$options = $('#options_panel > i').not('body.full_w #options_panel > i');
	var headHeight = $headerFW.outerHeight() + 2,
		optionWidth = $optionsFW.outerWidth();

	$headerFW.css('top', -headHeight);
	$optionsFW.css('right', -optionWidth);

	$('.main').each(function(i) {
		var $this = $(this),
			animClassDown = 'header-small' //$this.data('animateDown'),
			animClassUp = 'header-static' //$this.data('animateUp');
		$this.waypoint(function(direction) {
			// should be redefined after ajax
			$header = $('.header').not('body.full_w .header');
			$header.attr('class', 'header ' + animClassDown);
			$headerFW = $('body.full_w .header'),
			$optionsFW = $('body.full_w #options_panel > i'),
			$options = $('#options_panel > i').not('body.full_w #options_panel > i');
			
			if (direction === 'down' && animClassDown) {
				if ($('body').hasClass('full_w')) {
					$headerFW.animate({'top': 0}, 300);
					$optionsFW.animate({'right': 0}, 300);
				}
			} else if (direction === 'up' && animClassUp) {
				$header.attr('class', 'header ' + animClassUp);
				if ($('body').hasClass('full_w')) {
					$headerFW.animate({'top': -headHeight}, 300);
					$optionsFW.animate({'right': -optionWidth}, 300);
				}
			}
		}, { offset: -1 });
	});

	// revolution
		if ($('.bannercontainer').length) {
			if ($.fn.cssOriginal != undefined)
				$.fn.css = $.fn.cssOriginal;
			var api = $('.bannercontainer').revolution({
				delay: 6000,
				startwidth: 1175,
				startheight: 500,
				onHoverStop: "on",
				hideThumbs: 200,
				navigationType: "bullet",
				navigationStyle: "round",
				navigationHAlign: "center",
				navigationVAlign: "bottom",
				navigationHOffset: 0,
				navigationVOffset: 60,
				touchenabled: "on",
				stopAtSlide: -1,
				stopAfterLoops: -1,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				hideSliderAtLimit: 0,
				fullWidth: "off",
				fullScreen: "off",
				fullScreenOffsetContainer: ".bannercontainer",
				shadow: 0
			});
			api.bind("revolution.slide.onloaded", function(e) {
				jQuery('.tp-bullets').appendTo('.bannercontainer');
				jQuery('.bullet').append('<span></span>');
			});
		}
		if ($('.fullscreencontainer').length) {
			var api2 = $('.fullscreencontainer').revolution({
				delay: 6000,
				startwidth: 1175,
				onHoverStop: "on",
				hideThumbs: 0,
				navigationType: "bullet",
				navigationArrows: "solo",
				navigationStyle: "round",
				navigationHAlign: "center",
				navigationVAlign: "bottom",
				navigationHOffset: 0,
				navigationVOffset: 80,
				touchenabled: "on",
				stopAtSlide: -1,
				stopAfterLoops: -1,
				hideCaptionAtLimit: 0,
				hideAllCaptionAtLilmit: 0,
				hideSliderAtLimit: 0,
				fullWidth: "off",
				fullScreen: "off",
				fullScreenOffsetContainer: "#topheader-to-offset",
				shadow: 0
			});
			api2.bind("revolution.slide.onloaded", function(e) {
				jQuery('.tp-bullets').appendTo('.bannercontainer');
				jQuery('.bullet').append('<span></span>');
			});
		}

$('.full_w .hex_elem_rounded_type_2.ow_icon').each(function() {
		var current = $(this);
		$(this).waypoint(function(direction) {
			if (direction === "down") {
				current.addClass('fade-finished');
			}
			if (direction === "up") {
				current.removeClass('fade-finished');
			}
		}, {
			offset: '90%'
		});
	});
	
	if (!e) {
		if ($('.calendar').length) {
			$('.calendar').kalendae();
		}
		if ($('#flickr').length) {
			$('#flickr').jflickrfeed({
				limit: 6,
				qstrings: {
					id: '87563966@N05'
				},
				itemTemplate: '<li>' +
					'<a rel="prettyPhoto[flickr]" href="{{image}}">' +
					'<div class="hexagon_mini_container">' +
					'<img src="{{image_s}}" alt="{{title}}" />' +
					'<canvas width="89" height="100"></canvas>' +
					'</div>' +
					'<div class="hex_elem_rounded_type_2">+<span class="h_el_01"></span><span class="h_el_02"></span></div>' +
					'</a>' +
					'</li>'
			}, function(data) {
				$('#flickr a').prettyPhoto();
			});
		};
		$('.open_options > ul > li:first-child').append('<i></i>');
		$('.open_options > div, .open_options > span').on('click', function() {
			$(this).siblings('ul').fadeSlideToggle(400);
			$('.open_options > span').hasClass('active') ? $('.open_options > span,.open_options').removeClass('active') : $('.open_options > span,open_options > div,.open_options').addClass('active');
		});
		$('.open_options > ul > li').on('click', function() {
			var t = $(this).text();
			$('.open_options > span').text(t);
			$('.open_options > span,.open_options').removeClass('active');
			$(this).parent().fadeSlideToggle(400);
		});
		
		loadGoogleMaps();
		contact_form_init();
	}
	//pricing tables fix 
	$('.hex_elem_rounded.price_container').each(function() {
		if ($(this).children('span').children('span').eq(1).text().length === 3) $(this).addClass('big');
	});
	// accordion
	function accordion() {
		var accordion = $('[class^="accordion_type_"]'),
			link = accordion.find('dt');
		accordion.children('dl.active').children('dd').children('i').fadeIn(400);
		accordion.children('dl').not('.active').children('dd').hide();
		link.on('click', function() {
			$(this).next().slideDown(400, function() {
				$(this).children('i').fadeIn(400);
			});
			$(this).parent().addClass('active');
			$(this).parent().siblings().find('dd').slideUp(400, function() {
				$(this).children('i').fadeOut(400);
				$(this).parent().removeClass('active');
			});
		});
	}
	accordion();
	// tabs
	$('[id*="tab_type"]').each(function() {
		var container = $(this),
			link = container.children('.tabs_links').children('a'),
			activelink = container.children('.tabs_links').children('a.active'),
			activetab = $('.active_tab'),
			content = container.children('.tabs_content_containers').children('div'),
			tabscont = container.children('.tabs_content_containers'),
			hash = window.location.hash;
		$('#tab_type_1.style_3 > .tabs_links > a:nth-child(2n)').append('<span>or</span>');

		function retHeight() {
			if (activelink.length) {
				var linkhash = activelink.attr('href'),
					height = $(linkhash).outerHeight();
				if (container.find('.active_tab').length) {
					var h = container.find('.active_tab').outerHeight();
					tabscont.css('height', h);
					content.not(container.find('.active_tab')).css('opacity', '0');
				} else {
					tabscont.css('height', height);
					content.not(linkhash).css('opacity', '0');
				}
			} else {
				var height = content.eq(0).outerHeight();
				if (container.find('.active_tab').length) {
					var h = container.find('.active_tab').outerHeight();
					tabscont.css('height', h);
					content.not(container.find('.active_tab')).css('opacity', '0');
				} else {
					content.not(':first').css('opacity', '0');
					tabscont.css('height', height);
					link.eq(0).addClass('active');
				}
			}
		}
		retHeight();
		$(window).on('resize', retHeight);
		link.on('click', function(event) {
			$($(this).attr('href')).addClass('active_tab');
			$($(this).attr('href')).siblings().removeClass('active_tab');
			var hash = $(this).attr('href'),
				height = $(hash).outerHeight();
			$(this).siblings().removeClass('active');
			$(this).addClass('active');
			$(hash).siblings().animate({
				'opacity': '0'
			});
			tabscont.animate({
				'height': height
			}, 200, function() {
				$(hash).animate({
					'opacity': '1'
				});
			});
			event.preventDefault();
		});
	});
	// toggle 
	$('[class^="toggle_type"]').each(function() {
		var container = $(this),
			link = container.children('dl').children('dt');
		container.children('dl').not('.active').children('dd').hide();
		link.on('click', function() {
			$(this).parent().toggleClass('active');
			$(this).next().slideToggle(400);
		});
	});
	// twitter
	if ($('[class^="tweet"]').length) {
		$('.tweet,.tweet_type_2').tweet({
			username: 'Creative_WS',
			count: 3,
			loading_text: 'loading twitter feed...',
			template: "<li><div class='hex_elem_rounded'><span class='icon-twitter'></span></div><a href='{user_url}'>@{screen_name}</a> {join}{text}{time}</li>"
			/* etc... */
		});
	};
	if ($('[class^="twitter_carousel"]').length) {
		$('[class^="twitter_carousel"] .tweet_carousel').tweet({
			username: 'Creative_WS',
			count: 3,
			loading_text: 'loading twitter feed...',
			template: "<li><div class='hex_elem_rounded'></div>{join}{text}{time}<span class='follow'>Follow Us - <a href='{user_url}'>@{screen_name}</a></span></li>"
			/* etc... */
		});
		$('.tweet_list > li:empty').remove();
	};
	// countdown
	if ($('.countdown').length) {
		var currentDate = new Date();
		//add date
		$('.countdown').countdown(new Date(2013, 9, 19), function(event) {
			$this = $(this);
			switch (event.type) {
				case "minutes":
				case "hours":
				case "days":
				case "daysLeft":
					$this.find('dt.' + event.type).html(event.value);
					break;
				case "finished":
					$this.fadeTo('slow', .5);
					break;
			}
		});
	}

	function changeHeight() {
		if ($('.prev_page').outerHeight() > 72) {
			$(window).width() > 759 ? $('.prev_page').css('top', '-22px') : $('.prev_page').removeAttr('style');
		} else if ($('.prev_page').outerHeight() === 72) {
			$(window).width() > 759 ? $('.prev_page').css('top', '-4px') : $('.next_page').removeAttr('style');
		}
		if ($('.next_page').outerHeight() > 72) {
			$(window).width() > 759 ? $('.next_page').css('top', '-22px') : $('.next_page').removeAttr('style');
		} else if ($('.next_page').outerHeight() === 72) {
			$(window).width() > 759 ? $('.next_page').css('top', '-4px') : $('.next_page').removeAttr('style');
		}
	}
	changeHeight();
	$(window).on('resize', changeHeight);
	// first letter
	$('.first_letter').html(function(i, html) {
		return html.replace(/^[^a-zA-Z]*([a-zA-Z])/g, '<div class="hex_elem_rounded"><span>$1</span></div>');
	});
	// title container responsive fix
	$('.title_container.type_3').each(function() {
		if ($(this).find('.next_page').length || $(this).find('.prev_page').length) $(this).addClass('with_links');
	});
	// splash
	function splash() {
		$splash = $('[class^="version_"] .screen > .screen_part');
		$splash.each(function() {
			$topPos = $(this).outerHeight() - $(this).find('img').outerHeight();
			$(this).parent().on('mouseenter', function() {
				$(this).find('img').stop(true).animate({
					'top': $topPos
				}, 3000, 'linear');
				$(this).children('.title').fadeOut(400);
			});
			$(this).parent().on('mouseleave', function() {
				$(this).find('img').stop(true).animate({
					'top': '0'
				}, 3000, 'linear');
				$(this).children('.title').fadeIn(400);
			});
		});
		if ($(window).width() < 959) {
			$('.splash_logo').css('top', ($('.version_one_page').outerHeight()));
		} else if ($(window).width() > 959) {
			$('.splash_logo').removeAttr('style');
		}
	}
	splash();
	$(window).on('resize', splash);
	// idevices fix
	function onlyIDevice() {
		return (
			(navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPad") != -1)
		);
	}

	if (onlyIDevice()) {
		$('html').addClass('onlyIDevice');
	}
	if (isiPhone()) {
		$('html').addClass('idevice');
		if ($('video').length) {
			var video = $('#video_container').children('video').attr('autoplay');
		}
	}
	// colorbox responsive fix
	function colorboxR() {
		$('.colorbox_container').each(function() {
			var $curr = $(this),
				width = $curr.children('img').width();
			if ($(window).width() < 767) {
				if (width > $(window).width()) {
					$curr.removeAttr('style');
				} else if (width < $(window).width()) {
					$curr.css({
						'width': width,
						'margin': '0 auto',
						'display': 'block'
					});
				}
			} else if ($(window).width() >= 767) {
				$curr.removeAttr('style');
			}
		});
	}
	colorboxR();
	$(window).resize(function() {
		colorboxR();
	});
	//parallax
	if ($('[class*="parallax"]').length) {
		$('.parallax.parallax_s_2').parallax("50%", 0.4);
		$('.parallax.recent_work').parallax("50%", 0.4);
		$('.parallax.register_container').parallax("50%", 0.4);
		$('.parallax.parallax_s').parallax("50%", 0.4);
		$('.parallax.article_parallax').parallax("50%", 0.4);
		$('.parallax.article_parallax_02').parallax("50%", 0.4);
		$('.parallax.parallax_section_about').parallax("50%", 0.4);
		$('.parallax.our_team_container').parallax("0%", 0.4);
		//$('.parallax.advertising.first').parallax("50%", 0.4);
		$('.parallax.advertising.color').parallax("50%", 0.4);
		$('.parallax.advertising.icons').parallax("50%", 0.4);
		$('.parallax.advertising.builder').parallax("50%", 0.4);
		$('.parallax.footer').parallax("0%", 0.1);
		$('.parallax.callout_03.timeline').parallax("0%", 0.1);
		$('.rp_wrap.parallax').parallax("0%", 0.1);
	}
	// products showcase
	function fP() {
		$cont = $('.content_wrapper');
		$cont.each(function() {
			$h = ($(this).outerHeight() - $(this).children('figure').height()) / 2;
			$(this).children('figure').css('padding-top', $h);
		});
	}
	setTimeout(fP, 100);
	// fP();
	$(window).on('resize', fP);
	$cursor_space = 11;
	$run_element = $("#custom_cursor");

	function wW() {
		var winWidth = $(window).width();
		$('.content_wrapper > figure').css('width', winWidth);
	}
	wW();
	$(window).on('resize', wW);

	if ($('#myChart').length || $('#myChart2').length) {
		var data = [{
			value: 25,
			color: "#148883"
		}, {
			value: 30,
			color: "#ef5f3b"
		}, {
			value: 45,
			color: "#3eb5b1"
		}]
		defaults1 = {
			segmentShowStroke: false,
			segmentShowStroke: true,
			animation: true,
			animationSteps: 100,
			animationEasing: "easeOutBounce",
			animateRotate: true,
			animateScale: false,
			onAnimationComplete: null
		}
		var datadoughnut = [{
			value: 20,
			color: "#148883"
		}, {
			value: 30,
			color: "#ef5f3b"
		}, {
			value: 50,
			color: "#3eb5b1"
		}]
		defaults2 = {
			segmentShowStroke: true,
			segmentStrokeColor: "#fff",
			segmentStrokeWidth: 5,
			segmentShowStroke: true,
			animation: true,
			animationSteps: 100,
			animationEasing: "easeOutBounce",
			animateRotate: true,
			animateScale: false,
			onAnimationComplete: null
		}

			function chartInit(chart, varname, charttype) {
				setTimeout(function() {
					if (!$('#' + chart).is('[data-init]')) {
						var varname = document.getElementById(chart).getContext("2d");
						if (charttype == 'Doughnut') {
							new Chart(varname).Doughnut(datadoughnut, defaults2);
							$('#' + chart).attr('data-init', 'init');
						} else if (charttype == 'Pie') {
							new Chart(varname).Pie(data, defaults1);
							$('#' + chart).attr('data-init', 'init');
						}
					}
				}, 1400);
			}
		//chartInit("myChart2", "ctx1", "Doughnut");
		//chartInit("myChart", "ctx2", "Pie");
	}
	// graphs
	if ($('[class^="graph_type_"]').length) {
		var graphData = [{
			data: [
				[Date.UTC(2012, 0, 1, 14, 0, 0), 100],
				[Date.UTC(2012, 1, 6, 15, 0, 0), 400],
				[Date.UTC(2012, 2, 4, 16, 0, 0), 200],
				[Date.UTC(2012, 3, 22, 17, 0, 0), 600],
				[Date.UTC(2012, 4, 22, 18, 0, 0), 1000],
				[Date.UTC(2012, 5, 30, 19, 0, 0), 300],
				[Date.UTC(2012, 6, 10, 20, 0, 0), 220],
				[Date.UTC(2012, 7, 6, 21, 0, 0), 700],
				[Date.UTC(2012, 8, 2, 22, 0, 0), 300],
				[Date.UTC(2012, 9, 8, 23, 0, 0), 500],
				[Date.UTC(2012, 10, 9, 0, 0, 0), 190],
				[Date.UTC(2012, 11, 13, 1, 0, 0), 220]
			],
			color: '#fff',
			points: {
				radius: 6,
				fillColor: '#ef5f3b'
			}
		}];
		// chart graph 2 data
		var secondGraphData = [{
			data: [
				[Date.UTC(2012, 0, 1, 14, 0, 0), 100],
				[Date.UTC(2012, 1, 6, 15, 0, 0), 400],
				[Date.UTC(2012, 2, 4, 16, 0, 0), 200],
				[Date.UTC(2012, 3, 22, 17, 0, 0), 600],
				[Date.UTC(2012, 4, 22, 18, 0, 0), 1000],
				[Date.UTC(2012, 5, 30, 19, 0, 0), 300],
				[Date.UTC(2012, 6, 10, 20, 0, 0), 220],
				[Date.UTC(2012, 7, 6, 21, 0, 0), 700],
				[Date.UTC(2012, 8, 2, 22, 0, 0), 300],
				[Date.UTC(2012, 9, 8, 23, 0, 0), 500],
				[Date.UTC(2012, 10, 9, 0, 0, 0), 190],
				[Date.UTC(2012, 11, 13, 1, 0, 0), 220]
			],
			color: '#ef5f3b',
			points: {
				radius: 6,
				fillColor: '#46b8b4'
			}
		}];
		// chart graph 3 data
		var dataBars = [
			["Jan", 277],
			["Feb", 635],
			["Mar", 1000],
			["Apr", 277],
			["May", 635],
			["Jun", 700],
			["Jul", 277],
			["Aug", 635],
			["Sep", 900],
			["Oct", 277],
			["Nov", 635],
			["Dec", 133]
		];
		var ticks = [];
		for (var i = 0; i < dataBars.length; i++) {
			ticks.push([i, dataBars[i][0]]);
			dataBars[i][0] = i;
		}

		function initGraphs() {
			// chart graph 1
			$.plot($('.graph_type_1'), graphData, {
				series: {
					points: {
						show: true,
						lineWidth: 3
					},
					lines: {
						show: true,
						lineWidth: 3
					},
					shadowSize: 0
				},
				grid: {
					color: '#fff',
					borderColor: 'transparent',
					borderWidth: 30,
					hoverable: true
				},
				xaxis: {
					tickColor: 'rgba(255,255,255,0.3)',
					tickDecimals: 2,
					mode: "time",
					minTickSize: [1, "month"],
					min: (new Date(2012, 0, 1)).getTime(),
					max: (new Date(2013, 0, 1)).getTime()
				},
				yaxis: {
					tickColor: '#fff',
					tickSize: 200
				}
			});
			// chart graph 2
			$.plot($('.graph_type_2'), secondGraphData, {
				series: {
					points: {
						show: true,
						lineWidth: 3
					},
					lines: {
						show: true,
						lineWidth: 3
					},
					shadowSize: 3
				},
				grid: {
					borderColor: 'transparent',
					borderWidth: 0,
					hoverable: true
				},
				xaxis: {
					tickColor: '#46b8b4',
					tickDecimals: 1,
					mode: "time",
					minTickSize: [1, "month"],
					min: (new Date(2012, 0, 1)).getTime(),
					max: (new Date(2013, 0, 1)).getTime()
				},
				yaxis: {
					tickColor: '#46b8b4',
					tickSize: 200
				}
			});
			//chart graph 3
			var barSeries = {
				data: dataBars,
				color: "#ef5f3b",
				bars: {
					show: true,
					barWidth: 0.6,
					align: 'center',
					lineWidth: 2,
					fillColor: "rgba(70,184,180,0.8)"
				}
			};
			var barOptions = {
				yaxis: {
					tickColor: '#46b8b4',
					tickSize: 200
				},
				xaxis: {
					ticks: ticks,
					tickColor: 'rgba(70,184,180,0.2)'
				},
				grid: {
					borderWidth: 0
				}
			};
			$.plot($(".graph_type_3"), [barSeries], barOptions);
		}
		initGraphs();
		$(window).on('resize', initGraphs);
	}
	// fix our team
	function otResp() {
		$('.our_team_title_wrap > .content').each(function() {
			$(window).width() < 767 ? $(this).addClass('ot_content_responsive') : $(this).removeClass('ot_content_responsive');
		});
	}
	otResp();
	$(window).on('resize', otResp);
	//audio
	if ($('audio').length) {
		audiojs.events.ready(function() {
			audiojs.createAll();

			function aWdth() {
				$cont = $('.audiojs');
				$w = $cont.outerWidth() - $cont.find('.play-pause').outerWidth() - $cont.find('.time').outerWidth() - 20;
				$cont.find('.scrubber').css('width', $w);
			}
			aWdth();
			$(window).on('resize', aWdth);
		});
	}
	//scrolltop button
	$('.scrolltop').on('click', function(e) {
		$('html,body').animate({
			scrollTop: 0
		}, 1500, 'easeInOutExpo');
		e.preventDefault();
	});
	var current = $('.title_container').next().attr('class');
	if (current === "skills") {
		$('.skills').find('.skills_title_container').css({
			'position': 'relative',
			'top': '0'
		});
	}
	var skill = $('.skill_item'),
		len = skill.length;

	function skillI() {
		skill.each(function(i) {
			if ($(window).width() >= 1200) {
				var posLeft = skill.eq(i).offset().left + 47,
					posTop = skill.eq(i).offset().top + 84 - skill.eq(i).next('.skill_title').outerWidth();
				skill.eq(i).next('.skill_title').css({
					'left': posLeft,
					'top': posTop
				});
			} else if ($(window).width() > 959 && $(window).width() < 1999) {
				var posLeft = skill.eq(i).offset().left + 47,
					posTop = skill.eq(i).offset().top - skill.eq(i).next('.skill_title').outerWidth() + 9;
				skill.eq(i).next('.skill_title').css({
					'left': posLeft,
					'top': posTop
				});
			} else if ($(window).width() > 767 && $(window).width() < 960) {
				var posLeft = skill.eq(i).offset().left + 47,
					posTop = skill.eq(i).offset().top - skill.eq(i).next('.skill_title').outerWidth() - 95;
				skill.eq(i).next('.skill_title').css({
					'left': posLeft,
					'top': posTop
				});
			} else if ($(window).width() < 767) {
				skill.eq(i).next('.skill_title').removeAttr('style');
			}
		});
	}
	skillI();
	$(window).on('resize', skillI);
	skill.each(function(i) {
		var posLeft = skill.eq(i).offset().left + 47,
			position = skill.eq(i).offset().top - 500,
			percent = skill.eq(i).children('.inner').text().slice(0, -1),
			width = +percent - 10,
			k = 0;
		posTop = skill.eq(i).offset().top + 84 - skill.eq(i).next('.skill_title').outerWidth();
		$(window).on('resize', skillI);
		skill.eq(i).next('.skill_title').children('div').css('width', '0px');
		skill.eq(i).children('.inner').text('0%');
		$(window).scroll(function() {
			if ($(window).scrollTop() > position) {
				skill.eq(i).children('.inner').text(percent + '%');
				skill.eq(i).next('.skill_title').children('div').animate({
					'width': width + '%'
				}, 1000);
			};
		});
	});
	// chart Pie
	function backingScale(context) {
		if ('devicePixelRatio' in window) {
			if (window.devicePixelRatio > 1) {
				return window.devicePixelRatio;
			}
		}
		return 1;
	}
	$.fn.buildPie2 = function(ColorOptions, percents) {
		return $(this).each(function() {
			var canvas = $(this).children('canvas')[0],
				ctx = canvas.getContext('2d'),
				scaleFactor = backingScale(ctx),
				radius = 58,
				radius2 = 60,
				radius3 = 100,
				lineWidth = 115,
				lineWidth2 = 120,
				lineWidth3 = 45;
			if (scaleFactor > 1) {
				canvas.width = canvas.width * scaleFactor;
				canvas.height = canvas.height * scaleFactor;
				var ctx = canvas.getContext("2d");
				radius = radius * scaleFactor;
				radius2 = radius2 * scaleFactor;
				radius3 = radius3 * scaleFactor;
				lineWidth = lineWidth * scaleFactor;
				lineWidth2 = lineWidth2 * scaleFactor;
				lineWidth3 = lineWidth3 * scaleFactor;
				$(canvas).parent().css({
					"width": canvas.width / scaleFactor,
					"height": canvas.height / scaleFactor
				});
				$(canvas).parent().parent().css('min-height', canvas.height / 2 - 15);
				$(canvas).css({
					"margin-top": -(canvas.height / scaleFactor) / 2,
					"margin-left": -(canvas.width / scaleFactor) / 2
				});
			}
			ctx.beginPath();
			ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius, 0.00000000000000000001 * Math.PI, Math.PI * 2);
			ctx.strokeStyle = ColorOptions.second;
			ctx.lineWidth = lineWidth;
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius2, (Math.PI / 50) * percents.first, 2 * Math.PI, true);
			ctx.lineWidth = lineWidth2;
			ctx.strokeStyle = '#fff';
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius3, (Math.PI / 50) * percents.first, 2 * Math.PI, true);
			ctx.strokeStyle = ColorOptions.first;
			ctx.lineWidth = lineWidth3;
			ctx.stroke();
		});
	}
	$.fn.buildPie3 = function(ColorOptions, percents) {
		return $(this).each(function() {
			var canvas = $(this).children('canvas')[0],
				ctx = canvas.getContext('2d'),
				scaleFactor = backingScale(ctx),
				radius = 100,
				radius2 = 100,
				lineWidth = 48,
				lineWidth2 = 55;
			if (scaleFactor > 1) {
				canvas.width = canvas.width * scaleFactor;
				canvas.height = canvas.height * scaleFactor;
				var ctx = canvas.getContext("2d");
				radius = radius * scaleFactor;
				radius2 = radius2 * scaleFactor;
				lineWidth = lineWidth * scaleFactor;
				lineWidth2 = lineWidth2 * scaleFactor;
				$(canvas).parent().css({
					"width": canvas.width / scaleFactor,
					"height": canvas.height / scaleFactor
				});
				$(canvas).parent().parent().css('min-height', canvas.height / 2 - 15);
				$(canvas).css({
					"margin-top": -(canvas.height / scaleFactor) / 2,
					"margin-left": -(canvas.width / scaleFactor) / 2
				});
			}
			ctx.beginPath();
			ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius, 0.00000000000000000001 * Math.PI, Math.PI * 2);
			ctx.strokeStyle = ColorOptions.second;
			ctx.lineWidth = lineWidth;
			ctx.stroke();
			ctx.beginPath();
			ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius2, (Math.PI / 50) * percents.first, 2 * Math.PI, true);
			ctx.strokeStyle = ColorOptions.first;
			ctx.lineWidth = lineWidth2;
			ctx.stroke();
		});
	}
	$.fn.buildPie4 = function(ColorOptions, percents) {
		return $(this).each(function() {
			var canvas = $(this).children('canvas')[0],
				ctx = canvas.getContext('2d'),
				scaleFactor = backingScale(ctx),
				radius = 75,
				radius2 = 50,
				radius3 = 110,
				lineWidth = 35,
				lineWidth2 = 100,
				lineWidth3 = 35;
			if (scaleFactor > 1) {
				canvas.width = canvas.width * scaleFactor;
				canvas.height = canvas.height * scaleFactor;
				var ctx = canvas.getContext("2d");
				radius = radius * scaleFactor;
				radius2 = radius2 * scaleFactor;
				radius3 = radius3 * scaleFactor;
				lineWidth = lineWidth * scaleFactor;
				lineWidth2 = lineWidth2 * scaleFactor;
				lineWidth3 = lineWidth3 * scaleFactor;
				$(canvas).parent().css({
					"width": canvas.width / scaleFactor,
					"height": canvas.height / scaleFactor
				});
				$(canvas).parent().parent().css('min-height', canvas.height / 2 - 15);
				$(canvas).css({
					"margin-top": -(canvas.height / scaleFactor) / 2,
					"margin-left": -(canvas.width / scaleFactor) / 2
				});
			}
			ctx.beginPath();
			ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius, 0.00000000000000000001 * Math.PI, Math.PI * 2);
			ctx.strokeStyle = ColorOptions.second;
			ctx.lineWidth = lineWidth;
			ctx.stroke();
			ctx.shadowOffsetX = 1;
			ctx.shadowOffsetY = -1;
			ctx.shadowBlur = 0;
			ctx.shadowColor = ColorOptions.first;

			ctx.beginPath();
			ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius2, (Math.PI / 50) * percents.first, 2 * Math.PI, true);
			ctx.strokeStyle = "#fff";
			ctx.lineWidth = lineWidth2;
			ctx.stroke();

			ctx.beginPath();
			ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius3, (Math.PI / 50) * percents.first, 2 * Math.PI, true);
			ctx.strokeStyle = ColorOptions.first;
			ctx.lineWidth = lineWidth3;
			ctx.stroke();
		});
	}
	$.fn.buildPie5 = function(ColorOptions, percents) {
		return $(this).each(function() {
			var canvas = $(this).children('canvas')[0],
				ctx = canvas.getContext('2d'),
				scaleFactor = backingScale(ctx),
				radius = 117,
				radius2 = 63,
				radius3 = 110,
				lineWidth = 15,
				lineWidth2 = 125,
				lineWidth3 = 35;
			if (scaleFactor > 1) {
				canvas.width = canvas.width * scaleFactor;
				canvas.height = canvas.height * scaleFactor;
				var ctx = canvas.getContext("2d");
				radius = radius * scaleFactor;
				radius2 = radius2 * scaleFactor;
				lineWidth = lineWidth * scaleFactor;
				lineWidth2 = lineWidth2 * scaleFactor;
				$(canvas).parent().css({
					"width": canvas.width / scaleFactor,
					"height": canvas.height / scaleFactor
				});
				$(canvas).parent().parent().css('min-height', canvas.height / 2 - 15);
				$(canvas).css({
					"margin-top": -(canvas.height / scaleFactor) / 2 + 20,
					"margin-left": -(canvas.width / scaleFactor) / 2
				});
			}
			ctx.beginPath();
			ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius, 0.00000000000000000001 * Math.PI, Math.PI * 2);
			ctx.strokeStyle = ColorOptions.second;
			ctx.lineWidth = lineWidth;
			ctx.stroke();
			ctx.shadowOffsetX = 4;
			ctx.shadowOffsetY = -4;
			ctx.shadowBlur = 0;
			ctx.shadowColor = "#fff";

			ctx.beginPath();
			ctx.arc(ctx.canvas.width / 2, ctx.canvas.height / 2, radius2, (Math.PI / 50) * percents.first, 2 * Math.PI, true);
			ctx.strokeStyle = ColorOptions.first;
			ctx.lineWidth = lineWidth2;
			ctx.stroke();
		});
	}
	$('#chartPie_1').buildPie2({
		first: "#3eb5b1",
		second: "#ef5f3b"
	}, {
		first: 70
	});
	$('#chartPie_2').buildPie3({
		first: "#3eb5b1",
		second: "#ef5f3b"
	}, {
		first: 70
	});
	$('#chartPie_3').buildPie4({
		first: "#3eb5b1",
		second: "#ef5f3b"
	}, {
		first: 70
	});
	$('#chartPie_4').buildPie5({
		first: "#3eb5b1",
		second: "#ef5f3b"
	}, {
		first: 70
	});
	if (!e) {
		if ($('.recent_projects').length) {
			var ow = $('.recent_projects');
			$('.recent_projects').owlCarousel({
				items: 6,
				itemsDesktop: [1199, 6],
				itemsTablet: [768, 3],
				itemsMobile: [479, 2]
			});
			$('.recent_projects .owl-item figure').on('mouseenter', function() {
				$(this).find('figcaption').stop().fadeIn();
				$(this).find('img').css('transform', 'scale(1.087)');
			});
			$('.recent_projects .owl-item figure').on('mouseleave', function() {
				$(this).find('figcaption').stop().fadeOut();
				$(this).find('img').css('transform', 'scale(1)');
			});
			$('.rp_button_next').on('click', function() {
				ow.trigger('owl.next');
			});
			$('.rp_button_prev').on('click', function() {
				ow.trigger('owl.prev');
			});
		}
		if ($('.slides_blockquotes').length) {
			$('.slides_blockquotes').carouFredSel({
				responsive: true,
				auto: false,
				circular: true,
				height: 'auto',
				infinite: false,
				prev: {
					button: '.slides_blockquote_prev',
					key: 'left'
				},
				next: {
					button: '.slides_blockquote_next',
					key: 'right'
				},
				swipe: {
					onMouse: true,
					onTouch: true
				},
				items: {
					visible: {
						min: 1,
						max: 1
					},
					height: 'auto'
				},
				scroll: {
					fx: 'fade'
				}
			});
		}
		if ($('.latest_post_carousel').length) {
			$('.latest_post_carousel').carouFredSel({
				responsive: true,
				auto: false,
				circular: true,
				infinite: false,
				prev: {
					button: '.latest_post_prev',
					key: 'left'
				},
				next: {
					button: '.latest_post_next',
					key: 'right'
				},
				swipe: {
					onMouse: true,
					onTouch: true
				},
				items: {
					visible: {
						min: 1,
						max: 1
					},
					height: 'auto'
				}
			});
		}
		if ($('.our_clients').length && $('.our_clients_first').length) {
			$('.our_clients,.our_clients_first').carouFredSel({
				responsive: true,
				synchronise: '.our_clients_first',
				width: "100%",
				auto: false,
				circular: true,
				height: 'auto',
				infinite: false,
				prev: {
					button: '.our_clients_prev',
					key: 'left'
				},
				next: {
					button: '.our_clients_next',
					key: 'right'
				},
				swipe: {
					onMouse: true,
					onTouch: true
				},
				items: {
					width: 170,
					visible: {
						min: 1,
						max: 2
					},
					height: 'auto'
				},
				scroll: {
					fx: 'fade'
				}
			});
		}
		if ($('[class^="twitter_carousel"]').length) {
			$('.twitter_carousel_01 .tweet_carousel > ul').carouFredSel({
				responsive: true,
				auto: {
					timeoutDuration: 5000
				},
				circular: true,
				infinite: false,
				prev: {
					button: '.twitter_prev',
					key: 'left'
				},
				next: {
					button: '.twitter_next',
					key: 'right'
				},
				swipe: {
					onTouch: true
				},
				items: {
					visible: {
						min: 1,
						max: 1
					},
					height: 'auto'
				}
			});
			$('.twitter_carousel_02 .tweet_carousel').flexslider({
				selector: ".tweet_list > li",
				animation: "slide",
				direction: "vertical",
				easing: "easeInOutCirc",
				smoothHeight: true,
				animationSpeed: 500,
				touch: true,
				pausePlay: false,
				controlNav: false,
				directionNav: true,
				prevText: "",
				nextText: "",
				start: function() {
					$('.twitter_carousel_02 .flex-direction-nav .flex-next').append('<span class="icon-double-angle-up"></span>');
					$('.twitter_carousel_02 .flex-direction-nav .flex-prev').append('<span class="icon-double-angle-down"></span>');
				}
			});
		}
		var len = $('[class^="hexagon_"]').length;
		for (i = 0; i < len; i++) {
			var container = $('body').find('[class^="hexagon_"]').eq(i),
				imgsource = container.children('img').attr('src'),
				hexagon = container.children('canvas')[0];
			hex = hexagon.getContext('2d');
			img = new Image();
			img.src = imgsource;
			if (container.hasClass('hexagon_container')) {
				hex.drawImage(img, 0, 0, 200, 200);
			} else if (container.hasClass('hexagon_small_container')) {
				hex.drawImage(img, 0, 0, 114, 128);
			} else if (container.hasClass('hexagon_big_container')) {
				hex.drawImage(img, 0, 0, 240, 270);
			} else if (container.hasClass('hexagon_mini_container')) {
				hex.drawImage(img, 0, 0, 90, 102);
			} else if (container.hasClass('hexagon_giant_container')) {
				hex.drawImage(img, 0, 0, 374, 410);
			}
			hex.save();
			hex.globalCompositeOperation = 'destination-in';
			hex.beginPath();
			if (container.hasClass('hexagon_container')) {
				hex.moveTo(108.5, 4);
				hex.arcTo(186, 49.5, 186, 73.5, 24);
				hex.arcTo(186, 144.5, 162, 168.5, 24);
				hex.arcTo(99.5, 198, 89.5, 192, 24);
				hex.arcTo(13, 148.5, 13, 120.5, 24);
				hex.arcTo(13, 51.5, 37, 30.5, 24);
				hex.arcTo(93.5, 2, 109.5, 2, 24);
			} else if (container.hasClass('hexagon_small_container')) {
				hex.moveTo(9, 28);
				hex.lineTo(50, 5);
				hex.arcTo(57, 0, 66, 5, 15);
				hex.lineTo(105, 25);
				hex.arcTo(114, 30, 114, 35, 15);
				hex.lineTo(114, 88);
				hex.arcTo(112, 93, 105, 99, 15);
				hex.lineTo(66, 123);
				hex.arcTo(57, 128, 50, 123, 15);
				hex.lineTo(7, 99);
				hex.arcTo(0, 93, 0, 88, 15);
				hex.lineTo(0, 40);
				hex.arcTo(2, 35, 9, 27, 15);
			} else if (container.hasClass('hexagon_big_container')) {
				hex.moveTo(0, 68);
				hex.arcTo(120, 0, 235, 65, 30);
				hex.arcTo(240, 70, 240, 205, 30);
				hex.arcTo(240, 205, 120, 260, 30);
				hex.arcTo(120, 275, 5, 195, 30);
				hex.arcTo(0, 205, 0, 70, 30);
				hex.arcTo(0, 68, 120, 0, 30);
			} else if (container.hasClass('hexagon_mini_container')) {
				hex.moveTo(1, 22);
				hex.arcTo(45, 0, 85, 22, 15);
				hex.arcTo(89, 26, 89, 70, 15);
				hex.arcTo(89, 75, 50, 97, 15);
				hex.arcTo(45, 102, 5, 80, 15);
				hex.arcTo(1, 75, 1, 32, 15);
				hex.arcTo(1, 22, 45, 0, 15);
			} else if (container.hasClass('hexagon_giant_container')) {
				hex.moveTo(47, 72);
				hex.arcTo(187, 0, 331, 72, 50);
				hex.arcTo(374, 107, 374, 277, 50);
				hex.arcTo(374, 312, 244, 392, 50);
				hex.arcTo(187, 410, 47, 328, 50);
				hex.arcTo(0, 312, 0, 128, 50);
				hex.arcTo(0, 102, 47, 72, 50);
			}
			hex.fill();
			container.children('img').hide();
		}
		if ($('.blockquotes_carousel').length) {
			$('.blockquotes_carousel').carouFredSel({
				responsive: true,
				auto: false,
				circular: true,
				infinite: false,
				prev: {
					button: '.blockquotes_carousel_prev',
					key: 'left'
				},
				next: {
					button: '.blockquotes_carousel_next',
					key: 'right'
				},
				items: {
					visible: {
						min: 1,
						max: 1
					},
					height: 'auto'
				},
				scroll: {
					fx: 'fade'
				},
				onCreate: function() {
					$(this).hasClass('first') ? $(this).parent().addClass('first') : $(this).parent().removeClass('first');
					$(this).hasClass('services') ? $(this).parent().addClass('services') : $(this).parent().removeClass('services');
					$(this).hasClass('default') ? $(this).parent().addClass('default') : $(this).parent().removeClass('default');
				}
			});
		}
		if ($('.our_team_carousel').length) {
			setTimeout(function() {
				$('.our_team_carousel').carouFredSel({
					responsive: true,
					auto: false,
					circular: true,
					infinite: false,
					prev: {
						button: '.our_team_prev',
						key: 'left'
					},
					next: {
						button: '.our_team_next',
						key: 'right'
					},
					items: {
						visible: {
							min: 1,
							max: 1
						},
						height: 'auto'
					},
					scroll: {
						onBefore: function(data) {
							var $current = $(data.items.visible),
								data = $current.data('item');
							$('.our_team_title_wrap .content .title_item:visible').fadeOut(500, function() {
								$('.title_item.' + data).fadeIn(500);
							});
						},
						fx: 'fade',
						duration: 1000
					}
				});
			}, 1000)
		}
	}
}

window.menu = function() {
	header_animate(0);		
}

$(document).ready(function() {
	$.fn.fadeSlideToggle = function(speed) {
		return $(this).animate({
			'height': 'toggle',
			'opacity': 'toggle'
		}, speed);
	}

	menu();
	$(window).on('resize', menu);

	// default
	$.fn.waypointInit = function(classN, offset) {
		return $(this).waypoint(function(direction) {
			if (direction === 'down') {
				$(this).addClass(classN);
			};
		}, {
			offset: offset
		})
	};
	// synchronise
	$.fn.waypointSynchronise = function(synchroniseElement, offset, classN, delay) {
		var element = $(this);
		return $(synchroniseElement).waypoint(function(direction) {
			if (direction === 'down') {
				setTimeout(function() {
					element.addClass(classN);
				}, delay);
			}
		}, {
			offset: offset
		});
	};

	setTimeout(function() {
		setTimeout(function() {
			$('.our_work_item.slide-to-left').waypointInit('slide-to-left-finished', '800px');
			$('.our_work_item.slide-to-right').waypointInit('slide-to-right-finished', '800px');
			$('.counting_item.fade,.hex_elem_rounded_type_2.ow_icon.fade:not(.full_w .hex_elem_rounded_type_2.ow_icon.fade)').waypointSynchronise('.our_work_item', '800px', 'fade-finished', 400);
		}, 1100);
		$('.uc_container .span4:nth-child(1) img').waypointSynchronise('.uc_container', '650px', 'fast-fade-to-top-finished', 0);
		$('.uc_container .span4:nth-child(2) img').waypointSynchronise('.uc_container', '650px', 'fast-fade-to-top-finished', 200);
		$('.uc_container .span4:nth-child(3) img').waypointSynchronise('.uc_container', '650px', 'fast-fade-to-top-finished', 400);
		$('.uc_container_2 .span4:nth-child(1) img').waypointSynchronise('.uc_container_2', '650px', 'fast-fade-to-top-finished', 0);
		$('.uc_container_2 .span4:nth-child(2) img').waypointSynchronise('.uc_container_2', '650px', 'fast-fade-to-top-finished', 200);
		$('.uc_container_2 .span4:nth-child(3) img').waypointSynchronise('.uc_container_2', '650px', 'fast-fade-to-top-finished', 400);
		$('.heading_container_type_02.fade-to-bottom').waypointInit('fade-to-bottom-finished', '730px');
		$('figure.fade-to-right').waypointSynchronise('.heading_container_type_02.fade-to-bottom', '730px', 'fade-to-right-finished');
		$('figure.fade-to-left').waypointSynchronise('.heading_container_type_02.fade-to-bottom', '730px', 'fade-to-left-finished');
		$('h1.skew-to-left').waypointInit('skew-to-left-finished', '730px');
		$('div.inline.skew-to-left').waypointSynchronise('h1.skew-to-left', '730px', 'skew-to-left-finished', 300);
		$('.heading_container_type_03.fade-to-bottom').waypointInit('fade-to-bottom-finished', '650px');
		$('.center-to-ls1').waypointSynchronise('.heading_container_type_03.fade-to-bottom', '650px', 'center-to-ls1-finished');
		$('.center-to-ls2').waypointSynchronise('.heading_container_type_03.fade-to-bottom', '650px', 'center-to-ls2-finished');
		$('.center-to-ls3').waypointSynchronise('.heading_container_type_03.fade-to-bottom', '650px', 'center-to-ls3-finished');
		$('.center-to-ls4').waypointSynchronise('.heading_container_type_03.fade-to-bottom', '650px', 'center-to-ls4-finished');
		$('.show_step_container h5.fade,.show_step_container p.fade,.show_step_container .step_icon.fade').waypointSynchronise('.heading_container_type_03.fade-to-bottom', '650px', 'fade-finished', 350);
		$('.testimonial_author_container.fade-to-top').waypointInit('fade-to-top-finished', '830px');
		$('.blockquotes_carousel_prev.fade,.blockquotes_carousel_next.fade').waypointSynchronise('.testimonial_author_container.fade-to-top', '830px', 'fade-finished', 500);
		$('.blockquotes_carousel blockquote.fade-to-right').waypointSynchronise('.testimonial_author_container.fade-to-top', '830px', 'fade-to-right-finished');
		$('.blockquotes_carousel blockquote.fade-to-left').waypointSynchronise('.testimonial_author_container.fade-to-top', '830px', 'fade-to-left-finished');
		$('.register_container div.wind').waypointInit('wind-finished', '780px');
		$('.register_container form.wind').waypointSynchronise('.register_container div.wind', '780px', 'wind-finished', 200);
		$('.advertising_description.adv1.center-to-left').waypointInit('center-to-left-finished', '500px');
		$('.advertising_images.i_adv1 > img.second-size-jump:nth-child(2)').waypointSynchronise('.advertising_description.adv1.center-to-left', '500px', 'second-size-jump-finished', 550);
		$('.advertising_images.i_adv1 > img.second-size-jump:nth-child(3)').waypointSynchronise('.advertising_description.adv1.center-to-left', '500px', 'second-size-jump-finished', 780);
		$('.advertising_images.i_adv1 > img.second-size-jump:nth-child(4)').waypointSynchronise('.advertising_description.adv1.center-to-left', '500px', 'second-size-jump-finished', 980);
		$('.advertising_images.i_adv1 > img.second-size-jump:nth-child(5)').waypointSynchronise('.advertising_description.adv1.center-to-left', '500px', 'second-size-jump-finished', 1180);
		$('.advertising_images.i_adv1 > img.center-to-right').waypointSynchronise('.advertising_description.adv1.center-to-left', '500px', 'center-to-right-finished', 0);
		$('.advertising_description.adv2.fast-fade-to-left').waypointInit('fast-fade-to-left-finished', '500px');
		$('.advertising_images.i_adv2 > img.fast-fade-to-top').waypointSynchronise('.advertising_description.adv2.fast-fade-to-left', '500px', 'fast-fade-to-top-finished', 0);
		$('.advertising_images.i_adv2 > img.fast-fade-top-left:nth-child(2)').waypointSynchronise('.advertising_description.adv2.fast-fade-to-left', '500px', 'fast-fade-top-left-finished', 300);
		$('.advertising_images.i_adv2 > img.fast-fade-top-left:nth-child(3)').waypointSynchronise('.advertising_description.adv2.fast-fade-to-left', '500px', 'fast-fade-top-left-finished', 500);
		$('.advertising_images.i_adv2 > img.fast-fade-top-left:nth-child(4)').waypointSynchronise('.advertising_description.adv2.fast-fade-to-left', '500px', 'fast-fade-top-left-finished', 700);
		$('.advertising_images.i_adv2 > img.fast-fade-top-left:nth-child(5)').waypointSynchronise('.advertising_description.adv2.fast-fade-to-left', '500px', 'fast-fade-top-left-finished', 900);
		$('.advertising_images.i_adv2 > img.fast-fade-top-left:nth-child(6)').waypointSynchronise('.advertising_description.adv2.fast-fade-to-left', '500px', 'fast-fade-top-left-finished', 1100);
		$('.advertising_images.i_adv2 > img.fast-fade-top-left:nth-child(7)').waypointSynchronise('.advertising_description.adv2.fast-fade-to-left', '500px', 'fast-fade-top-left-finished', 1300);
		$('.advertising_description.adv3.fast-fade-to-right').waypointInit('fast-fade-to-right-finished', '500px');
		$('.advertising_images.i_adv3 > img.fast-fade-to-top:nth-child(4)').waypointSynchronise('.advertising_description.adv3.fast-fade-to-right', '500px', 'fast-fade-to-top-finished', 0);
		$('.advertising_images.i_adv3 > img.fast-fade-to-top:nth-child(3)').waypointSynchronise('.advertising_description.adv3.fast-fade-to-right', '500px', 'fast-fade-to-top-finished', 300);
		$('.advertising_images.i_adv3 > img.fast-fade-to-top:nth-child(2)').waypointSynchronise('.advertising_description.adv3.fast-fade-to-right', '500px', 'fast-fade-to-top-finished', 600);
		$('.advertising_images.i_adv3 > img.fast-fade-to-top:nth-child(1)').waypointSynchronise('.advertising_description.adv3.fast-fade-to-right', '500px', 'fast-fade-to-top-finished', 1000);
		$('.advertising_description.adv4.center-to-right,.advertising_description.adv6.center-to-right').waypointInit('center-to-right-finished', '500px');
		$('.advertising_images.i_adv4 > img').waypointSynchronise('.advertising_description.adv4.center-to-right', '500px', 'center-to-left-finished', 0);
		$('.advertising_description.adv5.fast-fade-to-right,.advertising_description.adv7.fast-fade-to-right').waypointInit('fast-fade-to-right-finished', '500px');
		$('.advertising_images.i_adv5 > img.fade').waypointSynchronise('.advertising_description.adv5.fast-fade-to-right', '500px', 'fade-finished', 300);
		$('.advertising_images.i_adv5 > img:nth-child(2)').waypointSynchronise('.advertising_description.adv5.fast-fade-to-right', '500px', 'fast-fade-to-top-finished', 600);
		$('.advertising_images.i_adv5 > img:nth-child(3)').waypointSynchronise('.advertising_description.adv5.fast-fade-to-right', '500px', 'fast-fade-to-top-finished', 800);
		$('.advertising_images.i_adv5 > img:nth-child(4)').waypointSynchronise('.advertising_description.adv5.fast-fade-to-right', '500px', 'fast-fade-to-top-finished', 1000);
		$('.advertising_images.i_adv5 > img:nth-child(5)').waypointSynchronise('.advertising_description.adv5.fast-fade-to-right', '500px', 'fast-fade-to-top-finished', 1200);
		$('.advertising_images.i_adv6 > img:nth-child(1)').waypointSynchronise('.advertising_description.adv6.center-to-right', '500px', 'center-to-left-finished', 0);
		$('.advertising_images.i_adv6 > img:nth-child(2)').waypointSynchronise('.advertising_description.adv6.center-to-right', '500px', 'second-size-jump-finished', 500);
		$('.advertising_images.i_adv6 > img:nth-child(3)').waypointSynchronise('.advertising_description.adv6.center-to-right', '500px', 'second-size-jump-finished', 800);
		$('.advertising_images.i_adv6 > img:nth-child(4)').waypointSynchronise('.advertising_description.adv6.center-to-right', '500px', 'second-size-jump-finished', 1100);
		$('.advertising_images.i_adv7 > img').waypointSynchronise('.advertising_description.adv7.fast-fade-to-right', '500px', 'fast-fade-to-left-finished', 0);
	}, 1000);

		$(window).load(function() {
		$run_element.show();

		function MouseMove(e) {
			var posY=e.pageY+$cursor_space;
			var posX=e.pageX+$cursor_space;
			$run_element.css({top:posY+'px' ,left:posX+'px'});
		}
		$(".showcase_container").on("mousemove", function(event) {
			MouseMove(event);
			$run_element.show();
		});
		$('.showcase_container').on('mouseleave', function() {
			$run_element.hide();
		});
		if (isiPhone()) {
			$('.showcase_item').on('click', function() {
				var location = $(this).data('load');
				window.location.replace(location);
			});
		} else {
			$('.showcase_item').on('click', function(e) {
				$('.showcase_item').off('click');
				$curr = $(this),
				dataLoad = $(this).data('load'),
				height = $(this).outerHeight(),
				history.pushState({ page: this.href }, '', dataLoad); // mas
				hHeight = 106; //$('header').outerHeight();
				$(this).css('height', height);
/*				$('body').append('<div id="custom_cursor_1"></div>');
				$('#custom_cursor_1').css({top:e.pageY+'px', left:e.pageX+'px'});
				$('#custom_cursor_1').addClass('active');*/


				$('#video_container').removeClass('play').addClass('pause');
				$(this).parent('.showcase_container').off('mousemove').off('mouseleave');
				$run_element.addClass('active');
				$(this).addClass('active');
				$(this).siblings().addClass('hover_off')
				var offsetY = $(this).offset().top - ($(window).height() / 3); // center progress bar
				setTimeout(function() {
					$('html').animate({
						scrollTop: offsetY
					}, 1000, function() {
						$run_element.fadeOut(100);
						setTimeout(function() {
							var count = 0;
							$curr.find('.load_page > div').animate({
								'width': '100%'
							}, 2500, function() {
								// set container
								count++;
								if (2 === count) {
									$('body').load(dataLoad, function(response, status, xhr) {
										$('html,body').animate({
												scrollTop: $('body').offset().top
											}, 500);
										setTimeout(function() {
												if ($('header').next().hasClass('main')) {
													$('body').removeClass('full_w');
													$('header').animate({'top': '0px'}, 600);
												}
												else {
													// hidden
													$('header').animate({'top': '-106px'}, 600);
												}
												//header_animate(1);
											}, 100);
									});

									setTimeout(function() { $curr.css('margin-left', '100%');	}, 200);
								}
							});
						}, 500); // progress bar
					});
				}, 500);
			});
		}
	});

});
$(document).ready(function() {
	if ($('.colorbox_container').length || $('.recent_projects').length) {
		$('.colorbox_container > a[rel^="prettyPhoto"]').not('.go_to_link,.go_to_single').prettyPhoto();
		$('.recent_projects').find('a.go_to_photo').prettyPhoto();
		// hover
		$('.colorbox_container').on('mouseenter', function() {
			$(this).addClass('active');
		});
		$('.colorbox_container').on('mouseleave', function() {
			$(this).removeClass('active');
		});
	};
	// alerts correct responsive position
	function alertsR() {
		$c = $('#cf_status [class*="alert_box"]');
		$w = $c.outerWidth() / 2;
		$(window).width() < 767 ? $c.css('margin-left', -($w)) : $c.removeAttr('style');
	}
	alertsR();
	$(window).on('resize', alertsR);


	if ($('.full_screen_slider').length) {
		var timer;
		$('.full_screen_slider').mousemove(function() {
			var b1 = $('.full_screen_slider .flex-prev'),
				b2 = $('.full_screen_slider .flex-next'),
				nav = $('.full_screen_slider .flex-control-nav');
			if (timer) {
				clearTimeout(timer);
				timer = 0;
			}
			b1.css('left', '10px');
			b2.css('right', '10px');
			nav.fadeIn(650);
			timer = setTimeout(function() {
				b1.css('left', '-51px');
				b2.css('right', '-51px');
				nav.fadeOut(650);
			}, 2000);
		});
	}

	// contact 
	(function() {
		if ($('#contact_form').length) {
			var $form = $('#contact_form'),
				$loader = '<div id="preloader"></div>';
			$form.submit(function(e) {
				if (!$('#cf_status').length) $('body').append('<div id="cf_status"></div>');
				var $response = $('#cf_status');
				$response.fadeIn(400);
				$response.html($loader);
				var data = {
					action: "cf_status",
					values: $("#contact_form").serialize()
				};
				//send data to server
				$.post("php/contact-send.php", data, function(response) {
					response = $.parseJSON(response);
					$response.find('.p_load').remove();
					if (response.is_errors) {
						$response.append('<div class="error_alert_box_type_2"><span>Error!</span><p>Please enter your message!</p></div>');
						alertsR();
						$response.delay(2000).fadeOut(400, function() {
							$(this).remove();
						});
					} else {
						$response.children().remove();
						if (response.info == 'success') {
							$response.append('<div class="confirm_alert_box_type_2"><span>Success!</span><p>Your message has been successfully sent!</p></div>');
							alertsR();
							$response.delay(2000).fadeOut(400, function() {
								$(this).remove();
							});
						}
						if (response.info == 'server_fail') {
							$response.append('<div class="warning_alert_box_type_2"><p>Server failed. Send later!</p></div>');
							alertsR();
						}
					}
					if (!$('#cf_status').css('display') == 'block') {
						$response.show(450);
					}
				});
				e.preventDefault();
			});
		}
	})();
	//photo about
	$('.photo').on('mouseenter', function() {
		$(this).addClass('active');
	});
	$('.photo').on('mouseleave', function() {
		$(this).removeClass('active');
	});

	function sameColumnsHeight() {
		$('.sitemap_list_divider').removeAttr('style');
		if ($(window).width() > 767) {
			$len = $('.sitemap_list_divider').length;
			$arr = Array();
			for (i = 0; i < $len; i++) {
				$arr.push($('.sitemap_list_divider').eq(i).outerHeight());
			}
			$max = Math.max.apply(Math, $arr);
			$('.sitemap_list_divider').css('height', $max);
		}
	};
	sameColumnsHeight();
	$(window).on('resize', sameColumnsHeight);
	if ($('.gmap_container').length) {
		offset = $('.gmap_container').offset().top;
		$('html,body').animate({
			scrollTop: offset
		}, 1);

		function gmapSize() {
			$h = $(window).height();
			$gmap = $('.gmap_container');
			$gmap.removeAttr('style');
			$gmap.css('height', $h);
		};
		gmapSize();
		$(window).on('resize', gmapSize);
	};
	// progress bars
	$('[class*="_progress_bar"]').each(function(i) {
		$(this).waypoint(function(direction) {
			$p = $(this).find('.progress_line').children().data('percent');
			if (direction === 'down') {
				$(this).find('.progress_line').children().animate({
					'padding-right': '15px',
					'width': $p + '%'
				}, 800, function() {
					$(this).children('span').fadeIn(500);
				});
			}
		}, {
			offset: '950px'
		});
	});
	//faq
	$('.faq_nav:not(.our_team) > li > a').each(function() {
		var hash = $(this).attr('href'),
			count = $(hash).children('dl').length;
		$(this).find('.counting_tape').text(count);
	});
	// video container
	if (loader()) {
		if ($('#video_container').length) {
			var video = $('#video_container video')[0];
			$('#video_container').hasClass('play') ? video.play() : video.pause();
			$('#video_container video').on('click', function() {
				this.paused ? this.play() : this.pause();
			});
		}
	}

	function fullScreenSize() {
		var windowWidth = $(window).width(),
			windowHeight = $(window).height(),
			videoC = $('#video_container');
		videoC.css({
			'width': windowWidth,
			'height': windowHeight
		});
		$('.full_screen_slider,.full_width_img_container').css({
			'width': windowWidth,
			'height': windowHeight
		});
	};
	fullScreenSize();
	$(window).on('resize', fullScreenSize);
	if ($('.full_screen_slider').length) {
		$('.full_screen_slider').flexslider({
			direction: 'horizontal',
			animation: "fade",
			slideshow: false,
			smoothHeight: true,
			selector: '.slides > li',
			useCSS: false,
			animationSpeed: 400,
			animationLoop: false,
			touch: true,
			pausePlay: false,
			directionNav: true,
			controlNav: true,
			prevText: '',
			nextText: '',
			start: function() {
				$('.full_screen_slider').find('.flex-control-nav li a').text("").append("<span></span>");
			}
		});
	}
});
$(document).ready(function() {
	if ($('.faq_nav:not(.our_team)').length) {
		$('.faq_page_padding > .container').easytabs();
	}
});
$(window).load(function() {
	if ($('.isotope_container').length) {
		var $container = $('.isotope_container');
		$('.load_more').click(function() {
			// elments count
			$count = 8;
			var $html;
			for (var i = 0; i <= $count; i++) {
				$h = $container.find('.item_blog').eq(i).html();
				$result = '<article class="isotope-item item_blog">' + $h + '</article>';
				$html += $result;
			}
			$newItems = $($html);
			$container.isotope('insert', $newItems).trigger('resize');
			// initialize prettyPhoto on new items
			$('[data-rel^="prettyPhoto"]').each(function() {
				$rel = $(this).data('rel');
				$(this).attr('rel', $rel);
			});
			$('.colorbox_container > a[rel^="prettyPhoto"]').not('.go_to_link,.go_to_single').prettyPhoto();
			$('.colorbox_container').on('mouseenter', function() {
				$(this).addClass('active');
			});
			$('.colorbox_container').on('mouseleave', function() {
				$(this).removeClass('active');
			});
		});
		$container.isotope({
			itemSelector: '.item_blog',
			layoutMode: 'masonry',
			containerStyle: {
				paddingTop: '90px',
				position: 'relative',
				overflow: 'hidden',
				marginLeft: '-30px'
			},
			resizable: true,
			transformsEnabled: true
		});
		$(window).smartresize(function() {
			$container.isotope({
				// update columnWidth to a percentage of container width
				masonry: {
					columnWidth: $container.width() / 3
				}
			});
		});
	};
	var len_triangle = $('[class^="triangle_container_"]').length;
	for (i = 0; i < len_triangle; i++) {
		var container = $('body').find('[class^="triangle_container_"]').eq(i),
			imgsource = container.children('img').attr('src'),
			hexagon = container.children('canvas')[0];
		hex = hexagon.getContext('2d');
		img = new Image();
		img.src = imgsource;
		hex.drawImage(img, 0, 0);
		hex.save();
		hex.globalCompositeOperation = 'destination-in';
		hex.beginPath();
		if (container.hasClass('triangle_container_type_01')) {
			hex.moveTo(0, 0);
			hex.lineTo(194, 269);
			hex.lineTo(389, 0);
		} else if (container.hasClass('triangle_container_type_02')) {
			hex.moveTo(0, 269);
			hex.lineTo(195, 0);
			hex.lineTo(389, 269);
		}
		hex.fill();
		container.children('img').hide();
	}

	function loadProject(hash) {
		console.log(hash);
		$('html , body').animate({
			scrollTop: 0
		}, 700, function() {
			$('.main').animate({
				'opacity': '0'
			}, 700, function() {
				$('.main').load(hash + '.html', '.main', function() {
					var lenGiant = $('.hexagon_giant_container').length;
					for (i = 0; i < lenGiant; i++) {
						var container = $('body').find('.hexagon_giant_container').eq(i),
							imgsource = container.children('img').attr('src'),
							hexagon = container.children('canvas')[0];
						hex = hexagon.getContext('2d');
						img = new Image();
						img.src = imgsource;
						hex.drawImage(img, 0, 0, 374, 410);
						hex.save();
						hex.globalCompositeOperation = 'destination-in';
						hex.beginPath();
						hex.moveTo(47, 72);
						hex.arcTo(187, 0, 331, 72, 50);
						hex.arcTo(374, 107, 374, 277, 50);
						hex.arcTo(374, 312, 244, 392, 50);
						hex.arcTo(187, 410, 47, 328, 50);
						hex.arcTo(0, 312, 0, 128, 50);
						hex.arcTo(0, 102, 47, 72, 50);
						hex.closePath();
						hex.fill();
						container.children('img').hide();
					}
				});
				$(this).animate({
					'opacity': '1'
				}, 700, function() {
					var scrollCoords = $('.title_container').outerHeight();
					$('html , body').animate({
						scrollTop: scrollCoords
					}, 700)
				});
			});
		});
	};
	if (window.location.hash == true) loadProject(this.location.hash);
	$('.go_to_single:not(.not_animate)').on('click', function(event) {
		var hash = $(this).attr('href').slice(1);
		loadProject(hash);
		event.preventDefault();
	});
	if ($('.portfolio_isotope_container').length) {
		var $pContainer = $('.portfolio_isotope_container');
		$pContainer.isotope({
			itemSelector: '.portfolio_item',
			layoutMode: 'masonry',
			resizable: true,
			transformsEnabled: true
		});
		$('.open_options > ul > li').on('click', function() {
			var selector = $(this).data('filter');
			$pContainer.isotope({
				filter: selector
			});
			return false;
		});
		$(window).smartresize(function() {
			if ($pContainer.hasClass('two_columns')) {
				$pContainer.isotope({
					masonry: {
						columnWidth: $pContainer.width() / 2
					}
				});
			} else if ($pContainer.hasClass('three_columns')) {
				$pContainer.isotope({
					masonry: {
						columnWidth: $pContainer.width() / 3
					}
				});
			} else if ($pContainer.hasClass('four_columns')) {
				$pContainer.isotope({
					masonry: {
						columnWidth: $pContainer.width() / 4
					}
				});
			} else {
				$pContainer.isotope({
					masonry: {
						columnWidth: $pContainer.width() / 1
					}
				});
			};
		});
	};
	if ($('.full_width_slider').length) {
		$('.full_width_slider').flexslider({
			direction: 'horizontal',
			animation: "slide",
			slideshow: false,
			smoothHeight: true,
			selector: '.slides > li',
			useCSS: false,
			animationSpeed: 400,
			animationLoop: false,
			touch: true,
			pausePlay: false,
			directionNav: true,
			controlNav: false,
			prevText: '',
			nextText: ''
		});
	}
});