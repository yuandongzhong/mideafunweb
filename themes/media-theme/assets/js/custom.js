function switch_wells() {
	if ($(window).width() <= 767) {
		$('.turn-to-well').removeClass('turn-to-well').addClass('well targeted-well');
	} else {
		$('.targeted-well').removeClass('targeted-well well').addClass('turn-to-well');
	}
}
// home & tech pages
function trigger_video() {
	if ($('#video-src')[0].paused == false)
		$('#video-src').trigger('pause');
	else {
		$('#video-text-block').hide();
		$('#video-src').trigger('play');
	}
}
// fun page
function screens_rotate() {
	var target = $('#screen-rotator img:visible');
	target.fadeOut(1500);
	if (!target.next().length)
		$('#screen-rotator img').first().fadeIn(1500);
	else
		target.next().fadeIn(1500);
}
// design page
function design_banners_rotate() {
	var target = $('#small-screen-banners img:visible');
	target.fadeOut(1500);
	target.css("position", "absolute");
	if (!target.next().length) {
		$('#small-screen-banners img').first().fadeIn(1500);
		$('#small-screen-banners img').first().css("position", "static");
	} else {
		target.next().fadeIn(1500);
		target.next().css("position", "static");
	}
}
function panel_switch() {
	$('.circular').mouseenter(function () {
		$(this).addClass('active');
		panels_rotate($(this).attr('data-order'));
	});

	$('.circular').mouseleave(function () {
		$(this).removeClass('active');
	});
}
function panels_rotate(index) {
	target = $('#panel-divs .panel-image');
	target.css("position", "absolute");
	target.fadeOut(500);
	target = $('#panel-divs .panel-image').eq(index);
	target.css("position", "static");
	target.fadeIn(500);
}
// home page
function bullet_click() {
	var target = $('.domain-dot.active');
	target.removeClass('active');
	if (!target.next().length)
		$('.domain-dot').first().click();
	else
		target.next().click();
}
function change_domain_pic(id) {
	$(".domain-pic").fadeOut(1000);
	$(".domain-pic-" + id).fadeIn(1000);
	$(".domain-dot").removeClass('active');
	$(".domain-dot-" + id).addClass('active');
}