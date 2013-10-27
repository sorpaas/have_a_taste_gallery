/*
 * Bootstrap Image Gallery JS Demo 3.0.0
 * https://github.com/blueimp/Bootstrap-Image-Gallery
 *
 * Copyright 2013, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true */
/*global window, document, blueimp, $ */

function change_image(image, new_src) {
	image.fadeOut('fast', function () {
    	image.attr('src', new_src);
    	image.fadeIn('fast');
	});
}

$(function () {
    'use strict';

    $("#nextphoto").click(function(){console.log("OK")});

    // Load demo images from flickr:
    $.ajax({
        url: (window.location.protocol === 'https:' ?
                'https://secure' : 'http://api') +
                '.flickr.com/services/rest/',
        data: {
            format: 'json',
            method: 'flickr.interestingness.getList',
            api_key: '7617adae70159d09ba78cfec73c13be3'
        },
        dataType: 'jsonp',
        jsonp: 'jsoncallback'
    }).done(function (result) {
        var linksContainer = $('#links'),
            baseUrl;
        // Add the demo images as links with thumbnails to the page:
		var si_camp_title = "Social Innovation Camp"
        $('<div/>')
            .append(
              $('<img>').prop('src', 'index.jpg')
                        .css('padding', '5px 10px 10px 10px')
                        .css('width',  '180px')
                        .css('height', '180px')
            )
            .prop('href', 'example1.jpg')
            .prop('title', si_camp_title)
            .attr('data-gallery', '')
            .appendTo(linksContainer)
			.click(function() {
		        event.preventDefault();
		        blueimp.Gallery($('#links a'), 
			    {
			        onopen: function () {
			            // Callback function executed when the Gallery is initialized.
			        },
			        onopened: function () {
						$('#b2').click(function(){
							var x = $("img[title$='"+si_camp_title+"']");
							change_image(x, 'example2.jpg')
						});
						$('#b3').click(function(){
							var x = $("img[title$='"+si_camp_title+"']");
							change_image(x, 'example3.jpg')
						});
						$('#b4').click(function(){
							var x = $("img[title$='"+si_camp_title+"']");
							change_image(x, 'example4.jpg')
						});
						$('#b5').click(function(){
							var x = $("img[title$='"+si_camp_title+"']");
							change_image(x, 'example5.jpg')
						});
						$('#b1').click(function(){
							var x = $("img[title$='"+si_camp_title+"']");
							change_image(x, 'example1.jpg')
						});
			        },
			        onslide: function (index, slide) {
			            // Callback function executed on slide change.
			        },
			        onslideend: function (index, slide) {
			            // Callback function executed after the slide change transition.
			        },
			        onslidecomplete: function (index, slide) {
			            // Callback function executed on slide content load.
			        },
			        onclose: function () {
			            // Callback function executed when the Gallery is about to be closed.
			        },
			        onclosed: function () {
			            // Callback function executed when the Gallery has been closed
			            // and the closing transition has been completed.
			        }
			    });
			});
        $.each(result.photos.photo, function (index, photo) {
            baseUrl = 'http://farm' + photo.farm + '.static.flickr.com/' +
                photo.server + '/' + photo.id + '_' + photo.secret;
            $('<a/>')
                .append(
                  $('<img>').prop('src', baseUrl + '_s.jpg')
                            .css('padding', '5px 10px 10px 10px')
                            .css('width',  '180px')
                            .css('height', '180px')
                )
                .prop('href', baseUrl + '_b.jpg')
                .prop('title', photo.title)
                .attr('data-gallery', '')
                .appendTo(linksContainer)
				.click(function() {
			        event.preventDefault();
			        blueimp.Gallery($('#links a'), 
				    {
				        onopen: function () {
				            // Callback function executed when the Gallery is initialized.
				        },
				        onopened: function () {
							$('#b2').click(function(){
								var x = $("img[title$='" + photo.title + "']");
								change_image(x, 'example1.jpg')
							});
							$('#b3').click(function(){
								var x = $("img[title$='" + photo.title + "']");
								change_image(x, 'example2.jpg')
							});
							$('#b4').click(function(){
								var x = $("img[title$='" + photo.title + "']");
								change_image(x, 'example3.jpg')
							});
							$('#b5').click(function(){
								var x = $("img[title$='" + photo.title + "']");
								change_image(x, 'example1.jpg')
							});
							$('#b1').click(function(){
								var x = $("img[title$='" + photo.title + "']");
								change_image(x, 'example2.jpg')
							});
				        },
				        onslide: function (index, slide) {
				            // Callback function executed on slide change.
				        },
				        onslideend: function (index, slide) {
				            // Callback function executed after the slide change transition.
				        },
				        onslidecomplete: function (index, slide) {
				            // Callback function executed on slide content load.
				        },
				        onclose: function () {
				            // Callback function executed when the Gallery is about to be closed.
				        },
				        onclosed: function () {
				            // Callback function executed when the Gallery has been closed
				            // and the closing transition has been completed.
				        }
				    });
				});
        });
    });


    $('#borderless-checkbox').on('change', function () {
        var borderless = $(this).is(':checked');
        $('#blueimp-gallery').data('useBootstrapModal', !borderless);
        $('#blueimp-gallery').toggleClass('blueimp-gallery-controls', borderless);
    });

    $('#fullscreen-checkbox').on('change', function () {
        $('#blueimp-gallery').data('fullScreen', $(this).is(':checked'));
    });

    $('#video-gallery-button').on('click', function (event) {
        event.preventDefault();
        blueimp.Gallery([
            {
                title: 'Sintel',
                href: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
                type: 'video/mp4',
                poster: 'http://media.w3.org/2010/05/sintel/poster.png'
            },
            {
                title: 'Big Buck Bunny',
                href: 'http://upload.wikimedia.org/wikipedia/commons/7/75/' +
                    'Big_Buck_Bunny_Trailer_400p.ogg',
                type: 'video/ogg',
                poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/7/70/' +
                    'Big.Buck.Bunny.-.Opening.Screen.png/' +
                    '800px-Big.Buck.Bunny.-.Opening.Screen.png'
            },
            {
                title: 'Elephants Dream',
                href: 'http://upload.wikimedia.org/wikipedia/commons/transcoded/8/83/' +
                    'Elephants_Dream_%28high_quality%29.ogv/' +
                    'Elephants_Dream_%28high_quality%29.ogv.360p.webm',
                type: 'video/webm',
                poster: 'http://upload.wikimedia.org/wikipedia/commons/thumb/9/90/' +
                    'Elephants_Dream_s1_proog.jpg/800px-Elephants_Dream_s1_proog.jpg'
            },
            {
                title: 'LES TWINS - An Industry Ahead',
                href: 'http://www.youtube.com/watch?v=zi4CIXpx7Bg',
                type: 'text/html',
                youtube: 'zi4CIXpx7Bg',
                poster: 'http://img.youtube.com/vi/zi4CIXpx7Bg/0.jpg'
            },
            {
                title: 'KN1GHT - Last Moon',
                href: 'http://vimeo.com/73686146',
                type: 'text/html',
                vimeo: '73686146',
                poster: 'http://b.vimeocdn.com/ts/448/835/448835699_960.jpg'
            }
        ], $('#blueimp-gallery').data());
    });



});
