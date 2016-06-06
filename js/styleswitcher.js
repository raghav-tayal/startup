(function(){
	var options = $('#options_panel'),
	inner = options.children('#options_panel_inner'),
	style = $('#style');
	inner.hide();
	options.children('i').on('click',function(){
		$(this).next().slideToggle(500);
	});
	$('button[data-layout]').on('click', function(){
		$(this).attr('disabled','disabled');
		$(this).siblings().removeAttr('disabled');
		var layout = $(this).data('layout');
		( layout === 'no_parallax' ) ? $('[class*="parallax"]').addClass('no_parallax') : $('[class*="parallax"]').removeClass('no_parallax');
		
	});
	$('.color_options > li').on('click', function(){
		var scheme = $(this).attr('title');
		style.attr('href' , 'css/style_' + scheme + '.css');
		if(scheme === 'default') style.attr('href','css/style.css');
	});
	$('#colorSelector').ColorPicker({
		color: '#54ABAA',
		onChange: function color(hsb, hex, rgb) {
			$('#colorSelector').css('backgroundColor', '#' + hex);
			$('.main_menu > li.current_item > a,i[class^="our_work_icon_"] > span:not(.inner_icon),.dashed_stripe,[class^="button_type_"] > i,.cornice_button > span,.flex-control-nav .flex-active,.color_scheme_section,.main_menu ul,.main_menu .current_sub_item > a,.step_icon > i,.social_icons_type_01 > li > a .active .clean_cornice,.blockquotes_carousel .testimonial_author_container > span,.hex_elem_rounded.ow_icon,.colorbox_inner_overlay,.color_scheme_bg,[class^="icons_type_02"],.hex_elem_rounded.open_contact_form,.contact_form_section,#company_description.hex_elem_rounded,[role="search"] input[type="submit"],.reply_button > .hex_elem_rounded,#comment_form input[type="submit"],.tags_list > li > a,.open_options > div,.open_options > ul,#custom_cursor.active,.loader,[class^="accordion_type"] dl.active dt .icon > span,.accordion_group dd:not(.accordion_type_01.faq dd),.accordion_group dd > i,[class^="button_style_03"]:not(.orange,.transparent,.arrow,.thin),.button_hex_style_container .hex_elem_rounded.scheme_color,.callout_01 > a,.callout_02,.cp_wrap.style_03 > .pie.part_2 > span,.cp_wrap.style_05 .pie,.divider_type_03,.list_style_01 > li > div,.list_style_05 > li > div,.milestone_type_02 .hex_elem_rounded,.pricing_table:not(.active) > header,.pricing_table:not(.active) > header > i,.pricing_table.active .table_content,.service:not(.type_2) > .image_hex > .hex_elem_rounded:nth-child(2),.image_hex > span:nth-child(3),.toggle_type_01 > dl > dt,.toggle_type_02 > dl > dt > .hex_elem_rounded,.testimonials_hexagon_wrap > span,#tab_type_1.style_3 > .tabs_links > a > span,.tweet .tweet_list li .hex_elem_rounded,.tweet_type_2 > .tweet_list > li,.twitter_carousel_01 > .hex_elem_rounded,.graph_type_1,.icons_type_01 > li > i,.skills_content_part,.skill_item:not(.active) > .clean_cornice,.photo .link_container,.our_clients_title > span,.our_work_section_2,.hex_elem_rounded.timeline_icon:not(.timeline_style_02 .hex_elem_rounded.timeline_icon),.timeline_description > .hex_elem_rounded:not(.timeline_style_02 .timeline_description > .hex_elem_rounded),.timeline_description > .td_content:not(.timeline_style_02 .timeline_description .td_content),.timeline_style_02,.timeline_style_02 .time_circle,.our_team_title,.first_letter > .hex_elem_rounded,.sitemap_title > .hex_elem_rounded,.sitemap_title > span:nth-child(3),.sitemap_list > li > span,.our_team_container .team_item:nth-child(2) .team_item_description > span, .our_team_container .team_item:nth-child(3) .team_item_description > span,.colorbox_container.two_buttons_type .go_to_single > span,.hex_elem_rounded_type_2.button_style.scheme_color,.hex_elem_rounded_type_2.button_style.scheme_color > [class^="h_el_"],.service:not(.type_2) .image_hex > .hex_elem_rounded_type_2,.service:not(.type_2) .image_hex > .hex_elem_rounded_type_2 > [class^="h_el_"],.milestone_type_02 .hex_elem_rounded_type_2,.milestone_type_02 .hex_elem_rounded_type_2 > span,.faq_nav > li:not(.active) > .hex_elem_rounded_type_2,.faq_nav > li:not(.active) > .hex_elem_rounded_type_2 > [class^="h_el_"],.faq_nav > li .hex_elem_rounded_type_2 .circle,.colorbox_container > a > .colorscheme_icon,#flickr li a .hex_elem_rounded_type_2,#flickr li a .hex_elem_rounded_type_2 > [class^="h_el_"],.social_icons_type_03 li .hex_elem_rounded_type_2,.social_icons_type_03 li .hex_elem_rounded_type_2 > [class^="h_el_"],#company_description.hex_elem_rounded_type_2,#company_description.hex_elem_rounded_type_2 > [class^="h_el_"],.bullet > span,.sitemap_title,.sitemap_title > [class^="h_el_"],.sitemap_title .circle,[class^="go_to_"] .colorscheme_icon,.hex_elem_rounded_type_2.open_contact_form,.hex_elem_rounded_type_2.open_contact_form > [class^="h_el_"],.hex_elem_rounded_type_2[class*="c_icon_"],.hex_elem_rounded_type_2[class*="c_icon_"] > [class^="h_el_"],.hex_elem_rounded_type_2.ow_icon,.hex_elem_rounded_type_2.ow_icon > [class^="h_el_"]').css('background-color', '#' + hex);
			$('.main_menu > li,.social_icons > li').on('mouseenter', function(){$(this).children('a').css('background' , '#' + hex);});
			$('.main_menu > li,.social_icons > li').not('.current_item').on('mouseleave', function(){$(this).children('a').css('background' , 'transparent');});
			$('h2:not(.color_scheme_bg h2,.content_wrapper > figure h2,.skills_title_inner h2),.counting_inner,.parallax[class*="parallax_s"] h1, .parallax[class*="parallax_s"] h2, .parallax[class*="parallax_s"] h3, .parallax[class*="parallax_s"] h4, .parallax[class*="parallax_s"] h5, .parallax[class*="parallax_s"] h6,.qutes_icon,.color_scheme:not(.pricing_table.active .table_content .color_scheme),.layer_text_type_01,.layer_text_type_04,.photo_container,.main_menu > li:not(.current_item) > a > .hex_elem_rounded > i,.social_icons > li > a > i,.blockquotes_carousel_prev > span,.blockquotes_carousel_next > span,.social_icons_type_01 > li > a > .default > i,article:not(.style_01) .button_style_05,article:not(.style_01) .post_tag_icon > i,.home_blog .color_scheme_bg .date_container_type_02,.title_container.type_2 .path_list > li,.hex_elem_rounded.contact_info > div > h5,h3,.date_container.hex_elem_rounded > div,blockquote,.widget > figcaption > *,.categories_list > li > a > span,.k-header > span,.author_comment h5,.other_comments_container h5,.archives_list > li > a > .hex_elem_rounded > span,.reply_button,.p_top_30 > h5,.open_options > span,.portfolio_pagination > a,.portfolio_pagination > a > span,.portfolio_pagination > ul > li > a > span,#custom_cursor > span,[class^="accordion_type"] dl.active dt,.shortcodes_list > li > a > span,[class^="accordion_type"] dl dt .icon > span:nth-child(2) > span:first-child,[class^="button_style_03"].transparent,[class^="button_style_03"].arrow,[class^="button_style_03"].thin,.button_hex_style_container .hex_elem_rounded_type_2.button_style:not(.orange,.scheme_color) > span:first-child,.callout_01 .title > span,.callout_03 .title > span,.callout_03 > a,.list_style_02 > li > .hex_elem_rounded > span,.list_style_03 > li > .hex_elem_rounded > span,.list_style_04 > li > a > span,.list_style_06 > li > div > span,[class*="milestone_type_"] dl dt,.button_style_06:not(.pricing_table.active .button_style_06),.table_icons > dl > dt:not(.pricing_table.active .table_icons > dl > dt),.table_icons > dl > dd:not(.pricing_table.active .table_icons > dl > dd),.service > figcaption > h4,[class^="testimonial"] .author,.testimonials_hexagon_wrap > div,.social_icons_type_02 > li > a > span:first-child,.tweet > .tweet_list > li a,.tweet_type_2 .tweet_list li .hex_elem_rounded > span,.tweet .at,.twitter_prev > span,.twitter_next > span,.tweet_carousel .follow,.tweet_carousel .follow > a,.tweet_carousel li a:not(.tweet_time > a),.tweet_carousel li .at,.twitter_carousel_02 > .hex_elem_rounded > span,[class^="graph_type_"]:not(.graph_type_1) .flot-y-axis,[class^="graph_type_"]:not(.graph_type_1) .flot-x-axis,.title_container:not(.type_2) h1,[class*="parallax_section"] p,.our_clients_prev,.our_clients_next,.register_container h1,.timeline_item h4:not(.timeline_style_02 .timeline_item h4),.callout_03.timeline a,.timeline_style_02 .timeline_description .td_content,.timeline_style_02 .hex_elem_rounded.timeline_icon > .hex_elem_rounded > span,.default,.wrap_404 > span,.ok_icon > span,.sitemap_title > .hex_elem_rounded > .hex_elem_rounded > span > .hex_elem_rounded > i,.work_info li a,.like_buttons > li > a,.faq_nav li.active .faq_title,.sm_icon,.twitter_carousel_02 > .hex_elem_rounded_type_2 > [class^="icon-"],.hex_elem_rounded_type_2.contact_info h5').css('color' , '#' + hex);
			$('.cornice > span,.dashed_stripe > span,.counting_item > span,.social_icons > li > a,.slides_blockquote_prev, .slides_blockquote_next,.main_menu > li:not(.current_item) > a > .hex_elem_rounded,.blockquotes_carousel_prev,.blockquotes_carousel_next,article:not(.style_01) .button_style_05,input:not([type="submit"],[class^="colorpicker"] input), textarea,.archives_list > li > a > .hex_elem_rounded,.author_photo.hex_elem_rounded,#comment_form input[type="submit"],.portfolio_pagination > a,.portfolio_pagination > ul > li > a,[class^="button_style_03"].transparent,[class^="button_style_03"].arrow,[class^="button_style_03"].thin,.button_hex_style_container .hex_elem_rounded_type_2.button_style:not(.orange),.button_hex_style_container .hex_elem_rounded.scheme_color,[class^="callout_"],.callout_01 > a,.cp_wrap:not(.style_05) > .pie,.button_style_06:not(.pricing_table.active .table_content > a.button_style_06),.twitter_prev,.twitter_next,.our_clients_prev,.our_clients_next,.time_circle:not(.timeline_style_02 .time_circle)').css('border-color', '#' + hex);
			$('.button_style_01').on('mouseenter',function(){ $(this).css({'border-color' : '#' + hex , 'color' : '#' + hex})});
			$('.button_style_01').on('mouseleave',function(){ $(this).css({'border-color' : 'rgba(255,255,255,0.8)', 'color':'rgba(255,255,255,0.8)'})});
			$('.form_style_01 input[type="submit"]').css({'border-color' : '#' + hex , 'color' : '#' + hex});
			$('.dashed_stripe,.counting_item,.tags_list > li > a > span,.image_hex > span:nth-child(4),.sitemap_title > span:nth-child(2),.like_buttons > li,.social_icons_type_02 > li > a,.social_icons_type_02 > li > a > [class^="h_el_"],.service .image_hex > .hex_elem_rounded_type_2,.service .image_hex > .hex_elem_rounded_type_2 > [class^="h_el_"],.hex_elem_rounded_type_2.services_type_2,.hex_elem_rounded_type_2.services_type_2 > [class^="h_el_"],.image_hex .stripe,[class^="milestone_type_"] .hex_elem_rounded_type_2,[class^="milestone_type_"] .hex_elem_rounded_type_2 > span,.faq_nav > li .hex_elem_rounded_type_2.with_border,.faq_nav > li .hex_elem_rounded_type_2.with_border > [class^="h_el_"],.faq_nav > li .hex_elem_rounded_type_2 .stripe,.author_photo.hex_elem_rounded_type_2 ,.author_photo.hex_elem_rounded_type_2 > [class^="h_el_"],.sitemap_title .stripe,.sm_icon,.sm_icon > [class^="h_el"],.twitter_carousel_02 > .hex_elem_rounded_type_2,.twitter_carousel_02 > .hex_elem_rounded_type_2 > [class^="h_el_"],.hex_elem_rounded_type_2.contact_info,.hex_elem_rounded_type_2.contact_info > [class^="h_el_"]').css('border-left-color','#' + hex);
			$('.social_icons_type_02 > li > a,.social_icons_type_02 > li > a > [class^="h_el_"],.service .image_hex > .hex_elem_rounded_type_2,.service .image_hex > .hex_elem_rounded_type_2 > [class^="h_el_"],.hex_elem_rounded_type_2.services_type_2,.hex_elem_rounded_type_2.services_type_2 > [class^="h_el_"],[class^="milestone_type_"] .hex_elem_rounded_type_2,[class^="milestone_type_"] .hex_elem_rounded_type_2 > span,.faq_nav > li .hex_elem_rounded_type_2.with_border,.faq_nav > li .hex_elem_rounded_type_2.with_border > [class^="h_el_"],.author_photo.hex_elem_rounded_type_2 ,.author_photo.hex_elem_rounded_type_2 > [class^="h_el_"],.sm_icon,.sm_icon > [class^="h_el"],.twitter_carousel_02 > .hex_elem_rounded_type_2,.twitter_carousel_02 > .hex_elem_rounded_type_2 > [class^="h_el_"],.hex_elem_rounded_type_2.contact_info,.hex_elem_rounded_type_2.contact_info > [class^="h_el_"]').css('border-right-color','#' + hex);
			$('.form_style_01 input:not([type="submit"])').focus(function(){
				$(this).css('box-shadow','0 0 5px #' + hex);
			});
			$('.form_style_01 input:not([type="submit"])').blur(function(){
				$(this).css('box-shadow','none');
			});
			$('.heading_container_type_03 .triangle_cornice,.home_blog > article:not(.color_scheme_bg) .date_container_type_02 > span,.hex_elem_rounded.contact_info,.date_container.hex_elem_rounded,#custom_cursor,#custom_cursor > span:not(:first-child),[class^="accordion_type"] dt,[class^="accordion_type"] dl.active dt .icon > span:first-child,.accordion_type_02 dl dt .icon > span:first-child,.divider_type_04,.list_style_02 > li > div,.list_style_03 > li > div,.list_style_06 > li > div,.milestone_type_01 .hex_elem_rounded,.service > .image_hex > .hex_elem_rounded:first-child,.team_person > .hex_elem_rounded,.twitter_carousel_02 > .hex_elem_rounded,.title_container .path_list > li > i,.our_work_title .title_cornice,.time_container > span:not(.timeline_style_02 .time_container > span),.timeline_style_02 .hex_elem_rounded.timeline_icon > .hex_elem_rounded,.sitemap_title > .hex_elem_rounded > .hex_elem_rounded > span > .hex_elem_rounded').css('border-top-color','#' + hex);
			$('.hex_elem_rounded.contact_info,.date_container.hex_elem_rounded,.date_container.hex_elem_rounded > div:first-child,.open_options > ul > li:first-child > i,#custom_cursor,#custom_cursor > span:not(:first-child),[class^="accordion_type"] dt,[class^="accordion_type"] dl.active dt .icon > span:first-child,.accordion_type_02 dl dt .icon > span:first-child,.list_style_02 > li > div,.list_style_03 > li > div,.list_style_06 > li > div,.milestone_type_01 .hex_elem_rounded,.service > .image_hex > .hex_elem_rounded:first-child,.team_person > .hex_elem_rounded,.twitter_carousel_02 > .hex_elem_rounded,.title_container .path_list > li > i,.skills_title_container > i,.timeline_style_02 .hex_elem_rounded.timeline_icon > .hex_elem_rounded,.team_advertising .triangle,.sitemap_title > .hex_elem_rounded > .hex_elem_rounded > span > .hex_elem_rounded').css('border-bottom-color','#' + hex);
			$('.bullet').each(function(){
				var $curr = $(this);
				var interval = setInterval(function(){
					if($curr.hasClass('selected')) $curr.children('span').css('background-color','#' + hex);
				},1);
			});
			$('.flex-control-nav > li > a').each(function(){
				var $curr = $(this);
				var interval = setInterval(function(){
					$curr.hasClass('flex-active') ? $curr.css('background-color','#' + hex) : $curr.css('background-color', 'rgba(255,255,255,0.1)');
				},1);
			});
			$('.main_menu ul li a').on('mouseenter',function(){
				$(this).css({'background-color':'#' + hex,'opacity':'0.9','box-shadow':'none'});
			});
			$('.main_menu ul li a').on('mouseleave',function(){
				$(this).css('opacity','1');
			});
			$('.scrolltop').on('mouseenter',function(){
				$(this).children('span').css('background-color','#' + hex);
			});
			$('.scrolltop').on('mouseleave',function(){
				$(this).children('span').removeAttr('style');
			});
			$('.main_menu > li:not(.current_item)').on('mouseenter',function(){
				$(this).children('a').children('.hex_elem_rounded').css('border-color','#fff');
				$(this).find('i[class*="icon"]').css('color','#fff');
			});
			$('.main_menu > li:not(.current_item)').on('mouseleave',function(){
				$(this).children('a').children('.hex_elem_rounded').css('border-color','#' + hex);
				$(this).find('i[class*="icon"]').css('color','#' + hex);
			});
			$('.social_icons > li').on('mouseenter',function(){$(this).find('i[class*="icon"]').css('color','#fff')});
			$('.social_icons > li').on('mouseleave',function(){$(this).find('i[class*="icon"]').css('color','#' + hex)});
			$('article:not(.style_01) .button_style_05,.blockquotes_carousel_prev,.blockquotes_carousel_next,.twitter_prev,.twitter_next,.our_clients_prev,.our_clients_next').on('mouseenter',function(){$(this).css({'background-color':'#' + hex,'color':'#fff'})});
			$('article:not(.style_01) .button_style_05,.blockquotes_carousel_prev,.blockquotes_carousel_next,.twitter_prev,.twitter_next,.our_clients_prev,.our_clients_next').on('mouseleave',function(){$(this).css({'background-color':'transparent','color':'#' + hex})});
			$('article:not(.style_01) .post_tags_list > li > a,.categories_list > li > a,.archives_list > li > a,.compressed_post_content > a,[class^="list_style_"] > li > a,.tweet_carousel li .tweet_time > a,.sitemap_list > li > a').on('mouseenter',function(){$(this).css('color','#' + hex);});
			$('article:not(.style_01) .post_tags_list > li > a,.categories_list > li > a,.archives_list > li > a,.compressed_post_content > a,[class^="list_style_"] > li > a,.tweet_carousel li .tweet_time > a,.sitemap_list > li > a').on('mouseleave',function(){$(this).css('color','#000');});
			$('#comment_form input[type="submit"]').on('mouseenter',function(){$(this).css('color','#fff')});
			$('.reply_button,.tweet > .tweet_list > li a,.tweet_carousel .follow > a,.tweet_carousel li a:not(.tweet_time > a),.work_info li a,.like_buttons > li > a').on('mouseenter',function(){$(this).css('color','#000')});
			$('.reply_button,.tweet > .tweet_list > li a,.tweet_carousel .follow > a,.tweet_carousel li a:not(.tweet_time > a),.work_info li a,.like_buttons > li > a').on('mouseleave',function(){$(this).css('color','#' + hex)});
			$('.open_options > span,.open_options > div').on('mouseenter',function(){
				$('.open_options > span').css('color','#000');
			});
			$('.open_options > span,.open_options > div').on('mouseleave',function(){
				$('.open_options > span').css('color','#' + hex);
			});
			$('.tags_list > li > a').on('mouseenter',function(){
				$(this).css('background','#000');
				$(this).children('span').css('border-left-color','#000');
			});
			$('.tags_list > li > a').on('mouseleave',function(){
				$(this).css('background','#' + hex);
				$(this).children('span').css('border-left-color','#' + hex);
			});
			$('#comment_form input[type="submit"]').on('mouseenter',function(){
				$(this).css({'background':'transparent','color':'#' + hex});
			});
			$('#comment_form input[type="submit"]').on('mouseleave',function(){
				$(this).css({'background':'#' + hex,'color':'#fff'});
			});
			$('.colorbox_container').on('mouseenter',function(){$(this).find('.portfolio_item_description').css('background','#' + hex);});
			$('.colorbox_container').on('mouseleave',function(){$(this).find('.portfolio_item_description').css('background','#fff');});
			$('.colorbox_container.opacity').on('mouseenter',function(){$(this).find('.portfolio_item_description').css('background','transparent');});
			$('.colorbox_container.opacity').on('mouseleave',function(){$(this).find('.portfolio_item_description').css('background','#fff');});
			$('.portfolio_pagination > a').on('mouseenter',function(){$(this).css({'background':'#' + hex,'color':'#fff'});});
			$('.portfolio_pagination > a').on('mouseleave',function(){$(this).css({'background':'transparent','color':'#' + hex});});
			$('.portfolio_pagination > a').on('mouseenter',function(){$(this).children('span').css('color','#fff');});
			$('.portfolio_pagination > a').on('mouseleave',function(){$(this).children('span').css('color','#' + hex);});
			$('.portfolio_pagination > ul > li > a').on('mouseenter',function(){$(this).css({'background':'#' + hex});$(this).children('span').css('color','#fff');});
			$('.portfolio_pagination > ul > li > a').on('mouseleave',function(){$(this).css({'background':'transparent'});$(this).children('span').css('color','#' + hex);});
			$('.showcase_item').on('click',function(){$('#custom_cursor').css('background-color','#' + hex);$('#custom_cursor > span:first-child').css('color','#fff')});
			$('[class^="button_style_03"]:not(.orange,.transparent,.arrow,.thin),.callout_01 > a').on('mouseenter',function(){$(this).css({'border-color':'#' + hex,'color':'#' + hex,'background':'transparent'});});
			$('[class^="button_style_03"]:not(.orange,.transparent,.arrow,.thin),.callout_01 > a').on('mouseleave',function(){$(this).css({'border-color':'#' + hex,'color':'#fff','background':'#' + hex});});
			$('[class^="button_style_03"].transparent,[class^="button_style_03"].arrow,[class^="button_style_03"].thin').on('mouseenter',function(){$(this).css({'background':'#' + hex,'color':'#fff'})});
			$('[class^="button_style_03"].transparent,[class^="button_style_03"].arrow,[class^="button_style_03"].thin').on('mouseleave',function(){$(this).css({'background':'transparent','color':'#' + hex})});
			$('.button_hex_style_container .hex_elem_rounded_type_2.button_style:not(.orange,.scheme_color)').on('mouseenter',function(){$(this).css('background','#' + hex);$(this).children('[class^="h_el_"]').css('background','#' + hex);$(this).children(':first').css('color','#fff')});
			$('.button_hex_style_container .hex_elem_rounded_type_2.button_style:not(.orange,.scheme_color)').on('mouseleave',function(){$(this).css('background','#fff');$(this).children('[class^="h_el_"]').css('background','#fff');$(this).children(':first').css('color','#' + hex)});
			$('.button_hex_style_container .hex_elem_rounded_type_2.scheme_color').on('mouseenter',function(){$(this).css('background','#fff');$(this).children('[class^="h_el_"]').css('background','#fff');$(this).children(':first').css('color','#' + hex)});
			$('.button_hex_style_container .hex_elem_rounded_type_2.scheme_color').on('mouseleave',function(){$(this).css('background','#' + hex);$(this).children('[class^="h_el_"]').css('background','#' + hex);$(this).children(':first').css('color','#fff')});
			$('.callout_02 > a').on('mouseenter',function(){$(this).css('color','#' + hex)});
			$('.callout_02 > a').on('mouseleave',function(){$(this).css('color','#fff')});
			$('.pricing_table:not(.active)').on('mouseenter',function(){
				$(this).find('.table_content').css('background','#' + hex);
				$(this).find('.table_content').find('.color_scheme').css('color','#fff');
				$(this).find('header').css('background','#ef5f3b');
				$(this).find('header').children('i').css('background','#ef5f3b');
				$(this).find('.table_icons').find('dd').css('color','#fff');
				$(this).find('.table_icons').find('dt').css('color','#ef5f3b');
				$(this).find('.button_style_06').css({'border-color':'#fff','color':'#fff'});
			});
			$('.pricing_table:not(.active)').on('mouseleave',function(){
				$(this).find('.table_content').css('background','#f3f2eb');
				$(this).find('.table_content').find('.color_scheme').css('color','#' + hex);
				$(this).find('header').css('background','#' + hex);
				$(this).find('header').children('i').css('background','#' + hex);
				$(this).find('.table_icons').find('dd').css('color','#' + hex);
				$(this).find('.table_icons').find('dt').css('color','#' + hex);
				$(this).find('.button_style_06').css({'border-color':'#' + hex,'color':'#' + hex});
			});
			$('.social_icons_type_02 > li > a').on('mouseenter',function(){$(this).css('background','#' + hex);$(this).children('[class^="h_el_"]').css('background','#' + hex);$(this).children(':first').css('color','#fff');});
			$('.social_icons_type_02 > li > a').on('mouseleave',function(){$(this).css('background','#fff');$(this).children('[class^="h_el_"]').css('background','#fff');$(this).children(':first').css('color','#' + hex);});
			$('#tab_type_1:not(.style_2) .tabs_links').each(function(){
				$(this).children('a.active').css({'background':'#' + hex,'color':'#fff'});
				$(this).next().css({'background':'#' + hex,'color':'#fff'});
				$(this).children('a').on('click',function(){
					$(this).css({'background':'#' + hex,'color':'#fff'});
					$(this).siblings().removeAttr('style');
					$($(this).attr('href')).css({'background':'#' + hex,'color':'#fff'});
				});
			});
			$('#tab_type_1.style_2 .tabs_links a:not(.active),#tab_type_2 .tabs_links a:not(.active)').css({'background':'#' + hex,'color':'#fff'});
			$('#tab_type_1.style_2 .tabs_links a,#tab_type_2 .tabs_links a').on('click',function(){
				$(this).css({'background':'#F3F2EB','color':'#000'});
				$(this).siblings().css({'background':'#' + hex,'color':'#fff'});
			});
			$('[class^="accordion_type"] dl.active dt .icon').each(function(){
				$(this).children('span').eq(1).css('z-index','3');
			});
			$('[class^="accordion_type"] dl dt').on('mouseenter',function(){
				$(this).css('color','#'+hex);
			});
			$('[class^="accordion_type"] dl dt').on('mouseleave',function(){
				$(this).parent().siblings().not('.active').find('dt').css('color','#747474');
			});
			$('.accordion_type_01 dl dt').on('click',function(){
				var $curr = $(this);
				$(this).closest('.accordion_group').find('.icon').children('span').css({'background':'#' + hex,'border-color':'#' + hex});
				$(this).closest('.accordion_group').find('.icon').children('span').eq(1).css('z-index','3');
				setTimeout(function(){
					$curr.closest('.accordion_group').siblings().find('.icon').children('span').removeAttr('style');
				},400);
				$(this).css('color','#' + hex);
				$(this).closest('.accordion_group').siblings().find('dt').css('color','#747474');
			});
			$('.accordion_type_02 dl dt').on('click',function(){
				var $curr = $(this);
				$(this).closest('.accordion_group').find('.icon').children('span').css({'background':'#' + hex,'border-color':'#' + hex});
				$(this).closest('.accordion_group').find('.icon').children('span').eq(1).css('z-index','3');
				setTimeout(function(){
					$curr.closest('.accordion_group').siblings().find('.icon').children('span').eq(1).css('z-index','1');
					$curr.closest('.accordion_group').siblings().find('.icon').children('span').css({'background':'transparent','border-color':'#' + hex});
				},400);
				$(this).css('color','#' + hex);
				$(this).closest('.accordion_group').siblings().find('dt').css('color','#747474');
			});
			$('.faq_nav:not(.our_team) > li:not(.active) > .faq_nav_item > .hex_elem_rounded > span').css('color','#fff');
			$('.faq_nav:not(.our_team) > li > a').on('click',function(){
				$(this).css('background',"#fff");
				$(this).children('[class^="h_el_"]').css('background','#fff');
				$(this).find('.faq_title').css('color','#' + hex);
				$(this).closest('li').siblings().children('a').children('[class^="h_el_"]').css('background','#' + hex);
				$(this).closest('li').siblings().children('a').css('background','#' + hex);
				$(this).closest('li').siblings().children('a').find('.faq_title').css('color','#fff');
			});
			$('.social_icons_type_03 li.twitter .hex_elem_rounded_type_2').on('mouseenter',function(){
				$(this).css('background','#37bed6');
				$(this).find('[class^="h_el_"]').css('background','#37bed6');
			});
			$('.social_icons_type_03 li.rss .hex_elem_rounded_type_2').on('mouseenter',function(){
				$(this).css('background','#ff7e00');
				$(this).find('[class^="h_el_"]').css('background','#ff7e00');
			});
			$('.social_icons_type_03 li.facebook .hex_elem_rounded_type_2').on('mouseenter',function(){
				$(this).css('background','#295392');
				$(this).find('[class^="h_el_"]').css('background','#295392');
			});
			$('.social_icons_type_03 li.yahoo .hex_elem_rounded_type_2').on('mouseenter',function(){
				$(this).css('background','#cf3c3c');
				$(this).find('[class^="h_el_"]').css('background','#cf3c3c');
			});
			$('.social_icons_type_03 li.stumbleupon .hex_elem_rounded_type_2').on('mouseenter',function(){
				$(this).css('background','#278f4b');
				$(this).find('[class^="h_el_"]').css('background','#278f4b');
			});
			$('.social_icons_type_03 li .hex_elem_rounded_type_2').on('mouseleave',function(){
				$(this).css('background','#' + hex);
				$(this).find('[class^="h_el_"]').css('background','#' + hex);
			});
		}
	});
})();