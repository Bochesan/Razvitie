$(document).ready(function(){

	$('.main_menu_btn').click(function(){
		$('.header').addClass('active');
		return false;
	});

	$('.open_fixmenu').click(function(){
		$('.header').addClass('fixed');
		$('.header').addClass('active');
		return false;
	});

	$('.close_main_menu').click(function(){
		$('.header').removeClass('active');
		return false;
	});

	$('#main_slider .main_slider .inner_main_slider').bxSlider({
		pager: false,
		touchenable: true
	});

	$('#second_slider .second_slider').bxSlider({
		pager: false,
		touchenable: true
	});

	$('#slider_logos .slider_logos').bxSlider({
		pager: false,
		touchenable: true
	});

	$(window).scroll(function(){
		if($(this).scrollTop()>800){
			$('.header').addClass('fixed');
		}
		else if ($(this).scrollTop()<800){
		    $('.header').removeClass('fixed');
		}
	});

	$(".inner_main_menu").mCustomScrollbar();

	coopPage();

	$(window).resize(function(){
			heightMenu(0);
	});

	$("#form_company").selectbox();

	tabsDistrictPreload();

	$('.district_button').click(function(){
		var idBtn = $(this).attr('id');
		$('.district_button').removeClass('active');
		$(this).addClass('active');
		tabsDistrict(idBtn);
		heightMenu(0);
		return false;
	});


	heightMenu(0);
});

function heightMenu(h) {
	var heightRightSide = $('.right_side').height();
	var h;
	var heightMenu = +heightRightSide + h;
	if ($(window).width() > 1120) {
		$('.header').height(heightMenu - 70);
	}
	else {
		$('.header').css({'height' : 'auto'});
	}
}

function coopPage() {
	if ($('.cooperation').hasClass('cooperation_page')) {
		heightMenu(30);
	}
	else return false;
}

function tabsDistrict(idBtn) {
	$('.table_body').hide();
	$('.table_body').each(function(){
		var indexTBody = 'district-' + $(this).attr('data-index');
		if (indexTBody == idBtn) {
			$(this).show();
		}
	});
}

function tabsDistrictPreload(){
	var idBtn = $('.district_button.active').attr('id');
	tabsDistrict(idBtn);
}