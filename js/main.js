// SMOOTH SCROLLING
$('.navbar a, .btn, #top').on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
                scrollTop: $(hash).offset().top - 100
            },
            900
        );
    }
});
// TEAM CAROUSEL
$('.carousel.carousel-multi-item.v-2 .carousel-item').each(function() {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < 3; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
    }
});