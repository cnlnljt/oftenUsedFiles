$(document).ready(function() {
// setting the tabs in the sidebar hide and show, setting the current tab
	$('div.tabbed div').hide();
	$('div.t1').show();
	$('#home-categories div.post').show();
	$('#home-categories div.entry').show();
	$('#home-categories div.c').hide();
	$('#home-categories div.c1').show();
	$('div.tabbed ul.tabs li.t1 a').addClass('tab-current');
	$('div.tabbed ul.tabs li.c1 a').addClass('tab-current');
	$('div.tabbed ul li a').css('cursor', 'pointer');

// SIDEBAR TABS
$('.tabs-block div.tabbed ul.tabs li a').click(function(){
	var thisClass = this.className.slice(0,2);
	$('.tabs-block div.tabbed div').hide();
	$('.tabs-block div.' + thisClass).show();
	$('.tabs-block div.tabbed ul.tabs li a').removeClass('tab-current');
	$(this).addClass('tab-current');
	});

// CATEGORY TABS
$('#home-categories div.tabbed ul.tabs li a').click(function(){
	var categoryClass = this.className.slice(0,2);
	$('#home-categories div.tabbed div.c').hide();
	$('#home-categories div.' + categoryClass).show();
	$('#home-categories div.tabbed ul.tabs li a').removeClass('tab-current');
	$(this).addClass('tab-current');
	});
});