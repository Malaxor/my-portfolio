new WOW().init();
// add and remove extra small column width class for project images
$(window).on('load, resize', function() {
	const innerWidth = window.innerWidth;

	if(innerWidth < 768 && innerWidth > 600) {
		$('.media-change').addClass('col-xs-6');
	}
	else {
		$('.media-change').removeClass('col-xs-6');
	}
});
/************ Navigation ***********/
// Show/Hide transparent black navi
$(window).scroll(() => {
	if($(this).scrollTop() < 50) {
		$("nav").removeClass("custom-nav");
		// hide back to top button
		$("#back-to-top").fadeOut();
	}
	else {
		$("nav").addClass("custom-nav");
		// reveal back to top button
		$("#back-to-top").fadeIn();
	}
});	
// smooth scrolling
$("a.smooth-scroll").click(function(event) {
	event.preventDefault();
	var section = $(this).attr("href");

	$("html, body").animate({
		scrollTop: $(section).offset().top -60
	}, 1250, "easeInOutExpo");
});
// close mobile menu on section click
$(".navbar-collapse ul li a").on("click touch", function() {
	$(".navbar-toggle").click();
});

/******************** Content Box **************************/ 
function headingMouseEnterLeave(heading, style) {
	heading.addEventListener('mouseenter', () => {
		Object.assign(style, { width: "80px", transition: "width .3s ease" });
	});
	heading.addEventListener('mouseleave', () => {
		Object.assign(style, { width: "50px" });
	});
}
const headings = document.querySelectorAll('.event-listener h3');

headings.forEach(heading => {
	const headingUnderlineStyle = heading.nextElementSibling.style;
	headingMouseEnterLeave(heading, headingUnderlineStyle);
});